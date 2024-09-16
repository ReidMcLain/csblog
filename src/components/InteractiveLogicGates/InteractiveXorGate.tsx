import React, { useState } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import MobileXorGate from '../MobilelogicGates/MobileXorGate';
import DesktopXorGate from '../DesktopLogicGates/DesktopXorGate';

const InteractiveXorGate: React.FC = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      {windowWidth < 480 ? <MobileXorGate /> : <DesktopXorGate />}
    </>
  );
};

export default InteractiveXorGate;