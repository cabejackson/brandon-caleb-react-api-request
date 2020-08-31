import React from "react";

class BookTypeFilter extends React.Component {
  render() {
    return (
      <section>
      <label htmlFor="BookType">{"Brint Type: "}</label>
      <select name="BookType" className="Search" default="All" onChange={(e) => this.props.bookTypeFilter(e.target.value)}>
        <option value="ebooks">ebooks</option>
        <option value="free-ebooks">free-ebooks</option>
        <option value="full">full paid-ebooks</option>
        <option value="partial">partial</option>    
      </select>
    </section>
    );
  }
}

export default BookTypeFilter;
