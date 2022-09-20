import React from 'react';

import Element from './periodic-table/element';

// Styles
import { GroupColumnWrapper, TableWrapper } from './styled/periodic-table';

const App = (): JSX.Element => {
  const element = {
    atomicMass: 1.0008,
    atomicNumber: '1',
    commonName: 'Hydrogen',
    symbol: 'H',
  };
  return (<>
    <TableWrapper>
    <GroupColumnWrapper>
    <Element
      atomicMass={element.atomicMass}
      atomicNumber={element.atomicNumber}
      commonName={element.commonName}
      symbol={element.symbol}
    />
    <Element
      atomicMass={element.atomicMass}
      atomicNumber={element.atomicNumber}
      commonName={element.commonName}
      symbol={element.symbol}
    />
    <Element
      atomicMass={element.atomicMass}
      atomicNumber={element.atomicNumber}
      commonName={element.commonName}
      symbol={element.symbol}
    />
    </GroupColumnWrapper>
    <GroupColumnWrapper>
    <Element
      atomicMass={element.atomicMass}
      atomicNumber={element.atomicNumber}
      commonName={element.commonName}
      symbol={element.symbol}
    />
    <Element
      atomicMass={element.atomicMass}
      atomicNumber={element.atomicNumber}
      commonName={element.commonName}
      symbol={element.symbol}
    />
    </GroupColumnWrapper>
    </TableWrapper>
    </>
  );
};

export default App;
