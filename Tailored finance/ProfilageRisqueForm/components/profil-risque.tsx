import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ProfilRisqueProps {
  answers: any
  onNext: (data: any) => void
  onBack: () => void
}

export default function ProfilRisque({
  answers,
  onNext,
  onBack,
}: ProfilRisqueProps) {
  const [localAnswers, setLocalAnswers] = useState(answers)

  const handleChange = (field: string, value: any) => {
    setLocalAnswers((prev: any) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    onNext({ profilRisque: localAnswers })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Profil de Risque
        </h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Âge</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={localAnswers.age}
            onValueChange={(value) => handleChange("age", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="less25" id="age-less25" />
              <Label htmlFor="age-less25">Moins de 25 ans (4 pts)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="less50" id="age-less50" />
              <Label htmlFor="age-less50">Moins de 50 ans (3 pts)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="less60" id="age-less60" />
              <Label htmlFor="age-less60">Moins de 60 ans (2 pts)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="more60" id="age-more60" />
              <Label htmlFor="age-more60">Plus de 60 ans (1 pt)</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Réaction à une chute des marchés</CardTitle>
          <CardDescription>
            Suite à une chute des marchés, votre investissement baisse de 10%.
            Que faites-vous ?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={localAnswers.marketDropReaction}
            onValueChange={(value) => handleChange("marketDropReaction", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="reinvest" id="reaction-reinvest" />
              <Label htmlFor="reaction-reinvest">
                Vous profitez de la baisse pour réinvestir (3 pts)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="wait" id="reaction-wait" />
              <Label htmlFor="reaction-wait">
                Vous attendez une amélioration des marchés (2 pts)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="disinvest" id="reaction-disinvest" />
              <Label htmlFor="reaction-disinvest">
                Vous désinvestissez (1 pt)
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Risque vs Rendement</CardTitle>
          <CardDescription>
            Plus la rentabilité potentielle d'un placement est grande, plus son
            risque est élevé. Vous recherchez:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={localAnswers.riskVsReturn}
            onValueChange={(value) => handleChange("riskVsReturn", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="noRisk" id="risk-no" />
              <Label htmlFor="risk-no">
                Un investissement sans risque sans espérance de gain (1 pt)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lowRisk" id="risk-low" />
              <Label htmlFor="risk-low">
                Un niveau de risque faible avec une espérance rendement faible
                (2 pts)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="moderateRisk" id="risk-moderate" />
              <Label htmlFor="risk-moderate">
                Un niveau de risque modéré avec une espérance rendement modéré
                (3 pts)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="highRisk" id="risk-high" />
              <Label htmlFor="risk-high">
                Un niveau de risque important avec une espérance rendement
                important (4 pts)
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Horizon de placement</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={localAnswers.investmentHorizon}
            onValueChange={(value) => handleChange("investmentHorizon", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="less3" id="horizon-less3" />
              <Label htmlFor="horizon-less3">Moins de 3 ans (1 pt)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3-8" id="horizon-3-8" />
              <Label htmlFor="horizon-3-8">3-8 ans (2 pts)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="8-15" id="horizon-8-15" />
              <Label htmlFor="horizon-8-15">8-15 ans (3 pts)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="more15" id="horizon-more15" />
              <Label htmlFor="horizon-more15">Plus de 15 ans (4 pts)</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Importance de la liquidité</CardTitle>
          <CardDescription>
            Le critère de liquidité est-il important dans le cadre de vos
            placements?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={localAnswers.liquidityImportance}
            onValueChange={(value) => handleChange("liquidityImportance", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="high" id="liquidity-high" />
              <Label htmlFor="liquidity-high">
                Oui, je dois pouvoir disposer de mon argent à tout moment (1 pt)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="partial" id="liquidity-partial" />
              <Label htmlFor="liquidity-partial">
                Non, j'ai d'autres liquidités disponibles rapidement, une partie
                seulement doit rester disponible
              </Label>
            </div>
          </RadioGroup>
          {localAnswers.liquidityImportance === "partial" && (
            <div className="mt-4">
              <Label>Pourcentage de liquidité nécessaire</Label>
              <Select
                value={localAnswers.liquidityPercentage}
                onValueChange={(value) =>
                  handleChange("liquidityPercentage", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="less25">Moins de 25% (4 pts)</SelectItem>
                  <SelectItem value="25-50">Entre 25% et 50% (3 pts)</SelectItem>
                  <SelectItem value="50-75">Entre 50% et 75% (2 pts)</SelectItem>
                  <SelectItem value="75-99">Entre 75% et 99% (1 pt)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Objectifs de placement</CardTitle>
          <CardDescription>
            Quels sont vos objectifs de placement? (Plusieurs réponses possibles)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="objective-preservation"
                checked={localAnswers.investmentObjectives.includes("preservation")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    handleChange("investmentObjectives", [
                      ...localAnswers.investmentObjectives,
                      "preservation",
                    ])
                  } else {
                    handleChange(
                      "investmentObjectives",
                      localAnswers.investmentObjectives.filter(
                        (obj: string) => obj !== "preservation"
                      )
                    )
                  }
                }}
              />
              <Label htmlFor="objective-preservation">
                Préservation du capital (1 pt)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="objective-growth"
                checked={localAnswers.investmentObjectives.includes("growth")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    handleChange("investmentObjectives", [
                      ...localAnswers.investmentObjectives,
                      "growth",
                    ])
                  } else {
                    handleChange(
                      "investmentObjectives",
                      localAnswers.investmentObjectives.filter(
                        (obj: string) => obj !== "growth"
                      )
                    )
                  }
                }}
              />
              <Label htmlFor="objective-growth">
                Croissance du capital (2 pts)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="objective-income"
                checked={localAnswers.investmentObjectives.includes("income")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    handleChange("investmentObjectives", [
                      ...localAnswers.investmentObjectives,
                      "income",
                    ])
                  } else {
                    handleChange(
                      "investmentObjectives",
                      localAnswers.investmentObjectives.filter(
                        (obj: string) => obj !== "income"
                      )
                    )
                  }
                }}
              />
              <Label htmlFor="objective-income">
                Investissements générateurs de revenus (2 pts)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="objective-leverage"
                checked={localAnswers.investmentObjectives.includes("leverage")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    handleChange("investmentObjectives", [
                      ...localAnswers.investmentObjectives,
                      "leverage",
                    ])
                  } else {
                    handleChange(
                      "investmentObjectives",
                      localAnswers.investmentObjectives.filter(
                        (obj: string) => obj !== "leverage"
                      )
                    )
                  }
                }}
              />
              <Label htmlFor="objective-leverage">
                Exposition à effet de levier (5 pts)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="objective-all"
                checked={localAnswers.investmentObjectives.includes("all")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    handleChange("investmentObjectives", ["all"])
                  } else {
                    handleChange("investmentObjectives", [])
                  }
                }}
              />
              <Label htmlFor="objective-all">
                Vous n'avez rien coché ci-dessus, parce que tous ces objectifs peuvent vous convenir (3 pts)
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Perception du risque</CardTitle>
          <CardDescription>
            Pour les placements financiers, pensez-vous plutôt que:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={localAnswers.riskPerception}
            onValueChange={(value) => handleChange("riskPerception", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="noRisk" id="perception-noRisk" />
              <Label htmlFor="perception-noRisk">
                Il ne faut pas prendre de risques; il ne faut investir que dans des placements sûrs (1 pt)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lowRisk" id="perception-lowRisk" />
              <Label htmlFor="perception-lowRisk">
                On peut placer une petite partie de son patrimoine sur des actifs risqués (2 pts)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="moderateRisk" id="perception-moderateRisk" />
              <Label htmlFor="perception-moderateRisk">
                On peut placer une part importante de son patrimoine sur des actifs risqués, si le gain attendu est également important (3 pts)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="highRisk" id="perception-highRisk" />
              <Label htmlFor="perception-highRisk">
                On doit placer l'essentiel de son patrimoine dans des actifs risqués, dès qu'il y a des chances de gains très importants (4 pts)
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Confirmation du profil</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Avez-vous déjà subi des pertes sur vos placements financiers?</Label>
            <RadioGroup
              value={localAnswers.pastLosses}
              onValueChange={(value) => handleChange("pastLosses", value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="losses-no" />
                <Label htmlFor="losses-no">Non</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yesSold" id="losses-yesSold" />
                <Label htmlFor="losses-yesSold">Oui et vous avez tout vendu</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yesWaited" id="losses-yesWaited" />
                <Label htmlFor="losses-yesWaited">Oui et vous avez patienté</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yesReinvested" id="losses-yesReinvested" />
                <Label htmlFor="losses-yesReinvested">Oui et vous avez réinvesti</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Selon quelle fréquence suivez-vous vos placements actuels?</Label>
            <RadioGroup
              value={localAnswers.monitoringFrequency}
              onValueChange={(value) => handleChange("monitoringFrequency", value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="weekly" id="frequency-weekly" />
                <Label htmlFor="frequency-weekly">Hebdomadaire</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="frequency-monthly" />
                <Label htmlFor="frequency-monthly">Mensuelle</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="quarterly" id="frequency-quarterly" />
                <Label htmlFor="frequency-quarterly">Trimestrielle</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="annually" id="frequency-annually" />
                <Label htmlFor="frequency-annually">Annuelle</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>
              Les placements auxquels s'appliquent ce questionnaire représentent quel
              pourcentage de votre patrimoine, en excluant votre résidence principale?
            </Label>
            <RadioGroup
              value={localAnswers.portfolioPercentage}
              onValueChange={(value) => handleChange("portfolioPercentage", value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="notApplicable" id="percentage-notApplicable" />
                <Label htmlFor="percentage-notApplicable">Sans objet</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="less25" id="percentage-less25" />
                <Label htmlFor="percentage-less25">Moins de 25%</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="25-50" id="percentage-25-50" />
                <Label htmlFor="percentage-25-50">Entre 25% et 50%</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="50-75" id="percentage-50-75" />
                <Label htmlFor="percentage-50-75">Entre 50% et 75%</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="more75" id="percentage-more75" />
                <Label htmlFor="percentage-more75">Plus de 75%</Label>
              </div>
            </RadioGroup>
          </div>
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

