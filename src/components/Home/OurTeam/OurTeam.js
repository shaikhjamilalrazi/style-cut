import React from "react";
import "./OurTeam.css";
import OurTeamCard from "./OurTeamCard/OurTeamCard";

const OurTeam = () => {
    const teamMembers = [
        {
            id: 1,
            name: "JIM CARRY",
            designation: "Facial Specialist",
        },
        { id: 2, name: "MARK VICK", designation: "Hair Stylist" },
        { id: 3, name: "LINCY MINDO", designation: "Fashion Designer" },
        { id: 4, name: "ELIZA RIKA", designation: "Wedding Specialist" },
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
