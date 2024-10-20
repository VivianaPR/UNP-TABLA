import '../../../styles/modal.css'

export const Insumos: React.FC<{ row: any }> = ({ row }) => {
    
    const archivos = [
        { nombre_archivo: 'proceso.pdf', url: 'https://angular.dev/guide/forms' },
        { nombre_archivo: 'documento.pdf', url: 'https://www.unp.gov.co/' },
        { nombre_archivo: 'imagen1.png', url: 'https://d3js.org/' },
    ];

    const handleDownload = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <div className='unp-row'>
                <span className='modal-subtitle'>{row.no_orden} - {row.nombre_evaluado}</span>
                <span className='modal-subtitle-two'>Insumos</span>
            </div>
            <div className='attachments-list-container'>
                {archivos.map((archivo, index) => (
                    <div key={index} className="attachments-container" onClick={() => handleDownload(archivo.url)}>
                        <span>{archivo.nombre_archivo}</span>
                        <div className='icon-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};