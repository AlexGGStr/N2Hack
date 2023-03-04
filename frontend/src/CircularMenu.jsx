import React, { useState } from 'react';
import axios from 'axios';

function CircularMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    'school',
    'church',
    'hospital',
    'restaurant',
    'bank'
  ];
  
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleClick = (category, fill) => {
    setSelectedCategories(prevSelectedCategories => [...prevSelectedCategories, category]);
    console.log(selectedCategories);
    
  }
  const findHome = () => {

    const concatenatedString = selectedCategories.join("=true&");
    console.log(concatenatedString)
    axios.get(`http://localhost:8080?${concatenatedString}`)
    .then(response => {
      // handle response data
    })
    .catch(error => {
      // handle error
    });
  }
  const toggleMenu = () => {
    setSelectedCategories(prevSelectedCategories => [...prevSelectedCategories, options]);
    console.log(selectedCategories);
  };

  const radius = 80;
  const center = 100;
  const angle = 360 / options.length;
  const buttonRadius = 16;
  const buttonPositions = options.map((option, index) => [
    center + radius * Math.sin(index * angle * Math.PI / 180),
    center - radius * Math.cos(index * angle * Math.PI / 180),
  ]);

  return (
    <div className="circular-menu">
      <svg viewBox="0 0 400 400">
        <circle cx={center} cy={center} r={radius} fill="#fff" stroke="#333" strokeWidth="2" />
        {buttonPositions.map((position, index) => (
          <g key={index}>
            <circle cx={position[0]} cy={position[1]} r={buttonRadius} fill={selectedCategories.includes(options[index]) ? '#ff0' : '#333'} onClick={() => handleClick(options[index])} />
            <text x={position[0]} y={position[1] + 5} textAnchor="middle" fill="#fff" fontSize="12px" fontWeight="bold">{options[index]}</text>
          </g>
        ))}
        <g>
          <circle cx={center} cy={center} r={buttonRadius * 2} fill="#333" onClick={findHome} />
          <text x={center} y={center + 5} textAnchor="middle" fill="#fff" fontSize="12px" fontWeight="bold">Find</text>
        </g>
        <g>
        <rect x={center + radius + 50} y={center - 20} width="80" height="40" fill="#333" rx="4" onClick={toggleMenu} />
        <text x={center + radius + 90} y={center + 5} textAnchor="middle" fill="#fff" fontSize="12px" fontWeight="bold">Tell me </text>
      </g>
      </svg>
    </div>
  );
}

export default CircularMenu;
