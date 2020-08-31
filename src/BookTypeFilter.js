import React from "react";

class BookTypeFilter extends React.Component {
  render() {
    return (
      <section>
      <label for="BookType">{"Brint Type: "}</label>
      <select name="BookType" className="Search" default="All">
        <option value=""></option>
        <option value=""></option>
      </select>
    </section>
    );
  }
}

export default BookTypeFilter;
