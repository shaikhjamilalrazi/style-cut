import React from "react";
import "./ServiceCard.css";

import "./ServiceCard.css";

const ServiceCard = (props) => {
    const { _id, serviceName, description } = props.service;
    const { img } = props.service.image;

    return (
        <div className="box-item-service mx-auto my-5 pb-2 shadow">
            <div className="box-name-service">
                <h3 className="text-uppercase">{serviceName}</h3>
            </div>
            <div className="box-name-service">
                <img src={`data:image/png;base64,${img}`} alt="" />
            </div>
            <div className="box-name-service p-3">
                <p>{description}</p>
                <button
                    type="button"
                    onClick={() => props.addBooking(_id)}
                    className="btn btn-dark"
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
