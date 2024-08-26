import { Link } from 'react-router-dom';

// Composant ErrorPage pour afficher une page d'erreur 404
const ErrorPage = () => (
    <main className="errorContainer">
        <header>
            <p className="errorNumber">404</p>
        </header>
        <section>
            <p className="errorText">
                Oups ! La page que vous demandez n'existe pas.
            </p>
        </section>
        <footer>
            <Link to="/" className="errorLinkHome">
                Retourner sur la page d’accueil
            </Link>
        </footer>
    </main>
);

export default ErrorPage;
