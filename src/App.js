import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import Home from "./components/Home/home";
import Navbar from "./components/Header/Navbar";
import Gallery from "./components/Gallery/gallery";
import Videos from "./components/Videogallery/Videogallery";
import AboutUs from "./components/AboutUs/About";
import Contact from "./components/Footer/Footer";


import BounceLoader from "react-spinners/BounceLoader";


import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      
      {loading ? (
       <div className="lodar"> <BounceLoader color="pink" loading={loading} size={80}  /> Loading...</div>
      ) : (
        <Home />
      )}

      {/* <Router>
       
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/videos" component={Videos} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        </Switch>
      </Router> */}
      



    </div>
    
  );
}

export default App;
