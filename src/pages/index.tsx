import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Head>
        <title>Language Transfer | Thinking Method</title>
        <meta
          name="description"
          content="Free audio language courses using the Thinking Method"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed left-0 right-0 top-0 z-50 bg-white">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex gap-8">
              <Link href="/" className="text-gray-700 hover:text-black">
                HOME
              </Link>
              <Link href="/courses" className="text-gray-700 hover:text-black">
                FREE COURSES
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-black">
                ABOUT
              </Link>
              <Link
                href="/collaborate"
                className="text-gray-700 hover:text-black"
              >
                COLLABORATE
              </Link>
            </div>
            <Link
              href="/donate"
              className="rounded-full border border-black px-6 py-1 text-sm hover:bg-gray-100"
            >
              DONATE
            </Link>
          </div>
        </nav>

        {/* Hero Section with Testimonials */}
        <section className="pb-16 pt-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 items-center gap-8">
              {/* Left Testimonials */}
              <div className="text-right">
                {leftTestimonials.map((quote, index) => (
                  <p key={index} className="mb-4 font-mono text-sm">
                    {quote}
                  </p>
                ))}
              </div>

              {/* Center Logo */}
              <div className="text-center">
                <Image
                  src="/images/lt-logo.png"
                  alt="Language Transfer Logo"
                  width={800}
                  height={800}
                  className="mx-auto mb-8"
                />
                <h1 className="text-4xl font-bold tracking-tight">
                  LANGUAGE TRANSFER
                </h1>
              </div>

              {/* Right Testimonials */}
              <div className="text-left">
                {rightTestimonials.map((quote, index) => (
                  <p key={index} className="mb-4 font-mono text-sm">
                    {quote}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tagline Section */}
        <section className="py-16 text-center">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="mb-8 text-3xl font-bold">
              IT&apos;S ONLY AS HARD AS STARTING...
            </h2>
            <p className="mb-8 text-gray-600">
              Sometimes just getting started is the biggest challenge of all,
              but once you do start, LT promises you an instant sense of
              progress, and an ensuing learning journey like none other!
            </p>
            <p className="text-gray-600">
              Choose your language below or download the app, and see how much
              you can learn today!
            </p>
          </div>
        </section>

        {/* Course Grid */}
        <section className="px-4 py-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <Link
                  key={course.name}
                  href={`/course/${course.slug}`}
                  className="group"
                >
                  <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
                    <div className="relative aspect-[4/3] bg-gray-100">
                      <img
                        src={course.image}
                        alt={course.name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="flex h-full items-center justify-center">
                          <span className="rounded-full bg-white px-6 py-2 text-sm font-medium">
                            Start Course
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{course.name}</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {course.lessons} lessons
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-white px-4 py-16">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold">The Thinking Method</h2>
            <p className="mb-8 text-gray-600">
              Language Transfer courses are designed to help you understand how
              languages work. Through carefully crafted audio lessons,
              you&apos;ll learn to think in your new language from day one.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/about"
                className="rounded-full border border-gray-300 bg-white px-6 py-2 font-medium hover:bg-gray-50"
              >
                Learn More
              </Link>
              <Link
                href="/donate"
                className="rounded-full bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700"
              >
                Support Us
              </Link>
            </div>
          </div>
        </section>

        {/* Thinking Method Runs on You Section */}
        <section className="py-16 text-center">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="mb-8 text-3xl font-bold">
              LANGUAGE TRANSFER & THE THINKING METHOD RUNS ON YOU!
            </h2>
            <p className="mb-8 text-gray-600">
              ...but, as you may have noticed, not in the typical way! Not only
              are there no price tags to access any of the material lovingly and
              painstakingly created, but there are also no adverts, no sign-ups
              and no-one asking for or selling your data.
            </p>
            <p className="mb-12 text-gray-600">
              LT runs on donations, so take some time to get settled in and be
              sure you love this thing, and if you do, please donate to help
              Language Transfer and The Thinking Method go from strength to
              strength!
            </p>

            {/* Donation Options */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-800">
                Contribute towards LT&apos;s fixed monthly income on{" "}
                <Link
                  href="https://www.patreon.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Patreon
                </Link>
                !
              </p>
              <p className="text-gray-800">
                Make an occasional or monthly donation through{" "}
                <Link
                  href="https://www.paypal.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Paypal
                </Link>
                !
              </p>
              <p className="text-gray-800">
                Grab a pack from the{" "}
                <Link
                  href="/non-shop"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  non-shop
                </Link>
                !
              </p>
            </div>
          </div>
        </section>

        {/* Music Theory Promo */}
        <section className="bg-gray-50 py-12 text-center">
          <div className="container mx-auto max-w-3xl px-4">
            <p className="text-lg font-medium">
              CHECK OUT THE LATEST THINKING METHOD COURSE &apos;INTRODUCTION TO
              MUSIC (THEORY)&apos; AND ENTER AN UNEXPECTED WORLD OF AWE AND
              WONDER!
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-black py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-md">
              <h2 className="mb-8 text-xl">CONTACT</h2>
              <div className="mb-8">
                <input
                  type="email"
                  placeholder="Type your email..."
                  className="w-full rounded border border-gray-700 bg-transparent px-4 py-2 text-white"
                />
                <button className="mt-4 rounded bg-white px-6 py-2 text-black hover:bg-gray-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-8 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex gap-8">
                <Link href="/non-shop" className="hover:text-gray-300">
                  NON-SHOP
                </Link>
                <Link href="/patreon" className="hover:text-gray-300">
                  PATREON
                </Link>
                <Link href="/faq" className="hover:text-gray-300">
                  FAQ
                </Link>
              </div>
              <div className="flex gap-6">
                <Link
                  href="http://www.facebook.com/languagetransfer"
                  className="hover:text-gray-300"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebookF className="h-6 w-6" />
                </Link>
                <Link
                  href="http://instagram.com/languagetransfer"
                  className="hover:text-gray-300"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://x.com/langtransfer"
                  className="hover:text-gray-300"
                >
                  <span className="sr-only">X (formerly Twitter)</span>
                  <FaXTwitter className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.youtube.com/user/languagetransfer"
                  className="hover:text-gray-300"
                >
                  <span className="sr-only">YouTube</span>
                  <FaYoutube className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/11045813/admin/dashboard/"
                  className="hover:text-gray-300"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

// Course data
const courses = [
  {
    name: "Complete Spanish",
    slug: "spanish",
    lessons: 90,
    image: "/images/spanish.jpg",
  },
  {
    name: "Complete Italian",
    slug: "italian",
    lessons: 45,
    image: "/images/italian.jpg",
  },
  {
    name: "Complete French",
    slug: "french",
    lessons: 50,
    image: "/images/french.jpg",
  },
  {
    name: "Complete Swahili",
    slug: "swahili",
    lessons: 110,
    image: "/images/swahili.jpg",
  },
  {
    name: "Complete Greek",
    slug: "greek",
    lessons: 120,
    image: "/images/greek.jpg",
  },
  {
    name: "Complete German",
    slug: "german",
    lessons: 50,
    image: "/images/german.jpg",
  },
];

const leftTestimonials = [
  '"ABSOLUTELY MAGICAL"',
  '"PURE GENIUS"',
  '"TRULY A MASTERPIECE"',
  '"SERIOUSLY THE BEST LANGUAGE COURSES EVER"',
  '"INSANELY CRAZY GOOD"',
];

const rightTestimonials = [
  '"LITERALLY CHANGED MY LIFE"',
  '"BLOWN AWAY"',
  '"A TOTAL GAME CHANGER"',
  '"PHENOMENAL"',
  '"WORLD-CLASS"',
];
