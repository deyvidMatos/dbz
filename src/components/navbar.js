import { Link, Outlet } from "react-router-dom"
import './navbar.css'
import logo from "./logo.png"

const Navbar = () => {
    return (
        <nav id="navbar">
            <div><Link to='/dbz'><img className="logoDbz" src={logo}></img></Link></div>
            <div className="linksContainer">
                <a className="sicialLink" href="https://www.linkedin.com/in/deyvid-matos-824859249" target='blank'>Linkedin</a>
                <a className="sicialLink" href='https://github.com/deyvidMatos' target='blank'>Github</a>
            </div>
        </nav>
    )
}

export default Navbar