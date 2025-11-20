'use client';

import { useState } from 'react';
import WelcomeScreen from '../../components/WelcomeScreen';
import LoginScreen from '../../components/LoginScreen';

export default function LoginFlowPage() {
  const [step, setStep] = useState(0);

  const next = () => setStep((prev) => Math.min(prev + 1, 1));
  const prev = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
      <div
        className="flex w-[200%] h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${step * 50}%)` }}
      >
        <WelcomeScreen onNext={next} />
        <LoginScreen onPrev={prev} />
      </div>
    </div>
  );
}
