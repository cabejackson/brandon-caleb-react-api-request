import React from 'react';
import SearchFilter from './SearchFilter';
import SearchTermFilter from './SearchTermFilter';

class Search extends React.Component {

    render () {
        return (
            <section>
                <SearchFilter />
                <SearchTermFilter />
            </section>
        ) 
    }
}


export default Search;
