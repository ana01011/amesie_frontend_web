import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/MenuScreen.css";
import {
    IoPersonOutline,
    IoMailOutline,
    IoCallOutline,
    IoChevronBack,
    IoChevronForward,
    IoEllipsisVertical,
} from "react-icons/io5";

interface MenuItem {
    icon: React.ReactNode;
    label: string;
    holder: string;
    color: string;
}

const personalItems: MenuItem[] = [
    {
        icon: <IoPersonOutline />,
        label: "FULL NAME",
        holder: "FULL NAME",
        color: "#FACC15",
    },
    {
        icon: <IoMailOutline />,
        label: "EMAIL",
        holder: "xyz@gmail.com",
        color: "#6366F1",
    },
    {
        icon: <IoCallOutline />,
        label: "PHONE NUMBER",
        holder: "123-456-789",
        color: "#6366F1",
    },
];

const PersonalInfoScreen: React.FC = () => {
    const renderMenuItem = (item: MenuItem, index: number) => (
        <div className="menu-item" key={index}>
            <div className="menu-left">
                <div className="icon-container" style={{ color: item.color }}>
                    {item.icon}
                </div>

                <div>
                    <div className="menu-label">{item.label}</div>
                    <div className="menu-holder">{item.holder}</div>
                </div>
            </div>

            <IoChevronForward className="chevron" />
        </div>
    );
    const navigate = useNavigate();
    const handlebackbutton = () => {
        // Otherwise, navigate to previous page
        navigate(-1);

    };
    const handleEdit = () =>{
        navigate("/editprofile");
    };

    return (
        <div className="page">
            <div>
                {/* Header */}
                <div className="menu-header">
                    <button className="header-btn" onClick={handlebackbutton} aria-label="backbutton" title="back">
                        <IoChevronBack />
                    </button>

                    <h2>Personal Info</h2>

                    <button className="edit-btn" aria-label="edit-btn" title="edit" onClick={handleEdit}>
                        EDIT
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

                    {/* Personal Info */}
                    <div className="menu-section">
                        {personalItems.map(renderMenuItem)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfoScreen;