import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// Component to display a list of categories
// it receives an array of categories and an array of selected categories as props
// it uses the map function to display each category using a checkbox from material-ui

const Filter = ({ categories, selectedCategories, onCategoryChange }) => {
  return (
    <fieldset className="filters">
      <legend>Filter by category</legend>
      {categories.map(category => (
        <label key={category}>
          <FormControlLabel
            control={<Checkbox defaultChecked checked={selectedCategories.includes(category)}
                               onChange={() => onCategoryChange(category)} />} label={category} />
        </label>
      ))}
    </fieldset>
  );
};

export default Filter;
