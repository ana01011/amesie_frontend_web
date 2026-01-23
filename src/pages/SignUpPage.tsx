import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "./SignUpPage.css"

const SignUpPage: React.FC = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const navigate = useNavigate();
    const handleHeaderBack = () => {
        // Otherwise, navigate to previous page
        navigate(-1);
    };
    const handleSignup = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log("Signing up with:", {
            name,
            email,
            password,
        });

        // TODO: API call here
    };


    return (
        <div className="page-center">
            <div className="signup-root">
                <img
                    src="/images/splash-i.png"
                    alt="background"
                    className="bg-image"
                />

                <button className="header-back-btn" onClick={handleHeaderBack} aria-label="Go Back">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                {/* Header */}
                <div className="signup-header">
                    <h1>Sign Up</h1>
                    <p>Please sign in to get started</p>
                </div>

                {/* Overlay */}

                <form
                    className="signup-overlay"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSignup();
                    }}
                >
                    <div className="form-scroll">
                        <div className="form-container">
                            <div className="input-group">
                                <label>NAME</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="input-group">
                                <label>EMAIL / MOBILE NUMBER</label>
                                <input
                                    type="text"
                                    placeholder="Enter your email or mobile number"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="input-group password-group">
                                <label>PASSWORD</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span
                                    className="eye"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "🙈" : "👁️"}
                                </span>
                            </div>

                            <div className="input-group password-group">
                                <label>RE-TYPE PASSWORD</label>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Re-enter your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <span
                                    className="eye"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                >
                                    {showConfirmPassword ? "🙈" : "👁️"}
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className="fix-footer">
                        <button className="primary-button" type="submit" >  Sign Up
                        </button>


                        <div className="footer">
                            <p>
                                Already have an account?{" "}
                                <Link to="/loginpage">Log In</Link>

                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default SignUpPage;
