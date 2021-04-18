import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { userContext } from "../../App";
import Sidebar from "../DashBoard/Sidebar/Sidebar";

const Review = () => {
    const reviewStyle = {
        height: "600px",
        width: "100%",
    };

    const history = useHistory();
    const redirect = () => {
        const url = `/Home`;
        history.push(url);
    };

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [info, setInfo] = useState({});

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const submitRemark = (e) => {
        e.preventDefault();

        const bookDetail = {
            ...loggedInUser,
            ...info,
        };

        fetch("https://warm-sierra-96362.herokuapp.com/Remarks", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(bookDetail),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    redirect();
                    setInfo({});
                }
            });
    };

    return (
        <div className="row" style={reviewStyle}>
            <div className="col-lg-2">
                <Sidebar />
            </div>

            <div className="col-lg-10">
                <h1>Review</h1>
                <div className="col-lg-9">
                    <form onSubmit={submitRemark}>
                        <div className="form-group p-2">
                            <input
                                name="name"
                                readOnly
                                value={loggedInUser.name}
                                onBlur={handleBlur}
                                type="text"
                                className="form-control"
                                placeholder="Name"
                            />
                        </div>
                        <div className="form-group p-2">
                            <input
                                name="designation"
                                onBlur={handleBlur}
                                type="text"
                                className="form-control"
                                placeholder="Designation"
                            />
                        </div>
                        <div className="form-group p-2">
                            <textarea
                                name="description"
                                onBlur={handleBlur}
                                className="form-control"
                                cols="30"
                                rows="10"
                                placeholder="Description"
                            ></textarea>
                        </div>
                        <div className="form-group text-end">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;
