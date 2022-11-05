import { Link, Outlet } from "react-router-dom"
import './navbar.css'
const Navbar = () => {
    return (
        <nav id="navbar">
            <div><Link to='/'><img className="logoDbz" src="build/img/logo.png"></img></Link></div>
            <div className="linksContainer">
                <a className="sicialLink" href="https://www.linkedin.com/in/deyvid-matos-824859249" target='blank'>Linkedin</a>
                <a className="sicialLink" href='https://github.com/deyvidMatos' target='blank'>Github</a>
            </div>
        </nav>
    )
}

export default Navbar