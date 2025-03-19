import React from 'react';
import PropTypes from 'prop-types';

const suggestions = [
  'Pizza',
  'Sushi',
  'Tacos',
  'Indian Food',
  'Chinese Food'
];

const Suggestions = ({ onSuggestionClick }) => {
  return (
    <div className="suggestions">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion}
          className="suggestion-button"
          onClick={() => onSuggestionClick(suggestion)}
        >
          {suggestion} +
        </button>
      ))}
    </div>
  );
};

Suggestions.propTypes = {
  onSuggestionClick: PropTypes.func.isRequired
};

export default Suggestions; 