import React, { useContext, useState } from "react";
import "./LoginAndSignUp.css";
import facebook from "../../images/facebook.png";
import Google from "../../images/Google.png";
// import firebase from "firebase/app";
// import "firebase/auth";
import { useHistory, useLocation } from "react-router";
// import firebaseConfig from "./firebase.config";
import { userContext } from "../../App";
import Navbar from "../Home/Navbar/Navbar";
import {
    CustomLoginMethod,
    GoogleSignInMethod,
    initializeFramework,
    oldUserLoginMethod,
} from "./LoginManagement/LoginManegment";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";

const LoginAndSignUp = () => {
    const [signIn, setSignIn] = useState(true);

    const handleSignIn = (e) => {
        e.preventDefault();
        setSignIn(!signIn);
    };

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // if (firebase.apps.length === 0) {
    //     firebase.initializeApp(firebaseConfig);
    // }
    initializeFramework();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        photo: "",
    });

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    };

    const handleSignInGoogle = () => {
        // Old same place
        // const googleProvider = new firebase.auth.GoogleAuthProvider();
        // firebase
        //     .auth()
        //     .signInWithPopup(googleProvider)
        //     .then((res) => {
        //         const { displayName, email, photoURL } = res.user;
        //         const signedInUser = {
        //             name: displayName,
        //             email: email,
        //             photo: photoURL,
        //         };
        //         setUser(signedInUser);
        //         handleResponse(signedInUser, true);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         console.log(err.message);
        //     });

        //  New
        GoogleSignInMethod().then((res) => {
            const { displayName, email, photoURL } = res;
            const signedInUser = {
                name: displayName,
                email: email,
                photo: photoURL,
            };
            setUser(signedInUser);
            handleResponse(signedInUser, true);
        });
    };

    // const hanbleSignInFacebook = () => {
    //     const facebookProvider = new firebase.auth.FacebookAuthProvider();
    //     firebase
    //         .auth()
    //         .signInWithPopup(facebookProvider)
    //         .then((result) => {
    //             const { displayName, email, photoURL } = result.user;
    //             const signedInUser = {
    //                 name: displayName,
    //                 email: email,
    //                 photo: photoURL,
    //             };
    //             setUser(signedInUser);
    //             handleResponse(signedInUser, true);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             console.log(error.message);
    //         });
    // };

    const handleBlur = (e) => {
        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
    };

    // const onSubmit = (e) => {
    //     !signIn
    //         ? CustomLoginMethod(user.email, user.password, user.name).then(
    //               (res) => {
    //                   handleResponse(res, true);
    //               }
    //           )
    //         : oldUserLoginMethod(user.email, user.password).then((res) => {
    //               handleResponse(res, true);
    //           });
    //     e.preventDefault();
    // };

    const onSubmitoldUserLoginMethod = (e) => {
        oldUserLoginMethod(user.email, user.password).then((res) => {
            const { displayName, email } = res;
            const signedInUser = {
                name: displayName,
                email: email,
            };
            setUser(signedInUser);
            handleResponse(signedInUser, true);
        });
        e.preventDefault();
    };

    const onSubmitCustomLoginMethod = (e) => {
        CustomLoginMethod(user.email, user.password, user.name).then((res) => {
            const { displayName, email } = res;
            const signedInUser = {
                name: displayName,
                email: email,
            };
            setUser(signedInUser);
            handleResponse(signedInUser, true);
        });
        e.preventDefault();
    };

    return (
        <div className="container">
            <Navbar />
            <div className="row pt-5">
                <div className="col-lg-6 mx-auto txt-pass">
                    {signIn ? (
                        <LoginForm
                            handleSignIn={handleSignIn}
                            handleBlur={handleBlur}
                            onSubmitoldUserLoginMethod={
                                onSubmitoldUserLoginMethod
                            }
                        />
                    ) : (
                        <SignUpForm
                            handleSignIn={handleSignIn}
                            handleBlur={handleBlur}
                            onSubmitCustomLoginMethod={
                                onSubmitCustomLoginMethod
                            }
                        />
                    )}
                    {/* <form
                        action=""
                        onSubmit={
                            signIn
                                ? onSubmitoldUserLoginMethod
                                : onSubmitCustomLoginMethod
                        }
                        style={{ border: "1px solid #ccc" }}
                    >
                        <div className="form-container">
                            <h2>{signIn ? "LogIn" : "Create an account"}</h2>
                            <br />
                            <br />

                            {!signIn && (
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    onBlur={handleBlur}
                                    required
                                />
                            )}

                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                onBlur={handleBlur}
                                required
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onBlur={handleBlur}
                                required
                            />

                            {!signIn && (
                                <input
                                    type="password"
                                    onBlur={handleBlur}
                                    placeholder="Confirm Password"
                                    name="psw-repeat"
                                    required
                                />
                            )}

                            <p className="text-center">
                                {signIn
                                    ? "Don’t have an account?"
                                    : "Already have an account"}
                                <a
                                    href="#"
                                    onClick={handleSignIn}
                                    style={{
                                        color: "#0f0e1c",
                                        paddingLeft: "10px",
                                    }}
                                >
                                    {signIn ? "Create an account" : "LogIn"}
                                </a>
                                .
                            </p>
                            <div className="clearfix d-grid">
                                <input
                                    type="submit"
                                    className="signupbtn"
                                    value={
                                        signIn ? "Login" : "Create an account"
                                    }
                                />
                            </div>
                        </div>
                    </form> */}
                    <h4 className="pt-4 mx-auto">
                        <span>Or</span>
                    </h4>
                    <div
                        onClick={handleSignInGoogle}
                        className="social-login mx-auto d-flex "
                    >
                        <div className="logo">
                            <img src={Google} alt="" />
                        </div>
                        <h3>Continue with Google</h3>
                    </div>
                    {/* <div
                        onClick={hanbleSignInFacebook}
                        className="social-login mx-auto mt-3 d-flex"
                    >
                        <div className="logo">
                            <img src={facebook} alt="" />
                        </div>
                        <h3>Continue with facebook</h3>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default LoginAndSignUp;
