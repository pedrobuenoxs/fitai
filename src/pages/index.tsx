import React, { useState } from "react";
import { useRouter } from "next/router";
import OnboardingForm from "@/components/OnboardingForm/OnboardingForm";

const LandingPage: React.FC = () => {
  return (
    <>
      <OnboardingForm />
    </>
  );
};

export default LandingPage;
