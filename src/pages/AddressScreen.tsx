import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/MenuScreen.css";
import {
    IoChevronBack,
    IoHomeOutline,
    IoBriefcaseOutline,
    IoLocationOutline,
    IoPencilOutline,
    IoTrashOutline,
} from "react-icons/io5";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";

/* ---------------- TYPES ---------------- */
interface AddressItem {
    id: number;
    type: "HOME" | "WORK" | "OTHER";
    address: string;
}

/* ---------------- ICON + COLOR MAP ---------------- */
const iconMap = {
    HOME: <IoHomeOutline />,
    WORK: <IoBriefcaseOutline />,
    OTHER: <IoLocationOutline />,
};

const colorMap = {
    HOME: "#3B82F6",
    WORK: "#A855F7",
    OTHER: "#14B8A6",
};

const AddressScreen: React.FC = () => {
    const navigate = useNavigate();

    const [addresses, setAddresses] = useState<AddressItem[]>([
        {
            id: 1,
            type: "HOME",
            address: "Home Address",
        },
        {
            id: 2,
            type: "WORK",
            address: "Work Address",
        },
        {
            id: 3,
            type: "OTHER",
            address: "Other Address",
        },
    ]);

    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);


    const askDelete = (id: number) => {
        setSelectedId(id);
        setConfirmOpen(true);
    };

    const confirmDelete = () => {
        if (selectedId === null) return;

        setAddresses(prev =>
            prev.filter(address => address.id !== selectedId)
        );

        setConfirmOpen(false);
        setSelectedId(null);
    };

    const cancelDelete = () => {
        setConfirmOpen(false);
        setSelectedId(null);
    };

    return (
        <div className="page">
            <div>
                {/* HEADER (same as MenuScreen) */}
                <div className="menu-header">
                    <button
                        className="header-btn"
                        aria-label="back"
                        onClick={() => navigate(-1)}
                    >
                        <IoChevronBack />
                    </button>

                    <h2>My Address</h2>

                    <div style={{ width: 45 }} />
                </div>

                {/* CONTENT */}
                <div className="menu-container">
                    <div className="menu-section">
                        {addresses.map(item => (
                            <div className="menu-item" key={item.id}>
                                <div className="menu-left">
                                    <div
                                        className="icon-container"
                                        style={{ color: colorMap[item.type] }}
                                    >
                                        {iconMap[item.type]}
                                    </div>

                                    <div>
                                        <div className="menu-label">{item.type}</div>
                                        <div className="menu-holder">{item.address}</div>
                                    </div>
                                </div>

                                <div style={{ display: "flex", gap: 12 }}>
                                    <IoPencilOutline
                                        style={{ cursor: "pointer", color: "#F97316" }}
                                        onClick={() =>
                                            navigate("/add-address", {
                                                state: {
                                                    address: item, 
                                                },
                                            })
                                        }
                                    />

                                    <IoTrashOutline
                                        style={{ cursor: "pointer", color: "#EF4444" }}
                                        onClick={() => askDelete(item.id)}
                                    />

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ADD BUTTON */}
                    <div className="footer-bar" style={{ padding: "0 31px", marginTop: 40 }}>
                        <button
                            className="save-btn"

                            onClick={() => navigate("/add-address")}
                        >
                            ADD NEW ADDRESS
                        </button>
                    </div>
                </div>
            </div>
            <ConfirmDeleteModal
  open={confirmOpen}
  onCancel={cancelDelete}
  onConfirm={confirmDelete}
/>


        </div>
    );
};

export default AddressScreen;
