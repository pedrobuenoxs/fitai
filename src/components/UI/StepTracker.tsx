import { Slider, rem } from "@mantine/core";

const MARKS = [
  { value: 25, label: "You" },
  { value: 50, label: "Workouts" },
  { value: 75, label: "Meals" },
];

interface TrackerProps {
  step: number;
  setStep: (step: number) => void;
}

const SliderStepTracker: React.FC<TrackerProps> = ({ step, setStep }) => {
  return (
    <Slider
      label={MARKS[step - 1].label}
      min={25}
      max={75}
      step={25}
      defaultValue={25}
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
      value={step * 25}
      onChange={(value) => setStep(value / 25)}
    />
  );
};

export default SliderStepTracker;
