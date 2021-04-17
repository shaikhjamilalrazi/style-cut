import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { userContext } from "../../App";
import Sidebar from "../DashBoard/Sidebar/Sidebar";

const Book = () => {
    const bookStyle = {
        height: "800px",
        width: "100%",
    };

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const history = useHistory();
    const redirect = () => {
        const url = `/BookList`;
        history.push(url);
    };

    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    const { serviceName, description, image } = product;

    const submitBooking = (e) => {
        e.preventDefault();
        const status = "Pending";
        const bookDetail = {
            ...loggedInUser,
            serviceName,
            description,
            image,
            status,
        };

        fetch("http://localhost:5000/book", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(bookDetail),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    redirect();
                    setProduct([]);
                }
            });
    };

    return (
        <div className="row" style={bookStyle}>
            <div className="col-lg-2">
                <Sidebar />
            </div>

            <div className="col-lg-10">
                <h1>Book</h1>
                <div className="col-lg-9">
                    <form onSubmit={submitBooking}>
                        <div className="form-group p-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                value={loggedInUser.name}
                            />
                        </div>
                        <div className="form-group p-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                value={loggedInUser.email}
                            />
                        </div>
                        <div className="form-group p-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Service"
                                value={product.serviceName}
                            />
                        </div>
                        <div className="form-group text-end">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Book;
