import styled, { keyframes } from "styled-components";

const LoaderAnimation = keyframes`
  0% { background-color: rgba(180, 180, 180, 0.405); }
  100% { background-color: rgba(255, 255, 255, 1)  }
  
`;

const FadeInAnimation = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #5271ff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  animation: ${FadeInAnimation} + 2s ease;
  animation-delay: 0s;
`;

export const LoaderBar = styled.div`
  bottom: 270px;
  position: absolute;
  width: 100%;
  max-width: 500px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Ball = styled.div<{ index: number }>`
  margin-left: 10px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  animation: ${LoaderAnimation} + 2.5s ease infinite;
  animation-delay: ${({ index }) => index / 2}s;
`;

export const Title = styled.span`
  color: white;
`;
