import React from "react";
import SliderInput from "@/components/UI/AgeInput";
import styles from "@/styles/PersonalInfoStep.module.css";
import { Input, TextInput } from "@mantine/core";
import { IconAt, IconRuler2, IconWeight } from "@tabler/icons-react";
interface PersonalInfoStepProps {
  name: string;
  age: string;
  email: string;
  height: string;
  weight: string;
  setName: (name: string) => void;
  setAge: (age: string) => void;
  setEmail: (email: string) => void;
  setHeight: (height: string) => void;
  setWeight: (weight: string) => void;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
  name,
  age,
  email,
  height,
  weight,
  setName,
  setAge,
  setEmail,
  setHeight,
  setWeight,
}) => {
  return (
    <div className={styles.container}>
      <TextInput
        placeholder="Seu nome"
        label="Como você se chama?"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <label htmlFor="age">Sua idade</label>
      <SliderInput setProp={setAge} min={15} max={80} defaultValue={25} />
      <br></br>
      <label htmlFor="height">Sua altura</label>
      <SliderInput setProp={setHeight} min={145} max={220} defaultValue={175} />
      <br></br>
      <label htmlFor="height">Seu peso</label>
      <SliderInput setProp={setWeight} min={50} max={150} defaultValue={80} />

      <br></br>
      <TextInput
        icon={<IconAt />}
        placeholder="Seu email"
        label="Qual seu email?"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default PersonalInfoStep;
