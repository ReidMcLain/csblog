import React, { useState } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import MobileOrGate from '../MobilelogicGates/MobileOrGate';
import DesktopOrGate from '../DesktopLogicGates/DesktopOrGate';

const InteractiveOrGate: React.FC = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      {windowWidth < 480 ? <MobileOrGate /> : <DesktopOrGate />}
    </>
  );
};

export default InteractiveOrGate;