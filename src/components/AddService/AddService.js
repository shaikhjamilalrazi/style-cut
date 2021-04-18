import React, { useState } from "react";
import "./AddService.css";
import Sidebar from "../DashBoard/Sidebar/Sidebar";

const AddService = () => {
    const serviceStyle = {
        height: "800px",
        width: "100%",
    };

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(info);
    };
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("file", file);
        formData.append("serviceName", info.serviceName);
        formData.append("serviceDescription", info.serviceDescription);

        fetch("https://warm-sierra-96362.herokuapp.com/addService", {
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

    return (
        <div className="row" style={serviceStyle}>
            <div className="col-lg-2">
                <Sidebar />
            </div>

            <div className="col-lg-10">
                <h1>Add Services</h1>
                <form onSubmit={handleSubmit}>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group p-2">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="serviceName"
                                        className="form-control"
                                        placeholder="Name"
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className="form-group p-2">
                                    <label>Description</label>
                                    <textarea
                                        className="form-control"
                                        cols="20"
                                        rows="10"
                                        name="serviceDescription"
                                        placeholder="Description"
                                        onBlur={handleBlur}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group p-2">
                                    <label>Image</label>
                                    <input
                                        onChange={handleFileChange}
                                        type="file"
                                        className="form-control"
                                        placeholder="Picture"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-end">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;
