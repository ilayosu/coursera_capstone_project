import ReservationForm from "./ReservationForm"
import "./Reservations.css";
import background_photo from "./images/restaurant.jpg"
import {useState, useReducer, useEffect} from "react";

export default function Reservations() {

    const [date, setDate] = useState();
    const [time, setTime] = useState("");
    const [guestCount, setGuestCount] = useState(0);
    const [occasion, setOccasion] = useState("");

    const updateTimes = (availableTimes, action) => {
        return availableTimes;
    }

    const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

    useEffect(dispatch, [date]);

    return (
        <div className="reservation_page">
            <ReservationForm occasion={occasion} set_occasion={setOccasion} guestCount={guestCount} set_guestCount={setGuestCount} time={time} set_time={setTime} date={date} set_date={setDate} the_times={availableTimes} className="the_form_wrapper"/>
        </div>
    )
}