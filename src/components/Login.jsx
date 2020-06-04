// import React, { useState } from "react";
// import 'firebase/auth';
// import { useFirebaseApp, useUser } from 'reactfire';
// import { Link } from 'react-router-dom';
// import "../Style/style.css";
// import Products from "./Products";

// const Auth = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const firebase = useFirebaseApp();
//     const user = useUser();


//     const login = async () => {
//         await firebase.auth().signInWithEmailAndPassword(email, password)
//     }

//     const buttonClick = event => {
//         event.preventDefault();
//         login();
//     };

//     // const loginGoogle = () => {
//     //     console.log('entre')
//     //     const google = new firebase.auth.GoogleAuthProvider();
//     //     firebase.auth().signInWithPopup(google)
//     //         .then(result => console.log(result.user.email))
//     // }

//     return (
//         <div>
//             {
//                 !user &&
//                 <form>
//                     <div className="">
//                         <label className="" htmlFor="email">Correo Electrónico
//                                 <input type="email" className="" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} /></label>
//                     </div>
//                     <div className="">
//                         <label htmlFor="userpassword" className="control-Element">Clave
//                                 <input type="password" className="login-control" id="password" onChange={(e) => setPassword(e.target.value)} /></label>
//                     </div>
//                     <button className="submitLogin" onClick={buttonClick}>Iniciar Sección</button>
//                     <div className="Login-forgetRegister">
//                         <Link className="btn-pink-link font " to="/register">Registrate</Link>
//                         <button className="btn" onClick={''}>Iniciar seción en <i className="fab fa-google"></i></button>
//                     </div>
//                 </form>
//             }
//             {
//                 user && <Products />
//             }
//         </div>
//     )
// }

// export default Auth;

import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import img1 from '../Style/user.png';

const Auth = () => (
    <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log("Logging in", values);
                setSubmitting(false);
            }, 500);
        }}

        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email()
                .required("Required"),
            password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            return (
                <div className="modal-dialog text-center">
                    <div className="col-sm-10 main-section" onSubmit={handleSubmit}>
                        <div className="modal-content">
                            <div className="col-12 user-img">
                                <img src={img1} alt="user" />
                            </div>
                            <form className="col-12" >
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        name="email"
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email && (
                                        <div class="form-text text-muted">{errors.email}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Password</label>
                                    <input
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.password && touched.password && (
                                        <div className="form-text text-muted">{errors.password}</div>
                                    )}
                                </div>
                                <button type="submit" className="btn" disabled={isSubmitting}><i className="fas fa-sign-in-alt"></i> Login </button>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }}
    </Formik>
);

export default Auth;
