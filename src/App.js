import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import './styles.css';
import Footer from './components/Footer/Footer'
import uuid from "react-uuid";
import Helmet from 'react-helmet'
import favicon from './assets/images/favicon.ico'
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios'


import Test from './components/Test/Test'



const resume = [
  {
    id: uuid(),
    title: "Covid-19 Tracker",
    description: "The effectiveness of digital proximity tracking tools depends on a high coverage and utilization rate among the population. Trust is a central issue, with laws on privacy and data security varying drastically throughout the world. “We must ensure that key elements of privacy are not abused or disregarded in the name of public health response for emergencies",
    github: "https://github.com/mightyFZeus/Covid-19.git",
    live: "https://covidcorona19v1.netlify.app",
    stack: "React + covid19Mathro + Material ui",
    githubimage: <GitHubIcon />,
    eye: <VisibilityIcon />
  },
  {
    id: uuid(),
    title: "E-commerce Shop",
    description: "The effectiveness of digital proximity tracking tools depends on a high coverage and utilization rate among the population. Trust is a central issue, with laws on privacy and data security varying drastically throughout the world. “We must ensure that key elements of privacy are not abused or disregarded in the name of public health response for emergencies ",
    github: "https://github.com/mightyFZeus/New-shoppingCart.git",
    live: "https://shopcartb.netlify.app/",
    stack: "React + Commercejs + stripe + MUI",
    githubimage: <GitHubIcon />,
    eye: <VisibilityIcon />
  },
  {
    id: uuid(),
    title: "Todo App",
    description: "The effectiveness of digital proximity tracking tools depends on a high coverage and utilization rate among the population. Trust is a central issue, with laws on privacy and data security varying drastically throughout the world. “We must ensure that key elements of privacy are not abused or disregarded in the name of public health response for emergencies",
    github: "https://github.com/mightyFZeus/todolist.git",
    live: "https://todoreactme.netlify.app/",
    stack: "React",
    githubimage: <GitHubIcon />,
    eye: <VisibilityIcon />
  },
  {
    id: uuid(),
    title: "insure Me",
    description: "The effectiveness of digital proximity tracking tools depends on a high coverage and utilization rate among the population. Trust is a central issue, with laws on privacy and data security varying drastically throughout the world. “We must ensure that key elements of privacy are not abused or disregarded in the name of public health response for emergencies",
    github: "https://github.com/mightyFZeus/insure-page.git",
    live: "https://insureme.netlify.app",
    stack: "React + Styled Components",
    githubimage: <GitHubIcon />,
    eye: <VisibilityIcon />
  },
  {
    id: uuid(),
    title: "Expense Tracker",
    description: "The effectiveness of digital proximity tracking tools depends on a high coverage and utilization rate among the population. Trust is a central issue, with laws on privacy and data security varying drastically throughout the world. “We must ensure that key elements of privacy are not abused or disregarded in the name of public health response for emergencies",
    github: "https://github.com/mightyFZeus/expense-tarcker.git",
    live: "https://expense-trackerb.netlify.app",
    stack: "React ",
    githubimage: <GitHubIcon />,
    eye: <VisibilityIcon />
  },
  {
    id: uuid(),
    title: "Cryptocurrency Tracker",
    description: "The effectiveness of digital proximity tracking tools depends on a high coverage and utilization rate among the population. Trust is a central issue, with laws on privacy and data security varying drastically throughout the world. “We must ensure that key elements of privacy are not abused or disregarded in the name of public health response for emergencies",
    github: "https://github.com/mightyFZeus/crypto-app.git",
    live: "https://crypto-appb.netlify.app",
    stack: "React ",
    githubimage: <GitHubIcon />,
    eye: <VisibilityIcon />
  }
];



function App() {    
    return(
      <div className="App">
      <Helmet>
        <title>Bolarin Olabisi</title>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>
     
      <Header />
      <About />
      <Skills />
      <Projects resume={resume} />
      
      <Contact />
      <Footer />
      {/* <Test />   */}
    </div>
    )      
      
   
 
}

export default App;
