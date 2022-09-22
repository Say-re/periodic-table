import React from 'react';

/* ****STYLES**** */
import {
  CenterTitle, ElementWrapper, ElementSectionWrapper, GeneralText, GroupColumnWrapper,
} from '../styled/periodic-table';

/* ****TYPES**** */
import { PeriodicElement } from '../types/index';

/* ****CONSTANTS**** */
const ELEMENTS: Array<PeriodicElement> = [
  {
    atomicMass: 1.0008,
    atomicNumber: '1',
    commonName: 'Hydrogen',
    symbol: 'H',
  },
];

type FieldsProps = {
  id: string,
  singleField: Array<{styleProps: {[index: string]: string}, fieldType: string, key: string}>,
  index: number,
}

const getField = (element: PeriodicElement, fieldType: string, key: string) => {
  if (!element || !key) return null;
  switch (fieldType) {
    case 'general':
      return <GeneralText>{element[key as keyof PeriodicElement]}</GeneralText>;
    case 'title':
      return <CenterTitle>{element[key as keyof PeriodicElement]}</CenterTitle>;
    default:
      return <GeneralText>{element[key as keyof PeriodicElement]}</GeneralText>;
  }
};

const TableBuilder = (fields: Array<FieldsProps | Array<FieldsProps>>) => fields.map((field, indx) => {
  if (Array.isArray(field)) {
    return <GroupColumnWrapper key={`Group-${indx}`}>{TableBuilder(field)}</GroupColumnWrapper>;
  }
  const element = ELEMENTS[field.index];

  return (
      <ElementWrapper key={`${field.id}-${indx}`}>
        {field.singleField.map((fld, index) => (
          <ElementSectionWrapper key={`${fld.key}-${indx}-${index}`} styleProps={fld.styleProps}>
            {getField(element, fld.fieldType, fld.key)}
          </ElementSectionWrapper>
        ))}
      </ElementWrapper>
  );
});

export default TableBuilder;
