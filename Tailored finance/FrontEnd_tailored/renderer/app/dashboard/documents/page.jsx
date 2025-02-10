"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import ReusableTable from "@/components/components/TableDocs";

export default function Docs() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const tableData = [
    { documents: "Document connaissance client",  date: "2024-11-17" },
    { documents: "Profilage Risque",  date: "2024-11-16" },
    { documents: "RA A-VIE TFI",  date: "2024-11-15" },
    { documents: "RA Forêts TFI",  date: "2024-11-14" },
    { documents: "RA PER TFI",  date: "2024-11-13" },
    { documents: "RA produits structurés",  date: "2024-11-12" },
    { documents: "RA SCPI TFI",  date: "2024-11-11" },
    { documents: "RA_Arbitrage_TFI",  date: "2024-11-11" },
  ];

  const totalPages = Math.ceil(tableData.length / itemsPerPage);


  const paginatedData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex items-center justify-center">
      <Tabs
        defaultValue="Tous"
        className="w-full  flex justify-center items-center flex-col space-y-5"
      >
        <TabsList>
          <TabsTrigger value="Tous">Tous</TabsTrigger>
          <TabsTrigger value="General">Documents Generals</TabsTrigger>
          <TabsTrigger value="Nouveaux">Nouveaux Clients</TabsTrigger>
          <TabsTrigger value="Anciens">Anciens Clients</TabsTrigger>
        </TabsList>
        <TabsContent value="Tous">
          <ReusableTable
            data={paginatedData}
            pagination={{
              currentPage,
              totalPages,
              onPageChange: setCurrentPage,
            }}
          />
        </TabsContent>
        <TabsContent value="General">
          <ReusableTable
            data={paginatedData}
            pagination={{
              currentPage,
              totalPages,
              onPageChange: setCurrentPage,
            }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
