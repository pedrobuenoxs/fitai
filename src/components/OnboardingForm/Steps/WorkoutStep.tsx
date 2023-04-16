import React from "react";

interface WorkoutProps {
  setSchedule: (schedule: string) => void;
  setWorkoutType: (workoutType: string) => void;
  setWorkoutHours: (workoutHours: string) => void;
}

const WorkoutStep: React.FC<WorkoutProps> = ({
  setSchedule,
  setWorkoutType,
  setWorkoutHours,
}) => {
  return (
    <>
      <label htmlFor="schedule">Seu horário de treino</label>
      <select
        name="schedule"
        id="schedule"
        onChange={(e) => setSchedule(e.target.value)}
        defaultValue="Manhã"
      >
        <option value="Manhã">Manhã</option>
        <option value="Tarde">Tarde</option>
        <option value="Noite">Noite</option>
      </select>

      <br></br>

      <label htmlFor="workoutType">Tipo de treino</label>
      <select
        name="workoutType"
        id="workoutType"
        onChange={(e) => setWorkoutType(e.target.value)}
        defaultValue="Musculação"
      >
        <option value="Musculação">Musculação</option>
        <option value="Crossfit">Crossfit</option>
        <option value="Funcional">Funcional</option>
      </select>

      <br></br>

      <label htmlFor="workoutHours">Horas de treino por dia</label>
      <select
        name="workoutHours"
        id="workoutHours"
        onChange={(e) => setWorkoutHours(e.target.value)}
        defaultValue="1h"
      >
        <option value="1">1h</option>
        <option value="2">2h</option>
        <option value="3">3h</option>
      </select>
    </>
  );
};

export default WorkoutStep;
