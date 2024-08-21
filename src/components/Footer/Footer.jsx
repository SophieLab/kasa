import logo from '../../assets/images/logo-footer.svg'; // Importer l'image du logo



const Footer = () => (
    <footer className="foot-container">
        <img src={logo} alt="Logo de Kasa" className="foot-logo" />
        <p className="foot-text">© 2020 Kasa. All rights reserved</p>
    </footer>
);

export default Footer;
