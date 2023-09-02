import { FC, useState } from "react"

import "./Header.scss"

import logo from "../../../assets/images/logo.png"
import searchIcon from "../../../assets/images/search-icon.svg"
import cartIcon from "../../../assets/images/cart-icon.svg"
import { Link } from "react-router-dom"

const Header: FC = () => {
  const [open, setOpen] = useState(false)

  const handleClick = (): void => {
    open ? setOpen(false) : setOpen(true)
  }

  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo">
          <img src={logo} alt="" />
        </a>
        <nav className="header__menu menu">
          <div className={`menu__body ${open ? "_active" : ""}`}>
            <a href="#" className="header__search">
              <img src={searchIcon} className="header__search-icon" />
            </a>
            <ul className="menu__list">
              <li className="menu__list-item">
                <Link to="/" className="menu__list-link">
                  Home
                </Link>
              </li>
              <li className="menu__list-item">
                <Link to="/product" className="menu__list-link">
                  Product
                </Link>
              </li>
              <li className="menu__list-item">
                <a href="#" className="menu__list-link">
                  Account
                </a>
              </li>
              <li className="menu__list-item">
                <a href="#" className="menu__list-link">
                  Menu
                </a>
              </li>
            </ul>
            <a href="#" className="header__cart">
              <img src={cartIcon} className="header__cart-icon" />
            </a>
          </div>
          <div
            className={`menu__icon ${open ? "_active" : ""}`}
            onClick={() => handleClick()}
          >
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
