import styled from 'styled-components';

export const Header = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${(props) => props.theme.colors.backgroundContrast};
`;
