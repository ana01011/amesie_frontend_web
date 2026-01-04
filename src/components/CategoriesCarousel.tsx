import React, { useState } from 'react';
import './styles/CategoriesCarousel.css';

interface Category {
  id: string;
  label: string;
  icon: string;
  description: string;
}

interface CategoriesCarouselProps {
  categories: Category[];
  selectedCategory?: string;
  onCategorySelect?: (categoryId: string) => void;
}

const CategoriesCarousel: React.FC<CategoriesCarouselProps> = ({
  categories,
  selectedCategory = 'all',
  onCategorySelect,
}) => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const handleCategoryClick = (categoryId: string) => {
    onCategorySelect?.(categoryId);
  };

  return (
    <section className="categories-carousel">
      <div className="categories-carousel__container">
        <div className="categories-carousel__header">
          <h2>All Categories</h2>
          <button
            className="categories-carousel__see-all-btn"
            onClick={() => setShowAllCategories(!showAllCategories)}
          >
            {showAllCategories ? 'Show Less ←' : 'See All →'}
          </button>
        </div>

        <div
          className={`categories-carousel__grid ${
            showAllCategories ? 'categories-carousel__grid--expanded' : ''
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
              onClick={() => handleCategoryClick(category.id)}
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
};

export default CategoriesCarousel;
