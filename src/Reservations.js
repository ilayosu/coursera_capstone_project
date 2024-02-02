import ReservationForm from "./ReservationForm"
import "./Reservations.css";
import background_photo from "./images/restaurant.jpg"

export default function Reservations() {

    return (
        <div className="reservation_page">
            <ReservationForm className="the_form_wrapper"/>
        </div>
    )
}