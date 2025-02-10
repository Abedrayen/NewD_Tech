'use client'
import { Button } from '../ui/button'

export default function ClientGeneral({
  handleNextTab,
  activeTab,
  client,
  isEditing
}) {
  const { conjoint, enfants, personnes_a_charge } = client

  return (
    <div className="space-y-6">
      <h1 className="text-customBLUE text-lg font-bold">Client</h1>

      <div className="grid grid-cols-2 gap-4">
        {/* Client General Inputs */}
        <div className="flex flex-col">
          <label
            htmlFor="nom"
            className="text-customBLUE text-sm font-medium">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            placeholder="Nom"
            className="form-input border p-2"
            value={client.nom}
            disabled={!isEditing}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="prenom"
            className="text-customBLUE text-sm font-medium">
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            placeholder="Prénom"
            className="form-input border p-2"
            value={client.prenom}
            disabled={!isEditing}
          />
        </div>
      </div>

      <h1 className="text-customBLUE text-lg font-bold">Enfants</h1>

      <table className="w-full table-auto rounded-lg border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-sm font-medium">
            <th className="p-2 text-left">Nom</th>
            <th className="p-2 text-left">Date de Naissance</th>
            <th className="p-2 text-left">Statut</th>
            <th className="p-2 text-left">Remarques</th>
          </tr>
        </thead>
        <tbody>
          {enfants.map((enfant, index) => (
            <tr
              key={index}
              className="border-t text-sm">
              <td className="p-2">
                <input
                  type="text"
                  className="w-full border p-2"
                  value={enfant.nom}
                  disabled={!isEditing}
                />
              </td>
              <td className="p-2">
                <input
                  type="date"
                  className="w-full border p-2"
                  value={enfant.date_naissance.split('T')[0]}
                  disabled={!isEditing}
                />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  className="w-full border p-2"
                  value={enfant.status}
                  disabled={!isEditing}
                />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  className="w-full border p-2"
                  value={enfant.remarques}
                  disabled={!isEditing}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-customBLUE text-lg font-bold">
        Autres personnes en charge
      </h1>

      <table className="w-full table-auto rounded-lg border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-sm font-medium">
            <th className="p-2 text-left">Nom</th>
            <th className="p-2 text-left">Prénom</th>
          </tr>
        </thead>
        <tbody>
          {personnes_a_charge.map((personne, index) => (
            <tr
              key={index}
              className="border-t text-sm">
              <td className="p-2">
                <input
                  type="text"
                  className="w-full border p-2"
                  value={personne.nom}
                  disabled={!isEditing}
                />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  className="w-full border p-2"
                  value={personne.prenom}
                  disabled={!isEditing}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end">
        <Button
          className="bg-customGold"
          onClick={handleNextTab}
          disabled={activeTab === 'patrimoine'}>
          Suivant
        </Button>
      </div>
    </div>
  )
}
