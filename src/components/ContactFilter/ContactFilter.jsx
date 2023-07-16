import React from 'react';
import { FilterList, Input, Text } from './ContactFilter.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFilter} from 'redux/contactsSlice.js';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = e => dispatch(changeFilter(e.target.value));

  return (
    <FilterList>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        onChange={handleFilterChange}
        placeholder="Name"
      />
    </FilterList>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
