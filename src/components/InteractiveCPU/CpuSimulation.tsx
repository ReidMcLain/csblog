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
    // Step 1: Load 5 into eax
    "Fetch: 10111000 00000101 (mov eax, 5)",                
    "Decode: Opcode 10111000 (mov), Operand 00000101 (5)",  
    "Execute: 10111000 00000101 (eax = 5)",                 
  
    // Step 2: Load 3 into ebx
    "Fetch: 10111011 00000011 (mov ebx, 3)",                
    "Decode: Opcode 10111011 (mov), Operand 00000011 (3)",  
    "Execute: 10111011 00000011 (ebx = 3)",                 
  
    // Step 3: Add eax and ebx
    "Fetch: 00000001 11000011 (add eax, ebx)",              
    "Decode: Opcode 00000001 (add), Operands 11000011 (eax, ebx)", 
    "Execute: 00000001 11000011 (eax = 8)",                 
  
    // Step 4: Store result (8) back into RAM
    "Fetch: 10111000 00001000 (mov [result], eax)",         
    "Decode: Opcode 10111000 (mov), Operand 00001000 (eax)",
    "Execute: 10111000 00001000 (store 8 in RAM at [result])", 
  
    // Step 5: Additional Fetch/Decode/Execute cycles for clean-up or exit
    "Fetch: 10111000 00000000 (exit or cleanup)",           
    "Decode: Opcode 10111000 (mov), Operand 00000000 (exit/cleanup)", 
    "Execute: 10111000 00000000 (perform cleanup or exit)"  
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

  // Determine if we are in the "Fetch" phase to highlight the bus
  const isFetchStage = currentOperation.startsWith("Fetch");
  const isDecodeStage = currentOperation.startsWith("Decode");
  const isExecuteStage = currentOperation.startsWith("Execute");

  // Determine which register to highlight based on the current execute operation (eax, ebx, ecx, or edx)
  const activeRegister =
    currentOperation.includes("(eax") ? "eax" :
      currentOperation.includes("(ebx") ? "ebx" :
        currentOperation.includes("(ecx") ? "ecx" :
          currentOperation.includes("(edx") ? "edx" : "";

  // Check if we are in Step 9 (ALU performs addition)
  const isALUActive = clockCycle === 9;

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
          <div className={`register eax ${activeRegister === "eax" && isExecuteStage ? "active-execute" : ""} ${isStep15 ? "active-execute" : ""}`}>
            <h4>Register eax</h4>
            <p>{registers.eax}</p>
          </div>
          <div className={`register ebx ${activeRegister === "ebx" && isExecuteStage ? "active-execute" : ""} ${isStep15 ? "active-execute" : ""}`}>
            <h4>Register ebx</h4>
            <p>{registers.ebx}</p>
          </div>
          <div className={`register ecx ${activeRegister === "ecx" && isExecuteStage ? "active-execute" : ""}`}>
            <h4>Register ecx</h4>
            <p>{registers.ecx}</p>
          </div>
          <div className={`register edx ${activeRegister === "edx" && isExecuteStage ? "active-execute" : ""}`}>
            <h4>Register edx</h4>
            <p>{registers.edx}</p>
          </div>
        </div>

        {/* Bus Visualization */}
        <div className={`bus ${isFetchStage ? "active-bus" : ""}`}>
        </div>

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