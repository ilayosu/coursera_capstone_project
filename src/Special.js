import "@fontsource/markazi-text";
import '@fontsource/karla';
import "./Special.css";
import dish from "./images/Dish icon.svg"

export default function Special (props){
    return (
        <div className="special_preview">
            <div className="image_holder">
                <img src={require(`${props.image}`)} className="dish_image"/>
            </div>
            <div className="name_and_price">
                <p className="dish_name">{props.name}</p>
                <p className="dish_price">{props.price}</p>
            </div>
            <p className="dish_description">{props.description}</p>
            {/* ADD A LINK THAT GOES NOWHERE HERE */}
            <span className="delivery">
                <p>Order a delivery </p>
                <img src={dish}/>
            </span>
        </div>
    )
}