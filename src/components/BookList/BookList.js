import React, { useEffect, useState } from "react";
import "./BookList.css";
import Sidebar from "../DashBoard/Sidebar/Sidebar";
import BookListCard from "./BookListCard/BookListCard";

const BookList = () => {
    const bookListStyle = {
        height: "800px",
        width: "100%",
    };

    const [services, setservicesBooking] = useState([]);

    useEffect(() => {
        fetch("https://warm-sierra-96362.herokuapp.com/Booklist")
            .then((res) => res.json())
            .then((data) => setservicesBooking(data));
    }, []);
    return (
        <div className="row" style={bookListStyle}>
            <div className="col-lg-2">
                <Sidebar />
            </div>

            <div className="col-lg-10">
                <h1>BookList</h1>

                {services.length === 0 ? (
                    <div className="text-center">
                        <div
                            className="spinner-border text-primary"
                            role="status"
                        ></div>
                    </div>
                ) : (
                    <div className="card-content-book">
                        {services.map((service) => (
                            <BookListCard key={service._id} service={service} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookList;
