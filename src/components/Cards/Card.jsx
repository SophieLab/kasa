import React from 'react';

// Composant Card : Affiche une card pour un logement avec une couverture et un titre
const Card = ({ cover, title }) => (
    <article className="card-logement">
        <img src={cover} alt="location" />
        <div className="card-logement__layer">
            <p className="card-logement__title">{title}</p>
        </div>
    </article>
);

export default Card;