import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PersonalInfoProps {
  answers: any
  onNext: (data: any) => void
}

export default function PersonalInfo({ answers, onNext }: PersonalInfoProps) {
  const [personalInfo, setPersonalInfo] = useState(answers)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPersonalInfo((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    onNext({ personalInfo })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight border-l-4 border-[#d5bb5d] pl-2">
          Informations Personnelles
        </h2>
        <p className="text-muted-foreground ">
          Veuillez fournir vos informations personnelles
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="clientName">Nom du client</Label>
            <Input
              id="clientName"
              name="clientName"
              value={personalInfo.clientName}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="clientFirstName">Prénom du client</Label>
            <Input
              id="clientFirstName"
              name="clientFirstName"
              value={personalInfo.clientFirstName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="clientAddress">Adresse du client</Label>
          <Input
            id="clientAddress"
            name="clientAddress"
            value={personalInfo.clientAddress}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="clientEmail">Email du client</Label>
          <Input
            id="clientEmail"
            name="clientEmail"
            type="email"
            value={personalInfo.clientEmail}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="advisorName">Nom du conseiller</Label>
            <Input
              id="advisorName"
              name="advisorName"
              value={personalInfo.advisorName}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="advisorFirstName">Prénom du conseiller</Label>
            <Input
              id="advisorFirstName"
              name="advisorFirstName"
              value={personalInfo.advisorFirstName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="advisorCompany">Société du conseiller</Label>
          <Input
            id="advisorCompany"
            name="advisorCompany"
            value={personalInfo.advisorCompany}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleNext} size="lg">
          Suivant
        </Button>
      </div>
    </div>
  )
}

