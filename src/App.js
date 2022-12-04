import './App.css';
import PreNavbar from './components/preNavbar';
import NavBar from "./components/NavBar.js";
import {BrowserRouter as Router} from "react-router-dom";
import data from "./data/data.json"
import Slider from "./components/Slider.js"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"


function App() {
  return (
    <Router>
      <PreNavbar/>
      <NavBar/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/> 
      <Heading text="STAR PRODUCTS"/>
    </Router>
  );
}

export default App;
