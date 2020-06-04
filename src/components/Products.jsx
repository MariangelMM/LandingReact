import React, { useState, useEffect } from "react";
import firebase from "../Firebase/FirebaseConfig";
import EditItems from "./EditItems";

const Productos = () => {
    const [spells, setSpells] = useState([]);
    const [title, setTitle] = useState('');
    const [currenId, setCurrenId] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("productos").get()
            setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))

        };
        fetchData();
    }, []);

    const onCreate = () => {
        const db = firebase.firestore();
        db.collection("productos").add({
            titulo: title,
            descripcion: description,
            precio: price,
            imagen: image
        }).then(() => {
            setTitle('')
            setDescription('')
            setPrice('')
            setImage('')
        });
    };

    const onDelete = (id) => {
        const db = firebase.firestore()
        db.collection('productos').doc(id).delete()
    }

    const edit = (spell) => {
        const db = firebase.firestore()
        db.collection('productos').doc(spell.id).set({ ...spell, })
    }

    const id = (data) => {
        setCurrenId(data);
    }


    return (
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Crear</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Nuevo Producto</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Titulo</label>
                                    <input type="text" value={title} className="form-control" id="recipient-name" onChange={e => setTitle(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Descripcion</label>
                                    <input type="text" value={description} className="form-control" id="recipient-name" onChange={e => setDescription(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Precio</label>
                                    <input type="text" value={price} className="form-control" id="recipient-name" onChange={e => setPrice(e.target.value)} />
                                </div><div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Imagen</label>
                                    <input type="text" value={image} className="form-control" id="recipient-name" onChange={e => setImage(e.target.value)} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={onCreate} data-dismiss="modal">Crear</button>
                        </div>
                    </div>
                </div>
            </div>
            {spells.map((spell) => {
                return (
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <table className="table table-borderless table-stripped">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Name</th>
                                                <th>Mobile</th>
                                                <th>Email</th>
                                                <th>Actions</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr key={spell.id}>
                                                <td>{spell.titulo}</td>
                                                <td>{spell.descripcion}</td>
                                                <td>{spell.precio}</td>
                                                <td>{spell.imagen}</td>
                                                <td key={spell.id} className="">
                                                    <button className="btn text-danger" onClick={() => { id(spell); }}>
                                                        <i className="fas fa-pencil-alt"></i>
                                                    </button>
                                                    <button className="btn text-danger" onClick={() => { onDelete(spell.id); }}>
                                                        <i className="far fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="">
                <EditItems key={currenId} data={currenId} editUpdate={edit} />
            </div>
        </div >
    )
}

export default Productos;


