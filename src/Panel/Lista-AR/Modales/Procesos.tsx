import { IoCall, IoDocumentText, IoDocuments } from "react-icons/io5";
import { FaClipboardUser, FaBuildingUser } from "react-icons/fa6";
import { FaWalking, FaUserShield, FaUsers } from "react-icons/fa";
import { BsTable } from "react-icons/bs";
import { HiClipboardDocumentList, HiClipboardDocumentCheck } from "react-icons/hi2";
import { useNavigate } from "react-router-dom"; 
import { useState } from "react";

const sections = [
    { label: "Contactos", icon: IoCall, route: "/contactos", closed: true },
    { label: "Entrevista", icon: FaClipboardUser, route: "/entrevista", closed: false },
    { label: "Acta", icon: IoDocumentText, route: "/acta", closed: false },
    { label: "Desplazamientos", icon: FaWalking, route: "/desplazamientos", closed: true },
    { label: "Escoltas", icon: FaUserShield, route: "/escoltas", closed: false },
    { label: "Entornos", icon: FaBuildingUser, route: "/entornos", closed: true },
    { label: "Terceros", icon: FaUsers, route: "/terceros", closed: false },
    { label: "Documental", icon: IoDocuments, route: "/documental", closed: true },
    { label: "Estandar", icon: BsTable, route: "/estandar", closed: false },
    { label: "Cuerpo", icon: HiClipboardDocumentList, route: "/cuerpo", closed: true },
    { label: "GVP", icon: HiClipboardDocumentCheck, route: "/gvp", closed: false }
];

export const Procesos: React.FC<any> = ({ row }) => {
    const navigate = useNavigate(); 
    const [hoverIndex, setHoverIndex] = useState<number | null>(null); // Estado para manejar hover

    return (
        <>
            <div className='unp-row-subtitle'>
                <span className='modal-subtitle'>{row.no_orden} - {row.nombre_evaluado}</span>
                <span className='modal-subtitle-two'>Procesos</span>
            </div>
            <div className='column-container'>
                {sections.map((section, index) => (
                    <div 
                        key={index} 
                        className='route-container' 
                        onClick={() => navigate(section.route)}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        style={{
                            border: section.closed && hoverIndex !== index ? '2px solid rgb(32, 168, 32)' : '2px solid rgb(235, 235, 235)', // Borde verde si está cerrado y no está en hover
                            transition: 'all 0.3s ease-in-out', // Transición suave para bordes y sombras
                        }}
                    >
                        <section.icon className='icon-process-menu' />
                        <span>{section.label}</span>
                    </div>
                ))}
            </div>
        </>
    );
};



