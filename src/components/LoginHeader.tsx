import React, { ReactNode } from 'react';
import './styles/LoginHeader.css';

export interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBackClick?: () => void;
  rightElement?: ReactNode;
}

const LoginHeader: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBack = false,
  onBackClick,
  rightElement,
}) => {
  return (
    <header className="auth-header">
      <div className="auth-header__top">
        {showBack && (
          <button
            className="auth-header__back"
            onClick={onBackClick}
            aria-label="Go back"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {rightElement}
      </div>

      <div className="auth-header__content">
        <h1 className="auth-header__title">{title}</h1>
        {subtitle && (
          <p className="auth-header__subtitle">{subtitle}</p>
        )}
      </div>
    </header>
  );
};

export default LoginHeader;
