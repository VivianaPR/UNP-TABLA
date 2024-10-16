import React, { useState } from 'react';
import '../styles/modal.css'

//Interfaz del modal
interface CustomModalProps {
    show: boolean;
    onHide: () => void;
    title: string;
    children: React.ReactNode; // Contenido dinámico del body del modal
}

const CustomModal: React.FC<CustomModalProps> = ({ show, onHide, title, children }) => {

    //Constante que maneja los estados del modal
    const [closing, setClosing] = useState(false);

    //Constante que determina el temporizador de visualización del modal 
    const handleHide = () => {
        setClosing(true);
        setTimeout(() => {
            onHide();
            setClosing(false);
        }, 400);
    };

    return (

        //Modal
        <div className={`modal-overlay ${show ? 'show' : ''}`} onClick={handleHide}>
            <div 
                className={`modal-container ${show ? 'show' : ''} ${closing ? 'hide' : ''}`} 
                onClick={e => e.stopPropagation()}
            >
                {/*Header del modal*/}
                <div className="modal_header">
                    <span>{title}</span>
                    <button className="close_button" onClick={handleHide}>&times;</button>
                </div>
                
                {/*Body del modal*/}
                <div className="modal_body">
                    {children} 
                </div>
            </div>
        </div>
    );
};

export { CustomModal };