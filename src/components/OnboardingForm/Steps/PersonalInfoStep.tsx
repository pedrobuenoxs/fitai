import React from "react";
import SliderInput from "@/components/UI/AgeInput";
import styles from "@/styles/PersonalInfoStep.module.css";
import { Input, TextInput } from "@mantine/core";
import { IconAt, IconRuler2, IconWeight } from "@tabler/icons-react";
interface PersonalInfoStepProps {
  name: string;
  email: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
  name,
  email,
  setName,
  setEmail,
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
