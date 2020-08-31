import React from "react";

class PrintTypeFilter extends React.Component {
  render() {
    return (
        <section>
          <label for="PrintType">{"Print Type: "}</label>
          <select name="PrintType" className="Search" default="All">
            <option value=""></option>
            <option value=""></option>
          </select>
        </section>
    );
  }
}

export default PrintTypeFilter;
