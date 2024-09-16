import React, { useState } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import MobileXnorGate from '../MobilelogicGates/MobileXnorGate';
import DesktopXnorGate from '../DesktopLogicGates/DesktopXnorGate';

const InteractiveXnorGate: React.FC = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      {windowWidth < 480 ? <MobileXnorGate /> : <DesktopXnorGate />}
    </>
  );
};

export default InteractiveXnorGate;