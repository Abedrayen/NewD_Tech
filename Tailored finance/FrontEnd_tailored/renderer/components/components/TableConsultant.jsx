"use client";

import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Search, Trash, Trash2 } from "lucide-react";
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
import ProfileConsultant from '@/components/components/ProfileConsultant';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const consultants = [
  {
    nomConsultant: "Consultant2",
    status: "Admin",
    numTel: "+12345678",
    email: "admin@gmail.com",
  },
  {
    nomConsultant: "Consultant1",
    status: "Consultant",
    numTel: "+12345678",
    email: "consultant@gmail.com",
  },
];

export default function ConsultantTab() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [securityKey, setSecurityKey] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();
  const correctKey = "12345";
  const handleDelete = (consultant) => {
    if (consultant.status === "Consultant") {
      toast({
        description: "Le consultant a été supprimé avec succès.",
      });
    }
  };

  const handleAdminDelete = () => {
    if (securityKey === correctKey) {
      toast({
        description: "Le consultant Admin a été supprimé avec succès.",
      });
      setError("");
    } else {
      setError("La clé est incorrecte.");
    }
  };

  const filteredConsultant = consultants.filter((consultant) =>
    Object.values(consultant).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  const paginatedConsultant = filteredConsultant.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );
  const totalPages = Math.ceil(filteredConsultant.length / 5);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Search Input */}
      <div className="md:flex hidden justify-end mb-4">
        <div className="flex items-center border rounded w-64">
          <Search size={20} className="text-customGrey mx-2" />
          <input
            type="text"
            placeholder="Chercher consultants..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="py-2"
          />
        </div>
      </div>

      {/* Consultants Table */}
      <Table className="mb-8">
        <TableHeader>
          <TableRow>
            <TableHead>Nom Consultant</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Numéro de tel</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedConsultant.map((consultant) => (
            <TableRow key={consultant.nomConsultant}>
              {/* Consultant Name with AlertDialog */}
              <TableCell className="font-medium">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <span className="text-blue-500 cursor-pointer hover:underline">
                      {consultant.nomConsultant}
                    </span>
                  </AlertDialogTrigger>
                  <ProfileConsultant consultant={consultant} />
                </AlertDialog>
              </TableCell>
              <TableCell>{consultant.status}</TableCell>
              <TableCell>{consultant.numTel}</TableCell>
              <TableCell>{consultant.email}</TableCell>
              <TableCell>
              
              <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline"><Trash2 size={20} className="text-red-500" /></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Vous etes sur?</AlertDialogTitle>
          <AlertDialogDescription>
            Vous etes sur que vous voulez supprimer ce Consultant 
          </AlertDialogDescription>
        </AlertDialogHeader>
        
         
         
          {consultant.status === "Consultant" ? (
            <AlertDialogFooter>
             <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-500"
                          onClick={() => handleDelete(consultant)}
                        >
                          Continuer
                        </AlertDialogAction>
                        </AlertDialogFooter>
                      ) : (
                        
                        <div className="w-full ">
                          <input
                            type="text"
                            placeholder="Entrez la clé"
                            value={securityKey}
                            onChange={(e) => setSecurityKey(e.target.value)}
                            className="border  p-2 w-full mb-2"
                          />
                          {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                          )}
                          <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          {
                            securityKey === correctKey  ? (
                              <AlertDialogAction
                            className=" bg-red-500"
                            onClick={handleAdminDelete}
                          >
                            Vérifier et Continuer
                          </AlertDialogAction>
                            ):(
                              <Button
                              className=" bg-red-500"
                              onClick={handleAdminDelete}
                            >
                              Vérifier et Continuer
                            </Button>
                            )
                          }
                         
                          </AlertDialogFooter>
                        </div>
                      )}
          
    
      </AlertDialogContent>
    </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <Pagination className="text-sm">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(Math.max(currentPage - 1, 1));
              }}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={i + 1 === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(i + 1);
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(Math.min(currentPage + 1, totalPages));
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
