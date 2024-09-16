import React, { useState } from 'react';

const MobileNandGate = () => {
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

  const calculateOutput = (a: number, b: number) => {
    const andOutput = a && b;  // AND gate computation
    const notOutput = !andOutput ? 1 : 0;  // NOT gate inverts AND output
    setOutput(notOutput);
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
      {/* Top-left orb (Input A) */}
      <div style={{
        position: 'absolute',
        left: '0',
        top: '30px',
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
        {/* Label for Input A */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '5px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
        }}>
          Input A
        </div>
        {/* Top-left diagonal wire */}
        <div style={{
          width: '55px',  // Fixed length to exactly 50px
          height: '2px',
          backgroundColor: inputA === 0 ? 'red' : 'orange',
          position: 'absolute',
          left: '25px',
          top: '12.5px',  // Positioned to align with the top orb
          transform: 'rotate(23deg)',  // Adjusted diagonal rotation
          transformOrigin: 'left',
        }}></div>
      </div>

      {/* Bottom-left orb (Input B) */}
      <div style={{
        position: 'absolute',
        left: '0',
        top: '95px',
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
        {/* Label for Input B */}
        <div style={{
          position: 'absolute',
          top: '30px',
          left: '5px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
        }}>
          Input B
        </div>
        {/* Bottom-left diagonal wire */}
        <div style={{
          width: '55px',  // Fixed length to exactly 50px
          height: '2px',
          backgroundColor: inputB === 0 ? 'red' : 'orange',
          position: 'absolute',
          left: '25px',
          top: '12.5px',
          transform: 'rotate(-23deg)',  // Adjusted diagonal rotation
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
        left: '75px',
        top: '62.5px'
      }}>AND</div>

      {/* Wire from AND gate to NOT gate, color depends on inputs */}
      <div style={{
        width: '50px',
        height: '2px',
        backgroundColor: (inputA && inputB) ? 'orange' : 'red',  // Only orange when both inputs are 1
        position: 'absolute',
        left: '125px',
        top: '74px'
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
        left: '175px',
        top: '62.5px'
      }}>NOT</div>

      {/* Rightmost wire to output orb */}
      <div style={{
        width: '50px',
        height: '2px',
        backgroundColor: (inputA && inputB) ? 'red' : 'orange',  // Red when both inputs are 1, orange otherwise
        position: 'absolute',
        left: '225px',
        top: '74px'
      }}></div>

      {/* Output orb */}
      <div style={{
        position: 'absolute',
        left: '275px',
        top: '62.5px',
      }}>
        <div style={{
          width: '25px',
          height: '25px',
          backgroundColor: output === 1 ? 'yellow' : 'black',
          borderRadius: '50%',
          transition: 'background-color 0.3s',
        }}></div>
        {/* Label for Output */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '5px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
        }}>
          Output
        </div>
      </div>
    </div>
  );
};

export default MobileNandGate;