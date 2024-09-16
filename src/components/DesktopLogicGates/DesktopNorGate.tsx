import React, { useState, useEffect } from 'react';

const DesktopNorGate = () => {
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
    calculateOutput(newStateA, inputB);
  };

  const handleClickB = () => {
    const newStateB = inputB === 0 ? 1 : 0;
    setInputB(newStateB);
    calculateOutput(inputA, newStateB);
  };

  const calculateOutput = (a: number, b: number) => {
    const norOutput = !(a || b);  // NOR gate logic
    setOutput(norOutput ? 1 : 0);
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
        display: 'flex',
        alignItems: 'center'
      }}>
        <div onClick={handleClickA} style={{
          width: '25px',
          height: '25px',
          backgroundColor: inputA === 0 ? 'black' : 'yellow',
          borderRadius: '50%',
          cursor: 'pointer'
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

      {/* Top-left horizontal wire */}
      <div style={{
        width: '95px',  // Length of the wire
        height: '2px',
        backgroundColor: inputA === 0 ? 'red' : 'orange',
        position: 'absolute',
        left: '25px',
        top: '62.5px'  // Horizontal wire directly connected to top-left orb
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
        top: '50px',
        left: '120px',  // Top-left blue box (NOT gate)
      }}>NOT</div>

      {/* Top-left diagonal wire */}
      <div style={{
        width: '87px',
        height: '2px',
        backgroundColor: inputA === 1 ? 'red' : 'orange', // Inverted color logic
        position: 'absolute',
        left: '170px',
        top: '62.5px',
        transform: 'rotate(22deg)',
        transformOrigin: 'left',
      }}></div>

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
          cursor: 'pointer'
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

      {/* Bottom-left horizontal wire */}
      <div style={{
        width: '95px',  // Length of the wire
        height: '2px',
        backgroundColor: inputB === 0 ? 'red' : 'orange',
        position: 'absolute',
        left: '25px',
        top: '147.5px'  // Horizontal wire directly connected to bottom-left orb
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
        top: '135px',
        left: '120px',  // Bottom-left blue box (NOT gate)
      }}>NOT</div>

      {/* Bottom-left diagonal wire */}
      <div style={{
        width: '87px',
        height: '2px',
        backgroundColor: inputB === 1 ? 'red' : 'orange',  // Inverted color logic
        position: 'absolute',
        left: '170px',
        top: '147.5px',
        transform: 'rotate(-23deg)',
        transformOrigin: 'left',
      }}></div>

      {/* NOR gate (Right-most) */}
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
      }}>NOR</div>

      {/* Rightmost wire to output orb */}
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
        position: 'absolute',
        left: '395px',
        top: '92.5px',
      }}>
        <div style={{
          width: '25px',
          height: '25px',
          backgroundColor: output ? 'yellow' : 'black',
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

export default DesktopNorGate;