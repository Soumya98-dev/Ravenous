import logo from "D:/Reactjs/ravenous/src/logo.svg";
import "./App.css";
import React from "react";
import BusinessList from "../Business List/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Business from "../Business/Business";

const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [business, business, business, business, business, business];

function App() {
  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
      {/* <Business /> */}
    </div>
  );
}

export default App;
