import React, { useState, useEffect } from 'react';
import "../Style/style.css";

import { useHistory } from "react-router-dom"



const EditItems = ({ key, data, editUpdate }) => {
    const history = useHistory();

    const [producto, guardarProducto] = useState({
        categoria: '',
        nombre: '',
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
    const { categoria, nombre, descripcion, precio, imagen } = producto;


    const handleFormSubmit = e => {
        e.preventDefault()
        editUpdate(producto);
        history.push("/")
    }

    return (
        <div key={key} className="row justify-content-center">
            <div className="col-sm-8">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Editar Producto
                    </h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label>Categoria</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Categoria"
                                name="categoria"
                                value={categoria}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nombre Producto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Producto"
                                name="titulo"
                                value={nombre}
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
                        <div className="form-group">
                            <label>Precio</label>
                            <input
                                className="form-control"
                                placeholder="Precio Producto"
                                name="precio"
                                value={precio}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Url Imagen</label>
                            <input
                                className="form-control"
                                placeholder="Url Imagen"
                                name="imagen"
                                value={imagen}
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
    );
};

export default EditItems;

