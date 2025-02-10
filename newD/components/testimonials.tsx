import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const testimonials = [
  {
    name: "Alex Thompson",
    role: "Data Scientist",
    content: "The AI courses helped me transition from a traditional analytics role to a full-fledged data scientist position. The practical approach and hands-on projects were invaluable.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Sarah Chen",
    role: "Security Analyst",
    content: "The cybersecurity program provided me with the skills and confidence to tackle real-world security challenges. I'm now working at a leading tech company.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Michael Rodriguez",
    role: "Financial Analyst",
    content: "The finance courses, especially the Financial Data Analysis with Python, gave me the edge I needed in today's data-driven financial industry.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]


export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative bg-gray-50 text-black py-16"
    >
      {/* <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div> */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            What Our Clients and Students Say
          </h2>
          <p className="text-blue-950 text-lg max-w-2xl mx-auto">
            Join the thousands of businesses and learners who trust NewD to
            provide innovative solutions and world-class education.
          </p>
        </div>
        <section className="py-3">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="text-white bg-[#173364] hover:text-[#173364] hover:bg-white px-4 py-2 rounded transition-all duration-300 font-sans"
          >
            Share Your Experience
          </Button>
        </div>
      </div>
    </section>
  );
}
