import Button from "./reusable/Button.js";
import { useState, useEffect } from "react";
import "./ReservationForm.css";
import '@fontsource/karla';

export default function ReservationForm() {

    const button_style_rewrite = {
        backgroundColor: "#edefee",
    }

    const [date, setDate] = useState();
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    const [time, setTime] = useState();
    const [guestCount, setGuestCount] = useState();
    const [occasion, setOccasion] = useState();

    const form_valid = () => {
        return (
            date && time && guestCount > 0 && occasion
        );
    }

    const submit_handler = (e) => {
        e.preventDefault();
        alert("submitted");
        form_clear();
    }

    const form_clear = () => {
        setDate("");
        setTime("");
        setGuestCount(0);
        setOccasion("");
    }

    return (
        <form className="reservation_form">
            <label className="form_date">
                Choose the date: 
                <input type="date" onInput={e => setDate(e.target.value)}/>
            </label>
            <label className="form_time">
                <div>Choose the time: </div>
                <select onChange={e => setTime(e.target.value)}>
                    {availableTimes.map(item => {
                        return <option value={item}>{item}</option>
                    })}
                </select>
            </label>
            <label className="form_guests">
                Number of Guests: 
                <input 
                    type="number"
                    min={1}
                    max={10}
                    onChange={e => setGuestCount(e.target.value)}
                />
            </label>
            <label className="form_occasion">
                Occasion: 
                <select onChange={e => setOccasion(e.target.value)}>
                    <option value="Birthday">Birthday</option>    
                    <option value="Anniversary">Anniversary</option>    
                    <option value="N/A">N/A</option>    
                </select>
            </label>
            <div className="hey_why_is_react_not_making_a_wrapper">
            <Button type="button" text="submit" customClickEvent={(form_valid) ? submit_handler : ""} />
            </div>
        </form>
    )
}