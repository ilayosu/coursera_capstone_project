import Testimonial from "./Testimonial"
import "@fontsource/markazi-text";
import '@fontsource/karla';
import "./Testimonials.css";

export default function Testimonials() {
    return (
        <section className="testimonial_grid">
            <div className="margin_wrapper">
                <Testimonial rating="5" review="yeah yeah yeah eyah yeah yeah yeahyeah yeha yeah yerha yer hayerhaya ye qfsf sfsfs sfs sfsfs sfsf sfsf sfsf sfsfs sf sf sfss"/>
                <Testimonial rating="4" review="yeah"/>
                <Testimonial rating="5" review="yea"/>
            </div>
        </section>
    )
}