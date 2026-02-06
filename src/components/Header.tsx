import React, { ReactNode, useState } from 'react';
import { Category } from '../types';
import './styles/Header.css';

export interface HeaderProps {
  variant?: 'home' | 'category' | 'restaurant' | 'details' | 'search' | 'default';
  showMenu?: boolean;
  showBack?: boolean;
  showLocation?: boolean;
  showSearch?: boolean;
  showCart?: boolean;
  title?: string;
  titleType?: 'text' | 'pill';
  locationLabel?: string;
  locationValue?: string;
  locations?: string[];
  onLocationSelect?: (location: string) => void;
  cartCount?: number;
  onMenuClick?: () => void;
  onBackClick?: () => void;
  onTitleClick?: () => void;
  onSearchClick?: () => void;
  onCartClick?: () => void;
  onMoreClick?: () => void;

  categories?: Category[];
  selectedCategory?: string;
  onCategorySelect?: (category: string) => void;
  rightElement?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  variant = 'default',
  showMenu,
  showBack,
  showLocation,
  showSearch,
  showCart,
  title,
  titleType = 'text',
  locationLabel = 'DELIVER TO',
  locationValue = 'Location',
  cartCount = 0,
  onMenuClick,
  onBackClick,
  onTitleClick,
  onSearchClick,
  onCartClick,
  onMoreClick,
  rightElement,
  locations,
  onLocationSelect,
  categories = [],
  selectedCategory,
  onCategorySelect
}) => {
  const isHome = variant === 'home';
  const isCategory = variant === 'category';
  const isRestaurant = variant === 'restaurant';
  const isDetails = variant === 'details';
  const isSearchPage = variant === 'search';

  const visibleMenu = showMenu ?? isHome;
  const visibleBack = showBack ?? (isCategory || isRestaurant || isDetails || isSearchPage);
  const visibleLocation = showLocation ?? (isHome || isSearchPage);
  const visibleSearch = showSearch ?? isCategory;
  const visibleCart = showCart ?? (isHome || isSearchPage);
  const visibleMore = isRestaurant;
  const [openLocation, setOpenLocation] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const formatLabel = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);


  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          {visibleMenu && (
            <button className="btn-circle btn-grey" onClick={onMenuClick} aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="7" x2="10" y2="7" />
                <line x1="4" y1="12" x2="21" y2="12" />
                <line x1="4" y1="17" x2="16" y2="17" />
              </svg>
            </button>
          )}

          {visibleBack && (
            <button className="btn-circle btn-grey" onClick={onBackClick} aria-label="Go Back">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {visibleLocation && (
            <div className="header__location">
              <span className="location-label">{locationLabel}</span>

              {/*WRAPPER */}
              <div className="location-dropdown-wrapper">
                <span className="location-value"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowLocationDropdown(prev => !prev);
                  }}>
                  {locationValue}
                  <span
                    className="location-arrow"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowLocationDropdown(prev => !prev);
                    }}
                  >
                    {showLocationDropdown ? "▲" : "▼"}
                  </span>
                </span>

                {/*DROPDOWN */}
                {showLocationDropdown && locations && (
                  <div className="location-dropdown">
                    {locations.map(loc => (
                      <div
                        key={loc}
                        className="location-option"
                        onClick={() => {
                          onLocationSelect?.(loc);
                          setShowLocationDropdown(false);
                        }}
                      >
                        {loc}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}


          {title && !visibleLocation && (
            <div className="header__title-area">
              {titleType === 'pill' ? (

                <div className="location-dropdown-wrapper">
                  <button
                    className="title-pill"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowCategoryDropdown(prev => !prev);
                    }}
                  >
                    <span className="title-pill-text">
                      {selectedCategory || title}
                    </span>
                    <span className="cat-arrow">
                      {showCategoryDropdown ? "▲" : "▼"}
                    </span>
                  </button>


                  {showCategoryDropdown && (
                    <div className="location-dropdown">
                      {categories.slice(1).filter(cat => cat.id !== selectedCategory).map(cat => (
                        <div
                          key={cat.id}
                          className="location-option"
                          onClick={() => {
                            onCategorySelect?.(cat.id);
                            setShowCategoryDropdown(false);
                          }}
                        >
                          {formatLabel(cat.id)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <span className="title-text">{title}</span>

              )}
            </div>
          )}

        </div>
        <div className="header__right">
          {visibleMore && (
            <button className="btn-circle btn-grey" onClick={onMoreClick} aria-label="More options">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
            </button>
          )}

          {visibleSearch && (
            <button className="btn-circle btn-black" onClick={onSearchClick} aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          )}

          {visibleCart && (
            <button className="btn-circle btn-black" onClick={onCartClick} aria-label="Cart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </button>
          )}

          {rightElement}
        </div>
      </div>
    </header>
  );
};

export default Header;
