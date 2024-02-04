import Button from "./reusable/Button.js";
import { useState, useEffect } from "react";
import "./ReservationForm.css";
import '@fontsource/karla';

function form_valid(props) {
    return props.date != "" && props.time  != "" && props.guestCount > 0 && props.occasion != "";
}

export default function ReservationForm(props) {

    const submit_handler = (e) => {
        alert(form_valid(props));
        if (form_valid(props) === true) form_clear();
    }

    const form_clear = () => {
        props.set_date("");
        props.set_time("");
        props.set_guestCount(0);
        props.set_occasion("");
    }

    return (
        <form className="reservation_form">
            <label className="form_date">
                Choose the date:
                <input defaultValue="" value={props.date} type="date" onInput={e => props.set_date(e.target.value)}/>
            </label>
            <label className="form_time">
                <div>Choose the time: </div>
                <select defaultValue="" value={props.time} onChange={e => props.set_time(e.target.value)}>
                    <option value="" disabled hidden/> 
                    {props.the_times.map(item => {
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
                    value={props.guestCount}
                    onChange={e => props.set_guestCount(e.target.value)}
                />
            </label>
            <label className="form_occasion">
                Occasion: 
                <select defaultValue="" value={props.occasion} onChange={e => props.set_occasion(e.target.value)}>
                    <option value="" disabled hidden/> 
                    <option value="Birthday">Birthday</option>    
                    <option value="Anniversary">Anniversary</option>    
                    <option value="N/A">N/A</option>    
                </select>
            </label>
            <div className="hey_why_is_react_not_making_a_wrapper">
            {(form_valid(props) === true) ? <Button type="button" text="submit" customClickEvent={submit_handler} /> : <Button 
            type="button" 
            text="submit" 
            disabled_button="disabled"/> }
            </div>
        </form>
    )
}