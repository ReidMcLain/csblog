import React, { useState } from 'react';
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
import ClaudeShannon from '../assets/images/ClaudeShannon.jpg'
import TrafficLight from '../assets/images/TrafficLight.jpg'
import VendingMachine from '../assets/images/VendingMachine.jpg'
import Elevator from '../assets/images/Elevator.jpg'
import MealyvsMooreMachine from '../assets/images/MealyvsMooreMachine.jpg'
import InteractiveAndGate from '../components/InteractiveLogicGates/InteractiveAndGate'
import InteractiveNotGate from '../components/InteractiveLogicGates/InteractiveNotGate'
import InteractiveNandGate from '../components/InteractiveLogicGates/InteractiveNandGate'
import InteractiveOrGate from '../components/InteractiveLogicGates/InteractiveOrGate'
import InteractiveNorGate from '../components/InteractiveLogicGates/InteractiveNorGate'
import InteractiveXorGate from '../components/InteractiveLogicGates/InteractiveXorGate'
import InteractiveXnorGate from '../components/InteractiveLogicGates/InteractiveXnorGate'

const AccordionCard = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        console.log(`Accordion "${title}" is now ${!isOpen ? 'open' : 'closed'}`);
    };

    // Check if the current screen width is less than 480px
    const isMobile = window.innerWidth <= 768;
    console.log(`Current screen width: ${window.innerWidth}, isMobile: ${isMobile}`);

    return (
        <div className="accordion-card" style={{
            marginBottom: '20px',
            border: '2px solid grey',
            borderRadius: '10px'
        }}>
            <div
                className="accordion-header"
                style={{
                    padding: '20px',
                    backgroundColor: 'var(--header-footer-bg-color)',
                    color: 'var(--header-footer-text-color)',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid grey'
                }}
                onClick={handleToggle}>
                <h1 style={{ margin: '0', paddingBottom: '10px' }}>{title}</h1>
                <span style={{ fontSize: '1.5rem' }}>
                    {isOpen ? '▲' : '▼'}
                </span>
            </div>
            {isOpen && (
                <div className="accordion-content" style={{
                    padding: '20px',
                    backgroundColor: 'var(--accordion-body-bg-color)',
                    color: 'var(--accordion-body-text-color)',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row', // Change flex direction based on screen size
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {children}
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

            <div id="historical-figures">
                <AccordionCard title="History of Logic Gates">
                    <AccordionCard title="Boolean Algebra">
                        <div className="accordion-content">
                            <div className="accordion-image-container">
                                <h1>George Boole (1815-1864)</h1>
                                <img src={GeorgeBoole} alt="George Boole" className="accordion-image"/>
                            </div>
                            <div className="accordion-text">
                                <p>George Boole, a <strong>self-taught</strong> mathematical genius, laid the groundwork in the mid-19th century with his revolutionary work on logic and mathematics.</p>
                                <p>Boole's 1854 writings, "An Investigation of the Laws of Thought," introduced <strong>Boolean algebra</strong>—a way to express logical processes mathematically.</p>
                                <p>This system, based entirely on binary variables that could only take on the values of true or false, underpins the digital circuits that drive the computers of today.</p>
                            </div>
                        </div>
                    </AccordionCard>

                    <AccordionCard title="Boolean Expressions">
                        <div className="accordion-content">
                            <div className="accordion-image-container">
                                <h1>Augustus De Morgan (1806-1871)</h1>
                                <img src={AugustusDeMorgan} alt="Augustus De Morgan" className="accordion-image" />
                            </div>
                            <div className="accordion-text">
                                <p>Augustus De Morgan, a contemporary and friend of Boole, made significant contributions to logic and mathematics.</p>
                                <p><strong>De Morgan's Laws</strong>, which describe how to negate combined logical conditions, are critical for simplifying complex Boolean expressions.</p>
                            </div>
                            <div className="accordion-image-container">
                                <img src={DemorganLogicGate} alt="De Morgan Logic Gate" className="accordion-image" />
                                <p style={{ fontSize: '0.9em', marginTop: '10px' }}><i>(Above is a logic gate that proves De Morgan's logical conditions, AND, OR, & NOT)</i></p>
                            </div>
                        </div>
                    </AccordionCard>

                    <AccordionCard title="Truth Tables">
                        <div className="accordion-content">
                            <div className="accordion-image-container">
                                <h1>Ludwig Wittgenstein (1889-1951)</h1>
                                <img src={LudwigWittgenstein} alt="Ludwig Wittgenstein" className="accordion-image" />
                            </div>
                            <div className="accordion-text">
                                <p>Ludwig Wittgenstein, although primarily known as a philosopher, contributed significantly to the understanding of logic with his idea of <strong>truth tables</strong>.</p>
                                <p>A truth table is a mathematical table used in logic, computer science, and mathematics to determine the truth values of logical expressions based on their input values.</p>
                                <p>Wittgenstein’s truth tables provide a methodical way to compute and visualize the truth values of Boolean expressions, which is essential for designing and testing logic circuits.</p>
                            </div>
                        </div>
                    </AccordionCard>

                    <AccordionCard title="Logic Gates">
                        <div className="accordion-content">
                            <div className="accordion-image-container">
                                <h1>Claude Shannon (1916-2001)</h1>
                                <img src={ClaudeShannon} alt="Claude Shannon" className="accordion-image" />
                            </div>
                            <div className="accordion-text">
                                <p>Claude Shannon was an American mathematician, electrical engineer, and cryptographer known as "<strong>the father of information theory</strong>."</p>
                                <p>Shannon's groundbreaking work introduced the concept of using binary digits to represent all data processed by a computer, fundamentally shaping the field of digital communications and computation.</p>
                                <p>In his landmark 1937 master's thesis, Shannon effectively applied Boolean algebra to electrical circuits for the first time, demonstrating that electronic switches could be arranged to resolve any logical, numerical relationship.</p>
                                <p>This thesis laid the foundational principles for digital circuit design, influencing every aspect of modern computing and telecommunications.</p>
                            </div>
                        </div>
                    </AccordionCard>
                </AccordionCard>

            </div>

            <h2>From Theory to Reality: The Birth of Logic Gates</h2>
            <p>The foundational work of <strong>George Boole</strong> and <strong>Augustus De Morgan</strong> in <strong>Boolean algebra</strong> set the stage for modern digital logic. <strong>Claude Shannon</strong>, often called the father of information theory, later applied these principles to electrical circuits, creating a pathway for practical computation. Their combined contributions gave rise to one of the most essential elements of modern computing: the <strong>logic gate</strong>.</p>
            <p><strong>Logic gates</strong> are the physical realization of <strong>Boolean operations</strong>, allowing us to translate logical decisions into real-world digital processes. These devices are the building blocks of all digital circuits, which power the electronic systems found in virtually every modern device—from computers and smartphones to game consoles, controllers, and household appliances. Digital circuits take inputs—such as button presses or signals—and, through logic gates, produce outputs that control actions, display information, or store data.</p>

            <h1 id="logic-gates">1. Logic Gates</h1>
            <p>A <strong>logic gate</strong> is a fundamental component in digital circuits that performs simple logical operations on one or more binary inputs to produce a single binary output. Each gate corresponds to a specific <strong>Boolean operation</strong>, such as NOT, AND, OR, or more complex variations.</p>
            <p>De Morgan’s laws, which refined Boolean algebra, paved the way for the development of the seven core <strong>logic gates</strong>—NOT, AND, NAND, OR, NOR, XOR, and XNOR—used to implement logical operations in digital circuits.</p>
            <p>By combining logic gates, we can build complex circuits capable of performing arithmetic operations, comparisons, memory storage, and control functions. Now, let’s explore how these gates function through truth tables and interactive digital circuits that demonstrate their behavior.</p>

            <h2>1.1 NOT Gate</h2>
            <p><strong>Operation:</strong> Outputs the inverse of the input.</p>
            <p><strong>Symbol:</strong> ¬</p>
            <table style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th colSpan={2}>Truth Table</th>
                    </tr>
                    <tr>
                        <th>Input</th>
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
                </thead>
            </table>


            <h2>Interactable NOT Gate</h2>
            <InteractiveNotGate />
            <p><i>(click the inputs!)</i></p>

            <h2>1.2 AND Gate</h2>
            <p><strong>Operation:</strong> Outputs true (1) only if all inputs are true (1).</p>
            <p><strong>Symbol:</strong> ∧</p>
            <table style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th colSpan={3}>Truth Table</th>
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
                </thead>
            </table>
            <h2>Interactible AND Gate</h2>
            <InteractiveAndGate />
            <p><i>(click the inputs!)</i></p>

            <h2>1.3 NAND Gate</h2>
            <p><strong>Operation:</strong> Outputs true (1) if not all inputs are true (1). It is the inverse of the AND operation.</p>
            <p><strong>Symbol:</strong> ⊼</p>
            <table style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th colSpan={3}>Truth Table</th>
                    </tr>
                    <tr>
                        <th>Input A</th>
                        <th>Input B</th>
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
                </thead>
            </table>
            <h2>Interactable NAND Gate</h2>
            <InteractiveNandGate />
            <p><i>(click the inputs!)</i></p>

            <h2>1.4 OR Gate</h2>
            <p><strong>Operation:</strong> Outputs true (1) if at least one input is true (1).</p>
            <p><strong>Symbol:</strong> ∨</p>
            <table style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th colSpan={3}>Truth Table</th>
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
                </thead>
            </table>
            <h2>Interactable OR Gate</h2>
            <InteractiveOrGate />
            <p><i>(click the inputs!)</i></p>

            <h2>1.5 NOR Gate</h2>
            <p><strong>Operation:</strong> Outputs true (1) only if all inputs are false (0). It is the inverse of the OR operation.</p>
            <p><strong>Symbol:</strong> ⊽</p>
            <table style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th colSpan={3}>Truth Table</th>
                    </tr>
                    <tr>
                        <th>Input A</th>
                        <th>Input B</th>
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
                </thead>
            </table>
            <h2> Interactable NOR Gate</h2>
            <InteractiveNorGate />
            <p><i>(click the inputs!)</i></p>

            <h2>1.6 XOR Gate</h2>
            <p><strong>Operation:</strong> Outputs true (1) if exactly one of the inputs is true (1).</p>
            <p><strong>Symbol:</strong> ⊕</p>
            <table style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th colSpan={3}>Truth Table</th>
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
                </thead>
            </table>
            <h2>Interactable XOR Gate</h2>
            <InteractiveXorGate />
            <p><i>(click the inputs!)</i></p>

            <h2>1.7 XNOR Gate</h2>
            <p><strong>Operation:</strong> Outputs true (1) if both inputs are the same. It is the inverse of the XOR operation.</p>
            <p><strong>Symbol:</strong> ⊙</p>
            <table style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th colSpan={3}>Truth Table</th>
                    </tr>
                    <tr>
                        <th>Input A</th>
                        <th>Input B</th>
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
                </thead>
            </table>
            <h2>Interactable XNOR Gate</h2>
            <InteractiveXnorGate />
            <p><i>(click the inputs!)</i></p>

            <h2>Harnessing Logic Gates: The Foundation of Combinational Circuits</h2>
            <p>With logic gates as our foundation, we can now create various types of circuits. One of the most common is the <strong>combinational circuit</strong>, which processes inputs to generate outputs directly without any memory or feedback.</p>
            <p>In a combinational circuit, the current inputs alone determine the output, making them ideal for tasks like arithmetic operations, data routing, and comparisons.</p>
            <h1 id="combinational-circuits">2. Combinational Circuits</h1>
            <p>Combinational circuits rely on the strategic arrangement of logic gates to perform specific tasks. These circuits are the backbone of essential operations in digital systems, such as addition, data selection, and encoding.</p>

            <img src={CombinationalCircuit} alt="Combinational Circuit" style={{ width: '40%', height: 'auto' }} className="responsive-image" />
            <h2>4 Types of Combinational Circuits</h2>
            <ul>
                <li><strong>Coders and Decoders</strong></li>
                <li><strong>Multiplexers and Demultiplexers</strong></li>
                <li><strong>Arithmetic Circuits</strong></li>
                <li><strong>Comparators</strong></li>
            </ul>
            <h2>2.1 Encoders and Decoders</h2>
            <p>An <strong>Encoder</strong> is a device that converts information from one format or code to a more compact format, typically reducing the number of output lines compared to input lines, which simplifies data handling and communication.</p>
            <p>A <strong>Decoder</strong> does the inverse of an encoder, expanding a compact code into its original form or a more extensive format, thereby enabling the accurate retrieval and distribution of information across various outputs.</p>
            <img src={EncoderAndDecoder} alt="Multiplexer" style={{ width: '40%', height: 'auto' }} className="responsive-image" />
            <h2>2.2 Multiplexers and Demultiplexers (Mux and Demux)</h2>
            <p>A <strong>Multiplexer</strong> is a device that takes multiple input signals and selects one of them to be output, based on control signals, effectively channeling several data sources into a single line.</p>
            <p>A <strong>Demultiplexer</strong> performs the opposite function of a multiplexer; it takes a single input signal and distributes it to one of several outputs, depending on control signals, efficiently managing data distribution across multiple channels.</p>
            <h3>2.2.1 Multiplexer Example Circuit</h3>
            <img src={Multiplexer} alt="Multiplexer" style={{ width: '40%', height: 'auto' }} className="responsive-image" />
            <h3>2.2.2 Demultiplexer Example Circuit</h3>
            <img src={Demultiplexer} alt="Demultiplexer" style={{ width: '40%', height: 'auto' }} className="responsive-image" />
            <h2>2.3 Arithmetic Circuits</h2>
            <p>An adder circuit is a type of combinational circuit used in digital electronics to perform the addition of binary numbers.</p>
            <p>It processes input bits through a configuration of logic gates to produce a sum and carry output, without relying on past input states or memory elements.</p>
            <h3>2.3.1 Binary Addition Table</h3>
            <p>To perform binary addition with two bits (1 or 0) using inputs A and B, calculate the Sum as the result of A exclusive OR B, which outputs true if A and B are different,</p>
            <p>and calculate the Carry as the result of A AND B, which outputs true only if both A and B are true, indicating an overflow to the next higher bit.</p>
            <img src={BinaryAddition} alt="Binary Addition" style={{ width: '30%', height: 'auto' }} className="responsive-image" />
            <h3>2.3.2 Half Adder</h3>
            <p>A half adder is a simple combinational circuit that adds two single-bit binary numbers, producing two outputs: a sum and a carry.</p>
            <p><strong>Inputs</strong>: A and B <strong>Outputs</strong>: Sum and Carry</p>
            <h3> 2.3.3 Full Adder</h3>
            <p>A full adder is a combinational circuit that adds three binary digits—two significant bits and a carry-in from a previous addition—</p>
            <p>producing a sum and a carry-out to be forwarded to the next higher bit position.</p>
            <p><strong>Inputs</strong> A, B, Carry-in or (cin) <strong>Outputs</strong>: Sum and Carry-out (cout)</p>
            <h3>Full Adder Example</h3>
            <img src={Adder} alt="Adder" style={{ width: '40%', height: 'auto' }} className="responsive-image" />
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
            <img src={Comparator} alt="Comparator" style={{ width: '40%', height: 'auto' }} className="responsive-image" />
            <h2>Beyond Current Inputs: The Need for Sequential Circuits</h2>
            <p>While combinational circuits process inputs purely based on their current state, modern digital systems require circuits that can remember and store past states to make more complex decisions.</p>
            <p>This leads us to <strong>sequential circuits</strong>, which incorporate memory elements like flip-flops. These circuits not only respond to present inputs but also account for previous ones, allowing for more advanced operations like counting, timing, and state tracking.</p>

            <h1 id="sequential-circuits">3. Sequential Circuits</h1>
            <p>A sequential circuit is a type of digital circuit that incorporates <strong>memory</strong> elements, allowing the output to depend not only on the <strong>current inputs but also on previous states.</strong></p>
            <p>This design enables the circuit to perform more complex operations and maintain a history, essential for tasks that require data storage or timed processes.</p>
            <img src={SequentialCircuit} alt="Combinational and Sequential Circuits" style={{ width: '40%', height: 'auto' }} className="responsive-image" />

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
            <img src={SRLatch} alt="S R Latch" style={{ width: '40%', height: 'auto' }} className="responsive-image" />
            <h2>3.2 Counters</h2>
            <p>A counter in digital circuits is a sequential logic device that stores and increments or decrements a value based on clock pulses.</p>
            <p>It is commonly used for counting events or measuring time intervals, utilizing flip-flops arranged in series to represent binary or decimal numbers.</p>
            <p>Counters can be classified as up-counters, down-counters, or both (up/down counters), depending on their counting direction.</p>
            <h2>3.3 Registers</h2>
            <p>Registers are small, fast storage locations within a computer's central processing unit (CPU) used to hold data temporarily during the execution of programs. They store and provide rapid access to necessary data and instructions that a CPU needs in order to carry out computational tasks efficiently.</p>
            <p>Each register typically holds a word of data (the size of which can vary depending on the architecture), and they are used for purposes such as holding variables and temporary results, managing instructions in the pipeline, controlling execution states, and interfacing with system memory and input/output paths.</p>
            <h3>4bit Register</h3>
            <img src={Register} alt="Register" style={{ width: '40%', height: 'auto' }} className="responsive-image" />
            <h2>From Memory to Control: Enter the Finite State Machine</h2>
            <p>With sequential circuits providing the ability to store and recall past states, we can now build systems that make decisions based on both memory and current inputs. This gives rise to the <strong>finite state machine (FSM)</strong>, a powerful combination of sequential and combinational circuits.</p>
            <p>FSMs move through a series of predefined states, transitioning based on inputs, and are essential for controlling complex processes in digital systems, from basic user interfaces to complex control systems in computing.</p>
            <h1 id="finite-state-machines">4. Finite State Machines</h1>
            <p>A finite state machine (FSM) is a sequential logic circuit that transitions between a finite number of states based on inputs and clock signals.</p>
            <p>It consists of memory elements, typically flip-flops, which store the current state, and logic gates that determine the next state and outputs based on inputs.</p>
            <h2>4.1 Mealy machine</h2>
            <p>A <strong>Mealy machine</strong> is a type of finite state machine where the outputs are determined by both the current state and the current inputs. This makes Mealy machines highly responsive, as the output can change immediately when the input changes, without waiting for a state transition.</p>
            <p>In practical applications, like vending machines and elevators, a Mealy machine adjusts its behavior based on real-time inputs, such as button presses or coin insertions, making them ideal for systems that require quick responses to input changes.</p>
            <div className="image-container">
                <img src={VendingMachine} alt="Vending Machine" style={{ width: '20%', height: 'auto' }} />
                <img src={Elevator} alt="Vending Machine" style={{ width: '50%', height: 'auto' }} />
            </div>
            <h2>4.2 Moore machine</h2>
            <p>A <strong>Moore machine</strong> is a type of finite state machine where the outputs are determined solely by the current state, independent of the current inputs. This means the output remains stable until a state transition occurs.</p>
            <p>Moore machines are often used in systems where the output needs to remain consistent during a given state, such as traffic lights, where the output (light color) changes only when the system transitions between states based on a timer or sensor input.</p>
            <img src={TrafficLight} alt="Traffic Light" style={{ width: '40%', height: 'auto' }} className="responsive-image" />
            <h2 id="mealy-vs-moore">4.3 Differences Between Mealy and Moore Machines</h2>
            <p>While both Mealy and Moore machines are types of finite state machines, they differ in how they generate outputs:</p>
            <ul>
                <li><strong>Mealy Machine:</strong> The output depends on both the current state and the current inputs, which often leads to faster responses to input changes.</li>
                <li><strong>Moore Machine:</strong> The output depends solely on the current state, making its behavior more predictable but potentially slower in responding to input changes.</li>
            </ul>
            <p>Mealy machines typically require fewer states than Moore machines because their outputs are more flexible. However, Moore machines are simpler to design and reason about, as their outputs do not change in response to inputs within a state.</p>
            <img src={MealyvsMooreMachine} alt="Mealy vs Moore Machine" style={{ width: '40%', height: 'auto' }} className="responsive-image" />
            <h1>Final Thoughts on Digital Circuits</h1>
            <p>From the simple logic gates to the more complex finite state machines, these foundational components form the core of every digital system. Their ability to process binary data and store information is what makes modern computing possible. Whether in a calculator, smartphone, or high-powered server, digital circuits enable the computations and decisions that drive technology forward.</p>
            <p>As we move into the realm of <strong>Computer Architecture</strong>, we will explore how these basic building blocks combine to create powerful systems capable of executing complex instructions and managing vast amounts of data. The digital circuits we've explored are the underpinnings of every higher-level computational function, and understanding them is key to understanding how computers work at their core.</p>

        </div>
    );
};

export default DigitalLogicandCircuits;