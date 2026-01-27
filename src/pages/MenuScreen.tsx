import React from "react";
import { Link, useNavigate } from "react-router-dom";
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

interface MenuItem {
    icon: React.ReactNode;
    label: string;
    color: string;
    path?: string;
}

const personalItems: MenuItem[] = [
    { icon: <IoPersonOutline />, label: "Personal Info", color: "#3B82F6", path: "/personalinfo", },
    { icon: <IoLocationOutline />, label: "Addresses", color: "#6366F1", path:"/address"},
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

const loggingItems: MenuItem[] = [
    { icon: <IoLogIn />, label: "Log In", color: "#Fdc500", path: "/loginpage", },
    { icon: <IoLogOut />, label: "Log Out", color: "#FB4A59" }
]

const MenuScreen: React.FC = () => {
    const renderMenuItem = (item: MenuItem, index: number) => (
        <div
            className="menu-item"
            key={index}
            onClick={() => item.path && navigate(item.path)}
            style={{ cursor: item.path ? "pointer" : "default" }}
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
    const navigate = useNavigate();
    const handlebackbutton = () => {
        // Otherwise, navigate to previous page
        navigate(-1);
    };

    return (
        <div className="page">
            <div>
                {/* Header */}
                <div className="menu-header">
                    <button className="header-btn" onClick={handlebackbutton} aria-label="backbutton" title="back">
                        <IoChevronBack />
                    </button>

                    <h2>Profile</h2>

                    <button className="header-btn" aria-label="headerbtn" title="option">
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

                    {/* Menu Sections */}
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