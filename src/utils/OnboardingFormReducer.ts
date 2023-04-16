export interface OnboardingFormState {
  name: string;
  email: string;
  age: string;
  location: string;
  weight: string;
  height: string;
  like: string[];
  dislike: string[];
  allergies: string[];
  workoutFrequency: string;
  workoutType: string;
  bodyObjective: string;
}

interface OnboardingFormAction {
  type: string;
  payload: any;
}

export const onboardingFormReducer = (
  state: OnboardingFormState,
  action: OnboardingFormAction
): OnboardingFormState => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_AGE":
      return { ...state, age: action.payload };
    case "UPDATE_LOCATION":
      return { ...state, location: action.payload };
    case "UPDATE_WEIGHT":
      return { ...state, weight: action.payload };
    case "UPDATE_HEIGHT":
      return { ...state, height: action.payload };
    case "UPDATE_FOOD_LIKE":
      return { ...state, like: action.payload };
    case "UPDATE_FOOD_DISLIKE":
      return { ...state, dislike: action.payload };
    case "UPDATE_ALLERGIES":
      return { ...state, allergies: action.payload };
    case "UPDATE_WORKOUT_FREQUENCY":
      return { ...state, workoutFrequency: action.payload };
    case "UPDATE_WORKOUT_TYPE":
      return { ...state, workoutType: action.payload };
    case "UPDATE_BODY_OBJECTIVE":
      return { ...state, bodyObjective: action.payload };

    // Add more action handlers here
    default:
      return state;
  }
};
