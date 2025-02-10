'use client'

import { React, useState, useReducer, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarPlus, Trash2, CirclePlus, Edit } from 'lucide-react'
import TableDynamic from './TableDynamic'
import RevenusTab from './RevenusTab'
import TabGeneral from './TabGeneral'
import ProfileTab from './ProfileTab'
import FinancialTab from './FinancialTab'
import PatrimoineTab from './PatrimoineTab'

export default function () {
  const [activeTab, setActiveTab] = useState('general')

  const tabs = ['general', 'profil', 'réglementaire', 'revenus', 'patrimoine']

  const handleNextTab = () => {
    const currentIndex = tabs.indexOf(activeTab)
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1])
    }
  }

  const initialState = {
    nom: '',
    prenom: '',
    date_naissance: '',
    lieu_naissance: '',
    profession: '',
    adresse_fiscale: '',
    telephone: '',
    email: '',
    situation_matrimoniale: '',
    regime_matrimonial: '',
    conjoint: {
      nom: '',
      prenom: '',
      date_naissance: '',
      lieu_naissance: '',
      profession: '',
      telephone: '',
      email: '',
      forme_legale: '',
      depuis: ''
    },
    personnes_a_charge: [],
    enfants: [],
    revenus: [],
    passifs: [],
    immobilier: [],
    autreBien: [],
    autreEmprunts: [],
    projets: [],
    liquidite: [],
    placementFinancier: [],
    autrePF: [],
    patrimoineProfessionnel: [],
    profil_risque: '',
    pmiesg: {
      objectif_env_dur_social_souhaite: 0
    },
    connaissance_financieres: '',
    objectif_clients: [],
    produit_epargne: [],
    autre_impots_acquittes: [],
    capaciteEpargne: {}
  }

  function formReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_FIELD':
        // Update a top-level field
        return {
          ...state,
          [action.field]: action.value
        }

      case 'UPDATE_NESTED_FIELD':
        // Update a nested field (e.g., conjoint, pmiesg)
        return {
          ...state,
          [action.parentField]: {
            ...state[action.parentField],
            [action.field]: action.value
          }
        }
      case 'UPDATE_SPOUSE_FIELD':
        return {
          ...state,
          conjoint: {
            ...state.conjoint,
            [action.field]: action.value
          }
        }
      case 'ADD_CHILD':
        return {
          ...state,
          enfants: [...state.enfants, action.child]
        }
      case 'REMOVE_CHILD':
        return {
          ...state,
          enfants: state.enfants.filter((_, index) => index !== action.index)
        }
      case 'ADD_PERSONNE_A_CHARGE':
        return {
          ...state,
          personnes_a_charge: [...state.personnes_a_charge, action.personne]
        }
      case 'REMOVE_PERSONNE_A_CHARGE':
        return {
          ...state,
          personnes_a_charge: state.personnes_a_charge.filter(
            (_, index) => index !== action.index
          )
        }
      case 'ADD_REVENU':
        return {
          ...state,
          revenus: [...state.revenus, action.revenu]
        }
      case 'REMOVE_REVENU':
        return {
          ...state,
          revenus: state.revenus.filter((_, index) => index !== action.index)
        }

      case 'ADD_PASSIF':
        return {
          ...state,
          passifs: [...state.passifs, action.passif]
        }
      case 'REMOVE_PASSIF':
        return {
          ...state,
          passifs: state.passifs.filter((_, index) => index !== action.index)
        }
      case 'ADD_IMMOBILIER':
        return {
          ...state,
          immobilier: [...state.immobilier, action.immobilier]
        }
      case 'REMOVE_IMMOBILIER':
        return {
          ...state,
          immobilier: state.immobilier.filter(
            (_, index) => index !== action.index
          )
        }
      case 'ADD_AUTREBIEN':
        return {
          ...state,
          autreBien: [...state.autreBien, action.autreBien]
        }
      case 'REMOVE_AUTREBIEN':
        return {
          ...state,
          autreBien: state.autreBien.filter(
            (_, index) => index !== action.index
          )
        }
      case 'ADD_AUTREEMPRUNTS':
        return {
          ...state,
          autreEmprunts: [...state.autreEmprunts, action.autreEmprunts]
        }
      case 'REMOVE_AUTREEMPRUNTS':
        return {
          ...state,
          autreEmprunts: state.autreEmprunts.filter(
            (_, index) => index !== action.index
          )
        }
      case 'ADD_PROJETS':
        return {
          ...state,
          projets: [...state.projets, action.projet]
        }
      case 'REMOVE_PROJETS':
        return {
          ...state,
          projets: state.projets.filter((_, index) => index !== action.index)
        }
      case 'ADD_LIQUIDITE':
        return {
          ...state,
          liquidite: [...state.liquidite, action.liquidite]
        }
      case 'REMOVE_LIQUIDITE':
        return {
          ...state,
          liquidite: state.liquidite.filter(
            (_, index) => index !== action.index
          )
        }
      case 'ADD_PLACEMENT_FINANCIER':
        return {
          ...state,
          placementFinancier: [
            ...state.placementFinancier,
            action.placementFinancier
          ]
        }
      case 'REMOVE_PLACEMENT_FINANCIER':
        return {
          ...state,
          placementFinancier: state.placementFinancier.filter(
            (_, index) => index !== action.index
          )
        }
      case 'ADD_AUTREFINANCIER':
        return {
          ...state,
          autrePF: [...state.autrePF, action.autrePF]
        }
      case 'REMOVE_AUTREFINANCIER':
        return {
          ...state,
          autrePF: state.autrePF.filter((_, index) => index !== action.index)
        }
      case 'ADD_PATRIMOINE_PROFESSIONNEL':
        return {
          ...state,
          patrimoineProfessionnel: [
            ...state.patrimoineProfessionnel,
            action.patrimoineProfessionnel
          ]
        }
      case 'REMOVE_PATRIMOINE_PROFESSIONNEL':
        return {
          ...state,
          patrimoineProfessionnel: state.patrimoineProfessionnel.filter(
            (_, index) => index !== action.index
          )
        }
      case 'ADD_ITEM':
        return {
          ...state,
          [action.field]: [...state[action.field], action.item]
        }
      case 'REMOVE_ITEM':
        return {
          ...state,
          [action.field]: state[action.field].filter(
            (_, index) => index !== action.index
          )
        }

      case 'RESET_STATE':
        // Reset the state to the initial state
        return { ...initialState }

      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(formReducer, initialState)

  useEffect(() => {
    console.log(state)
  }, [activeTab])

  const [profilClient, setProfilClient] = useState({})

  const [patrimoine, setPatrimoine] = useState([])

  const [newPatrimoine, setNewPatrimoine] = useState({})

  const addPatrimoine = () => {
    setPatrimoine([
      ...patrimoine,
      { ...newPatrimoine, id: patrimoine.length + 1 }
    ])
    setNewPatrimoine({ type: '', montant: '', depuis_quand: '' })
  }

  const removePatrimoine = id => {
    setPatrimoine(patrimoine.filter(item => item.id !== id))
  }

  // Passif state

  return (
    <Tabs
      defaultValue="general"
      value={activeTab}
      onValueChange={setActiveTab}
      className="mb-20 w-full space-y-5">
      <TabsList className="flex justify-center">
        <TabsTrigger value="general">Informations générales</TabsTrigger>
        <TabsTrigger value="profile">Profil </TabsTrigger>
        <TabsTrigger value="finance">Reglementaire</TabsTrigger>
        <TabsTrigger value="revenus">Revenus </TabsTrigger>
        <TabsTrigger value="patrimoine">Patrimoine</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <TabGeneral
          state={state}
          dispatch={dispatch}
          handleNextTab={handleNextTab}
          activeTab={activeTab}
        />
      </TabsContent>
      <TabsContent value="revenus">
        <RevenusTab
          state={state}
          dispatch={dispatch}
          handleNextTab={handleNextTab}
          activeTab={activeTab}
        />
      </TabsContent>
      <TabsContent value="profile">
        <ProfileTab
          state={state}
          dispatch={dispatch}
          handleNextTab={handleNextTab}
          activeTab={activeTab}
        />
      </TabsContent>
      <TabsContent value="finance">
        <FinancialTab
          state={state}
          dispatch={dispatch}
          handleNextTab={handleNextTab}
          activeTab={activeTab}
        />
      </TabsContent>
      <TabsContent value="patrimoine">
        <PatrimoineTab
          state={state}
          dispatch={dispatch}
          handleNextTab={handleNextTab}
          activeTab={activeTab}
        />
      </TabsContent>
    </Tabs>
  )
}
