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
  name: "", //ok
  email: "", //ok
  age: "25", //ok
  location: "",
  weight: "80", //ok
  height: "180", //ok
  workoutFrequency: "Manhã",
  workoutType: "Musculação",
  workoutHours: "1h",
  bodyObjective: "Ganhar massa muscular", //ok
  like: [],
  dislike: [],
  allergies: [],
  mealPreference: "Carnívoro", //ok
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
      <div className={styles.form}>
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
          <BodyStep
            age={formState.age}
            height={formState.height}
            weight={formState.weight}
            setGoal={(goal) =>
              dispatch({ type: "UPDATE_BODY_OBJECTIVE", payload: goal })
            }
            setAge={(age) => dispatch({ type: "UPDATE_AGE", payload: age })}
            setHeight={(height) =>
              dispatch({ type: "UPDATE_HEIGHT", payload: height })
            }
            setWeight={(weight) =>
              dispatch({ type: "UPDATE_WEIGHT", payload: weight })
            }
            setMealPreference={(mealPreference) =>
              dispatch({
                type: "UPDATE_MEAL_PREFERENCE",
                payload: mealPreference,
              })
            }
          />
        )}
        {currentStep === 3 && (
          <WorkoutStep
            setWorkoutType={(workoutType) =>
              dispatch({ type: "UPDATE_WORKOUT_TYPE", payload: workoutType })
            }
            setSchedule={(schedule) =>
              dispatch({ type: "UPDATE_WORKOUT_FREQUENCY", payload: schedule })
            }
            setWorkoutHours={(workoutHours) =>
              dispatch({ type: "UPDATE_WORKOUT_HOURS", payload: workoutHours })
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
      </div>
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
