import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import './styles.css';
import uuid from "react-uuid";
const resume = [
  {
    id: uuid(),
    title: "Covid-19 Tracker",
    description: "Get the latstest Update on the corona virus around the world",
    github: "https://github.com/mightyFZeus/Covid-19.git",
    live: "https://covidcorona19v1.netlify.app",
    stack: "React + covid19Mathro + Material ui"
  },
  {
    id: uuid(),
    title: "E-commerce Shop",
    description: "Buy products on an online store ",
    github: "https://github.com/mightyFZeus/New-shoppingCart.git",
    live: "https://shopcartb.netlify.app/",
    stack: "React + Commercejs + stripe + Material ui"
  },
  {
    id: uuid(),
    title: "Todo App",
    description: "Put and mark completed Tasks",
    github: "https://github.com/mightyFZeus/todolist.git",
    live: "https://todoreactme.netlify.app/",
    stack: "React"
  },
  {
    id: uuid(),
    title: "insure Me",
    description: "Just a landing Page",
    github: "https://github.com/mightyFZeus/insure-page.git",
    live: "https://insureme.netlify.app",
    stack: "React + Styled Components"
  },
  {
    id: uuid(),
    title: "Expense Tracker",
    description: "Keep tabs on your income and expenses",
    github: "https://github.com/mightyFZeus/expense-tarcker.git",
    live: "expense-trackerb.netlify.app",
    stack: "React "
  },
  {
    id: uuid(),
    title: "Expense Tracker",
    description: "Keep tabs on your income and expenses",
    github: "https://github.com/mightyFZeus/expense-tarcker.git",
    live: "expense-trackerb.netlify.app",
    stack: "React "
  }
];


function App() {
  return (
    <div className="App">
      <Header />
      <About />
     <Projects resume={resume} />
     <Skills />
     <Contact />
     
    </div>
  );
}

export default App;
