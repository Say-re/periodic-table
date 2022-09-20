import React from 'react';

// STYLES
import { ElementWrapper, ElementSectionWrapper, GeneralText, CenterTitle } from '../styled/periodic-table';

// TYPES
import { PeriodicElement } from '../types/index';

const Element = (element: PeriodicElement): JSX.Element | null => {
  if (!element) return null;
  const { atomicMass, atomicNumber, commonName, symbol } = element;

  return <>
    <ElementWrapper>
      <ElementSectionWrapper>
        <GeneralText>
          {atomicNumber}
        </GeneralText>
      </ElementSectionWrapper>
      <ElementSectionWrapper>
        <CenterTitle>
          {symbol}
        </CenterTitle>
      </ElementSectionWrapper>
      <ElementSectionWrapper>
        <GeneralText>
          {commonName}
        </GeneralText>
      </ElementSectionWrapper>
      <ElementSectionWrapper>
        <GeneralText>
          {atomicMass}
        </GeneralText>
      </ElementSectionWrapper>
    </ElementWrapper>
  </>;
}
export default Element;
