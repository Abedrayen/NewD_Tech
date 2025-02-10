'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { CalendarPlus, Trash2, CirclePlus, X } from 'lucide-react';
import { ArrowLeft, Pencil } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabsContainer from "@/components/components/ClientTab"
import { useDispatch, useSelector } from 'react-redux';
import { getClientProfilByID } from "../../../../Apis/clientApi"
import Loader from '@/components/components/loader';
import { addAffaire } from '@/slices/tempSlice';
import AddedProduct from './../../../../components/components/AddedProduct';
export default function ClientProfile() {
  const { clients } = useSelector(state => state.clients);
  const router = useRouter();
  const params = useParams();
  const clientID = params.clientID ? decodeURIComponent(params.clientID) : '';
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [client, setClient] = useState(null)
  const dispatch = useDispatch();
  const fetchProfilClient = async (clientID) => {
    const res = await getClientProfilByID(clientID)
    if (res != false) {
      return res;
    }
  }

  const dataHandler = async () => {
    setLoading(true);
    if (clients.length > 0 && clientID) {
      let aux = await fetchProfilClient(clientID)
      setClient(aux)
      console.log(aux)
      setLoading(false);
    }
    else {
      setError(true);
    }

  }


  useEffect(() => {
    dataHandler();
  }, [clients, clientID])




  const [isEditing, setIsEditing] = React.useState(false);
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  }




  const [date, setDate] = React.useState(new Date());
  const events = [
    { date: new Date(2024, 10, 20), description: 'Meeting with client' },
    { date: new Date(2024, 10, 20), description: 'Meeting with client' },
    { date: new Date(2024, 10, 20), description: 'Meeting with client' },
    { date: new Date(2024, 10, 20), description: 'Meeting with client' },
    { date: new Date(2024, 10, 20), description: 'Meeting with client' },
    { date: new Date(2024, 10, 25), description: 'Project deadline' },
  ];

  const eventsForSelectedDate = events.filter(
    (event) =>
      event.date.toDateString() === date.toDateString()
  );

  const { affaires } = useSelector(state => state.temp);

  // const getInitials = (name) => {
  //   if (!name) return 'CL';
  //   const parts = name.split(' ');
  //   const firstInitial = parts[0]?.charAt(0) || '';
  //   const lastInitial = parts.length > 1 ? parts[parts.length - 1]?.charAt(0) : '';
  //   return `${firstInitial}${lastInitial}`.toUpperCase();
  // };

  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedSubType, setSelectedSubtype] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [invMensuel, setInvMensuel] = useState(0)
  const [inv, setInv] = useState(0)
  const [addedProducts,setAddedProducts]=useState([]);
  const [productDisabled,setProductDisabled]=useState(false)
  const handleInvMensuel = (e) => setInvMensuel(e.target.value);
  const handleInv = (e) => setInv(e.target.value);

  const resetProduct=()=>
  {
    setSelectedType('');
    setSelectedSubtype('');
    setSelectedOptions([]);
    setInvMensuel(0);
    setInv(0);
    setProductDisabled(true);
  }

  const addProductHandler=(e)=>
  { 
    e.preventDefault();
    setAddedProducts((prev)=>[...prev,{selectedProduct,selectedType,selectedSubType,selectedOptions,invMensuel,inv}]);
    console.log(addedProducts);
    resetProduct();    
  }
  const productsData = {
    "Asset Management": {
      "Assurance Vie": ["Cardif", "Abeille", "Swisslife"],
      "Plan d’Epargne Retraite": ["Cardif", "Abeille", "Swisslife"],
      PEA: ["Cardif", "Abeille", "Swisslife"],
    },
    Immobilier: {
      Direct: ["Appartement", "Residence de Service"],
      SCPI: [
        'PRAEMEA Primopierre',
        'PRAEMEA Primovie',
        'PRAEMEA Patrimmo Commerce',
        'AREIM Transition Europe',
        'ATLAND Epargne Pierre Europe',
        'ATLAND Cœur d’Europe',
        'PAREF Hexa',
        'PAREF Evo',
        'SOGENIAL Cœur de Régions',
        'SOGENIAL Cœur d’Europe',
        'EURYALE Pierval Santé',
        'SOFIDY Immorente',
        'PERIAL PFO',
        'PERIAL PFO2',
        'ALTIXIA Cadence XII',
        'NORMA CAPITAL Vendome Regions',
        'CORUM Origin',
        'CORUM Eurion',
      ],
    },
    Forets: {
      "France Valley": [],
    },
    "Private Equity": {
      "ERES": [],
      "ALTAROC": [],
      "APAX by 72": [],
    },
  };

  const options = ["Sécurisé", "Équilibré", "Dynamique"];


  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
    setSelectedType("");
    setSelectedSubtype("");
    setSelectedOptions([]);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedSubtype("");
    setSelectedOptions([]);
  };

  const handleSubtypeChange = (e) => {
    setSelectedSubtype(e.target.value);
    setSelectedOptions([]);
  };

  const handleOptionChange = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((o) => o !== option)
        : [...prevOptions, option]
    );
  };


  const affaireHandler = () => {
    dispatch(addAffaire({ id: parseInt(affaires.length + 1), name: "Affaire " + parseInt(affaires.length + 1), selectedProduct, selectedType, selectedSubType, selectedOptions, clientID, inv, invMensuel }));
    console.log(addedProducts)
  }


  if (loading) return <Loader />
  if (client != null)
    return (
      <div className="mx-5 space-y-10">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.back()}>
          <ArrowLeft className="text-customBLUE" size={24} />
          <span className="text-customBLUE text-sm">Retour</span>
        </div>
        <div className='flex flex-row space-x-6'>
          <div className="flex flex-col w-[36%] space-y-6 ">
            <div className=" border p-4 rounded-lg shadow-lg bg-white">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row space-x-5 items-center">
                  <Avatar className="w-[25%] h-[25%]">
                    <AvatarImage src="/images/client.png" alt={clientID} />
                    {/* <AvatarFallback>{initials}</AvatarFallback> */}
                  </Avatar>
                  <div>
                    <h1 className="text-customBLUE text-xs md:text-sm">{client.id.toUpperCase()}</h1>
                    <div className='flex flex-row  items-center'>
                      <Badge variant="outline ">A.D</Badge>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <div className="flex items-center space-x-2 cursor-pointer">
                            <p className="text-sm text-blue-400">Modifier</p>
                            <Pencil className="text-blue-400" size={13} />
                          </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <h2 className="text-lg font-semibold">Modifier Potentiel</h2>
                          </AlertDialogHeader>
                          <AlertDialogDescription>
                            <h4 className="text-sm text-customBLUE font-medium">Potentiel</h4>
                            <div className="flex flex-row space-x-5 items-center">
                              <select
                                id="potentiel1"
                                className="form-input border p-2"
                                onChange={(e) => console.log("Potentiel 1 selected:", e.target.value)}
                              >
                                <option value="a">A</option>
                                <option value="b">B</option>
                                <option value="c">C</option>
                                <option value="d">D</option>
                                <option value="e">E</option>
                              </select>
                              <select
                                id="potentiel2"
                                className="form-input border p-2"
                                onChange={(e) => console.log("Potentiel 2 selected:", e.target.value)}
                              >
                                <option value="a">A</option>
                                <option value="b">B</option>
                                <option value="c">C</option>
                                <option value="d">D</option>
                                <option value="e">E</option>
                              </select>
                            </div>
                          </AlertDialogDescription>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              className="bg-customGold text-white px-4 py-2 rounded"
                              onClick={() => console.log("Enregistrer clicked")}
                            >
                              Enregistrer
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>


                    </div>

                  </div>
                </div>

                <h1 className={`text-xs md:text-sm font-bold capitalize ${client.status === 'Active'
                    ? 'text-green-500'
                    : client.status === 'Non-Active'
                      ? 'text-red-500'
                      : 'text-orange-500'
                  }`}>{client.status}</h1>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex flex-row justify-between items-center ">
                  <h1 className=" text-customBLUE text-xs md:text-sm">Nom</h1>
                  <h2 className="text-customGrey text-xs md:text-sm">{client?.nom + " " + client?.prenom}</h2>
                </div>
                <Separator />
                <div className="flex flex-row justify-between items-center ">
                  <h1 className=" text-customBLUE text-xs md:text-sm">Email</h1>
                  <h2 className="text-customGrey text-xs md:text-sm">{client?.email}</h2>
                </div>
                <Separator />
                <div className="flex flex-row justify-between items-center ">
                  <h1 className=" text-customBLUE text-xs md:text-sm">Num Tel</h1>
                  <h2 className="text-customGrey text-xs md:text-sm">{client?.telephone}</h2>
                </div>
                <Separator />
                <div className="flex flex-row justify-between items-center ">
                  <h1 className=" text-customBLUE text-xs md:text-sm">Localisation</h1>
                  <h2 className="text-customGrey text-xs md:text-sm">{client?.adresse_fiscale}</h2>
                </div>
              </div>
              <div className="flex justify-end w-full">
                <AlertDialog >
                  <AlertDialogTrigger asChild>
                    <Button className="mt-5 bg-customGold w-1/3 md:text-sm text-xs">
                      Voir plus
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="w-[80%] h-fit overflow-y-scroll max-h-[80%] max-w-[90%] p-6">
                    <AlertDialogHeader>
                      <div className='flex flex-row justify-between'>
                        <AlertDialogTitle>Informations sur Clients</AlertDialogTitle>
                        <AlertDialogCancel><X /></AlertDialogCancel>

                      </div>

                      <AlertDialogDescription className='flex justify-center items-center'>
                        <TabsContainer isEditing={isEditing} client={client} />
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <Button onClick={handleEditToggle} className='bg-customGold'>{isEditing ? "Save" : "Edit"}</Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                {/* <Button className="mt-5 bg-customGold w-1/3 md:text-sm text-xs">
              Voir plus
            </Button> */}
              </div>
            </div>
            <div className=" h-fit space-y-5 p-5 rounded-lg shadow-lg bg-white">
              <div className="flex flex-row justify-between">
                <h1 className="text-lg font-bold text-customBLUE">Commentaire</h1>
                <AlertDialog>
                  <AlertDialogTrigger> <CirclePlus className="text-customBLUE" size={20} /></AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Ajouter un commentaire a propos le client</AlertDialogTitle>
                      <AlertDialogDescription>
                        <div className='flex justify-center items-center'>
                          <textarea
                            className='border border-customGrey w-[80%] p-1 min-h-20'
                          />
                        </div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className='bg-customGold'>Enregistrer</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

              </div>
              <div className='flex flex-row justify-between'>
                <p className='text-sm'>Remarque 1 </p>
                <Trash2 size={20} className='text-red-600' />
              </div>
            </div>

          </div>
          <div className='flex flex-col space-y-6 '>
            <Calendar
              title="Calendar"
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow-lg bg-white"
              modifiers={{
                event: events.map((e) => e.date),
              }}
              modifiersClassNames={{
                event: "bg-customGold text-white rounded-full",
              }}
            />
            <div className=" h-fit space-y-3 p-5 rounded-lg shadow-lg bg-white">
              <div className="flex flex-row justify-between">
                <h1 className="text-lg font-bold text-customBLUE">Affaires</h1>
                <p className="text-sm text-customGrey">{affaires.length} Affaires</p>
              </div>
              {affaires.map((affaire) => (
                <div key={affaire.id} className="flex flex-row justify-between">
                  <p className="text-sm">{affaire.name}</p>
                  <button
                    className="underline underline-offset-4 text-customBLUE font-bold text-xs"
                    onClick={() => router.push(`/dashboard/clients/bussiness/${affaire.id}`)}
                  >

                    Voir Plus

                  </button>
                </div>
              ))}
              <div className="flex justify-end">
              <AlertDialog>
  <AlertDialogTrigger>
    <Button className="mt-5 bg-customGold md:text-sm text-xs">Ajouter</Button>
  </AlertDialogTrigger>
  <AlertDialogContent className="max-h-[90vh] overflow-y-auto">
    <AlertDialogTitle>Ajouter un nouveaux affaire pour ce client</AlertDialogTitle>
    <AlertDialogDescription>
      <form onSubmit={addProductHandler}>
        {/* Product Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Categorie</label>
          <select
            value={selectedProduct}
            onChange={handleProductChange}
            className="form-input border p-2 w-full"
            disabled={productDisabled}
          >
            <option value="">Sélectionnez une categorie</option>
            {Object.keys(productsData).map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>

        {/* Type Selection */}
        {selectedProduct && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <select
              value={selectedType}
              onChange={handleTypeChange}
              className="form-input border p-2 w-full"
            >
              <option value="">Sélectionnez un type</option>
              {Object.keys(productsData[selectedProduct]).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Subtype Selection */}
        {selectedType && (selectedProduct === "Asset Management" || selectedProduct === "Immobilier") && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Produit</label>
            <select
              value={selectedSubType}
              onChange={handleSubtypeChange}
              className="form-input border p-2 w-full"
            >
              <option value="">Sélectionnez un produit</option>
              {productsData[selectedProduct][selectedType].map((subtype) => (
                <option key={subtype} value={subtype}>
                  {subtype}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Options Selection */}
        {selectedSubType && selectedProduct === "Asset Management" && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Options</label>
            <div className="flex flex-wrap gap-4">
              {options.map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={option}
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionChange(option)}
                    className="form-checkbox"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Investissement Fields */}
        <label className="block text-sm font-medium text-gray-700" htmlFor="invesstissement">
          Investissement
        </label>
        <input
          type="number"
          id="investissement"
          className="form-input border p-2 w-full"
          value={inv}
          onChange={handleInv}
        />
        <label className="block text-sm font-medium text-gray-700" htmlFor="invesstissement_mensuel">
          Investissement Mensuel
        </label>
        <input
          type="number"
          id="investissement_mensuel"
          className="form-input border p-2 w-full"
          value={invMensuel}
          onChange={handleInvMensuel}
        />

        <button type="submit" className="px-6 py-2 bg-customGold text-white rounded-md">
          Ajouter
        </button>
      </form>

      {/* Scrollable List of Added Products */}
      <div className="overflow-y-auto max-h-[200px]">
        {addedProducts.map((addedProduct, index) => (
          <AddedProduct product={addedProduct} num={index + 1} />
        ))}
      </div>
    </AlertDialogDescription>

    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className="bg-customGold" onClick={affaireHandler}>Enregistrer</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>


              </div>
            </div>
          </div>
          <div className='flex flex-col w-[30%] space-y-6 '>
            <div className=" h-fit space-y-3 p-5 rounded-lg shadow-lg bg-white">
              <div className="flex flex-row justify-between">
                <h1 className="text-lg font-bold text-customBLUE">
                  Événements pour le {date.toLocaleDateString()}
                </h1>
                <AlertDialog>
                  <AlertDialogTrigger> <CalendarPlus className="text-customBLUE" size={20}
                  /></AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Ajouter un evenement pour cette date </AlertDialogTitle>
                      <AlertDialogDescription>
                        <div className='flex justify-center items-center'>
                          <input
                            type="text"
                            id="event"
                            placeholder='reunion , date de contrat ...'
                            className="border rounded px-3 py-2 text-sm text-customGrey w-full"
                          />
                        </div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className='bg-customGold'>Enregistrer</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

              </div>
              {eventsForSelectedDate.length > 0 ? (
                eventsForSelectedDate.map((event, index) => (
                  <div key={index} className="flex flex-row justify-between">
                    <p className="text-sm">{event.description}</p>
                    <Trash2 size={20} className="text-red-600" />
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">Aucun événement pour cette journée.</p>
              )}
            </div>

            <div className=" h-fit space-y-3 p-5 rounded-lg shadow-lg bg-white">
              <h1 className="text-lg font-bold text-customBLUE">Historique de Client </h1>
              <div className='flex flex-row justify-between'>
                <p>Date Signature initiale</p>
                <p className='text-customGold'>14/05/2023</p>
              </div>


            </div>


          </div>
        </div>

      </div>
    );
}
