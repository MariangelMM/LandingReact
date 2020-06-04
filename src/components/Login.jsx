
import React, { useState } from "react";
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import { Link } from 'react-router-dom';
import Items from "./Items";
import img1 from '../Style/user.png';
import "../Style/style.css";

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
        if (email === null || email === '' || password === null || password === '') {
            alert('Todos los campos son requeridos')
            return false;
        }
        else if (email.length > 100 || !expresion.test(email)) {
            alert('Correo invalido')
            return false;
        } else {
            login()
        }
    };
    const expresion = /\w+@\w+\.+[a-z]/;

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
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />

                                </div>
                                <button type="submit" className="btn" onClick={buttonClick}><i className="fas fa-sign-in-alt"></i> Login </button>
                            </form>
                            <div className="Login-forgetRegister">
                                <Link className="btn font " to="/register">Registrate</Link>
                            </div>
                        </div>
                    </div>
                </div>

            }
            {
                user &&
                <div>
                    <Items />
                </div>
            }
        </div>
    )
};

export default Auth;
