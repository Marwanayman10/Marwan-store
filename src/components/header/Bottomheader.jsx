import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

const Bottomheader = () => {
  const location = useLocation()
  const [categories, setcategories] = useState([]);

  const [isCategoryOpen,setisCategoryOpen] =useState(false)

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setcategories(data));
  }, []);


  return (
    <div className="btm_header">
      <div className="container">
        <nav className="nav">

          <div className="category_nav">
          <div className="category_btn" onClick={()=> setisCategoryOpen(!isCategoryOpen)}>
            <IoMdMenu />
            <p>Browse Category</p>
            <IoMdArrowDropdown />
          </div>

          <div className={`category_nav_list ${isCategoryOpen ? "active" : ""} `}>
            {categories.map((category) => (
              <Link  key={category.slug} to={category.slug}>{category.name}</Link>
            ))}
          </div>

          </div>

          <div className="nav_links">
            {NavLinks.map((item) => (
              <li key={item.link} className={location.pathname === item.link ? "active" : ""}><Link to={item.link}>{item.title}</Link></li>
            
            ))}
          </div>
        </nav>

        <div className="sign_regs_icon">
          <Link to="/">
            <PiSignInBold />
          </Link>
          <Link to="/">
            <FaUserPlus />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bottomheader;
