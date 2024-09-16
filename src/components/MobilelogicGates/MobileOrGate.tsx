import React, { useState, useEffect } from 'react';

const MobileOrGate = () => {
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

  const calculateOutput = (a: number, b: number) => {
    const notA = !a;
    const notB = !b;
    const nandOutput = !(notA && notB);  // Equivalent to OR logic
    setOutput(nandOutput ? 1 : 0);
  };

  return (
    <div className="interactive-or-gate" style={{
      width: '300px',
      height: '150px',
      backgroundColor: '#8c8f85',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px 0',
      position: 'relative'
    }}>
      {/* Top-left orb with label */}
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
        width: '50px',  // Length of the wire
        height: '2px',
        backgroundColor: inputA === 0 ? 'red' : 'orange',
        position: 'absolute',
        left: '25px',
        top: '41.5px'
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
        left: '75px',
        top: '30px'
      }}>NOT</div>

      {/* Top-left diagonal wire */}
      <div style={{
        width: '55px',
        height: '2px',
        backgroundColor: inputA === 1 ? 'red' : 'orange', // Inverted color logic
        position: 'absolute',
        left: '125px',
        top: '41.5px',
        transform: 'rotate(23deg)',
        transformOrigin: 'left',
      }}></div>

      {/* Bottom-left orb with label */}
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
        width: '50px',  // Length of the wire
        height: '2px',
        backgroundColor: inputB === 0 ? 'red' : 'orange',
        position: 'absolute',
        left: '25px',
        top: '106.5px'  // Aligned with the center of the bottom-left orb
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
        left: '75px',
        top: '95px'  // Aligned with the bottom-left orb
      }}>NOT</div>

      {/* Bottom-left diagonal wire */}
      <div style={{
        width: '55px',
        height: '2px',
        backgroundColor: inputB === 1 ? 'red' : 'orange',  // Inverted color logic
        position: 'absolute',
        left: '125px',
        top: '106.5px',
        transform: 'rotate(-23deg)',
        transformOrigin: 'left',
      }}></div>

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
        top: '74px'
      }}></div>

      {/* Output orb with label */}
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
          backgroundColor: output ? 'yellow' : 'black',
          borderRadius: '50%',
          transition: 'background-color 0.3s'
        }}></div>
      </div>
    </div>
  );
};

export default MobileOrGate;