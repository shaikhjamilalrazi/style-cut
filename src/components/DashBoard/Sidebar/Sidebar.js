import React, { useEffect, useState } from "react";
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
const Sidebar = ({ email }) => {
    const [isAdmin, setIsAdmin] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/isAdmin?email=${email}`;
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
            {email === isAdmin[0]?.email ? (
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
