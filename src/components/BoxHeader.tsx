import styled from 'styled-components';

export const BoxHeader = styled.div`
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: flex !important;
  padding: 16px;
  margin: -1px -1px 0;
  border: ${(props) => props.theme.colors.borderMain};
  background-color: ${(props) => props.theme.colors.boxBackground};
`;
