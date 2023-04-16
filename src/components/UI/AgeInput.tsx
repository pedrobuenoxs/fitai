import { Slider, RangeSlider, rem } from "@mantine/core";
import { useState } from "react";

interface AgeInputProps {
  min: number;
  max: number;
  defaultValue: number;
  setProp: (age: string) => void;
}

const SliderInput: React.FC<AgeInputProps> = ({
  min,
  max,
  defaultValue,
  setProp,
}) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <>
      <Slider
        min={min}
        max={max}
        w={rem(300)}
        step={1}
        defaultValue={defaultValue}
        color="orange"
        thumbSize={5}
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
        value={value}
        onChange={(value) => {
          setValue(value);
          setProp(value.toString());
        }}
        labelTransition="fade"
        label={value.toString()}
      />
    </>
  );
};

export default SliderInput;
