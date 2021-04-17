import React, { useEffect, useState } from "react";
import Sidebar from "../DashBoard/Sidebar/Sidebar";
import ManageServiceCard from "./ManageServiceCard/ManageServiceCard";

const ManageService = () => {
    const manageServiceStyle = {
        height: "800px",
        width: "100%",
    };
    const [allServices, setAllServices] = useState([]);

    const fetchProducts = () => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setAllServices(data));
    };

    useEffect(() => {
        fetchProducts();
    }, [allServices]);

    const deleteService = (id) => {
        const url = `http://localhost:5000/deleteService/${id}`;
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
                <div className="card-content-manageService">
                    {allServices.map((service) => (
                        <ManageServiceCard
                            key={service._id}
                            service={service}
                            deleteService={deleteService}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageService;
