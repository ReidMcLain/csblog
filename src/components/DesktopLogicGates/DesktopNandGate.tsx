import React, { useState } from 'react';

const DesktopNandGate = () => {
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
      width: '420px',
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
      }}>
        <div onClick={handleClickA} style={{
          width: '25px',
          height: '25px',
          backgroundColor: inputA === 0 ? 'black' : 'yellow',
          borderRadius: '50%',
          cursor: 'pointer',
        }}></div>
        {/* Label for Input A */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '5px',
          fontSize: '14px',
          whiteSpace: 'nowrap',
        }}>
          Input A
        </div>
      </div>

      {/* Top-left diagonal wire (unchanged) */}
      <div style={{
        width: '100px',  // Fixed length
        height: '2px',
        backgroundColor: inputA === 0 ? 'red' : 'orange',
        position: 'absolute',
        left: '25px',
        top: '62.5px',  // Positioned correctly to align with the top orb
        transform: 'rotate(19deg)',  // Original diagonal rotation
        transformOrigin: 'left',
      }}></div>

      {/* Bottom-left orb (Input B) */}
      <div style={{
        position: 'absolute',
        left: '0',
        top: '135px',
      }}>
        <div onClick={handleClickB} style={{
          width: '25px',
          height: '25px',
          backgroundColor: inputB === 0 ? 'black' : 'yellow',
          borderRadius: '50%',
          cursor: 'pointer',
        }}></div>
        {/* Label for Input B */}
        <div style={{
          position: 'absolute',
          top: '30px',
          left: '5px',
          fontSize: '14px',
          whiteSpace: 'nowrap',
        }}>
          Input B
        </div>
      </div>

      {/* Bottom-left diagonal wire (unchanged) */}
      <div style={{
        width: '100px',  // Fixed length
        height: '2px',
        backgroundColor: inputB === 0 ? 'red' : 'orange',
        position: 'absolute',
        left: '25px',
        top: '145px',
        transform: 'rotate(-19deg)',  // Original diagonal rotation
        transformOrigin: 'left',
      }}></div>

      {/* AND gate (no changes) */}
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

      {/* Wire from AND gate to NOT gate */}
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

      {/* Rightmost wire to output orb */}
      <div style={{
        width: '100px',
        height: '2px',
        backgroundColor: (inputA && inputB) ? 'red' : 'orange',  // Red when both inputs are 1
        position: 'absolute',
        left: '300px',
        top: '105px'
      }}></div>

      {/* Output orb */}
      <div style={{
        position: 'absolute',
        left: '395px',
        top: '92.5px',
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
          fontSize: '14px',
          whiteSpace: 'nowrap',
        }}>
          Output
        </div>
      </div>
    </div>
  );
};

export default DesktopNandGate;
