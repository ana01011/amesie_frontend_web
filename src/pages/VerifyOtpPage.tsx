import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/LoginPage.css";

const VerifyOtpPage: React.FC = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("otpEmail");

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(40);
  const [canResend, setCanResend] = useState(false);

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'instant' });
}, []);
  // Focus first empty box
  useEffect(() => {
    const firstEmptyIndex = code.findIndex((d) => d === "");
    if (firstEmptyIndex !== -1) {
      inputRefs.current[firstEmptyIndex]?.focus();
    }
  }, [code]);

  useEffect(() => {
    if (!email) {
      navigate("/loginpage");
    }
  }, [email, navigate]);

  // Resend timer
  useEffect(() => {
    if (resendTimer === 0) {
      setCanResend(true);
      return;
    }

    const timer = setTimeout(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [resendTimer]);

  const handleChange = (value: string, index: number) => {
    const cleanValue = value.replace(/\D/g, "");
    const newCode = [...code];
    newCode[index] = cleanValue;
    setCode(newCode);

    if (cleanValue && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (!code[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleVerify = async () => {
    const enteredCode = code.join("");

    if (enteredCode.length !== 6) {
      alert("Enter 6 digit code");
      return;
    }

    try {
      const response = await fetch(
        "http://76.13.17.48:8001/api/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            otp: enteredCode,
            purpose: "auth", // auth
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const errorMessage =
          data?.detail || data?.message || "Verification failed";
        alert(errorMessage);
        return;
      }

      console.log("Status:", response.status);
      console.log("Full Response Object:", response);
      console.log("Response Body:", data);

      localStorage.setItem("otpres", data);

      // Redirect after success
      localStorage.removeItem("otpEmail");
      navigate("/");

    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Something went wrong");
    }
  };

  const handleResend = () => {
    setCode(["", "", "", "", "", ""]);
    setResendTimer(40);
    setCanResend(false);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="page-center">
      <div className="login-root">

        <img
          src="/images/splash-i.png"
          alt="background"
          className="bg-image"
        />

        <button
          className="header-back-btn"
          onClick={handleBack}
          aria-label="Go Back"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="login-header">
          <h1>Verification</h1>
          <p>We have sent a code to your email</p>
        </div>

        <div className="login-overlay">
          <div className="form-container">

            <form
              className="verification-card"
              onSubmit={(e) => {
                e.preventDefault();
                handleVerify();
              }}
            >
              <div className="code-row">
                {code.map((digit, index) => (
                  <input
                    aria-label="code"
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    className="otp-input"
                    onChange={(e) =>
                      handleChange(e.target.value, index)
                    }
                    onKeyDown={(e) =>
                      handleKeyDown(e, index)
                    }
                  />
                ))}
              </div>

              <div className="resend-row">
                <span className="code-label">CODE</span>

                {canResend ? (
                  <button
                    type="button"
                    className="resend-btn"
                    onClick={handleResend}
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

          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
