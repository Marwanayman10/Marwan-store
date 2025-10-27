import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logoo.png";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import './header.css'
import { CartContext } from "../context/CartContext";

const Topheader = () => {

  const {cartItems} = useContext(CartContext)
  return (
    <div className="Top_header">
      <div className="container">
        <Link className="logo" to="/">
          <img src={logo} alt="" />
        </Link>
        <form action="" className="search_box">
          <input
            type="text"
            name="search"
            id="serach"
            placeholder="serach for products"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>

        <div className="header_icons">
          <div className="icons">
            <FaRegHeart />
            <span className="count">0</span>
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
