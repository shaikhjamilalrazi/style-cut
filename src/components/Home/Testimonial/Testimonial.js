import React, { useEffect, useState } from "react";

// const testimonials = [
//     {
//         name: "jamil",
//         remark:
//             "jamil Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates perferendis qui tempora natus ",
//     },
//     {
//         name: "nobin",
//         remark:
//             "nobin Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates perferendis qui tempora natus ",
//     },
//     {
//         name: "noor",
//         remark:
//             "noor Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates perferendis qui tempora natus ",
//     },
//     {
//         name: "jack",
//         remark:
//             "jack Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates perferendis qui tempora natus porro ",
//     },
// ];

// const testimonialsNew = [...testimonials];

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    const testimonialsNew = [...testimonials];

    useEffect(() => {
        fetch("http://localhost:5000/allRemarks")
            .then((res) => res.json())
            .then((data) => setTestimonials(data));
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-5">Testimonial</h1>
            <div className="row">
                <div className="col-lg-6">
                    <div
                        id="carouselExampleCaptions"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex">
                                    <img
                                        className="img-fluid"
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "100%",
                                        }}
                                        src={testimonials[0]?.photo}
                                        alt=""
                                    />
                                    <div className="ps-3 w-75">
                                        <h1>{testimonials[0]?.name}</h1>
                                        <p>{testimonials[0]?.description}</p>
                                    </div>
                                </div>
                            </div>

                            {testimonials?.slice(1).map((testimonial) => (
                                <div className="carousel-item">
                                    <div className="d-flex">
                                        <img
                                            className="img-fluid"
                                            style={{
                                                width: "100px",
                                                height: "100px",
                                                borderRadius: "100%",
                                            }}
                                            src={testimonials?.photo}
                                            alt=""
                                        />
                                        <div className="ps-3 w-75">
                                            <h1>{testimonial?.name}</h1>
                                            <p>{testimonial?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div
                        id="carouselExampleCaptions"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex p-3">
                                    <img
                                        className="img-fluid"
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "100%",
                                        }}
                                        src={testimonialsNew[0]?.photo}
                                        alt=""
                                    />
                                    <div className="ps-3 w-75">
                                        <h1>{testimonialsNew[0]?.name}</h1>
                                        <p>{testimonialsNew[0]?.description}</p>
                                    </div>
                                </div>
                            </div>

                            {testimonialsNew?.slice(1).map((testimonial) => (
                                <div className="carousel-item">
                                    <div className="d-flex p-3">
                                        <img
                                            className="img-fluid"
                                            style={{
                                                width: "100px",
                                                height: "100px",
                                                borderRadius: "100%",
                                            }}
                                            src={testimonialsNew?.photo}
                                            alt=""
                                        />
                                        <div className="ps-3 w-75">
                                            <h1>{testimonial?.name}</h1>
                                            <p>{testimonial?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;