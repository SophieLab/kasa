// Importation des modules nécessaires depuis 'react-router-dom' pour gérer la navigation entre les pages
import { Routes, Route } from "react-router-dom";

// Importation des composants et des pages utilisés dans l'application
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error.jsx";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/logement/:id" element={<FicheLogement />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;


