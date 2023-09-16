import { useState } from "react";
import "./style.css";
import { IoClose } from 'react-icons/io5';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link , NavLink} from "react-router-dom";
import Star from '../../assets/Star1.png';

const Navbar = () => {

  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Our Products", id: "product"},
    { name: "Contact Us", id: "contact" },
  ];

  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="top-navbar">
          {/* Shopkart logo */}
          <Link to="/">
            <h1 className="logo fs-500 ff-poppins ">ShopKart</h1>
          </Link>

          {/* mobile toggeler button */}
          <button
            className="mobile-toggler"
            onClick={() => setIsNavActive(!isNavActive)}
          >
            {isNavActive ? (
              <IoClose className="mobile-toggler-icon" />
            ) : (
              <RxHamburgerMenu className="mobile-toggler-icon" />
            )}
          </button>

              {/* nav links */}
              <ul className="desktop-links ff-poppins fs-300">
                <li className="nav-link">WISHLIST(0)</li>
                <li className="nav-link">BAG(0)</li>
              </ul>

              {/* star on line */}
              <img className="star" src={Star} />

        </div>

        <div className="bottom-navbar">
          {/* navbar links */}
          <ul className={`nav-links ${isNavActive ? "show-nav" : "hide-nav"}`}>
            {navbar.map((link) => {
              return (
                <li className="nav-link ff-poppins fs-300" key={link.id}>
                  <NavLink to="/">{link.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
