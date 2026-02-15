import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

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

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16 space-y-20">
        <Element name="home">
          <section className="pt-16">
            <h1 className="text-4xl font-semibold">Hi, I'm Michael Harrison</h1>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-gray-300">
              I'm currently working as a software developer at <a className="text-indigo-300 hover:underline" href="https://www.autotrader.co.uk/">Autotrader</a> based in Manchester, UK.
              I graduated from the University of York with a First Class MEng in Computer Science. I gained experience working at <a className="text-indigo-300 hover:underline" href="https://www.yorkcommunityconsulting.co.k/">York Community Consulting</a> and on placement at <a className="text-indigo-300 hover:underline" href="https://www.morganstanley.com/">Morgan Stanley</a>.
            </p>
          </section>
        </Element>

        <Element name="projects">
          <section>
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p className="mt-2 text-gray-400">A small selection of projects. Click through to see more.</p>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map(p => (
                <ProjectCard key={p.id} title={p.title} description={p.description} appLink={p.appLink} sourceCodeLink={p.sourceCodeLink} techs={p.techs} />
              ))}
            </div>
          </section>
        </Element>

        <Element name="about">
          <section>
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-2 text-gray-400 max-w-prose">A brief background and additional context about your experience and interests. Replace this with your full bio.</p>
          </section>
        </Element>

        <Element name="contact">
          <section>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-2 text-gray-400">Email: <a className="text-indigo-300 hover:underline" href="mailto:you@example.com">you@example.com</a></p>
          </section>
        </Element>
      </main>

      <Footer />
    </div>
  );
}

export default App;
