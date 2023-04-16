import React, { useReducer, useState } from "react";
import {
  onboardingFormReducer,
  OnboardingFormState,
} from "@/utils/OnboardingFormReducer";
import PersonalInfoStep from "./Steps/PersonalInfoStep";
import MealStep from "./Steps/MealStep";
import WorkoutStep from "./Steps/WorkoutStep";
import BodyStep from "./Steps/BodyStep";
import styles from "@/styles/OnboardingForm.module.css";
import StepTracker from "@/components/UI/StepTracker";

const initialState: OnboardingFormState = {
  name: "",
  email: "",
  age: "",
  location: "",
  weight: "",
  height: "",
  like: [],
  dislike: [],
  allergies: [],
  workoutFrequency: "",
  workoutType: "",
  bodyObjective: "",
};

const OnboardingForm: React.FC = () => {
  const [formState, dispatch] = useReducer(onboardingFormReducer, initialState);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formState);
  };

  return (
    <div className={styles.container}>
      <StepTracker step={currentStep} setStep={setCurrentStep} />
      <br></br>
      <br></br>
      <>
        {currentStep === 1 && (
          <PersonalInfoStep
            name={formState.name}
            email={formState.email}
            setName={(name) => dispatch({ type: "UPDATE_NAME", payload: name })}
            setEmail={(email) =>
              dispatch({ type: "UPDATE_EMAIL", payload: email })
            }
          />
        )}
        {currentStep === 2 && (
          <WorkoutStep
            age={formState.age}
            height={formState.height}
            weight={formState.weight}
            goal={formState.bodyObjective}
            schedule={formState.workoutFrequency}
            setGoal={(goal) =>
              dispatch({ type: "UPDATE_BODY_OBJECTIVE", payload: goal })
            }
            setSchedule={(schedule) =>
              dispatch({ type: "UPDATE_WORKOUT_FREQUENCY", payload: schedule })
            }
            setAge={(age) => dispatch({ type: "UPDATE_AGE", payload: age })}
            setHeight={(height) =>
              dispatch({ type: "UPDATE_HEIGHT", payload: height })
            }
            setWeight={(weight) =>
              dispatch({ type: "UPDATE_WEIGHT", payload: weight })
            }
          />
        )}
        {currentStep === 3 && (
          <WorkoutStep
            age={formState.age}
            height={formState.height}
            weight={formState.weight}
            goal={formState.bodyObjective}
            schedule={formState.workoutFrequency}
            setGoal={(goal) =>
              dispatch({ type: "UPDATE_BODY_OBJECTIVE", payload: goal })
            }
            setSchedule={(schedule) =>
              dispatch({ type: "UPDATE_WORKOUT_FREQUENCY", payload: schedule })
            }
            setAge={(age) => dispatch({ type: "UPDATE_AGE", payload: age })}
            setHeight={(height) =>
              dispatch({ type: "UPDATE_HEIGHT", payload: height })
            }
            setWeight={(weight) =>
              dispatch({ type: "UPDATE_WEIGHT", payload: weight })
            }
          />
        )}
        {currentStep === 4 && (
          <MealStep
            like={formState.like}
            dislike={formState.dislike}
            allergies={formState.allergies}
            setLike={(like) =>
              dispatch({ type: "UPDATE_FOOD_LIKE", payload: like })
            }
            setDislike={(dislike) =>
              dispatch({ type: "UPDATE_FOOD_DISLIKE", payload: dislike })
            }
            setAllergies={(allergies) =>
              dispatch({ type: "UPDATE_ALLERGIES", payload: allergies })
            }
          />
        )}
      </>
      <div className={styles.buttons}>
        {/* Add more step components here */}
        {currentStep > 1 && (
          <button className={styles.button} onClick={handleBack}>
            Back
          </button>
        )}
        {currentStep < 4 && (
          <button className={styles.button} onClick={handleNext}>
            Next
          </button>
        )}{" "}
        {/* Change the number 2 to the total number of steps */}
        {currentStep === 4 && (
          <button className={styles.button} onClick={handleSubmit}>
            Submit
          </button>
        )}{" "}
        {/* Change the number 2 to the total number of steps */}
      </div>
    </div>
  );
};

export default OnboardingForm;
