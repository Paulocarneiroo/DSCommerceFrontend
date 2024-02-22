import { Link } from 'react-router-dom';
import './styles.css';
import CartIcon from '../CartIcon';
import * as cartService from "../../services/cart-service";
import { useState } from 'react';

const HeaderClient = () => {

    const [countIcon, setCountIcon] = useState(0);

    return (
        <>
            <header className="dsc-header-client">
                <nav className="dsc-container">
                    <Link to="/">
                        <h1>PSCommerce</h1>
                    </Link>
                    <div className="dsc-navbar-right">
                        <div className="dsc-menu-items-container">
                            <Link to="/cart">
                                <div className="dsc-menu-item">
                                    <CartIcon />
                                </div>
                            </Link>
                        </div>
                        <Link to="/login">
                            Entrar
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderClient;