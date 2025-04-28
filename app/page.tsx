'use client';
import Image from 'next/image';
import '../public/styles.css'; // Import your custom CSS

export default function Home() {
  return (
    <main>
      <header>
        <h1>Strata Management Committee</h1>
        <p>
          Supporting the residents and maintaining our shared spaces in accordance with the Strata Schemes Management Act (2015)
        </p>
      </header>

      <section>
        <h2>Our Committee</h2>
        <ul>
          <li><strong>Chairperson:</strong> Jane Doe</li>
          <li><strong>Treasurer:</strong> John Smith</li>
          <li><strong>Secretary:</strong> Alice Johnson</li>
          <li><strong>Member:</strong> Bob Williams</li>
        </ul>
      </section>

      <section>
        <h2>Meet the Team</h2>
        <Image
          src="/management-team.jpeg"
          alt="Strata Management Team"
          width={600}
          height={400}
        />
      </section>

      <section>
        <h2>What We Do</h2>
        <p>
          The committee oversees building maintenance, financial management, and communication with residents.
          Levies are collected for administration and capital works to maintain property value and safety.
        </p>
        <a
          href="/levy-guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download the Levy Guide (PDF)
        </a>
      </section>

      <footer>
        <p>Deployed on Vercel | Source on GitHub</p>
      </footer>
    </main>
  );
}

