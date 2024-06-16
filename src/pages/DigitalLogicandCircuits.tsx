import React from 'react';
import logicGatesImage from '../assets/images/LogicGates.jpg';

const DigitalLogicandCircuits: React.FC = () => {
  console.log('Rendering DigitalLogicandCircuits component');
  return (
    <div>
      <h1>Logic Gates</h1>
      <p>Introduction to Logic Gates: AND, OR, NOT, NAND, NOR, XOR, XNOR.</p>
      <p>Basic Digital Circuits: Combinational and sequential circuits.</p>
      <p>Building Complex Circuits: Adders, multiplexers, and memory elements.</p>
      <p>Practical Applications: Simple projects using logic gates.</p>
      <img src={logicGatesImage} alt="Logic Gates" style={{ width: '40%', height: 'auto' }} />
    </div>
  );
};

export default DigitalLogicandCircuits;