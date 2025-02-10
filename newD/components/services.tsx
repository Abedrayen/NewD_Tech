import { Brain, Shield, Cog } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "AI Solutions",
    description: "Harness the power of artificial intelligence to transform your business processes and decision-making. Our cutting-edge AI solutions are designed to optimize operations, enhance customer experiences, and drive innovation across your organization.",
    icon: Brain,
    features: ["Machine Learning Models", "Natural Language Processing", "Predictive Analytics"]
  },
  {
    title: "Cybersecurity Strategies",
    description: "Protect your digital assets and maintain data integrity with our comprehensive cybersecurity solutions. We offer robust strategies to safeguard your business against evolving threats in the digital landscape.",
    icon: Shield,
    features: ["Threat Detection & Response", "Data Encryption", "Security Audits"]
  },
  {
    title: "IT Consulting",
    description: "Align your IT infrastructure with your business goals through our expert IT consulting services. We provide strategic guidance to help you leverage technology for sustainable growth and competitive advantage.",
    icon: Cog,
    features: ["Technology Roadmapping", "Cloud Migration", "Digital Transformation"]
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header Section */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
        Innovative solutions to drive your business forward in the digital age
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Card key={index} className="flex flex-col">
          {/* Card Header */}
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
              <service.icon className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-center lg:text-left">{service.title}</CardTitle>
          </CardHeader>

          {/* Card Content */}
          <CardContent className="flex-grow">
            <CardDescription className="text-base mb-4 text-center lg:text-left">
              {service.description}
            </CardDescription>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-center justify-center lg:justify-start"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          {/* Card Footer */}
          <CardFooter>
            <Button className="w-full">Learn More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
</section>

  )
}

