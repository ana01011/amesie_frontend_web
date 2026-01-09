import React from 'react';
import './styles/Hero.css';

interface HeroProps {
  greeting?: string;
  userName?: string;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onSearchClick?: () => void;
}


const Hero: React.FC<HeroProps> = ({
  greeting = 'Good Afternoon!',
  userName = 'Abc',
  searchQuery = '',
  onSearchChange,
  onSearchClick,
}) => {
  return (
    <section className="hero">
      <div className="hero__container">
        <p className="hero__greeting">
          Hey {userName}, <strong>{greeting}</strong>
        </p>

        <div className="hero__search-wrapper"  >
          
          <img src="/images/search-i.png" alt="Search" className="hero__search-icon" />
          <input
            type="text"
            className="hero__search-input"
            placeholder="Search dishes, restaurants"
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
            onClick={onSearchClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
