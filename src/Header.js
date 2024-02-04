import logo from './images/Logo.svg';
import "./Header.css";
import "@fontsource/markazi-text";
import '@fontsource/karla';
import { Link } from 'react-router-dom';

export default function Header() {
  
    return (
        <div className="the_header">
            <Link to="/" className="no_deco_link logo_link">
            <img src={logo} className="the_logo"/>
            </Link>
            <nav>
                <ul className="navbar">
                    <li className="home"><Link className="no_deco_link" to="/">Home</Link></li>
                    <li className="about">About</li>
                    <li className="the_menu">Menu</li>
                    <li className="reserve"><Link className="no_deco_link" to="/reservation-screen">Reservations</Link></li>
                    <li className="order">Order Online</li>
                    <li className="log_in">Log in</li>
                </ul>
            </nav>
        </ div>
    )
}