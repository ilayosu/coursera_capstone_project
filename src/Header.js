import logo from './images/Logo.svg';

export default function Header() {
    return (
        <>
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
        </>
    )
}