import React, { useState } from 'react';

const InteractiveNotGate = () => {
  const [input, setInput] = useState(0);  // Tracks the state of the input orb

  const handleClickInput = () => {
    setInput(prev => 1 - prev);  // Toggle between 0 and 1
  };

  return (
    <div style={{
      width: '420px',
      height: '210px',
      backgroundColor: '#8c8f85',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px 0',
      position: 'relative'
    }}>
      {/* Input orb positioned at the far left, touching the edge */}
      <div style={{
        position: 'absolute',
        left: '0',  // Positioned at the very left edge
        top: '97.5px',  // Vertically centered
      }}>
        <div onClick={handleClickInput} style={{
          width: '25px',
          height: '25px',
          backgroundColor: input === 0 ? 'black' : 'yellow',
          borderRadius: '50%',
          cursor: 'pointer',
        }}></div>
      </div>

      {/* Wire from Input to NOT gate, starting exactly at the edge of the orb */}
      <div style={{
        position: 'absolute',
        left: '25px',  // Starting exactly at the edge of the input orb
        top: '110px',
        width: '160px',
        height: '2px',
        backgroundColor: input === 0 ? 'red' : 'orange',  // Active when input is 0
        transition: 'background-color 0.3s'
      }}></div>

      {/* NOT gate symbol in the middle */}
      <div style={{
        width: '50px',
        height: '25px',
        backgroundColor: 'blue',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '185px',  // Centered manually for the "NOT" text
        top: '97.5px'
      }}>
        NOT
      </div>

      {/* Wire from NOT gate to Output, perfectly aligned with the NOT gate and orb */}
      <div style={{
        position: 'absolute',
        left: '235px',  // Starting exactly at the NOT gate
        top: '110px',
        width: '160px',
        height: '2px',
        backgroundColor: input === 0 ? 'orange' : 'red',  // Active when input is 0
        transition: 'background-color 0.3s'
      }}></div>

      {/* Output orb positioned at the far right, touching the edge */}
      <div style={{
        position: 'absolute',
        right: '0',  // Positioned at the very right edge
        top: '97.5px',  // Vertically centered
      }}>
        <div style={{
          width: '25px',
          height: '25px',
          backgroundColor: input === 0 ? 'yellow' : 'black',  // Output is opposite of input
          borderRadius: '50%',
          transition: 'background-color 0.3s'
        }}></div>
      </div>
    </div>
  );
};

export default InteractiveNotGate;