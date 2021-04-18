import React, { useContext } from "react";
import { userContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const DashBoardMainStyle = {
        height: "800px",
        width: "100%",
    };
    return (
        <div className="row" style={DashBoardMainStyle}>
            <div className="col-lg-2">
                <Sidebar />
            </div>

            <div className="col-lg-10">
                <h1 className="text-center">Welcome {loggedInUser.name}</h1>
            </div>
        </div>
    );
};

export default DashBoard;
