import React from "react";

const TestimonialContainer = (props) => {
    const { testimonials, testimonialObj } = props;

    return (
        <div className="carousel-inner shadow">
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

            {testimonialObj?.slice(1).map((testimonial) => (
                <div className="carousel-item" key={testimonial._id}>
                    <div className="d-flex">
                        <img
                            className="img-fluid"
                            style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "100%",
                            }}
                            src={testimonial?.photo}
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
    );
};

export default TestimonialContainer;
