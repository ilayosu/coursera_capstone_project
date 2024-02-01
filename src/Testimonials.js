import Testimonial from "./Testimonial"
import comments_data from "./Comments.json";
import "@fontsource/markazi-text";
import '@fontsource/karla';
import "./Testimonials.css";

export default function Testimonials() {
    return (
        <section className="testimonial_grid">
            <div className="testimonials_text"><p>Testimonails</p></div>
            <div className="margin_wrapper">
                {comments_data.map((item) => (
                    <Testimonial rating={item.Rating} review={item.Review} />
                ))}
            </div>
        </section>
    )
}