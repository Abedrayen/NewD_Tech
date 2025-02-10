'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import CourseCategories from "../../components/courses/component/course-categories"
import CourseFilters from "../../components/courses/component/course-filters"
import Testimonials from "../../components/courses/component/testimonials"
import { Filters } from '../../components/courses/types'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CoursesPage() {
  const [filters, setFilters] = useState<Filters>({
    category: 'all',
    level: 'all',
    duration: 'all',
    search: '',
  })

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="bg-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Courses</h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Discover comprehensive courses designed to help you master new skills and advance your career in technology, cybersecurity, and finance.
              </p>
              <Button
                variant="outline"
                className="bg-transparent text-white hover:bg-white hover:text-blue-800"
                asChild
              >
                <a href="/">Back to Academy</a>
              </Button>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/s.PNG"
                alt="NewD Academy Logo"
                width={250}
                height={250}
                className="rounded-full bg-white p-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input
              type="search"
              placeholder="Search courses..."
              className="pl-10 w-full"
              value={filters.search}
              onChange={(e) => handleFilterChange({ search: e.target.value })}
            />
          </div>
          <CourseFilters filters={filters} onFilterChange={handleFilterChange} />
        </div>

        {/* Course Categories */}
        <CourseCategories filters={filters} onFilterChange={handleFilterChange} />

        {/* Testimonials */}
        <Testimonials />

        {/* Bottom CTA */}
        <div className="text-center py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-slate-600 mb-8">Join thousands of students already learning with us</p>
          <Button size="lg" asChild>
            <a href="/register">Sign Up for a Course</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

