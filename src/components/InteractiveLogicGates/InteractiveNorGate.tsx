import React, { useState } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import MobileNorGate from '../MobilelogicGates/MobileNorGate';
import DesktopNorGate from '../DesktopLogicGates/DesktopNorGate';

const InteractiveNorGate: React.FC = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      {windowWidth < 480 ? <MobileNorGate /> : <DesktopNorGate />}
    </>
  );
};

export default InteractiveNorGate;