import React, { useEffect, useState } from 'react';
import FactCard from './FactCard';
import Controls from './Controls';

function FactContainer() {
    const [catFacts, setCatFacts] = useState([]);
    const [resultsPage, setResultsPage] = useState(1);
    const [filterText, setFilterText] = useState('');

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
        setResultsPage(1);
    }

    const handlePageChange = (newPage) => {
        setResultsPage(newPage);
    }

    useEffect(() => {
        fetch(`https://catfact.ninja/facts?limit=1000`)
            .then(resp => resp.json())
            .then(results => {
                const newCatFacts = results.data.map((catFact, index) => {
                    catFact.id = results.from + index;
                    return catFact;
                })
                setCatFacts(newCatFacts);
            });
    }, []);

    const filteredCatFacts = catFacts.filter(catFact => catFact.fact.toLowerCase().includes(filterText.toLowerCase()))

    return (
        <div>
            <Controls filterText={filterText} handleFilterChange={handleFilterChange} filteredCatFacts={filteredCatFacts} resultsPage={resultsPage} handlePageChange={handlePageChange} />
            {filteredCatFacts.length > 0 ? filteredCatFacts.slice((resultsPage-1)*10, resultsPage*10).map(catFact => <FactCard key={catFact.id} catFact={catFact} />) : <p>No results found</p>}
        </div>
    );
}

export default FactContainer;
