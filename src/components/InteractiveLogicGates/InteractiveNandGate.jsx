import React, { useState } from 'react';

const InteractiveAndNotGate = () => {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [output, setOutput] = useState(1);  // NAND gate initial output state

  const handleClickA = () => {
    const newStateA = inputA === 0 ? 1 : 0;
    setInputA(newStateA);
    calculateOutput(newStateA, inputB);
  };

  const handleClickB = () => {
    const newStateB = inputB === 0 ? 1 : 0;
    setInputB(newStateB);
    calculateOutput(inputA, newStateB);
  };

  const calculateOutput = (a, b) => {
    const andOutput = a && b;  // AND gate computation
    const notOutput = !andOutput ? 1 : 0;  // NOT gate inverts AND output, ensuring we output 1 or 0
    setOutput(notOutput);
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
      {/* Top-left orb */}
      <div style={{
        position: 'absolute',
        left: '0',
        top: '50px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div onClick={handleClickA} style={{
          width: '25px',
          height: '25px',
          backgroundColor: inputA === 0 ? 'black' : 'yellow',
          borderRadius: '50%',
          cursor: 'pointer',
          marginRight: '5px'
        }}></div>
        {/* Top-left diagonal wire */}
        <div style={{
          width: '100px',  // Fixed length to exactly 50px
          height: '2px',
          backgroundColor: inputA === 0 ? 'red' : 'orange',
          position: 'absolute',
          left: '25px',
          top: '12.5px',  // Positioned to align with the top orb
          transform: 'rotate(19deg)',  // Adjusted diagonal rotation
          transformOrigin: 'left',
        }}></div>
      </div>

      {/* Bottom-left orb */}
      <div style={{
        position: 'absolute',
        left: '0',
        top: '135px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div onClick={handleClickB} style={{
          width: '25px',
          height: '25px',
          backgroundColor: inputB === 0 ? 'black' : 'yellow',
          borderRadius: '50%',
          cursor: 'pointer',
          marginRight: '5px'
        }}></div>
        {/* Bottom-left diagonal wire */}
        <div style={{
          width: '100px',  // Fixed length to exactly 50px
          height: '2px',
          backgroundColor: inputB === 0 ? 'red' : 'orange',
          position: 'absolute',
          left: '25px',
          top: '12.5px',
          transform: 'rotate(-19deg)',  // Adjusted diagonal rotation
          transformOrigin: 'left',
        }}></div>
      </div>

      {/* AND gate */}
      <div style={{
        width: '50px',
        height: '25px',
        backgroundColor: 'blue',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '120px',
        top: '92.5px'
      }}>AND</div>

      {/* Wire from AND gate to NOT gate, color depends on inputs */}
      <div style={{
        width: '80px',
        height: '2px',
        backgroundColor: (inputA && inputB) ? 'orange' : 'red',  // Only orange when both inputs are 1
        position: 'absolute',
        left: '170px',
        top: '105px'
      }}></div>

      {/* NOT gate */}
      <div style={{
        width: '50px',
        height: '25px',
        backgroundColor: 'blue',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '250px',
        top: '92.5px'
      }}>NOT</div>

      {/* Rightmost wire to output orb, opposite of middle wire */}
      <div style={{
        width: '100px',
        height: '2px',
        backgroundColor: (inputA && inputB) ? 'red' : 'orange',  // Red when both inputs are 1, orange otherwise
        position: 'absolute',
        left: '300px',
        top: '105px'
      }}></div>

      {/* Output orb */}
      <div style={{
        width: '25px',
        height: '25px',
        backgroundColor: output === 1 ? 'yellow' : 'black',
        borderRadius: '50%',
        position: 'absolute',
        left: '395px',
        top: '92.5px',
        transition: 'background-color 0.3s'
      }}></div>
    </div>
  );
};

export default InteractiveAndNotGate;