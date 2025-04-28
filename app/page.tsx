'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Strata Management Committee</h1>
        <p className="text-lg text-gray-300">
          Supporting the residents and maintaining our shared spaces in accordance with the Strata Schemes Management Act (2015)
        </p>
      </header>

      <section className="bg-gray-800 rounded-xl p-6 shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Committee</h2>
        <ul className="space-y-2 text-gray-300">
          <li><strong>Chairperson:</strong> Jane Doe</li>
          <li><strong>Treasurer:</strong> John Smith</li>
          <li><strong>Secretary:</strong> Alice Johnson</li>
          <li><strong>Member:</strong> Bob Williams</li>
        </ul>
      </section>

      <section className="bg-gray-800 rounded-xl p-6 shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <Image
          src="/management-team.jpeg"
          alt="Strata Management Team"
          width={600}
          height={400}
          className="rounded-xl shadow"
        />
      </section>

      <section className="bg-gray-800 rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <p className="mb-4 text-gray-300">
          The committee oversees building maintenance, financial management, and communication with residents. Levies are collected for administration and capital works to maintain property value and safety.
        </p>
        <a
          href="/levy-guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Download the Levy Guide (PDF)
        </a>
      </section>

      <footer className="text-center mt-12 text-sm text-gray-500">
        <p>Deployed on Vercel | Source on GitHub</p>
      </footer>
    </main>
  );
}

