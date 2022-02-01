import React from "react";
import "./App.css";
import Card from "./components/Card";
import data from "./data";
function App() {
  const cards = data.map((card, index) => {
    return <Card key={index} {...card} />;
  });

  return <div>{cards}</div>;
}

export default App;
