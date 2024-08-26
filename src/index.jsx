// Importation de ReactDOM pour monter l'application dans le DOM
import ReactDOM from "react-dom/client";

// Importation de BrowserRouter pour gérer le routage
import { BrowserRouter } from "react-router-dom";

// Importation du composant principal de l'application
import App from "./App";

import "./style/main.scss";

// Création de la racine React et rendu de l'application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);