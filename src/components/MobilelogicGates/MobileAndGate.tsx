import React, { useState } from 'react';

const MobileAndGate = () => {
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

  const calculateOutput = (a: number, b: number) => {
    const andOutput = a && b;
    setOutput(andOutput);
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
        top: '30px',
        width: '25px',
        overflow: 'visible',
      }}>
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
        <div onClick={handleClickA} style={{
          width: '25px',
          height: '25px',
          backgroundColor: inputA === 0 ? 'black' : 'yellow',
          borderRadius: '50%',
          cursor: 'pointer',
        }}></div>
      </div>

      {/* Top-left horizontal wire */}
      <div style={{
        width: '94px',  // Length of the wire
        height: '2px',
        backgroundColor: inputA === 0 ? 'red' : 'orange',
        position: 'absolute',
        left: '25px',    // Starting exactly at the edge of the input orb
        top: '42.5px',   // Aligned with the center of the top-left orb
        transform: 'rotate(13deg)',
        transformOrigin: 'left center',
      }}></div>

      {/* Bottom-left orb */}
      <div style={{
        position: 'absolute',
        left: '0',
        top: '95px',
        width: '25px',
        overflow: 'visible',
      }}>
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
        <div onClick={handleClickB} style={{
          width: '25px',
          height: '25px',
          backgroundColor: inputB === 0 ? 'black' : 'yellow',
          borderRadius: '50%',
          cursor: 'pointer',
        }}></div>
      </div>

      {/* Bottom-left horizontal wire */}
      <div style={{
        width: '94px',  // Length of the wire
        height: '2px',
        backgroundColor: inputB === 0 ? 'red' : 'orange',
        position: 'absolute',
        left: '25px',    // Starting exactly at the edge of the input orb
        top: '106.5px',  // Aligned with the center of the bottom-left orb
        transform: 'rotate(-14deg)',
        transformOrigin: 'left center',
      }}></div>

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
        left: '115px',
        top: '62.5px'
      }}>AND</div>

      {/* Rightmost wire to output orb */}
      <div style={{
        width: '110px',
        height: '2px',
        backgroundColor: output === 1 ? 'orange' : 'red',
        position: 'absolute',
        left: '165px',
        top: '75px'
      }}></div>

      {/* Output orb */}
      <div style={{
        position: 'absolute',
        left: '275px',
        top: '62.5px',
        width: '25px',
        overflow: 'visible',
      }}>
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
        <div style={{
          width: '25px',
          height: '25px',
          backgroundColor: output === 1 ? 'yellow' : 'black',
          borderRadius: '50%',
          transition: 'background-color 0.3s'
        }}></div>
      </div>
    </div>
  );
};

export default MobileAndGate;