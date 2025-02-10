import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CapacitePertesProps {
  answers: any
  onNext: (data: any) => void
  onBack: () => void
}

export default function CapacitePertes({
  answers,
  onNext,
  onBack,
}: CapacitePertesProps) {
  const [localAnswers, setLocalAnswers] = useState(answers)

  const handleChange = (field: string, value: any) => {
    setLocalAnswers((prev: any) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    onNext({ capacitePertes: localAnswers })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Capacité à Subir des Pertes
        </h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Variation annuelle acceptable</CardTitle>
          <CardDescription>
            Quelle variation annuelle du capital investi, à la hausse ou à la baisse,
            acceptez-vous?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={localAnswers.acceptableVariation}
            onValueChange={(value) => handleChange("acceptableVariation", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="veryLow" id="variation-veryLow" />
              <Label htmlFor="variation-veryLow">
                Je n'accepte qu'une perte très faible (Aucune perte)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="low" id="variation-low" />
              <Label htmlFor="variation-low">
                De moins 10% à plus 10% (Faible)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="variation-medium" />
              <Label htmlFor="variation-medium">
                De moins 20% à plus 20% (Moyenne)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="high" id="variation-high" />
              <Label htmlFor="variation-high">
                De moins 40% à plus 40% (Élevée)
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Capacité à supporter des pertes</CardTitle>
          <CardDescription>
            Compte tenu de vos revenus et de votre patrimoine, quel niveau de pertes
            pouvez-vous supporter financièrement pour les opérations envisagées?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={localAnswers.lossCapacity}
            onValueChange={(value) => handleChange("lossCapacity", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="loss-none" />
              <Label htmlFor="loss-none">
                Vous ne pouvez supporter aucune perte financière (Aucune perte)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="low" id="loss-low" />
              <Label htmlFor="loss-low">
                Vous pouvez supporter des pertes financières limitées (Faible)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="loss-medium" />
              <Label htmlFor="loss-medium">
                Vous pouvez supporter des pertes financières à concurrence du montant investi (Moyenne)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="high" id="loss-high" />
              <Label htmlFor="loss-high">
                Vous pouvez supporter des pertes financières au-delà du montant investi (Élevée)
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Situation financière globale</CardTitle>
          <CardDescription>
            Lequel des énoncés suivants correspond le mieux à la situation financière
            globale de votre famille?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={localAnswers.financialSituation}
            onValueChange={(value) => handleChange("financialSituation", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="noSavingsHighDebt" id="situation-noSavingsHighDebt" />
              <Label htmlFor="situation-noSavingsHighDebt">
                Pas d'économies et des dettes importantes (Aucune perte)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lowSavingsHighDebt" id="situation-lowSavingsHighDebt" />
              <Label htmlFor="situation-lowSavingsHighDebt">
                Peu d'économies et des dettes relativement importantes (Faible)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="someSavingsSomeDebt" id="situation-someSavingsSomeDebt" />
              <Label htmlFor="situation-someSavingsSomeDebt">
                Quelques économies et quelques dettes (Moyenne)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lowDebtComfortable" id="situation-lowDebtComfortable" />
              <Label htmlFor="situation-lowDebtComfortable">
                Peu de dettes et très à l'aise financièrement (Elevé)
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Scénario de risque 1</CardTitle>
          <CardDescription>
            Imaginez que l'ensemble de votre patrimoine soit investi dans un placement
            sans risque, qui vous rapporte un revenu certain de 10.000€ par an.
            On vous propose réaliser votre capital pour l'investir sur des supports plus risqués qui ont:
            - 50% de chance de vous procurer un revenu annuel double, de 20.000€.
            - 50% de chance de vous procurer un revenu annuel diminué d'un tiers, donc de 6.333€.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={localAnswers.riskScenario1}
            onValueChange={(value) => handleChange("riskScenario1", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="accept" id="scenario1-accept" />
              <Label htmlFor="scenario1-accept">Vous acceptez le placement</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="refuse" id="scenario1-refuse" />
              <Label htmlFor="scenario1-refuse">Vous refusez le placement</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Scénario de risque 2</CardTitle>
          <CardDescription>
            Imaginez que l'ensemble de votre patrimoine soit investi dans un placement
            sans risque, qui vous rapporte un revenu certain de 10.000€ par an.
            On vous propose réaliser votre capital pour l'investir sur des supports plus risqués qui ont:
            - 50% de chance de vous procurer un revenu annuel augmenté de 20% soit de 12.000€.
            - 50% de chance de vous procurer un revenu annuel diminué de 20% soit 8000€.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={localAnswers.riskScenario2}
            onValueChange={(value) => handleChange("riskScenario2", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="accept" id="scenario2-accept" />
              <Label htmlFor="scenario2-accept">Vous acceptez le placement</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="refuse" id="scenario2-refuse" />
              <Label htmlFor="scenario2-refuse">Vous refusez le placement</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button onClick={onBack} variant="outline" size="lg">
          Précédent
        </Button>
        <Button onClick={handleNext} size="lg">
          Suivant
        </Button>
      </div>
    </div>
  )
}

