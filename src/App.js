import React from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import data from "./data";
function App() {
  const cards = data.map((card, index) => {
    return <Card key={index} {...card} />;
  });
  console.log(cards);
  return (
    <div>
      <Nav />
      {cards}
    </div>
  );
}

export default App;
