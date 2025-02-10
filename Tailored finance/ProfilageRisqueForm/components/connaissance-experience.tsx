import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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

const financialProducts = [
  { key: "fondsEuros", label: "Fonds Euros" },
  { key: "livretA", label: "Livret A, LDD..." },
  { key: "assuranceVie", label: "Assurance vie, contrat de capitalisation" },
  { key: "perMadelin", label: "PER, Madelin..." },
  { key: "actionsObligations", label: "Actions/obligations" },
  { key: "opcvm", label: "OPCVM" },
  { key: "scpiOpci", label: "SCPI, OPCI" },
  { key: "sci", label: "SCI" },
  { key: "trackersEtf", label: "Trackers/ETF" },
  { key: "produitsStructures", label: "Produits structurés" },
  { key: "privateEquity", label: "Private Equity/Capital investissement" },
  { key: "fip", label: "FIP" },
  { key: "fcpi", label: "FCPI" },
  { key: "fps", label: "FPS" },
]

interface ConnaissanceExperienceProps {
  answers: any
  onNext: (data: any) => void
  onBack: () => void
}

export default function ConnaissanceExperience({
  answers,
  onNext,
  onBack,
}: ConnaissanceExperienceProps) {
  const [localAnswers, setLocalAnswers] = useState(answers)

  const handleChange = (field: string, value: any) => {
    setLocalAnswers((prev: any) => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (product: string, type: string) => {
    setLocalAnswers((prev: any) => ({
      ...prev,
      financialProductsKnowledge: {
        ...prev.financialProductsKnowledge,
        [product]: {
          ...prev.financialProductsKnowledge[product],
          [type]: !prev.financialProductsKnowledge[product]?.[type],
        },
      },
    }))
  }

  const handleNext = () => {
    onNext({ connaissanceExperience: localAnswers })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Connaissance et Expérience en Matière d&apos;Investissement
        </h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Niveau de connaissance</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={localAnswers.knowledgeLevel}
            onValueChange={(value) => handleChange("knowledgeLevel", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="novice" id="knowledge-novice" />
              <Label htmlFor="knowledge-novice">
                Uniquement les placements bancaires traditionnels (Livret A, PEL,
                LDD...) - Novice
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="informed1" id="knowledge-informed1" />
              <Label htmlFor="knowledge-informed1">
                Quelques-uns principaux placements (actions, obligations, OPCVM,
                SCPI...) - Informé
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="informed2" id="knowledge-informed2" />
              <Label htmlFor="knowledge-informed2">
                Les principaux placements et comment ils fluctuent - Informé
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="experienced" id="knowledge-experienced" />
              <Label htmlFor="knowledge-experienced">
                Tous les placements, y compris les placements spéculatifs et
                comment ils fluctuent - Expérimenté
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Niveau d&apos;expertise</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={localAnswers.expertiseLevel}
            onValueChange={(value) => handleChange("expertiseLevel", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="novice" id="expertise-novice" />
              <Label htmlFor="expertise-novice">
                Je suis néophyte; je ne connais pas ces domaines - Novice
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="informed" id="expertise-informed" />
              <Label htmlFor="expertise-informed">
                Je suis moyennement expérimenté; j&apos;ai quelques connaissances
                dans ces domaines - Informé
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="experienced" id="expertise-experienced" />
              <Label htmlFor="expertise-experienced">
                Je suis expérimenté; j&apos;ai de bonnes connaissances dans ces
                domaines – Expérimenté
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Expérience des placements financiers</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={localAnswers.investmentExperience}
            onValueChange={(value) =>
              handleChange("investmentExperience", value)
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="novice" id="experience-novice" />
              <Label htmlFor="experience-novice">
                Je n&apos;ai aucune expérience préalable - Novice
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="informed" id="experience-informed" />
              <Label htmlFor="experience-informed">
                J&apos;ai un peu d&apos;expérience en matière d&apos;opérations
                financières - Informé
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="experienced" id="experience-experienced" />
              <Label htmlFor="experience-experienced">
                J'ai une bonne expérience - Expérimenté
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Modes de gestion utilisés</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="gestion-directe"
                checked={localAnswers.managementModes.includes("directe")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    handleChange("managementModes", [
                      ...localAnswers.managementModes,
                      "directe",
                    ])
                  } else {
                    handleChange(
                      "managementModes",
                      localAnswers.managementModes.filter(
                        (mode: string) => mode !== "directe"
                      )
                    )
                  }
                }}
              />
              <Label htmlFor="gestion-directe">
                Gestion directe: vous vous occupez vous-même de votre gestion
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="gestion-conseillee"
                checked={localAnswers.managementModes.includes("conseillee")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    handleChange("managementModes", [
                      ...localAnswers.managementModes,
                      "conseillee",
                    ])
                  } else {
                    handleChange(
                      "managementModes",
                      localAnswers.managementModes.filter(
                        (mode: string) => mode !== "conseillee"
                      )
                    )
                  }
                }}
              />
              <Label htmlFor="gestion-conseillee">
                Gestion conseillée: vous êtes conseillé par un professionnel
                pour faire vos choix
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="gestion-sous-mandat"
                checked={localAnswers.managementModes.includes("sousMandat")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    handleChange("managementModes", [
                      ...localAnswers.managementModes,
                      "sousMandat",
                    ])
                  } else {
                    handleChange(
                      "managementModes",
                      localAnswers.managementModes.filter(
                        (mode: string) => mode !== "sousMandat"
                      )
                    )
                  }
                }}
              />
              <Label htmlFor="gestion-sous-mandat">
                Gestion sous mandat: votre gestion est déléguée à une société de
                gestion
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">
            Opérations réalisées au cours des 12 derniers mois
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              "Fonds en euros",
              "Produit obligataires",
              "Produits actions (OPCVM, titres vifs...)",
              "Immobilier direct",
              "Immobilier indirect (SCPI, OPCI...)",
            ].map((product) => (
              <div key={product} className="space-y-2">
                <Label>{product}</Label>
                <Select
                  value={localAnswers.operationsLast12Months[product]}
                  onValueChange={(value) =>
                    handleChange("operationsLast12Months", {
                      ...localAnswers.operationsLast12Months,
                      [product]: value,
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aucune">Aucune</SelectItem>
                    <SelectItem value="1-5">De 1 à 5</SelectItem>
                    <SelectItem value="5+">Plus de 5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2 ">
            Connaissances et expériences dans les produits financiers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {financialProducts.map(({ key, label }) => (
              <div key={key} className="space-y-2">
                <Label className="font-bold border-l-4 border-primary pl-2 ">{label}</Label>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id={`${key}-knowledge`}
                      checked={
                        localAnswers.financialProductsKnowledge[key]?.knowledge
                      }
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(key, "knowledge")
                      }
                    />
                    <Label htmlFor={`${key}-knowledge`}>
                      Je connais les principales caractéristiques et les risques
                      associés
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`${key}-experience`}
                      checked={
                        localAnswers.financialProductsKnowledge[key]?.experience
                      }
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(key, "experience")
                      }
                    />
                    <Label htmlFor={`${key}-experience`} >
                      J'ai déjà investi au cours des 3 dernières années
                    </Label>
                  </div>
                </div>
              </div>
            ))}
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

