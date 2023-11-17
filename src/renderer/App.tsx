import React from 'react';
import './App.css';

const App = () => {
  const numCards = 100; // Set the number of cards here
  const cards = Array.from({ length: numCards }, (_, i) => ({
    text: `Card ${i + 1}`,
  }));

  return (
    <div className="App">
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{ backgroundColor: 'lightgreen' }}
          >
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
