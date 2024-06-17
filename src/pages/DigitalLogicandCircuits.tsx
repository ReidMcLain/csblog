import React from 'react';
import logicGatesImage from '../assets/images/LogicGates.jpg';
import AndGate from '../assets/images/AndGate.jpg'
import NotGate from '../assets/images/NotGate.jpg'
import NandGate from '../assets/images/NandGate.jpg'
import OrGate from '../assets/images/OrGate.jpg'
import XorGate from '../assets/images/XorGate.jpg'
import NorGate from '../assets/images/NorGate.jpg'
import XnorGate from '../assets/images/XnorGate.jpg'

const DigitalLogicandCircuits: React.FC = () => {
  console.log('Rendering DigitalLogicandCircuits component');
  return (
    <div>
      <p>Introduction to Logic Gates: AND, OR, NOT, NAND, NOR, XOR, XNOR.</p>
      <p>Basic Digital Circuits: Combinational and sequential circuits.</p>
      <p>Building Complex Circuits: Adders, multiplexers, and memory elements.</p>
      <p>Practical Applications: Simple projects using logic gates.</p>
      <h1>Boolean Operations</h1>
      <p>Boolean operations are fundamental operations in Boolean algebra, which is a branch of mathematics dealing with variables that have two possible values: true (1) and false (0).</p>
      <p>The primary Boolean operations are AND, OR, NOT, NAND, NOR, XOR, XNOR., and these operations form the basis for more complex logical expressions and calculations.</p>
      <h2>Truth Tables (of Boolean Operations)</h2>
      <p>A truth table is a mathematical table used in logic, computer science, and mathematics to determine the truth values of logical expressions based on their input values.</p>
      <p>It systematically lists all possible combinations of inputs and their corresponding outputs for a given logical operation or circuit.</p>
      <h3>Now, let's show Truth Tables of all Boolean Operations as well as Digital Circuit examples:</h3>
      <h2>1. AND Gate Truth Table</h2>
    <p><strong>Operation:</strong> Outputs true (1) only if all inputs are true (1).</p>
    <p><strong>Symbol:</strong> ∧</p>
    <table>
        <tr>
            <th>A</th>
            <th>B</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
    </table>
    <h2>AND Gate in a Digital Circuit</h2>
    <img src={AndGate} alt="And Gate" style={{ width: '40%', height: 'auto' }} />


    <h2>2. OR Gate Truth Table</h2>
    <p><strong>Operation:</strong> Outputs true (1) if at least one input is true (1).</p>
    <p><strong>Symbol:</strong> ∨</p>
    <table>
        <tr>
            <th>A</th>
            <th>B</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
    </table>
    <h2>OR Gate in a Digital Circuit</h2>
    <img src={OrGate} alt="Or Gate" style={{ width: '40%', height: 'auto' }} />

    <h2>3. NOT Gate Truth Table</h2>
    <p><strong>Operation:</strong> Outputs the inverse of the input.</p>
    <p><strong>Symbol:</strong> ¬</p>
    <table>
        <tr>
            <th>A</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>0</td>
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
        </tr>
    </table>
    <h2>NOT Gate in a Digital Circuit</h2>
    <img src={NotGate} alt="Not Gate" style={{ width: '40%', height: 'auto' }} />

    <h2>4. NAND Gate Truth Table</h2>
    <p><strong>Operation:</strong> Outputs true (1) if not all inputs are true (1). It is the inverse of the AND operation.</p>
    <p><strong>Symbol:</strong> ⊼</p>
    <table>
        <tr>
            <th>A</th>
            <th>B</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>0</td>
            <td>0</td>
            <td>1</td>
        </tr>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>0</td>
        </tr>
    </table>
    <h2>NAND Gate in a Digital Circuit</h2>
    <img src={NandGate} alt="Nand Gate" style={{ width: '40%', height: 'auto' }} />

    <h2>5. NOR Gate Table</h2>
    <p><strong>Operation:</strong> Outputs true (1) only if all inputs are false (0). It is the inverse of the OR operation.</p>
    <p><strong>Symbol:</strong> ⊽</p>
    <table>
        <tr>
            <th>A</th>
            <th>B</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>0</td>
            <td>0</td>
            <td>1</td>
        </tr>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>0</td>
        </tr>
    </table>
    <h2>NOR Gate in a Digital Circuit</h2>
    <img src={NorGate} alt="Nor Gate" style={{ width: '40%', height: 'auto' }} />

    <h2>6. XOR Gate Table</h2>
    <p><strong>Operation:</strong> Outputs true (1) if exactly one of the inputs is true (1).</p>
    <p><strong>Symbol:</strong> ⊕</p>
    <table>
        <tr>
            <th>A</th>
            <th>B</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>0</td>
        </tr>
    </table>
    <h2>XOR Gate in a Digital Circuit</h2>
    <img src={XorGate} alt="Xor Gate" style={{ width: '40%', height: 'auto' }} />

    <h2>7. XNOR Gate Table</h2>
    <p><strong>Operation:</strong> Outputs true (1) if both inputs are the same. It is the inverse of the XOR operation.</p>
    <p><strong>Symbol:</strong> ⊙</p>
    <table>
        <tr>
            <th>A</th>
            <th>B</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>0</td>
            <td>0</td>
            <td>1</td>
        </tr>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        </table>
        <h2>XNOR Gate in a Digital Circuit</h2>
    <img src={XnorGate} alt="Xnor Gate" style={{ width: '40%', height: 'auto' }} />
        <h1>Logic Gates</h1>
        <p>Logic gates are physical devices that perform Boolean operations.</p>
        <p>They are the basic building blocks of digital circuits and are used to create complex electronic circuits that perform various computational tasks.</p>
        <img src={logicGatesImage} alt="Logic Gates" style={{ width: '40%', height: 'auto' }} />
    </div>
  );
};

export default DigitalLogicandCircuits;