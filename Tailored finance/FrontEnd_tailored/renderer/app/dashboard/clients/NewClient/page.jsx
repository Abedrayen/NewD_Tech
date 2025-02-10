
'use client';
import { ArrowLeft } from "lucide-react";
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import TabsContainer from "@/components/components/ClientTab";
import AjoutClient from "@/components/components/AjoutClient"

export default function AddClient() {
    const router = useRouter();
        return (
        <div>
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.back()}>
                <ArrowLeft className="text-customBLUE" size={24} />
                <span className="text-customBLUE text-sm">Retour</span>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-center text-customBLUE">Ajouter un client</h1>
                <AjoutClient />
            </div>
        </div>
    )
}