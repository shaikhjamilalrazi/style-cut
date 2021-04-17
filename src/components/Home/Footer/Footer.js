import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const Address = [
        {
            name:
                "1235, Building name, Busy Commercial Street, Big City, Ny - 4215",
            link: "/",
        },
        { name: "Yards", link: "/" },
    ];
    const ourService = [
        { name: "Hair Cutting", link: "/" },
        { name: "Hair Styling", link: "/" },
        { name: "Detan & Bleach", link: "/" },
        { name: "Facials", link: "/" },
        { name: "Hair Colouring", link: "/" },
    ];

    const productsWeUse = [
        { name: "Shampoo", link: "/" },
        { name: "Conditioner", link: "/" },
        { name: "Treatment", link: "/" },
        { name: "Styling Products", link: "/" },
        { name: "Brushes & Combs", link: "/" },
    ];
    const additionalInfo = [
        { name: "The Brands", link: "/" },
        { name: "Special Vouchers", link: "/" },
        { name: "Affiliates", link: "/" },
        { name: "Specialist in Shop", link: "/" },
        { name: "Special Services", link: "/" },
    ];

    return (
        <footer className="footer-area">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol
                        key={4}
                        menuTitle="CONTACT US"
                        menuItems={Address}
                    >
                        <ul className="social-media list-inline">
                            <li className="list-inline-item">
                                <a href="//facebook.com">
                                    <FontAwesomeIcon
                                        className="icon active-icon"
                                        icon={faFacebookF}
                                    />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="//google.com">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faGooglePlusG}
                                    />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="//instagram.com">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faInstagram}
                                    />
                                </a>
                            </li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">
                                +2025550295
                            </button>
                        </div>
                    </FooterCol>
                    <FooterCol
                        key={1}
                        menuTitle="OUR BEST SERVICE"
                        menuItems={ourService}
                    />
                    <FooterCol
                        key={2}
                        menuTitle="PRODUCTS WE USE"
                        menuItems={productsWeUse}
                    />
                    <FooterCol
                        key={3}
                        menuTitle="ADDITIONAL INFO"
                        menuItems={additionalInfo}
                    />
                </div>
                <div className="copyRight text-center">
                    <p>
                        Copyright {new Date().getFullYear()} All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
