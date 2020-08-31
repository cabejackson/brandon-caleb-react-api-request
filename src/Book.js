import React from 'react';
import SearchTermFilter from './PrintTypeFilter';

class Book extends React.Component {

    render () {
        let Title = "title"
        let Author = "name";
        let Price = 0;
        let Description = "words";


        return (
            <section>
                <h3 className="title">{Title}</h3>
                <div className="book">
                    <img src="" alt="" className="bookCover"/>
                    <div className="bookInfo">
                        <p>{Author}</p>
                        <p>{Price}</p>
                        <p>{Description}</p>
                    </div>
                </div>   
            </section>
    

        ) 
    }
}


export default Book;