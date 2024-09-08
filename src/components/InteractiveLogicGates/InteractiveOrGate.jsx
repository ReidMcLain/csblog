import React, { useState } from 'react';

const InteractiveOrGate = () => {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [output, setOutput] = useState(1);  // Initial output state

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
    const notA = !a;
    const notB = !b;
    const nandOutput = !(notA && notB);  // Equivalent to OR logic
    setOutput(nandOutput);
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
      {/* Top-left orb */}
      <div style={{
        position: 'absolute',
        left: '0',
        top: '25px',
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

        {/* Top-left horizontal wire */}
        <div style={{
          width: '35px',  // Length of the wire
          height: '2px',
          backgroundColor: inputA === 0 ? 'red' : 'orange',
          position: 'absolute',
          left: '25px',
          top: '12.5px'  // Horizontal wire directly connected to top-left orb
        }}></div>

        {/* Top-left NOT gate styling */}
        <div style={{
          width: '50px',
          height: '25px',
          backgroundColor: 'blue',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          left: '60px',  // Top-left blue box (NOT gate)
        }}>NOT</div>

        {/* Top-left diagonal wire */}
        <div style={{
          width: '70px',
          height: '2px',
          backgroundColor: inputA === 1 ? 'red' : 'orange', // Inverted color logic
          position: 'absolute',
          left: '110px',
          top: '12.5px',
          transform: 'rotate(22deg)',
          transformOrigin: 'left',
        }}></div>
      </div>

      {/* Bottom-left orb */}
      <div style={{
        position: 'absolute',
        left: '0',
        top: '100px',
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

        {/* Bottom-left horizontal wire */}
        <div style={{
          width: '35px',  // Length of the wire
          height: '2px',
          backgroundColor: inputB === 0 ? 'red' : 'orange',
          position: 'absolute',
          left: '25px',
          top: '12.5px'  // Horizontal wire directly connected to bottom-left orb
        }}></div>

        {/* Bottom-left NOT gate styling */}
        <div style={{
          width: '50px',
          height: '25px',
          backgroundColor: 'blue',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          left: '60px',  // Bottom-left blue box (NOT gate)
        }}>NOT</div>

        {/* Bottom-left diagonal wire */}
        <div style={{
          width: '70px',
          height: '2px',
          backgroundColor: inputB === 1 ? 'red' : 'orange',  // Inverted color logic
          position: 'absolute',
          left: '110px',
          top: '12.5px',
          transform: 'rotate(-23deg)',
          transformOrigin: 'left',
        }}></div>
      </div>

      {/* NAND gate (Right-most) */}
      <div style={{
        width: '50px',
        height: '25px',
        backgroundColor: 'blue',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '175px',
        top: '62.5px'
      }}>NAND</div>

      {/* Rightmost wire to output orb */}
      <div style={{
        width: '50px',
        height: '2px',
        backgroundColor: output ? 'orange' : 'red',
        position: 'absolute',
        left: '225px',
        top: '75px'
      }}></div>

      {/* Output orb */}
      <div style={{
        width: '25px',
        height: '25px',
        backgroundColor: output ? 'yellow' : 'black',
        borderRadius: '50%',
        position: 'absolute',
        left: '275px',
        top: '62.5px',
        transition: 'background-color 0.3s'
      }}></div>
    </div>
  );
};

export default InteractiveOrGate;