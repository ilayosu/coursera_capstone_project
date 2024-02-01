import "@fontsource/markazi-text";
import '@fontsource/karla';
import "./Footer.css";
import photo from "./images/restauranfood.jpg"

export default function Footer() {
    return (
        <footer>
            <div className="footer_grid">
                <img src={photo} className="footer_photo"/>
                <ul className="footer_nav_list">
                        <p>Doormat Navigation</p>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
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