import React from "react";

// Définition du composant fonctionnel Banner
const Banner = ({ type, text }) => {
  // Si `type` est égal à "about", on utilise "banner aboutBackground".
  // Sinon, on utilise "banner banner-container".
  const bannerClass =
    type === "about" ? "banner aboutBackground" : "banner banner-container";


  return (
    <div className={bannerClass}>
      {type !== "about" && (
        <div className="banner-text-container">
          <div className="banner-text">
            {text || "Chez vous, partout et ailleurs"}
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
