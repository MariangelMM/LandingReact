import React, { useState } from "react";
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import { Link } from 'react-router-dom';
import "../Style/style.css";
// import Productos from "./Products";

const Auth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();


    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    }

    const buttonClick = event => {
        event.preventDefault();
        login();
    };

    // const loginGoogle = () => {
    //     console.log('entre')
    //     const google = new firebase.auth.GoogleAuthProvider();
    //     firebase.auth().signInWithPopup(google)
    //         .then(result => console.log(result.user.email))
    // }

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
                                <label className="control-Element" htmlFor="email">Correo Electrónico
                                <input type="email" className="login-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} /></label>
                            </div>
                            <div className="UserLogin">
                                <label htmlFor="userpassword" className="control-Element">Clave
                                <input type="password" className="login-control" id="password" onChange={(e) => setPassword(e.target.value)} /></label>
                            </div>
                            <button className="submitLogin" onClick={buttonClick}>Iniciar Sección</button>
                            <div className="Login-forgetRegister">
                                <Link className="btn-pink-link font " to="/register">Registrate</Link>
                                <button className="btn" onClick={''}>Iniciar seción en <i class="fab fa-google"></i></button>
                            </div>
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
                user && <p> holis</p>
            }
        </div>
    )
}

export default Auth;