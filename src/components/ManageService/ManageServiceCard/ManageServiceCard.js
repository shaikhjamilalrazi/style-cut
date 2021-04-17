import React from "react";

const ManageServiceCard = (props) => {
    const { _id, serviceName, description } = props.service;
    const { img } = props.service.image;

    return (
        <div className="box-item-manageService mx-auto my-5 p-3 shadow">
            <div className="box-name-manageService d-flex justify-content-between">
                <div>
                    <img src={`data:image/png;base64,${img}`} alt="" />
                </div>
                <div>
                    <button
                        className="btn btn-danger"
                        onClick={() => props.deleteService(`${_id}`)}
                    >
                        Delete
                    </button>
                </div>
            </div>
            <div className="box-name-manageService">
                <h3 className="text-uppercase">{serviceName}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ManageServiceCard;
