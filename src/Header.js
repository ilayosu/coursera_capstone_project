import logo from './images/Logo.svg';

export default function Header() {
    const the_style = {
        backgroundColor: "aquamarine",
    }
    return (
        <div style={the_style}>
            <img src={logo}/>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Log in</li>
                </ul>
            </nav>
        </ div>
    )
}