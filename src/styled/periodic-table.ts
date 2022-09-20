import styled from 'styled-components';

// Helpers
import { remConversion } from './helpers';

export const ElementWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: ${remConversion(7)};
  border: 1px solid #476574;
  border-radius: ${remConversion(2)};
  width: max-content;
`;

export const ElementSectionWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const GeneralText = styled('p')`
  font-size: ${remConversion(8)};
  margin: 0;
`;

export const CenterTitle = styled('h2')`
  font-size: ${remConversion(24)};
  font-weight: 700;
  margin: 0;
`;
