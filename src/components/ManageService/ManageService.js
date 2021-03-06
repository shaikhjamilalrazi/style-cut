import React, { useEffect, useState } from "react";
import Sidebar from "../DashBoard/Sidebar/Sidebar";
import ManageServiceCard from "./ManageServiceCard/ManageServiceCard";
import "./ManageService.css";

const ManageService = () => {
    const manageServiceStyle = {
        height: "800px",
        width: "100%",
    };
    const [allServices, setAllServices] = useState([]);

    const fetchProducts = () => {
        fetch("https://warm-sierra-96362.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setAllServices(data));
    };

    useEffect(() => {
        fetchProducts();
    }, [allServices]);

    const deleteService = (id) => {
        const url = `https://warm-sierra-96362.herokuapp.com/deleteService/${id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => fetchProducts());
    };

    return (
        <div className="row" style={manageServiceStyle}>
            <div className="col-lg-2">
                <Sidebar />
            </div>

            <div className="col-lg-10">
                <h1>Manage Service</h1>
                {allServices.length === 0 ? (
                    <div className="text-center">
                        <div
                            className="spinner-border text-danger"
                            role="status"
                        ></div>
                    </div>
                ) : (
                    <div className="card-content-manageService">
                        {allServices.map((service) => (
                            <ManageServiceCard
                                key={service._id}
                                service={service}
                                deleteService={deleteService}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageService;
