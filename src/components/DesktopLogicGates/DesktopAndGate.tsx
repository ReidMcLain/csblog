import React, { useState } from 'react';

const DesktopAndGate = () => {
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
    <div
      style={{
        width: '420px',
        height: '210px',
        backgroundColor: '#8c8f85',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0',
        position: 'relative',
      }}
    >
      {/* Top-left orb (Input A) */}
      <div
        style={{
          position: 'absolute',
          left: '0',
          top: '50px',
        }}
      >
        <div
          onClick={handleClickA}
          style={{
            width: '25px',
            height: '25px',
            backgroundColor: inputA === 0 ? 'black' : 'yellow',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
        ></div>
        {/* Label for Input A */}
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            left: '5px',
            fontSize: '14px',
            whiteSpace: 'nowrap',
          }}
        >
          Input A
        </div>
      </div>

      {/* Top-left diagonal wire */}
      <div
        style={{
          width: '155px', // Length of the wire
          height: '2px',
          backgroundColor: inputA === 0 ? 'red' : 'orange',
          position: 'absolute',
          transform: 'rotate(12deg)',
          left: '24px',
          top: '77.5px',
        }}
      ></div>

      {/* Bottom-left orb (Input B) */}
      <div
        style={{
          position: 'absolute',
          left: '0',
          top: '135px',
        }}
      >
        <div
          onClick={handleClickB}
          style={{
            width: '25px',
            height: '25px',
            backgroundColor: inputB === 0 ? 'black' : 'yellow',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
        ></div>
        {/* Label for Input B */}
        <div
          style={{
            position: 'absolute',
            top: '30px',
            left: '5px',
            fontSize: '14px',
            whiteSpace: 'nowrap',
          }}
        >
          Input B
        </div>
      </div>

      {/* Bottom-left diagonal wire */}
      <div
        style={{
          width: '155px', // Length of the wire
          height: '2px',
          backgroundColor: inputB === 0 ? 'red' : 'orange',
          position: 'absolute',
          transform: 'rotate(-12deg)',
          left: '24px',
          top: '130px',
        }}
      ></div>

      {/* AND gate (no changes) */}
      <div
        style={{
          width: '50px',
          height: '25px',
          backgroundColor: 'blue',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          left: '175px',
          top: '92.5px',
        }}
      >
        AND
      </div>

      {/* Rightmost wire to output orb (no changes) */}
      <div
        style={{
          width: '180px',
          height: '2px',
          backgroundColor: output === 1 ? 'orange' : 'red',
          position: 'absolute',
          left: '225px',
          top: '105px',
        }}
      ></div>

      {/* Output orb */}
      <div
        style={{
          position: 'absolute',
          left: '395px',
          top: '92.5px',
        }}
      >
        <div
          style={{
            width: '25px',
            height: '25px',
            backgroundColor: output === 1 ? 'yellow' : 'black',
            borderRadius: '50%',
            transition: 'background-color 0.3s',
          }}
        ></div>
        {/* Label for Output */}
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            right: '5px',
            fontSize: '14px',
            whiteSpace: 'nowrap',
          }}
        >
          Output
        </div>
      </div>
    </div>
  );
};

export default DesktopAndGate;