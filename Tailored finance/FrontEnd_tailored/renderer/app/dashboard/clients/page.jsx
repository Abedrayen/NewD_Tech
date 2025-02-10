"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  UserRoundCheck,
  MonitorCheck,
  UserRoundPlus,
  ChevronsUpDown,
  Check,
} from "lucide-react";
import ClientStat from "@/components/components/clientStat";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import ClientsTable from "@/components/components/ClientsTable";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSelector } from "react-redux";

const consultants = [
  { id: "all", name: "Tous les consultants" },
  { id: "consultant1", name: "Consultant 1" },
  { id: "consultant2", name: "Consultant 2" },
  { id: "consultant3", name: "Consultant 3" },
];

const allClients = [
  { consultantId: "consultant1", clientName: "Client A", details: "Details A" },
  { consultantId: "consultant2", clientName: "Client B", details: "Details B" },
  { consultantId: "consultant3", clientName: "Client C", details: "Details C" },
  { consultantId: "consultant1", clientName: "Client D", details: "Details D" },
  { consultantId: "consultant2", clientName: "Client E", details: "Details E" },
];

export default function ClientPage() {  
  const [selectedConsultant, setSelectedConsultant] = useState("all");
  const [open, setOpen] = useState(false);

  const {role}=useSelector(state=>state.consultant);

  // Filter clients based on the selected consultant
  const filteredClients =
    selectedConsultant === "all"
      ? allClients
      : allClients.filter(
          (client) => client.consultantId === selectedConsultant
        );

  return (
    <div className="flex flex-col mb-28 justify-center items-center px-12">
      {/* Consultant Selector */}
      {role=="Admin"&&<Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {selectedConsultant === "all"
              ? "Tous les consultants"
              : consultants.find((c) => c.id === selectedConsultant)?.name}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Rechercher un consultant..." />
            <CommandList>
              <CommandEmpty>Non trouvé</CommandEmpty>
              <CommandGroup>
                {consultants.map((consultant) => (
                  <CommandItem
                    key={consultant.id}
                    onSelect={() => {
                      setSelectedConsultant(consultant.id);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={`mr-2 h-4 w-4 ${
                        selectedConsultant === consultant.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                    {consultant.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>}

      {/* Stats Section */}
      <div className="p-4 max-w-fit space-x-5 flex flex-row justify-center items-center rounded-lg shadow-lg bg-white mt-6">
        <ClientStat
          growth={"+1.5"}
          icon={Users}
          title={"Total des clients"}
          value={filteredClients.length}
        />
        <Separator
          className="bg-customGrey h-16 hidden md:block"
          orientation="vertical"
        />
        <ClientStat
          growth={"+1.5"}
          icon={UserRoundCheck}
          title={"Nouveaux Clients"}
          value={879} // Example: Replace with dynamic data
        />
        <Separator
          className="bg-customGrey h-16 hidden md:block"
          orientation="vertical"
        />
        <ClientStat
          growth={"+1.5"}
          icon={MonitorCheck}
          title={"Nouveaux Affaires"}
          value={879} // Example: Replace with dynamic data
        />
      </div>

      {/* Clients List Section */}
      <div className="w-full">
        <div className="flex flex-row w-full justify-between mt-12 items-center mb-8">
          <h1 className="text-customBLUE text-xl font-bold">Liste des Clients</h1>
          <Button className="bg-customBLUE">
            <UserRoundPlus className="text-customGold" />
            <Link href={`./NewClient`} className="text-customGold">
              Ajouter Client
            </Link>
          </Button>
        </div>

        {/* Display Filtered Clients */}
        <ClientsTable nbre={2}  />
      </div>
    </div>
  );
}
