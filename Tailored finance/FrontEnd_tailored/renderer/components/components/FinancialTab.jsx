import { useState } from 'react'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'
export default function FinancialTab({
  state,
  dispatch,
  handleNextTab,
  activeTab
}) {
  const [newProduit, setNewProduit] = useState({
    mode_gestion: '',
    est_actuel: true,
    proprietaire: ''
  })

  const [newImpots, setNewImpots] = useState('')
  
  const addProduit = () => {
    if (newProduit.mode_gestion) {
      dispatch({ type: 'ADD_ITEM', field: 'produit_epargne', item: newProduit })
      setNewProduit({ mode_gestion: '', est_actuel: true, proprietaire: '' })
    } else {
      alert('Please fill in all required fields.')
    }
  }

  const removeProduit = index => {
    dispatch({ type: 'REMOVE_ITEM', field: 'produit_epargne', index })
  }

  const addImpot = () => {
    if (newImpots) {
      dispatch({
        type: 'ADD_ITEM',
        field: 'autre_impots_acquittes',
        item: newImpots
      })
      setNewImpots('')
    } else {
      alert('Please enter a valid tax.')
    }
  }

  const removeImpot = index => {
    dispatch({ type: 'REMOVE_ITEM', field: 'autre_impots_acquittes', index })
  }

  return (
    <div className="space-y-6 overflow-y-auto p-4">
      {/* <form className="space-y-6"> */}
      {/* PMIESG Section */}
      <h2 className="text-customBLUE text-lg font-bold">ESG</h2>
      <div className="grid grid-cols-2 gap-4">
        <label
          className="text-customBLUE text-sm font-medium"
          htmlFor="objec²tif_env_dur_social_souhaite">
          Objectif Environnemental Durable Social Souhaité (%)
        </label>
        <input
          type="number"
          id="objectif_env_dur_social_souhaite"
          className="form-input border"
          value={state.pmiesg.objectif_env_dur_social_souhaite}
          onChange={e =>
            dispatch({
              type: 'UPDATE_NESTED_FIELD',
              parentField: 'pmiesg',
              field: 'objectif_env_dur_social_souhaite',
              value: e.target.value
            })
          }
        />

        <label
          className="text-customBLUE text-sm font-medium"
          htmlFor="patrimoine">
          Patrimoine (€)
        </label>
        <input
          type="number"
          id="patrimoine"
          className="form-input border"
          value={state.pmiesg.patrimoine}
          onChange={e =>
            dispatch({
              type: 'UPDATE_NESTED_FIELD',
              parentField: 'pmiesg',
              field: 'patrimoine',
              value: e.target.value
            })
          }
        />
      </div>

      {/* Produits Epargne Section */}
      <h2 className="text-customBLUE text-lg font-bold">Produits d'Épargne</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Mode de Gestion"
            className="form-input border p-2"
            value={newProduit.mode_gestion}
            onChange={e =>
              setNewProduit({ ...newProduit, mode_gestion: e.target.value })
            }
          />
          <select
            className="form-input border p-2"
            value={newProduit.est_actuel}
            onChange={e =>
              setNewProduit({
                ...newProduit,
                est_actuel: e.target.value === 'true'
              })
            }>
            <option value="true">Actuel</option>
            <option value="false">Non Actuel</option>
          </select>
          <select
            className="form-input border p-2"
            value={newProduit.proprietaire}
            onChange={e =>
              setNewProduit({ ...newProduit, proprietaire: e.target.value })
            }>
            <option value="Self">Self</option>
            <option value="conjoint">Conjoint</option>
            <option value="commun">Commun</option>
            <option value="enfant">Enfant</option>
          </select>
        </div>
        <button
          type="button"
          className="bg-customGold rounded-md px-4 py-2 text-white"
          onClick={addProduit}>
          Ajouter Produit
        </button>
      </div>

      <div className="mt-6 space-y-4">
        <h3 className="text-md text-customBLUE font-bold">
          Produits d'Épargne Ajoutés
        </h3>
        <table className="w-full table-auto rounded-lg border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-sm font-medium">
              <th className="p-2 text-left">Mode de Gestion</th>
              <th className="p-2 text-left">Est Actuel</th>
              <th className="p-2 text-left">Propriétaire</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.produit_epargne.map((item, index) => (
              <tr
                key={index}
                className="border-t text-sm">
                <td className="p-2">{item.mode_gestion}</td>
                <td className="p-2">{item.est_actuel ? 'Oui' : 'Non'}</td>
                <td className="p-2">{item.proprietaire}</td>
                <td className="flex justify-center space-x-2 p-2">
                  <button
                    className="text-red-600"
                    onClick={() => removeProduit(index)}>
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Autres Impôts Section */}
      <h2 className="text-customBLUE text-lg font-bold">
        Autres Impôts Acquittés
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Ajouter un Impôt"
            className="form-input border p-2"
            value={newImpots}
            onChange={e => setNewImpots(e.target.value)}
          />
          <button
            type="button"
            className="bg-customGold rounded-md px-4 py-2 text-white"
            onClick={addImpot}>
            Ajouter
          </button>
        </div>
        <ul className="list-disc pl-6">
          {state.autre_impots_acquittes.map((impot, index) => (
            <li
              key={index}
              className="flex justify-between">
              <span>{impot}</span>
              <button
                className="text-red-600"
                onClick={() => removeImpot(index)}>
                <Trash2 size={18} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-end justify-end">
        <Button
          onClick={handleNextTab}
          disabled={activeTab === 'revenues'}>
          Suivant
        </Button>
      </div>
      {/* </form> */}
    </div>
  )
}
