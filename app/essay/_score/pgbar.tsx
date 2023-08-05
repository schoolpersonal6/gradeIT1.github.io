"use client";
import React, { useState, useEffect } from "react";

type Props = {
  value: number;
};

export default function PGBar({ value }: Props) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const animationDuration = 2200; // Duration of the animation in milliseconds
    const animationSteps = 60; // Number of animation steps
    const incrementValue = Math.ceil(value / animationSteps);
    const updateValue = () => {
      setCurrentValue((prevValue) => {
        const newValue = prevValue + incrementValue;
        return newValue > value ? value : newValue;
      });
    };
    const animationInterval = setInterval(
      updateValue,
      animationDuration / animationSteps
    );
    return () => {
      clearInterval(animationInterval);
    };
  }, [value]);

  let colorClass = "";

  if (currentValue <= 50) {
    colorClass = "text-red-500";
  } else if (currentValue <= 75) {
    colorClass = "text-yellow-500";
  } else {
    colorClass = "text-green-500";
  }

  return (
    <div
      className={`radial-progress ${colorClass} ${value}`}
      //@ts-ignore
      style={{ "--value": currentValue, "--size": "9rem" }}
    >
      <div className="text-white font-semibold text-3xl">{currentValue}%</div>
    </div>
  );
}
