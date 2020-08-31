import React from 'react';
import SearchFilter from './SearchFilter';
import PrintTypeFilter from './PrintTypeFilter';
import BookTypeFilter from './BookTypeFilter';


class Search extends React.Component {

    render () {
        console.log(this.props,'search is HERE');
        return (
            <section className="Filters">
                <SearchFilter onSubmit={this.props.onSubmit}/>
                <div className="PrintBookFilters">
                    <PrintTypeFilter />
                    <BookTypeFilter bookTypeFilter={this.bookTypeFilter}/>
                </div>
            </section>
        ) 
    }
}


export default Search;
