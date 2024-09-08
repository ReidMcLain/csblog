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
    const newOutput = a && b;
    setOutput(newOutput);
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
      <div style={{
        position: 'absolute',
        left: '0',
        top: '25px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        {[inputA, inputB].map((input, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <div onClick={index === 0 ? handleClickA : handleClickB} style={{
              width: '25px',
              height: '25px',
              backgroundColor: input === 0 ? 'black' : 'yellow',
              borderRadius: '50%',
              cursor: 'pointer',
              marginRight: '5px',
            }}></div>
            <div style={{
              width: '125px',
              height: '2px',
              backgroundColor: input === 0 ? 'red' : 'orange',
              position: 'absolute',
              left: '25px',
              top: index === 0 ? '12.5px' : '87.5px',
              transform: `rotate(${index === 0 ? 15 : -15}deg)`,
              transformOrigin: 'left',
              transition: 'background-color 0.3s'
            }}></div>
          </div>
        ))}
      </div>

      <div style={{
        width: '50px',
        height: '25px',
        backgroundColor: 'blue',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '125px',
        top: '62.5px'
      }}>
        AND
      </div>

      {/* Rightmost red line that changes color when output is active */}
      <div style={{
        width: '100px',
        height: '2px',
        backgroundColor: output === 1 ? 'orange' : 'red',
        position: 'absolute',
        left: '175px',
        top: '75px',
        transition: 'background-color 0.3s'
      }}></div>

      <div style={{
        width: '25px',
        height: '25px',
        backgroundColor: output === 1 ? 'yellow' : 'black',
        borderRadius: '50%',
        position: 'absolute',
        left: '275px',
        top: '62.5px',
        transition: 'background-color 0.3s'
      }}></div>
    </div>
  );
};

export default InteractiveAndGate;