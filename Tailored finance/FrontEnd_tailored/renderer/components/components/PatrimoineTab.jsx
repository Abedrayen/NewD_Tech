'use client'

import { React, useState, useReducer } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { createClient } from '@/Apis/clientApi'
import { resetClient } from '@/slices/clientSlice'
export default function PatrimoneTab({
  state,
  dispatch,
  handleNextTab,
  activeTab
}) {
  const [hasImmobilier, setHasImmobilier] = useState(false)
  const [hasautreBien, setHasAutreBien] = useState(false)
  const [hasautreEmprunts, setHasAutreEmprunts] = useState(false)
  const [hasProjets, setHasProjets] = useState(false)
  const [hasLiquidite, setHasLiquidite] = useState(false)
  const [hasPlacementFinancier, setHasPlacementFinancier] = useState(false)
  const [hasAutre, setHasAutre] = useState(false)
  const [hasProfessionnel, setHasProfessionnel] = useState(false)
  const [newAutreBien, setNewAutreBien] = useState({
    biens: '',
    valeurAchat: '',
    valeurActuelle: '',
    emprunt: '',
    dateFin: '',
    mensualite: '',
    loyer: '',
    rapportLocatif: '',
    dateAcq: '',
    estimation: '',
    taux: '',
    restant: '',
    rentabilite: ''
  })
  const [newImmobilier, setNewImmobilier] = useState({
    localisation: '',
    valeur: '',
    emprunt: '',
    dateFin: '',
    mensualite: '',
    dateAcq: '',
    estimation: '',
    restant: '',
    taux: '',
    duree: ''
  })
  const [newAutreEmprunts, setNewAutreEmprunts] = useState({
    destination: '',
    montant: '',
    taux: '',
    dateFin: '',
    mensualite: '',
    commentaires: '',
    restant: ''
  })
  const [newProjet, setNewProjet] = useState({
    type: '',
    valeurAchat: '',
    emprunt: '',
    dateFin: '',
    mensualite: '',
    loyer: '',
    rapportLocatif: '',
    taux: '',
    duree: '',
    rentabilite: ''
  })
  const [newPlacementFinancier, setNewPlacementFinancier] = useState({
    nom: '',
    valeur: '',
    rentabilite: '',
    risque: '',
    disponible: '',
    gestionnaire: '',
    gestion: '',
    objectif: '',
    dateOuverture: '',
    organisme: '',
    support: '',
    satisfait: ''
  })
  const [newLiquidite, setNewLiquidite] = useState({
    nom: '',
    valeur: '',
    rentabilite: '',
    risque: '',
    disponible: '',
    gestionnaire: '',
    gestion: '',
    objectif: '',
    dateOuverture: '',
    organisme: '',
    support: '',
    satisfait: ''
  })
  const [newAutre, setNewAutre] = useState({
    nom: '',
    valeur: '',
    rentabilite: '',
    risque: '',
    disponible: '',
    gestionnaire: '',
    gestion: '',
    objectif: '',
    dateOuverture: '',
    organisme: '',
    support: '',
    satisfait: ''
  })
  const [newProfessionnel, setNewProfessionnel] = useState({
    formeJuridique: '',
    nombreAssocie: '',
    detention: '',
    dateCreation: '',
    valorisation: '',
    passif: '',
    tresorerie: '',
    CA: '',
    benefice: '',
    activite: ''
  })
  const addImmobilier = () => {
    console.log(newImmobilier)

    dispatch({ type: 'ADD_IMMOBILIER', immobilier: newImmobilier })
    setNewImmobilier({
      localisation: '',
      valeur: '',
      emprunt: '',
      dateFin: '',
      mensualite: '',
      dateAcq: '',
      estimation: '',
      restant: '',
      taux: '',
      duree: ''
    })
  }
  const addAutreBien = () => {
    console.log(newAutreBien)
    dispatch({ type: 'ADD_AUTREBIEN', autreBien: newAutreBien })
    setNewAutreBien({
      biens: '',
      valeurAchat: '',
      valeurActuelle: '',
      emprunt: '',
      dateFin: '',
      mensualite: '',
      loyer: '',
      rapportLocatif: '',
      dateAcq: '',
      estimation: '',
      taux: '',
      restant: '',
      rentabilite: ''
    })
  }
  const addAutreEmprunts = () => {
    console.log(newAutreEmprunts)
    dispatch({ type: 'ADD_AUTREEMPRUNTS', autreEmprunts: newAutreEmprunts })
    setNewAutreEmprunts({
      destination: '',
      montant: '',
      taux: '',
      dateFin: '',
      mensualite: '',
      commentaires: '',
      restant: ''
    })
  }
  const addProjet = () => {
    console.log(newProjet)
    dispatch({ type: 'ADD_PROJETS', projet: newProjet })
    setNewProjet({
      type: '',
      valeurAchat: '',
      emprunt: '',
      dateFin: '',
      mensualite: '',
      loyer: '',
      rapportLocatif: '',
      taux: '',
      duree: '',
      rentabilite: ''
    })
  }
  const addLiquidite = () => {
    console.log('hh', newLiquidite)
    dispatch({ type: 'ADD_LIQUIDITE', liquidite: newLiquidite })
    setNewLiquidite({
      nom: '',
      valeur: '',
      rentabilite: '',
      risque: '',
      disponible: '',
      gestionnaire: '',
      gestion: '',
      objectif: '',
      dateOuverture: '',
      organisme: '',
      support: '',
      satisfait: ''
    })
  }
  const addPlacementFinancier = () => {
    console.log(newPlacementFinancier)
    dispatch({
      type: 'ADD_PLACEMENT_FINANCIER',
      placementFinancier: newPlacementFinancier
    })
    setNewPlacementFinancier({
      nom: '',
      valeur: '',
      rentabilite: '',
      risque: '',
      disponible: '',
      gestionnaire: '',
      gestion: '',
      objectif: '',
      dateOuverture: '',
      organisme: '',
      support: '',
      satisfait: ''
    })
  }
  const addAutre = () => {
    console.log(newAutre)
    dispatch({ type: 'ADD_AUTREFINANCIER', autrePF: newAutre })
    setNewAutre({
      nom: '',
      valeur: '',
      rentabilite: '',
      risque: '',
      disponible: '',
      gestionnaire: '',
      gestion: '',
      objectif: '',
      dateOuverture: '',
      organisme: '',
      support: '',
      satisfait: ''
    })
  }
  const addProfessionnel = () => {
    console.log(newProfessionnel)
    dispatch({
      type: 'ADD_PATRIMOINE_PROFESSIONNEL',
      patrimoineProfessionnel: newProfessionnel
    })
    setNewProfessionnel({
      formeJuridique: '',
      nombreAssocie: '',
      detention: '',
      dateCreation: '',
      valorisation: '',
      passif: '',
      tresorerie: '',
      CA: '',
      benefice: '',
      activite: ''
    })
  }

  const router = useRouter()

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await createClient(state)
    if (res) {
      console.log(res)
      dispatch(resetClient())
      router.replace('/')
    } else console.log(res)
  }

  return (
    <div className="overflow-y-auto p-4">
      <form
        className="space-y-6"
        onSubmit={handleSubmit}>
        <div className="space-y-6 rounded-lg">
          <h1 className="text-customGold bg-customBLUE rounded-md p-3 text-center text-xl font-bold">
            Situation Patrimoniale
          </h1>
          {/* Question Section */}
          <h2 className="text-customBLUE text-lg font-bold"> Immobilier</h2>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="hasImmobilier"
                value="yes"
                checked={hasImmobilier === true}
                onChange={() => setHasImmobilier(true)}
              />
              <span>Oui</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="hasImmobilier"
                value="no"
                checked={hasImmobilier === false}
                onChange={() => setHasImmobilier(false)}
              />
              <span>Non</span>
            </label>
          </div>

          {/* Conditional Rendering of Immobilier Section */}
          {hasImmobilier && (
            <>
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
                      htmlFor="dateFin"
                      className="text-customBLUE text-sm font-medium">
                      Date fin
                    </label>
                    <input
                      id="dateFin"
                      type="date"
                      className="form-input border p-2"
                      value={newImmobilier.dateFin}
                      onChange={e =>
                        setNewImmobilier({
                          ...newImmobilier,
                          dateFin: e.target.value
                        })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="valeur"
                      className="text-customBLUE text-sm font-medium">
                      Valeur (€)
                    </label>
                    <input
                      id="valeur"
                      type="number"
                      className="form-input border p-2"
                      value={newImmobilier.valeur}
                      onChange={e =>
                        setNewImmobilier({
                          ...newImmobilier,
                          valeur: e.target.value
                        })
                      }
                      placeholder="Ex: 350000"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="emprunt"
                      className="text-customBLUE text-sm font-medium">
                      Emprunt (€)
                    </label>
                    <input
                      id="emprunt"
                      type="number"
                      className="form-input border p-2"
                      value={newImmobilier.emprunt}
                      onChange={e =>
                        setNewImmobilier({
                          ...newImmobilier,
                          emprunt: e.target.value
                        })
                      }
                      placeholder="Ex: 350000"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="commentaires"
                      className="text-customBLUE text-sm font-medium">
                      mensualite ou Loyer payé(€)
                    </label>
                    <input
                      id="mensualite"
                      type="number"
                      className="form-input border p-2"
                      value={newImmobilier.mensualite}
                      onChange={e =>
                        setNewImmobilier({
                          ...newImmobilier,
                          mensualite: e.target.value
                        })
                      }
                      placeholder="Ex: 350000"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="duree"
                      className="text-customBLUE text-sm font-medium">
                      Durée
                    </label>
                    <input
                      id="duree"
                      type="text"
                      className="form-input border p-2"
                      value={newImmobilier.duree}
                      onChange={e =>
                        setNewImmobilier({
                          ...newImmobilier,
                          duree: e.target.value
                        })
                      }
                      placeholder="Ex: 2 mois"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="estimation"
                      className="text-customBLUE text-sm font-medium">
                      Estimation (€)
                    </label>
                    <input
                      id="estimation"
                      type="number"
                      className="form-input border p-2"
                      value={newImmobilier.estimation}
                      onChange={e =>
                        setNewImmobilier({
                          ...newImmobilier,
                          estimation: e.target.value
                        })
                      }
                      placeholder="Ex: 300"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="dateAcq"
                      className="text-customBLUE text-sm font-medium">
                      Date Acquisation
                    </label>
                    <input
                      id="dateAcq"
                      type="date"
                      className="form-input border p-2"
                      value={newImmobilier.dateAcq}
                      onChange={e =>
                        setNewImmobilier({
                          ...newImmobilier,
                          dateAcq: e.target.value
                        })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="restant"
                      className="text-customBLUE text-sm font-medium">
                      Restant Du (€)
                    </label>
                    <input
                      id="restant"
                      type="number"
                      className="form-input border p-2"
                      value={newImmobilier.restant}
                      onChange={e =>
                        setNewImmobilier({
                          ...newImmobilier,
                          restant: e.target.value
                        })
                      }
                      placeholder="Ex: Paris, France"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="taux"
                      className="text-customBLUE text-sm font-medium">
                      taux (€)
                    </label>
                    <input
                      id="taux"
                      type="number"
                      className="form-input border p-2"
                      value={newImmobilier.taux}
                      onChange={e =>
                        setNewImmobilier({
                          ...newImmobilier,
                          taux: e.target.value
                        })
                      }
                      placeholder="Ex: 524800"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="bg-customGold rounded-md px-4 py-2 text-white"
                  onClick={addImmobilier}>
                  Ajouter
                </button>
              </div>

              {/* Immobilier Table */}
              <div className="mt-6 space-y-4">
                <h3 className="text-md text-customBLUE font-bold">
                  Immobilier Ajouté
                </h3>
                <table className="w-full table-auto rounded-lg border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100 text-center text-sm font-medium">
                      <th className="p-2 text-center">Localisation</th>
                      <th className="p-2 text-center">Valeur</th>
                      <th className="p-2 text-center">Date Fin</th>
                      <th className="p-2 text-center">Emprunt</th>
                      <th className="p-2 text-center">
                        mensualite ou Loyer payé
                      </th>
                      <th className="p-2 text-center">Date Acquisition</th>
                      <th className="p-2 text-center">Estimation</th>
                      <th className="p-2 text-center">Restant Du</th>
                      <th className="p-2 text-center">Taux</th>
                      <th className="p-2 text-center">Durée</th>
                      <th className="p-2 text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {state.immobilier.map((item, index) => (
                      <tr
                        key={index}
                        className="border-t text-center text-sm">
                        <td className="p-2">{item.localisation}</td>
                        <td className="p-2">{item.valeur}</td>
                        <td className="px-6 py-2">{item.dateFin}</td>
                        <td className="p-2">{item.emprunt}</td>
                        <td className="p-2">{item.mensualite}</td>
                        <td className="p-2">{item.dateAcq}</td>
                        <td className="p-2">{item.estimation}</td>
                        <td className="p-2">{item.restant}</td>
                        <td className="p-2">{item.taux}</td>
                        <td className="p-2">{item.duree}</td>
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
              </div>
            </>
          )}
          <h2 className="text-customBLUE text-lg font-bold">Autres Biens</h2>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="hasautreBien"
                value="yes"
                checked={hasautreBien === true}
                onChange={() => setHasAutreBien(true)}
              />
              <span>Oui</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="hasautreBien"
                value="no"
                checked={hasautreBien === false}
                onChange={() => setHasAutreBien(false)}
              />
              <span>Non</span>
            </label>
          </div>
          {hasautreBien && (
            <>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="biens"
                      className="text-customBLUE text-sm font-medium">
                      Biens
                    </label>
                    <input
                      id="biens"
                      type="text"
                      className="form-input border p-2"
                      value={newAutreBien.biens}
                      onChange={e =>
                        setNewAutreBien({
                          ...newAutreBien,
                          biens: e.target.value
                        })
                      }
                      placeholder="Ex: Paris, France"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="dateFin"
                      className="text-customBLUE text-sm font-medium">
                      Date fin
                    </label>
                    <input
                      id="dateFin"
                      type="date"
                      className="form-input border p-2"
                      value={newAutreBien.dateFin}
                      onChange={e =>
                        setNewAutreBien({
                          ...newAutreBien,
                          dateFin: e.target.value
                        })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="valeurAchat"
                      className="text-customBLUE text-sm font-medium">
                      Valeur d'achat (€)
                    </label>
                    <input
                      id="valeurAchat"
                      type="number"
                      className="form-input border p-2"
                      value={newAutreBien.valeurAchat}
                      onChange={e =>
                        setNewAutreBien({
                          ...newAutreBien,
                          valeurAchat: e.target.value
                        })
                      }
                      placeholder="Ex: 350000"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="valeurActuelle"
                      className="text-customBLUE text-sm font-medium">
                      Valeur Actuelle (€)
                    </label>
                    <input
                      id="valeurActuelle"
                      type="number"
                      className="form-input border p-2"
                      value={newAutreBien.valeurActuelle}
                      onChange={e =>
                        setNewAutreBien({
                          ...newAutreBien,
                          valeurActuelle: e.target.value
                        })
                      }
                      placeholder="Ex: 350000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="emprunt"
                      className="text-customBLUE text-sm font-medium">
                      Emprunt (€)
                    </label>
                    <input
                      id="emprunt"
                      type="number"
                      className="form-input border p-2"
                      value={newAutreBien.emprunt}
                      onChange={e =>
                        setNewAutreBien({
                          ...newAutreBien,
                          emprunt: e.target.value
                        })
                      }
                      placeholder="Ex: 350000"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="mensualite"
                      className="text-customBLUE text-sm font-medium">
                      mensualite
                    </label>
                    <input
                      id="mensualite"
                      type="number"
                      className="form-input border p-2"
                      value={newAutreBien.mensualite}
                      onChange={e =>
                        setNewAutreBien({
                          ...newAutreBien,
                          mensualite: e.target.value
                        })
                      }
                      placeholder="Ex: 350000"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="loyer"
                      className="text-customBLUE text-sm font-medium">
                      Loyer (€)
                    </label>
                    <input
                      id="loyer"
                      type="number"
                      className="form-input border p-2"
                      value={newAutreBien.loyer}
                      onChange={e =>
                        setNewAutreBien({
                          ...newAutreBien,
                          loyer: e.target.value
                        })
                      }
                      placeholder="Ex: 350000"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="rapportLocatif"
                      className="text-customBLUE text-sm font-medium">
                      Rapport Locatif
                    </label>
                    <input
                      id="rapportLocatif"
                      type="text"
                      className="form-input border p-2"
                      value={newAutreBien.rapportLocatif}
                      onChange={e =>
                        setNewAutreBien({
                          ...newAutreBien,
                          rapportLocatif: e.target.value
                        })
                      }
                      placeholder="Ex: Paris, France"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="estimation"
                      className="text-customBLUE text-sm font-medium">
                      estimation (€)
                    </label>
                    <input
                      id="estimation"
                      type="number"
                      className="form-input border p-2"
                      value={newAutreBien.estimation}
                      onChange={e =>
                        setNewAutreBien({
                          ...newAutreBien,
                          estimation: e.target.value
                        })
                      }
                      placeholder="Ex: 5000"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="dateAcq"
                      className="text-customBLUE text-sm font-medium">
                      Date d'acquisition
                    </label>
                    <input
                      id="dateAcq"
                      type="date"
                      className="form-input border p-2"
                      value={newAutreBien.dateAcq}
                      onChange={e =>
                        setNewAutreBien({
                          ...newAutreBien,
                          dateAcq: e.target.value
                        })
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="restant"
                      className="text-customBLUE text-sm font-medium">
                      Restant Du (€)
                    </label>
                    <input
                      id="restant"
                      type="number"
                      className="form-input border p-2"
                      value={newAutreBien.restant}
                      onChange={e =>
                        setNewAutreBien({
                          ...newAutreBien,
                          restant: e.target.value
                        })
                      }
                      placeholder="Ex: 5000"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="taux"
                      className="text-customBLUE text-sm font-medium">
                      Taux (€)
                    </label>
                    <input
                      id="taux"
                      type="number"
                      className="form-input border p-2"
                      value={newAutreBien.taux}
                      onChange={e =>
                        setNewAutreBien({
                          ...newAutreBien,
                          taux: e.target.value
                        })
                      }
                      placeholder="Ex: 5000"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="rentabilite"
                      className="text-customBLUE text-sm font-medium">
                      rentabilite (%)
                    </label>
                    <input
                      id="rentabilite"
                      type="number"
                      className="form-input border p-2"
                      value={newAutreBien.rentabilite}
                      onChange={e =>
                        setNewAutreBien({
                          ...newAutreBien,
                          rentabilite: e.target.value
                        })
                      }
                      placeholder="Ex: 5000"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="bg-customGold rounded-md px-4 py-2 text-white"
                  onClick={addAutreBien}>
                  Ajouter
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-md text-customBLUE font-bold">
                  Autres Biens Ajoutés
                </h3>
                <table className="w-full table-auto rounded-lg border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100 text-center text-sm font-medium">
                      <th className="p-2 text-center">Biens</th>
                      <th className="p-2 text-center">valeur d'achat</th>
                      <th className="p-2 text-center">valeur actuelle</th>
                      <th className="p-2 text-center">Date Fin</th>
                      <th className="p-2 text-center">Emprunt</th>
                      <th className="p-2 text-center">mensualite </th>
                      <th className="p-2 text-center">Loyer</th>
                      <th className="p-2 text-center">Rapport Locatif</th>
                      <th className="p-2 text-center">Date Acquisition</th>
                      <th className="p-2 text-center">Rentabilité</th>
                      <th className="p-2 text-center">Restant Du</th>
                      <th className="p-2 text-center">Taux</th>
                      <th className="p-2 text-center">Estimation</th>
                      <th className="p-2 text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {state.autreBien.map((item, index) => (
                      <tr
                        key={index}
                        className="border-t text-center text-sm">
                        <td className="p-2">{item.biens}</td>
                        <td className="p-2">{item.valeurAchat}</td>
                        <td className="p-2">{item.valeurActuelle}</td>
                        <td className="px-6 py-2">{item.dateFin}</td>
                        <td className="p-2">{item.emprunt}</td>
                        <td className="p-2">{item.mensualite}</td>
                        <td className="p-2">{item.loyer}</td>
                        <td className="p-2">{item.rapportLocatif}</td>
                        <td className="p-2">{item.dateAcq}</td>
                        <td className="p-2">{item.rentabilite}</td>
                        <td className="p-2">{item.restant}</td>
                        <td className="p-2">{item.taux}</td>
                        <td className="p-2">{item.estimation}</td>
                        <td className="flex justify-center space-x-2 p-2">
                          <button
                            className="text-red-600"
                            onClick={() =>
                              dispatch({ type: 'REMOVE_AUTREBIEN', index })
                            }>
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          <h2 className="text-customBLUE text-lg font-bold">
            {' '}
            Autres Emprunts{' '}
          </h2>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="hasautreEmprunts"
                value="yes"
                checked={hasautreEmprunts === true}
                onChange={() => setHasAutreEmprunts(true)}
              />
              <span>Oui</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="hasautreEmprunts"
                value="no"
                checked={hasautreEmprunts === false}
                onChange={() => setHasAutreEmprunts(false)}
              />
              <span>Non</span>
            </label>
          </div>
          {hasautreEmprunts && (
            <>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="destination"
                      className="text-customBLUE text-sm font-medium">
                      Destination
                    </label>
                    <input
                      id="destination"
                      type="text"
                      className="form-input border p-2"
                      value={newAutreEmprunts.destination}
                      onChange={e =>
                        setNewAutreEmprunts({
                          ...newAutreEmprunts,
                          destination: e.target.value
                        })
                      }
                      placeholder="Ex: Paris, France"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="montant"
                      className="text-customBLUE text-sm font-medium">
                      Montant (€)
                    </label>
                    <input
                      id="montant"
                      type="number"
                      className="form-input border p-2"
                      value={newAutreEmprunts.montant}
                      onChange={e =>
                        setNewAutreEmprunts({
                          ...newAutreEmprunts,
                          montant: e.target.value
                        })
                      }
                      placeholder="Ex: 350000"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="dateFin"
                      className="text-customBLUE text-sm font-medium">
                      Date fin
                    </label>
                    <input
                      id="dateFin"
                      type="date"
                      className="form-input border p-2"
                      value={newAutreEmprunts.dateFin}
                      onChange={e =>
                        setNewAutreEmprunts({
                          ...newAutreEmprunts,
                          dateFin: e.target.value
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="taux"
                      className="text-customBLUE text-sm font-medium">
                      Taux
                    </label>
                    <input
                      id="taux"
                      type="text"
                      className="form-input border p-2"
                      value={newAutreEmprunts.taux}
                      onChange={e =>
                        setNewAutreEmprunts({
                          ...newAutreEmprunts,
                          taux: e.target.value
                        })
                      }
                      placeholder="Ex: Paris, France"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="mensualite"
                      className="text-customBLUE text-sm font-medium">
                      mensualite
                    </label>
                    <input
                      id="mensualite"
                      type="number"
                      className="form-input border p-2"
                      value={newAutreEmprunts.mensualite}
                      onChange={e =>
                        setNewAutreEmprunts({
                          ...newAutreEmprunts,
                          mensualite: e.target.value
                        })
                      }
                      placeholder="Ex: 350000"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="restant"
                      className="text-customBLUE text-sm font-medium">
                      Restant
                    </label>
                    <input
                      id="restant"
                      type="number"
                      className="form-input border p-2"
                      value={newAutreEmprunts.restant}
                      onChange={e =>
                        setNewAutreEmprunts({
                          ...newAutreEmprunts,
                          restant: e.target.value
                        })
                      }
                      placeholder="Ex: 350000"
                    />
                  </div>
                  <div className="gap-4">
                    <div className="flex flex-col">
                      <label
                        htmlFor="commentaires"
                        className="text-customBLUE text-sm font-medium">
                        Commentaires
                      </label>
                      <input
                        id="commentaires"
                        type="text"
                        className="form-input border p-2"
                        value={newAutreEmprunts.commentaires}
                        onChange={e =>
                          setNewAutreEmprunts({
                            ...newAutreEmprunts,
                            commentaires: e.target.value
                          })
                        }
                        placeholder="text"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="bg-customGold rounded-md px-4 py-2 text-white"
                  onClick={addAutreEmprunts}>
                  Ajouter
                </button>
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-md text-customBLUE font-bold">
                  Autres Emprunts Ajoutés
                </h3>
                <table className="w-full table-auto rounded-lg border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100 text-center text-sm font-medium">
                      <th className="p-2 text-center">Destination</th>
                      <th className="p-2 text-center">Montant</th>
                      <th className="p-2 text-center">Date Fin</th>
                      <th className="p-2 text-center">Taux</th>
                      <th className="p-2 text-center">mensualite </th>
                      <th className="p-2 text-center">Restant</th>
                      <th className="p-2 text-center">Commentaires</th>
                      <th className="p-2 text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {state.autreEmprunts.map((item, index) => (
                      <tr
                        key={index}
                        className="text-wrap border-t text-center text-sm">
                        <td className="p-2">{item.destination}</td>
                        <td className="p-2">{item.montant}</td>
                        <td className="px-6 py-2">{item.dateFin}</td>
                        <td className="p-2">{item.taux}</td>
                        <td className="p-2">{item.mensualite}</td>
                        <td className="p-2">{item.restant}</td>
                        <td className="max-w-[250px] p-2">
                          {item.commentaires}
                        </td>
                        <td className="flex justify-center space-x-2 p-2">
                          <button
                            className="text-red-600"
                            onClick={() =>
                              dispatch({ type: 'REMOVE_AUTREEMPRUNTS', index })
                            }>
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          <h2 className="text-customBLUE text-lg font-bold"> Projets </h2>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="hasProjets"
                value="yes"
                checked={hasProjets === true}
                onChange={() => setHasProjets(true)}
              />
              <span>Oui</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="hasProjets"
                value="no"
                checked={hasProjets === false}
                onChange={() => setHasProjets(false)}
              />
              <span>Non</span>
            </label>
          </div>
          {hasProjets && (
            <>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="type"
                      className="text-customBLUE text-sm font-medium">
                      type
                    </label>
                    <select
                      id="type"
                      className="form-input border p-2"
                      value={newProjet.type}
                      onChange={e =>
                        setNewProjet({
                          ...newProjet,
                          type: e.target.value
                        })
                      }>
                      <option value="changementRP">changement RP</option>
                      <option value="travaux">Travaux</option>
                      <option value="investissement">Investissement</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="valeurAchat"
                      className="text-customBLUE text-sm font-medium">
                      Valeur d'achat (€)
                    </label>
                    <input
                      id="valeurAchat"
                      type="number"
                      className="form-input border p-2"
                      value={newProjet.valeurAchat}
                      onChange={e =>
                        setNewProjet({
                          ...newProjet,
                          valeurAchat: e.target.value
                        })
                      }
                      placeholder="Ex: 350000"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="emprunt"
                      className="text-customBLUE text-sm font-medium">
                      Emprunt (€)
                    </label>
                    <input
                      id="emprunt"
                      type="number"
                      className="form-input border p-2"
                      value={newProjet.emprunt}
                      onChange={e =>
                        setNewProjet({
                          ...newProjet,
                          emprunt: e.target.value
                        })
                      }
                      placeholder="Ex: 350000"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="dateFin"
                      className="text-customBLUE text-sm font-medium">
                      Date fin
                    </label>
                    <input
                      id="dateFin"
                      type="date"
                      className="form-input border p-2"
                      value={newProjet.dateFin}
                      onChange={e =>
                        setNewProjet({
                          ...newProjet,
                          dateFin: e.target.value
                        })
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="mensualite"
                      className="text-customBLUE text-sm font-medium">
                      Mensualite
                    </label>
                    <input
                      id="mensualite"
                      type="number"
                      className="form-input border p-2"
                      value={newProjet.mensualite}
                      onChange={e =>
                        setNewProjet({
                          ...newProjet,
                          mensualite: e.target.value
                        })
                      }
                      placeholder="Ex: 350000"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="loyer"
                      className="text-customBLUE text-sm font-medium">
                      Loyer (€)
                    </label>
                    <input
                      id="loyer"
                      type="number"
                      className="form-input border p-2"
                      value={newProjet.loyer}
                      onChange={e =>
                        setNewProjet({
                          ...newProjet,
                          loyer: e.target.value
                        })
                      }
                      placeholder="Ex: 350000"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="rapportLocatif"
                      className="text-customBLUE text-sm font-medium">
                      Rapport Locatif
                    </label>
                    <input
                      id="rapportLocatif"
                      type="text"
                      className="form-input border p-2"
                      value={newProjet.rapportLocatif}
                      onChange={e =>
                        setNewProjet({
                          ...newProjet,
                          rapportLocatif: e.target.value
                        })
                      }
                      placeholder="Ex: Paris, France"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="taux"
                      className="text-customBLUE text-sm font-medium">
                      Taux
                    </label>
                    <input
                      id="taux"
                      type="number"
                      className="form-input border p-2"
                      value={newProjet.taux}
                      onChange={e =>
                        setNewProjet({
                          ...newProjet,
                          taux: e.target.value
                        })
                      }
                      placeholder="Ex: Paris, France"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="duree"
                      className="text-customBLUE text-sm font-medium">
                      Durée
                    </label>
                    <input
                      id="duree"
                      type="text"
                      className="form-input border p-2"
                      value={newProjet.duree}
                      onChange={e =>
                        setNewProjet({
                          ...newProjet,
                          duree: e.target.value
                        })
                      }
                      placeholder="Ex: 3 mois"
                    />
                  </div>
                  <div>
                    <h1></h1>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="rentabilite"
                      className="text-customBLUE text-sm font-medium">
                      Rentabilité (%)
                    </label>
                    <input
                      id="rentabilite"
                      type="number"
                      className="form-input border p-2"
                      value={newProjet.rentabilite}
                      onChange={e =>
                        setNewProjet({
                          ...newProjet,
                          rentabilite: e.target.value
                        })
                      }
                      placeholder="Ex: 5"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-customGold rounded-md px-4 py-2 text-white"
                  onClick={addProjet}>
                  Ajouter
                </button>
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-md text-customBLUE font-bold">
                  Projets Ajoutés
                </h3>
                <table className="w-full table-auto rounded-lg border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100 text-center text-sm font-medium">
                      <th className="p-2 text-center">Type</th>
                      <th className="p-2 text-center">Valeur d'achat</th>
                      <th className="p-2 text-center">Emprunt</th>
                      <th className="p-2 text-center">Date Fin</th>
                      <th className="p-2 text-center">mensualite </th>
                      <th className="p-2 text-center">Loyer</th>
                      <th className="p-2 text-center">Rapport Lucatif</th>
                      <th className="p-2 text-center">Taux</th>
                      <th className="p-2 text-center">Durée</th>
                      <th className="p-2 text-center">Rentabilité</th>
                      <th className="p-2 text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {state.projets.map((item, index) => (
                      <tr
                        key={index}
                        className="text-wrap border-t text-center text-sm">
                        <td className="p-2">{item.type}</td>
                        <td className="p-2">{item.valeurAchat}</td>
                        <td className="p-2">{item.emprunt}</td>
                        <td className="px-6 py-2">{item.dateFin}</td>

                        <td className="p-2">{item.mensualite}</td>
                        <td className="p-2">{item.loyer}</td>
                        <td className="p-2">{item.rapportLocatif}</td>

                        <td className="p-2">{item.taux}</td>
                        <td className="p-2">{item.duree}</td>
                        <td className="p-2">{item.rentabilite}</td>
                        <td className="flex justify-center space-x-2 p-2">
                          <button
                            className="text-red-600"
                            onClick={() =>
                              dispatch({ type: 'REMOVE_PROJETS', index })
                            }>
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>

        <h1 className="text-customGold bg-customBLUE rounded-md p-3 text-center text-xl font-bold">
          Patrimoine Financière
        </h1>
        <h2 className="text-customBLUE text-lg font-bold"> Liquidités</h2>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="hasLiquidite"
              value="yes"
              checked={hasLiquidite === true}
              onChange={() => setHasLiquidite(true)}
            />
            <span>Oui</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="hasLiquidite"
              value="no"
              checked={hasLiquidite === false}
              onChange={() => setHasLiquidite(false)}
            />
            <span>Non</span>
          </label>
        </div>

        {hasLiquidite && (
          <>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="nom"
                    className="text-customBLUE text-sm font-medium">
                    Nom
                  </label>
                  <input
                    id="nom"
                    type="text"
                    className="form-input border p-2"
                    value={newLiquidite.nom}
                    onChange={e =>
                      setNewLiquidite({
                        ...newLiquidite,
                        nom: e.target.value
                      })
                    }
                    placeholder="Ex: Compte Courant"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="valeur"
                    className="text-customBLUE text-sm font-medium">
                    Valeur (€)
                  </label>
                  <input
                    id="valeur"
                    type="number"
                    className="form-input border p-2"
                    value={newLiquidite.valeur}
                    onChange={e =>
                      setNewLiquidite({
                        ...newLiquidite,
                        valeur: e.target.value
                      })
                    }
                    placeholder="Ex: 350000"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="rentabilite"
                    className="text-customBLUE text-sm font-medium">
                    rentabilite (%)
                  </label>
                  <input
                    id="rentabilite"
                    type="number"
                    className="form-input border p-2"
                    value={newLiquidite.rentabilite}
                    onChange={e =>
                      setNewLiquidite({
                        ...newLiquidite,
                        rentabilite: e.target.value
                      })
                    }
                    placeholder="Ex: 10.5"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="risque"
                    className="text-customBLUE text-sm font-medium">
                    Risque (1-5)
                  </label>
                  <select
                    id="risque"
                    className="form-input border p-2"
                    value={newLiquidite.risque}
                    onChange={e =>
                      setNewLiquidite({
                        ...newLiquidite,
                        risque: e.target.value
                      })
                    }>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="disponible"
                    className="text-customBLUE text-sm font-medium">
                    disponible (€)
                  </label>
                  <input
                    id="disponible"
                    type="number"
                    className="form-input border p-2"
                    value={newLiquidite.disponible}
                    onChange={e =>
                      setNewLiquidite({
                        ...newLiquidite,
                        disponible: e.target.value
                      })
                    }
                    placeholder="Ex: 30000"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="gestionnaire"
                    className="text-customBLUE text-sm font-medium">
                    Gestionnaire
                  </label>
                  <input
                    id="gestionnaire"
                    type="text"
                    className="form-input border p-2"
                    value={newLiquidite.gestionnaire}
                    onChange={e =>
                      setNewLiquidite({
                        ...newLiquidite,
                        gestionnaire: e.target.value
                      })
                    }
                    placeholder="Ex: Compte Courant"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="gestion"
                    className="text-customBLUE text-sm font-medium">
                    Gestion
                  </label>
                  <select
                    id="gestion"
                    className="form-input border p-2"
                    value={newLiquidite.gestion}
                    onChange={e =>
                      setNewLiquidite({
                        ...newLiquidite,
                        gestion: e.target.value
                      })
                    }>
                    <option value={'libre'}>Libre</option>
                    <option value={'sous mandat'}>Sous Mandat</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="objectif"
                    className="text-customBLUE text-sm font-medium">
                    objectif
                  </label>
                  <input
                    id="objectif"
                    type="text"
                    className="form-input border p-2"
                    value={newLiquidite.objectif}
                    onChange={e =>
                      setNewLiquidite({
                        ...newLiquidite,
                        objectif: e.target.value
                      })
                    }
                    placeholder="Ex: Matelas de sécurité"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="dateOuverture"
                    className="text-customBLUE text-sm font-medium">
                    Date Ouverture
                  </label>
                  <input
                    id="dateOuverture"
                    type="date"
                    className="form-input border p-2"
                    value={newLiquidite.dateOuverture}
                    onChange={e =>
                      setNewLiquidite({
                        ...newLiquidite,
                        dateOuverture: e.target.value
                      })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="organisme"
                    className="text-customBLUE text-sm font-medium">
                    Organisme
                  </label>
                  <input
                    id="organisme"
                    type="text"
                    className="form-input border p-2"
                    value={newLiquidite.organisme}
                    onChange={e =>
                      setNewLiquidite({
                        ...newLiquidite,
                        organisme: e.target.value
                      })
                    }
                    placeholder="Ex: Matelas de sécurité"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="support"
                    className="text-customBLUE text-sm font-medium">
                    Support
                  </label>
                  <input
                    id="support"
                    type="text"
                    className="form-input border p-2"
                    value={newLiquidite.support}
                    onChange={e =>
                      setNewLiquidite({
                        ...newLiquidite,
                        support: e.target.value
                      })
                    }
                    placeholder="Ex: Matelas de sécurité"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="satisfait"
                    className="text-customBLUE text-sm font-medium">
                    Satisfait ?
                  </label>
                  <input
                    id="satisfait"
                    type="text"
                    className="form-input border p-2"
                    value={newLiquidite.satisfait}
                    onChange={e =>
                      setNewLiquidite({
                        ...newLiquidite,
                        satisfait: e.target.value
                      })
                    }
                    placeholder="Ex: Matelas de sécurité"
                  />
                </div>
              </div>
              <button
                type="button"
                className="bg-customGold rounded-md px-4 py-2 text-white"
                onClick={addLiquidite}>
                Ajouter
              </button>
            </div>
            <div className="mt-6 space-y-4">
              <h3 className="text-md text-customBLUE font-bold">
                Liquidité Ajoutés
              </h3>
              <table className="w-full table-auto rounded-lg border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 text-center text-sm font-medium">
                    <th className="p-2 text-center">Nom</th>
                    <th className="p-2 text-center">Valeur</th>
                    <th className="p-2 text-center">Rentabilité</th>
                    <th className="p-2 text-center">Risque</th>
                    <th className="p-2 text-center">Disponible</th>
                    <th className="p-2 text-center">Gestionnaire</th>
                    <th className="p-2 text-center">Gestion</th>
                    <th className="p-2 text-center">Objectif</th>
                    <th className="p-2 text-center">Date Ouverture</th>
                    <th className="p-2 text-center">Organime</th>
                    <th className="p-2 text-center">Support</th>
                    <th className="p-2 text-center">Satisfait</th>
                    <th className="p-2 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {state.liquidite.map((item, index) => (
                    <tr
                      key={index}
                      className="text-wrap border-t text-center text-sm">
                      <td className="p-2">{item.nom}</td>
                      <td className="p-2">{item.valeur}</td>
                      <td className="p-2">{item.rentabilite}</td>
                      <td className="p-2">{item.risque}</td>
                      <td className="p-2">{item.disponible}</td>
                      <td className="p-2">{item.gestionnaire}</td>
                      <td className="p-2">{item.gestion}</td>
                      <td className="p-2">{item.objectif}</td>
                      <td className="p-2">{item.dateOuverture}</td>
                      <td className="p-2">{item.organisme}</td>
                      <td className="p-2">{item.support}</td>
                      <td className="p-2">{item.satisfait}</td>

                      <td className="flex justify-center space-x-2 p-2">
                        <button
                          className="text-red-600"
                          onClick={() =>
                            dispatch({ type: 'REMOVE_LIQUIDITE', index })
                          }>
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <h2 className="text-customBLUE text-lg font-bold">
          {' '}
          Placement Financier
        </h2>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="hasPlacementFinancier"
              value="yes"
              checked={hasPlacementFinancier === true}
              onChange={() => setHasPlacementFinancier(true)}
            />
            <span>Oui</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="hasPlacementFinancier"
              value="no"
              checked={hasPlacementFinancier === false}
              onChange={() => setHasPlacementFinancier(false)}
            />
            <span>Non</span>
          </label>
        </div>
        {hasPlacementFinancier && (
          <>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="nom"
                    className="text-customBLUE text-sm font-medium">
                    Nom
                  </label>
                  <input
                    id="nom"
                    type="text"
                    className="form-input border p-2"
                    value={newPlacementFinancier.nom}
                    onChange={e =>
                      setNewPlacementFinancier({
                        ...newPlacementFinancier,
                        nom: e.target.value
                      })
                    }
                    placeholder="Ex: Compte Courant"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="valeur"
                    className="text-customBLUE text-sm font-medium">
                    Valeur (€)
                  </label>
                  <input
                    id="valeur"
                    type="number"
                    className="form-input border p-2"
                    value={newPlacementFinancier.valeur}
                    onChange={e =>
                      setNewPlacementFinancier({
                        ...newPlacementFinancier,
                        valeur: e.target.value
                      })
                    }
                    placeholder="Ex: 350000"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="rentabilite"
                    className="text-customBLUE text-sm font-medium">
                    rentabilite (%)
                  </label>
                  <input
                    id="rentabilite"
                    type="number"
                    className="form-input border p-2"
                    value={newPlacementFinancier.rentabilite}
                    onChange={e =>
                      setNewPlacementFinancier({
                        ...newPlacementFinancier,
                        rentabilite: e.target.value
                      })
                    }
                    placeholder="Ex: 10.5"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="risque"
                    className="text-customBLUE text-sm font-medium">
                    Risque (1-5)
                  </label>
                  <select
                    id="risque"
                    className="form-input border p-2"
                    value={newPlacementFinancier.risque}
                    onChange={e =>
                      setNewPlacementFinancier({
                        ...newPlacementFinancier,
                        risque: e.target.value
                      })
                    }>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="disponibleFinance"
                    className="text-customBLUE text-sm font-medium">
                    disponible (€)
                  </label>
                  <input
                    id="disponibleFinance"
                    type="number"
                    className="form-input border p-2"
                    value={newPlacementFinancier.disponible}
                    onChange={e =>
                      setNewPlacementFinancier({
                        ...newPlacementFinancier,
                        disponible: e.target.value
                      })
                    }
                    placeholder="Ex: 30000"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="gestionnaire"
                    className="text-customBLUE text-sm font-medium">
                    Gestionnaire
                  </label>
                  <input
                    id="gestionnaire"
                    type="text"
                    className="form-input border p-2"
                    value={newPlacementFinancier.gestionnaire}
                    onChange={e =>
                      setNewPlacementFinancier({
                        ...newPlacementFinancier,
                        gestionnaire: e.target.value
                      })
                    }
                    placeholder="Ex: Compte Courant"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="gestion"
                    className="text-customBLUE text-sm font-medium">
                    Gestion
                  </label>
                  <select
                    id="gestion"
                    className="form-input border p-2"
                    value={newPlacementFinancier.gestion}
                    onChange={e =>
                      setNewPlacementFinancier({
                        ...newPlacementFinancier,
                        gestion: e.target.value
                      })
                    }>
                    <option value={'libre'}>Libre</option>
                    <option value={'sous mandat'}>Sous Mandat</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="objectif"
                    className="text-customBLUE text-sm font-medium">
                    objectif
                  </label>
                  <input
                    id="objectif"
                    type="text"
                    className="form-input border p-2"
                    value={newPlacementFinancier.objectif}
                    onChange={e =>
                      setNewPlacementFinancier({
                        ...newPlacementFinancier,
                        objectif: e.target.value
                      })
                    }
                    placeholder="Ex: Matelas de sécurité"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="dateOuverture"
                    className="text-customBLUE text-sm font-medium">
                    Date Ouverture
                  </label>
                  <input
                    id="dateOuverture"
                    type="date"
                    className="form-input border p-2"
                    value={newPlacementFinancier.dateOuverture}
                    onChange={e =>
                      setNewPlacementFinancier({
                        ...newPlacementFinancier,
                        dateOuverture: e.target.value
                      })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="organisme"
                    className="text-customBLUE text-sm font-medium">
                    Organisme
                  </label>
                  <input
                    id="organisme"
                    type="text"
                    className="form-input border p-2"
                    value={newPlacementFinancier.organisme}
                    onChange={e =>
                      setNewPlacementFinancier({
                        ...newPlacementFinancier,
                        organisme: e.target.value
                      })
                    }
                    placeholder="Ex: Matelas de sécurité"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="support"
                    className="text-customBLUE text-sm font-medium">
                    Support
                  </label>
                  <input
                    id="support"
                    type="text"
                    className="form-input border p-2"
                    value={newPlacementFinancier.support}
                    onChange={e =>
                      setNewPlacementFinancier({
                        ...newPlacementFinancier,
                        support: e.target.value
                      })
                    }
                    placeholder="Ex: Matelas de sécurité"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="satisfait"
                    className="text-customBLUE text-sm font-medium">
                    Satisfait ?
                  </label>
                  <input
                    id="satisfait"
                    type="text"
                    className="form-input border p-2"
                    value={newPlacementFinancier.satisfait}
                    onChange={e =>
                      setNewPlacementFinancier({
                        ...newPlacementFinancier,
                        satisfait: e.target.value
                      })
                    }
                    placeholder="Ex: Matelas de sécurité"
                  />
                </div>
              </div>
              <button
                type="button"
                className="bg-customGold rounded-md px-4 py-2 text-white"
                onClick={addPlacementFinancier}>
                Ajouter
              </button>
            </div>
            <div className="mt-6 space-y-4">
              <h3 className="text-md text-customBLUE font-bold">
                Placement Financier Ajoutés
              </h3>
              <table className="w-full table-auto rounded-lg border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 text-center text-sm font-medium">
                    <th className="p-2 text-center">Nom</th>
                    <th className="p-2 text-center">Valeur</th>
                    <th className="p-2 text-center">Rentabilité</th>
                    <th className="p-2 text-center">Risque</th>
                    <th className="p-2 text-center">Disponible</th>
                    <th className="p-2 text-center">Gestionnaire</th>
                    <th className="p-2 text-center">Gestion</th>
                    <th className="p-2 text-center">Objectif</th>
                    <th className="p-2 text-center">Date Ouverture</th>
                    <th className="p-2 text-center">Organime</th>
                    <th className="p-2 text-center">Support</th>
                    <th className="p-2 text-center">Satisfait</th>
                    <th className="p-2 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {state.placementFinancier.map((item, index) => (
                    <tr
                      key={index}
                      className="text-wrap border-t text-center text-sm">
                      <td className="p-2">{item.nom}</td>
                      <td className="p-2">{item.valeur}</td>
                      <td className="p-2">{item.rentabilite}</td>
                      <td className="p-2">{item.risque}</td>
                      <td className="p-2">{item.disponible}</td>
                      <td className="p-2">{item.gestionnaire}</td>
                      <td className="p-2">{item.gestion}</td>
                      <td className="p-2">{item.objectif}</td>
                      <td className="p-2">{item.dateOuverture}</td>
                      <td className="p-2">{item.organisme}</td>
                      <td className="p-2">{item.support}</td>
                      <td className="p-2">{item.satisfait}</td>
                      <td className="flex justify-center space-x-2 p-2">
                        <button
                          className="text-red-600"
                          onClick={() =>
                            dispatch({
                              type: 'REMOVE_PLACEMENT_FINANCIER',
                              index
                            })
                          }>
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <h2 className="text-customBLUE text-lg font-bold"> Autres </h2>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="hasAutre"
              value="yes"
              checked={hasAutre === true}
              onChange={() => setHasAutre(true)}
            />
            <span>Oui</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="hasAutre"
              value="no"
              checked={hasAutre === false}
              onChange={() => setHasAutre(false)}
            />
            <span>Non</span>
          </label>
        </div>
        {hasAutre && (
          <>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="nom"
                    className="text-customBLUE text-sm font-medium">
                    Nom
                  </label>
                  <input
                    id="nom"
                    type="text"
                    className="form-input border p-2"
                    value={newAutre.nom}
                    onChange={e =>
                      setNewAutre({
                        ...newAutre,
                        nom: e.target.value
                      })
                    }
                    placeholder="Ex: Compte Courant"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="valeur"
                    className="text-customBLUE text-sm font-medium">
                    Valeur (€)
                  </label>
                  <input
                    id="valeur"
                    type="number"
                    className="form-input border p-2"
                    value={newAutre.valeur}
                    onChange={e =>
                      setNewAutre({
                        ...newAutre,
                        valeur: e.target.value
                      })
                    }
                    placeholder="Ex: 350000"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="rentabilite"
                    className="text-customBLUE text-sm font-medium">
                    rentabilite (%)
                  </label>
                  <input
                    id="rentabilite"
                    type="number"
                    className="form-input border p-2"
                    value={newAutre.rentabilite}
                    onChange={e =>
                      setNewAutre({
                        ...newAutre,
                        rentabilite: e.target.value
                      })
                    }
                    placeholder="Ex: 10.5"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="risque"
                    className="text-customBLUE text-sm font-medium">
                    Risque (1-5)
                  </label>
                  <select
                    id="risque"
                    className="form-input border p-2"
                    value={newAutre.risque}
                    onChange={e =>
                      setNewAutre({
                        ...newAutre,
                        risque: e.target.value
                      })
                    }>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="disponibleFinance"
                    className="text-customBLUE text-sm font-medium">
                    disponible (€)
                  </label>
                  <input
                    id="disponibleFinance"
                    type="number"
                    className="form-input border p-2"
                    value={newAutre.disponible}
                    onChange={e =>
                      setNewAutre({
                        ...newAutre,
                        disponible: e.target.value
                      })
                    }
                    placeholder="Ex: 30000"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="gestionnaire"
                    className="text-customBLUE text-sm font-medium">
                    Gestionnaire
                  </label>
                  <input
                    id="gestionnaire"
                    type="text"
                    className="form-input border p-2"
                    value={newAutre.gestionnaire}
                    onChange={e =>
                      setNewAutre({
                        ...newAutre,
                        gestionnaire: e.target.value
                      })
                    }
                    placeholder="Ex: Compte Courant"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="gestion"
                    className="text-customBLUE text-sm font-medium">
                    Gestion
                  </label>
                  <select
                    id="gestion"
                    className="form-input border p-2"
                    value={newAutre.gestion}
                    onChange={e =>
                      setNewAutre({
                        ...newAutre,
                        gestion: e.target.value
                      })
                    }>
                    <option value={'libre'}>Libre</option>
                    <option value={'sous mandat'}>Sous Mandat</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="objectif"
                    className="text-customBLUE text-sm font-medium">
                    objectif
                  </label>
                  <input
                    id="objectif"
                    type="text"
                    className="form-input border p-2"
                    value={newAutre.objectif}
                    onChange={e =>
                      setNewAutre({
                        ...newAutre,
                        objectif: e.target.value
                      })
                    }
                    placeholder="Ex: Matelas de sécurité"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="dateOuverture"
                    className="text-customBLUE text-sm font-medium">
                    Date Ouverture
                  </label>
                  <input
                    id="dateOuverture"
                    type="date"
                    className="form-input border p-2"
                    value={newAutre.dateOuverture}
                    onChange={e =>
                      setNewAutre({
                        ...newAutre,
                        dateOuverture: e.target.value
                      })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="organisme"
                    className="text-customBLUE text-sm font-medium">
                    Organisme
                  </label>
                  <input
                    id="organisme"
                    type="text"
                    className="form-input border p-2"
                    value={newAutre.organisme}
                    onChange={e =>
                      setNewAutre({
                        ...newAutre,
                        organisme: e.target.value
                      })
                    }
                    placeholder="Ex: Matelas de sécurité"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="support"
                    className="text-customBLUE text-sm font-medium">
                    Support
                  </label>
                  <input
                    id="support"
                    type="text"
                    className="form-input border p-2"
                    value={newAutre.support}
                    onChange={e =>
                      setNewAutre({
                        ...newAutre,
                        support: e.target.value
                      })
                    }
                    placeholder="Ex: Matelas de sécurité"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="satisfait"
                    className="text-customBLUE text-sm font-medium">
                    Satisfait ?
                  </label>
                  <input
                    id="satisfait"
                    type="text"
                    className="form-input border p-2"
                    value={newAutre.satisfait}
                    onChange={e =>
                      setNewAutre({
                        ...newAutre,
                        satisfait: e.target.value
                      })
                    }
                    placeholder="Ex: Matelas de sécurité"
                  />
                </div>
              </div>
              <button
                type="button"
                className="bg-customGold rounded-md px-4 py-2 text-white"
                onClick={addAutre}>
                Ajouter
              </button>
            </div>
            <div className="mt-6 space-y-4">
              <h3 className="text-md text-customBLUE font-bold">
                Autres Ajoutées
              </h3>
              <table className="w-full table-auto rounded-lg border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 text-center text-sm font-medium">
                    <th className="p-2 text-center">Nom</th>
                    <th className="p-2 text-center">Valeur</th>
                    <th className="p-2 text-center">Rentabilité</th>
                    <th className="p-2 text-center">Risque</th>
                    <th className="p-2 text-center">Disponible</th>
                    <th className="p-2 text-center">Gestionnaire</th>
                    <th className="p-2 text-center">Gestion</th>
                    <th className="p-2 text-center">Objectif</th>
                    <th className="p-2 text-center">Date Ouverture</th>
                    <th className="p-2 text-center">Organime</th>
                    <th className="p-2 text-center">Support</th>
                    <th className="p-2 text-center">Satisfait</th>
                    <th className="p-2 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {state.autrePF.map((item, index) => (
                    <tr
                      key={index}
                      className="text-wrap border-t text-center text-sm">
                      <td className="p-2">{item.nom}</td>
                      <td className="p-2">{item.valeur}</td>
                      <td className="p-2">{item.rentabilite}</td>
                      <td className="p-2">{item.risque}</td>
                      <td className="p-2">{item.disponible}</td>
                      <td className="p-2">{item.gestionnaire}</td>
                      <td className="p-2">{item.gestion}</td>
                      <td className="p-2">{item.objectif}</td>
                      <td className="p-2">{item.dateOuverture}</td>
                      <td className="p-2">{item.organisme}</td>
                      <td className="p-2">{item.support}</td>
                      <td className="p-2">{item.satisfait}</td>
                      <td className="flex justify-center space-x-2 p-2">
                        <button
                          className="text-red-600"
                          onClick={() =>
                            dispatch({ type: 'REMOVE_AUTREFINANCIER', index })
                          }>
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <h1 className="text-customGold bg-customBLUE rounded-md p-3 text-center text-xl font-bold">
          Patrimoine Professionnel{' '}
        </h1>
        <h2 className="text-customBLUE text-lg font-bold"> Professionnel </h2>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="hasProfessionnel"
              value="yes"
              checked={hasProfessionnel === true}
              onChange={() => setHasProfessionnel(true)}
            />
            <span>Oui</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="hasProfessionnel"
              value="no"
              checked={hasProfessionnel === false}
              onChange={() => setHasProfessionnel(false)}
            />
            <span>Non</span>
          </label>
        </div>
        {hasProfessionnel && (
          <>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="formeJuridique"
                    className="text-customBLUE text-sm font-medium">
                    Forme Juridique
                  </label>
                  <input
                    id="formeJuridique"
                    type="text"
                    className="form-input border p-2"
                    value={newProfessionnel.formeJuridique}
                    onChange={e =>
                      setNewProfessionnel({
                        ...newProfessionnel,
                        formeJuridique: e.target.value
                      })
                    }
                    placeholder="Ex: Compte Courant"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="nombreAssocie"
                    className="text-customBLUE text-sm font-medium">
                    Nombre d'associés
                  </label>
                  <input
                    id="nombreAssocie"
                    type="number"
                    className="form-input border p-2"
                    value={newProfessionnel.nombreAssocie}
                    onChange={e =>
                      setNewProfessionnel({
                        ...newProfessionnel,
                        nombreAssocie: e.target.value
                      })
                    }
                    placeholder="Ex: 1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="detention"
                    className="text-customBLUE text-sm font-medium">
                    detention (%)
                  </label>
                  <input
                    id="detention"
                    type="number"
                    className="form-input border p-2"
                    value={newProfessionnel.detention}
                    onChange={e =>
                      setNewProfessionnel({
                        ...newProfessionnel,
                        detention: e.target.value
                      })
                    }
                    placeholder="Ex: 1"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="dateCreation"
                    className="text-customBLUE text-sm font-medium">
                    Date de création
                  </label>
                  <input
                    id="dateCreation"
                    type="date"
                    className="form-input border p-2"
                    value={newProfessionnel.dateCreation}
                    onChange={e =>
                      setNewProfessionnel({
                        ...newProfessionnel,
                        dateCreation: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="valorisation"
                    className="text-customBLUE text-sm font-medium">
                    valorisation
                  </label>
                  <input
                    id="valorisation"
                    type="number"
                    className="form-input border p-2"
                    value={newProfessionnel.valorisation}
                    onChange={e =>
                      setNewProfessionnel({
                        ...newProfessionnel,
                        valorisation: e.target.value
                      })
                    }
                    placeholder="Ex: 1540"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="passif"
                    className="text-customBLUE text-sm font-medium">
                    Passif
                  </label>
                  <input
                    id="passif"
                    type="number"
                    className="form-input border p-2"
                    value={newProfessionnel.passif}
                    onChange={e =>
                      setNewProfessionnel({
                        ...newProfessionnel,
                        passif: e.target.value
                      })
                    }
                    placeholder="Ex: 1540"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="tresorerie"
                    className="text-customBLUE text-sm font-medium">
                    tresorerie
                  </label>
                  <input
                    id="tresorerie"
                    type="number"
                    className="form-input border p-2"
                    value={newProfessionnel.tresorerie}
                    onChange={e =>
                      setNewProfessionnel({
                        ...newProfessionnel,
                        tresorerie: e.target.value
                      })
                    }
                    placeholder="Ex: 1540"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="CA"
                    className="text-customBLUE text-sm font-medium">
                    CA
                  </label>
                  <input
                    id="CA"
                    type="number"
                    className="form-input border p-2"
                    value={newProfessionnel.CA}
                    onChange={e =>
                      setNewProfessionnel({
                        ...newProfessionnel,
                        CA: e.target.value
                      })
                    }
                    placeholder="Ex: 1540"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="benefice"
                    className="text-customBLUE text-sm font-medium">
                    benefice
                  </label>
                  <input
                    id="benefice"
                    type="number"
                    className="form-input border p-2"
                    value={newProfessionnel.benefice}
                    onChange={e =>
                      setNewProfessionnel({
                        ...newProfessionnel,
                        benefice: e.target.value
                      })
                    }
                    placeholder="Ex: 1540"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="activite"
                    className="text-customBLUE text-sm font-medium">
                    Activité
                  </label>
                  <input
                    id="activite"
                    type="text"
                    className="form-input border p-2"
                    value={newProfessionnel.activite}
                    onChange={e =>
                      setNewProfessionnel({
                        ...newProfessionnel,
                        activite: e.target.value
                      })
                    }
                    placeholder="text"
                  />
                </div>
              </div>
              <button
                type="button"
                className="bg-customGold rounded-md px-4 py-2 text-white"
                onClick={addProfessionnel}>
                Ajouter
              </button>
            </div>
            <div className="mt-6 space-y-4">
              <h3 className="text-md text-customBLUE font-bold">
                Patrimoine Professionnel Ajoutés
              </h3>
              <table className="w-full table-auto rounded-lg border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 text-center text-sm font-medium">
                    <th className="p-2 text-center">Forme Juridique</th>
                    <th className="p-2 text-center">Nb Assosciés</th>
                    <th className="p-2 text-center"> détention</th>
                    <th className="p-2 text-center">Date Creation</th>
                    <th className="p-2 text-center">Valorisation</th>
                    <th className="p-2 text-center">Passif</th>
                    <th className="p-2 text-center">Trésorerie</th>
                    <th className="p-2 text-center">CA</th>
                    <th className="p-2 text-center">Benefice</th>
                    <th className="p-2 text-center">Activité</th>
                    <th className="p-2 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {state.patrimoineProfessionnel.map((item, index) => (
                    <tr
                      key={index}
                      className="text-wrap border-t text-center text-sm">
                      <td className="p-2">{item.formeJuridique}</td>
                      <td className="p-2">{item.nombreAssocie}</td>
                      <td className="p-2">{item.detention}</td>
                      <td className="p-2">{item.dateCreation}</td>
                      <td className="p-2">{item.valorisation}</td>
                      <td className="p-2">{item.passif}</td>
                      <td className="p-2">{item.tresorerie}</td>
                      <td className="p-2">{item.CA}</td>
                      <td className="p-2">{item.benefice}</td>
                      <td className="p-2">{item.activite}</td>

                      <td className="flex justify-center space-x-2 p-2">
                        <button
                          className="text-red-600"
                          onClick={() =>
                            dispatch({
                              type: 'REMOVE_PATRIMOINE_PROFESSIONNEL',
                              index
                            })
                          }>
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        <div className="flex items-end justify-end">
          <Button type="submit">Enregistrer</Button>
        </div>
      </form>
    </div>
  )
}
