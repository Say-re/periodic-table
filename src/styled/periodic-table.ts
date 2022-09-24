import styled, { css } from 'styled-components';

// Helpers
import { remConversion } from './helpers';

type ElementSectionWrapperProps = {
  styleProps?: {[index: string]: string},
}

const FontFamily = css`
  font-family: 'Roboto', sans-serif;
  color: #294350;
`;

export const CenterTitle = styled('h2')`
  ${FontFamily};
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
`;

export const ElementSectionWrapper = styled('div')<ElementSectionWrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.styleProps && props.styleProps.justifyContent ? props.styleProps.justifyContent : 'center')};
  align-items: center;
`;

export const GeneralText = styled('p')`
  ${FontFamily};
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
