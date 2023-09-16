import "./style.css";
import Car from "../../assets/car.svg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const TopNav = () => {
  return (
    <>
      <nav className="top-nav ff-work-sans fs-100">
        <div className="left-top-nav">
          <ul className="nav-items">
            <li className="nav-item">
              <img src={Car} alt="Car Icon" className="car-icon" />
            </li>
            <li className="nav-item">Free Delivery</li>
            <li className="nav-item line"></li>
            <li className="nav-item">Return Policy</li>
          </ul>
        </div>
        <div className="right-top-nav">
          <ul className="nav-items">
            <li className="nav-item">Login</li>
            <li className="nav-item">Follow Us</li>
            <li className="nav-item">
              <FaFacebookF />
            </li>
            <li className="nav-item">
              <FaLinkedinIn />
            </li>
            <li className="nav-item">
              <FaTwitter />
            </li>
            <li className="nav-item">
              <FaInstagram />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
