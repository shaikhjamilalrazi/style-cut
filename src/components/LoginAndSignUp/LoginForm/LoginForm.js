import React from "react";

const LoginForm = ({
    handleSignIn,
    handleBlur,
    onSubmitoldUserLoginMethod,
}) => {
    return (
        <div>
            <form
                action=""
                onSubmit={onSubmitoldUserLoginMethod}
                style={{ border: "1px solid #ccc" }}
            >
                <div className="form-container">
                    <h2> LogIn </h2>
                    <br />
                    <br />

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

                    <p className="text-center">
                        Don’t have an account?
                        <a
                            href="#"
                            onClick={handleSignIn}
                            style={{
                                color: "#0f0e1c",
                                paddingLeft: "10px",
                            }}
                        >
                            Create an account
                        </a>
                        .
                    </p>
                    <div className="clearfix d-grid">
                        <input
                            type="submit"
                            className="signupbtn"
                            value="Login"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
