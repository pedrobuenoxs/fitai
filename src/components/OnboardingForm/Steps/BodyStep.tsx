import SliderInput from "@/components/UI/AgeInput";
import React from "react";

interface WorkoutProps {
  age: string;
  height: string;
  weight: string;
  goal: string;
  schedule: string;
  setGoal: (goal: string) => void;
  setSchedule: (schedule: string) => void;
  setAge: (age: string) => void;
  setHeight: (height: string) => void;
  setWeight: (weight: string) => void;
}

const BodyStep: React.FC<WorkoutProps> = ({
  goal,
  schedule,
  setGoal,
  setSchedule,
  setAge,
  setHeight,
  setWeight,
}) => {
  return (
    <>
      <label htmlFor="age">Sua idade</label>
      <SliderInput setProp={setAge} min={15} max={80} defaultValue={25} />
      <br></br>
      <label htmlFor="height">Sua altura</label>
      <SliderInput setProp={setHeight} min={145} max={220} defaultValue={175} />
      <br></br>
      <label htmlFor="height">Seu peso</label>
      <SliderInput setProp={setWeight} min={50} max={150} defaultValue={80} />
    </>
  );
};

export default BodyStep;
