import logo from '../../assets/images/LOGO.svg'; // Importer l'image du logo
import Nav from '../Nav/Nav'; // Importer le composant Nav

const Header = () => (
    <header className="headerWrap">
        <figure className="headerWrap__fig">
            <img className="logo" src={logo} alt="Logo de l'agence Kasa" />
        </figure>
        <Nav className="nav-header" />
    </header>
);

export default Header;
