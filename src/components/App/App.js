import logo from "D:/Reactjs/ravenous/src/logo.svg";
import "./App.css";
import React from "react";
import BusinessList from "../Business List/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Business from "../Business/Business";
import Yelp from "../../util/Yelp";

// const business = {
//     imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
//     name: "MarginOtto Pizzeria",
//     address: "1010 Paddington Way",
//     city: "Flavortown",
//     state: "NY",
//     zipCode: "10101",
//     category: "Italian",
//     rating: 4.5,
//     reviewCount: 90,
// };
//
// const businesses = [business, business, business, business, business, business];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {businesses: []};
        this.searchYelp = this.searchYelp.bind(this);
    }

    //*** Simulating a search query
    searchYelp(term, location, sortBy) {
        // console.log(`Searching Yelp with ${term} , ${location} and ${sortBy}`);
        Yelp.search(term, location, sortBy).then(businesses => {
            this.setState({
                businesses: businesses
            });
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Ravenous</h1>
                <SearchBar searchYelp={this.searchYelp}/>
                <BusinessList businesses={this.state.businesses}/>
                {/* <Business /> */}
            </div>
        );
    }
}

export default App;
