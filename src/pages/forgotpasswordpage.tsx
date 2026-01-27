import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import "./styles/LoginPage.css"

const ForgotPasswordPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [forgotPasswordActive, setForgotPasswordActive] = useState(true);
    const [verificationActive, setVerificationActive] = useState(false)
    const [code, setCode] = useState(["", "", "", ""]);
    const [resendTimer, setResendTimer] = useState(50);
    const [canResend, setCanResend] = useState(false);
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);




    const navigate = useNavigate();

    const handleBackToEmail = () => {
        setVerificationActive(false);
        setForgotPasswordActive(true);
        setCode(["", "", "", ""]);
    };

    const resetOtp = () => {
        setCode(["", "", "", ""]);
        setTimeout(() => {
            inputRefs.current[0]?.focus();
        }, 50);
    };


    useEffect(() => {
        if (!verificationActive) return;

        const firstEmptyIndex = code.findIndex((d) => d === "");
        if (firstEmptyIndex !== -1) {
            inputRefs.current[firstEmptyIndex]?.focus();
        }
    }, [verificationActive, code]);



    const handleSendCode = () => {
        setForgotPasswordActive(false);
        setVerificationActive(true);
        resetOtp();
        setResendTimer(50);
        setCanResend(false);

        console.log("Send code to:", email);
    };


    const handleVerification = () => {
        const enteredCode = code.join("");
        console.log("Verifying code:", enteredCode);

        // TODO: call API here
    };

    useEffect(() => {
        if (!verificationActive) return;

        if (resendTimer === 0) {
            setCanResend(true);
            return;
        }

        const timer = setTimeout(() => {
            setResendTimer((prev) => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [resendTimer, verificationActive]);

    const handleHeaderBack = () => {
        if (verificationActive) {
            // If in forgot password mode, toggle back to login
            setVerificationActive(false);
            setForgotPasswordActive(true);
        } else {
            // Otherwise, navigate to previous page
            navigate(-1);
        }
    };

    return (
        <div className="page-center">
            <div className="login-root">

                {/* Background image (mobile only) */}
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


                {/* Header on image */}
                <div className="login-header">

                    <h1>{verificationActive ? 'Verification' : 'Forgot Password'}</h1>
                    <p>
                        {verificationActive ? 'We have sent a code to your email' : 'Enter your email to receive a reset code'
                        }
                    </p>
                </div>

                {/* White overlay */}
                <div className="login-overlay">
                    <div className="form-container">

                        {/* Forgot password mode */}


                        {forgotPasswordActive && (
                            <div className="forgot-mode-buttons">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        handleSendCode();
                                    }}
                                >
                                    <div className="input-group">
                                        <label>Email / Mobile Number</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <button className="login-button" type="submit">
                                        Send Code
                                    </button>
                                </form>
                                <Link to="/loginpage" className="back-login-button">
                                    ← Back to Login
                                </Link>
                            </div>

                        )}

                        {verificationActive && (
                            <div className="verification-mode-buttons">
                                <form
                                    className="verification-card"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        handleVerification();
                                    }}
                                >
                                    <div className="code-row">
                                        {code.map((digit, index) => (
                                            <input
                                            aria-label='otp'
                                                key={index}
                                                ref={(el) => (inputRefs.current[index] = el)}
                                                type="text"
                                                inputMode="numeric"
                                                maxLength={1}
                                                value={digit}
                                                className="otp-input"
                                                onChange={(e) => {
                                                    const value = e.target.value.replace(/\D/g, "");

                                                    const newCode = [...code];
                                                    newCode[index] = value;
                                                    setCode(newCode);

                                                    if (value && index < code.length - 1) {
                                                        inputRefs.current[index + 1]?.focus();
                                                    }
                                                }}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Backspace") {
                                                        e.preventDefault();

                                                        const newCode = [...code];

                                                        if (code[index]) {
                                                            // Clear current box
                                                            newCode[index] = "";
                                                            setCode(newCode);
                                                        } else if (index > 0) {
                                                            // Move to previous box
                                                            newCode[index - 1] = "";
                                                            setCode(newCode);
                                                            inputRefs.current[index - 1]?.focus();
                                                        }
                                                    }
                                                }}
                                                required
                                            />
                                        ))}
                                    </div>


                                    <div className="resend-row">
                                        <span className="code-label">CODE</span>

                                        {canResend ? (
                                            <button
                                                type="button"
                                                className="resend-btn"
                                                onClick={handleSendCode}
                                            >
                                                RESEND
                                            </button>
                                        ) : (
                                            <span className="resend-text">
                                                RESEND IN {resendTimer} SEC
                                            </span>
                                        )}
                                    </div>


                                    <button className="login-button verify-btn" type="submit">
                                        VERIFY
                                    </button>
                                </form>
                                <button
                                    type="button"
                                    className="verification-back-link"
                                    onClick={handleBackToEmail}
                                >
                                    ← Back
                                </button>
                            </div>

                        )}





                    </div>
                </div>

            </div>
        </div>
    );
};

export default ForgotPasswordPage;
