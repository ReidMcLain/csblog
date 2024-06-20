import React from 'react';
import CharlesBabbage from '../assets/images/CharlesBabbage.jpg';
import AnalyticalEngine from '../assets/images/AnalyticalEngine.jpg';
import AdaLovelace from '../assets/images/AdaLovelace.jpg';
import AlanTuring from '../assets/images/AlanTuring.jpg'
import GraceHopper from '../assets/images/GraceHopper.jpg'

const Home: React.FC = () => {
  console.log('Rendering Home component');
  return (
    <div>
      <h1>Welcome to My Computer Science Blog</h1>
      <p>Explore topics from Digital Logic and Circuits to Full Stack Web Development.</p>
      <h1>History of Computers</h1>
      <p>A computer is an electronic device capable of performing complex calculations and tasks impossible for a human brain to accomplish in short time frames. </p>
      <p>Computers are composed of hardware (the physical, tangible parts of the computer) and software (the code that runs on the hardware). </p>
      <p>They operate on the basic principles of input (receiving data), processing (performing operations), and output (producing results).</p>
      <h1 id="charles-babbage">Charles Babbage (1791-1871)</h1>
      <img src={CharlesBabbage} alt="Charles Babbage" style={{ width: '20%', height: 'auto' }} />
      <p>Contributions: Known as <strong>the father of the computer</strong>, Babbage designed the first mechanical computer, the Difference Engine, and later the more complex Analytical Engine.</p>
      <p>Key Works: Difference Engine, Analytical Engine.</p>
      <p>Impact: His designs contained the basic elements of modern computers, such as the control unit, ALU, and memory.</p>
      <h3>Analytical Engine (The "first" computer)</h3>
      <img src={AnalyticalEngine} alt="Analytical Engine" style={{ width: '20%', height: 'auto' }} />
      <h1 id="ada-lovelace">Ada Lovelace (1815-1852)</h1>
      <img src={AdaLovelace} alt="Ada Lovelace" style={{ width: '25%', height: 'auto' }} />
      <p>Contributions: Wrote the first algorithm intended to be processed by a machine, effectively making her <strong>the first computer programmer.</strong></p>
      <p>Key Works: Notes on the Analytical Engine.</p>
      <p>Impact: Recognized the potential of computers beyond mere calculation, influencing future generations of computer scientists.</p>
      <h1 id="alan-turing">Alan Turing (1912-1954)</h1>
      <img src={AlanTuring} alt="Alan Turing" style={{ width: '25%', height: 'auto' }} />
      <p>Contributions: Considered the <strong>the father of computer science</strong>, Turing developed the concept of a theoretical computing machine (the Turing Machine) and broke the Enigma code during World War II.</p>
      <p>Key Works: Turing Machine, Turing Test.</p>
      <p>Impact: Laid the foundational concepts for algorithms and computation.</p>
      <h1 id="grace-hopper">Grace Hopper</h1>
      <img src={GraceHopper} alt="Grace Hopper" style={{ width: '25%', height: 'auto' }} />
      <p>Grace Hopper was a pioneering computer scientist and U.S. Navy rear admiral who <strong>developed the first compiler</strong> for a computer programming language, a fundamental innovation that helped shape the future of programming</p>
      <p>She also played a <strong>key role in the creation of COBOL</strong>, one of the first high-level programming languages, and is famously credited with <strong>popularizing the term "debugging"</strong> after a moth was found causing issues in a computer.</p>
    </div>
  );
};

export default Home;