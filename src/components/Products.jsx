import React, { useState, useEffect } from "react";
import firebase from "../Firebase/FirebaseConfig";
import EditItems from "./EditItems";
import "../Style/style.css";

const Productos = () => {
    const [spells, setSpells] = useState([]);
    const [currenId, setCurrenId] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            await db.collection("productos")
                .onSnapshot(
                    snapShots => {
                        setSpells(snapShots.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                    })
        };
        fetchData();
    }, []);




    const onCreate = () => {
        const db = firebase.firestore();
        db.collection("productos").add({
            categoria: category,
            nombre: name,
            descripcion: description,
            precio: price,
            imagen: image
        }).then(() => {
            setCategory('')
            setDescription('')
            setPrice('')
            setImage('')
            setName('')
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
        <div className="justify-content-center">
            <div className="row  justify-content-center p-5">
                <button type="button" className="col-sm-6 m-5 btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Crear Nuevo Producto</button>
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
                                        <label htmlFor="recipient-categori" className="col-form-label">Categoria</label>
                                        <input type="text" value={category} className="form-control" id="recipient-name" onChange={e => setCategory(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label">Nombre</label>
                                        <input type="text" value={name} className="form-control" id="recipient-name" onChange={e => setName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipient-description" className="col-form-label">Descripcion</label>
                                        <input type="text" value={description} className="form-control" id="recipient-name" onChange={e => setDescription(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipient-price" className="col-form-label">Precio</label>
                                        <input type="text" value={price} className="form-control" id="recipient-name" onChange={e => setPrice(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipient-image" className="col-form-label">Imagen</label>
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
            </div>
            <div className="col-sm-12">
                <EditItems key={currenId} data={currenId} editUpdate={edit} />
            </div>
            <div className="p">
                {spells.map((spell) => {
                    return (
                        <div className="row p">
                            <div className="col-sm-12">
                                <div className="card m-1">
                                    <div className="card-body p">
                                        <div className="row container">
                                            <div className="col-sm-6 form-group">
                                                <img src={spell.imagen} className="card-img-top" alt="..." />
                                            </div>
                                            <div className="col-sm-6 form-group">
                                                <label>Categoria</label>
                                                <p>{spell.categoria}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-8 form-group">
                                                <label>Nombre</label>
                                                <p>{spell.nombre}</p>
                                            </div>
                                            <div className="col-sm-4 form-group">
                                                <label>Precio</label>
                                                <p>{spell.precio}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 form-group">
                                                <label>Nombre</label>
                                                <p>{spell.descripcion}</p>
                                            </div>
                                        </div>
                                        <div key={spell.id} className="">
                                            <button className="btn text-danger m-1" onClick={() => { id(spell); }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button className="btn text-danger m-1" onClick={() => { onDelete(spell.id); }}>
                                                <i className="far fa-trash-alt"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    );
                })}
            </div>
        </div>
    )
}

export default Productos;


