import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import './styles.css';
import Footer from './components/Footer/Footer'
import uuid from "react-uuid";




const resume = [
  {
    id: uuid(),
    title: "Covid-19 Tracker",
    description: "The effectiveness of digital proximity tracking tools depends on a high coverage and utilization rate among the population. Trust is a central issue, with laws on privacy and data security varying drastically throughout the world. “We must ensure that key elements of privacy are not abused or disregarded in the name of public health response for emergencies",
    github: "https://github.com/mightyFZeus/Covid-19.git",
    live: "https://covidcorona19v1.netlify.app",
    stack: "React + covid19Mathro + Material ui"
  },
  {
    id: uuid(),
    title: "E-commerce Shop",
    description: "The effectiveness of digital proximity tracking tools depends on a high coverage and utilization rate among the population. Trust is a central issue, with laws on privacy and data security varying drastically throughout the world. “We must ensure that key elements of privacy are not abused or disregarded in the name of public health response for emergencies ",
    github: "https://github.com/mightyFZeus/New-shoppingCart.git",
    live: "https://shopcartb.netlify.app/",
    stack: "React + Commercejs + stripe + MUI"
  },
  {
    id: uuid(),
    title: "Todo App",
    description: "The effectiveness of digital proximity tracking tools depends on a high coverage and utilization rate among the population. Trust is a central issue, with laws on privacy and data security varying drastically throughout the world. “We must ensure that key elements of privacy are not abused or disregarded in the name of public health response for emergencies",
    github: "https://github.com/mightyFZeus/todolist.git",
    live: "https://todoreactme.netlify.app/",
    stack: "React"
  },
  {
    id: uuid(),
    title: "insure Me",
    description: "The effectiveness of digital proximity tracking tools depends on a high coverage and utilization rate among the population. Trust is a central issue, with laws on privacy and data security varying drastically throughout the world. “We must ensure that key elements of privacy are not abused or disregarded in the name of public health response for emergencies",
    github: "https://github.com/mightyFZeus/insure-page.git",
    live: "https://insureme.netlify.app",
    stack: "React + Styled Components"
  },
  {
    id: uuid(),
    title: "Expense Tracker",
    description: "The effectiveness of digital proximity tracking tools depends on a high coverage and utilization rate among the population. Trust is a central issue, with laws on privacy and data security varying drastically throughout the world. “We must ensure that key elements of privacy are not abused or disregarded in the name of public health response for emergencies",
    github: "https://github.com/mightyFZeus/expense-tarcker.git",
    live: "expense-trackerb.netlify.app",
    stack: "React "
  },
  {
    id: uuid(),
    title: "Cryptocurrency App Tracker",
    description: "The effectiveness of digital proximity tracking tools depends on a high coverage and utilization rate among the population. Trust is a central issue, with laws on privacy and data security varying drastically throughout the world. “We must ensure that key elements of privacy are not abused or disregarded in the name of public health response for emergencies",
    github: "https://github.com/mightyFZeus/crypto-app.git",
    live: "crypto-appb.netlify.app",
    stack: "React "
  }
];


function App() {
  
  return (

    
        <div className="App">
         
          <Header />
          <About />
          <Skills />
          <Projects resume={resume} />
          
          <Contact />
          <Footer />
          
          
        </div>
    
   
  );
}

export default App;
