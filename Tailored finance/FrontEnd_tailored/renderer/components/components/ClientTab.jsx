'use client'

import { React, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarPlus, Trash2, CirclePlus, Edit } from 'lucide-react'
import TableDynamic from './TableDynamic'
import ClientGeneral from '@/components/components/ClientGeneral'
import ClientProfie from '@/components/components/ClientProfileTab'
import ClientRevenus from './ClientRevenusTab'
import ClientPatrimoine from '@/components/components/ClientPatrimoineTab'
import ClientFinance from '@/components/components/ClientFinanceTab'
export default function TabsContainer({ isEditing, client }) {
  const [activeTab, setActiveTab] = useState('general')

  const tabs = ['general', 'profile', 'finance', 'revenues', 'patrimoine']

  const handleNextTab = () => {
    const currentIndex = tabs.indexOf(activeTab)
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1])
    }
  }

  const { dernierProfilClient: PC } = client
  const [profilClient, setProfilClient] = useState({
    profil_risque: 3,
    interet_durabilite: 'oui',
    objectif_durabilite: 50,
    notes: ''
  })

  const [patrimoine, setPatrimoine] = useState([
    {
      id: 1,
      type: 'Compte courant',
      montant: '5000€',
      depuis_quand: '2021-05-12'
    }
  ])

  const [newPatrimoine, setNewPatrimoine] = useState({
    type: '',
    montant: '',
    depuis_quand: ''
  })

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

  const [passif, setPassif] = useState([
    {
      id: 1,
      nature: 'Prêt immobilier',
      capital_restant_du: '100000€',
      remboursement_mensuel: '5000€',
      duree_restante: '15 ans'
    }
  ])

  const [newPassif, setNewPassif] = useState({
    nature: '',
    capital_restant_du: '',
    remboursement_mensuel: '',
    duree_restante: ''
  })

  const addPassif = () => {
    setPassif([...passif, { ...newPassif, id: passif.length + 1 }])
    setNewPassif({
      nature: '',
      capital_restant_du: '',
      remboursement_mensuel: '',
      duree_restante: ''
    })
  }

  const removePassif = id => {
    setPassif(passif.filter(item => item.id !== id))
  }
  const [revenus, setRevenus] = useState([
    {
      id: 1,
      montant: '3000€',
      nature: 'Salaire',
      frequence: 'Mensuel',
      hors_france: false,
      remarques: 'Travail à distance'
    }
  ])

  const [newRevenu, setNewRevenu] = useState({
    montant: '',
    nature: 'Salaire',
    frequence: 'Mensuel',
    hors_france: false,
    remarques: ''
  })

  const addRevenu = () => {
    setRevenus([...revenus, { ...newRevenu, id: revenus.length + 1 }])
    setNewRevenu({
      montant: '',
      nature: 'Salaire',
      frequence: 'Mensuel',
      hors_france: false,
      remarques: ''
    })
  }

  const removeRevenu = id => {
    setRevenus(revenus.filter(revenu => revenu.id !== id))
  }
  const [children, setChildren] = useState([
    { id: 1, name: 'Luc', dob: '2008-05-12', status: 'À charge', remarks: '' },
    {
      id: 2,
      name: 'Sophie',
      dob: '2012-11-23',
      status: 'À charge',
      remarks: 'Allergie au pollen'
    }
  ])

  const [newChild, setNewChild] = useState({
    name: '',
    dob: '',
    status: 'À charge',
    remarks: ''
  })

  const addChild = () => {
    setChildren([...children, { ...newChild, id: children.length + 1 }])
    setNewChild({ name: '', dob: '', status: 'À charge', remarks: '' })
  }

  const removeChild = id => {
    setChildren(children.filter(child => child.id !== id))
  }

  const [dependents, setDependents] = useState([
    { id: 1, name: 'Paul', dob: '1975-10-12', remarks: 'Parent retraité' }
  ])

  return (
    <Tabs
      defaultValue="general"
      className="w-full space-y-5">
      <TabsList className="flex justify-center">
        <TabsTrigger value="general">Informations générales</TabsTrigger>
        <TabsTrigger value="profile">Profil </TabsTrigger>
        <TabsTrigger value="finance">Reglementaire</TabsTrigger>
        <TabsTrigger value="revenues">Revenus </TabsTrigger>
        <TabsTrigger value="patrimoine">Patrimoine</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <ClientGeneral
          isEditing={isEditing}
          handleNextTab={handleNextTab}
          activeTab={activeTab}
          client={client}
        />
      </TabsContent>

      <TabsContent value="revenues">
        <ClientRevenus
          handleNextTab={handleNextTab}
          activeTab={activeTab}
          client={client}
          isEditing={isEditing}
        />
      </TabsContent>
      <TabsContent value="finance">
        <ClientFinance
          handleNextTab={handleNextTab}
          activeTab={activeTab}
          client={client}
          isEditing={isEditing}
        />
      </TabsContent>
      <TabsContent value="profile">
        <ClientProfie
          handleNextTab={handleNextTab}
          activeTab={activeTab}
          client={client}
          isEditing={isEditing}
        />
      </TabsContent>
      <TabsContent value="patrimoine">
        <ClientPatrimoine
          handleNextTab={handleNextTab}
          activeTab={activeTab}
          client={client}
        />{' '}
      </TabsContent>
    </Tabs>
  )
}
