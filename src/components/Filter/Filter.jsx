import React from 'react';
import css from './Filter.module.css';

const Filter = ({ filter, handleChange }) => (
  <div className={css.filter}>
    <label className={css.filterLabel}>Find contacts by name</label>
    <input
      className={css.filterName}
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
  </div>
);

export default Filter;