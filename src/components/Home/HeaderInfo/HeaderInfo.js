import React from "react";
import image from "../../../images/image_1.jpg";
import "./HeaderInfo.css";

const HeaderInfo = () => {
    return (
        <div className="row mt-5">
            <div className="col-lg-6 d-flex align-items-center">
                <div className="text-uppercase">
                    <h4>With style cut</h4>
                    <h2 className="h2Style">Never</h2>
                    <br />
                    <h3 className="h3Style">Get out of</h3>
                    <br />
                    <h2 className="h2Style">style</h2>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="shadow p-3 bg-body rounded">
                    <img src={image} className="img-fluid rounded" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderInfo;
