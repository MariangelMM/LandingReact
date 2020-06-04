import React, { useState } from "react";
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import Productos from "./Products";
import { DataUser } from "../Firebase/dataUser";
import img1 from "../Style/user.png";

const Auth = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [uid, setUid] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async () => {
        const data = await firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    console.log(user)
    const buttonClick = event => {
        event.preventDefault();
        submit();
        DataUser(name, email, password)
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
                                    <div class="form-text text-muted">error</div>

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
                                    <div class="form-text text-muted">error</div>
                                </div>
                                <div className="form-group">
                                    <input
                                        name="password"
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className="form-text text-muted">error</div>
                                </div>
                                <button type="submit" className="btn" onClick={buttonClick}><i className="fas fa-sign-in-alt"></i> Login </button>
                            </form>
                        </div>
                    </div>
                </div>
            }
            {
                user && <Productos />
            }
        </div >
    )
};

export default Auth;