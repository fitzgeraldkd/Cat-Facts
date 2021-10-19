import React from 'react';
import Paginator from './Paginator';
import Search from './Search';
import styles from './Controls.module.css';

function Controls({ filterText, handleFilterChange, filteredCatFacts, resultsPage, handlePageChange }) {
    return (
        <div className={styles.controls}>
            <Search filterText={filterText} handleFilterChange={handleFilterChange} />
            <Paginator filteredCatFacts={filteredCatFacts} resultsPage={resultsPage} handlePageChange={handlePageChange} />
        </div>
    );
}

export default Controls;
