import { MdOpacity, MdLocalFlorist, MdGrass } from 'react-icons/md';
import { FaDrumstickBite } from 'react-icons/fa';

interface HeartIconProps {
    isFavorited: boolean;
}

export const HeartIcon = ({ isFavorited }: HeartIconProps) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorited ? "#FB4A59" : "#ffffff"}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);


export const ClockIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" stroke="#FB4A59" strokeWidth="2" fill="none">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
    </svg>
);

export const StarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffc107">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

export const FreeDeliveryIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#413DFB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Truck body */}
        <rect x="1" y="7" width="15" height="10" rx="2" />

        {/* Truck cabin */}
        <path d="M16 10h4l3 3v4h-7z" />

        {/* Wheels */}
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
    </svg>
);

// 🧂 SALT SHAKER
export const SaltIcon = () => (
   <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#666"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Top cap */}
    <rect x="7" y="3" width="10" height="3" rx="1.5" />

    {/* Holes */}
    <circle cx="10" cy="5" r="0.6" fill="#666" stroke="none" />
    <circle cx="12" cy="5" r="0.6" fill="#666" stroke="none" />
    <circle cx="14" cy="5" r="0.6" fill="#666" stroke="none" />

    {/* Body */}
    <path d="M7 6 L17 6 L15.5 19 H8.5 Z" fill="#424040ff"  />

    {/* Salt grains */}
    <circle cx="11" cy="11" r="0.6" fill="#efebebff" />
    <circle cx="13" cy="13" r="0.6" fill="#efebebff" />
    <circle cx="12" cy="15" r="0.6" fill="#efebebff" />
  </svg>
);




// 🧄 GARLIC BULB


// 🥬 VEGETABLE LEAVES







// export const SaltIcon = () => <MdOpacity size={24} />;
export const ChickenIcon = () => <FaDrumstickBite size={30} />;
export const GarlicIcon = () => <MdLocalFlorist size={33} />;
export const VegIcon = () => <MdGrass size={35} />;