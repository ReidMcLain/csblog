import React, { useState } from 'react';

const InteractiveAndGate = () => {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [output, setOutput] = useState(0);

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
    const andOutput = a && b;
    setOutput(andOutput);
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

        {/* Top-left horizontal wire */}
        <div style={{
          width: '155px',  // Length of the wire
          height: '2px',
          backgroundColor: inputA === 0 ? 'red' : 'orange',
          position: 'absolute',
          transform: 'rotate(12deg)',
          left: '24px',
          top: '27.5px'  // Horizontal wire directly connected to top-left orb
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

        {/* Bottom-left horizontal wire */}
        <div style={{
          width: '155px',  // Length of the wire
          height: '2px',
          backgroundColor: inputB === 0 ? 'red' : 'orange',
          position: 'absolute',
          transform: 'rotate(-12deg)',
          left: '24px',
          top: '-5px'  // Horizontal wire directly connected to bottom-left orb
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
        left: '175px',
        top: '92.5px'
      }}>AND</div>

      {/* Rightmost wire to output orb */}
      <div style={{
        width: '180px',
        height: '2px',
        backgroundColor: output === 1 ? 'orange' : 'red',
        position: 'absolute',
        left: '225px',
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

export default InteractiveAndGate;