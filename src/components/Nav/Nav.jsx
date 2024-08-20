import { Link } from 'react-router-dom'; // Importer Link pour la navigation

// Composant Nav pour la navigation
const Nav = () => (
    <nav className="nav-header">
        <Link to="/" className="nav-header__link-home">
            Accueil
        </Link>
        <Link to="/about" className="nav-header__link-about">
            À Propos
        </Link>
    </nav>
);

export default Nav;
