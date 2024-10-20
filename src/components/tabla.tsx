import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { BusquedaInput } from './buscador';
import { CustomModal } from './modal';
import '../styles/tabla.css';

interface Column {
    key: string;
    label: string;
    hasModal?: boolean;
}

interface TableProps {
    columns: Column[];
    data: Array<Record<string, any>>;
    renderModalContent?: (row: Record<string, any>, column: Column) => React.ReactNode;
    totalDias?: number;
}

const BootstrapTable: React.FC<TableProps> = ({ columns, data, renderModalContent, totalDias }) => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [modalData, setModalData] = useState<{ row: Record<string, any>, column: Column } | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    const filteredData = data.filter(row =>
        columns.some(column =>
            String(row[column.key]).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleCellClick = (column: Column, row: Record<string, any>) => {
        if (column.hasModal && renderModalContent) {
            setModalData({ row, column });
            setShowModal(true);
        }
    };

    // Función para determinar el color de fondo según el valor de `dias_habiles`
    const getBackgroundColor = (diasHabiles: number) => {
        if (totalDias) {
            const porcentaje = (diasHabiles / totalDias) * 100;
            if (porcentaje <= 25) return '#CBFDBD';
            if (porcentaje <= 50) return '#ffffd4';
            if (porcentaje <= 75) return '#FFEBD0';
            return '#FFD0D3';
        }
        return 'transparent';
    };

    return (
        <div className='table_container'>
            <div className='unp-row'>
                <BusquedaInput onSearch={setSearchTerm} />
            </div>

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
                                        style={{
                                            cursor: column.hasModal ? 'pointer' : 'default',
                                            backgroundColor: column.key === 'dias_habiles'
                                                ? getBackgroundColor(row.dias_habiles) // Aplicar color condicional
                                                : 'transparent',
                                        }}
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

            {modalData && renderModalContent && (
                <CustomModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    title={`${modalData.column.label}`}
                >
                    {renderModalContent(modalData.row, modalData.column)}
                </CustomModal>
            )}
        </div>
    );
};

export { BootstrapTable };

