import React from "react";
import "./OurTeamCard.css";

const OurTeamCard = (props) => {
    const { name, designation, img } = props.teamMember;
    return (
        <div className="box-item-team mx-auto my-5 pb-5 shadow">
            <img className="img-thumbnail" src={img} alt="" />

            <div className="box-name-team">
                <h3 className="text-uppercase">{name}</h3>
                <p>{designation}</p>
            </div>
        </div>
    );
};

export default OurTeamCard;
