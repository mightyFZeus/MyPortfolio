import React, {useState, useEffect} from 'react'
import {Grid, Card} from '@material-ui/core'

const Test = () => {
  const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    //     set search query to empty string
    const [q, setQ] = useState("");
    //     set search parameters
    //     we only what to search countries by capital and name
    //     this list can be longer if you want
    //     you can search countries even by their population
    // just add it to this array
    const [searchParam] = useState(["capital", "name"]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    console.log(result)
                },

                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
                
            );
    }, []);

    /* here we create a function 
//     we filter the items
// use array property .some() to return an item even if other requirements didn't match
    */
    function search(items) {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }

    if (error) {
        return <>{error.message}</>;
    } else if (!isLoaded) {
        return <>loading...</>;
    } else {
      return (
        <div style={{alignContent:'center'}}>
            <div className="search-wrapper">
                <label htmlFor="search-form">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input"
                        placeholder="Search Countries..."
                        value={q}
                        /* 
                        // set the value of our useState e
                        //  anytime the user types in the search box
                        */
                        onChange={(e) => setQ(e.target.value)}
                    />
                    
                </label>
            </div>
            <ul className="card-grid">
                {search(items).map((item) => (
                   <Grid style={{padding:'20px', marginBottom:'20px'}} component={Card}>
                       <div className="card" key={item.callingCodes}>
                            <div className="card-image">
                                <img style={{width:'150px'}} src={item.flag} alt={item.name} />
                            </div>
                            <div className="card-content">
                                <h2 className="card-name">{item.name}</h2>
                                <p>Population:{item.population.toLocaleString()}</p>
                                <p>Region:{item.region}</p>
                                <p>Capital: {item.capital}</p>
                                <p>Neighboring Countries:</p><span>{item.borders.toLocaleString()}</span>
                                <p>Sub Region:{item.subregion}</p>
                                
                                   
                                      
                                    
                               
                            </div>
                        </div>
                   </Grid>
                   
                ))}
            </ul>
        </div>
    );
}
}

export default Test
