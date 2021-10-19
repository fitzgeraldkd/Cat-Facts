import React from 'react';
import styles from './Search.module.css';

function Search({ filterText, handleFilterChange }) {
    return (
        <div className={styles['search-form']}>
            <label htmlFor='search'>Search: </label>
            <input id='search' name='search' type='text' placeholder='Search' value={filterText} onChange={handleFilterChange} />
        </div>
    );
}

export default Search;
