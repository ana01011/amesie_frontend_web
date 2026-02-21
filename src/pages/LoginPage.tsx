import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import './styles/LoginPage.css';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
  try {
    const response = await fetch(
      "http://76.13.17.48:8001/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data?.detail || "Login failed");
      return;
    }

    console.log("Login response:", data);

    // Store token
    // localStorage.setItem("accessToken", data.access_token);
    // localStorage.setItem("tokenType", data.token_type);

    // Optional: store full response
    // localStorage.setItem("authData", JSON.stringify(data));

    // Redirect
    login(data.access_token);
    navigate("/");

  } catch (error) {
    console.error("Login error:", error);
    alert("Something went wrong");
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


                {/* Header on image */}
                <div className="login-header">

                    <h1>{'Log In'}</h1>
                    <p>
                        {'Please sign in to your existing account'}
                    </p>
                </div>

                {/* White overlay */}
                <div className="login-overlay">
                   <div className="form-scroll">
                    <div className="form-container">

                        {/* Email input always visible */}
                        <div className="input-group">
                            <label>Email / Mobile Number</label>
                            <input
                                type="text"
                                placeholder="Enter your email or mobile number"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Login form */}

                        <>
                        <form onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                     }}>
                            <div className="input-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="forgot-password">
                                <button
                                    type="button"
                                    className="forgot-btn">
                                    <p>
                                        <Link to="/forgotpassword">Forgot Password?</Link>
                                    </p>
                                </button>
                            </div>

                            <button
                                className={`login-button ${loading ? 'disabled' : ''}`}
                                
                                disabled={loading}
                                type='submit'
                            >
                                {loading ? 'Logging in…' : 'Get Started'}
                            </button>

                            <div className="bottom-section">
                                <p className="or-text">Or log in with</p>

                                <div className="social-buttons">
                                    <button className="facebook">Facebook</button>
                                    <button className="google">Google</button>
                                    <button className="twitter">Twitter</button>
                                </div>

                                <div className="footer">
                                    <p>
                                        Don't have an account?{" "}
                                        <Link to="/signuppage">Sign Up</Link>
                                    </p>
                                </div>
                            </div>
                            </form>
                        </>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;
