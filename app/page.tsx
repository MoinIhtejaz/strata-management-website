import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-4 sm:p-8">
      <div className="mx-auto max-w-3xl">
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Strata Management Committee</h1>
        <p className="text-lg">
          Supporting the residents and maintaining our shared spaces in accordance with the Strata Schemes Management Act (2015)
        </p>
      </header>

      <section aria-labelledby="committee-heading" className="bg-white rounded-xl p-6 shadow-md mb-12">
        <h2 id="committee-heading" className="text-2xl font-semibold mb-4">Our Committee</h2>
        <dl className="space-y-2">
          <div className="flex gap-2">
            <dt className="font-semibold">Chairperson:</dt>
            <dd>Jane Doe</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold">Treasurer:</dt>
            <dd>John Smith</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold">Secretary:</dt>
            <dd>Alice Johnson</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold">Member:</dt>
            <dd>Bob Williams</dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="team-heading" className="bg-white rounded-xl p-6 shadow-md mb-12">
        <h2 id="team-heading" className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <Image
          src="/management-team.jpeg"
          alt="Strata Management Team"
          width={600}
          height={400}
          className="rounded-xl shadow h-auto w-full max-w-[600px]"
        />
      </section>

      <section aria-labelledby="whatwedo-heading" className="bg-white rounded-xl p-6 shadow-md">
        <h2 id="whatwedo-heading" className="text-2xl font-semibold mb-4">What We Do</h2>
        <p className="mb-4">
          The committee oversees building maintenance, financial management, and communication with residents. Levies are collected for administration and capital works to maintain property value and safety.
        </p>
        <a
          href="/levy-guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-sm"
        >
          Download the Levy Guide (PDF)
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </section>

      <footer className="text-center mt-12 text-sm text-gray-600">
        <p>Deployed on Vercel | Source on GitHub</p>
      </footer>
      </div>
    </main>
  );
}
