import React, { useState, useEffect } from 'react';

const MobileXnorGate = () => {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [output, setOutput] = useState(0);  // XNOR output

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
    const orOutput = a || b; // OR gate
    const nandOutput = !(a && b); // NAND gate
    const xorOutput = orOutput && nandOutput; // XOR output using AND gate logic
    const xnorOutput = !xorOutput; // Invert XOR output to get XNOR
    setOutput(xnorOutput ? 1 : 0);
  };

  return (
    <div style={{
      width: '300px',  // Keeping size at 420x210
      height: '150px',
      backgroundColor: '#8c8f85',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px 0',
      position: 'relative'
    }}>
      {/* Top-left orb (Input A) with label */}
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

      {/* Input A to OR gate wire */}
      <div style={{
        width: '25px',
        height: '2px',
        backgroundColor: inputA === 1 ? 'orange' : 'red',  // Correct: Only orange when Input A is 1
        position: 'absolute',
        left: '25px',
        top: '41.5px'  // Aligned with the top-left orb
      }}></div>

      {/* OR gate */}
      <div style={{
        width: '50px',
        height: '25px',
        backgroundColor: 'blue',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '50px',
        top: '30px'  // Aligned with the top-left orb
      }}>OR</div>

      {/* OR to AND gate wire */}
      <div style={{
        width: '33px',
        height: '2px',
        backgroundColor: inputA || inputB ? 'orange' : 'red',  // Correct logic for OR gate
        position: 'absolute',
        left: '100px',
        top: '41.5px',
        transform: 'rotate(38deg)',
        transformOrigin: 'left',
      }}></div>

      {/* Input A to NAND gate wire */}
      <div style={{
        width: '60px',
        height: '2px',
        backgroundColor: inputA === 1 ? 'orange' : 'red',  // Correct: Only orange when Input A is 1
        position: 'absolute',
        left: '25px',
        top: '41.5px',
        transform: 'rotate(65deg)',
        transformOrigin: 'left',
      }}></div>

      {/* Bottom-left orb (Input B) with label */}
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

      {/* Input B to NAND gate wire */}
      <div style={{
        width: '55px',
        height: '2px',
        backgroundColor: inputB === 1 ? 'orange' : 'red',  // Correct: Only orange when Input B is 1
        position: 'absolute',
        left: '25px',
        top: '106.5px'  // Aligned with the bottom-left orb
      }}></div>

      {/* NAND gate */}
      <div style={{
        width: '50px',
        height: '25px',
        backgroundColor: 'blue',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '50px',
        top: '95px'  // Aligned with the bottom-left orb
      }}>NAND</div>

      {/* NAND to AND gate wire */}
      <div style={{
        width: '33px',
        height: '2px',
        backgroundColor: (inputA === 1 && inputB === 1) ? 'red' : 'orange',  // NAND is 1 unless both inputs are on
        position: 'absolute',
        left: '100px',
        top: '106.5px',
        transform: 'rotate(-38deg)',
        transformOrigin: 'left',
      }}></div>

      {/* Input B to OR wire */}
      <div style={{
        width: '60px',
        height: '2px',
        backgroundColor: inputB === 1 ? 'orange' : 'red',  // Correct: Only orange when Input B is 1
        position: 'absolute',
        left: '25px',
        top: '106.5px',
        transform: 'rotate(-65deg)',
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
        left: '125px',
        top: '62.5px'
      }}>AND</div>

      {/* New NOT gate after AND (for XNOR) */}
      <div style={{
        width: '50px',
        height: '25px',
        backgroundColor: 'blue',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '200px',
        top: '62.5px'
      }}>NOT</div>

      {/* AND to NOT wire */}
      <div style={{
        width: '25px',
        height: '2px',
        backgroundColor: output ? 'red' : 'orange',  // Color inverted here
        position: 'absolute',
        left: '175px',
        top: '75px'
      }}></div>

      {/* NOT to output wire */}
      <div style={{
        width: '25px',
        height: '2px',
        backgroundColor: output ? 'orange' : 'red',
        position: 'absolute',
        left: '250px',
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

export default MobileXnorGate;