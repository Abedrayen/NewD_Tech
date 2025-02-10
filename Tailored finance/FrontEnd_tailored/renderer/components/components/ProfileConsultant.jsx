'use client';

import React, { useState } from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function ProfileConsultant({ consultant }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        nomConsultant: consultant.nomConsultant,
        status: consultant.status,
        numTel: consultant.numTel,
        email: consultant.email,
        image: "/images/client.png", // Default image path
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFormData((prev) => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleEditing = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            // Handle save logic here
            console.log("Saved data:", formData);
        }
    };

    return (
  
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row space-x-5 items-center">
                                <Avatar className="w-[25%] h-[25%]">
                                    <AvatarImage src={formData.image} alt={formData.nomConsultant} />
                                    <AvatarFallback>Con</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h1 className="text-customBLUE text-xs md:text-sm">{formData.nomConsultant}</h1>
                                </div>
                            </div>
                            <h1 className="text-green-600 text-xs md:text-sm font-bold">10 Clients</h1>
                        </div>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <form className="space-y-4">
                            <div className="flex flex-col">
                                <Label className="text-sm font-medium text-customBLUE">Nom Consultant</Label>
                                <Input
                                    type="text"
                                    name="nomConsultant"
                                    value={formData.nomConsultant}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`border p-2 ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label className="text-sm font-medium text-customBLUE">Status</Label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`border p-2 ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
                                >
                                    <option value="admin">Admin</option>
                                    <option value="consultant">Consultant</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <Label className="text-sm font-medium text-customBLUE">Numéro de téléphone</Label>
                                <Input
                                    type="text"
                                    name="numTel"
                                    value={formData.numTel}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`border p-2 ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label className="text-sm font-medium text-customBLUE">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`border p-2 ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label className="text-sm font-medium text-customBLUE">Changer l'image</Label>
                                <Input
                                    type="file"
                                    onChange={handleFileChange}
                                    disabled={!isEditing}
                                    className={`border p-2 ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
                                />
                            </div>
                        </form>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button onClick={toggleEditing} className="w-full">
                        {isEditing ? "Save" : "Modify"}
                    </Button>
                    <AlertDialogCancel>Fermer</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
    
    );
}
