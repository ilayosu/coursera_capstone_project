import { useState } from "react";
import { useEffect } from "react";
import "@fontsource/markazi-text";
import '@fontsource/karla';
import "./Testimonial.css";

export default function Testimonial(props) {

    const [person, setPerson] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=1")
            .then((response) => response.json())
            .then(data => setPerson(data));
    }, []);

    return (
        <div className="container">
            {person && <img src={person.results[0].picture.large} className="profile_picture"/>}
            {person && <p className="the_name">{person.results[0].name.first} {person.results[0].name.last}</p>}
            <p className="stars">{props.rating}</p>
            <p className="review">{props.review}</p>
        </div>
    )
}