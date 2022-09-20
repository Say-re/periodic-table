import styled from 'styled-components';

// Helpers
import { remConversion } from './helpers';

interface ElementSectionWrapperProps {
  justifyContent?: string,
}

export const CenterTitle = styled('h2')`
  font-size: ${remConversion(24)};
  font-weight: 700;
  margin: 0;
`;

export const ElementWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: ${remConversion(4)};
  border: 1px solid #476574;
  border-radius: ${remConversion(2)};
  width: max-content;
`;

export const ElementSectionWrapper = styled('div')<ElementSectionWrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: center;
`;

export const GeneralText = styled('p')`
  font-size: ${remConversion(8)};
  margin: 0;
`;

export const GroupColumnWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: end;
  > div {
    margin-bottom: ${remConversion(2)};
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TableWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  > div {
    margin-right: ${remConversion(2)};
    &:last-child {
      margin-right: 0;
    }
  }
`;
