import emptyStar from "../../assets/images/emptyStar.svg";
import fullStar from "../../assets/images/star-rate.svg";

function Rate({ score }) {
	const stars = Array.from({ length: 5 }, (_, index) => index + 1);

	return (
		<div className="rate-comp">
			{stars.map((level) => (
				<img
					key={level}
					className="star"
					src={score >= level ? fullStar : emptyStar}
					alt={score >= level ? "full star" : "empty star"}
				/>
			))}
		</div>
	);
}

export default Rate;
