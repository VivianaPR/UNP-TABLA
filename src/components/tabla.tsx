import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { BusquedaInput } from './buscador';
import { CustomModal } from './modal';
import '../styles/tabla.css'

//Interfaz de las columnas
interface Column {
    key: string;
    label: string;
    hasModal?: boolean;
}

//Interfaz del Props del modal
interface TableProps {
    columns: Column[];
    data: Array<Record<string, any>>;
    renderModalContent?: (row: Record<string, any>, column: Column) => React.ReactNode; // Función para renderizar dinámicamente el modal
}

const BootstrapTable: React.FC<TableProps> = ({ columns, data, renderModalContent }) => {

    //Constante del buscador
    const [searchTerm, setSearchTerm] = useState<string>("");

    //Constantes del modal
    const [modalData, setModalData] = useState<{ row: Record<string, any>, column: Column } | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    //Función de filtro del input de búsqueda
    const filteredData = data.filter(row =>
        columns.some(column =>
            String(row[column.key]).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    //Función que renderiza los modales en las celdas de la tabla
    const handleCellClick = (column: Column, row: Record<string, any>) => {
        if (column.hasModal && renderModalContent) {
            setModalData({ row, column });
            setShowModal(true);
        }
    };

    return (
        <div className='table_container'>
            {/* Buscador */}
            <BusquedaInput onSearch={setSearchTerm} />

            {/* Tabla */}
            <Table striped hover responsive>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column, colIndex) => (
                                    <td 
                                        key={colIndex}
                                        onClick={() => handleCellClick(column, row)}
                                        style={{ cursor: column.hasModal ? 'pointer' : 'default', }}
                                        className={column.hasModal ? 'cell-with-modal' : ''}
                                    >
                                        {row[column.key]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} className="text-center">
                                No se encontraron resultados
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* Modal */}
            {modalData && renderModalContent && (
                <CustomModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    title={`Información de ${modalData.column.label}`}
                >
                    {/* Contenido dinámico del modal */}
                    {renderModalContent(modalData.row, modalData.column)}
                </CustomModal>
            )}
        </div>
    );
};

export { BootstrapTable };