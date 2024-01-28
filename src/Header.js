import logo from './images/Logo.svg';
import "./Header.css";
import "@fontsource/markazi-text";
import '@fontsource/karla';

export default function Header() {
  
    return (
        <div className="the_header">
            <img src={logo} className="the_logo"/>
            <nav>
                <ul className="navbar">
                    <li className="home">Home</li>
                    <li className="about">About</li>
                    <li className="the_menu">Menu</li>
                    <li className="reserve">Reservations</li>
                    <li className="order">Order Online</li>
                    <li className="log_in">Log in</li>
                </ul>
            </nav>
        </ div>
    )
}