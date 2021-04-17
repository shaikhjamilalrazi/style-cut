import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const DashBoard = () => {
    const DashBoardMainStyle = {
        height: "800px",
        width: "100%",
    };
    return (
        <div className="row" style={DashBoardMainStyle}>
            <div className="col-lg-2">
                <Sidebar />
            </div>

            <div className="col-lg-10"></div>
        </div>
    );
};

export default DashBoard;
