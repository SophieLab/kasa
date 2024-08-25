import React from "react";
import Banner from "../../components/Banner/Banner"; // Assurez-vous que le chemin est correct
import Collapse from "../../components/Collapse/Collapse";
import aboutArray from "../../datas/aboutArray.json"; 

export default function About() {
    return (
        <>
            {/* Utilisation du composant Banner avec le type "about" */}
            <Banner type="about" />
            
            {/* Affichage des items de aboutArray avec le composant Collapse */}
            {aboutArray.map((rule, id) => (
                <Collapse
                    key={id}
                    aboutTitle={rule.aboutTitle}
                    aboutText={rule.aboutText}
                    aboutStyle="about-style"
                />
            ))}
        </>
    );
}
