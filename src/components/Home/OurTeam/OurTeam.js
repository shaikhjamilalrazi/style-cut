import React from "react";
import "./OurTeam.css";
import OurTeamCard from "./OurTeamCard/OurTeamCard";
import image1 from "../../../images/pic.jpg";
import image2 from "../../../images/image_3.jpg";
import image3 from "../../../images/img4.jpg";
import image4 from "../../../images/img5.jpg";

const OurTeam = () => {
    const teamMembers = [
        {
            id: 1,
            name: "JIM CARRY",
            designation: "Facial Specialist",
            img: image1,
        },
        {
            id: 2,
            name: "MARK VICK",
            designation: "Hair Stylist",
            img: image4,
        },
        {
            id: 3,
            name: "LINCY MINDO",
            designation: "Fashion Designer",
            img: image2,
        },
        {
            id: 4,
            name: "ELIZA RIKA",
            designation: "Wedding Specialist",
            img: image3,
        },
    ];
    return (
        <div className="container my-5">
            <h1 className="text-center">Our Team</h1>
            <div className="card-content-team">
                {teamMembers.map((teamMember) => (
                    <OurTeamCard key={teamMember.id} teamMember={teamMember} />
                ))}
            </div>
        </div>
    );
};

export default OurTeam;
