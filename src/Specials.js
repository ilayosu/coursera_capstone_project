import dish_data from "./Special.json"
import Special from "./Special.js"
import "./Specials.css"
import "@fontsource/markazi-text";
import '@fontsource/karla';

export default function Specials() {
    return (
        <section className="main">
            <div className="title_specials">
                <h1>This week's specials!</h1>
                <button>Online Menu</button>
            </div>
            {<div className="specials_grid">
                {dish_data.map((item) => (
                    <Special name={item.Name} price={item.Price} description={item.Description} image={item.Image} className={item.Class}/>
                ))}
            </div>}
        </section>
    )
}