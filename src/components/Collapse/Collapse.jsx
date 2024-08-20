import { useState, useRef, useEffect } from "react";
import Chevron from "../../assets/images/vectorBas.svg";

// Composant Collapse pour afficher ou masquer du contenu
function Collapse({ aboutStyle, aboutTitle, aboutText }) {
	const [isOpen, setIsOpen] = useState(false); // État pour contrôler l'ouverture/fermeture du collapse
	const contentRef = useRef(null); // Référence pour obtenir la hauteur du contenu

	// Fonction pour basculer l'état du collapse
	const handleToggle = () => setIsOpen(prev => !prev);

	useEffect(() => {
		// Met à jour la hauteur du contenu lorsque le composant est monté
		if (contentRef.current) {
			contentRef.current.style.height = isOpen ? `${contentRef.current.scrollHeight}px` : "0px";
		}
	}, [isOpen]); // Dépendance sur isOpen pour mettre à jour la hauteur à chaque changement

	return (
		<div className={`collapse ${aboutStyle}`}>
			<div onClick={handleToggle} className="collapse__header">
				<h2>{aboutTitle}</h2>
				<img
					className={`chevron ${isOpen ? "rotated" : ""}`}
					src={Chevron}
					alt="Chevron"
				/>
			</div>
			<div
				ref={contentRef}
				className={`collapse__content ${isOpen ? "animated" : ""}`}
			>
				<p aria-hidden={!isOpen}>{aboutText}</p>
			</div>
		</div>
	);
}

export default Collapse;
