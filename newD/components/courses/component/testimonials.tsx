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

export default function Testimonials() {
  return (
    <section className="py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What Our Students Say</h2>
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
  )
}

