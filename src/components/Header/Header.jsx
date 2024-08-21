import logo from '../../assets/images/LOGO.svg';
import Nav from '../Nav/Nav';

const Header = () => (
    <header className="headerWrap">
        <figure className="headerWrap__fig">
            <img className="logo" src={logo} alt="Logo de l'agence Kasa" />
        </figure>
        <Nav className="nav-header" />
    </header>
);

export default Header;
