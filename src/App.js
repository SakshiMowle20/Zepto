import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);
  const [items, setItems] = useState([
    'Nick Gian',
    'Narayan Gamer',
    'Anita Gros',
    'Megan Smith',
    'narayan murthi',
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleItemClick = (item) => {
    setChips([...chips, item]);
    setItems(items.filter((i) => i !== item));
    setInputValue('');
  };

  const handleChipRemove = (chip) => {
    setChips(chips.filter((c) => c !== chip));
    setItems([...items, chip]);
  };

  return (
    <div className="chip-container">
      <div className="chips">
        {chips.map((chip, index) => (
          <div key={index} className="chip">
            {chip}
            <span
              className="chip-remove"
              onClick={() => handleChipRemove(chip)}
            >
              
            </span>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type to search"
          className="input"
        />
      </div>
      {inputValue && (
        <div className="item-list">
          {items
            .filter((item) =>
              item.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((item, index) => (
              <div
                key={index}
                className="item"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default App;
