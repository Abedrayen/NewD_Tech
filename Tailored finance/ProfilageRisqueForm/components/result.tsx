import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ResultProps {
  answers: any
}

export default function Result({ answers }: ResultProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Résumé de votre Profil
        </h2>
        <p className="text-muted-foreground">
          Récapitulatif de vos réponses au questionnaire
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Informations Personnelles</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="font-medium">Nom du client</dt>
              <dd>{answers.personalInfo.clientName}</dd>
            </div>
            <div>
              <dt className="font-medium">Prénom du client</dt>
              <dd>{answers.personalInfo.clientFirstName}</dd>
            </div>
            <div>
              <dt className="font-medium">Adresse</dt>
              <dd>{answers.personalInfo.clientAddress}</dd>
            </div>
            <div>
              <dt className="font-medium">Email</dt>
              <dd>{answers.personalInfo.clientEmail}</dd>
            </div>
            <div>
              <dt className="font-medium">Nom du conseiller</dt>
              <dd>{answers.personalInfo.advisorName}</dd>
            </div>
            <div>
              <dt className="font-medium">Prénom du conseiller</dt>
              <dd>{answers.personalInfo.advisorFirstName}</dd>
            </div>
            <div>
              <dt className="font-medium">Société du conseiller</dt>
              <dd>{answers.personalInfo.advisorCompany}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Connaissance et Expérience</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-4">
            <div>
              <dt className="font-medium">Niveau de connaissance</dt>
              <dd>{answers.connaissanceExperience.knowledgeLevel}</dd>
            </div>
            <div>
              <dt className="font-medium">Niveau d'expertise</dt>
              <dd>{answers.connaissanceExperience.expertiseLevel}</dd>
            </div>
            <div>
              <dt className="font-medium">Expérience des placements financiers</dt>
              <dd>{answers.connaissanceExperience.investmentExperience}</dd>
            </div>
            <div>
              <dt className="font-medium">Modes de gestion utilisés</dt>
              <dd>{answers.connaissanceExperience.managementModes.join(", ")}</dd>
            </div>
            <div>
              <dt className="font-medium">Opérations réalisées au cours des 12 derniers mois</dt>
              <dd>
                <ul className="list-disc pl-5">
                  {Object.entries(answers.connaissanceExperience.operationsLast12Months).map(([product, operations]) => (
                    <li key={product}>{product}: {operations}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="font-medium">Connaissances et expériences dans les produits financiers</dt>
              <dd>
                <ul className="list-disc pl-5">
                  {Object.entries(answers.connaissanceExperience.financialProductsKnowledge).map(([product, knowledge]) => (
                    <li key={product}>
                      {product}: 
                      {knowledge.knowledge ? " Connaissances" : ""}
                      {knowledge.knowledge && knowledge.experience ? " et" : ""}
                      {knowledge.experience ? " Expérience" : ""}
                      {!knowledge.knowledge && !knowledge.experience ? " Aucune connaissance ni expérience" : ""}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Profil de Risque</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-4">
            <div>
              <dt className="font-medium">Âge</dt>
              <dd>{answers.profilRisque.age}</dd>
            </div>
            <div>
              <dt className="font-medium">Réaction à une chute des marchés</dt>
              <dd>{answers.profilRisque.marketDropReaction}</dd>
            </div>
            <div>
              <dt className="font-medium">Risque vs Rendement</dt>
              <dd>{answers.profilRisque.riskVsReturn}</dd>
            </div>
            <div>
              <dt className="font-medium">Horizon de placement</dt>
              <dd>{answers.profilRisque.investmentHorizon}</dd>
            </div>
            <div>
              <dt className="font-medium">Importance de la liquidité</dt>
              <dd>{answers.profilRisque.liquidityImportance}</dd>
            </div>
            <div>
              <dt className="font-medium">Objectifs de placement</dt>
              <dd>{answers.profilRisque.investmentObjectives.join(", ")}</dd>
            </div>
            <div>
              <dt className="font-medium">Perception du risque</dt>
              <dd>{answers.profilRisque.riskPerception}</dd>
            </div>
            <div>
              <dt className="font-medium">Profil de risque</dt>
              <dd>{answers.profilRisque.riskProfile}</dd>
            </div>
            <div>
              <dt className="font-medium">Expérience des pertes passées</dt>
              <dd>{answers.profilRisque.pastLosses}</dd>
            </div>
            <div>
              <dt className="font-medium">Fréquence de suivi des placements</dt>
              <dd>{answers.profilRisque.monitoringFrequency}</dd>
            </div>
            <div>
              <dt className="font-medium">Pourcentage du patrimoine concerné</dt>
              <dd>{answers.profilRisque.portfolioPercentage}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="border-l-4 border-[#d5bb5d] pl-2">Capacité à Subir des Pertes</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-4">
            <div>
              <dt className="font-medium">Variation annuelle acceptable</dt>
              <dd>{answers.capacitePertes.acceptableVariation}</dd>
            </div>
            <div>
              <dt className="font-medium">Capacité à supporter des pertes</dt>
              <dd>{answers.capacitePertes.lossCapacity}</dd>
            </div>
            <div>
              <dt className="font-medium">Situation financière globale</dt>
              <dd>{answers.capacitePertes.financialSituation}</dd>
            </div>
            <div>
              <dt className="font-medium">Scénario de risque 1</dt>
              <dd>{answers.capacitePertes.riskScenario1}</dd>
            </div>
            <div>
              <dt className="font-medium">Scénario de risque 2</dt>
              <dd>{answers.capacitePertes.riskScenario2}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  )
}

