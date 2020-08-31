import React from "react";

class PrintTypeFilter extends React.Component {
  render() {
    return (
        <section>
          <label htmlFor="PrintType">{"Print Type: "}</label>
          <select name="PrintType" className="Search" default="All">
            <option value="all">all</option>
            <option value="books">books</option>
            <option value="magazines">magazines</option>
          </select>
        </section>
    );
  }
}

export default PrintTypeFilter;
