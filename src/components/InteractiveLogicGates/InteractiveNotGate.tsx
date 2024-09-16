import React, { useState } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import MobileNotGate from '../MobilelogicGates/MobileNotGate';
import DesktopNotGate from '../DesktopLogicGates/DesktopNotGate';

const InteractiveNotGate: React.FC = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      {windowWidth < 480 ? <MobileNotGate /> : <DesktopNotGate />}
    </>
  );
};

export default InteractiveNotGate;