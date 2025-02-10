"use client"

import { Filters } from '../types'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CourseFiltersProps {
  filters: Filters;
  onFilterChange: (newFilters: Partial<Filters>) => void;
}

export default function CourseFilters({ filters, onFilterChange }: CourseFiltersProps) {
  return (
    <div className="flex gap-4">
      <Select 
        value={filters.category} 
        onValueChange={(value) => onFilterChange({ category: value })}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="ai">AI</SelectItem>
          <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
          <SelectItem value="finance">Finance</SelectItem>
          <SelectItem value="powerbi">Power BI</SelectItem>
        </SelectContent>
      </Select>
      <Select 
        value={filters.level}
        onValueChange={(value) => onFilterChange({ level: value })}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Levels</SelectItem>
          <SelectItem value="beginner">Beginner</SelectItem>
          <SelectItem value="intermediate">Intermediate</SelectItem>
          <SelectItem value="advanced">Advanced</SelectItem>
        </SelectContent>
      </Select>
      <Select 
        value={filters.duration}
        onValueChange={(value) => onFilterChange({ duration: value })}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Any Duration</SelectItem>
          <SelectItem value="0-4">0-4 weeks</SelectItem>
          <SelectItem value="5-8">5-8 weeks</SelectItem>
          <SelectItem value="9+">9+ weeks</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

