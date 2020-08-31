import React from "react";
import PrintTypeFilter from "./PrintTypeFilter";
import BookTypeFilter from "./BookTypeFilter";

class SearchFilter extends React.Component {

  render() {
    return (
      <section className="SearchFilter">
        <form action="" className="searchInput">
          <label for="userInput">{'Search'}</label>
          <input type="text" id="userInput"/>
          <button type="submit" className="Search">{'Click Here'}</button>
        </form>
      </section>
    );
  }
}

export default SearchFilter;
