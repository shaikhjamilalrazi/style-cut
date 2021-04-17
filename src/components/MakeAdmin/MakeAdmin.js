import React, { useState } from "react";
import Sidebar from "../DashBoard/Sidebar/Sidebar";

const MakeAdmin = () => {
    const [info, setInfo] = useState({});

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", info.email);
        fetch("http://localhost:5000/makeAdmin", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const makeAdminStyle = {
        height: "800px",
        width: "100%",
    };
    return (
        <div className="row" style={makeAdminStyle}>
            <div className="col-lg-2">
                <Sidebar />
            </div>

            <div className="col-lg-4">
                <h1>Make Admin</h1>
                <div class="input-group mb-3 mt-4">
                    <input
                        name="email"
                        onBlur={handleBlur}
                        type="text"
                        class="form-control"
                        placeholder="Add Email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                        <button
                            class="btn btn-outline-danger"
                            onClick={handleSubmit}
                            type="button"
                        >
                            Button
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;
