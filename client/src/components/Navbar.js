import React from 'react'
import logo from "../img/logo.png";
import cart from "../img/shopping-cart.png";

const Navbar = props => {

    const { productsCount, totalPrice } = props;

    return (
        <header>
            <nav className="nav">
                <a href="/" className="nav__logo">
                    <img src={logo} alt="Logo" className="nav__logo-img"/>
                    <div className="nav__name">
                        <span>Ez</span>shop
                    </div>
                </a>
                <div className="nav__cart">
                    <div className="nav__cart-amount">
                        ${totalPrice}
                    </div>
                    <div className="nav__cart-items">
                        <img src={cart} alt="Cart" className="nav__cart-img"/>
                        <div className="nav__items-cart">
                            <p className="nav__cart-quantity">{productsCount}</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;