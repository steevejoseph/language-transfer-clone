import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Language Transfer</title>
        <meta
          name="description"
          content="About Language Transfer and The Thinking Method"
        />
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

        {/* About Content */}
        <div className="container mx-auto max-w-4xl px-4 pt-32">
          <h1 className="mb-16 text-center text-4xl font-bold tracking-wide">
            ABOUT LANGUAGE TRANSFER
          </h1>

          <div className="space-y-6 text-center">
            <p>
              Language Transfer & The Thinking Method is the project of Mihalis
              Eleftheriou, creator of all current courses and developer of the
              dubbed &ldquo;Thinking Method&rdquo;.
            </p>

            <p>
              Mihalis, (or Michael), is a British-born Cypriot who grew up in
              the outskirts of East London/Essex. After spending over 15 years
              abroad developing this project, he&apos;s now returned to the UK
              hoping to introduce this internationally acclaimed learning
              revolution into more mainstream environments back home. Or in
              other words, it&apos;s time for the Thinking Method to be taken
              more seriously, meaning that learners should also be louder with
              that question which reaches my inbox so often: &ldquo;why
              weren&apos;t we taught like this at school?&rdquo;.
            </p>

            <p>
              Mihalis is on a mission to make the Thinking Method the norm when
              it comes to education, and to brighten lives with transcendental
              learning experiences along the way! Mihalis is back home to make
              some noise, and needs all the help he can get to break through
              tough glass ceilings and generate the biggest and best impact with
              Language Transfer & The Thinking Method.
            </p>

            {/* Video Grid */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              {/* First Video */}
              <div>
                <iframe
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed/BIZ_EMEIS_2014"
                  title="BIZ / EMEIS Interview 2014"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <p className="mt-4 text-sm">
                  A 5 minute interview on Language Transfer, the Thinking
                  Method, the Cyprus Project and activism!
                </p>
              </div>

              {/* Second Video */}
              <div>
                <iframe
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed/CYPRUS_PROJECT"
                  title="The Cyprus Project"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <p className="mt-4 text-sm italic">
                  The Cyprus Project was a big part of the motivation and story
                  behind LT!
                </p>
              </div>

              {/* Third Video */}
              <div>
                <iframe
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed/INTERVIEW_MIHALIS"
                  title="Interview with Mihalis Eleftheriou"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <p className="mt-4 text-sm">
                  In this 25 minute interview we home in on some of the more
                  unlikely motivations behind the Language Transfer project.
                </p>
              </div>
            </div>

            {/* SoundCloud Embed */}
            <div className="mt-12">
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/ACTUAL_FLUENCY&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
            </div>

            {/* Key Facts */}
            <div className="mt-16">
              <h2 className="mb-12 text-center text-4xl font-bold tracking-wide">
                KEY FACTS
              </h2>
              <div className="space-y-4 text-center">
                <p>
                  The free model reflects a desire to play a cooperative and
                  caring role in society, rather than a competitive one.
                </p>
                <p>
                  The Thinking Method challenges what we think we need to know
                  about learning and teaching, as well as the language/subject
                  at hand.
                </p>
                <p>
                  LT is sustained with learner donations. Donations do not give
                  access to more LT material. Everything is free.
                </p>
                <p>
                  LT is an independent project with no sponsors, advertisers or
                  affiliates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 bg-black py-8 text-white">
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
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
