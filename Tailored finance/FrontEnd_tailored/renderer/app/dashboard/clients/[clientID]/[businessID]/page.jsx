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
import { CalendarPlus, Trash2, CirclePlus, File } from 'lucide-react';
import { ArrowLeft } from "lucide-react";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSelector } from 'react-redux';


export default function AffaireDetails() {
  const params = useParams();
  const businessID = params.businessID ? decodeURIComponent(params.businessID) : '';
  const {clients}=useSelector(state=>state.clients);
  const {affaires}=useSelector(state=>state.temp);
  const [client,setClient]=useState();
  const [business,setBusiness]=useState(null)

  useEffect(()=>
  {
    if (businessID)
    {
      const aux=affaires.find((aff)=>aff.id==businessID);
      console.log("affaire : "+JSON.stringify(aux));

      setBusiness(aux);
    }
  },[businessID])

  useEffect(()=>
  {
    if (clients.length>0&&business)
    {
      const aux=clients.find((client)=>client._id==business.clientID);
      console.log("client : "+JSON.stringify(aux));
      setClient(aux);
    }
  },[business,clients])

  const router = useRouter(); // Initialize router
  const [date, setDate] = React.useState(new Date());
  const events = [
    { date: new Date(2024, 10, 20), description: 'Meeting with client' },
    { date: new Date(2024, 10, 25), description: 'Project deadline' },
  ];

  // Filter events for the selected date
  const eventsForSelectedDate = events.filter(
    (event) =>
      event.date.toDateString() === date?.toDateString()
  );
  const [isLoading, setIsLoading] = useState(false);

  // Fonction déclenchée lors du clic sur "Générer"
  const handleGenerate = () => {
    setIsLoading(true);

    // On simule un temps de traitement de 5 secondes
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  return (
    <div className="px-10 space-y-10">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.back()}>
        <ArrowLeft className="text-customBLUE" size={24} />
        <span className="text-customBLUE text-sm">Retour</span>
      </div>
      {/* <h1 className="text-2xl font-bold text-customGrey mb-10">Affaire{affaireId}</h1> */}
      <div className="space-y-4">
        <div className="flex flex-row justify-between ">
          <div className='space-y-3 w-[40%]'>
            <div className=" h-fit w-full border p-4 rounded-lg shadow-lg bg-white">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row space-x-5 items-center">
                  <Avatar className="w-[25%] h-[25%]">
                    <AvatarImage src="/images/client.png" alt="image" />
                    <AvatarFallback>CL</AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="text-customBLUE text-xs md:text-sm">{client?.nom+" "+client?.prenom}</h1>
                    <h3 className="text-customGrey text-xs md:text-sm">{client?.email}</h3>
                  </div>
                </div>

                <h1 className="text-green-600 text-xs md:text-sm font-bold">Active</h1>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex flex-row justify-between items-center ">
                  <h1 className=" text-customBLUE text-xs md:text-sm">Solution</h1>
                  <h2 className="text-customGrey text-xs md:text-sm">{business?.selectedProduct}</h2>
                </div>
                <Separator />
                <div className="flex flex-row justify-between items-center ">
                  <h1 className=" text-customBLUE text-xs md:text-sm">type</h1>
                  <h2 className="text-customGrey text-xs md:text-sm">{business?.selectedType||business?.selectedSubType}</h2>
                </div>
                
                <Separator />
                {business?.selectedSubType&&
                <>
                <div className="flex flex-row justify-between items-center ">
                  <h1 className=" text-customBLUE text-xs md:text-sm">Sous Type</h1>
                  <h2 className="text-customGrey text-xs md:text-sm">{business.selectedSubType}</h2>
                </div>
                <Separator />
                </>}
                {business?.selectedOptions?.length>0&&
                <>
                <div className="flex flex-row justify-between items-center ">
                  <h1 className=" text-customBLUE text-xs md:text-sm">Critères</h1>
                  <h2 className="text-customGrey text-xs md:text-sm">{business?.selectedOptions?.map(((option,index)=>(
                     <React.Fragment key={index}>
                      {option}
                      <br/>
                      </React.Fragment>
                  )))}</h2>
                </div>
                <Separator />
                </>}
                <div className="flex flex-row justify-between items-center ">
                  <h1 className=" text-customBLUE text-xs md:text-sm">Invesstissement</h1>
                  <h2 className="text-customGrey text-xs md:text-sm">{business?.inv}</h2>
                </div>
                <Separator />
                <div className="flex flex-row justify-between items-center ">
                  <h1 className=" text-customBLUE text-xs md:text-sm">Invesstissement Mensuel</h1>
                  <h2 className="text-customGrey text-xs md:text-sm">{business?.invMensuel}</h2>
                </div>
                {/* <Separator />
                <div className="flex flex-row justify-between items-center ">
                  <h1 className=" text-customBLUE text-xs md:text-sm">Date de Création </h1>
                  <h2 className="text-customGrey text-xs md:text-sm">10/02/2024</h2>
                </div> */}
              </div>
              

            </div>
            <div className=" h-fit space-y-5 p-5  rounded-lg shadow-lg bg-white">
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
          <div className="border w-72  mr-10 h-fit space-y-8 py-4 px-10 rounded-lg shadow-lg bg-white">
            <h1 className="text-customBLUE text-xs md:text-lg font-bold">Documents</h1>

            <div className="mt-4 space-y-3">
              <div className="flex flex-row items-center space-x-5">
                <File className="text-customBLUE" />
                <h1 className=" text-customBLUE text-xs md:text-sm">Document connaissance client</h1>
                <Button className="bg-red-600 text-white p-2"  onClick={handleGenerate}>
                  Genérer
                </Button>
                {isLoading && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-md flex flex-col items-center">
                      <svg
                        className="animate-spin h-5 w-5 text-red-600 mb-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-7.75 8.78l1.21-1.21A6.99 6.99 0 014 12z"
                        />
                      </svg>
                      <p className="text-black">Generation en cours...</p>
                    </div>
                  </div>
                )}

              </div>
              <Separator />
              <div className="flex flex-row items-center space-x-5">
                <File className="text-customBLUE" />
                <h1 className=" text-customBLUE text-xs md:text-sm">Profilage risque</h1>
                <h2 className="text-orange-400 text-xs md:text-sm font-bold">En attente</h2>
              </div>
              <Separator />
              <div className="flex flex-row items-center space-x-5">
                <File className="text-customBLUE" />
                <h1 className=" text-customBLUE text-xs md:text-sm">RA SCPI TFI</h1>
                <h2 className="text-orange-400 text-xs md:text-sm font-bold">En attente</h2>
              </div>
              <Separator />
              <div className="flex flex-row items-center space-x-5">
                <File className="text-customBLUE" />
                <h1 className=" text-customBLUE text-xs md:text-sm">Rapport d’adequation </h1>
                <h2 className="text-green-600 text-xs md:text-sm font-bold">Done</h2>
              </div>
            </div>

          </div>
          <div className='space-y-3'>
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
            <div className="h-fit space-y-3 p-5 rounded-lg shadow-lg bg-white">
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
          </div>

        </div>

      </div>
    </div>
  );
}
