'use client'

import React, { useEffect, useState } from 'react'
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
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronsUpDown,
  Check
} from 'lucide-react'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
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
import { Checkbox } from '@/components/ui/checkbox'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { getClientsPagintation } from '@/Apis/clientApi'
import { useSelector } from 'react-redux'
import { transferClientsAPI } from '@/Apis/ConsultantApi'
// Columns definition
const allColumns = [
  { key: 'societe', label: 'Société' },
  { key: 'telephone', label: 'Numéro de tel' },
  { key: 'email', label: 'Email' },
  { key: 'pays', label: 'Pays' },
  { key: 'status', label: 'Status' },
  { key: 'adresse_fiscale', label: 'Adresse' },
  { key: 'age', label: 'Age' },
  { key: 'profession', label: 'Position' },
  { key: 'consultant', label: 'Consultant' }
]

// Sample data for clients
const clients = [
  {
    _id: '1',
    nomClient: 'John Doe',
    societe: 'TechCorp',
    numeroTel: '+123456789',
    email: 'john@example.com',
    pays: 'USA',
    status: 'Active',
    adresse: '123 Main St',
    age: '30',
    position: 'Manager',
    potentiel1: 'A',
    potentiel2: 'E',
    ProductCategory: 'Forets',
    consultant: 'Catherine'
  },
  {
    _id: '2',
    nomClient: 'Marie Dupont',
    societe: 'Innovatech',
    numeroTel: '+33123456789',
    email: 'marie@innovatech.com',
    pays: 'France',
    status: 'Non-Active',
    adresse: '45 Rue de Paris',
    age: '25',
    position: 'Engineer',
    potentiel1: 'B',
    potentiel2: 'E',
    ProductCategory: 'Immobilier',
    consultant: 'Catherine'
  },
  {
    _id: '3',
    nomClient: 'Carlos Rodriguez',
    societe: 'Soluciones SA',
    numeroTel: '+34987654321',
    email: 'carlos@soluciones.es',
    pays: 'Spain',
    status: 'En attente',
    adresse: 'Calle Principal 5',
    age: '40',
    position: 'CEO',
    potentiel1: 'C',
    potentiel2: 'E',
    ProductCategory: 'AssetManagement',
    consultant: 'Catherine'
  }
]
// const consultants = [
//   { id: 'consultant1', name: 'Consultant 1' },
//   { id: 'consultant2', name: 'Consultant 2' },
//   { id: 'consultant3', name: 'Consultant 3' }
// ]

export default function PaginatedTable({ nbre }) {
  const { clients, totalClients } = useSelector(state => state.clients)
  const { allConsultants: consultants } = useSelector(state => state.admin)
  const [selectedConsultant, setSelectedConsultant] = useState()
  const [open, setOpen] = useState(false)
  const [selectedClients, setSelectedClients] = useState([])
  const allClientIds = clients.map(client => client._id)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleColumns, setVisibleColumns] = useState([
    'profession',
    'telephone',
    'email',
    'status'
  ])
  const [filters, setFilters] = useState({}) // To hold the selected filter values
  const itemsPerPage = nbre

  // // Filter clients based on selected filters and search query
  // const filteredClients = clients.filter(client => {
  //   // Check if the search query matches any client property
  //   const matchesSearchQuery = Object.values(client).some(value =>
  //     value.toLowerCase().includes(searchQuery.toLowerCase())
  //   )

  //   // Check if the client matches all selected filters
  //   const matchesFilters = Object.entries(filters).every(([key, value]) => {
  //     if (!value) return true // If no filter is set, skip
  //     return client[key] && client[key].toLowerCase() === value.toLowerCase()
  //   })

  //   // Return clients that match both search query and filters
  //   return matchesSearchQuery && ma  tchesFilters
  // })
  const ResetFilter = () => {
    setFilters({})
  }

  const paginatedClients = clients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )
  const totalPages = Math.ceil(clients.length / itemsPerPage)

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const toggleColumn = key => {
    setVisibleColumns(prev =>
      prev.includes(key) ? prev.filter(col => col !== key) : [...prev, key]
    )
  }

  const handleFilterChange = (key, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [key]: value }))
  }
  const handleCheckboxChange = clientId => {
    setSelectedClients(
      prevSelected =>
        prevSelected.includes(clientId)
          ? prevSelected.filter(id => id !== clientId) // Remove client ID if already selected
          : [...prevSelected, clientId] // Add client ID if not selected
    )
  }
  const handleSelectAllChange = isChecked => {
    setSelectedClients(isChecked ? allClientIds : [])
  }

  const isAllSelected =
    selectedClients.lexngth === allClientIds.length && allClientIds.length > 0
  const isIndeterminate =
    selectedClients.length > 0 && selectedClients.length < allClientIds.length

  const clientsTransferHandler = async () => {
    // const res = await transferClientsAPI()
    setSelectedClients([])
  }

  return (
    <div>
      {/* Search and Dropdown */}
      <div className="mb-4 flex flex-col items-center justify-between md:flex-row">
        <div className="flex flex-row items-center justify-center space-x-3">
          <div className="flex w-64 items-center rounded border md:mb-0">
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                disabled={selectedClients.length === 0}
                className="bg-customBLUE text-white">
                Changer consultant
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Changer le consultant</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
                <Popover
                  open={open}
                  onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[200px] justify-between">
                      {selectedConsultant
                        ? selectedConsultant?.firstName +
                          ' ' +
                          selectedConsultant?.lastName
                        : 'Choose'}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Rechercher un consultant..." />
                      <CommandList>
                        <CommandEmpty>Non trouvé</CommandEmpty>
                        <CommandGroup>
                          {consultants.map(consultant => (
                            <CommandItem
                              key={consultant.id}
                              onSelect={() => {
                                setSelectedConsultant(consultant)
                                setOpen(false)
                              }}>
                              <Check
                                className={`mr-2 h-4 w-4 ${
                                  selectedConsultant._id === consultant._id
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                }`}
                              />
                              {consultant?.firstName +
                                ' ' +
                                consultant?.lastName}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={clientsTransferHandler}>
                  Apply
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="flex flex-row items-center justify-center space-x-4">
          {/* Filter Button that opens the dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-customBLUE">
                <SlidersHorizontal /> Filtrer
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex flex-row justify-between">
                  <p>Apply Filters</p>
                  <button
                    onClick={ResetFilter}
                    className="rounded-md bg-gray-200 p-1 text-xs text-gray-700 hover:bg-gray-300">
                    Reset
                  </button>
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="status"
                        className="text-customBLUE font-semibold">
                        Status
                      </label>
                      <select
                        id="status"
                        className="form-input w-full"
                        value={filters.status || ''}
                        onChange={e =>
                          handleFilterChange('status', e.target.value)
                        }>
                        <option value="">All</option>
                        <option value="Active">Active</option>
                        <option value="Non-Active">Non-Active</option>
                        <option value="En attente">En attente</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="pays"
                        className="text-customBLUE font-semibold">
                        Pays
                      </label>
                      <select
                        id="pays"
                        className="form-input w-full"
                        value={filters.pays || ''}
                        onChange={e =>
                          handleFilterChange('pays', e.target.value)
                        }>
                        <option value="">All</option>
                        <option value="USA">USA</option>
                        <option value="France">France</option>
                        <option value="Spain">Spain</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="category"
                        className="text-customBLUE font-semibold">
                        Categorie de produit
                      </label>
                      <select
                        id="category"
                        className="form-input w-full"
                        value={filters.category || ''}
                        onChange={e =>
                          handleFilterChange('category', e.target.value)
                        }>
                        <option value="All">All</option>
                        <option value="PrivateEquity">PrivateEquity</option>
                        <option value="Forets">Forets</option>
                        <option value="Immobilier">Immobilier</option>
                        <option value="AssetManagement">AssetManagement</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="societe"
                        className="text-customBLUE font-semibold">
                        Société
                      </label>
                      <select
                        id="societe"
                        className="form-input w-full"
                        value={filters.societe || ''}
                        onChange={e =>
                          handleFilterChange('societe', e.target.value)
                        }>
                        <option value="">All</option>
                        <option value="TechCorp">TechCorp</option>
                        <option value="Innovatech">Innovatech</option>
                        <option value="Soluciones SA">Soluciones SA</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="potentiel"
                        className="text-customBLUE font-semibold">
                        Potentiel
                      </label>
                      <div className="flex flex-row">
                        <select
                          id="potentiel"
                          className="form-input"
                          value={filters.potentiel1 || ''}
                          onChange={e =>
                            handleFilterChange('potentiel1', e.target.value)
                          }>
                          <option value="All">All</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                          <option value="E">E</option>
                        </select>
                        <select
                          id="potentiel"
                          className="form-input"
                          value={filters.potentiel2 || ''}
                          onChange={e =>
                            handleFilterChange('potentiel2', e.target.value)
                          }>
                          <option value="All">All</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                          <option value="E">E</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    /* Apply filters here */
                  }}>
                  Apply
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Column Selector Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Manage Columns</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64">
              <DropdownMenuLabel>Visible Columns</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {allColumns.map(column => (
                <DropdownMenuCheckboxItem
                  key={column.key}
                  checked={visibleColumns.includes(column.key)}
                  onCheckedChange={() => toggleColumn(column.key)}>
                  {column.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Table */}
      <Table className="mb-8">
        <TableHeader>
          <TableRow>
            {/* Fixed Column */}
            <TableHead>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4"
                checked={isAllSelected}
                ref={el => el && (el.indeterminate = isIndeterminate)}
                onChange={e => handleSelectAllChange(e.target.checked)}
              />
            </TableHead>
            <TableHead>Nom Client</TableHead>

            {/* Dynamic Columns */}
            {visibleColumns.map(key => {
              const column = allColumns.find(col => col.key === key)
              return <TableHead key={key}>{column?.label}</TableHead>
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedClients.map((client, index) => (
            <TableRow key={index}>
              {/* Fixed Column */}
              <TableCell>
                <input
                  type="checkbox"
                  id={`select-${client._id}`}
                  checked={selectedClients.includes(client._id)}
                  onChange={() => handleCheckboxChange(client._id)}
                  className="form-checkbox h-4 w-4"
                />
              </TableCell>
              <TableCell className="font-medium">
                <Link
                  href={`/dashboard/clients/${encodeURIComponent(client._id)}`}
                  className="text-blue-500 hover:underline">
                  {client.nom + ' ' + client.prenom}
                </Link>
              </TableCell>
              {/* Dynamic Columns */}
              {visibleColumns.map(key => (
                <TableCell key={key}>{client[key] || '-'}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
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
