'use client'

import { useRef, useState, useEffect } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell
} from '@/components/ui/table'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { getClientsPagintation } from '@/Apis/clientApi'
import { useDispatch, useSelector } from 'react-redux'
import { addClients, resetClient } from '@/slices/clientSlice'

// Static data for clients
// const clients = [
//   { nomClient: "John Doe", societe: "TechCorp", numeroTel: "+123456789", email: "john@example.com", pays: "USA", status: "Active" },
//   { nomClient: "Marie Dupont", societe: "Innovatech", numeroTel: "+33123456789", email: "marie@innovatech.com", pays: "France", status: "Non-Active" },
//   { nomClient: "Carlos Rodriguez", societe: "Soluciones SA", numeroTel: "+34987654321", email: "carlos@soluciones.es", pays: "Spain", status: "En attente" },
//   { nomClient: "Sara Kim", societe: "FutureVision", numeroTel: "+821012345678", email: "sara@futurevision.kr", pays: "South Korea", status: "Active" },
//   { nomClient: "Ali Hassan", societe: "NextGen Tech", numeroTel: "+971501234567", email: "ali@nextgen.com", pays: "UAE", status: "Active" },
//   { nomClient: "Emma Smith", societe: "BrightIdeas", numeroTel: "+441234567890", email: "emma@brightideas.uk", pays: "UK", status: "Non-Active" },
//   { nomClient: "Chen Wei", societe: "TechBridge", numeroTel: "+8613912345678", email: "chen@techbridge.cn", pays: "China", status: "Non-Active" },
//   { nomClient: "Lara Rossi", societe: "Innovazioni", numeroTel: "+390612345678", email: "lara@innovazioni.it", pays: "Italy", status: "En attente" },
//   { nomClient: "Juan Perez", societe: "Tech Solutions", numeroTel: "+573012345678", email: "juan@techsolutions.co", pays: "Colombia", status: "En attente" },
//   { nomClient: "Anna Svensson", societe: "Nordic Tech", numeroTel: "+46812345678", email: "anna@nordictech.se", pays: "Sweden", status: "Active" },
// ];

export default function PaginatedTable({ nbre }) {
  const didRun = useRef(false) //will be removed in production , just for making useEffect runs once now

  const [currentPage, setCurrentPage] = useState(1)
  const [queryPage, setQueryPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const { clients, totalClients } = useSelector(state => state.clients)
  const dispatch = useDispatch()
  const itemsPerPage = nbre

  const paginatedClients = clients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )
  const totalPages = Math.ceil(totalClients / itemsPerPage)

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const fetchClients = async () => {
    if (clients.length < queryPage * 2) {
      const res = await getClientsPagintation(queryPage, 1) //1 will be 8 in production or 5 as we wish
      if (res) {
        dispatch(addClients(res))
        setQueryPage(prev => prev + 1)
      }
    }
  }

  useEffect(() => {
    if (didRun.current) {
      fetchClients()
    } else didRun.current = true


  }, [queryPage])

  useEffect(() => {
    // fc=clients
  }, [searchQuery])

  return (
    <div>
      <div className="mb-4 hidden justify-end md:flex">
        <div className="flex w-64 items-center rounded border">
          <Search
            size={20}
            className="text-customGrey mx-2"
          />
          <input
            type="text"
            placeholder="Search clients..."
            value={searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
            className="py-2"
          />
        </div>
      </div>

      {/* Table */}
      <Table className="mb-8">
        <TableHeader>
          <TableRow>
            <TableHead>Nom Client</TableHead>
            <TableHead>Profession</TableHead>
            <TableHead>Numéro de tel</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Deparmtemt géographique</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedClients.map(client => (
            <TableRow key={client._id}>
              <TableCell className="font-medium">
                <Link
                  href={`/dashboard/clients/${encodeURIComponent(client._id)}`}
                  className="text-blue-500 hover:underline">
                  {client.nom + ' ' + client.prenom}
                </Link>
              </TableCell>
              <TableCell>{client.profession}</TableCell>
              <TableCell>{client.telephone}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.lieu_naissance}</TableCell>
              <TableCell>
                <span
                  className={`rounded px-2 py-1 text-white ${
                    client.status === 'Active'
                      ? 'bg-green-500'
                      : client.status === 'Non-Active'
                        ? 'bg-red-500'
                        : 'bg-orange-500'
                  }`}>
                  {client.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination className="text-sm">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={e => {
                e.preventDefault()
                handlePageChange(Math.max(currentPage - 1, 1))
              }}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={i + 1 === currentPage}
                onClick={e => {
                  e.preventDefault()
                  handlePageChange(i + 1)
                }}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={e => {
                e.preventDefault()
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
