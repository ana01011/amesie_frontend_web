import React, { useState } from 'react';
import './styles/Header.css'; // Separate CSS file

interface HeaderProps {
  userAddress?: string;
  cartCount?: number;
  onSearchChange?: (query: string) => void;
  onMenuClick?: () => void;
  onCartClick?: () => void;
  onSearchClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  userAddress = '123 Oak Street',
  cartCount = 2,
  onSearchChange,
  onMenuClick,
  onCartClick,
  onSearchClick,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange?.(query);
  };

  return (
    <nav className="header__navbar">
      <div className="header__navbar-container">
        {/* Menu Button */}
        <button
          className="header__menu-btn"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <img src="/images/drawer-i.png" alt="Menu" className="header__menu-icon" />
        </button>

        {/* Logo */}
        <div className="header__logo">
          <div className="header__logo-wrapper">
            <img src="/images/amesie-i.png" alt="Amesie" className="header__logo-icon" />
          </div>
          <span className="header__logo-text">Amesie</span>
        </div>

        {/* Location Badge */}
        <div className="header__nav-location">
          <div>
            <p className="header__nav-location-label">DELIVER TO</p>
            <p className="header__nav-location-value">{userAddress} <span>▼</span></p>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="header__nav-right">
          {/* Search Button */}
          <button
            className="header__search-btn"
            onClick={onSearchClick}
            aria-label="Search"
          >
            <img src="/images/search-i.png" alt="Search" />
          </button>

          {/* Cart Button */}
          <button
            className="header__cart-btn"
            onClick={onCartClick}
            aria-label="Shopping cart"
          >
            <img src="/images/shopping-bag-i.png" alt="Cart" />
            <span className="header__cart-badge">{cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
