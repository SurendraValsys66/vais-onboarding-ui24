import React from "react";
import {
  clearOnboarding,
  clearOnboardingSkipReminder,
  emitOnboardingSkipReminderUpdate,
  getOnboarding,
} from "@/lib/onboardingStorage";
import { useNavigate } from "react-router-dom";
import OnboardingVideoLayout from "@/components/onboarding/OnboardingVideoLayout";
import ConfettiCanvas from "@/components/onboarding/ConfettiCanvas";
import CongratulatinModal from "@/components/onboarding/CongratulatinModal";
import { markStepCompleted } from "@/lib/masteryStorage";

export default function OnboardingThankYou() {
  const navigate = useNavigate();
  const data = getOnboarding();

  const continueToApp = () => {
    markStepCompleted("onboardingCompleted");
    clearOnboarding();
    clearOnboardingSkipReminder();
    emitOnboardingSkipReminderUpdate(null);
    navigate("/");
  };

  const handleClose = () => {
    continueToApp();
  };

  return (
    <OnboardingVideoLayout
      logoSrc="https://cdn.builder.io/api/v1/image/assets%2Ff2a051d62a994479965d33c6eada9792%2F9b770886bd6142129584a6e279795c21?format=webp&width=800"
      summaryValues={data}
      summaryTotal={6}
      currentStep={6}
      content={
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 pointer-events-none">
            <ConfettiCanvas mode="blast" />
          </div>
          <CongratulatinModal onClose={handleClose} onContinue={continueToApp} />
        </div>
      }
    />
  );
}
