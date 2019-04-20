import React from 'react';

import SearchBar from './SearchBar';

const Search = () => {
    return (
        <div>
            <SearchBar />
            <div className="search-results" />
        </div>
    );
};

export default Search;