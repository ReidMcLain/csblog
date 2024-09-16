import React, { useState } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import MobileAndGate from '../MobilelogicGates/MobileAndGate';
import DesktopAndGate from '../DesktopLogicGates/DesktopAndGate';

const InteractiveAndGate: React.FC = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      {windowWidth < 480 ? <MobileAndGate /> : <DesktopAndGate />}
    </>
  );
};

export default InteractiveAndGate;