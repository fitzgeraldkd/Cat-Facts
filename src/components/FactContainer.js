import React, { useEffect, useState } from 'react';
import FactCard from './FactCard';
import Search from './Search';

function FactContainer() {
    const [catFacts, setCatFacts] = useState([]);
    const [resultsPage, setResultsPage] = useState(1);

    useEffect(() => {
        fetch(`https://catfact.ninja/facts?page=${resultsPage}`)
            .then(resp => resp.json())
            .then(results => {
                const newCatFacts = results.data.map((catFact, index) => {
                    catFact.id = results.from + index;
                    return catFact;
                })
                setCatFacts(newCatFacts);
            });
    }, [resultsPage]);

    return (
        <div>
            <Search />
            {catFacts.map(catFact => <FactCard key={catFact.id} catFact={catFact} />)}
        </div>
    );
}

export default FactContainer;
