import React from "react";

const BookListCard = (props) => {
    const { serviceName, status, description } = props.service;
    const { img } = props.service.image;
    return (
        <div className="box-item-book mx-auto my-5 p-3 shadow">
            <div className="box-name-book d-flex justify-content-between">
                <div>
                    <img src={`data:image/png;base64,${img}`} alt="" />
                </div>
                <div>
                    <button
                        className={`btn btn-${
                            status === "Pending" ? "danger" : "success"
                        }`}
                    >
                        {status}
                    </button>
                </div>
            </div>
            <div className="box-name-book">
                <h3 className="text-uppercase">{serviceName}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BookListCard;
