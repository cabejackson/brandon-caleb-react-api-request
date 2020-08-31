import React from "react";

class BookTypeFilter extends React.Component {
  render() {
    return (
        <section>
          <label for="bookTypeFilter"></label>
          <input type="text" id="bookTypeFilter" />

          <select type="" className="Search">
            {"Click Here"}
          </select>
        </section>
    );
  }
}

export default BookTypeFilter;
