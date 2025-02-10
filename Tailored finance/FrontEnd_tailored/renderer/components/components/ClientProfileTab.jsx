'use client'
import { Button } from '../ui/button'

export default function ClientProfile({
  handleNextTab,
  activeTab,
  client,
  isEditing
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-customBLUE text-lg font-bold">Profil Client</h2>
      
      {/* Objectifs Clients Section */}
      <h2 className="text-customBLUE text-lg font-bold">Objectifs Clients</h2>

      {/* Objectifs Clients Table */}
      <div className="mt-6 space-y-4">
        <h3 className="text-md text-customBLUE font-bold">
          Objectifs Clients Ajoutés
        </h3>
        <table className="w-full table-auto rounded-lg border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-sm font-medium">
              <th className="p-2 text-left">Objectif</th>
              <th className="p-2 text-left">Priorité</th>
              <th className="p-2 text-left">Horizon</th>
              <th className="p-2 text-left">Statut</th>
            </tr>
          </thead>
          <tbody>
            {client.objectif_clients?.map((item, index) => (
              <tr
                key={index}
                className="border-t text-sm">
                <td className="p-2">
                  <input
                    type="text"
                    className="w-full border p-2"
                    value={item.objectif}
                    disabled={!isEditing}
                  />
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    className="w-full border p-2"
                    value={item.priorite}
                    disabled={!isEditing}
                  />
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    className="w-full border p-2"
                    value={item.horizon}
                    disabled={!isEditing}
                  />
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    className="w-full border p-2"
                    value={item.status}
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
          disabled={activeTab === 'profil'}>
          Suivant
        </Button>
      </div>
    </div>
  )
}
