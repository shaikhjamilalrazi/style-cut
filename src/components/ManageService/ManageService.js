import React from "react";
import Sidebar from "../DashBoard/Sidebar/Sidebar";

const ManageService = () => {
    const manageServiceStyle = {
        height: "800px",
        width: "100%",
    };
    return (
        <div className="row" style={manageServiceStyle}>
            <div className="col-lg-2">
                <Sidebar />
            </div>

            <div className="col-lg-10">
                <h1>Manage Service</h1>
            </div>
        </div>
    );
};

export default ManageService;
