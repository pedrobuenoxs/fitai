import { Slider, rem } from "@mantine/core";
import { useState, useEffect } from "react";

interface AgeInputProps {
  prop: string;
  min: number;
  max: number;
  defaultValue: number;
  setProp: (age: string) => void;
}

const SliderInput: React.FC<AgeInputProps> = ({
  prop,
  min,
  max,
  defaultValue,
  setProp,
}) => {
  const [value, setValue] = useState(parseInt(prop) || defaultValue);

  return (
    <>
      <Slider
        min={min}
        max={max}
        w={rem(300)}
        step={1}
        defaultValue={defaultValue}
        color="orange"
        thumbSize={15}
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
        value={value}
        onChange={(value) => {
          setValue(value);
          setProp(value.toString());
        }}
        onChangeEnd={(value) => {
          console.log("value", value);
        }}
        labelTransition="fade"
        label={value.toString()}
      />
    </>
  );
};

export default SliderInput;
