import { Slider, rem } from "@mantine/core";

const MARKS = [
  { value: 20, label: "You" },
  { value: 40, label: "Your body" },
  { value: 60, label: "Workouts" },
  { value: 80, label: "Meals Plan" },
];

interface TrackerProps {
  step: number;
  setStep: (step: number) => void;
}

const SliderStepTracker: React.FC<TrackerProps> = ({ step, setStep }) => {
  return (
    <Slider
      label={MARKS[step - 1].label}
      min={10}
      max={90}
      step={20}
      defaultValue={20}
      marks={MARKS}
      labelTransition="fade"
      size={2}
      styles={(theme) => ({
        bar: {
          backgroundColor: theme.colors.orange[8],
        },
        thumb: {
          color: theme.colors.orange[8],
          backgroundColor: theme.colors.orange[8],
          borderColor: theme.colors.orange[8],
        },
        mark: {
          color: theme.colors.blue[8],
          backgroundColor: theme.colors.blue[8],
          borderColor: theme.colors.blue[8],
        },
        markFilled: {
          color: theme.colors.orange[8],
          backgroundColor: theme.colors.orange[8],
          borderColor: theme.colors.orange[8],
        },
      })}
      value={step * 20}
      onChange={(value) => setStep(value / 20)}
    />
  );
};

export default SliderStepTracker;
