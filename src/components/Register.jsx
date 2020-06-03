import React, { useState } from "react";
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import Productos from "./Products";
import { DataUser } from "../Firebase/dataUser";

const Auth = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
    }


    const buttonClick = event => {
        event.preventDefault();
        submit();
        DataUser(name, email, password)

    };

    return (
        <div>
            {
                !user &&
                <div>
                    <div className="backgroundLogin"> </div>
                    <div className="LoginBox">
                        <div className="logologin" />
                        <form>
                            <div className="UserLogin">
                                <label className="control-Element" htmlFor="name">Nombre
                                <input type="email" className="login-control" id="nombre" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} /></label>
                            </div>
                            <div className="UserLogin">
                                <label className="control-Element" htmlFor="email">Correo Electrónico
                                <input type="email" className="login-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} /></label>
                            </div>
                            <div className="UserLogin">
                                <label htmlFor="userpassword" className="control-Element">Clave
                                <input type="password" className="login-control" id="password" onChange={(e) => setPassword(e.target.value)} /></label>
                            </div>
                            <button className="submitLogin" onClick={buttonClick}>Registarse</button>
                        </form>
                        <div className="clear" />
                    </div>

                    <div className="mercuryCopyright">
                        <div className="container-fluid">
                            <div className="mercuryCopyRight">
                                © 2020, Hecho con amor por Mariangel Mora
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                user && <Productos />
            }
        </div>
    )
}

export default Auth;