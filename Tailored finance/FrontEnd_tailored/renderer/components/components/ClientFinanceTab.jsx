'use client'
import { Button } from '../ui/button'

export default function ClientFinance({
  handleNextTab,
  activeTab,
  client,
  isEditing
}) {
  const { pmiesg, produit_epargne, autre_impots_acquittes } = client

  return (
    <div className="space-y-6">
      {/* PMI ESG Section */}
      <h2 className="text-customBLUE text-lg font-bold">ESG</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label
            className="text-customBLUE text-sm font-medium"
            htmlFor="objectif_env_dur_social_souhaite">
            Objectif Environnemental Durable Social Souhaité (%)
          </label>
          <input
            type="number"
            id="objectif_env_dur_social_souhaite"
            className="form-input border p-2"
            value={pmiesg?.objectif_env_dur_social_souhaite || ''}
            disabled={!isEditing}
          />
        </div>

        <div className="flex flex-col">
          <label
            className="text-customBLUE text-sm font-medium"
            htmlFor="patrimoine">
            Patrimoine (€)
          </label>
          <input
            type="number"
            id="patrimoine"
            className="form-input border p-2"
            value={pmiesg?.patrimoine || ''}
            disabled={!isEditing}
          />
        </div>
      </div>

      {/* Produits d'Épargne Section */}
      <h3 className="text-md text-customBLUE font-bold">Produits d'Épargne</h3>
      <table className="w-full table-auto rounded-lg border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-sm font-medium">
            <th className="p-2 text-left">Mode de Gestion</th>
            <th className="p-2 text-left">Est Actuel</th>
            <th className="p-2 text-left">Propriétaire</th>
          </tr>
        </thead>
        <tbody>
          {produit_epargne?.map((item, index) => (
            <tr
              key={index}
              className="border-t text-sm">
              <td className="p-2">
                <input
                  type="text"
                  className="w-full border p-2"
                  value={item.mode_gestion}
                  disabled={!isEditing}
                />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  className="w-full border p-2"
                  value={item.est_actuel ? 'Oui' : 'Non'}
                  disabled={!isEditing}
                />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  className="w-full border p-2"
                  value={item.proprietaire}
                  disabled={!isEditing}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Autres Impôts Acquittés Section */}
      <h2 className="text-customBLUE text-lg font-bold">
        Autres Impôts Acquittés
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        {autre_impots_acquittes?.map((impot, index) => (
          <li
            key={index}
            className="flex justify-between">
            <span>{impot}</span>
          </li>
        ))}
      </ul>

      {/* Navigation Button */}
      <div className="flex items-end justify-end">
        <Button
          onClick={handleNextTab}
          disabled={activeTab === 'patrimoine'}
          className="bg-customGold">
          Suivant
        </Button>
      </div>
    </div>
  )
}
