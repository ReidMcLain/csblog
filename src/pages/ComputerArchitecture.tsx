import React from 'react';

const ComputerArchitecture: React.FC = () => {
  console.log('Rendering ComputerArchitecture component');
  return (
    <div>
      <h1>Computer Architecture</h1>
      <p>CPU Architecture: ALU, registers, control unit.</p>
      <p>Memory Hierarchy: RAM, cache, and storage.</p>
      <p>Instruction Set Architecture (ISA): Basic instructions and machine code.</p>
      <p>Assembly Language Programming: Writing simple programs in assembly.</p>
    </div>
  );
};

export default ComputerArchitecture;