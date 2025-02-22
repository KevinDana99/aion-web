import styled from "styled-components";

export const Gradient = styled.div`
  background: linear-gradient(
    90deg,
    rgb(107, 107, 233) 0%,
    rgb(56, 56, 240) 100%
  );
  color: white;
`;
export const Waves = styled.div``;

export const MarqueeContainer = styled.div`
  transform: rotate(100deg);
  margin-bottom: 30px;
  position: relative;
  width: 800px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderContainer = styled.div`
  margin-left: 30px;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
`;
