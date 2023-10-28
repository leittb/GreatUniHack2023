// // 
import React, { useState, handleMove } from 'react';
import './moving_button.css';

const MovingButton = () => {
    const [size, setSize] = useState(20);
    const [position, setPosition] = useState({ x: (window.innerWidth/2-size*2.5), y: (window.innerHeight/2-size)});
    const [colour, setColour] = useState("#FFF")
    const [count, setCount] = useState(0)
  
    const handleMove = (e) => {
        if (count <= 10) {
            const x = (e.clientX + Math.random()*500) % (window.innerWidth-size*5);
            const y = (e.clientY + Math.random()*500) % (window.innerHeight-size*2);

            setPosition({ x, y });
            setSize(size + 5)
            let col = "#" + Math.floor(Math.random()*16777215).toString(16)
            setColour(col)
            setCount(count + 1)
        }        
    };

    function buttonClick() {
        alert("DONE")
    }

    return (
      <button 
        type="button"
        style={{ position: 'absolute', left: position.x, top: position.y , fontSize: size, width: size*5, height: size*2, backgroundColor: colour}}
        onMouseMove={handleMove}
        onClick={buttonClick}
      >
        Click Me
      </button>
    );
  };
  
  export default MovingButton;