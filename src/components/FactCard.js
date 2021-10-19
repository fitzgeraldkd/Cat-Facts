import React from 'react';
import styles from './FactCard.module.css';

function FactCard({ catFact }) {
    return (
        <div className={styles['fact-card']}>
            <h3>Fact #{catFact.id}</h3>
            <p>{catFact.fact}</p>
        </div>
    );
}

export default FactCard;
