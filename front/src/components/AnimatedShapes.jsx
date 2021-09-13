import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background: #c91c3b;
  opacity: 0.7;
  position: absolute;
  z-index: -1;
  left: -60px;
  top: -60px;
  animation: square 25s linear infinite alternate;

  @keyframes square {
    0%,
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Circle = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: circle 25s linear infinite alternate;

  @keyframes circle {
    0%,
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Rectangle = styled.div`
  height: 100px;
  width: 200px;
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
  animation: rectangle 25s linear infinite alternate;

  @keyframes rectangle {
    0%,
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-100vw, -100vh);
    }
  }
`;

export default function AnimatedShapes() {
  return (
    <div>
      <Square />
      <Circle />
      <Rectangle />
    </div>
  );
}
