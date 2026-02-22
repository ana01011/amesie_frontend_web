import React, { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import {
    IoChevronBack,
    IoLocationOutline,
} from "react-icons/io5";
import "./styles/MenuScreen.css";
import "./styles/AddAddressScreen.css";
import { getUserLocation } from "../services/locationService";

/* ---------------- TYPES ---------------- */
type LabelType = "HOME" | "WORK" | "OTHER";

interface AddressForm {
    lat: number;
    lng: number;
    address: string;
    street1: string;
    street2: string;
    apartment: string;
    label: LabelType;
}

/* ---------------- DEFAULT LOCATION (India) ---------------- */
const defaultCenter = {
    lat: 28.6139,
    lng: 77.209,
};

const AddNewAddressScreen: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);
    const navigate = useNavigate();
    const location = useLocation();
    const editingAddress = location.state?.address;


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    });

    const [form, setForm] = useState<AddressForm>({
        lat: editingAddress?.lat ?? defaultCenter.lat,
        lng: editingAddress?.lng ?? defaultCenter.lng,
        address: editingAddress?.address ?? "",
        street1: editingAddress?.street1 ?? "",
        street2: editingAddress?.street2 ?? "",
        apartment: editingAddress?.apartment ?? "",
        label: editingAddress?.type ?? "HOME",

    });


    /* ---------------- MAP MOVE ---------------- */
    const onMarkerDrag = useCallback(
        async (e: google.maps.MapMouseEvent) => {
            if (!e.latLng) return;

            const lat = e.latLng.lat();
            const lng = e.latLng.lng();

            setForm(prev => ({ ...prev, lat, lng }));

            fetchAddress(lat, lng);
        },
        []
    );

    const locateByAddress = async (query: string) => {
        if (!query.trim()) return;

        const res = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                query
            )}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
        );

        const data = await res.json();

        if (data.results?.[0]) {
            const loc = data.results[0].geometry.location;

            setForm(prev => ({
                ...prev,
                lat: loc.lat,
                lng: loc.lng,
                address: data.results[0].formatted_address,
            }));
        }
    };


    /* ---------------- REVERSE GEOCODE ---------------- */
    const fetchAddress = async (lat: number, lng: number) => {
        const res = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
        );
        const data = await res.json();

        if (data.results?.[0]) {
            setForm(prev => ({
                ...prev,
                address: data.results[0].formatted_address,
            }));
        }
    };

    /* ---------------- SAVE ---------------- */
    const handleSave = async () => {
        const location = await getUserLocation();

        console.log("Latitude:", location.lat);
        console.log("Longitude:", location.lon);
        console.log("Source:", location.source);
        if (editingAddress) {
            console.log("UPDATED ADDRESS:", form);
        } else {
            console.log("NEW ADDRESS:", form);
        }

    };


    if (!isLoaded) return <p>Loading map...</p>;

    return (
        <div className="page">
            <div>
                {/* HEADER */}
                <div className="menu-header">
                    <button className="header-btn" aria-label="back" onClick={() => navigate(-1)}>
                        <IoChevronBack />
                    </button>

                    <h2>{editingAddress ? "Edit Address" : "Add Address"}</h2>


                    <div style={{ width: 45 }} />
                </div>

                {/* CONTENT */}
                <div className="menu-container">
                    {/* MAP */}
                    <div className="map-wrapper">
                        <GoogleMap
                            center={{ lat: form.lat, lng: form.lng }}
                            zoom={15}
                            mapContainerStyle={{ width: "100%", height: "260px" }}
                            onClick={(e) => {
                                if (!e.latLng) return;

                                const lat = e.latLng.lat();
                                const lng = e.latLng.lng();

                                setForm(prev => ({ ...prev, lat, lng }));
                                fetchAddress(lat, lng);
                            }}
                        >
                            <Marker
                                position={{ lat: form.lat, lng: form.lng }}
                                draggable
                                onDragEnd={onMarkerDrag}
                            />

                        </GoogleMap>
                    </div>

                    {/* FORM */}
                    <div className="edit-form">
                        <form
                            id="add-address-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSave();
                            }}
                        >
                            <label>ADDRESS</label>
                            <div className="address-box">
                                <IoLocationOutline />
                                <span>{form.address || "Move map to select location"}</span>
                            </div>

                            <div className="two-col">
                                <div className="field">
                                    <label>STREET</label>
                                    <input
                                        value={form.street1}
                                        onChange={e => setForm({ ...form, street1: e.target.value })}
                                        onBlur={() => locateByAddress(form.street1)}
                                    />

                                </div>

                                <div className="field">
                                    <label>STREET</label>
                                    <input
                                        value={form.street2}
                                        onChange={e => setForm({ ...form, street2: e.target.value })}
                                        onBlur={() => locateByAddress(form.street1)}
                                    />

                                </div>
                            </div>

                            <div className="field">
                                <label>APARTMENT</label>
                                <input
                                    aria-label="apartment"
                                    value={form.apartment}
                                    onChange={e =>
                                        setForm({ ...form, apartment: e.target.value })
                                    }
                                />
                            </div>

                            {/* LABEL */}
                            <label>LABEL AS</label>
                            <div className="label-group">
                                {(["HOME", "WORK", "OTHER"] as LabelType[]).map(l => (
                                    <button
                                        type="button"
                                        key={l}
                                        className={form.label === l ? "label active" : "label"}
                                        onClick={() => setForm({ ...form, label: l })}
                                    >
                                        {l}
                                    </button>
                                ))}
                            </div>

                        </form>
                    </div>

                    <div className="footer-bar">
                        <button
                            className="save-btn"
                            type="submit"
                            form="add-address-form"
                        >
                            SAVE LOCATION
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AddNewAddressScreen;
