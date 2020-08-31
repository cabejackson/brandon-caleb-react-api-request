import React from 'react';
import Book from './Book';

class BookList extends React.Component {
    
    render () {
        const bookList = this.props.books.map(item => {
            return <Book book={item}/>
        })

        return (
            <section>
                {bookList}
            </section>
        ) 
    }
}


export default BookList;