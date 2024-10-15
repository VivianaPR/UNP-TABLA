import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Form } from "react-bootstrap";

interface BusquedaInputProps {
    onSearch: (value: string) => void;
}

const BusquedaInput: React.FC<BusquedaInputProps> = ({ onSearch }) => {

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <Form.Group className="d-flex align-items-center mx-1 position-relative">
            <Form.Control
                type="text"
                className="me-0 input-with-icon"
                placeholder="Ingrese un criterio de búsqueda..."
                onChange={handleSearch}
            />
            <BiSearchAlt className="input-icon" />
        </Form.Group>
    );
};

export { BusquedaInput };