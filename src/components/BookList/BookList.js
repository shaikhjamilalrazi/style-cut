import React, { useEffect, useState } from "react";
import "./BookList.css";
import Sidebar from "../DashBoard/Sidebar/Sidebar";
import BookListCard from "./BookListCard/BookListCard";

const BookList = () => {
    const bookListStyle = {
        height: "800px",
        width: "100%",
    };
    // const services = [
    //     {
    //         id: 1,
    //         title: "CUTTING",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetu adipisicing elit. Libero, voluptates?",
    //         status: "Pending",
    //     },
    //     {
    //         id: 2,
    //         title: "STYLING",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetu adipisicing elit. Libero, voluptates?",
    //         status: "Done",
    //     },
    //     {
    //         id: 3,
    //         title: "COLOURING",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetu adipisicing elit. Libero, voluptates?",
    //         status: "Pending",
    //     },
    //     {
    //         id: 4,
    //         title: "FACIALS",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetu adipisicing elit. Libero, voluptates?",
    //         status: "Done",
    //     },
    // ];

    const [services, setservices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/Booklist")
            .then((res) => res.json())
            .then((data) => setservices(data));
    }, []);
    return (
        <div className="row" style={bookListStyle}>
            <div className="col-lg-2">
                <Sidebar />
            </div>

            <div className="col-lg-10">
                <h1>BookList</h1>
                <div className="card-content-book">
                    {services.map((service) => (
                        <BookListCard key={service._id} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookList;
