import React, { useState } from "react";
import { Amazon } from "../data";
import { Flipkart } from "../data";
import { Gem } from "../data";
import Product from "./Product";
import SearchBar from "./Searchbar";

export const Compare = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="mt-36">
      <SearchBar setSearch={setSearch} />
      <div className="flex i">
        <div>
          <div style={{display: "flex",justifyContent: "center",alignItems: "center",}}>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/amazon-logo-7256461-5915024.png?f=webp"
              alt="Amazon Logo"
              style={{ maxWidth: "20%", maxHeight: "20%" }}
            />
          </div>
          {Amazon.filter((prd) =>
            search.toLowerCase() === ""
              ? true
              : prd.name.toLowerCase().includes(search.toLowerCase())
          ).map((prd, index) => (
            <Product {...prd} key={index} />
          ))}
        </div>
        <div>
        <div style={{display: "flex",justifyContent: "center",alignItems: "center",}}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiMXzXU8a9jB7Q6cpNWmUcFWRK4QAE4SGxbQ&usqp=CAU"
              alt="Flipkart Logo"
              style={{ maxWidth: "20%", maxHeight: "20%" }}
            />
          </div>
          {Flipkart.filter((prd) =>
            search.toLowerCase() === ""
              ? true
              : prd.name.toLowerCase().includes(search.toLowerCase())
          ).map((prd, index) => (
            <Product {...prd} key={index} />
          ))}
        </div>
        <div>
        <div style={{display: "flex",justifyContent: "center",alignItems: "center",}}>
            <img
              src="public/Images/GeM.png"
              alt="Flipkart Logo"
              style={{ maxWidth: "50%", maxHeight: "50%" }}
            />
          </div>
          {Gem.filter((prd) =>
            search.toLowerCase() === ""
              ? true
              : prd.name.toLowerCase().includes(search.toLowerCase())
          ).map((prd, index) => (
            <Product {...prd} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compare;
