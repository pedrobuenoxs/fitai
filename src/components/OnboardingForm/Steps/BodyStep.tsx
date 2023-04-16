import SliderInput from "@/components/UI/AgeInput";
import React from "react";

interface WorkoutProps {
  setGoal: (goal: string) => void;
  setAge: (age: string) => void;
  setHeight: (height: string) => void;
  setWeight: (weight: string) => void;
  setMealPreference: (mealPreference: string) => void;
}

const BodyStep: React.FC<WorkoutProps> = ({
  setGoal,
  setAge,
  setHeight,
  setWeight,
  setMealPreference,
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
      <br></br>
      <label htmlFor="goal">Seu objetivo</label>
      <select
        name="goal"
        id="goal"
        onChange={(e) => setGoal(e.target.value)}
        defaultValue="Ganhar massa muscular"
      >
        <option value="Ganhar massa muscular">Ganhar massa muscular</option>
        <option value="Perder peso">Perder peso</option>
        <option value="Manter o peso">Manter o peso</option>
      </select>

      <br></br>
      <label htmlFor="mealPreference">Preferência de refeição</label>
      <select
        name="mealPreference"
        id="mealPreference"
        onChange={(e) => setMealPreference(e.target.value)}
        defaultValue="Carnívoro"
      >
        <option value="Carnívoro">Carnívoro</option>
        <option value="Vegetariano">Vegetariano</option>
        <option value="Vegano">Vegano</option>
      </select>
    </>
  );
};

export default BodyStep;
