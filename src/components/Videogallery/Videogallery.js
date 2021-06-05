import React, { useState } from "react";
import "./style.css";
import ReactPlayer from "react-player";
import vGallery from "../Data/Vdata";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Carousel from "react-elastic-carousel";
import { ToggleOffRounded } from "@material-ui/icons";

const Videogallery = () => {




  const toggle = (e) => {
    e.preventDefault();
    var trailer = document.querySelector(".trailer");
    trailer.classList.toggle("active");
    var video = document.querySelector(".video");
    trailer.classList.toggle(".active");

    video.currentTime = 0;
  };
  
  const [show , setShow] = useState(true)
  const [items, setItems] = useState(vGallery);

  const filterItem = (categItem) => {
    const updatedItems = vGallery.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };

  return (
    <div className="mb-4" id="video">
      <div className="container vhead text-center">
        <h3 className="">Video Gallery</h3>
        <hr />
      </div>

      {/* <div className=" container">
        <div className=" d-flex justify-content-around">
          <button className="btn btn-outline butt" style={{border: "2px solid"}} onClick={() => filterItem("part1")}>
            Part 1
          </button>
          <button className="btn btn-outline butt " style={{border: "2px solid"}} onClick={() => filterItem("part2")}>
           Part2
          </button>
          <button className="btn btn-outline butt" style={{border: "2px solid"}} onClick={() => filterItem("part3")}>
            Part3
          </button>
          <button className="btn btn-outline butt" style={{border: "2px solid"}} onClick={() => filterItem("part4")}>
            Part4
          </button>
        </div>
      </div> */}

      <div className="container ">
        <div className="row line mx-3">
          {items.map((elem) => {
            const { id, url,src, category } = elem;

            return (
              <div className="vmain">
                <div className="demo-gallery">
                 {show? <li className="vid">
                    <a onClick={toggle}>
                      <img
                        className="img-responsive nik"
                        src={src}
                      />
                      <div className="demo-gallery-poster">
                        <img src="./images/play2.png" />
                      </div>
                    </a>
                  </li>:null}
                  

                </div>
                <div className="trailer">
                  <ReactPlayer
                    url={url}
                    width="100%"
                    height="80%"
                    controls={true}
                    className="video"
                  />
                  <img
                    src="./images/close.png"
                    onClick={toggle}
                    className="close"
                  />
                </div>
              </div>
            );
          })}
        
       </div>
      </div>
      <div className="align-center mbtn">
      <button className="btn btn-lg more" onClick={()=>setShow(true)}>More</button>
      <button className="btn btn-lg hide" onClick={()=>setShow(false)}>Hide</button>
      </div>
    </div>
  );
};
export default Videogallery;
