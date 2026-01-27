import React, { useState, useEffect, useRef } from 'react';
import './styles/Hero.css';

interface HeroProps {
  greeting?: string;
  userName?: string;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onSearchClick?: () => void;
  active?: boolean; // <-- prop to make search active from parent
}

const Hero: React.FC<HeroProps> = ({
  greeting = 'Good Afternoon!',
  userName = 'Abc',
  searchQuery = '',
  onSearchChange,
  onSearchClick,
  active = false, // default inactive
}) => {
  const [isActive, setIsActive] = useState(active);
  const inputRef = useRef<HTMLInputElement>(null);

  // When parent changes the active prop, update the state and focus
  useEffect(() => {
    setIsActive(active);
    if (active) {
      inputRef.current?.focus();
    }
  }, [active]);

  return (
    <section className="hero">
      <div className="hero__container">
        <p className="hero__greeting">
          Hey {userName}, <strong>{greeting}</strong>
        </p>

        <div
          className={`hero__search-wrapper ${isActive ? 'active' : ''}`}
          onClick={() => {
            inputRef.current?.focus();
            setIsActive(true);
            onSearchClick?.();
          }}
        >
          <img src="/images/search-i.png" alt="Search" className="hero__search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="hero__search-input"
            placeholder="Search dishes, restaurants"
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
