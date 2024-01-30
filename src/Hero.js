import photo from "./images/restauranfood.jpg"
import "./Hero.css";
import "@fontsource/markazi-text";
import '@fontsource/karla';

export default function Hero() {
    return (
        <div className="hero_section">
            <section className="text">
                <section className="real_text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recepies with a modern twist</p>
                    <button>Reserve a Table</button>
                </section>
                <div className="background">

                </div>
            </section>
            <div className="photo">
                <img src={photo} className="the_image"/>
            </div>
        </div>
    )
}