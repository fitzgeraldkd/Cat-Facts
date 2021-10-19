import React from 'react';

function Search() {
    return (
        <div>
            <label htmlFor='search'>Search: </label>
            <input id='search' name='search' type='text' placeholder='Search' />
        </div>
    );
}

export default Search;
