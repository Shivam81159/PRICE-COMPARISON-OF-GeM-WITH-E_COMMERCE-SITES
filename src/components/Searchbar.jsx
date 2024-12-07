// Searchbar.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 8px;

  input {
    flex: 1;
    border: none;
    padding: 8px;
    font-size: 16px;
    border-radius: 5px 0 0 5px;
  }

  button {
    border: none;
    background-color: #3498db;
    color: #fff;
    padding: 8px;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
`;

const Searchbar = ({ setSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    setSearch(searchTerm);
  };

  return (
    <SearchBarWrapper>
      <input
        type="text"
        placeholder="Search for products here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>
        <FiSearch />
      </button>
    </SearchBarWrapper>
  );
};

export default Searchbar;
