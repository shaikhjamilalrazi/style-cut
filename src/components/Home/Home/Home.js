import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import OurNumbers from "../OurNumbers/OurNumbers";
import InfoForm from "../InfoForm/InfoForm";
import OurService from "../OurService/OurService";
import OurTeam from "../OurTeam/OurTeam";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <>
            <Header />
            <OurNumbers />
            <OurService />
            <OurTeam />
            <Testimonial />
            <InfoForm />
            <Footer />
        </>
    );
};

export default Home;
