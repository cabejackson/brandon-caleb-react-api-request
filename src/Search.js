import React from 'react';
import SearchFilter from './SearchFilter';
import PrintTypeFilter from './PrintTypeFilter';
import BookTypeFilter from './BookTypeFilter';


class Search extends React.Component {

    render () {
        return (
            <section className="Filters">
                <SearchFilter />
                <div className="PrintBookFilters">
                    <PrintTypeFilter />
                    <BookTypeFilter />
                </div>
            </section>
        ) 
    }
}


export default Search;
