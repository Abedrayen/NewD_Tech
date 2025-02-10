import Image from "next/image";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0">
        <Image
          src="/abstract-bg.svg" // Replace with your actual background image
          alt="Background Design"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      {/* Animated Elements */}
      <div className="absolute top-16 left-16 w-20 h-20 bg-blue-400 opacity-50 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-500 opacity-40 rounded-full animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
          🚧 Site Under Construction 🚧
        </h1>
        <p className="text-xl sm:text-2xl text-blue-100 mb-8">
          We’re building something amazing for you! Please check back soon as
          we’re hard at work crafting the future of innovation.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition"
          >
            Contact Us
          </a>
          <a
            href="/"
            className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg shadow-lg hover:bg-white hover:text-blue-800 transition"
          >
            Back to Home
          </a>
        </div>
      </div>

      {/* Countdown or Progress Bar */}
      <div className="relative z-10 mt-12 w-11/12 sm:w-2/3 lg:w-1/2">
        <p className="text-center text-blue-200 mb-2">Estimated Launch:</p>
        <div className="w-full bg-blue-500 rounded-full overflow-hidden">
          <div
            className="h-4 bg-blue-200 rounded-full"
            style={{ width: "70%" }} // Adjust width for progress
          ></div>
        </div>
        <p className="text-center mt-2 text-blue-100">70% Complete</p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-blue-100 text-center">
        © {new Date().getFullYear()} NewD. All Rights Reserved.
      </footer>
    </div>
  );
}
