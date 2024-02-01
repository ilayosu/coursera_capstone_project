import "@fontsource/markazi-text";
import '@fontsource/karla';
import photo1 from "./images/Mario and Adrian A.jpg";
import photo2 from "./images/Mario and Adrian b.jpg";
import "./About.css";


export default function About() {
    return (
        <div className="about_section">
            <section className="text">  
                <section className="about_text">
                    <h1>Little Lemon</h1>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recepies with a modern twist. The restaurant is ran by us, Mario and Adrian. We both have been working as both chefs and managers here ever since the restaurant was made. We hope that you enjoy our hand crafted dishes and will come back again!</p>
                </section>
            </section>
            <div className="photos">
                <img src={photo2} className="image_bottom" />
                <img src={photo1} className="image_top"/>
            </div>
        </div>
    )
}