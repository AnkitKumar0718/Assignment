import React, { useState } from "react";

const ArcAnimation = () => {
  const points = {
    A: { x: 50, y: 100 },
    B: { x: window.innerWidth / 2, y: 50 },
    C: { x: window.innerWidth - 50, y: 100 },
  };

  const pointSequence = ["A", "B", "C"];

  const [currentPointIndex, setCurrentPointIndex] = useState(null);
  const [position, setPosition] = useState(points["A"]); // Default to point A initially

  const handlePointClick = (index) => {
    setCurrentPointIndex(index);
    setPosition(points[pointSequence[index]]);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        className="w-full h-64"
        viewBox={`0 0 ${window.innerWidth} 200`}
        preserveAspectRatio="none"
      >
    
        <path
          d={`M ${points.A.x} ${points.A.y} 
          C ${points.B.x - 150} ${points.B.y}, 
          ${points.B.x + 150} ${points.B.y}, 
          ${points.C.x} ${points.C.y}`}
          fill="transparent"
          stroke="black"
          strokeWidth="2"
        />

        <text
          x={points.A.x - 10}
          y={points.A.y + 30}
          onClick={() => handlePointClick(0)}
          className="cursor-pointer"
        >
          A
        </text>
        <text
          x={points.B.x - 10}
          y={points.B.y - 20}
          onClick={() => handlePointClick(1)}
          className="cursor-pointer"
        >
          B
        </text>
        <text
          x={points.C.x - 10}
          y={points.C.y + 30}
          onClick={() => handlePointClick(2)}
          className="cursor-pointer"
        >
          C
        </text>

        <circle
          cx={points.A.x}
          cy={points.A.y}
          r="10"
          fill="blue"
          onClick={() => handlePointClick(0)}
          className="cursor-pointer"
        />
        <circle
          cx={points.B.x}
          cy={points.B.y}
          r="10"
          fill="blue"
          onClick={() => handlePointClick(1)}
          className="cursor-pointer"
        />
        <circle
          cx={points.C.x}
          cy={points.C.y}
          r="10"
          fill="blue"
          onClick={() => handlePointClick(2)}
          className="cursor-pointer"
        />

        <circle
          cx={position.x}
          cy={position.y}
          r="10"
          fill="red"
          className="transition-all duration-1000 ease-in-out"
        />
      </svg>
    </div>
  );
};

export default ArcAnimation;
