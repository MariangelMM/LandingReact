import React, { useState, useEffect } from 'react';

import { useHistory } from "react-router-dom"



const EditItems = ({ data, editUpdate }) => {
    const history = useHistory();

    const [producto, guardarProducto] = useState({
        titulo: '',
        descripcion: '',
        precio: '',
        imagen: ''
    })
    //llenar el state automaticamente
    useEffect(() => {
        guardarProducto({ ...data });
    }, [data]);


    const handleInputChange = e => {
        e.preventDefault()
        guardarProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }
    const { titulo, descripcion } = producto;


    const handleFormSubmit = e => {
        e.preventDefault()
        editUpdate(producto);
        history.push("/")
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                    </h2>

                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="titulo"
                                    value={titulo}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Descripcion</label>
                                <input
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="descripcion"
                                    value={descripcion}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                {" "}
                                Guardar cambios
                      </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditItems;


