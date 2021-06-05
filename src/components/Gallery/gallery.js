import React, { useState } from "react";
import "./gstyle.css";
import Menu from "../Data/data";


const GalleryReact = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };

  return (
    <div id="gallery">
      <h1 className="mt-5 text-center main-heading">Gallery</h1>
      <hr />

      <div className=" container">
        <div className=" d-flex justify-content-around">
          <button className="btn btn-outline butt" style={{border: "2px solid"}} onClick={() => filterItem("part1")}>
            Car
          </button>
          <button className="btn btn-outline butt " style={{border: "2px solid"}} onClick={() => filterItem("part2")}>
           Animal
          </button>
          <button className="btn btn-outline butt" style={{border: "2px solid"}} onClick={() => filterItem("part3")}>
            Model
          </button>
          <button className="btn btn-outline butt" style={{border: "2px solid"}} onClick={() => filterItem("part4")}>
            Food
          </button>
        </div>
      </div>

      {/* my main items section  */}
      <div className="mt-5">
        <div className="row ">
          <div className="col-12 ">
            <div className="row">
               {items.map((elem) => {
                const { id, name, image, category } = elem;

                return (
                  <div className=" mt-4 ">
                    <div className="row  ml-1">
                      <div className="hover01 column im">
                        <figure >
                          <img src={image} className="img-fluid " />
                        </figure>
                      </div>
                    </div>
                    <div class="">
                      
                    </div>
                  </div>
                );
              })}   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryReact;
