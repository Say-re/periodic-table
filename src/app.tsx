import React from 'react';

// Constants
import periodicTableFields from './constants/periodic-table-builder';

// Helpers
import TableBuilder from './periodic-table/table-builder';

// Styles
import { TableWrapper } from './styled/periodic-table';

const App = (): JSX.Element => (<>
    <TableWrapper>
      {TableBuilder(periodicTableFields.fields)}
    </TableWrapper>
    </>
);

export default App;
