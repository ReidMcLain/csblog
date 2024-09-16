import React, { useState } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import MobileNandGate from '../MobilelogicGates/MobileNandGate';
import DesktopNandGate from '../DesktopLogicGates/DesktopNandGate';

const InteractiveNandGate: React.FC = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      {windowWidth < 480 ? <MobileNandGate /> : <DesktopNandGate />}
    </>
  );
};

export default InteractiveNandGate;