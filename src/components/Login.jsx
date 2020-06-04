
import React, { useState } from "react";
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import { Link } from 'react-router-dom';
import Products from "./Products";
import img1 from '../Style/user.png';

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
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div class="form-text text-muted">error</div>

                                </div>
                                <div className="form-group">
                                    <input
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className="form-text text-muted">error</div>

                                </div>
                                <button type="submit" className="btn" onClick={buttonClick}><i className="fas fa-sign-in-alt"></i> Login </button>
                            </form>
                            <div className="Login-forgetRegister">
                                <Link className="btn-pink-link font " to="/register">Registrate</Link>
                            </div>
                        </div>
                    </div>
                </div>

            }
            {
                user && <div className="row">
                    <div className="col-md-12 justify-content-center">
                        <Products />
                    </div>
                </div>
            }
        </div>
    )
};

export default Auth;
