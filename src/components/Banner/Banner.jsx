import React from "react";
import "./Banner.css";
import { FaAngleDown } from "react-icons/fa6";
import pot from "../../assets/pot.png";
import statue from "../../assets/statue.png";
function Banner() {
  return (
    <>
      <div className="main">
        <div className="submain">
          <div className="circle"></div>
          <div className="ellipse"></div>
          <div className="image-pot">
            <img src={pot} alt="#" />
          </div>
          <div className="image-statue">
            <img src={statue} alt="#" />
          </div>
          <div className="main-content">
            Homegrown & Handcrafted for
            <br />
            you from INDIA
          </div>
          <div className="sub-content">
            Choose from a wide range of products for you and your
            <br />
            businesses.All at affordable prices.
          </div>
          <div className="searchbar">
            <input type="text" placeholder="Search..." className="search" />
            <div className="category">
              All Category
              <span>
                <FaAngleDown />
              </span>
            </div>
            <div className="searchbtn">
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="main">
        <div className="submain">
          <div className="content">
            <div className="main-content">
              Homegrown & Handcrafted for
              <br />
              you from INDIA
            </div>
            <div className="sub-content">
              Choose from a wide range of products for you and your
              <br />
              businesses.All at affordable prices.
            </div>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." className="search" />
            <div className="tag">
              <span>
                All Category <FaAngleDown />
              </span>
              <span>
                <button>Search</button>
              </span>
            </div>
          </div>
        </div>
        <div className="image-pot">
          <img src={pot} alt="#" />
        </div>
        <div className="imgae-statue">
          <img src={statue} alt="#" />
        </div>
      </div> */}
    </>
  );
}

export default Banner;
