'use client'

import { useState } from 'react'
import Image from 'next/image'
import { TeamMemberModal } from './TeamMemberModal'

interface TeamMember {
  name: string
  position: string
  image: string
  description: string
}

export default function TeamSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const team: TeamMember[] = [
    {
      name: "Mounir SHAL",
      position: "Co Founder",
      image: "/images/mounir.jpg",
      description: "With more than 20 years' experience in data management, advanced analytics and cybersecurity, I've built a career around solving complex problems and driving digital business transformation. My expertise covers a wide range of areas, including risk management, data governance, and the development of artificial intelligence solutions.I have worked for leading financial and technology institutions, where I have led strategic projects such as the deployment of Basel II/III-compliant risk management tools (SAS RCM/IRM), the design of interactive dashboards with Power BI and SAS Visual Analytics, and the migration and optimization of BI platforms. As founder of NewD SARL-S, I'm now putting my experience at the service of companies by offering them innovative solutions in the fields of AI and cybersecurity. Our mission is to help our customers master their data, strengthen their digital security and improve their performance through cutting-edge technological tools. My academic background - a Master's degree in Database and Software Science and a DEA in Quantitative Modeling - complements this technical expertise with a rigorous analytical approach."
    },
    {
      name: "Guillaume DE LONLAY",
      position: "Co Founder",
      image: "/images/guillaume.jpg",
      description: "Guillaume is a renowned AI researcher with a Ph.D. in Machine Learning. She spearheads our AI research projects and collaborates with academic institutions worldwide."
    },
    {
      name: "Angela Ortiz Munoz",
      position: "Project coordinator",
      image: "/images/angela.jpg",
      description: "Angela is a seasoned Business Development Executive at NewD Consulting, where she drives initiatives to enhance visibility and growth in the fields of artificial intelligence and cybersecurity. She holds a BSc (Hons) Economics from London School of Economics (London), a MSc CEMS MIM from Bocconi University (Milan) and ESADE Business School (Barcelona) and a PhD in Economics and Finance from Luxembourg School of Finance (Luxembourg). With a strong foundation in data analysis and model building honed during her doctoral research and her experience in the private equity sector in London, she effectively aligns NewD’s service offerings with evolving client needs and industry trends.Angela serves as an Audit Analyst at the European Court of Auditors, where she is instrumental in compliance and performance audits for various EU-funded projects. Her extensive experience in auditing and regulatory frameworks equips her with a unique perspective on the importance of robust data governance in digital transformation. With a commitment to empowering organizations through innovative solutions, Angela leverages her analytical expertise and strategic insights to foster strong partnerships and drive successful outcomes for clients navigating the complexities of the digital landscape."
    },
    {
      name: "Rayen Abed",
      position: "Lead IT Department",
      image: "/images/rayen.jpeg",
      description: "Abed Rayen is a skilled software engineer and instructor whose career exemplifies technical mastery, innovation, and a commitment to continuous learning. He has established himself as a dynamic force in the tech industry, combining a passion for teaching with the drive to create impactful solutions.Known for his versatility and precision, Rayen excels in web and mobile development, artificial intelligence, and solving complex algorithmic problems. His expertise spans modern technologies, including the MERN stack and Python, as well as advanced fields like deep learning, recommendation systems, and large language models (LLMs).As a mentor, Rayen inspires and guides aspiring developers, sharing his knowledge across a broad range of topics—from programming fundamentals to advanced concepts such as RNNs, GRUs, and LSTMs."
    },
    {
      name: "Zeineb Mezghanni",
      position: "Project Manager",
      image: "/images/zayneb.jpeg",
      description: "Zayneb is a seasoned IT professional with a knack for designing scalable and efficient IT infrastructures. He oversees the implementation of our IT consulting projects."
    }
  ]

  const openModal = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experts behind our innovative solutions in AI, cybersecurity, and technology education.
          </p>
        </div>
        {/* Première ligne - 2 membres */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 px-4 sm:px-16 md:px-32 lg:px-56">
          {team.slice(0, 2).map((member) => (
            <div key={member.name} className="flex flex-col items-center border p-4 rounded-lg shadow-md">
              <button
                onClick={() => openModal(member)}
                className="relative w-48 h-48 mb-4 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </button>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{member.position}</p>
              <button
                onClick={() => openModal(member)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Voir plus
              </button>
            </div>
          ))}
        </div>
        {/* Deuxième ligne - 3 membres */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-16 md:px-32 lg:px-56">
          {team.slice(2, 5).map((member) => (
            <div key={member.name} className="flex flex-col items-center border p-4 rounded-lg shadow-md">
              <button
                onClick={() => openModal(member)}
                className="relative w-48 h-48 mb-4 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </button>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{member.position}</p>
              <button
                onClick={() => openModal(member)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Voir plus
              </button>
            </div>
          ))}
        </div>
      </div>
      <TeamMemberModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        member={selectedMember}
      />
    </section>
  )
}

