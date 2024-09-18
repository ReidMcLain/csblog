import React, { useState } from 'react';
import './CpuSimulation.css'; // Import the CSS file for styling

const CpuSimulation: React.FC = () => {
  // State to track the current clock cycle
  const [clockCycle, setClockCycle] = useState<number>(0);

  // State to track the current instruction number
  const [instructionCounter, setInstructionCounter] = useState<number>(0);

  // Define the stages of the CPU cycle
  const stages = ['ISA', 'Fetch', 'Decode', 'Execution'];

  // Calculate the current stage based on the clock cycle
  const currentStage = stages[clockCycle % stages.length];

  // Function to handle the "Next" button click
  const handleNextClick = () => {
    // Increment the clock cycle
    setClockCycle((prevCycle) => prevCycle + 1);
    
    // If the current stage is Execution, increment the instruction counter
    if (currentStage === 'Execution') {
      setInstructionCounter((prevCounter) => prevCounter + 1);
    }
  };

  return (
    <div className="cpu-container">
      <div className="cpu-chip">
        {/* Control Unit in the center */}
        <div className="control-unit">
          <h3>Control Unit</h3>
          <p>Current Stage: {currentStage}</p>
          <p>Clock Cycle: {clockCycle}</p>
          <p>Instruction: {instructionCounter}</p>
        </div>

        {/* ALU and Register with separate positioning */}
        <div className="alu">
          <h3>ALU</h3>
          <p>Performs arithmetic and logic operations</p>
        </div>

        <div className="register">
          <h3>Register</h3>
          <p>Stores temporary data</p>
        </div>

        {/* Next button */}
        <button className="next-button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CpuSimulation;