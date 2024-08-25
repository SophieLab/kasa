import React from "react";

const Banner = ({ type, text }) => {
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
