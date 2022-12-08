import './App.css';
import PreNavbar from './components/preNavbar';
import NavBar from "./components/NavBar.js";
import {BrowserRouter as Router, Route} from "react-router-dom";
import data from "./data/data.json"
import Slider from "./components/Slider.js"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js" 
import HotAccessories from "./components/HotAccessories.js"


function App() {
  // console.log(data.starProduct)
  return (
    <Router>
      <PreNavbar/>
      <NavBar/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/> 
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>
      <Route exact path='/music'>
          <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessories.musicCover}/>
      </Route>
    </Router>
  );
}

export default App;
