import React, { useState } from "react";
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import Items from "./Items";
import { DataUser } from "../Firebase/dataUser";
import img1 from "../Style/user.png";
import "../Style/style.css";

const Auth = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
    }


    const expresionemail = /\w+@\w+\.+[a-z]/;
    const expresionname = /[A-Z]+$/i;
    const expresionpassword = /(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;

    const buttonClick = event => {
        event.preventDefault();
        if (email === null || email === '' || password === null || password === '' || name === null || name === '') {
            alert('Todos los campos son requeridos')
            return false;
        }
        else if (email.length > 100 || !expresionemail.test(email)) {
            alert('Correo invalido')
            return false
        }
        else if (email.length > 30 || !expresionname.test(name)) {
            alert('Nombre invalido')
            return false;
        }
        else if (password.length > 30 || !expresionpassword.test(password)) {
            alert('Debe tener al menos una mayúscula, una minúscula y un dígito')
            return false;
        } else {
            submit();
            DataUser(name, email, password)
        }
    };

    return (
        <div>
            {
                !user &&
                <div className="modal-dialog text-center">
                    <div className="col-sm-10 main-section" >
                        <div className="modal-content">
                            <div className="col-12 user-img">
                                <img src={img1} alt="user" />
                            </div>
                            <form className="col-12" >
                                <div className="form-group">
                                    <input
                                        name="name"
                                        id="nombre"
                                        type="text"
                                        aria-describedby="namelHelp"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                </div>
                                <div className="form-group">
                                    <input
                                        name="email"
                                        type="text"
                                        id="email"
                                        aria-describedby="emailHelp"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        name="password"
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        pattern="(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ].*"
                                        title="Debe tener al menos una mayúscula, una minúscula y un dígito"
                                    />
                                </div>
                                <button type="submit" className="btn" onClick={buttonClick}> Registrarse </button>
                            </form>
                        </div>
                    </div>
                </div>
            }
            {
                user && <Items />
            }
        </div >
    )
};

export default Auth;