import React, { useState } from 'react';
import logicGatesImage from '../assets/images/LogicGates.jpg'
import GeorgeBoole from '../assets/images/GeorgeBoole.jpg'
import AugustusDeMorgan from '../assets/images/AugutusDeMorgan.jpg'
import DemorganLogicGate from '../assets/images/DeMorganLogicGate.jpg'
import LudwigWittgenstein from '../assets/images/LudwigWittgenstein.jpg'
import CombinationalCircuit from '../assets/images/CombinationalCircuit.jpg'
import SequentialCircuit from '../assets/images/SequentialCircuit.jpg'
import BinaryAddition from '../assets/images/BinaryAddition.jpg'
import Adder from '../assets/images/Adder.jpg'
import Multiplexer from '../assets/images/Multiplexer.jpg'
import Demultiplexer from '../assets/images/Demultiplexer.jpg'
import EncoderAndDecoder from '../assets/images/EncoderandDecoder.jpg'
import Comparator from '../assets/images/1BitComparator.jpg'
import SRLatch from '../assets/images/SRLatch.jpg'
import Register from '../assets/images/4BitRegister.jpg'
import ButHowDoItKnow from '../assets/images/ButHowDoItKnow.jpg'
import ClaudeShannon from '../assets/images/ClaudeShannon.jpg'
import InteractiveAndGate from '../components/InteractiveLogicGates/InteractiveAndGate'
import InteractiveNotGate from '../components/InteractiveLogicGates/InteractiveNotGate'
import InteractiveNandGate from '../components/InteractiveLogicGates/InteractiveNandGate'
import InteractiveOrGate from '../components/InteractiveLogicGates/InteractiveOrGate'
import InteractiveNorGate from '../components/InteractiveLogicGates/InteractiveNorGate'
import InteractiveXorGate from '../components/InteractiveLogicGates/InteractiveXorGate'
import InteractiveXnorGate from '../components/InteractiveLogicGates/InteractiveXnorGate'

const AccordionCard = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{
            marginBottom: '20px',
            border: '2px solid grey',  // Grey border for each accordion
            borderRadius: '10px',
            color: 'black'           // Same text color as header
        }}>
            <div
                style={{
                    padding: '20px',
                    backgroundColor: 'var(--header-footer-bg-color)',  // Header-like background
                    color: 'var(--header-footer-text-color)',           // Header-like text color
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid grey'  // Grey border at the bottom of each accordion header
                }}
                onClick={() => setIsOpen(!isOpen)}>
                <h1 style={{ margin: '0', paddingBottom: '10px' }}>{title}</h1>
                <span style={{ fontSize: '1.5rem' }}>
                    {isOpen ? '▲' : '▼'}
                </span>
            </div>
            {isOpen && (
                <div style={{
                    padding: '20px',
                    backgroundColor: 'var(--accordion-body-bg-color)',  // Body background color
                    color: 'var(--accordion-body-text-color)'            // Body text color
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

const imageContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',   // Center the h1 and img horizontally
    justifyContent: 'flex-start',
    width: '30%',
    marginRight: '20px',
};

const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
};

const textStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
};

const DigitalLogicandCircuits: React.FC = () => {
    return (
        <div>
            <h1><i>What</i> is a computer? </h1>
            <p>At its core, a computer is an intricate dance of 1's and 0's, a symphony of simplicity that powers the most complex machines known to humanity. </p>
            <p>This binary world where every decision boils down to yes or no, true or false, originates from concepts developed over a century and a half ago by an English mathematician named George Boole.</p>
            {/* <p>Combinational Circuits: Circuits that do not involve storing state (memory). This includes:</p>
            <ul>
                <li>Encoders and decoders</li>
                <li>Multiplexers and demultiplexers</li>
                <li>Arithmetic circuits like adders (full and half), subtractors</li>
                <li>Comparators</li>
            </ul>
            <p>Sequential Circuits: Circuits that involve state or memory. This includes:</p>
            <ul>
                <li>Flip-flops (SR, D, T, JK)</li>
                <li>Registers (building on flip-flops)</li>
                <li>Counters</li>
                <li>Finite State Machines</li>
            </ul> */}

            <div>
                <AccordionCard title="History of Logic Gates">
                    <AccordionCard title="Boolean Algebra">
                        <div style={imageContainerStyle}>
                            <h1>George Boole (1815-1864)</h1>
                            <img src={GeorgeBoole} alt="George Boole" style={imageStyle} />
                        </div>
                        <div style={textStyle}>
                            <p>George Boole, a <strong>self-taught</strong> mathematical genius, laid the groundwork in the mid-19th century with his revolutionary work on logic and mathematics.</p>
                            <p>Boole's 1854 writings, "An Investigation of the Laws of Thought," introduced <strong>Boolean algebra</strong>—a way to express logical processes mathematically.</p>
                            <p>This system, based entirely on binary variables that could only take on the values of true or false, underpins the digital circuits that drive the computers of today.</p>
                        </div>
                    </AccordionCard>

                    <AccordionCard title="Boolean Expressions">
                        <div style={imageContainerStyle}>
                            <h1>Augustus De Morgan (1806-1871)</h1>
                            <img src={AugustusDeMorgan} alt="Augustus De Morgan" style={imageStyle} />
                        </div>
                        <div style={textStyle}>
                            <p>Augustus De Morgan, a contemporary and friend of Boole, made significant contributions to logic and mathematics.</p>
                            <p><strong>De Morgan's Laws</strong>, which describe how to negate combined logical conditions, are critical for simplifying complex Boolean expressions.</p>
                        </div>
                        <div style={{ textAlign: 'center', width: '25%' }}>
                            <img src={DemorganLogicGate} alt="De Morgan Logic Gate" style={{ width: '90%', height: 'auto', margin: '0 auto' }} />
                            <p style={{ fontSize: '0.9em', marginTop: '10px' }}><i>(Above is a logic gate that proves De Morgan's logical conditions, AND, OR, & NOT)</i></p>
                        </div>
                    </AccordionCard>

                    <AccordionCard title="Truth Table">
                        <div style={imageContainerStyle}>
                            <h1>Ludwig Wittgenstein (1889-1951)</h1>
                            <img src={LudwigWittgenstein} alt="Ludwig Wittgenstein" style={imageStyle} />
                        </div>
                        <div style={textStyle}>
                            <p>Ludwig Wittgenstein, although primarily known as a philosopher, contributed significantly to the understanding of logic with his idea of <strong>truth tables</strong>.</p>
                            <p>A truth table is a mathematical table used in logic, computer science, and mathematics to determine the truth values of logical expressions based on their input values.</p>
                            <p>Wittgenstein’s truth tables provide a methodical way to compute and visualize the truth values of Boolean expressions, which is essential for designing and testing logic circuits.</p>
                        </div>
                    </AccordionCard>

                    <AccordionCard title="Logic Gates">
                        <div style={imageContainerStyle}>
                            <h1>Claude Shannon (1916-2001)</h1>
                            <img src={ClaudeShannon} alt="Claude Shannon" style={imageStyle} />
                        </div>
                        <div style={textStyle}>
                            <p>Claude Shannon was an American mathematician, electrical engineer, and cryptographer known as "<strong>the father of information theory</strong>."</p>
                            <p>Shannon's groundbreaking work introduced the concept of using binary digits to represent all data processed by a computer, fundamentally shaping the field of digital communications and computation.</p>
                            <p>In his landmark 1937 master's thesis, Shannon effectively applied Boolean algebra to electrical circuits for the first time, demonstrating that electronic switches could be arranged to resolve any logical, numerical relationship.</p>
                            <p>This thesis laid the foundational principles for digital circuit design, influencing every aspect of modern computing and telecommunications.</p>
                        </div>
                    </AccordionCard>
                </AccordionCard>
            </div>

            <h1 id="logic-gates">1. Logic Gates</h1>
            <p>Combining Boolean operations, truth tables, and logic gates is fundamental to understanding digital circuits. Boolean operations are core functions in Boolean algebra, a branch of mathematics dealing with variables that have two possible values: true (1) and false (0).</p>
            <p>The primary Boolean operations are AND, OR, NOT, NAND, NOR, XOR, XNOR., and these operations form the basis for more complex logical expressions and calculations.</p>
            <h3>Now, let's show Truth Tables of all Boolean Operations as well as Digital Circuit examples:</h3>

            <h2>1.1 NOT Gate</h2>
            <p><strong>Operation:</strong> Outputs the inverse of the input.</p>
            <p><strong>Symbol:</strong> ¬</p>
            <table>
                <tr>
                    <th>Truth Table</th>
                </tr>
                <tr>
                    <th>Input A</th>
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
            <h2>Interactable NOT Gate</h2>
            <InteractiveNotGate />
            <h2>(click the inputs!)</h2>

            <h2>1.2 AND Gate</h2>
            <p><strong>Operation:</strong> Outputs true (1) only if all inputs are true (1).</p>
            <p><strong>Symbol:</strong> ∧</p>
            <table>
                <tr>
                    <th>Truth Table</th>
                </tr>
                <tr>
                    <th>Input A</th>
                    <th>Input B</th>
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
            <h2>Interactible AND Gate</h2>
            <h2>(click the inputs!)</h2>
            <InteractiveAndGate />

            <h2>1.3 NAND Gate</h2>
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
            <InteractiveNandGate />

            <h2>1.4 OR Gate</h2>
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
            <InteractiveOrGate />

            <h2>1.5 NOR Gate</h2>
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
            <InteractiveNorGate />

            <h2>1.6 XOR Gate</h2>
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
            <InteractiveXorGate />

            <h2>1.7 XNOR Gate</h2>
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
            <InteractiveXnorGate />

            {/* <h2>Logic Gates Overview</h2>
            <p>Logic gates are physical devices that perform Boolean operations.</p>
            <p>They are the basic building blocks of digital circuits and are used to create complex electronic circuits that perform various computational tasks.</p>
            <img src={logicGatesImage} alt="Logic Gates" style={{ width: '40%', height: 'auto' }} /> */}
            <h1 id="circuit-types">Types of Circuits</h1>
            <p>There are fundamentally two types of Circuits: Combinational and Sequential</p>
            <p>The basic building blocks of both circuit types are the seven types of logic gates—AND, OR, NOT, NAND, NOR, XOR, and XNOR.</p>
            <p>These gates combine in various ways to create circuits with different functionalities.</p>
            <h1>2. Combinational Circuits</h1>
            <p>A combinational circuit is a type of digital circuit where <strong>the output is determined solely by the current inputs</strong>, without any memory or feedback elements influencing the result.</p>
            <p>These circuits perform specific operations like arithmetic calculations or data routing by directly processing the inputs through various logic gates.</p>
            <img src={CombinationalCircuit} alt="Combinational and Sequential Circuits" style={{ width: '40%', height: 'auto' }} />
            <h1>4 Types of Combinational Circuits</h1>
            <ul>
                <li><strong>Coders and Decoders</strong></li>
                <li><strong>Multiplexers and Demultiplexers</strong></li>
                <li><strong>Arithmetic Circuits</strong></li>
                <li><strong>Comparators</strong></li>
            </ul>
            <h2>2.1 Encoders and Decoders</h2>
            <p>An <strong>Encoder</strong> is a device that converts information from one format or code to a more compact format, typically reducing the number of output lines compared to input lines, which simplifies data handling and communication.</p>
            <p>A <strong>Decoder</strong> does the inverse of an encoder, expanding a compact code into its original form or a more extensive format, thereby enabling the accurate retrieval and distribution of information across various outputs.</p>
            <img src={EncoderAndDecoder} alt="Multiplexer" style={{ width: '40%', height: 'auto' }} />
            <h2 id="multiplexer">2.2 Multiplexers and Demultiplexers (Mux and Demux)</h2>
            <p>A <strong>Multiplexer</strong> is a device that takes multiple input signals and selects one of them to be output, based on control signals, effectively channeling several data sources into a single line.</p>
            <p>A <strong>Demultiplexer</strong> performs the opposite function of a multiplexer; it takes a single input signal and distributes it to one of several outputs, depending on control signals, efficiently managing data distribution across multiple channels.</p>
            <h3>Multiplexer Example Circuit</h3>
            <img src={Multiplexer} alt="Multiplexer" style={{ width: '40%', height: 'auto' }} />
            <h3>2. Demultiplexer Example Circuit</h3>
            <img src={Demultiplexer} alt="Demultiplexer" style={{ width: '40%', height: 'auto' }} />
            <h2 id="adder">2.3 Arithmetic Circuits</h2>
            <p>An adder circuit is a type of combinational circuit used in digital electronics to perform the addition of binary numbers.</p>
            <p>It processes input bits through a configuration of logic gates to produce a sum and carry output, without relying on past input states or memory elements.</p>
            <h3>Binary Addition Table</h3>
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
            <h3>Full Adder Example</h3>
            <img src={Adder} alt="Adder" style={{ width: '40%', height: 'auto' }} />
            <ul>
                <li><strong>First XOR Gate</strong>: Computes the intermediate sum of A and B.</li>
                <li><strong>Second XOR Gate</strong>: Takes the output of the first XOR gate and Cin as inputs to produce the final Sum.</li>
                <li><strong>First AND Gate</strong>: Computes the intermediate carry by taking A and B as inputs.</li>
                <li><strong>Second AND Gate</strong>: Computes another intermediate carry by taking the output of the first XOR gate and Cin as inputs.</li>
                <li><strong>OR Gate</strong>: Combines the outputs of both AND gates to produce the final Cout, ensuring that any carry generated by either pair of inputs is passed to the next higher bit.</li>
            </ul>
            <h2>2.4 Comparators</h2>
            <p>A comparator is a digital circuit used to compare two binary numbers and determine their relative magnitudes.</p>
            <p>It outputs binary signals indicating whether the numbers are equal, or one is greater than or less than the other.</p>
            <h2>1 Bit Comparator Example</h2>
            <img src={Comparator} alt="Comparator" style={{ width: '40%', height: 'auto' }} />
            <h1>3. Sequential Circuits</h1>
            <p>A sequential circuit is a type of digital circuit that incorporates <strong>memory</strong> elements, allowing the output to depend not only on the <strong>current inputs but also on previous states.</strong></p>
            <p>This design enables the circuit to perform more complex operations and maintain a history, essential for tasks that require data storage or timed processes.</p>
            <img src={SequentialCircuit} alt="Combinational and Sequential Circuits" style={{ width: '40%', height: 'auto' }} />
            {/* <h2>3 Types of Sequential Circuits</h2>
            <ul>
                <li><strong>Flip-flops</strong></li>
                <li><strong>Registers</strong></li>
                <li><strong>Counters</strong></li>
            </ul> */}
            {/* <h1 id="memory">Memory in Circuits</h1>
            <img src={ButHowDoItKnow} alt="ButHowDoItKnow" style={{ width: '20%', height: 'auto' }} />
            <p><i>(Famous book amount how a computer stores memory humorously titled "But How Do it Know?")</i></p> */}
            <h2>3.1 Flip Flops</h2>
            <p>After discussing the role of multiplexers and demultiplexers in routing and selecting data paths, it's crucial to explore how digital systems actually retain this data.</p>
            <p>Flip-Flops, fundamental to digital memory, serve as the core building blocks for storing information in these systems.</p>
            <p>They are essential for creating <strong>memory</strong> cells, <strong>registers</strong>, and <strong>more complex memory structures</strong>, allowing digital devices to maintain state across power cycles and execute synchronized operations based on stored data.</p>
            <h2>Types of Flip-Flops</h2>
            <ul>
                <li><strong> 3.1.1 SR (Set-Reset) Flip-Flop:</strong> The SR flip-flop has two inputs, Set (S) and Reset (R), which control the state of the flip-flop. It is used to set or reset the state of the bit stored within it. However, it has an invalid state when both S and R are active simultaneously, which must be managed to avoid unpredictable behavior.</li>
                <li><strong> 3.1.2 D (Data) Flip-Flop:</strong> The D flip-flop has a single data input along with a clock input. It captures the value on the Data input at every rising or falling edge of the clock signal and outputs this value stably until the next clock edge. This type of flip-flop is particularly valued for its ability to serve as a reliable data latch and delay element in synchronous circuits.</li>
                <li><strong> 3.1.3 JK Flip-Flop:</strong> The JK flip-flop is an extension of the SR flip-flop and eliminates the undefined state by allowing both inputs to be high; when both J and K are high, the output toggles. This flip-flop is useful in applications requiring toggling features, such as counters and control circuits.</li>
                <li><strong> 3.1.4 T (Toggle) Flip-Flop:</strong> The T flip-flop is a simplified version of the JK flip-flop, having only one input (T) along with the clock. When the T input is high, the flip-flop toggles its state with each clock pulse. This makes it ideal for applications such as divide-by-two counters and toggle operations in digital systems.</li>
            </ul>
            <h2>SR Latch Example</h2>
            <img src={SRLatch} alt="S R Latch" style={{ width: '40%', height: 'auto' }} />
            <h2>3.2 Counters</h2>
            <p>A counter in digital circuits is a sequential logic device that stores and increments or decrements a value based on clock pulses.</p>
            <p>It is commonly used for counting events or measuring time intervals, utilizing flip-flops arranged in series to represent binary or decimal numbers.</p>
            <p>Counters can be classified as up-counters, down-counters, or both (up/down counters), depending on their counting direction.</p>
            <h2>3.3 Registers</h2>
            <p>Registers are small, fast storage locations within a computer's central processing unit (CPU) used to hold data temporarily during the execution of programs. They store and provide rapid access to necessary data and instructions that a CPU needs in order to carry out computational tasks efficiently.</p>
            <p>Each register typically holds a word of data (the size of which can vary depending on the architecture), and they are used for purposes such as holding variables and temporary results, managing instructions in the pipeline, controlling execution states, and interfacing with system memory and input/output paths.</p>
            <h3>4bit Register</h3>
            <img src={Register} alt="Register" style={{ width: '40%', height: 'auto' }} />
            <h1>4. Finite State Machines</h1>
            <p>A finite state machine (FSM) is a sequential logic circuit that transitions between a finite number of states based on inputs and clock signals.</p>
            <p>It consists of memory elements, typically flip-flops, which store the current state, and logic gates that determine the next state and outputs based on inputs.</p>
            <h1>Final Thoughts on Digital Circuits</h1>
            <p>These elements collectively form the backbone of digital computing, enabling the complex operations and memory functions essential for modern electronics.</p>
            <p>As we transition into the next section on Computer Architecture, we will build on this foundation to understand how these circuits integrate into larger systems that execute complex computations and manage data efficiently.</p>
        </div>
    );
};

export default DigitalLogicandCircuits;