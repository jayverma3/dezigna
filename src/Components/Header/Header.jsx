import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/dezigna_logo.png";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const location = useLocation();

  const productItems = [
    "Cabinets",
    "Flooring",
    "Countertops",
    "Closets",
    "Tiles",
    "Accessories",
    "Outdoor Kitchen",
    "Appliances",
    "View Product Catalog",
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (path) => (location.pathname === path ? "active" : "");

  useEffect(() => {
    const handleScroll = () => setIsTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const submenuVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className={`header ${isTop ? "header--transparent" : ""}`}>
      <div className="header__logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Dezigna Logo" className="logo" />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="hamburger-line"></div>
        ))}
      </div>

      <nav className="header__nav">
        <ul className={`nav__list ${isMenuOpen ? "open" : ""}`}>
          <li className={`nav__item ${isActive("/")}`}>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li
            className={`nav__item has-submenu ${isActive("/products")}`}
            onMouseEnter={() => setIsSubMenuOpen(true)}
            onMouseLeave={() => setIsSubMenuOpen(false)}
          >
            <Link to="/products" onClick={closeMenu}>
              Products
            </Link>
            <AnimatePresence>
              {isSubMenuOpen && (
                <motion.ul
                  className="submenu"
                  variants={submenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {productItems.map((item) => (
                    <li key={item} className="submenu__item">
                      <Link
                        to={`/products/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        onClick={closeMenu}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className={`nav__item ${isActive("/reviews")}`}>
            <Link to="/reviews" onClick={closeMenu}>
              Reviews
            </Link>
          </li>
          <li className={`nav__item ${isActive("/about")}`}>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
