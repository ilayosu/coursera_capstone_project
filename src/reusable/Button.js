import "./Button.css";
import '@fontsource/karla';

export default function Button(props) {
    return (
        <div className={`the_button ${props.disabled_button}`} onClick={props.customClickEvent}>
            <p className="button_text">{props.text}</p>
        </div>
    )
}