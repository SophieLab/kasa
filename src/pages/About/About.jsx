import React from "react";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import aboutArray from "../../datas/aboutArray.json"; 

export default function About() {
    return (
        <>
            <Banner type="about" />
            
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
