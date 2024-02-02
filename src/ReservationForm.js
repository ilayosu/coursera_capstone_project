import Button from "./reusable/Button.js";
import { useState, useEffect } from "react";
import "./ReservationForm.css";
import '@fontsource/karla';

export default function ReservationForm() {

    const button_style_rewrite = {
        backgroundColor: "#edefee",
    }

    const [date, setDate] = useState(null);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [guestCount, setGuestCount] = useState(0);
    const [occasion, setOccasion] = useState(null);

    return (
        <form className="reservation_form">
            <label className="form_date">
                Choose the date: 
                <input type="date"/>
            </label>
            <label className="form_time">
                <div>Choose the time: </div>
                <select>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select>
            </label>
            <label className="form_guests">
                Number of Guests: 
                <input 
                    type="number"
                    min={1}
                    max={10}
                />
            </label>
            <label className="form_occasion">
                Occasion: 
                <select>
                    <option value="Birthday">Birthday</option>    
                    <option value="Anniversary">Anniversary</option>    
                    <option value="N/A">N/A</option>    
                </select>
            </label>
            <div className="hey_why_is_react_not_making_a_wrapper">
            <Button text="submit"/>
            </div>
        </form>
    )
}