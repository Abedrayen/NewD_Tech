import { SectionHeader } from "./section-header";

export function About() {
  return (
    <div className="flex flex-col justify-center space-y-3 bg-white py-6">
  <section
    id="about"
    className="container h-[90%] rounded-br-3xl rounded-tr-3xl md:rounded-br-full md:rounded-tr-full bg-gray-200 drop-shadow-2xl shadow-2xl border-r-8 border-[#193675] overflow-hidden p-6"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-xs sm:text-sm">
      <SectionHeader
        title="About NewD"
        subtitle="Leading the way in AI and cybersecurity innovation"
      />
      <div className="max-w-4xl mx-auto">
        <p className="text-base sm:text-lg lg:text-xl mb-6 text-gray-700 overflow-hidden text-ellipsis whitespace-normal">
          NewD is at the forefront of the digital revolution, delivering
          innovative AI and cybersecurity solutions to businesses worldwide. Our
          commitment to excellence and cutting-edge technology has positioned us
          as leaders in the industry.
        </p>
        <p className="text-base sm:text-lg lg:text-xl mb-6 text-gray-700 overflow-hidden text-ellipsis whitespace-normal">
          With a team of expert developers, data scientists, and cybersecurity
          specialists, we provide tailored solutions that help our clients
          navigate the complexities of the digital landscape and stay ahead of
          the curve.
        </p>
        <p className="text-base sm:text-lg lg:text-xl mb-6 text-gray-700 overflow-hidden text-ellipsis whitespace-normal">
          Leveraging state-of-the-art AI, cutting-edge technology, and the latest
          models, we develop CRM and e-invoicing applications with unparalleled
          efficiency and precision.
        </p>
      </div>
    </div>
  </section>

  <div className="bg-blue-950 p-6 sm:p-8 lg:p-10 text-center min-h-[1300px] sm:min-h-[600px]">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 py-3">
      Our Commitment to Innovation and Integrity
    </h2>
    <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-10 lg:gap-20">
      {/* Mission */}
      <div className="bg-white text-blue-950 p-6 rounded-lg shadow-md flex-1">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">Our Mission</h3>
        <p className="text-base sm:text-lg py-4">
          Innovating technology while empowering the next generation through
          education, to create a safer and more intelligent digital world.
        </p>
      </div>
      {/* Vision */}
      <div className="bg-white text-blue-950 p-6 rounded-lg shadow-md flex-1">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">Our Vision</h3>
        <p className="text-base sm:text-lg py-4">
          To become a global leader in technological innovation, fostering growth
          and progress for a sustainable and inclusive digital future.
        </p>
      </div>
      {/* Values */}
      <div className="bg-white text-blue-950 p-6 rounded-lg shadow-md flex-1">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">Our Values</h3>
        <p className="text-base sm:text-lg py-4">
          Integrity, creativity, and a commitment to excellence drive our mission
          to shape the future of technology.
        </p>
        <p className="text-base sm:text-lg py-4">
          Our development process is three times faster than competitors, and our
          cost-effective solutions offer prices that challenge half the market rates.
        </p>
      </div>
    </div>
  </div>
</div>

  );
}
