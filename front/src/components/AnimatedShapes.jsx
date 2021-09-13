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
  box-shadow: 0 0 10px white;

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
  background-color: #03030f;
  border-radius: 100%;
  opacity: 0.7;
  position: absolute;
  z-index: -1;
  top: 200px;
  left: 0;
  animation: circle 40s linear infinite alternate;
  box-shadow: 0 0 10px white;

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
  background-color: #eaeaff;
  opacity: 0.7;
  top: 100px;
  z-index: -1;
  left: 0;
  animation: rectangle 50s linear infinite alternate;
  box-shadow: 0 0 10px white;

  @keyframes rectangle {
    0%,
    100% {
      transform: translate(0, 100vh);
    }
    50% {
      transform: translate(100vw, 0);
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
