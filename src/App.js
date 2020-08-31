import React from 'react';
import './App.css';
import Search from './Search';
import Booklist from './BookList'
import BookList from './BookList';

class App extends React.Component {
  
  API_Key = `AIzaSyDJLlWlrwB4UEP-nM2SP0lv3WF7Izh9Gkw`
  
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
