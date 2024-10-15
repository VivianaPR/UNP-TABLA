import React, { useState } from 'react';

interface CustomModalProps {
    show: boolean;
    onHide: () => void;
    title: string;
    children: React.ReactNode; // Contenido dinámico
}

const CustomModal: React.FC<CustomModalProps> = ({ show, onHide, title, children }) => {
    const [closing, setClosing] = useState(false);

    const handleHide = () => {
        setClosing(true);
        setTimeout(() => {
            onHide();
            setClosing(false);
        }, 500);
    };

    return (
        <div className={`modal-overlay ${show ? 'show' : ''}`} onClick={handleHide}>
            <div 
                className={`modal-container ${show ? 'show' : ''} ${closing ? 'hide' : ''}`} 
                onClick={e => e.stopPropagation()}
            >
                <div className="modal_header">
                    <h5>{title}</h5>
                    <button className="close_button" onClick={handleHide}>&times;</button>
                </div>
                <div className="modal_body">
                    {children} 
                </div>
                <div className="modal_footer">
                    <button className="footer_button" onClick={handleHide}>Cerrar</button>
                </div>
            </div>
        </div>
    );
};

export { CustomModal };