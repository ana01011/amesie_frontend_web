import React, { useRef } from "react";
import "./styles/SupCategoryCarousel.css";
import { SupCategory } from "../types";

interface Props {
  items: SupCategory[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const SupCategoryCarousel: React.FC<Props> = ({
  items,
  selectedId,
  onSelect,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="sup-carousel">
      
      {/* Background SVG */}
      <svg
        className="sup-carousel__bg"
        viewBox="0 0 375 107"
        preserveAspectRatio="none"
      >
        <path
          d="M0 20C0 8.95429 8.95431 0 20 0H355C366.046 0 375 8.95431 375 20V77.6041C375 79.1683 374.532 80.6968 373.657 81.9932C372.16 84.2103 369.637 85.5117 366.963 85.4459L336.862 84.7053C334.093 84.6372 331.341 85.1447 328.779 86.1957L308.666 94.4462C304.173 96.2894 299.163 96.4347 294.571 94.855L267.925 85.6896C265.832 84.9696 263.633 84.6021 261.42 84.6021L250.733 84.6021C245.716 84.6021 240.982 86.9208 237.906 90.8837L236.763 92.3564C230.949 99.8491 219.676 99.987 213.68 92.6389C209.745 87.8173 203.208 85.9835 197.34 88.0551L179.781 94.2533C175.727 95.6846 171.319 95.7711 167.211 94.4999L139.742 85.9992C137.216 85.2176 134.522 86.5612 133.627 89.0492C132.146 93.1674 126.439 93.4725 124.526 89.5358L122.663 85.7001C122.616 85.6023 122.591 85.4951 122.591 85.3864C122.591 84.9649 122.23 84.6341 121.81 84.6712L111.865 85.5515H99.6526C95.8301 85.5515 92.0928 86.6812 88.9102 88.7985L86.2287 90.5826C79.1767 95.2743 69.8637 94.6985 63.4434 89.1737C60.0158 86.2242 55.6438 84.6021 51.1218 84.6021L29.5003 84.602C27.2499 84.602 25.2929 86.1445 24.7672 88.3326C23.7429 92.5955 18.047 93.4379 15.8327 89.654L14.3971 87.2006C13.1539 85.0763 10.7415 83.9243 8.3079 84.293L5.48486 84.7206C2.59854 85.1579 0 82.9233 0 80.0041V20Z"
          fill="#FFDD34"
        />
      </svg>

      {/* Scrollable Content */}
      <div ref={scrollRef} className="sup-carousel__track">
        {items.map((item) => (
          <button
          aria-label="button"
            key={item.id}
            className={`sup-carousel__item ${
              selectedId === item.id ? "sup-carousel__item--active" : "snacks"
            }`}
            onClick={() => onSelect(item.id)}
          >
            <img src={item.icon} alt="" />
          </button>
        ))}
      </div>

    </section>
  );
};

export default SupCategoryCarousel;