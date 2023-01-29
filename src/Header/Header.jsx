import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://th.bing.com/th/id/OIP.WbPie4u7yZ8Pht7AEY67HwHaEK?pid=ImgDet&rs=1"
        alt="logo"
      />
      <ul className="left-side-list">
        <li>
          <a href="#address">
            <span>Hello </span>
            <br></br>Select your address
          </a>
        </li>
      </ul>
      <input
        type="text"
        id="searchbox"
        className="search"
        placeholder="bestseller books"
      />
      <ul className="right-side-list">
        <li>
          <a href="#en">EN</a>
        </li>
        <li>
          <a href="#account">
            <span>Hello, sign in </span>Account & Lists
          </a>
        </li>
        <li>
          <a href="#returns">Returns & Orders</a>
        </li>
        <li>
          <a href="#cart">Cart</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
