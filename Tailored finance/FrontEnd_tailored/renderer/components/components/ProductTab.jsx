"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { SlidersHorizontal, Search } from "lucide-react";
import { Button } from '@/components/ui/button'

export function ProductTab() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterColumn, setFilterColumn] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [searchQuery, setSearchQuery] = useState('')
  const itemsPerPage = 8;

  // Static headers
  const headers = [
    "Produit",
    "Categorie",
    "Sous-categorie",
    "Nombre de Clients",
    "Volume d'affaires"
  ];

  // Table data
  const tableData = [
    {
      Produits: "Produit 1",
      Category: "Asset Management",
      SousCategorie: "Investissement",
      nombre: 10,
    },
    {
      Produits: "Produit 2",
      Category: "Immobilier",
      SousCategorie: "Location",
      nombre: 5,
    },
    {
      Produits: "Produit 3",
      Category: "Forets",
      SousCategorie: "Exploitation",
      nombre: 1,
    },
    {
      Produits: "Produit 4",
      Category: "Forets",
      SousCategorie: "Préservation",
      nombre: 0,
    },
    {
      Produits: "Produit 5",
      Category: "Private Equity",
      SousCategorie: "Capital",
      nombre: 10,
    },
    {
      Produits: "Produit 6",
      Category: "Asset Management",
      SousCategorie: "Gestion",
      nombre: 10,
    },
    {
      Produits: "Produit 7",
      Category: "Immobilier",
      SousCategorie: "Vente",
      nombre: 10,
    },
  ];

  const filteredData = tableData.filter((row) => {
    // Check for column-specific filtering
    const matchesFilter =
      !filterColumn || !filterValue
        ? true
        : row[filterColumn]
            ?.toString()
            .toLowerCase()
            .includes(filterValue.toLowerCase());
  
    // Check for search query only on the "Produits" field
    const matchesSearch =
      !searchQuery ||
      row.Produits?.toLowerCase().includes(searchQuery.toLowerCase());
  
    return matchesFilter && matchesSearch;
  });
  



  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto rounded-lg border shadow-md bg-white p-4 mb-20">
      {/* Filter Section */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex w-64 items-center rounded border md:mb-0">
          <Search size={20} className="text-customGrey mx-2" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="py-2"
          />
        </div>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="bg-customBLUE">
              <SlidersHorizontal /> Filtrer
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle className="flex flex-row justify-between">
              <p>Apply Filters</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setFilterColumn("");
                  setFilterValue("");
                }}
              >
                RESET
              </button>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <select
                className="form-input border p-2"
                value={filterColumn}
                onChange={(e) => setFilterColumn(e.target.value)}
              >
                <option value="">Filter by...</option>
                <option value="Category">Categorie</option>
                <option value="SousCategorie">Sous-categorie</option>
                <option value="nombre">Nombre de Clients</option>
              </select>
              <input
                type="text"
                placeholder="Enter filter value"
                className="form-input border p-2"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogAction>
                Apply
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>


        </AlertDialog>


      </div>

      {/* Table */}
      <Table className="w-full text-sm">
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead
                key={index}
                className={`font-bold text-gray-700 text-center ${index === 0
                  ? "w-[30%]" // Larger width for the "Produit" column
                  : "w-[20%]" // Equal width for other columns
                  }`}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, index) => (
            <TableRow
              key={index}
              className="hover:bg-gray-100 transition duration-150"
            >
              <TableCell className="w-[30%] text-center">{row.Produits}</TableCell>
              <TableCell className="w-[20%] text-center">{row.Category}</TableCell>
              <TableCell className="w-[20%] text-center">
                {row.SousCategorie}
              </TableCell>
              <TableCell className="w-[20%] text-center">{row.nombre}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <Pagination className="mt-6">
        <PaginationPrevious
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationPrevious>
        <PaginationContent>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                onClick={() => onPageChange(i + 1)}
                active={i + 1 === currentPage}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
        <PaginationNext
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationNext>
      </Pagination>
    </div>
  );
}
