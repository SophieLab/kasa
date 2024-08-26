import { useState } from "react";
import leftArrow from "../../assets/images/vector-left.svg";
import rightArrow from "../../assets/images/vector-right.svg";

// Composant Carrousel pour afficher des diapositives d'images
function Carrousel({ slides }) {
	// État pour suivre l'index de la diapositive actuellement affichée
	const [currentSlide, setCurrentSlide] = useState(0);

	// Nombre total de diapositives
	const totalSlides = slides.length;

	// Fonction pour passer à la diapositive suivante
	const goToNextSlide = () => {
		setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
	};

	// Fonction pour passer à la diapositive précédente
	const goToPreviousSlide = () => {
		setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
	};

	return (
		<section id="carrousel-container">
			{totalSlides > 1 && (
				<img
					src={leftArrow} // Image pour la flèche gauche
					alt="Flèche gauche"
					onClick={goToPreviousSlide} // Fonction pour aller à la diapositive précédente
					className="leftArrow" // Classe pour la flèche gauche
				/>
			)}
			{totalSlides > 1 && (
				<img
					src={rightArrow} // Image pour la flèche droite
					alt="Flèche droite"
					onClick={goToNextSlide} // Fonction pour aller à la diapositive suivante
					className="rightArrow" // Classe pour la flèche droite
				/>
			)}

			{slides.map((slide, index) => (
				<div
					key={index} // Clé unique pour chaque diapositive
					className={
						// Classe pour la diapositive active et inactives
						currentSlide === index
							? "slider bl-msk wh-msk active-anim" // Classe pour la diapositive active
							: "slider bl-msk wh-msk" // Classe pour les autres diapositives
					}
				>
					{index === currentSlide && <img src={slide} alt="Diapositive" />}
					{index === currentSlide && (
						<span className="slider__number">
							{currentSlide + 1}/{totalSlides}
						</span>
					)}
				</div>
			))}
		</section>
	);
}

export default Carrousel;
