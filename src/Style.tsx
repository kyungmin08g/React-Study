import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100px;
  height: 40px;
  background-color: black;
  color: ${(props) => props.color ? 'black' : 'blue'};

  &: hover {
    background-color: lightblue;
  }
`;