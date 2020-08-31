import React from 'react';
import SearchFilter from './SearchFilter';
import PrintTypeFilter from './PrintTypeFilter';
import BookTypeFilter from './BookTypeFilter';


class Search extends React.Component {

    render () {
        return (
            <section>
                <SearchFilter />
                <PrintTypeFilter />
                <BookTypeFilter />    
            </section>
        ) 
    }
}


export default Search;
