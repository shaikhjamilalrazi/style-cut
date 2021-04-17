import React from "react";
import "./OurNumbers.css";

const numbers = [
    { num: 12, title: "TOP EXPTERTS" },
    { num: 22, title: "HAIR STYLES" },
    { num: 451, title: "SATISFIED CUSTOMERS" },
    { num: 100, title: "STYLE TIPS" },
];

const OurNumbers = () => {
    return (
        <div className="container mt-5 bg">
            <h1 className="text-center py-5">Our Numbers</h1>
            <div className="card-content">
                {numbers.map((number) => (
                    <div className="box-item mx-auto mt-3 mb-3 pb-5">
                        <div className="box-name">
                            <h3>{number.num}</h3>
                        </div>
                        <div className="box-name">
                            <h3>{number.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurNumbers;
