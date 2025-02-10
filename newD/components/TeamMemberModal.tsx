import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface TeamMember {
  name: string
  position: string
  image: string
  description: string
}

interface TeamMemberModalProps {
  isOpen: boolean
  closeModal: () => void
  member: TeamMember | null
}

export function TeamMemberModal({ isOpen, closeModal, member }: TeamMemberModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'visible'
    }
  }, [isOpen, closeModal])

  if (!isOpen || !member) return null

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg max-w-[60%] w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="flex w-full">
          {/* Image Section */}
          <div className="w-1/2 pr-4">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                layout="intrinsic"
                width={350}
                height={250}
                className="object-cover rounded-lg"
              />
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-2 mt-2">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{member.position}</p>
            </div>
          </div>
          {/* Description Section */}
          <div className="w-1/2 pl-4 flex flex-col justify-center">
            <p className="text-sm text-gray-700">{member.description}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

