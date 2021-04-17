import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut } from "@fortawesome/free-solid-svg-icons";
import { Link, useRouteMatch } from "react-router-dom";
import { userContext } from "../../../App";

const Navbar = () => {
    const [loggedInUser] = useContext(userContext);
    const route = useRouteMatch();
    const matchRoute = route.path === "/LoginAndSignUp" ? false : true;
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link
                    style={{
                        fontWeight: "bolder",
                        textTransform: "uppercase",
                    }}
                    className="navbar-brand"
                    to="/"
                >
                    <FontAwesomeIcon icon={faCut} /> Style Cut
                </Link>

                {matchRoute && (
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                )}

                {matchRoute && (
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                            <Link className="nav-link ms-lg-4" to="/">
                                About
                            </Link>
                            <Link className="nav-link ms-lg-4" to="/">
                                Portfolio
                            </Link>
                            <Link className="nav-link ms-lg-4" to="/">
                                Team
                            </Link>

                            <Link className="nav-link ms-lg-4" to="/">
                                Services
                            </Link>
                            {loggedInUser.email && (
                                <Link
                                    className="nav-link ms-lg-4"
                                    to="/Dashboard"
                                >
                                    Dashboard
                                </Link>
                            )}
                            {loggedInUser.name ? (
                                <img
                                    src={loggedInUser.photo}
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "20px",
                                        marginLeft: "15px",
                                        marginTop: "5px",
                                    }}
                                    alt={loggedInUser.name}
                                ></img>
                            ) : (
                                <Link
                                    className="nav-link ms-lg-4"
                                    to="/LoginAndSignUp"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
