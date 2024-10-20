import { useState } from 'react';
import { BotonRutas } from '../../components/botonRutas';
import { BootstrapTable } from '../../components/tabla';
import { OrdenesTrabajoColectivas } from './lista_ot_colectivo';
import { VentanaLienzo } from 'eco-unp/ui';
import { TabVentana } from 'eco-unp/ui/componentes'
import { Tabs } from 'react-bootstrap';
import { Procesos } from './Modales/Procesos';
import { Insumos } from './Modales/Insumos';

export function OrdenTrabajo() {
    const [showColectivo, setShowColectivo] = useState(false); // Estado para alternar entre componentes

    const columns = [
        { key: "no_orden", label: "No de Orden", hasModal: true },
        { key: "nombre_evaluado", label: "Nombre del Evaluado" },
        { key: "id_evaluado", label: "Identificación" },
        { key: "fecha_asignacion", label: "Fecha de asignación" },
        { key: "dias_habiles", label: "Días hábiles" },
        { key: "poblacion", label: "Población" },
        { key: "tipo_estudio", label: "Tipo de estudio" },
        { key: "anexos", label: "Anexos", hasModal: true }
    ];

    const data = [
        { no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 29, poblacion: "ROM", tipo_estudio: "A", anexos: '8' },
        { no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7' },
        { no_orden: "OTI03", nombre_evaluado: "Camila Cortes", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6", anexos: '5' }
    ];

    // Función para renderizar contenido dinámico en el modal
    const renderModalContent = (row: Record<string, any>, column: any) => {
        switch (column.key) {
            case "no_orden":
                return (<Procesos row={row}></Procesos>);
            case "anexos":
                return (<Insumos row={row}></Insumos>);
            default:
                return <p>No hay información adicional disponible.</p>;
        }
    };

    // Función para alternar entre la tabla y el componente colectivo
    const toggleComponent = () => {
        setShowColectivo(prev => !prev);
    };

    return (
        <>
            <VentanaLienzo>
                <Tabs defaultActiveKey="tab1">
                    <TabVentana eventKey="tab1" title="Órdenes de trabajo">
                        <BotonRutas toggleComponent={toggleComponent} isColectivo={showColectivo} />
                        <div>
                            {showColectivo ? (
                                <OrdenesTrabajoColectivas /> // Muestra el componente de Trabajo Colectivo
                            ) : (
                                <div>
                                    <BootstrapTable
                                        columns={columns}
                                        data={data}
                                        renderModalContent={renderModalContent}
                                        totalDias={30} />
                                </div>
                            )}
                        </div>
                    </TabVentana>
                    <TabVentana eventKey="tab2" title="Contactos">
                        <div>Contenido de la Pestaña 2</div>
                    </TabVentana>
                </Tabs>
            </VentanaLienzo>

        </>
    );
}
