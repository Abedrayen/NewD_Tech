"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { User, Shield, UserRoundPlus } from "lucide-react";
import ConsultantStat from "@/components/components/consultantStat";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import ConsultantTab from "../../../components/components/TableConsultant";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { Input } from "@/components/ui/input";

export default function Consultant() {
  const [position, setPosition] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAdminDialogOpen, setIsAdminDialogOpen] = useState(false);
  const [adminKey, setAdminKey] = useState("");
  const [keyError, setKeyError] = useState("");
  const correctKey = "12345"; // Replace this with your correct key

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    reset();
  };

  const handleDialogOpen = () => setIsDialogOpen(true);

  const handleAdminDialogClose = () => {
    setIsAdminDialogOpen(false);
    setAdminKey("");
    setKeyError("");
  };

  const handleAdminKeySubmit = () => {
    if (adminKey === correctKey) {
      setKeyError("");
      handleAdminDialogClose();
      handleDialogOpen(); // Open the consultant form
    } else {
      setKeyError("La clé est incorrecte.");
    }
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    handleDialogClose();
  };

  return (
    <div className="flex flex-col mb-28 justify-center items-center px-12">
      <div className="p-4 max-w-fit space-x-5 flex flex-row justify-center items-center rounded-lg shadow-lg bg-white mt-6">
        <ConsultantStat icon={User} title={"Total consultants"} value={10} />
        <Separator
          className="bg-customGrey h-16 hidden md:block"
          orientation="vertical"
        />
        <ConsultantStat icon={Shield} title={"Total des admins"} value={3} />
      </div>
      <div className="my-10 w-full">
        <div className="flex flex-row w-full justify-between mt-12 items-center mb-8">
          <h1 className="text-customBLUE text-xl font-bold">
            Liste des Consultants
          </h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-customBLUE text-customGold">
                <UserRoundPlus className="text-customGold" />
                Ajouter Consultant
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem
                  value="Consultant"
                  onSelect={handleDialogOpen}
                >
                  Consultant
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Admin"
                  onSelect={() => setIsAdminDialogOpen(true)}
                >
                  Admin
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Admin Key AlertDialog */}
        <AlertDialog
          open={isAdminDialogOpen}
          onOpenChange={setIsAdminDialogOpen}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-lg font-semibold text-customBLUE">
                Vérification Admin
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              <div className="space-y-4">
                <label className="block text-md font-medium text-customBLUE">
                  Entrez la clé admin
                </label>
                <Input
                  type="text"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  className="border p-2 focus:ring-customGold"
                />
                {keyError && (
                  <p className="text-red-500 text-sm mt-1">{keyError}</p>
                )}
              </div>
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleAdminDialogClose}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-customGold"
                onClick={handleAdminKeySubmit}
              >
                Vérifier
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Consultant Form AlertDialog */}
        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-lg font-semibold text-customBLUE">
                Ajouter un consultant
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              <form
                className="space-y-6 bg-gray-50 p-4 rounded-lg shadow"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="block text-md font-medium text-customBLUE">
                      Nom
                    </label>
                    <Input
                      type="text"
                      {...register("nomConsultant", {
                        required: "Le nom est obligatoire.",
                      })}
                      placeholder="Nom du Consultant"
                      className="border p-2 focus:ring-customGold"
                    />
                    {errors.nomConsultant && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.nomConsultant.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-md font-medium text-customBLUE">
                      Numéro Tel
                    </label>
                    <Input
                      type="text"
                      {...register("numTel", {
                        required: "Le numéro de téléphone est obligatoire.",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Le numéro de téléphone doit être valide.",
                        },
                      })}
                      placeholder="Numéro Tel"
                      className="border p-2 focus:ring-customGold"
                    />
                    {errors.numTel && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.numTel.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-md font-medium text-customBLUE">
                      Adresse Email
                    </label>
                    <Input
                      type="email"
                      {...register("email", {
                        required: "L'email est obligatoire.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Entrez un email valide.",
                        },
                      })}
                      placeholder="Adresse Email"
                      className="border p-2 focus:ring-customGold"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-md font-medium text-customBLUE">
                      Image
                    </label>
                    <Input
                      type="file"
                      {...register("image", {
                        required: "L'image est obligatoire.",
                      })}
                      placeholder="Ajouter image"
                      className="border p-2 focus:ring-customGold"
                    />
                    {errors.image && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.image.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                  <Button
                    type="submit"
                    className="bg-customGold text-white hover:bg-customGold-dark"
                  >
                    Ajouter
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleDialogClose}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </AlertDialogDescription>
            <AlertDialogFooter />
          </AlertDialogContent>
        </AlertDialog>

        <ConsultantTab />
      </div>
    </div>
  );
}
