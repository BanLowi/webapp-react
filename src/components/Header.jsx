import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="collapse navbar-collapse container-xl" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/movies" className="nav-link">HOME</NavLink>
                            <NavLink to="/about" className="nav-link">ABOUT</NavLink>
                        </div>
                    </div>
                </nav>

            </header>
        </>
    )
};