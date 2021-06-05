import React from 'react'
import Caros from './caros'
import Navbar from "../Header/Navbar"
import Gallery from '../Gallery/gallery';
import Videogallery from '../Videogallery/Videogallery';
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Caros />
            <Navbar />
            <Gallery />
            <Videogallery />
            <Footer />
        </div>
    )
}

export default Home;
