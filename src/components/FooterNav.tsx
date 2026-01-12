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
    { id: 'shop', label: 'Shop', icon: '/images/shopping-bag-svgrepo-com.svg' },
    { id: 'food', label: 'Food', icon: '/images/chip-fast-fastfood-svgrepo-com.svg' },
    { id: 'instamart', label: 'Instamart', icon: '/images/shopping-bag2-svgrepo-com.svg' },
    { id: 'cart', label: 'Cart', icon: '/images/cart-svgrepo-com.svg' },
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
            data-tab={tab.id} 
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
