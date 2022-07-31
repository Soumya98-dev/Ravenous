import logo from "D:/Reactjs/ravenous/src/logo.svg";
import "./App.css";
import React from "react";
import BusinessList from "../Business List/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
