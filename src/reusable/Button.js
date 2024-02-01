import "./Button.css";
import '@fontsource/karla';

export default function Button(props) {
    return (
        <div className="the_button">
            <p className="button_text">{props.text}</p>
        </div>
    )
}