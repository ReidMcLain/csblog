import React, { useState, useEffect } from 'react';

const InteractiveNorGate = () => {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [output, setOutput] = useState(1);  // Set initial output to 1

  // Calculate output based on the inputs when the component mounts or inputs change
  useEffect(() => {
    calculateOutput(inputA, inputB);
  }, [inputA, inputB]);

  const handleClickA = () => {
    const newStateA = inputA === 0 ? 1 : 0;
    setInputA(newStateA);
  };

  const handleClickB = () => {
    const newStateB = inputB === 0 ? 1 : 0;
    setInputB(newStateB);
  };

  const calculateOutput = (a, b) => {
    const notA = !a;
    const notB = !b;
    const andOutput = !(notA && notB);  // Equivalent to OR logic
    const norOutput = !(a || b);  // NOR gate logic
    setOutput(norOutput);
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
          width: '95px',  // Length of the wire
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
          left: '120px',  // Top-left blue box (NOT gate)
        }}>NOT</div>

        {/* Top-left diagonal wire */}
        <div style={{
          width: '100px',
          height: '2px',
          backgroundColor: inputA === 1 ? 'red' : 'orange', // Inverted color logic
          position: 'absolute',
          left: '170px',
          top: '12.5px',
          transform: 'rotate(22deg)',
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

        {/* Bottom-left horizontal wire */}
        <div style={{
          width: '95px',  // Length of the wire
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
          left: '120px',  // Bottom-left blue box (NOT gate)
        }}>NOT</div>

        {/* Bottom-left diagonal wire */}
        <div style={{
          width: '100px',
          height: '2px',
          backgroundColor: inputB === 1 ? 'red' : 'orange',  // Inverted color logic
          position: 'absolute',
          left: '170px',
          top: '12.5px',
          transform: 'rotate(-23deg)',
          transformOrigin: 'left',
        }}></div>
      </div>

      {/* AND gate (Right-most) */}
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
      }}>AND</div>

      {/* Rightmost wire to output orb */}
      <div style={{
        width: '100px',
        height: '2px',
        backgroundColor: output ? 'orange' : 'red',  // Default is orange, changes to red if output is 0
        position: 'absolute',
        left: '300px',
        top: '105px'
      }}></div>

      {/* Output orb */}
      <div style={{
        width: '25px',
        height: '25px',
        backgroundColor: output ? 'yellow' : 'black',  // Default is yellow, changes to black if output is 0
        borderRadius: '50%',
        position: 'absolute',
        left: '395px',
        top: '92.5px',
        transition: 'background-color 0.3s'
      }}></div>
    </div>
  );
};

export default InteractiveNorGate;