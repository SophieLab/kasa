import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";

export default function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("/logements.json");
				if (!res.ok) throw new Error("Erreur lors de la récupération des données");  // Gestion des erreurs

				const jsonData = await res.json();  // Conversion de la réponse en JSON
				setData(jsonData);  // Mise à jour de l'état avec les données récupérées
			} catch (error) {
				console.error("Erreur lors de la récupération des données :", error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Banner />
			<div className="cards-container">
				{data.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
