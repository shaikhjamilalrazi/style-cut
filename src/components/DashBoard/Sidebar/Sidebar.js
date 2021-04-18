import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTable,
    faPlus,
    faPen,
    faUserPlus,
    faCartPlus,
    faCommentAlt,
    faList,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState([]);
    useEffect(() => {
        const url = `https://warm-sierra-96362.herokuapp.com/isAdmin?email=${loggedInUser.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setIsAdmin(data));
    }, []);

    return (
        <div className="sidenav">
            <Link
                to="/"
                style={{
                    textAlign: "center",
                    color: "#ffffff",
                    fontSize: "40px",
                }}
            >
                Style Cut
            </Link>
            {loggedInUser.email.toLowerCase() ===
            isAdmin[0]?.email.ttoLowerCase() ? (
                <>
                    {/* admin start */}
                    <Link to="/OrderList">
                        <FontAwesomeIcon icon={faPen} /> Order List
                    </Link>
                    <Link to="/AddService">
                        <FontAwesomeIcon icon={faPlus} /> Add Service
                    </Link>
                    <Link to="/MakeAdmin">
                        <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                    </Link>
                    <Link to="/ManageService">
                        <FontAwesomeIcon icon={faTable} /> Manage Service
                    </Link>
                    {/* admin end */}
                </>
            ) : (
                <>
                    <Link to="/Book">
                        <FontAwesomeIcon icon={faCartPlus} /> Book
                    </Link>
                    <Link to="/BookList">
                        <FontAwesomeIcon icon={faList} /> Booking List
                    </Link>
                    <Link to="/Review">
                        <FontAwesomeIcon icon={faCommentAlt} /> Review
                    </Link>
                </>
            )}
        </div>
    );
};

export default Sidebar;
