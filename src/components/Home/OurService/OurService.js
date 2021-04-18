import React, { useEffect, useState } from "react";
import "./OurService.css";
import { useHistory } from "react-router";
import ServiceCard from "./ServiceCard/ServiceCard";

const OurService = () => {
    const [services, setservices] = useState([]);

    useEffect(() => {
        fetch("https://warm-sierra-96362.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setservices(data));
    }, []);

    const history = useHistory();

    const addBooking = (id) => {
        const url = `/Book/${id}`;
        history.push(url);
    };

    return (
        <div className="container my-5">
            <h1 className="text-center ">Our Service</h1>
            {services.length === 0 ? (
                <div className="text-center">
                    <div
                        className="spinner-border text-danger"
                        role="status"
                    ></div>
                </div>
            ) : (
                <div className="card-content-service">
                    {services.map((service) => (
                        <ServiceCard
                            key={service._id}
                            service={service}
                            addBooking={addBooking}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default OurService;
