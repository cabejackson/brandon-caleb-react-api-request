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

onSubmit = (e) => {
  let input = e.split(' ').join('+');
  fetch(baseURL + input + apiKey) 
  .then(response => response.json())
  .then(data => {
    const books = data.items;
    console.log(books, 'those are books')
    this.setState({
      searchResults: books
    })
    //console.log('hiii', this.state.searchResults)
  })

  
  //console.log('the input is here', input)
  // this.setState({
  //   searchInput: input   
  // })
  //console.log('onsubmit', this.state.searchInput)

}
 

//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDJLlWlrwB4UEP-nM2SP0lv3WF7Izh9Gkw


  
  render(){
    //console.log('app is HERE');

    return (
      <div className="App">
        <header className="App-header">Google Book Search</header>
        <Search onSubmit={this.onSubmit}/>
        <BookList />
      </div>
    );
  }

  }
 

export default App;
