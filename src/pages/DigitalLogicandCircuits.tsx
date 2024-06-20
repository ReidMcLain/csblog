import React from 'react';
import logicGatesImage from '../assets/images/LogicGates.jpg';
import AndGate from '../assets/images/AndGate.jpg'
import NotGate from '../assets/images/NotGate.jpg'
import NandGate from '../assets/images/NandGate.jpg'
import OrGate from '../assets/images/OrGate.jpg'
import XorGate from '../assets/images/XorGate.jpg'
import NorGate from '../assets/images/NorGate.jpg'
import XnorGate from '../assets/images/XnorGate.jpg'
import GeorgeBoole from '../assets/images/GeorgeBoole.jpg'
import AugustusDeMorgan from '../assets/images/AugutusDeMorgan.jpg'
import DemorganLogicGate from '../assets/images/DeMorganLogicGate.jpg'
import LudwigWittgenstein from '../assets/images/LudwigWittgenstein.jpg'
import CombinationalCircuit from '../assets/images/CombinationalCircuit.jpg'
import SequentialCircuit from '../assets/images/SequentialCircuit.jpg'
import BinaryAddition from '../assets/images/BinaryAddition.jpg'
import Adder from '../assets/images/Adder.jpg'
import MultiPlexer from '../assets/images/Multiplexer.jpg'
import SRLatch from '../assets/images/SRLatch.jpg'
import ButHowDoItKnow from '../assets/images/ButHowDoItKnow.jpg'
import ClaudeShannon from '../assets/images/ClaudeShannon.jpg'

const DigitalLogicandCircuits: React.FC = () => {
    console.log('Rendering DigitalLogicandCircuits component');
    return (
        <div>
            <h1><i>What</i> is a computer? </h1>
            <p>At its core, a computer is an intricate dance of 1's and 0's, a symphony of simplicity that powers the most complex machines known to humanity. </p>
            <p>This binary world where every decision boils down to yes or no, true or false, originates from concepts developed over a century and a half ago by an English mathematician named George Boole.</p>
            <h1 id="historical-figures">George Boole (1815-1864)</h1>
            <img src={GeorgeBoole} alt="George Boole" style={{ width: '25%', height: 'auto' }} />
            <p>George Boole, a <strong>self-taught</strong> mathematical genius, laid the groundwork in the mid-19th century with his revolutionary work on logic and mathematics. </p>
            <p>Boole's 1854 writings, "An Investigation of the Laws of Thought," introduced <strong>Boolean algebra</strong>—a way to express logical processes mathematically. </p>
            <p>This system, based entirely on binary variables that could only take on the values of true or false, underpins the digital circuits that drive the computers of today.</p>
            <h1>Claude Shannon (1916-2001)</h1>
            <img src={ClaudeShannon} alt="Claude Shannon" style={{ width: '25%', height: 'auto' }} />
            <p>Claude Shannon was an American mathematician, electrical engineer, and cryptographer known as "<strong>the father of information theory</strong>." </p>
            <p>Shannon's groundbreaking work introduced the concept of using binary digits to represent all data processed by a computer, fundamentally shaping the field of digital communications and computation.</p>
            <p>In his landmark 1937 master's thesis, Shannon effectively applied Boolean algebra to electrical circuits for the first time, demonstrating that electronic switches could be arranged to resolve any logical, numerical relationship. </p>
            <p>This thesis laid the foundational principles for digital circuit design, influencing every aspect of modern computing and telecommunications.</p>
            <h1>Augustus De Morgan (1806-1871)</h1>
            <img src={AugustusDeMorgan} alt="Augustus De Morgan" style={{ width: '25%', height: 'auto' }} />
            <p>Augustus De Morgan, a contemporary and friend of Boole, who made significant contributions to logic and mathematics. </p>
            <p><strong>De Morgan's Laws</strong>, which describe how to negate combined logical conditions, are critical for simplifying complex Boolean expressions.</p>
            <img src={DemorganLogicGate} alt="De Morgan Logic Gate" style={{ width: '25%', height: 'auto' }} />
            <p><i>(Above is a logic gate that proves De Morgan's logical conditions, AND, OR, & NOT)</i></p>
            <h1>Ludwig Wittgenstein (1889-1951)</h1>
            <img src={LudwigWittgenstein} alt="Ludwig Wittgenstein" style={{ width: '25%', height: 'auto' }} />
            <p>Ludwig Wittgenstein, although primarily known as a philosopher, contributed significantly to the understanding of logic with his idea of <strong>truth tables</strong>.</p>
            <p>A truth table is a mathematical table used in logic, computer science, and mathematics to determine the truth values of logical expressions based on their input values.</p>
            <p>Wittgenstein’s truth tables provide a methodical way to compute and visualize the truth values of Boolean expressions, which is essential for designing and testing logic circuits.</p>
            <h1 id="logic-gates">Combining Boolean Operations, Logic Gates, & Truth Tables</h1>
            <p>Boolean operations are fundamental operations in Boolean algebra, which is a branch of mathematics dealing with variables that have two possible values: true (1) and false (0).</p>
            <p>The primary Boolean operations are AND, OR, NOT, NAND, NOR, XOR, XNOR., and these operations form the basis for more complex logical expressions and calculations.</p>
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
            <h1>Logic Gates Overview</h1>
            <p>Logic gates are physical devices that perform Boolean operations.</p>
            <p>They are the basic building blocks of digital circuits and are used to create complex electronic circuits that perform various computational tasks.</p>
            <img src={logicGatesImage} alt="Logic Gates" style={{ width: '40%', height: 'auto' }} />
            <h1 id="circuit-types">Types of Circuits</h1>
            <p>There are fundamentally two types of Circuits: Combinational and Sequential</p>
            <p>The basic building blocks of both circuit types are the seven types of logic gates—AND, OR, NOT, NAND, NOR, XOR, and XNOR.</p>
            <p>These gates combine in various ways to create circuits with different functionalities.</p>
            <h1>Combinational Circuit</h1>
            <p>A combinational circuit is a type of digital circuit where <strong>the output is determined solely by the current inputs</strong>, without any memory or feedback elements influencing the result.</p>
            <p>These circuits perform specific operations like arithmetic calculations or data routing by directly processing the inputs through various logic gates.</p>
            <img src={CombinationalCircuit} alt="Combinational and Sequential Circuits" style={{ width: '40%', height: 'auto' }} />
            <h1>Sequential Circuit</h1>
            <p>A sequential circuit is a type of digital circuit that incorporates <strong>memory</strong> elements, allowing the output to depend not only on the <strong>current inputs but also on previous states.</strong></p>
            <p>This design enables the circuit to perform more complex operations and maintain a history, essential for tasks that require data storage or timed processes.</p>
            <img src={SequentialCircuit} alt="Combinational and Sequential Circuits" style={{ width: '40%', height: 'auto' }} />
            <h1 id="adder">Adder Circuit</h1>
            <p>An adder circuit is a type of combinational circuit used in digital electronics to perform the addition of binary numbers.</p>
            <p>It processes input bits through a configuration of logic gates to produce a sum and carry output, without relying on past input states or memory elements.</p>
            <h2>Binary Addition Table</h2>
            <p>To perform binary addition with two bits (1 or 0) using inputs A and B, calculate the Sum as the result of A exclusive OR B, which outputs true if A and B are different,</p>
            <p>and calculate the Carry as the result of A AND B, which outputs true only if both A and B are true, indicating an overflow to the next higher bit.</p>
            <img src={BinaryAddition} alt="Binary Addition" style={{ width: '30%', height: 'auto' }} />
            <h3>Half Adder</h3>
            <p>A half adder is a simple combinational circuit that adds two single-bit binary numbers, producing two outputs: a sum and a carry.</p>
            <p><strong>Inputs</strong>: A and B <strong>Outputs</strong>: Sum and Carry</p>
            <h3>Full Adder</h3>
            <p>A full adder is a combinational circuit that adds three binary digits—two significant bits and a carry-in from a previous addition—</p>
            <p>producing a sum and a carry-out to be forwarded to the next higher bit position.</p>
            <p><strong>Inputs</strong> A, B, Carry-in or (cin) <strong>Outputs</strong>: Sum and Carry-out (cout)</p>
            <h1>Full Adder Example</h1>
            <img src={Adder} alt="Adder" style={{ width: '40%', height: 'auto' }} />
            <ul>
                <li><strong>First XOR Gate</strong>: Computes the intermediate sum of A and B.</li>
                <li><strong>Second XOR Gate</strong>: Takes the output of the first XOR gate and Cin as inputs to produce the final Sum.</li>
                <li><strong>First AND Gate</strong>: Computes the intermediate carry by taking A and B as inputs.</li>
                <li><strong>Second AND Gate</strong>: Computes another intermediate carry by taking the output of the first XOR gate and Cin as inputs.</li>
                <li><strong>OR Gate</strong>: Combines the outputs of both AND gates to produce the final Cout, ensuring that any carry generated by either pair of inputs is passed to the next higher bit.</li>
            </ul>
            <h1 id="multiplexer">Multiplexers (Mux)</h1>
            <p>Sometimes, we need to turn many inputs into a single output and this type of circuit is called a multiplexer</p>
            <p>Multiplexers do this by selecting one of several input signals based on control lines, efficiently managing multiple data streams through a single channel.</p>
            <p>Multiplexers in memory systems enhance efficiency by allowing fewer address lines to select from multiple memory addresses, enabling dynamic and scalable addressing without increasing hardware complexity.</p>
            <p>The inverse of Multiplexer is called a <strong>Demultiplexer</strong> (demux) and takes 1 input and turns into and equal amount of outputs as the original mux input.</p>
            <h3>Multiplexer Example Circuit</h3>
            <img src={MultiPlexer} alt="Multiplexer" style={{ width: '40%', height: 'auto' }} />
            <h1 id="memory">Memory in Circuits</h1>
            <img src={ButHowDoItKnow} alt="Multiplexer" style={{ width: '20%', height: 'auto' }} />
            <p><i>(Famous book amount how a computer stores memory humorously titled "But How Do it Know?")</i></p>
            <h1>Flip Flops</h1>
            <p>After discussing the role of multiplexers and demultiplexers in routing and selecting data paths, it's crucial to explore how digital systems actually retain this data.</p>
            <p>Flip-Flops, fundamental to digital memory, serve as the core building blocks for storing information in these systems.</p>
            <p>They are essential for creating <strong>memory</strong> cells, <strong>registers</strong>, and <strong>more complex memory structures</strong>, allowing digital devices to maintain state across power cycles and execute synchronized operations based on stored data.</p>
            <h2>Types of Flip-Flops</h2>
            <ul>
                <li><strong>SR (Set-Reset) Flip-Flop:</strong> The SR flip-flop has two inputs, Set (S) and Reset (R), which control the state of the flip-flop. It is used to set or reset the state of the bit stored within it. However, it has an invalid state when both S and R are active simultaneously, which must be managed to avoid unpredictable behavior.</li>
                <li><strong>D (Data) Flip-Flop:</strong> The D flip-flop has a single data input along with a clock input. It captures the value on the Data input at every rising or falling edge of the clock signal and outputs this value stably until the next clock edge. This type of flip-flop is particularly valued for its ability to serve as a reliable data latch and delay element in synchronous circuits.</li>
                <li><strong>JK Flip-Flop:</strong> The JK flip-flop is an extension of the SR flip-flop and eliminates the undefined state by allowing both inputs to be high; when both J and K are high, the output toggles. This flip-flop is useful in applications requiring toggling features, such as counters and control circuits.</li>
                <li><strong>T (Toggle) Flip-Flop:</strong> The T flip-flop is a simplified version of the JK flip-flop, having only one input (T) along with the clock. When the T input is high, the flip-flop toggles its state with each clock pulse. This makes it ideal for applications such as divide-by-two counters and toggle operations in digital systems.</li>
            </ul>
            <h2>SR Latch Example</h2>
            <img src={SRLatch} alt="S R Latch" style={{ width: '40%', height: 'auto' }} />
            <h1>Final Thoughts on Digital Circuits</h1>
            <p>These elements collectively form the backbone of digital computing, enabling the complex operations and memory functions essential for modern electronics.</p>
            <p>As we transition into the next section on Computer Architecture, we will build on this foundation to understand how these circuits integrate into larger systems that execute complex computations and manage data efficiently.</p>
        </div>
    );
};

export default DigitalLogicandCircuits;