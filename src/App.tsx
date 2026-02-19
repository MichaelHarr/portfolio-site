import { Element } from 'react-scroll';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import CertificateCard from './components/CertificateCard';

const projects = [
  {
    id: 1,
    title: 'Automata Simulator',
    description: 'A web-based tool for simulating finite automata',
    appLink: 'https://github.com/MichaelHarr/automata-tool',
    sourceCodeLink: 'https://github.com/MichaelHarr/automata-tool',
    techs: ['React', 'TypeScript', 'Flask']
  },
  {
    id: 2,
    title: 'Lynx Password Manager',
    description: 'A secure password manager built with Kotlin and Spring Boot',
    appLink: 'https://github.com/MichaelHarr/lynx-password-manager',
    sourceCodeLink: 'https://github.com/MichaelHarr/lynx-password-manager',
    techs: ['Kotlin', 'Spring Boot']
  }
];

const Certifications = [
  {
    id: 1,
    title: 'GCIH - GIAC Certified Incident Handler',
    description: 'Demonstrated expertise in incident handling and response, including attack techniques and mitigation strategies.',
    link: 'https://www.credly.com/badges/dc53aaf0-7367-4f6a-8c22-f4c16b0a95ce/public_url',
    certificationDate: 'Issued September 2019'
  },
  {
    id: 2,
    title: 'GCIA - GIAC Certified Intrusion Analyst',
    description: 'Demonstrated skills in network traffic analysis, intrusion detection and incident response.',
    link: 'https://www.credly.com/badges/dcc5006a-7472-412e-a75c-ab2b4c8e4f47',
    certificationDate: 'Issued September 2020'
  }
]

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">

      <main className="mx-auto max-w-6xl px-4 py-16 space-y-20">
        <Element name="home">
          <section className="pt-16">
            <h1 className="text-4xl font-semibold">Hi, I'm Michael Harrison</h1>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-gray-300">
              I'm currently working as a software developer at <a className="text-indigo-300 hover:underline" href="https://www.autotrader.co.uk/">Autotrader</a> based in Manchester, UK.
              I graduated from the University of York with a First Class MEng in Computer Science. I gained experience working at <a className="text-indigo-300 hover:underline" href="https://www.yorkcommunityconsulting.co.uk/">York Community Consulting</a> and on placement at <a className="text-indigo-300 hover:underline" href="https://www.morganstanley.com/">Morgan Stanley</a>.
            </p>
          </section>
        </Element>

        <Element name="Experience">
          <section>
            <h2 className="text-2xl font-semibold">Experience</h2>
            <p className="mt-2 text-gray-400">A brief overview of my work experience.</p>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">Software Developer - Autotrader</h3>
                <p className="mt-1 text-gray-300">October 2025 - Present</p>
                <ul className="mt-2 list-disc list-inside text-gray-300">
                  <li>Currently working in the Valuations/Vehicle Metrics team at Autotrader</li>
                  <li>Working across multiple Kotlin/Spring Boot services to support the speed and accuracy of vehicle valuations</li>
                  <li>Contributing to new internal application preparing for production deployment</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">Director of Technology - York Community Consulting</h3>
                <p className="mt-1 text-gray-300">June 2024 - June 2025</p>
                <ul className="mt-2 list-disc list-inside text-gray-300">
                  <li>Voluntary position at York Community Consulting as Director of Technology</li>
                  <li>Maintained and improved the organisations Next.js portal for managing their Consulting projects</li>
                  <li>Managed a team of three other developers through running meetings and providing technical guidance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Technology Placement Intern - Morgan Stanley</h3>
                <p className="mt-1 text-gray-300">June 2022 - June 2023</p>
                <ul className="mt-2 list-disc list-inside text-gray-300">
                  <li>Gained experience in financial software development and agile methodologies.</li>
                  <li>Worked on a NLP project in Python and Spacy to extract entites in RFQ's on financial instruments.</li>
                  <li>Worked on application for assisting investment bankers maintain strong relationships with clients developed in Angualr and Java/Spring Boot.</li>
                </ul>
              </div>
            </div>
          </section>
        </Element>

        <Element name="projects">
          <section>
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p className="mt-2 text-gray-400">A selection of projects I have worked on in my own time.</p>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map(p => (
                <ProjectCard key={p.id} title={p.title} description={p.description} appLink={p.appLink} sourceCodeLink={p.sourceCodeLink} techs={p.techs} />
              ))}
            </div>
          </section>
        </Element>

        <Element name="Certifications">
          <section>
            <h2 className="text-2xl font-semibold pb-4">Past Certifications</h2>
            {Certifications.map(c => (
              <CertificateCard key={c.id} title={c.title} description={c.description} link={c.link} certificationDate={c.certificationDate} />
            ))}
          </section>
        </Element>

        <Element name="contact">
          <section>
            <h2 className="text-2xl font-semibold">Contact:</h2>
            <p className="mt-2 text-gray-400">Github: <a className="text-indigo-300 hover:underline" href="https://github.com/MichaelHarr">MichaelHarr</a></p>
            <p className="mt-1 text-gray-400">LinkedIn: <a className="text-indigo-300 hover:underline" href="https://www.linkedin.com/in/michael-harrison-5926b01ba">Michael Harrison</a></p>
          </section>
        </Element>
      </main>

      <Footer />
    </div>
  );
}

export default App;
