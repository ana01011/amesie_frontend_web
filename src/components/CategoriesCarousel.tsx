import React, { useState } from 'react';
import './styles/CategoriesCarousel.css';
import { Category } from '../types';
import { Keyword } from '../types';


interface CategoriesCarouselProps {
 variant?: 'category' | 'keyword' | 'restro-category';
  categories?: Category[];
keywords?: Keyword[];
  selectedCategory?: string;
  onCategorySelect?: (categoryId: string) => void;
}

const CategoriesCarousel: React.FC<CategoriesCarouselProps> = ({
  variant = 'category',
  categories = [],
  keywords = [],
  selectedCategory = 'all',
  onCategorySelect,
}) => {
  const [showAllItems, setShowAllItems] = useState(false);

  const handleItemClick = (itemId: string) => {
    onCategorySelect?.(itemId);
  };

  if (variant === 'category') {
    return (
      <section className="categories-carousel">
        <div className="categories-carousel__container">
          <div className="categories-carousel__header">
            <h2>All Categories</h2>
            <button
              className="categories-carousel__see-all-btn"
              onClick={() => setShowAllItems(!showAllItems)}
            >
              {showAllItems ? 'Show Less ←' : 'See All >'}
            </button>
          </div>

          <div
            className={`categories-carousel__grid ${
              showAllItems ? 'categories-carousel__grid--expanded' : ''
            }`}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`categories-carousel__card ${
                  selectedCategory === category.id
                    ? 'categories-carousel__card--active'
                    : ''
                }`}
                onClick={() => handleItemClick(category.id)}
              >
                <div className="categories-carousel__icon-wrapper">
                  <img
                    src={category.icon}
                    alt={category.label}
                    className="categories-carousel__icon"
                  />
                </div>
                <h3>{category.label}</h3>
                <p>{category.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ============================================
  // KEYWORD VARIANT (New)
  // ============================================
  if (variant === 'keyword') {
    return (
      <section className="keyword-carousel">
        <div className="keyword-carousel__container">
          <div className="keyword-carousel__header">
            <h2>Recent Keywords</h2>
            <button
              className="keyword-carousel__see-all-btn"
              onClick={() => setShowAllItems(!showAllItems)}
            >
              {showAllItems ? 'Show Less ←' : 'See All >'}
            </button>
          </div>

          <div
            className={`keyword-carousel__grid ${
              showAllItems ? 'keyword-carousel__grid--expanded' : ''
            }`}
          >
            {keywords.map((keyword) => (
              <button
                key={keyword.id}
                className={`keyword-carousel__card ${
                  selectedCategory === keyword.id
                    ? 'keyword-carousel__card--active'
                    : ''
                }`}
                onClick={() => handleItemClick(keyword.id)}
              >
                <span>{keyword.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'restro-category') {
    const filteredKeywords = keywords.slice(1);
    return (
      <section className="keyword-carousel">
        <div className="keyword-carousel__container">
          {/* <div className="keyword-carousel__header">
            <h2>Recent Keywords</h2>
            <button
              className="keyword-carousel__see-all-btn"
              onClick={() => setShowAllItems(!showAllItems)}
            >
              {showAllItems ? 'Show Less ←' : 'See All >'}
            </button>
          </div> */}

          <div
            className={`keyword-carousel__grid ${
              showAllItems ? 'keyword-carousel__grid--expanded' : ''
            }`}
          >
            {filteredKeywords.map((keyword) => (
              <button
                key={keyword.id}
                className={`keyword-carousel__card ${
                  selectedCategory === keyword.id
                    ? 'keyword-carousel__card--active'
                    : ''
                }`}
                onClick={() => handleItemClick(keyword.id)}
              >
                <span>{keyword.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }


  return null;
};

export default CategoriesCarousel;
