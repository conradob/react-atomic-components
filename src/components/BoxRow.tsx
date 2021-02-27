import styled from 'styled-components';

export const BoxRow = styled.div`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  &:first-of-type {
    border-top-color: transparent;
  }
  &:focus {
    background-color: ${(props) => props.theme.colors.boxBackground};
  }
`;
