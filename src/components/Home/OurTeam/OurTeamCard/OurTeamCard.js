import React from "react";
import "./OurTeamCard.css";
import pic from "../../../../images/pic.jpg";

const OurTeamCard = (props) => {
    const { name, designation } = props.teamMember;
    console.log(props);
    return (
        <div className="box-item-team mx-auto my-5 pb-5 shadow">
            <img className="img-thumbnail" src={pic} alt="" />

            <div className="box-name-team">
                <h3 className="text-uppercase">{name}</h3>
                <p>{designation}</p>
            </div>
        </div>
    );
};

export default OurTeamCard;
