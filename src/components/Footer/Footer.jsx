import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="section">
        <div className="section-1">
          <p>Orders</p>
          <p>Order Details</p>
          <p>Track your Order</p>
          <p>Cancel Order</p>
        </div>
        <div className="section-2">
          <p>Privacy & Policy</p>
          <p>Return and Refund</p>
          <p>Order Cancellation</p>
          <p>Reseller's Contracts</p>
        </div>
        <div className="section-3">
          <p>Are you a seller?</p>
          <p>Visit Dashboard</p>
          <p>Verification Status</p>
        </div>
        <div className="section-4"></div>
        <div className="section-5">
          <p>
            This website is owned and operated by Postal Services of
            <br />
            india. We have developed this website that you can
            <br />
            expand you business and you carts!
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
