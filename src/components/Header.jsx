import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="collapse navbar-collapse container-xl" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/movies" className="nav-link">INDEX</NavLink>
                            <NavLink to="/movies/:id" className="nav-link">SHOW</NavLink>
                        </div>
                    </div>
                </nav>

            </header>
        </>
    )
};