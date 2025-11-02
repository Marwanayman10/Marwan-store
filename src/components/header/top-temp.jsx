import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "/img/logoo.png";

import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./header.css";
import { CartContext } from "../context/CartContext";
import SearchBox from "./SearchBox";

const Topheader = () => {
  const { cartItems, favorites } = useContext(CartContext);
  return (
    <div className="Top_header">
      <div className="container">
        <Link className="logo" to="/">
          <img src={logo} alt="" />
        </Link>

        <SearchBox />

        <div className="header_icons">
          <div className="icons">
            <Link to="/favorites">
              <FaRegHeart />
              <span className="count">{favorites.length}</span>
            </Link>
          </div>
          <div className="icons">
            <Link to={"/cart"}>
              <TiShoppingCart />
              <span className="count">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topheader;
