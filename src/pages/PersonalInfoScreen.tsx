import React, { useState, useEffect } from "react";
import { Link, useNavigate, } from "react-router-dom";
import "./styles/MenuScreen.css";
import {
    IoPersonOutline,
    IoMailOutline,
    IoCallOutline,
    IoChevronBack,
    IoChevronForward,
    IoEllipsisVertical,
} from "react-icons/io5";
import { getUserProfile } from "../services/userServices";

interface MenuItem {
    icon: React.ReactNode;
    label: string;
    holder: string;
    color: string;
}



const PersonalInfoScreen: React.FC = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);
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
    const handleEdit = () => {
        navigate("/editprofile");
    };
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });

        const loadProfile = async () => {
            try {
                const data = await getUserProfile();

                console.log("RAW API RESPONSE:", data);
                const userData = data.data || data;
                console.log("USER DATA", data);
                console.log( user?.full_name);
                setUser(userData);
            } catch (err) {
                console.error("Profile fetch error:", err);
            }
        };

        loadProfile();
    }, []);
    const personalItems: MenuItem[] = [
        {
            icon: <IoPersonOutline />,
            label: "FULL NAME",
            holder: user?.full_name || "Not set",
            color: "#FACC15",
        },
        {
            icon: <IoMailOutline />,
            label: "EMAIL",
            holder: user?.email || "Not set",
            color: "#6366F1",
        },
        {
            icon: <IoCallOutline />,
            label: "PHONE NUMBER",
            holder: user?.phone || "Not set",
            color: "#6366F1",
        },
    ];
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
                            <h3>{user?.full_name || "Guest User"}</h3>
                            <p>{user?.email || "Welcome 👋"}</p>
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