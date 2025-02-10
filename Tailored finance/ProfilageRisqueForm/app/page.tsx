"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ProgressSteps } from "@/components/ui/progress-steps"
import PersonalInfo from "@/components/personal-info"
import ConnaissanceExperience from "@/components/connaissance-experience"
import ProfilRisque from "@/components/profil-risque"
import CapacitePertes from "@/components/capacite-pertes"
import Result from "@/components/result"

export default function QuestionnairePage() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({
    personalInfo: {
      clientName: "",
      clientFirstName: "",
      clientAddress: "",
      clientEmail: "",
      advisorName: "",
      advisorFirstName: "",
      advisorCompany: "Tailored Finance",
    },
    connaissanceExperience: {
      knowledgeLevel: "",
      expertiseLevel: "",
      investmentExperience: "",
      managementModes: [],
      operationsLast12Months: {},
      financialProductsKnowledge: {},
    },
    profilRisque: {
      age: "",
      marketDropReaction: "",
      riskVsReturn: "",
      investmentHorizon: "",
      liquidityImportance: "",
      investmentObjectives: [],
      riskPerception: "",
      riskProfile: "",
      pastLosses: "",
      monitoringFrequency: "",
      portfolioPercentage: "",
    },
    capacitePertes: {
      acceptableVariation: "",
      lossCapacity: "",
      financialSituation: "",
      riskScenario1: "",
      riskScenario2: "",
    },
  })

  const handleNext = (newData: any) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, ...newData }))
    setStep((prevStep) => prevStep + 1)
  }

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1)
  }

  const handleSubmit = (newData: any) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, ...newData }))
    setStep(6) // Move to the Result step
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <div className="container max-w-4xl px-4 py-8">
        <div className="mb-8 flex items-center justify-center">
          <Image
            src="/tail.png"
            alt="Tailored Finance"
            width={200}
            height={80}
            className= "h-20 w-auto"
          />
        </div>
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="mb-8">
              <ProgressSteps currentStep={step} totalSteps={4} />
            </div>
            <div className="space-y-8">
              {/* {step === 1 && (
                <PersonalInfo
                  answers={answers.personalInfo}
                  onNext={handleNext}
                />
              )} */}
              {step === 1 && (
                <ConnaissanceExperience
                  answers={answers.connaissanceExperience}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}
              {step === 2 && (
                <ProfilRisque
                  answers={answers.profilRisque}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}
              {step === 3 && (
                <CapacitePertes
                  answers={answers.capacitePertes}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}
              {step === 4 && <Result answers={answers} />}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

