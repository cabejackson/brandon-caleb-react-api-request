import React from "react";
import PrintTypeFilter from "./PrintTypeFilter";
import BookTypeFilter from "./BookTypeFilter";

class SearchFilter extends React.Component {
    onSubmitForm = (e) => {
        console.log('This is Search Filter input')
        e.preventDefault();
        this.props.onSubmit(e.target.userInput.value)}
  render() {
    return (
      <section className="SearchFilter">
        <form action="" className="searchInput" onSubmit={this.onSubmitForm}>
          <label htmlFor="userInput">{'Search'}</label>
          <input type="text" id="userInput" name="userInput"/>
          <button type="submit" className="Search">{'Click Here'}</button>
        </form>
      </section>
    );
  }
}

export default SearchFilter;
