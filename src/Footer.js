import "@fontsource/markazi-text";
import '@fontsource/karla';
import "./Footer.css";
import photo from "./images/restauranfood.jpg"
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="footer_grid">
                <img src={photo} className="footer_photo"/>
                <ul className="footer_nav_list">
                        <p>Doormat Navigation</p>
                        <li><Link className="no_deco_link" to="/">Home</Link></li>
                        <li>About</li>
                        <li>Menu</li>
                        <li><Link className="no_deco_link" to="/reservation-screen">Reservations</Link></li>
                        <li>Order Online</li>
                        <li>Login</li>
                </ul>
                <ul className="footer_contact_list">
                        <p>Contact</p>
                        <li>adress</li>
                        <li>phone number</li>
                        <li>email</li>
                </ul>
                <ul className="footer_socials_list">
                        <p>Contact</p>
                        <li>adress</li>
                        <li>phone number</li>
                        <li>email</li>
                </ul>
            </div>
        </footer>
    )
}