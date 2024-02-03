import ReservationForm from "./ReservationForm"
import "./Reservations.css";
import background_photo from "./images/restaurant.jpg"
import {useState, useReducer} from "react";

export default function Reservations() {

    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    const [date, setDate] = useState(undefined);
    const [time, setTime] = useState(undefined);
    const [guestCount, setGuestCount] = useState(0);
    const [occasion, setOccasion] = useState(undefined);

    return (
        <div className="reservation_page">
            <ReservationForm occasion={occasion} set_occasion={setOccasion} guestCount={guestCount} set_guestCount={setGuestCount} time={time} set_time={setTime} date={date} set_date={setDate} the_times={availableTimes} className="the_form_wrapper"/>
        </div>
    )
}