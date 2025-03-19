import React from 'react';
import PropTypes from 'prop-types';

const FilterSection = ({ title, options, selectedValues, type, onFilterChange }) => {
  return (
    <div className="filter-section">
      <h4>{title}</h4>
      <div className="filter-options">
        {options.map(option => (
          <label key={option} className="filter-option">
            <input
              type={type}
              name={title.toLowerCase()}
              checked={type === 'checkbox' 
                ? selectedValues.includes(option)
                : selectedValues === option}
              onChange={() => onFilterChange(title.toLowerCase(), option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedValues: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]).isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default FilterSection; 