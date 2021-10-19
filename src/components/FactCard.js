import React from 'react';

function FactCard({ catFact }) {
    return (
        <div>
            <h3>Fact #{catFact.id}</h3>
            <p>{catFact.fact}</p>
        </div>
    );
}

export default FactCard;
