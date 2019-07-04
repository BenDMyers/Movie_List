import React from 'react';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

/**
 * A searchbar and current search results.
 */
const Search = () => {
    return (
        <div className="search-area">
            <SearchBar />
            <SearchResults />
        </div>
    );
};

export default Search;