import React, { useEffect, useState } from "react";
import Sidebar from "../DashBoard/Sidebar/Sidebar";

const OrderList = () => {
    const OrderStyle = {
        height: "800px",
        width: "100%",
    };
    const [services, setservices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/Booklist")
            .then((res) => res.json())
            .then((data) => setservices(data));
    }, []);

    return (
        <div className="row" style={OrderStyle}>
            <div className="col-lg-2">
                <Sidebar />
            </div>

            <div className="col-lg-9 ">
                <h1>Order List</h1>
                <div className="ms-5">
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
                </div>
            </div>
        </div>
    );
};

export default OrderList;
