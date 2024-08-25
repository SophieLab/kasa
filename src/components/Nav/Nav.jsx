import { NavLink } from "react-router-dom";

function Nav() {
	return (
		<nav className="nav-header">
			<NavLink 
				to="/" 
				className={({ isActive }) => "nav-header_link-home" + (isActive ? " active" : "")}
			>
				Accueil
			</NavLink>
			<NavLink 
				to="/about" 
				className={({ isActive }) => "nav-header_link-about" + (isActive ? " active" : "")}
			>
				A Propos
			</NavLink>
		</nav>
	);
}

export default Nav;
