import React from 'react';

// Composant Host pour afficher les informations de l'hôte
const Host = ({ hostName, hostPic, id }) => (
    <aside className="host-comp">
        <div className="host-name">{hostName}</div>
        <div className="hostPicture">
            <img 
                src={hostPic} 
                alt={hostName} 
            />
        </div>
    </aside>
);

export default Host;
