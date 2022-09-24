import React from 'react';

/* ****STYLES**** */
import {
  CenterTitle, ElementWrapper, ElementSectionWrapper, GeneralText, GroupColumnWrapper,
} from '../styled/periodic-table';

/* ****TYPES**** */
import { PeriodicElement } from '../types/index';

/* ****CONSTANTS**** */
import ELEMENTS from '../constants/periodic-table';

export type FieldsProps = {
  id: string,
  cellFields: Array<{styleProps?: {[index: string]: string}, fieldType?: string, key: string}>,
  index: number,
}

const getField = (element: PeriodicElement, key: string, fieldType?: string) => {
  if (!element || !key) return null;
  let value = element[key as keyof PeriodicElement];
  if (typeof value === 'number') value = value.toFixed(3);

  switch (fieldType) {
    case 'title':
      return <CenterTitle>{(typeof value === 'string' || typeof value === 'number') ? value : ''}</CenterTitle>;
    default:
      return <GeneralText>{(typeof value === 'string' || typeof value === 'number') ? value : ''}</GeneralText>;
  }
};

const TableBuilder = (fields: Array<FieldsProps | Array<FieldsProps>>) => fields.map((field, indx) => {
  if (Array.isArray(field)) {
    return <GroupColumnWrapper key={`Group-${indx}`}>{TableBuilder(field)}</GroupColumnWrapper>;
  }

  const element = ELEMENTS[field.index];

  return (
      <ElementWrapper key={`${field.id}-${indx}`}>
        {field.cellFields.map((fld, index) => (
          <ElementSectionWrapper key={`${fld.key}-${indx}-${index}`} styleProps={fld.styleProps}>
            {getField(element, fld.key, fld.fieldType || '')}
          </ElementSectionWrapper>
        ))}
      </ElementWrapper>
  );
});

export default TableBuilder;
