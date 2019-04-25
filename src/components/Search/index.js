import React from 'react';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Search = () => {
    return (
        <div className="search-area">
            <SearchBar />
            <SearchResults />
        </div>
    );
};

export default Search;