"use client";
import React from "react";
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
import { Download, RefreshCcw, Trash2 } from "lucide-react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export default function ReusableTable({ data, pagination }) {
  const { currentPage, totalPages, onPageChange } = pagination;

  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)
  const [showPanel, setShowPanel] = React.useState(false)

  // Static headers
  const headers = ["Documents",  "Date de dernière modification", "Actions"];

  return (
    <div className="w-full max-w-[1200px] mx-auto rounded-lg border shadow-md bg-white p-6">
      {/* Table */}
      <Table className="w-full text-lg">
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead
                key={index}
                className={`font-bold text-gray-700 text-center ${index === 0
                    ? "w-[30%]" // Larger width for the "Documents" column
                    : index === 2
                      ? "w-[40%]" // Largest width for "Date de dernière modification"
                      : "w-[15%]" // Default width for other columns
                  }`}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              className="hover:bg-gray-100 transition duration-150 text-center"
            >
              <TableCell className="w-[30%]">{row.documents}</TableCell>
              <TableCell className="w-[40%]">{row.date}</TableCell>
              <TableCell className="w-[15%] text-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="bg-white border-white text-gray-700 hover:bg-gray-100 hover:border-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                 
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                     className="flex flex-row gap-x-3 items-center"
                      checked={showStatusBar}
                      onCheckedChange={setShowStatusBar}
                    >
                      <Trash2 size={12} />
                      Supprimer 
                    </DropdownMenuItem>
                   
                    <DropdownMenuItem
                    className="flex flex-row gap-x-3 items-center"
                      checked={showPanel}
                      onCheckedChange={setShowPanel}
                    >
                      <Download  size={12}/>
                    Telecharger
                    </DropdownMenuItem>
                    <DropdownMenuItem
                     className="flex flex-row gap-x-3 items-center"
                      checked={showPanel}
                      onCheckedChange={setShowPanel}
                    >
                      <RefreshCcw size={12} />
                     Regenerer
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>


              </TableCell>

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
