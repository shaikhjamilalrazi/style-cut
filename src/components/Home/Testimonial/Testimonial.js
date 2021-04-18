import React, { useEffect, useState } from "react";
import TestimonialContainer from "./TestimonialContainer/TestimonialContainer";

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    const testimonialsNew = [...testimonials];

    useEffect(() => {
        fetch("https://warm-sierra-96362.herokuapp.com/allRemarks")
            .then((res) => res.json())
            .then((data) => setTestimonials(data));
    }, []);

    const testimonialFirstHalf = testimonials.slice(
        1,
        Math.round(testimonials.length / 2)
    );

    let a = testimonialFirstHalf;
    let b = testimonialsNew;

    let valuesA = a.reduce(
        (a, { _id }) => Object.assign(a, { [_id]: _id }),
        {}
    );
    let valuesB = b.reduce(
        (a, { _id }) => Object.assign(a, { [_id]: _id }),
        {}
    );
    let testimonialSecondHalf = [
        ...a.filter(({ _id }) => !valuesB[_id]),
        ...b.filter(({ _id }) => !valuesA[_id]),
    ];

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
                        <TestimonialContainer
                            testimonials={testimonials}
                            testimonialObj={testimonialFirstHalf}
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div
                        id="carouselExampleCaptions"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <TestimonialContainer
                            testimonials={testimonialsNew}
                            testimonialObj={testimonialSecondHalf}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
