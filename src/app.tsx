import React from 'react';

import Element from './periodic-table/element';

const App = (): JSX.Element => {
  const element = {
    atomicMass: 120938,
    atomicNumber: '12398',
    commonName: 'Hydrogen',
    symbol: 'H',
  };
  return (
    <Element
      atomicMass={element.atomicMass}
      atomicNumber={element.atomicNumber}
      commonName={element.commonName}
      symbol={element.symbol}
    />
  );
};

export default App;
