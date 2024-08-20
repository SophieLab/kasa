import { useState, useRef, useLayoutEffect } from 'react'; // Importer les hooks React nécessaires
import classNames from 'classnames'; // Utiliser la bibliothèque classnames pour gérer les classes conditionnelles
import Chevron from '../../assets/images/vectorBas.svg'; // Importer l'image du chevron

function Collapse({ aboutTitle, aboutText, aboutStyle }) {
    const [isOpen, setIsOpen] = useState(false); // État pour contrôler si le collapse est ouvert ou fermé
    const [collapseHeight, setCollapseHeight] = useState('0px'); // Hauteur du collapse
    const collapseRef = useRef(null); // Référence pour l'élément collapse

    const toggleCollapse = () => {
        setIsOpen(prevState => !prevState); // Inverser l'état d'ouverture
    };

    useLayoutEffect(() => {
        if (collapseRef.current) {
            setCollapseHeight(isOpen ? `${collapseRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);

    return (
        <div className={classNames('collapse', aboutStyle)}>
            <div onClick={toggleCollapse} className="collapse__visible">
                <h2>{aboutTitle}</h2>
                <img
                    className={classNames('chevron', { rotated: isOpen })}
                    src={Chevron}
                    alt="chevron"
                />
            </div>
            <div
                ref={collapseRef}
                className={classNames('collapse__toggle', { animated: isOpen })}
                style={{ height: collapseHeight }}
            >
                <p aria-hidden={!isOpen}>{aboutText}</p>
            </div>
        </div>
    );
}

export default Collapse;
