import React, { useState, useEffect } from 'react';

const DesktopXnorGate = () => {
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
          width: '55px',
          height: '2px',
          backgroundColor: inputA === 1 ? 'orange' : 'red',  // Only orange when Input A is 1
          position: 'absolute',
          left: '25px',
          top: '12.5px'  // Horizontal wire directly connected to top-left orb
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

        {/* Diagonal wire from Input A to NAND */}
        <div style={{
          width: '93px',
          height: '2px',
          backgroundColor: inputA === 1 ? 'orange' : 'red',
          position: 'absolute',
          left: '25px',
          top: '12.5px',
          transform: 'rotate(53deg)',  // Diagonal wire
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

        {/* Input 2 to OR gate wire */}
        <div style={{
          width: '55px',
          height: '2px',
          backgroundColor: inputB === 1 ? 'orange' : 'red',
          position: 'absolute',
          left: '25px',
          top: '12.5px'  // Horizontal wire directly connected to bottom-left orb
        }}></div>

        {/* Diagonal wire from Input B to NAND */}
        <div style={{
          width: '93px',
          height: '2px',
          backgroundColor: inputB === 1 ? 'orange' : 'red',
          position: 'absolute',
          left: '25px',
          top: '12.5px',
          transform: 'rotate(-54deg)',  // Diagonal wire
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
        left: '185px',
        top: '92.5px'
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
        left: '290px',
        top: '92.5px'
      }}>NOT</div>

      {/* OR to AND wire */}
      <div style={{
        width: '65px',
        height: '2px',
        backgroundColor: inputA || inputB ? 'orange' : 'red',  // OR gate logic
        position: 'absolute',
        left: '130px',
        top: '62.5px',
        transform: 'rotate(28deg)',
        transformOrigin: 'left',
      }}></div>

      {/* NAND to AND wire */}
      <div style={{
        width: '65px',
        height: '2px',
        backgroundColor: (inputA === 1 && inputB === 1) ? 'red' : 'orange',
        position: 'absolute',
        left: '130px',
        top: '147.5px',
        transform: 'rotate(-30deg)',
        transformOrigin: 'left',
      }}></div>

      {/* AND to NOT wire */}
      <div style={{
        width: '55px',
        height: '2px',
        backgroundColor: output ? 'red' : 'orange',  // Color inverted here
        position: 'absolute',
        left: '235px',
        top: '105px'
      }}></div>

      {/* NOT to output wire */}
      <div style={{
        width: '55px',
        height: '2px',
        backgroundColor: output ? 'orange' : 'red',  // Opposite color from the previous wire
        position: 'absolute',
        left: '340px',
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

      {/* Label for Output */}
      <div style={{
        position: 'relative',
        top: '-25px',
        right: '5px',
        fontSize: '14px',
        whiteSpace: 'nowrap',
        left: '185px'
      }}>
        Output
      </div>

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
        left: '80px',
        top: '50px'
      }}>OR</div>

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
        left: '80px',
        top: '135px'
      }}>NAND</div>
    </div>
  );
};

export default DesktopXnorGate;