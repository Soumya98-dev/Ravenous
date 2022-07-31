import React from "react";
import "./SearchBar.css";

// the search bar should allow users to search businesses by:
//     Best Match
//     Highest Rated
//     Most Reviewed

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

//*** SEARCH BAR COMPONENT
class SearchBar extends React.Component {
  //*** Dynamically create the list items needed to display the sort options
  //*** Iterate through the keys & values of the "sortByOptions" object & return a list item
  //*** list items: keys -> attribute & value -> content
  renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];//*** GETTING THE VALUES
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }
  render() {}
}
