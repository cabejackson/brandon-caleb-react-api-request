import React from 'react';
import './App.css';
import Search from './Search';
import BookList from './BookList';

const apiKey = `:keyes&key=AIzaSyDJLlWlrwB4UEP-nM2SP0lv3WF7Izh9Gkw`
const baseURL = "https://www.googleapis.com/books/v1/volumes?q="


class App extends React.Component {
  


 state = {
  searchInput: '',
  printFilter: '',
  bookFilter: '',
  searchResults: [],
}

//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDJLlWlrwB4UEP-nM2SP0lv3WF7Izh9Gkw
componentDidMount() {
  fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDJLlWlrwB4UEP-nM2SP0lv3WF7Izh9Gkw') 
    .then(response => response.json())
    .then(data => {
      const books = data.items;
      this.setState({
        searchResults: books
      })
      console.log(this.state.searchResults)
    })
    
}
  
  render(){
    return (
      <div className="App">
        <header className="App-header" />
        <Search />
        <BookList />
      </div>
    );
  }

  }
 

export default App;
