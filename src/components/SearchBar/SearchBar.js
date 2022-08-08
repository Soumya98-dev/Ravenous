import React from "react";
import "./SearchBar.css";

// the search bar should allow users to search businesses by:
//     Best Match
//     Highest Rated
//     Most Reviewed

//*** SEARCH BAR COMPONENT
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    //*** FROM THE YELP API
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };
  }
  //***returns the current CSS class for a sorting option.This method will prove useful in providing visual feedback to users
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      //*** WE ARE ATTACHING "active" CLASS TO THE SORT OPTION CLICKED
      return "active";
    } else {
      return "";
    }
  }
  //*** THIS METHOD IS SETTING THE STATE OF THE SORT OPTIONS
  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption,
    });
  }
  //*** THIS METHOD IS SETTING THE STATE OF THE "Search Business" TEXT FIELD
  handleTermChange(event) {
    this.setState({
      term: event.target.value,
    });
  }
//*** THIS METHOD IS SETTING THE STATE OF THE "WHERE" TEXT FIELD
  handleLocationChange(event) {
    this.setState({
      location: event.target.value,
    });
  }
//*** THIS METHOD IS FOR THE "Let's Go" button
  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  //*** Dynamically create the list items needed to display the sort options
  //*** Iterate through the keys & values of the "sortByOptions" object & return a list item
  //*** list items: keys -> attribute & value -> content
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      //*** GETTING THE VALUES
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}>
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            onChange={this.handleTermChange}
            placeholder="Search Businesses..."
          />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
