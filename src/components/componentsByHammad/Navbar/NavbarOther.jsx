import React, { useEffect, useState } from "react";
import "../../../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  React.useEffect(() => {
    setActiveLink(location.pathname);
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location,prevScrollPos]);

  

  return (
    <div className={`width-100 navbar_main_navbar_cnt  ${activeLink === '/' ? 'transparent' : 'black_bg'}`} >
      <MainMenu menu={menu} setMenu={setMenu} />

      <div className="res-1440-40 navbar_flex_cnt">
        <Link to="/"><img className="navbar_logo_image_top" src="/images/transparentZRlogo.png" alt="" /></Link>
        <div className="navbar_linker">
          <Link className={`linker_a  ${activeLink === '/' ? 'bold' : ''}`} to="/" >
            Home
          </Link>
          <Link className={`linker_a  ${activeLink === '/products' ? 'bold' : ''}`} to="/products">
            Products
          </Link>
          <Link className={`linker_a  ${activeLink === '/about' ? 'bold' : ''}`} to="/about">
            About
          </Link>
          <Link className={`linker_a  ${activeLink === '/contact' ? 'bold' : ''}`} to="/contact">
            Contact
          </Link>
         
        </div>
        <img
          onClick={() => {
            setMenu(true);
          }}
          className="navbar_menu_icon_button"
          src="/images/menu.png"
          alt=""
        />
      </div>
    </div>
  );
}

// Main Menu Component

const MainMenu = ({ menu, setMenu }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <div className="main_menu_cnt" style={{ left: menu ? "0" : "100%" }}>
      <img
        onClick={() => {
          setMenu(false);
        }}
        className="navbar_menu_icon_button_cross"
        src="/images/cross.png"
        alt=""
      />

      <div className="main_menu_links">
        <Link onClick={()=>{
          setMenu(false)
        }} className={`linker_a  ${activeLink === '/' ? 'bold' : ''}`} to="/">
          Home
        </Link>
        <Link onClick={()=>{
          setMenu(false)
        }} className={`linker_a  ${activeLink === '/products' ? 'bold' : ''}`} to="/products">
          Products
        </Link>
        <Link onClick={()=>{
          setMenu(false)
        }} className={`linker_a  ${activeLink === '/about' ? 'bold' : ''}`} to="/about">
          About
        </Link>
        <Link onClick={()=>{
          setMenu(false)
        }} className={`linker_a  ${activeLink === '/contact' ? 'bold' : ''}`} to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};
