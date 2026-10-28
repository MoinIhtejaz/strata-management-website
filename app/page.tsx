import Image from 'next/image';

const committee = [
  { role: 'Chairperson', name: 'Jane Doe' },
  { role: 'Treasurer', name: 'John Smith' },
  { role: 'Secretary', name: 'Alice Johnson' },
  { role: 'Member', name: 'Bob Williams' },
];

function Section({
  title,
  className = '',
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  const headingId = `${title.toLowerCase().replace(/\s+/g, '-')}-heading`;
  return (
    <section aria-labelledby={headingId} className={`bg-white rounded-xl p-6 shadow-md ${className}`}>
      <h2 id={headingId} className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-blue-600 focus:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
      >
        Skip to main content
      </a>
      <div className="min-h-screen bg-gray-50 text-gray-900 p-4 sm:p-8">
        <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl focus:outline-none">
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Strata Management Committee</h1>
        <p className="text-lg max-w-prose mx-auto">
          Supporting the residents and maintaining our shared spaces in accordance with the Strata Schemes Management Act (2015)
        </p>
      </header>

      <Section title="Our Committee" className="mb-12">
        <dl className="space-y-2">
          {committee.map(({ role, name }) => (
            <div key={role} className="flex gap-2">
              <dt className="font-semibold">{role}:</dt>
              <dd>{name}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Meet the Team" className="mb-12">
        <Image
          src="/management-team.jpeg"
          alt="Strata Management Team"
          width={600}
          height={338}
          sizes="(max-width: 640px) 100vw, 600px"
          className="rounded-xl shadow h-auto w-full max-w-[600px]"
        />
      </Section>

      <Section title="What We Do">
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
      </Section>

        </main>
        <footer className="mx-auto max-w-3xl text-center mt-12 text-sm text-gray-600">
          <p>
            Deployed on Vercel
            <span aria-hidden="true" className="px-2">|</span>
            Source on GitHub
          </p>
        </footer>
      </div>
    </>
  );
}
