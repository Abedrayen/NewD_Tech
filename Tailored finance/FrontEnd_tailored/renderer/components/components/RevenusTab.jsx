'use client'

import { React, useState, useReducer } from 'react'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
export default function RevenusTab({
  state,
  dispatch,
  handleNextTab,
  activeTab
}) {
  const [newImmobilier, setNewImmobilier] = useState({
    localisation: '',
    valeur_indicative: '',
    depuis_quand: '',
    proprietaire: ''
  })

  const addImmobilier = () => {
    if (
      newImmobilier.localisation &&
      newImmobilier.valeur_indicative &&
      newImmobilier.depuis_quand &&
      newImmobilier.proprietaire
    ) {
      dispatch({ type: 'ADD_IMMOBILIER', immobilier: newImmobilier })
      setNewImmobilier({
        localisation: '',
        valeur_indicative: '',
        depuis_quand: '',
        proprietaire: 'Self'
      })
    } else {
      alert('Please fill in all required fields.')
    }
  }
  const [passif, setPassif] = useState([])

  const [newPassif, setNewPassif] = useState({
    nature: '',
    capital_restant_du: '',
    remboursement_mensuel: '',
    duree_restante: '',
    proprietaire: ''
  })

  const addPassif = () => {
    setPassif([...passif, { ...newPassif, id: passif.length + 1 }])
    setNewPassif({
      nature: '',
      capital_restant_du: '',
      remboursement_mensuel: '',
      duree_restante: '',
      proprietaire
    })
  }

  const removePassif = id => {
    setPassif(passif.filter(item => item.id !== id))
  }
  const [revenus, setRevenus] = useState([])

  const [newRevenu, setNewRevenu] = useState({
    montant: '',
    nature: 'Salaire',
    frequence: 'Mensuel',
    hors_france: false,
    remarques: ''
  })

  const addRevenu = () => {
    if (newRevenu.montant && newRevenu.nature && newRevenu.frequence) {
      dispatch({ type: 'ADD_REVENU', revenu: newRevenu })
      setNewRevenu({
        montant: '',
        nature: '',
        frequence: '',
        hors_france: false,
        remarques: ''
      })
    } else {
      alert('Please fill in all required fields.')
    }
  }
  const removeRevenu = id => {
    setRevenus(revenus.filter(revenu => revenu.id !== id))
  }
  const router = useRouter()
  const [children, setChildren] = useState([])

  return (
    <div className="overflow-y-auto p-4">
      <form
        className="space-y-6">
        {/* Revenus */}
        <h2 className="text-customBLUE text-lg font-bold">Revenus</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="montant"
                className="text-customBLUE text-sm font-medium">
                Montant
              </label>
              <input
                id="montant"
                type="text"
                className="form-input border p-2"
                value={newRevenu.montant}
                onChange={e =>
                  setNewRevenu({ ...newRevenu, montant: e.target.value })
                }
                placeholder="Montant du revenu"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="nature"
                className="text-customBLUE text-sm font-medium">
                Nature
              </label>
              <input
                id="nature"
                type="text"
                className="form-input border p-2"
                value={newRevenu.nature}
                onChange={e =>
                  setNewRevenu({ ...newRevenu, nature: e.target.value })
                }
                placeholder="Type de revenu"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="frequence"
                className="text-customBLUE text-sm font-medium">
                Fréquence
              </label>
              <input
                id="frequence"
                type="text"
                className="form-input border p-2"
                value={newRevenu.frequence}
                onChange={e =>
                  setNewRevenu({ ...newRevenu, frequence: e.target.value })
                }
                placeholder="Fréquence (mensuel, annuel)"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="hors_france"
                className="text-customBLUE text-sm font-medium">
                Hors France
              </label>
              <select
                id="hors_france"
                className="form-input border p-2"
                value={newRevenu.hors_france}
                onChange={e =>
                  setNewRevenu({
                    ...newRevenu,
                    hors_france: e.target.value === 'true'
                  })
                }>
                <option value={false}>Non</option>
                <option value={true}>Oui</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="remarques"
              className="text-customBLUE text-sm font-medium">
              Remarques
            </label>
            <textarea
              id="remarques"
              className="form-input border p-2"
              value={newRevenu.remarques}
              onChange={e =>
                setNewRevenu({ ...newRevenu, remarques: e.target.value })
              }
              placeholder="Ajoutez des remarques supplémentaires"
              rows={3}
            />
          </div>
          <button
            type="button"
            className="bg-customGold rounded-md px-4 py-2 text-white"
            onClick={addRevenu}>
            Ajouter
          </button>
        </div>

        {/* Revenus Table */}
        <div className="mt-6 space-y-4">
          <h3 className="text-md text-customBLUE font-bold">Revenus ajoutés</h3>
          <table className="w-full table-auto rounded-lg border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-sm font-medium">
                <th className="p-2 text-left">Montant</th>
                <th className="p-2 text-left">Nature</th>
                <th className="p-2 text-left">Fréquence</th>
                <th className="p-2 text-left">Hors France</th>
                <th className="p-2 text-left">Remarques</th>
                <th className="p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {state.revenus.map((revenu, index) => (
                <tr
                  key={index}
                  className="border-t text-sm">
                  <td className="p-2">{revenu.montant}</td>
                  <td className="p-2">{revenu.nature}</td>
                  <td className="p-2">{revenu.frequence}</td>
                  <td className="p-2">{revenu.hors_france ? 'Oui' : 'Non'}</td>
                  <td className="p-2">{revenu.remarques}</td>
                  <td className="flex justify-center space-x-2 p-2">
                    <button
                      className="text-red-600"
                      onClick={() =>
                        dispatch({ type: 'REMOVE_REVENU', index })
                      }>
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-customBLUE text-lg font-bold">
          Passif - Dettes et Crédits
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="nature"
                className="text-customBLUE text-sm font-medium">
                Nature du passif
              </label>
              <input
                id="nature"
                type="text"
                className="form-input border p-2"
                placeholder="Nature du passif (ex. prêt immobilier)"
                value={newPassif.nature}
                onChange={e =>
                  setNewPassif({ ...newPassif, nature: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="capital_restant_du"
                className="text-customBLUE text-sm font-medium">
                Capital restant dû
              </label>
              <input
                id="capital_restant_du"
                type="text"
                className="form-input border p-2"
                placeholder="Montant restant dû"
                value={newPassif.capital_restant_du}
                onChange={e =>
                  setNewPassif({
                    ...newPassif,
                    capital_restant_du: e.target.value
                  })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="remboursement_mensuel"
                className="text-customBLUE text-sm font-medium">
                Remboursement Mensuel
              </label>
              <input
                id="remboursement_mensuel"
                type="text"
                className="form-input border p-2"
                placeholder="Montant mensuel"
                value={newPassif.remboursement_mensuel}
                onChange={e =>
                  setNewPassif({
                    ...newPassif,
                    remboursement_mensuel: e.target.value
                  })
                }
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="duree_restante"
                className="text-customBLUE text-sm font-medium">
                Durée Restante
              </label>
              <input
                id="duree_restante"
                type="text"
                className="form-input border p-2"
                placeholder="Durée restante (en années ou mois)"
                value={newPassif.duree_restante}
                onChange={e =>
                  setNewPassif({ ...newPassif, duree_restante: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="proprietaire"
                className="text-customBLUE text-sm font-medium">
                Propriétaire
              </label>
              <select
                defaultValue="self"
                id="proprietaire"
                className="form-input border p-2"
                value={newImmobilier.proprietaire}
                onChange={e =>
                  setNewImmobilier({
                    ...newImmobilier,
                    proprietaire: e.target.value
                  })
                }>
                <option value="self">Self</option>
                <option value="conjoint">Conjoint</option>
                <option value="enfant">Enfant</option>
                <option value="commun">Commun</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            className="bg-customGold rounded-md px-4 py-2 text-white"
            onClick={addPassif}>
            Ajouter
          </button>
        </div>

        {/* Passif Table */}
        <div className="mt-6 space-y-4">
          <h3 className="text-md text-customBLUE font-bold">Passif ajouté</h3>
          <table className="w-full table-auto rounded-lg border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-sm font-medium">
                <th className="p-2 text-left">Nature</th>
                <th className="p-2 text-left">Capital Restant Dû</th>
                <th className="p-2 text-left">Remboursement Mensuel</th>
                <th className="p-2 text-left">Durée Restante</th>
                <th className="p-2 text-left">Propriétaire</th>
                <th className="p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {passif.map(item => (
                <tr
                  key={item.id}
                  className="border-t text-sm">
                  <td className="p-2">{item.nature}</td>
                  <td className="p-2">{item.capital_restant_du}</td>
                  <td className="p-2">{item.remboursement_mensuel}</td>
                  <td className="p-2">{item.duree_restante}</td>
                  <td className="p-2">{item.proprietaire}</td>
                  <td className="flex justify-center space-x-2 p-2">
                    <button
                      className="text-red-600"
                      onClick={() => removePassif(item.id)}>
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Immobilier Section */}
        {/* <h2 className="text-customBLUE text-lg font-bold">Immobilier</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="localisation"
                className="text-customBLUE text-sm font-medium">
                Localisation
              </label>
              <input
                id="localisation"
                type="text"
                className="form-input border p-2"
                value={newImmobilier.localisation}
                onChange={e =>
                  setNewImmobilier({
                    ...newImmobilier,
                    localisation: e.target.value
                  })
                }
                placeholder="Ex: Paris, France"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="valeur_indicative"
                className="text-customBLUE text-sm font-medium">
                Valeur Indicative (€)
              </label>
              <input
                id="valeur_indicative"
                type="number"
                className="form-input border p-2"
                value={newImmobilier.valeur_indicative}
                onChange={e =>
                  setNewImmobilier({
                    ...newImmobilier,
                    valeur_indicative: e.target.value
                  })
                }
                placeholder="Ex: 350000"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="depuis_quand"
                className="text-customBLUE text-sm font-medium">
                Depuis Quand
              </label>
              <input
                id="depuis_quand"
                type="date"
                className="form-input border p-2"
                value={newImmobilier.depuis_quand}
                onChange={e =>
                  setNewImmobilier({
                    ...newImmobilier,
                    depuis_quand: e.target.value
                  })
                }
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="proprietaire"
                className="text-customBLUE text-sm font-medium">
                Propriétaire
              </label>
              <select
                defaultValue="self"
                id="proprietaire"
                className="form-input border p-2"
                value={newImmobilier.proprietaire}
                onChange={e =>
                  setNewImmobilier({
                    ...newImmobilier,
                    proprietaire: e.target.value
                  })
                }>
                <option value="self">Self</option>
                <option value="conjoint">Conjoint</option>
                <option value="enfant">Enfant</option>
                <option value="commun">Commun</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            className="bg-customGold rounded-md px-4 py-2 text-white"
            onClick={addImmobilier}>
            Ajouter
          </button>
        </div> */}

        {/* Immobilier Table */}
        {/* <div className="mt-6 space-y-4">
          <h3 className="text-md text-customBLUE font-bold">
            Immobilier Ajouté
          </h3>
          <table className="w-full table-auto rounded-lg border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-sm font-medium">
                <th className="p-2 text-left">Localisation</th>
                <th className="p-2 text-left">Valeur Indicative (€)</th>
                <th className="p-2 text-left">Depuis Quand</th>
                <th className="p-2 text-left">Propriétaire</th>
                <th className="p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {state.immobilier.map((item, index) => (
                <tr
                  key={index}
                  className="border-t text-sm">
                  <td className="p-2">{item.localisation}</td>
                  <td className="p-2">{item.valeur_indicative}</td>
                  <td className="p-2">{item.depuis_quand}</td>
                  <td className="p-2">{item.proprietaire}</td>
                  <td className="flex justify-center space-x-2 p-2">
                    <button
                      className="text-red-600"
                      onClick={() =>
                        dispatch({ type: 'REMOVE_IMMOBILIER', index })
                      }>
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
        <div className="flex items-end justify-end">
          <Button onClick={handleNextTab}>Suivant</Button>
        </div>
      </form>
    </div>
  )
}
