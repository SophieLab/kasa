import { useState, useRef, useLayoutEffect } from 'react';
import classNames from 'classnames';
import Chevron from '../../assets/images/vectorBas.svg';

function Collapse({ aboutTitle, aboutText, aboutStyle }) {
    const [isOpen, setIsOpen] = useState(false);
    const [collapseHeight, setCollapseHeight] = useState('0px');
    const collapseRef = useRef(null);

    const toggleCollapse = () => {
        setIsOpen(prevState => !prevState);
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
