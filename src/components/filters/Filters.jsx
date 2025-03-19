import React from 'react';
import PropTypes from 'prop-types';
import FilterSection from './FilterSection';

const filterConfig = {
  diet: {
    title: 'Diet Type',
    options: ['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Gluten-Free', 'Keto'],
    type: 'checkbox'
  },
  cuisine: {
    title: 'Cuisine',
    options: ['Indian', 'Italian', 'Chinese', 'Mexican', 'Japanese', 'Thai'],
    type: 'checkbox'
  },
  calories: {
    title: 'Calories',
    options: ['Under 300', '300-500', '500-800', 'Over 800'],
    type: 'radio'
  },
  time: {
    title: 'Cooking Time',
    options: ['Under 15 mins', '15-30 mins', '30-60 mins', 'Over 60 mins'],
    type: 'radio'
  }
};

const Filters = ({ filters, onFilterChange }) => {
  return (
    <div className="filters-dropdown">
      {Object.entries(filterConfig).map(([key, config]) => (
        <FilterSection
          key={key}
          title={config.title}
          options={config.options}
          type={config.type}
          selectedValues={filters[key]}
          onFilterChange={onFilterChange}
        />
      ))}
    </div>
  );
};

Filters.propTypes = {
  filters: PropTypes.shape({
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    cuisine: PropTypes.arrayOf(PropTypes.string).isRequired,
    calories: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default Filters; 