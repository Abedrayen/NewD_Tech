import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Filters } from '../types'

const courseData = {
  ai: {
    title: "AI (Artificial Intelligence)",
    intro: "Discover the power of AI and its transformative impact across industries.",
    courses: [
      {
        title: "Introduction to Machine Learning",
        description: "Basics of machine learning, types of algorithms, practical applications.",
        duration: "6 weeks",
        level: "Beginner/Intermediate",
        mode: "Online/Offline",
        prerequisites: "Basic knowledge of Python",
      },
      {
        title: "Advanced Machine Learning",
        description: "Deep dive into supervised and unsupervised learning, model optimization.",
        duration: "8 weeks",
        level: "Intermediate/Advanced",
        mode: "Online/Offline",
        prerequisites: "Prior completion of an introductory course",
      },
      {
        title: "Deep Learning with TensorFlow",
        description: "Neural networks, CNNs, RNNs, working with TensorFlow for deep learning projects.",
        duration: "8 weeks",
        level: "Intermediate/Advanced",
        mode: "Online",
        prerequisites: "Knowledge of machine learning",
      },
      {
        title: "Exploring Generative AI with GPT",
        description: "Understanding the technology behind models like GPT, creating AI-driven applications.",
        duration: "6 weeks",
        level: "Intermediate",
        mode: "Online",
        prerequisites: "Familiarity with AI concepts and basic coding",
      },
    ],
  },
  cybersecurity: {
    title: "Cybersecurity",
    intro: "Learn to protect data and infrastructure in today's digital world.",
    courses: [
      {
        title: "Fundamentals of Cybersecurity",
        description: "An introduction to the basic concepts of cybersecurity, types of cyber threats, and how to protect data and systems.",
        duration: "6 weeks",
        level: "Beginner",
        mode: "Online",
        prerequisites: "None",
      },
      {
        title: "Networking and Security Essentials",
        description: "Learn the basics of networking and how to secure networks from attacks, including firewalls, intrusion detection systems, and secure protocols.",
        duration: "8 weeks",
        level: "Intermediate",
        mode: "Online",
        prerequisites: "Basic understanding of networking",
      },
      {
        title: "Certified Ethical Hacker (CEH)",
        description: "Learn the ethical hacking methodologies used by cybersecurity professionals to identify vulnerabilities and protect systems.",
        duration: "10 weeks",
        level: "Intermediate/Advanced",
        mode: "Online",
        prerequisites: "Basic understanding of cybersecurity",
      },
      {
        title: "Advanced Threat Detection and Incident Response",
        description: "Learn advanced techniques for detecting threats, investigating security incidents, and responding to breaches.",
        duration: "8 weeks",
        level: "Advanced",
        mode: "Online",
        prerequisites: "Knowledge of cybersecurity principles",
      },
      {
        title: "Prepare for CISSP",
        description: "A comprehensive preparation course for the CISSP certification, covering all critical areas of information security.",
        duration: "10 weeks",
        level: "Advanced",
        mode: "Online",
        prerequisites: "5 years of work experience in cybersecurity",
      },
    ],
  },
  finance: {
    title: "Finance",
    intro: "Master essential financial skills and stay ahead in the rapidly evolving world of finance.",
    courses: [
      {
        title: "Financial Accounting for Beginners",
        description: "Introduction to financial statements, balance sheets, and understanding company financials.",
        duration: "4 weeks",
        level: "Beginner",
        mode: "Online",
        prerequisites: "None",
      },
      {
        title: "Advanced Financial Modeling",
        description: "Building complex financial models for business analysis, forecasting, and decision-making.",
        duration: "8 weeks",
        level: "Intermediate/Advanced",
        mode: "Online",
        prerequisites: "Basic knowledge of accounting",
      },
      {
        title: "Investment Strategies and Risk Management",
        description: "An in-depth exploration of investment strategies, managing risk in portfolios, and creating diversified portfolios.",
        duration: "6 weeks",
        level: "Intermediate",
        mode: "Online",
        prerequisites: "Basic knowledge of financial markets",
      },
      {
        title: "Introduction to Blockchain and Cryptocurrency",
        description: "Fundamentals of blockchain technology, cryptocurrencies, and their impact on finance.",
        duration: "6 weeks",
        level: "Intermediate",
        mode: "Online",
        prerequisites: "None, but familiarity with finance concepts will be helpful",
      },
      {
        title: "Quantitative Finance and Algorithms",
        description: "Explore quantitative methods, financial algorithms, and their applications in modern finance.",
        duration: "8 weeks",
        level: "Advanced",
        mode: "Online",
        prerequisites: "Strong mathematical background and programming skills",
      },
    ],
  },
  powerbi: {
    title: "Power BI",
    intro: "Learn to create powerful business intelligence solutions with Microsoft Power BI.",
    courses: [
      {
        title: "Getting Started with Power BI",
        description: "An introduction to Power BI, data import, visualization basics, and dashboard creation.",
        duration: "4 weeks",
        level: "Beginner",
        mode: "Online",
        prerequisites: "None",
      },
      {
        title: "Advanced Power BI Techniques",
        description: "Advanced techniques for data modeling, custom visualizations, and automating reports.",
        duration: "6 weeks",
        level: "Intermediate/Advanced",
        mode: "Online",
        prerequisites: "Basic knowledge of Power BI or data visualization",
      },
      {
        title: "Using Power BI for Business Insights",
        description: "Using Power BI to gather business insights, analyze data trends, and make data-driven decisions.",
        duration: "6 weeks",
        level: "Intermediate",
        mode: "Online",
        prerequisites: "Familiarity with data analysis concepts",
      },
      {
        title: "Power BI and Data Integration",
        description: "Learn to integrate Power BI with various data sources and create comprehensive business intelligence solutions.",
        duration: "8 weeks",
        level: "Advanced",
        mode: "Online",
        prerequisites: "Experience with Power BI and understanding of data warehousing concepts",
      },
    ],
  },
}

interface CourseCategoriesProps {
  filters: Filters;
  onFilterChange: (newFilters: Partial<Filters>) => void;
}

export default function CourseCategories({ filters, onFilterChange }: CourseCategoriesProps) {
  const filterCourses = (courses: any[]) => {
    return courses.filter(course => {
      const categoryMatch = filters.category === 'all' || filters.category === course.category;
      const levelMatch = filters.level === 'all' || course.level.toLowerCase().includes(filters.level.toLowerCase());
      const durationMatch = filters.duration === 'all' || 
        (filters.duration === '0-4' && parseInt(course.duration) <= 4) ||
        (filters.duration === '5-8' && parseInt(course.duration) > 4 && parseInt(course.duration) <= 8) ||
        (filters.duration === '9+' && parseInt(course.duration) > 8);
      const searchMatch = filters.search === '' || 
        course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        course.description.toLowerCase().includes(filters.search.toLowerCase());
      
      return categoryMatch && levelMatch && durationMatch && searchMatch;
    });
  }

  return (
    <div className="space-y-12 mb-16">
      {Object.entries(courseData).map(([key, category]) => {
        const filteredCourses = filterCourses(category.courses.map(course => ({ ...course, category: key })));
        
        if (filteredCourses.length === 0) return null;

        return (
          <section key={key} className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
              <p className="text-slate-600">{category.intro}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCourses.map((course, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{course.description}</p>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <Badge variant="secondary">{course.duration}</Badge>
                        <Badge variant="secondary">{course.level}</Badge>
                        <Badge variant="secondary">{course.mode}</Badge>
                      </div>
                      <p className="text-sm text-slate-500">
                        <span className="font-semibold">Prerequisites:</span> {course.prerequisites}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  )
}

