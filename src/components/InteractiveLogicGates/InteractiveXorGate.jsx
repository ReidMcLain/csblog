import React, { useState, useEffect } from 'react';

const InteractiveXorGate = () => {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [output, setOutput] = useState(0);  // Set initial output to 0

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
    const orOutput = a || b; // OR gate
    const nandOutput = !(a && b); // NAND gate
    const xorOutput = orOutput && nandOutput; // Final XOR output using AND gate logic
    setOutput(xorOutput);
  };

  return (
    <div style={{
      width: '420px',  // Keeping size at 420x210
      height: '210px',
      backgroundColor: '#8c8f85',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px 0',
      position: 'relative'
    }}>
      {/* Top-left orb (Input A) */}
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

        {/* Input 1 to OR gate wire */}
        <div style={{
          width: '95px',
          height: '2px',
          backgroundColor: inputA === 0 ? 'red' : 'orange',
          position: 'absolute',
          left: '25px',
          top: '12.5px'  // Horizontal wire directly connected to top-left orb
        }}></div>

        {/* Top-left OR gate */}
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
        }}>OR</div>

        {/* OR to AND gate wire */}
        <div style={{
          width: '100px',
          height: '2px',
          backgroundColor: (inputA === 0 && inputB === 0) ? 'red' : 'orange',  // Color change logic
          position: 'absolute',
          left: '170px',
          top: '12.5px',
          transform: 'rotate(22deg)',
          transformOrigin: 'left',
        }}></div>
      </div>

      {/* Bottom-left orb (Input B) */}
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

        {/* Input 2 to OR gate wire */}
        <div style={{
          width: '95px',
          height: '2px',
          backgroundColor: inputB === 0 ? 'red' : 'orange',
          position: 'absolute',
          left: '25px',
          top: '12.5px'  // Horizontal wire directly connected to bottom-left orb
        }}></div>

        {/* Bottom-left NAND gate */}
        <div style={{
          width: '50px',
          height: '25px',
          backgroundColor: 'blue',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          left: '120px',  // Bottom-left blue box (NAND gate)
        }}>NAND</div>

        {/* NAND to AND gate wire */}
        <div style={{
          width: '100px',
          height: '2px',
          backgroundColor: inputB === 1 ? 'red' : 'orange',
          position: 'absolute',
          left: '170px',
          top: '12.5px',
          transform: 'rotate(-23deg)',
          transformOrigin: 'left',
        }}></div>
      </div>

      {/* Input 1 to AND gate wire */}
      <div style={{
        width: '120px',
        height: '2px',
        backgroundColor: inputA === 0 ? 'red' : 'orange',
        position: 'absolute',
        left: '25px',
        top: '62.5px',
        transform: 'rotate(37deg)',  // Slight diagonal for wire placement
        transformOrigin: 'left',
      }}></div>

      {/* Input 2 to OR gate wire */}
      <div style={{
        width: '121px',
        height: '2px',
        backgroundColor: inputB === 0 ? 'red' : 'orange',
        position: 'absolute',
        left: '25px',
        top: '147.5px',
        transform: 'rotate(-38deg)',  // Slight diagonal for wire placement
        transformOrigin: 'left',
      }}></div>

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

      {/* Output wire (AND gate to output orb) */}
      <div style={{
        width: '100px',
        height: '2px',
        backgroundColor: output ? 'orange' : 'red',
        position: 'absolute',
        left: '300px',
        top: '105px'
      }}></div>

      {/* Output orb */}
      <div style={{
        width: '25px',
        height: '25px',
        backgroundColor: output ? 'yellow' : 'black',
        borderRadius: '50%',
        position: 'absolute',
        left: '395px',
        top: '92.5px',
        transition: 'background-color 0.3s'
      }}></div>
    </div>
  );
};

export default InteractiveXorGate;