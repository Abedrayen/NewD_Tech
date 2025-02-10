'use client'
import { Button } from '../ui/button'

export default function ClientRevenus({ handleNextTab, activeTab, client, isEditing }) {
  const { revenus, passif } = client
  return (
    <div className="space-y-6">
      <h2 className="text-customBLUE text-lg font-bold">Revenus</h2>

      {/* Revenus Table */}
      <div className="mt-6 space-y-4">
        <h3 className="text-md text-customBLUE font-bold">Revenus ajoutés</h3>
        <table className="w-full table-auto rounded-lg border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-sm font-medium">
              <td className="p-2 text-left">
                <input
                  className="w-full p-2 border"
                  type="text"
                  value="Montant"
                  disabled
                />
              </td>
              <td className="p-2 text-left">
                <input
                  className="w-full p-2 border"
                  type="text"
                  value="Nature"
                  disabled
                />
              </td>
              <td className="p-2 text-left">
                <input
                  className="w-full p-2 border"
                  type="text"
                  value="Fréquence"
                  disabled
                />
              </td>
              <td className="p-2 text-left">
                <input
                  className="w-full p-2 border"
                  type="text"
                  value="Hors France"
                  disabled
                />
              </td>
              <td className="p-2 text-left">
                <input
                  className="w-full p-2 border"
                  type="text"
                  value="Remarques"
                  disabled
                />
              </td>
            </tr>
          </thead>
          <tbody>
            {revenus.map((revenu, index) => (
              <tr key={index} className="border-t text-sm">
                <td className="p-2">
                  <input
                    className="w-full p-2 border"
                    type="text"
                    value={revenu.montant}
                    disabled={!isEditing}
                  />
                </td>
                <td className="p-2">
                  <input
                    className="w-full p-2 border"
                    type="text"
                    value={revenu.nature}
                    disabled={!isEditing}
                  />
                </td>
                <td className="p-2">
                  <input
                    className="w-full p-2 border"
                    type="text"
                    value={revenu.frequence}
                    disabled={!isEditing}
                  />
                </td>
                <td className="p-2">
                  <input
                    className="w-full p-2 border"
                    type="text"
                    value={revenu.hors_france ? 'oui' : 'non'}
                    disabled={!isEditing}
                  />
                </td>
                <td className="p-2">
                  <input
                    className="w-full p-2 border"
                    type="text"
                    value={revenu.remarques}
                    disabled={!isEditing}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <h2 className="text-customBLUE text-lg font-bold">
        Passif - Dettes et Crédits
      </h2>

      {/* Passif Table */}
      <div className="mt-6 space-y-4">
        <h3 className="text-md text-customBLUE font-bold">Passif ajouté</h3>
        <table className="w-full table-auto rounded-lg border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-sm font-medium">
              <td className="p-2 text-left">
                <input
                  className="w-full p-2 border"
                  type="text"
                  value="Nature"
                  disabled
                />
              </td>
              <td className="p-2 text-left">
                <input
                  className="w-full p-2 border"
                  type="text"
                  value="Capital Restant Dû"
                  disabled
                />
              </td>
              <td className="p-2 text-left">
                <input
                  className="w-full p-2 border"
                  type="text"
                  value="Remboursement Mensuel"
                  disabled
                />
              </td>
              <td className="p-2 text-left">
                <input
                  className="w-full p-2 border"
                  type="text"
                  value="Durée Restante"
                  disabled
                />
              </td>
              <td className="p-2 text-left">
                <input
                  className="w-full p-2 border"
                  type="text"
                  value="Propriétaire"
                  disabled
                />
              </td>
            </tr>
          </thead>
          <tbody>
            {passif?.map((item, index) => (
              <tr key={index} className="border-t text-sm">
                <td className="p-2">
                  <input
                    className="w-full p-2 border"
                    type="text"
                    value={item.nature}
                    disabled={!isEditing}
                  />
                </td>
                <td className="p-2">
                  <input
                    className="w-full p-2 border"
                    type="text"
                    value={item.capital_restant_du}
                    disabled={!isEditing}
                  />
                </td>
                <td className="p-2">
                  <input
                    className="w-full p-2 border"
                    type="text"
                    value={item.remboursement_mensuel}
                    disabled={!isEditing}
                  />
                </td>
                <td className="p-2">
                  <input
                    className="w-full p-2 border"
                    type="text"
                    value={item.duree_restante}
                    disabled={!isEditing}
                  />
                </td>
                <td className="p-2">
                  <input
                    className="w-full p-2 border"
                    type="text"
                    value={item.proprietaire}
                    disabled={!isEditing}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
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
