import styled from 'styled-components';
import { sizeVariables, device } from '../../theme/variables';
import { ButtonStyled } from "../buttons/ButtonStyled";

export const StopwatchStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const StopwatchTitle = styled.h1`
  font-size: 5vw;
  margin-bottom: 1rem;
`;

export const StopwatchCard = styled.div`
  
`;

export const StopwatchTimer = styled.p`
  text-align: center;
  font-size: 8vw;
  margin-bottom: 2rem;
`;

export const StopwatchButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const StopwatchButton = styled(ButtonStyled)`
  font-size: ${sizeVariables.xxl.size};
  margin-right: 2rem;
  &:last-child {
    margin-right: 0;
  }
  ${device.tablet} {
    font-size: ${sizeVariables.l2.size};
  }
  ${device.mobileL} {
    font-size: ${sizeVariables.m.size};
  }
`;