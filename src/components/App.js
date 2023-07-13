
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
  
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Delay the execution of suggestions update to prevent UI freezes
    setTimeout(() => {
      updateSuggestions(newSearchTerm);
    }, 300);
  };

  const updateSuggestions = (newSearchTerm) => {
    if (newSearchTerm.trim() === '') {
      setSuggestions([]);
    } else {
      const filteredSuggestions = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(newSearchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search fruits..."
      />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default App
