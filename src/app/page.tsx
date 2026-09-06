import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ExperienceRow from "@/components/ExperienceRow";
import Reveal from "@/components/Reveal";
import WaveBackground from "@/components/WaveBackground";
import { projects, experience } from "@/data/portfolio";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <WaveBackground />

      <div className="relative z-10 mx-auto max-w-[1100px] px-10 max-[640px]:px-5">
        <Header />
        <Hero />

        <section id="work" className="border-t border-border py-16">
          <Reveal>
            <h2 className="mb-9 font-serif text-[22px] font-medium">My Latest Work</h2>
          </Reveal>

          {featured && (
            <Reveal>
              <div className="mb-7">
                <ProjectCard {...featured} />
              </div>
            </Reveal>
          )}

          <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
            {rest.map((p, i) => (
              <Reveal key={p.name} delayMs={i * 60}>
                <ProjectCard {...p} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="border-t border-border py-16">
          <Reveal>
            <h2 className="mb-9 font-serif text-[22px] font-medium">Experience & certifications</h2>
          </Reveal>
          <Reveal>
            <div>
              {experience.map((e) => (
                <ExperienceRow key={e.role} {...e} />
              ))}
            </div>
          </Reveal>
        </section>

        <section id="contact" className="border-t border-border py-16">
          <Reveal>
            <div className="rounded-[20px] border border-border bg-surface p-9">
              <h2 className="mb-3 font-serif text-[22px] font-medium">Get in touch</h2>
              <p className="mb-6 max-w-[440px] text-muted">
                Open to internship or entry-level data science opportunities. Feel free to reach out if you&apos;d like to talk or collaborate.
              </p>
              <p className="mb-6 max-w-[440px] text-muted">Email me: dyazarya2@gmail.com</p>
              <div className="flex flex-wrap gap-3.5">
                <a href="https://www.instagram.com/dayesnich" target="_blank" className="flex items-center gap-2 rounded-lg border border-border px-[18px] py-[9px] text-sm transition hover:bg-ink hover:text-bg">
                  <FaInstagram size={16} />
                  Instagram
                </a>
                <a href="https://github.com/lndydx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-border px-[18px] py-[9px] text-sm transition hover:bg-ink hover:text-bg">
                  <FaGithub size={16} />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/dyaz-satir-97b107334/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-border px-[18px] py-[9px] text-sm transition hover:bg-ink hover:text-bg">
                  <FaLinkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <footer className="border-t border-border py-10 pb-15 text-[12.5px] text-muted">
          © {new Date().getFullYear()} Dyaz Arya Satir
        </footer>
      </div>
    </div>
  );
}