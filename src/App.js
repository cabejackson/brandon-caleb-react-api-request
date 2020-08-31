import React from 'react';
import './App.css';
import Search from './Search';
import BookList from './BookList';

const apiKey = `:keyes&key=AIzaSyDJLlWlrwB4UEP-nM2SP0lv3WF7Izh9Gkw`
const baseURL = "https://www.googleapis.com/books/v1/volumes?q="


class App extends React.Component {
  


 state = {
  printFilter: '',
  bookFilter: '',
  books: [],
}

onSubmit = (e) => {
  let input = e.split(' ').join('+');
  fetch(baseURL + input + apiKey) 
  .then(response => response.json())
  .then(data => {
    const results = data.items;
    //console.log(books, 'those are books')
    this.setState({
      books: results
    })
  })
}

bookTypeFilter = (filter) => {
  this.setState({
    bookFilter: filter
  })
}
   
  render(){
    console.log(this.state.books)
    return (
      <div className="App">
        <header className="App-header">Google Book Search</header>
        <Search onSubmit={this.onSubmit} bookTypeFilter={this.bookTypeFilter}/>
        <BookList books={this.state.books}/>
      </div>
    );
  }

  }
 

export default App;
