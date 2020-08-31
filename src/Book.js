import React from 'react';
import SearchTermFilter from './PrintTypeFilter';

class Book extends React.Component {

    render () {

        let price = 0

        try {
            if(typeof this.props.book.saleInfo.retailPrice.amount === 'number') 
                price = this.props.book.saleInfo.retailPrice.amount
        } 
        catch(err) {
            price = 0
        }


        let imgLink = this.props.book.volumeInfo.imageLinks.thumbnail
        let title = this.props.book.volumeInfo.title

        console.log('this is book', this.props)
        return (
            <section>
                <h3 className="title">{title}</h3>
                <div className="book">
                    <img src={imgLink} alt={title} className="bookCover"/>
                    <div className="bookInfo">
                        <p>{this.props.book.volumeInfo.authors}</p>
                        <p>{price}</p>
                        <p>{this.props.book.volumeInfo.description}</p>
                    </div>
                </div>   
            </section>
    

        ) 
    }
}


export default Book;