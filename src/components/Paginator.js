import React from 'react';
import styles from './Paginator.module.css';

function Paginator({ filteredCatFacts, resultsPage, handlePageChange }) {

    const maxPage = Math.max(1, Math.ceil(filteredCatFacts.length / 10));

    const handleTypePage = (e) => {
        const newPage = e.target.value;
        if (newPage >= 1 && newPage <= maxPage) {
            handlePageChange(newPage)
        }
    }

    return (
        <div className={styles.paginator}>
            <button onClick={() => handlePageChange(1)} disabled={resultsPage === 1 ? true : false} className={styles.button}>First</button>
            <button onClick={() => handlePageChange(resultsPage - 1)} disabled={resultsPage === 1 ? true : false} className={styles.button}>Previous</button>
            Page <input type='number' name='pageNumber' value={resultsPage} onChange={handleTypePage} className={styles.input} /> of {maxPage}
            <button onClick={() => handlePageChange(resultsPage + 1)} disabled={resultsPage === maxPage ? true : false} className={styles.button}>Next</button>
            <button onClick={() => handlePageChange(maxPage)} disabled={resultsPage === maxPage ? true : false} className={styles.button}>Last</button>
        </div>
    );
}

export default Paginator;
