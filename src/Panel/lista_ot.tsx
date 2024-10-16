import { BootstrapTable } from '../components/tabla';

export function OrdenTrabajo() {

    const columns = [
        { key: "no_orden", label: "No de Orden", hasModal: true },
        { key: "nombre_evaluado", label: "Nombre del Evaluado", hasModal: true  },
        { key: "id_evaluado", label: "Identificación" },
        { key: "fecha_asignacion", label: "Fecha de asignación" },
        { key: "dias_habiles", label: "Días hábiles", hasModal: true },
        { key: "poblacion", label: "Población" },
        { key: "tipo_estudio", label: "Tipo de estudio", hasModal: true }
    ];

    const data = [
        { no_orden: "OT001", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A" },
        { no_orden: "OT002", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1" },
        { no_orden: "OT003", nombre_evaluado: "Camila Cortes", id_evaluado: "784521432", fecha_asignacion: "12/08/2024", dias_habiles: 45, poblacion: "LGBT", tipo_estudio: "A6" }
    ];

    // Función para renderizar contenido dinámico en el modal
    const renderModalContent = (row: Record<string, any>, column: any) => {

        if (column.key === "no_orden") {
            return (
                <div>
                    <h4>Detalles de la Orden: {row.no_orden}</h4>
                    <p>ID Evaluado: {row.id_evaluado}</p>
                    <p>Nombre: {row.nombre_evaluado}</p>
                    <p>Fecha de Asignación: {row.fecha_asignacion}</p>
                </div>
            );
        }

        if (column.key === "tipo_estudio") {
            return (
                <div>
                    <h4>Tipo de Estudio: {row.tipo_estudio}</h4>
                    <p>Descripción del estudio relacionado a {row.tipo_estudio}</p>
                    <p>Nombre: {row.nombre_evaluado}</p>
                </div>
            );
        }

        // Contenido por defecto si no es ninguna de las claves anteriores
        return <p>No hay información adicional disponible.</p>;
    };

    return (
        <>
            <h1>Órdenes de Trabajo</h1>
            <div>
                <BootstrapTable
                    columns={columns}
                    data={data}
                    renderModalContent={renderModalContent}
                />
            </div>
        </>
    )

}