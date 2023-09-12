import React from "react";
import gamala from "../../assets/gamala.svg";
import "./subbanner.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Frame7 from "../../assets/Frame7.png";
import Frame8 from "../../assets/Frame8.png";
import Frame9 from "../../assets/Frame9.png";
import boxes from "../../assets/boxes.png";
function Subbanner() {
  return (
    <>
      {/* --------------------------------------------SECTION-1--------------------------------- */}

      <div className="section1">
        <div className="text">Categories available -</div>
        <div className="image-section">
          <div className="image-section1">
            <img src={gamala} alt="#" />
            <img src={gamala} alt="#" />
            <img src={gamala} alt="#" />
            <img src={gamala} alt="#" />
            <img src={gamala} alt="#" />
            <img src={gamala} alt="#" />
          </div>
          <div className="image-section2">
            <img src={gamala} alt="#" />
            <img src={gamala} alt="#" />
            <img src={gamala} alt="#" />
            <img src={gamala} alt="#" />
            <img src={gamala} alt="#" />
            <img src={gamala} alt="#" />
          </div>
        </div>
      </div>

      {/* ----------------------------------------------SECTION-2------------------------------------ */}
      <div className="section2">
        <div className="card-1" id="card">
          <div className="maintext">
            Best selling
            <br />
            section
          </div>
          <div className="subtext">
            Easiest way to find
            <br />
            the best selling items
            <br />
            and pick what you
            <br />
            like
          </div>
          <div className="btn">
            <button>
              See More <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="card-2" id="card">
          <img src={Frame7} alt="" />
          <div className="pdt-1">Natural Plants</div>
          <div>1400.00</div>
        </div>
        <div className="card-3" id="card">
          <img src={Frame8} alt="" />
          <div className="pdt-1">Natural Plants</div>
          <div>1400.00</div>
        </div>
        <div className="card-4" id="card">
          <img src={Frame9} alt="" />
          <div className="pdt-1">Natural Plants</div>
          <div>1400.00</div>
        </div>
      </div>

      {/* -----------------------------------------------SECTION-3------------------------------------ */}
      <div className="section3">
        <div className="peela">
          <div className="dabba-1">
            <img src={boxes} alt="#" />
          </div>
          <div className="dabba-2">
            <div className="aalekh">
              Become a Seller and expand your Business!
            </div>
            <div className="kard">
              <div className="kard-1">
                Customers
                <br />
                from all across
                <br />
                the world
              </div>
              <div className="kard-2">
                NO middle-
                <br />
                men Export
                <br />
                Charges
              </div>
              <div className="kard-3">
                Fast and
                <br />
                Easy Delivery
                <br />
                with DNK
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subbanner;
