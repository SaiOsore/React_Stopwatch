import styled from 'styled-components';
import { colorVariables, fontVariables, device } from '../../theme/variables';

export const ButtonStyled = styled.button`
  background: none;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.color ||  colorVariables.dark)};
  font-family: ${(props) => (props.fontFamily ||  fontVariables.primary)};
  transition: color .3s, border-color .3s;
  padding: 14px;
  border: 2px solid ${colorVariables.dark};
  &:hover, &:focus {
    color: ${(props) => (props.hoverColor ||  colorVariables.secondary)};
    border-color: ${colorVariables.secondary};
  }
  &:disabled {
    border: 2px solid ${colorVariables.disabledDark};
    background-color: ${colorVariables.disabled};
    color: ${colorVariables.light};
  }
  ${device.tablet} {
    padding: 5px;
  }
`;

export default ButtonStyled;