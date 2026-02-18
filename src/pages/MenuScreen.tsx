import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/MenuScreen.css";
import {
    IoPersonOutline,
    IoLocationOutline,
    IoCartOutline,
    IoHeartOutline,
    IoNotificationsOutline,
    IoCardOutline,
    IoHelpCircleOutline,
    IoStarOutline,
    IoSettingsOutline,
    IoChevronBack,
    IoChevronForward,
    IoEllipsisVertical,
    IoLogOut,
    IoLogIn
} from "react-icons/io5";
import { useAuth } from "../context/AuthContext";

interface MenuItem {
    icon: React.ReactNode;
    label: string;
    color: string;
    path?: string;
    action?: () => void; //  allows logout action
}

const personalItems: MenuItem[] = [
    { icon: <IoPersonOutline />, label: "Personal Info", color: "#3B82F6", path: "/personalinfo" },
    { icon: <IoLocationOutline />, label: "Addresses", color: "#6366F1", path: "/address" },
];

const accountItems: MenuItem[] = [
    { icon: <IoCartOutline />, label: "Cart", color: "#3B82F6" },
    { icon: <IoHeartOutline />, label: "Favourite", color: "#EC4899" },
    { icon: <IoNotificationsOutline />, label: "Notifications", color: "#F59E0B" },
    { icon: <IoCardOutline />, label: "Payment Method", color: "#06B6D4" },
];

const supportItems: MenuItem[] = [
    { icon: <IoHelpCircleOutline />, label: "FAQs", color: "#F97316" },
    { icon: <IoStarOutline />, label: "User Reviews", color: "#14B8A6" },
    { icon: <IoSettingsOutline />, label: "Settings", color: "#3B82F6" },
];

const MenuScreen: React.FC = () => {
    const navigate = useNavigate();

    //  Auth check (ONLY here)
    const { isAuthenticated, logout } = useAuth();
    

    const handleLogout = () => {
  logout();
  navigate("/loginpage");
};

    //  Dynamic login/logout item
    const loggingItems: MenuItem[] = isAuthenticated
        ? [
              {
                  icon: <IoLogOut />,
                  label: "Log Out",
                  color: "#FB4A59",
                  action: handleLogout
              }
          ]
        : [
              {
                  icon: <IoLogIn />,
                  label: "Log In",
                  color: "#Fdc500",
                  path: "/loginpage"
              }
          ];

    const renderMenuItem = (item: MenuItem, index: number) => (
        <div
            className="menu-item"
            key={index}
            onClick={() => {
                if (item.action) item.action();
                else if (item.path) navigate(item.path);
            }}
            style={{ cursor: item.path || item.action ? "pointer" : "default" }}
        >
            <div className="menu-left">
                <div className="icon-container" style={{ color: item.color }}>
                    {item.icon}
                </div>
                <span>{item.label}</span>
            </div>
            <IoChevronForward className="chevron" />
        </div>
    );

    const handleBackButton = () => {
        navigate(-1);
    };

    return (
        <div className="page">
            <div>
                {/* Header */}
                <div className="menu-header">
                    <button
                        className="header-btn"
                        onClick={handleBackButton}
                        aria-label="backbutton"
                    >
                        <IoChevronBack />
                    </button>

                    <h2>Profile</h2>

                    <button aria-label="header button" className="header-btn">
                        <IoEllipsisVertical />
                    </button>
                </div>

                {/* Profile */}
                <div className="menu-container">
                    <div className="profile-section">
                        <img
                            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                            alt="avatar"
                            className="avatar"
                        />

                        <div className="profile-info">
                            <h3>Full Name</h3>
                            <p>I love fast food</p>
                        </div>
                    </div>

                    <div className="menu-section">
                        {personalItems.map(renderMenuItem)}
                    </div>

                    <div className="menu-section">
                        {accountItems.map(renderMenuItem)}
                    </div>

                    <div className="menu-section">
                        {supportItems.map(renderMenuItem)}
                    </div>

                    <div className="menu-section">
                        {loggingItems.map(renderMenuItem)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuScreen;