import Link from "next/link";

export function AcademySection() {
  return (
    <section id="academy" className="py-20 bg-gray-800 min-w-fit">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
            Welcome to <span className="text-blue-600">NewD Academy</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Empower your future with industry-leading courses in AI,
            Cybersecurity, and IT Skills.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-stone-200 shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                AI for Beginners
              </h3>
              <p className="mt-4 text-gray-600">
                Learn the fundamentals of artificial intelligence and get
                hands-on experience building AI projects.
              </p>
              <Link legacyBehavior href="/courses/ai-for-beginners">
                <a className="mt-6 inline-block text-blue-600 hover:underline font-medium">
                  Learn More →
                </a>
              </Link>
            </div>
          </div>

          <div className="bg-stone-200  shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Cybersecurity Basics
              </h3>
              <p className="mt-4 text-gray-600">
                Master the core concepts of cybersecurity and learn how to
                protect data and systems from cyber threats.
              </p>
              <Link legacyBehavior href="/courses/cybersecurity-basics">
                <a className="mt-6 inline-block text-blue-600 hover:underline font-medium">
                  Learn More →
                </a>
              </Link>
            </div>
          </div>
          <div className="bg-stone-200 shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Advanced IT Tools
              </h3>
              <p className="mt-4 text-gray-600">
                Explore the advanced tools and technologies used by IT
                professionals in today's fast-paced industry.
              </p>
              <Link legacyBehavior href="/courses/advanced-it-tools">
                <a className="mt-6 inline-block text-blue-600 hover:underline font-medium">
                  Learn More →
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link legacyBehavior href="\courses">
            <a className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700">
              Explore All Courses
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
