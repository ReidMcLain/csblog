import React, { useState } from 'react';

const InteractiveAndGate = () => {
  // States for the two inputs and the output of the AND gate
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [output, setOutput] = useState(0);

  // Function to handle clicking on input A
  const handleClickA = () => {
    const newStateA = inputA === 0 ? 1 : 0;
    setInputA(newStateA);
    calculateOutput(newStateA, inputB);
  };

  // Function to handle clicking on input B
  const handleClickB = () => {
    const newStateB = inputB === 0 ? 1 : 0;
    setInputB(newStateB);
    calculateOutput(inputA, newStateB);
  };

  // Function to calculate the output based on inputs A and B
  const calculateOutput = (a, b) => {
    const newOutput = a && b;
    setOutput(newOutput);
  };

  return (
    <div style={{
      width: '300px',
      height: '150px',
      backgroundColor: '#8c8f85',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px 0',
      position: 'relative'
    }}>
      {/* Input circles and lines to the left */}
      <div style={{
        position: 'absolute',
        left: '0',
        top: '25px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        {[inputA, inputB].map((input, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            {/* Clickable black/yellow orb */}
            <div onClick={index === 0 ? handleClickA : handleClickB} style={{
              width: '25px',
              height: '25px',
              backgroundColor: input === 0 ? 'black' : 'yellow', // Yellow when active
              borderRadius: '50%',
              cursor: 'pointer',
              marginRight: '5px',
            }}></div>
            {/* Red line extending diagonally */}
            <div style={{
              width: '125px',
              height: '2px',
              backgroundColor: 'red',
              position: 'absolute',
              left: '30px',
              top: index === 0 ? '12.5px' : '87.5px',
              transform: `rotate(${index === 0 ? 15 : -15}deg)`,
              transformOrigin: 'left'
            }}></div>
          </div>
        ))}
      </div>

      {/* Blue box with "AND" text */}
      <div style={{
        width: '50px',
        height: '25px',
        backgroundColor: 'blue',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '125px',
        top: '62.5px'
      }}>
        AND
      </div>

      {/* Red line to the right */}
      <div style={{
        width: '100px',
        height: '2px',
        backgroundColor: 'red',
        position: 'absolute',
        left: '175px',
        top: '75px'
      }}></div>

      {/* Output indicator */}
      <div style={{
        width: '25px',
        height: '25px',
        backgroundColor: output === 1 ? 'yellow' : 'black', // Yellow when output is 1
        borderRadius: '50%',
        position: 'absolute',
        left: '275px',
        top: '62.5px'
      }}></div>
    </div>
  );
};

export default InteractiveAndGate;