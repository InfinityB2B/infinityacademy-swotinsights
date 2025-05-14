
import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import WelcomeStep from "@/components/WelcomeStep";
import FormStep1 from "@/components/FormStep1";

const STEPS = [
  { label: "Boas-vindas" },
  { label: "Identificação & Contexto Empresarial" },
  // próximas etapas futuras...
];

const Index = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<{ identificacao?: any }>({});

  return (
    <div className="min-h-screen bg-white text-black font-manrope flex flex-col items-center justify-start">
      <ProgressBar currentStep={step} stepsCount={STEPS.length} />
      <main className="w-full max-w-xl p-4 flex-1 flex flex-col items-center justify-center animate-fade-in">
        {step === 0 && (
          <WelcomeStep
            onStart={() => setStep(1)}
          />
        )}
        {step === 1 && (
          <FormStep1
            defaultValues={formData.identificacao}
            onComplete={(identificacao) => {
              setFormData((prev) => ({ ...prev, identificacao }));
              // Navegar para próxima etapa no futuro
            }}
          />
        )}
      </main>
    </div>
  );
};

export default Index;
