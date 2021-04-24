import React from "react";

const SignUpForm = ({
    handleSignIn,
    handleBlur,
    onSubmitCustomLoginMethod,
}) => {
    return (
        <div>
            <form
                action=""
                onSubmit={onSubmitCustomLoginMethod}
                style={{ border: "1px solid #ccc" }}
            >
                <div className="form-container">
                    <h2>Create an account</h2>
                    <br />
                    <br />

                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        onBlur={handleBlur}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        onBlur={handleBlur}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onBlur={handleBlur}
                        required
                    />

                    {/* {!signIn && (
            <input
                type="password"
                onBlur={handleBlur}
                placeholder="Confirm Password"
                name="psw-repeat"
                required
            />
        )} */}

                    <p className="text-center">
                        Already have an account
                        <a
                            href="#"
                            onClick={handleSignIn}
                            style={{
                                color: "#0f0e1c",
                                paddingLeft: "10px",
                            }}
                        >
                            LogIn
                        </a>
                        .
                    </p>
                    <div className="clearfix d-grid">
                        <input
                            type="submit"
                            className="signupbtn"
                            value="Create an account"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
