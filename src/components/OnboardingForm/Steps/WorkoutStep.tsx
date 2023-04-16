import React from "react";

interface WorkoutProps {
  goal: string;
  schedule: string;
  setGoal: (goal: string) => void;
  setSchedule: (schedule: string) => void;
}

const WorkoutStep: React.FC<WorkoutProps> = ({
  goal,
  schedule,
  setGoal,
  setSchedule,
}) => {
  return (
    <>
      <label htmlFor="goal">Qual o seu objetivo?</label>
      <input
        type="text"
        id="goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <label htmlFor="schedule">Qual o seu horário de treino?</label>
      <input
        type="text"
        id="schedule"
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
      />
    </>
  );
};

export default WorkoutStep;
