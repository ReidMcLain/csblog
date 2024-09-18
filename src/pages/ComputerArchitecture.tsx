import React from 'react';
import CpuSimulation from '../components/InteractiveCPU/CpuSimulation';

const ComputerArchitecture: React.FC = () => {
  return (
    <div>
      <h1>1. CPU Architecture</h1>
      <p>The CPU is the core of the computer, executing instructions and processing data that drive software operations.</p>

      <h2>1.1 Control Unit</h2>
      <p>The Control Unit is the brain of the CPU, responsible for fetching instructions from memory, decoding them, and directing other CPU components to execute them. It manages the flow of data and instructions within the CPU.</p>

      <h2>1.2 Instruction Set Architecture (ISA)</h2>
      <p>The ISA defines the set of instructions (opcodes) that the CPU can execute. These instructions are fetched and decoded by the Control Unit and determine how the CPU interacts with memory and other components.</p>

      <h2>1.3 Arithmetic Logic Unit (ALU)</h2>
      <p>The ALU performs arithmetic and logical operations. Once the Control Unit has decoded the instruction, the ALU executes operations like addition, subtraction, and logical comparisons.</p>

      <h2>1.4 Registers</h2>
      <p>Registers are small, fast storage locations within the CPU that hold data and instructions temporarily while the CPU processes them. The Control Unit uses registers to store intermediate results and data needed for current operations.</p>

      <h2>1.5 Cache</h2>
      <p>Cache is a small, fast memory inside or near the CPU that stores frequently accessed data and instructions, reducing the time it takes to fetch them from RAM.</p>

      <h2>1.6 Clock</h2>
      <p>The clock sets the pace for the CPU's operations, determining how fast instructions are fetched, decoded, and executed. The Control Unit relies on the clock to time these operations.</p>

      <h2>1.7 Pipelining</h2>
      <p>Pipelining is a performance technique where multiple instructions are processed at different stages simultaneously, allowing the CPU to work more efficiently by overlapping operations.</p>

      <CpuSimulation></CpuSimulation>

      <h1>2. Memory and Data Flow</h1>
      <p>Memory stores both data and instructions required for program execution, and buses transfer that data efficiently between the CPU and memory.</p>

      <h2>2.1 RAM and Cache</h2>
      <p>RAM is the main temporary storage for active data, while cache is faster, closer memory used to reduce access time for frequently needed instructions.</p>

      <h2>2.2 Buses</h2>
      <p>Buses transfer data between the CPU, memory, and other components, ensuring that information flows efficiently through the system.</p>

      <h2>2.3 Storage</h2>
      <p>Long-term storage (hard drives, SSDs) holds data when it’s not actively being used, but it’s slower compared to RAM and cache.</p>

      <h1>3. Assembly Language</h1>
      <p>Assembly language is a low-level programming language that gives developers fine control over how software interacts with the CPU's instruction set.</p>
    </div>
  );
};

export default ComputerArchitecture;