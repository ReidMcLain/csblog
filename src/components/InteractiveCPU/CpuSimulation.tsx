import React, { useState } from 'react';
import './CpuSimulation.css';

const CpuSimulation: React.FC = () => {
  // State to track the current clock cycle
  const [clockCycle, setClockCycle] = useState<number>(1);

  // State to track register values
  const [registers, setRegisters] = useState({
    eax: '00000000', // Default value in binary
    ebx: '00000000', // Default value in binary
    ecx: '00000000', // Default value in binary
    edx: '00000000', // Default value in binary
  });

  // Define the stages of the CPU cycle
  const stages = [
    // Step 1: Load 5 into EAX
    "Clock Cycle 1: Fetch",
    "PC contains address of instruction (mov eax, 5)",
    "MAR holds the memory address from PC",
    "MDR loads instruction (10111000 00000101) from RAM",
    "IR stores fetched instruction 10111000 00000101",

    "Clock Cycle 2: Decode",
    "Instruction is moved to Decoder",
    "Decoder identifies Opcode (10111000 - mov), Operand (00000101 - 5)",
    "Operand Register holds 00000101",

    "Clock Cycle 3: Execute",
    "Control Unit signals mov to EAX",
    "EAX = 5",

    // Step 2: Load 3 into EBX
    "Clock Cycle 4: Fetch",
    "PC contains next address (mov ebx, 3)",
    "MAR stores address from PC",
    "MDR loads instruction (10111011 00000011) from RAM",
    "IR holds fetched instruction 10111011 00000011",

    "Clock Cycle 5: Decode",
    "Instruction is moved to Decoder",
    "Decoder identifies Opcode (10111011 - mov), Operand (00000011 - 3)",
    "Operand Register holds 00000011",

    "Clock Cycle 6: Execute",
    "Control Unit signals mov to EBX",
    "EBX = 3",

    // Step 3: Add EAX and EBX
    "Clock Cycle 7: Fetch",
    "PC contains address of the add instruction",
    "MAR stores address from PC",
    "MDR loads instruction (00000001 11000011 - add eax, ebx) from RAM",
    "IR holds fetched instruction 00000001 11000011",

    "Clock Cycle 8: Decode",
    "Decoder identifies Opcode (00000001 - add), Operands (EAX and EBX)",

    "Clock Cycle 9: Execute",
    "ALU is signaled to perform addition: EAX + EBX",
    "ALU performs the addition (5 + 3 = 8)",
    "Result stored in EAX",
    "EAX = 8",

    // Step 4: Store result (8) back into RAM
    "Clock Cycle 10: Fetch",
    "PC contains address of instruction (mov [result], eax)",
    "MAR stores address from PC",
    "MDR loads instruction (10111000 00001000) from RAM",
    "IR holds fetched instruction 10111000 00001000",

    "Clock Cycle 11: Decode",
    "Decoder identifies Opcode (10111000 - mov), Operand (EAX)",
    "Operand Register holds address to store the result",

    "Clock Cycle 12: Execute",
    "Control Unit signals data transfer to RAM",
    "MAR stores memory address to write result",
    "MDR transfers EAX (8) to memory at the location stored in MAR",

    // Step 5: Additional cleanup
    "Clock Cycle 13: Fetch",
    "PC contains address of cleanup instruction (mov 0)",
    "MAR stores address from PC",
    "MDR loads instruction (10111000 00000000) from RAM",
    "IR holds fetched instruction 10111000 00000000",

    "Clock Cycle 14: Decode",
    "Decoder identifies Opcode (10111000 - mov), Operand (00000000)",

    "Clock Cycle 15: Execute",
    "Control Unit performs cleanup or exit"
  ];

  // Calculate the current operation based on the clock cycle
  const currentOperation = stages[(clockCycle - 1) % stages.length];

  // Function to handle the "Next" button click
  const handleNextClick = () => {
    setClockCycle((prevCycle) => prevCycle + 1);

    // Update register values during the execute phase
    if (currentOperation.includes("eax = 5")) {
      setRegisters((prev) => ({ ...prev, eax: "00000101" }));
    }
    if (currentOperation.includes("ebx = 3")) {
      setRegisters((prev) => ({ ...prev, ebx: "00000011" }));
    }
    if (currentOperation.includes("eax = 8")) {
      setRegisters((prev) => ({ ...prev, eax: "00001000" }));
    }

    // Light up eax and ebx on step 15 and reset them on the next step
    if (clockCycle === 15) {
      setRegisters({ eax: '00000000', ebx: '00000000', ecx: registers.ecx, edx: registers.edx });
    }
  };

  // **Fetch** phase lights up the `cu-bus`
  const isFetchStage = currentOperation.startsWith("Fetch");

  // **Decode** phase lights up the control unit
  const isDecodeStage = currentOperation.startsWith("Decode");

  // **ALU** operation during Step 9 lights up the `alu-bus`
  const isALUActive = clockCycle === 9;

  // Highlight eax and ebx during their respective execute phases (Step 3 and Step 6)
  const isEAXExecuteStage = currentOperation.includes("eax = 5") || currentOperation.includes("eax = 8");
  const isEBXExecuteStage = currentOperation.includes("ebx = 3");

  // Check if we're in step 15 to highlight eax and ebx before resetting
  const isStep15 = clockCycle === 15;

  return (
    <div className="cpu-container">
      {/* Status Display */}
      <div className="cpu-info">
        <p>{currentOperation}</p>
      </div>

      <div className="cpu-chip">
        {/* Control Unit in the center */}
        <div className={`control-unit ${isDecodeStage ? "active-decode" : ""}`}>
          <h3>Control Unit</h3>
        </div>

        {/* ALU */}
        <div className={`alu ${isALUActive ? "active-alu" : ""}`}>
          <h3>ALU</h3>
        </div>

        {/* Registers - four smaller boxes for eax, ebx, ecx, edx */}
        <div className="registers">
          <div className={`register eax ${isEAXExecuteStage ? "active-execute" : ""} ${isStep15 ? "active-execute" : ""}`}>
            <h4>Register eax</h4>
            <p>{registers.eax}</p>
          </div>
          <div className={`register ebx ${isEBXExecuteStage ? "active-execute" : ""} ${isStep15 ? "active-execute" : ""}`}>
            <h4>Register ebx</h4>
            <p>{registers.ebx}</p>
          </div>
          <div className={`register ecx`}>
            <h4>Register ecx</h4>
            <p>{registers.ecx}</p>
          </div>
          <div className={`register edx`}>
            <h4>Register edx</h4>
            <p>{registers.edx}</p>
          </div>
          <div className="register pc">
            <h4>PC</h4>
            {/* <p>{registers.pc}</p> */}
          </div>
          <div className="register mar">
            <h4>MAR</h4>
            {/* <p>{registers.mar}</p> */}
          </div>
          <div className="register mdr">
            <h4>MDR</h4>
            {/* <p>{registers.mdr}</p> */}
          </div>
          <div className="register ir">
            <h4>IR</h4>
            {/* <p>{registers.ir}</p> */}
          </div>
          <div className="register decoder">
            <h4>Decoder</h4>
            {/* <p>{registers.decoder}</p> */}
          </div>
          <div className="register operand">
            <h4>Operand</h4>
            {/* <p>{registers.operand}</p> */}
          </div>
        </div>

        {/* Bus Visualization */}
        <div className={`cu-bus ${isFetchStage ? "active-bus" : ""}`}></div>
        <div className={`alu-bus ${isALUActive ? "active-bus" : ""}`}></div>
        <div className={`eax-bus ${isEAXExecuteStage ? "active-bus" : ""}`}></div>
        <div className={`ebx-bus ${isEBXExecuteStage ? "active-bus" : ""}`}></div>
        <div className={`ecx-bus`}></div>
        <div className={`edx-bus`}></div>

        {/* Clock Cycle moved above the Next button */}
        <p className="clock-cycle">Clock Cycle: {clockCycle}</p>

        {/* Next button */}
        <button className="next-button" onClick={handleNextClick}>
          Next
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