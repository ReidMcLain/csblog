import React, { useState } from 'react';
import './CpuSimulation.css';

const CpuSimulation: React.FC = () => {
  // Start at clockCycle 2 to skip the first invisible "Clock Cycle"
  const [clockCycle, setClockCycle] = useState<number>(2);
  const [displayCycle, setDisplayCycle] = useState<number>(1); // Separate display for clock cycle

  // State to track register values, including PC1 and PC2 for high and low byte of the program counter
  const [registers, setRegisters] = useState({
    eax: '00000000',
    ebx: '00000000',
    ecx: '00000000',
    edx: '00000000',
    pc1: '00000000', // High byte of the PC
    pc2: '00000000', // Low byte of the PC
    mar1: '00000000',
    mar2: '00000000',
    mdr1: '00000000',
    mdr2: '00000000',
    ir1: '00000000',
    ir2: '00000000',
    operand: '00000000'
  });

  // Define the stages of the CPU cycle
  const stages = [
    "Clock Cycle",  // Clock Cycle placeholder
    "PC contains address of instruction (mov eax, 5)",
    "MAR stores the memory address from PC",
    "MDR loads instruction (10111000 00000101) from RAM",
    "IR holds fetched instruction 10111000 00000101",

    "Clock Cycle",  // Clock Cycle placeholder
    "Decoder identifies Opcode (10111000 - mov), Operand (00000101 - 5)",
    "Operand Register holds 00000101",

    "Clock Cycle",  // Clock Cycle placeholder
    "Control Unit signals mov to EAX",
    "EAX = 5",

    // Step 2: Load 3 into EBX
    "Clock Cycle",  // Clock Cycle placeholder
    "PC contains next address (mov ebx, 3)",
    "MAR stores address from PC",
    "MDR loads instruction (10111011 00000011) from RAM",
    "IR holds fetched instruction 10111011 00000011",

    "Clock Cycle",  // Clock Cycle placeholder
    "Decoder identifies Opcode (10111011 - mov), Operand (00000011 - 3)",
    "Operand Register holds 00000011",

    "Clock Cycle",  // Clock Cycle placeholder
    "Control Unit signals mov to EBX",
    "EBX = 3",

    // Step 3: Add EAX and EBX
    "Clock Cycle",  // Clock Cycle placeholder
    "PC contains address of the add instruction",
    "MAR stores address from PC",
    "MDR loads instruction (00000001 11000011 - add eax, ebx) from RAM",
    "IR holds fetched instruction 00000001 11000011",

    "Clock Cycle",  // Clock Cycle placeholder
    "Decoder identifies Opcode (00000001 - add), Operands (EAX and EBX)",

    "Clock Cycle",  // Clock Cycle placeholder
    "ALU is signaled to perform addition: EAX + EBX",
    "ALU performs the addition (5 + 3 = 8)",
    "Result stored in EAX",
    "EAX = 8",

    // Step 4: Store result (8) back into RAM
    "Clock Cycle",  // Clock Cycle placeholder
    "PC contains address of instruction (mov [result], eax)",
    "MAR stores address from PC",
    "MDR loads instruction (10111000 00001000) from RAM",
    "IR holds fetched instruction 10111000 00001000",

    "Clock Cycle",  // Clock Cycle placeholder
    "Decoder identifies Opcode (10111000 - mov), Operand (EAX)",
    "Operand Register holds address to store the result",

    "Clock Cycle",  // Clock Cycle placeholder
    "Control Unit signals data transfer to RAM",
    "MAR stores memory address to write result",
    "MDR transfers EAX (8) to memory at the location stored in MAR",

    // Step 5: Additional cleanup
    "Clock Cycle",  // Clock Cycle placeholder
    "PC contains address of cleanup instruction (mov 0)",
    "MAR stores address from PC",
    "MDR loads instruction (10111000 00000000) from RAM",
    "IR holds fetched instruction 10111000 00000000",

    "Clock Cycle",  // Clock Cycle placeholder
    "Decoder identifies Opcode (10111000 - mov), Operand (00000000)",

    "Clock Cycle",  // Clock Cycle placeholder
    "Control Unit performs cleanup or exit"
  ];

  // Function to increment the Program Counter (PC)
  const incrementPC = () => {
    setRegisters((prev) => {
      const currentPC2 = parseInt(prev.pc2, 2);
      const currentPC1 = parseInt(prev.pc1, 2);

      let newPC2 = currentPC2 + 1; // Increment low byte

      if (newPC2 > 255) { // Check if low byte overflows
        newPC2 = 0; // Reset low byte
        const newPC1 = currentPC1 + 1; // Increment high byte
        return {
          ...prev,
          pc1: newPC1.toString(2).padStart(8, '0'), // Convert to binary and pad
          pc2: newPC2.toString(2).padStart(8, '0')  // Convert to binary and pad
        };
      }

      return {
        ...prev,
        pc2: newPC2.toString(2).padStart(8, '0') // Convert to binary and pad
      };
    });
  };

  const decrementPC = () => {
    setRegisters((prev) => {
      const currentPC2 = parseInt(prev.pc2, 2);
      const currentPC1 = parseInt(prev.pc1, 2);

      let newPC2 = currentPC2 - 1;

      if (newPC2 < 0) { // Handle underflow of low byte
        newPC2 = 255; // Reset low byte to max
        const newPC1 = currentPC1 - 1; // Decrement high byte
        return {
          ...prev,
          pc1: newPC1.toString(2).padStart(8, '0'),
          pc2: newPC2.toString(2).padStart(8, '0')
        };
      }

      return {
        ...prev,
        pc2: newPC2.toString(2).padStart(8, '0')
      };
    });
  };

  // Calculate the current operation based on the clock cycle
  const currentOperation = stages[clockCycle - 1] || stages[stages.length - 1];

  // Function to move to the next stage, skipping "Clock Cycle" entries
  const moveToNextStage = () => {
    let nextCycle = clockCycle + 1;
    while (nextCycle <= stages.length && stages[nextCycle - 1] === "Clock Cycle") {
      setDisplayCycle((prev) => prev + 1); // Increment the display clock
      nextCycle++;
    }
    setClockCycle(nextCycle <= stages.length ? nextCycle : clockCycle); // Prevent overflow

    // Increment PC when PC is active (fetching new instructions)
    if (nextCycle === 2 || isPCActive) { // Check if PC should increment
      incrementPC();
    }
  };
  // Function to move to the previous stage, skipping "Clock Cycle" entries
  const moveToPreviousStage = () => {
    let prevCycle = clockCycle - 1;
    while (prevCycle > 0 && stages[prevCycle - 1] === "Clock Cycle") {
      setDisplayCycle((prev) => (prev > 1 ? prev - 1 : 1)); // Decrement the display clock
      prevCycle--;
    }
    setClockCycle(prevCycle > 0 ? prevCycle : clockCycle); // Prevent underflow

    // Decrement PC when PC is active (going back through fetch stage)
    if (prevCycle === 2 || isPCActive) {
      decrementPC();
    }
  };

  // Function to handle the "Next" button click
  const handleNextClick = () => {
    moveToNextStage();
  };

  // Function to handle the "Back" button click
  const handleBackClick = () => {
    moveToPreviousStage();
  };

  // Skip displaying "Clock Cycle" entries for the current operation
  const visibleOperation = currentOperation !== "Clock Cycle" ? currentOperation : "";

  // **Fetch** phase lights up the `cu-bus`
  const isFetchStage = currentOperation?.startsWith("Fetch");

  // **Decode** phase lights up the control unit
  const isDecodeStage = currentOperation?.startsWith("Decode");

  // **ALU** operation during Step 9 lights up the `alu-bus`
  const isPCActive = currentOperation?.includes("PC contains");
  const isMARActive = currentOperation?.includes("MAR stores");
  const isMDRActive = currentOperation?.includes("MDR loads");
  const isIRActive = currentOperation?.includes("IR holds");
  const isDECODERActive = currentOperation?.includes("Decoder identifies");
  const isOPERANDActive = currentOperation?.includes("Operand Register holds");
  const isALUActive = clockCycle === 23;

  // Highlight eax and ebx during their respective execute phases
  const isEAXExecuteStage = currentOperation?.includes("EAX = 5");
  const isEBXExecuteStage = currentOperation?.includes("EBX = 3");

  return (
    <div className="cpu-container">
      {/* Status Display */}
      <div className="cpu-info">
        <p>{visibleOperation}</p>
      </div>

      <div className="cpu-chip">
        {/* Control Unit in the center */}
        <div className={`control-unit`}>
          <h3>Control Unit</h3>
        </div>

        {/* ALU */}
        <div className={`alu ${isALUActive ? "active-alu" : ""}`}>
          <h3>ALU</h3>
        </div>

        {/* Registers */}
        <div className="registers">
          <div className={`register eax ${isEAXExecuteStage ? "active-execute" : ""}`}>
            <h4>Register eax</h4>
            <p>{registers.eax}</p>
          </div>
          <div className={`register ebx ${isEBXExecuteStage ? "active-execute" : ""}`}>
            <h4>Register ebx</h4>
            <p>{registers.ebx}</p>
          </div>
          <div className="register ecx">
            <h4>Register ecx</h4>
            <p>{registers.ecx}</p>
          </div>
          <div className="register edx">
            <h4>Register edx</h4>
            <p>{registers.edx}</p>
          </div>
          <div className={`register pc ${isPCActive ? "active-execute" : ""}`}>
            <h4>PC</h4>
            <p>{registers.pc1}</p>
            <p>{registers.pc2}</p>
          </div>

          {/* Display MAR (Memory Address Register) */}
          <div className={`register mar ${isMARActive ? "active-execute" : ""}`}>
            <h4>MAR</h4>
            <p>{registers.mar1}</p>
            <p>{registers.mar2}</p>
          </div>

          {/* Display MDR (Memory Data Register) */}
          <div className={`register mdr ${isMDRActive ? "active-execute" : ""}`}>
            <h4>MDR</h4>
            <p>{registers.mdr1}</p>
            <p>{registers.mdr2}</p>
          </div>

          {/* Display IR (Instruction Register) */}
          <div className={`register ir ${isIRActive ? "active-execute" : ""}`}>
            <h4>IR</h4>
            <p>{registers.ir1}</p>
            <p>{registers.ir2}</p>
          </div>

          <div className={`register decoder ${isDECODERActive ? "active-execute" : ""}`}>
            <h4>Decoder</h4>
          </div>
          <div className={`register operand ${isOPERANDActive ? "active-execute" : ""}`}>
            <h4>Operand</h4>
            <p>{registers.operand}</p>
          </div>
        </div>

        {/* Bus Visualization */}
        <div className={`cu-bus ${isFetchStage ? "active-bus" : ""}`}></div>
        <div className={`alu-bus ${isALUActive ? "active-bus" : ""}`}></div>
        <div className={`eax-bus ${isEAXExecuteStage ? "active-bus" : ""}`}></div>
        <div className={`ebx-bus ${isEBXExecuteStage ? "active-bus" : ""}`}></div>
        <div className={`ecx-bus`}></div>
        <div className={`edx-bus`}></div>
        <div className={`pc-bus ${isPCActive ? "active-bus" : ""}`}></div>
        <div className={`ir-bus ${isIRActive ? "active-bus" : ""}`}></div>
        <div className={`mar-bus ${isMARActive ? "active-bus" : ""}`}></div>
        <div className={`decoder-bus ${isDECODERActive ? "active-bus" : ""}`}></div>
        <div className={`mdr-bus ${isMDRActive ? "active-bus" : ""}`}></div>
        <div className={`operand-bus ${isOPERANDActive ? "active-bus" : ""}`}></div>

        {/* Clock Cycle Display */}
        <p className="clock-cycle">Clock Cycle: {displayCycle}</p>

        {/* Buttons */}
        <button className="next-button" onClick={handleNextClick}>
          Next
        </button>
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>

        {/* Pins at the bottom of the CPU chip */}
        <div className="pins-container">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="pin"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CpuSimulation;