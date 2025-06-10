import styled, { keyframes } from 'styled-components';
import type { HomeContainerProps } from '../../types/Home';

const FloatUp = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) scale(1.5);
    opacity: 0;
  }
`;

export const HomeContainer = styled.div<HomeContainerProps>`
  background: url(${(props) => props.background}) no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const StoriesButton = styled.div`
  background: var(--primaryColor);
  color: var(--secondaryColor);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 15rem;
  height: 5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 45%;
  left: 85%;

  & .heart {
    color: var(--primaryColor);
    position: absolute;
    bottom: 0;
    font-size: 1.5rem;
    animation: ${FloatUp} 2.5s ease-in-out forwards;
    opacity: 0;
    pointer-events: none;
  }
`;
