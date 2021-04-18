import React, { useEffect, useState } from "react";
import Sidebar from "../DashBoard/Sidebar/Sidebar";

const OrderList = () => {
    const OrderStyle = {
        height: "800px",
        width: "100%",
    };
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://warm-sierra-96362.herokuapp.com/Booklist")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="row" style={OrderStyle}>
            <div className="col-lg-2">
                <Sidebar />
            </div>

            <div className="col-lg-9 ">
                <h1>Order List</h1>
                <div className="ms-5">
                    {services.length === 0 ? (
                        <div className="text-center">
                            <div
                                className="spinner-border text-primary"
                                role="status"
                            ></div>
                        </div>
                    ) : (
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Pay With</th>
                                    <th scope="col" className="text-center">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((service) => (
                                    <tr>
                                        <td>{service.name}</td>
                                        <td>{service.email}</td>
                                        <td>{service.serviceName}</td>
                                        <td>none</td>
                                        <td className="text-center">
                                            {service.status}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrderList;
