import SliderInput from "@/components/UI/SliderInput";
import React from "react";

interface WorkoutProps {
  age: string;
  height: string;
  weight: string;
  setGoal: (goal: string) => void;
  setAge: (age: string) => void;
  setHeight: (height: string) => void;
  setWeight: (weight: string) => void;
  setMealPreference: (mealPreference: string) => void;
}

const BodyStep: React.FC<WorkoutProps> = ({
  age,
  height,
  weight,
  setGoal,
  setAge,
  setHeight,
  setWeight,
  setMealPreference,
}) => {
  return (
    <>
      <label htmlFor="age">Sua idade</label>
      <p>{age} anos</p>
      <SliderInput
        prop={age}
        setProp={setAge}
        min={15}
        max={80}
        defaultValue={25}
      />
      <br></br>
      <label htmlFor="height">Sua altura</label>
      <p>{height} cm</p>
      <SliderInput
        prop={height}
        setProp={setHeight}
        min={145}
        max={220}
        defaultValue={175}
      />
      <br></br>
      <label htmlFor="height">Seu peso</label>
      <p>{weight} Kg</p>
      <SliderInput
        prop={weight}
        setProp={setWeight}
        min={50}
        max={150}
        defaultValue={80}
      />
      <br></br>
      <label htmlFor="goal">Seu objetivo</label>
      <select
        required={true}
        name="goal"
        id="goal"
        onChange={(e) => setGoal(e.target.value)}
        defaultChecked={false}
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
      >
        <option value="Carnívoro">Sem restrição </option>
        <option value="Vegetariano">Vegetariano</option>
        <option value="Vegano">Vegano</option>
      </select>
    </>
  );
};

export default BodyStep;
