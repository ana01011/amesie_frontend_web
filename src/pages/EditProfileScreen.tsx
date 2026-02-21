import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./styles/MenuScreen.css";
import "./styles/EditProfileScreen.css";
import { IoChevronBack, IoPencil } from "react-icons/io5";

const EditProfileScreen: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const initialProfile = {
        fullName: "Full Name",
        email: "example@gmail.com",
        phone: "123-456-789",
        bio: "I love fast food",
        image:
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    };


    const [profile, setProfile] = useState(initialProfile);


    const update = (key: string, value: string) =>
        setProfile(prev => ({ ...prev, [key]: value }));

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            update("image", URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSave = () => {
        const changedFields: Record<string, string> = {};

        (Object.keys(profile) as Array<keyof typeof profile>).forEach(key => {
            if (profile[key] !== initialProfile[key]) {
                changedFields[key] = profile[key];
            }
        });

        console.log("Changed fields:", changedFields);
    };


    return (
        <div className="page">
            <div className="container-x">
                {/* Header (SAME as MenuScreen) */}
                <div className="menu-header">
                    <button className="header-btn" aria-label="back-btn" onClick={() => navigate(-1)}>
                        <IoChevronBack />
                    </button>

                    <h2>Edit Profile</h2>

                    <div style={{ width: 45 }} />
                </div>

                {/* Content */}
                <div className="menu-container">
                    {/* Profile Image */}
                    <div className="edit-profile-image">
                        <div className="image-wrapper">
                            <img src={profile.image} alt="profile" />

                            <label className="edit-image-btn">
                                <IoPencil />
                                <input type="file" hidden accept="image/*" onChange={handleImage} />
                            </label>
                        </div>
                    </div>

                    {/* Form */}
                    <form
                        id="edit-profile-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSave();
                        }}
                    >
                        <div className="edit-form">
                            <div className="field">
                                <label>FULL NAME</label>
                                <input
                                    value={profile.fullName}
                                    onChange={e => update("fullName", e.target.value)}
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="field">
                                <label>EMAIL</label>
                                <input
                                    value={profile.email}
                                    onChange={e => update("email", e.target.value)}
                                    placeholder="Your email"
                                />
                            </div>

                            <div className="field">
                                <label>PHONE NUMBER</label>
                                <input
                                    value={profile.phone}
                                    onChange={e => update("phone", e.target.value)}
                                    placeholder="Your phone number"
                                />
                            </div>

                            <div className="field">
                                <label>BIO</label>
                                <textarea
                                    value={profile.bio}
                                    onChange={e => update("bio", e.target.value)}
                                    placeholder="Tell us about yourself"
                                />
                            </div>
                        </div>
                    </form>

                </div>
                <div className="page-footer">
                    <button className="save-btn" onClick={handleSave}>
                        SAVE
                    </button>
                </div>

            </div>
        </div>
    );
};

export default EditProfileScreen;
