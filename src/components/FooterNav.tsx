import React from 'react';
import './styles/FooterNav.css';

interface FooterNavProps {
  activeTab?: 'shop' | 'food' | 'instamart' | 'cart';
  onTabChange?: (tab: 'shop' | 'food' | 'instamart' | 'cart') => void;
}

const FooterNav: React.FC<FooterNavProps> = ({
  activeTab = 'food',
  onTabChange,
}) => {
  const tabs = [
    { id: 'shop', label: 'Shop', icon: '/images/shop-i.png' },
    { id: 'food', label: 'Food', icon: '/images/food-i.png' },
    { id: 'instamart', label: 'Instamart', icon: '/images/instamart-i.png' },
    { id: 'cart', label: 'Cart', icon: '/images/cart-i.png' },
  ];

  return (
    <footer className="footer-nav">
      <div className="footer-nav__container">
        {/* Mobile Logo Section */}
        <div className="footer-nav__mobile-logo">
          <div className="footer-nav__logo-wrapper">
            <img src="/images/amesie-i.png" alt="Amesie" className="footer-nav__logo-icon" />
          </div>
          <span className="footer-nav__logo-text">Amesie</span>
        </div>

        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`footer-nav__item ${
              activeTab === tab.id ? 'footer-nav__item--active' : ''
            }`}
            onClick={() => onTabChange?.(tab.id as any)}
          >
            <img src={tab.icon} alt={tab.label} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </footer>
  );
};

export default FooterNav;
