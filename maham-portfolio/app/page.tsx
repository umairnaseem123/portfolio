"use client";
import { motion, MotionConfig } from "framer-motion";
import NetworkBg from "@/components/NetworkBg";
import Nav from "@/components/Nav";
import { EMAIL, LINKEDIN, GITHUB, CV_URL, skills, projects, experience, certs } from "@/lib/data";

const reveal = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.6 } };
const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="mx-auto max-w-6xl px-6 py-24">
    <motion.h2 {...reveal} className="mb-10 font-display text-3xl font-semibold text-white md:text-4xl">{title}</motion.h2>
    {children}
  </section>
);

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
    <main className="circuit">
      <Nav />

      <header id="top" className="relative flex min-h-screen items-center overflow-hidden">
        <NetworkBg />
        <div className="relative mx-auto max-w-6xl px-6 pt-20">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 text-cyan">Computer Engineering Student</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-6xl font-bold leading-none text-white md:text-8xl">Maham Riaz</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 max-w-xl text-lg text-mist">Passionate about software development, networking, and building practical engineering solutions.</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-cyan px-6 py-3 font-medium text-ink transition hover:shadow-[0_0_30px_#22D3EE66]">View Projects</a>
            <a href="#contact" className="rounded-full border border-line px-6 py-3 text-white transition hover:border-cyan">Contact Me</a>
            {CV_URL && <a href={CV_URL} download className="rounded-full border border-line px-6 py-3 text-white transition hover:border-cyan">Download CV</a>}
          </motion.div>
        </div>
      </header>

      <Section id="about" title="About">
        <motion.div {...reveal} className="glass max-w-3xl p-8">
          <p className="mb-4 font-display text-xl text-white">Software, networks, and the hardware in between.</p>
          <p className="leading-relaxed text-mist">Motivated undergraduate Computer Engineering student with hands-on experience in Python, C++, Java, SQL, web development, networking, and embedded systems. Familiar with MATLAB, Git/GitHub, and Ubuntu, with a strong interest in learning new technologies and building practical real-world solutions through programming and problem-solving.</p>
        </motion.div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([cat, items], i) => (
            <motion.div key={cat} {...reveal} transition={{ duration: 0.6, delay: i * 0.05 }}
              className="glass p-6 transition-colors hover:border-cyan/60">
              <h3 className="mb-4 font-display text-lg text-white">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => <motion.span key={s} whileHover={{ y: -3, scale: 1.05 }} className="cursor-default rounded-full border border-line px-3 py-1 text-sm text-mist hover:border-cyan hover:text-cyan">{s}</motion.span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <motion.article key={p.name} {...reveal} whileHover={{ y: -6 }} className="glass group relative overflow-hidden p-8 transition-colors hover:border-cyan/60">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan/10 blur-3xl transition group-hover:bg-cyan/25" />
              <p className="text-sm text-cyan">{p.tag}</p>
              <h3 className="mt-2 font-display text-2xl text-white">{p.name}</h3>
              <ul className="mt-5 space-y-2 text-mist">{p.points.map((f) => <li key={f} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />{f}</li>)}</ul>
              {(p.github || p.demo) && (
                <div className="mt-6 flex gap-5 text-sm">
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="text-cyan hover:underline">GitHub ↗</a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="text-cyan hover:underline">Live demo ↗</a>}
                </div>
              )}
              {p.tech.length > 0 && <div className="mt-6 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="rounded-md bg-ink px-2 py-1 text-xs text-cyan">{t}</span>)}</div>}
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="relative ml-3 border-l border-line pl-8">
          <motion.div {...reveal} className="glass p-6">
            <span className="absolute -left-[5px] top-8 h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_12px_#22D3EE]" />
            <p className="text-sm text-cyan">2023 – 2027</p>
            <h3 className="mt-1 font-display text-xl text-white">Bachelor of Engineering in Computer Engineering</h3>
            <p className="text-mist">Sir Syed University of Engineering & Technology</p>
          </motion.div>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-5">
          {experience.map((e) => (
            <motion.div key={e.role + e.org} {...reveal} className="glass max-w-2xl p-6">
              {e.period && <p className="text-sm text-cyan">{e.period}</p>}
              <h3 className="font-display text-xl text-white">{e.role}</h3>
              <p className="text-cyan">{e.org}</p>
              {e.points.length > 0 && (
                <ul className="mt-4 space-y-2 text-mist">{e.points.map((pt) => <li key={pt} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />{pt}</li>)}</ul>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="certifications" title="Certifications">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c) => (
            <motion.div key={c.title} {...reveal} whileHover={{ y: -5 }} className="glass p-6 transition-colors hover:border-cyan/60">
              <div className="mb-4 h-1 w-10 rounded bg-cyan" />
              <h3 className="font-display text-white">{c.title}</h3>
              <p className="mt-1 text-sm text-mist">{c.by}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Let's build innovative solutions together.">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div {...reveal} className="space-y-4">
            <a href={`mailto:${EMAIL}`} className="glass block p-5 transition hover:border-cyan/60"><span className="text-sm text-mist">Email</span><br /><span className="text-white">{EMAIL}</span></a>
            {LINKEDIN && <a href={LINKEDIN} target="_blank" rel="noreferrer" className="glass block p-5 transition hover:border-cyan/60"><span className="text-sm text-mist">LinkedIn</span><br /><span className="text-white">Maham Riaz</span></a>}
            {GITHUB && <a href={GITHUB} target="_blank" rel="noreferrer" className="glass block p-5 transition hover:border-cyan/60"><span className="text-sm text-mist">GitHub</span><br /><span className="text-white">{GITHUB.replace("https://github.com/", "@")}</span></a>}
          </motion.div>
          <motion.form {...reveal} className="glass space-y-4 p-6" onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio message from " + f.get("name"))}&body=${encodeURIComponent(String(f.get("message")) + "\n\n" + f.get("email"))}`;
          }}>
            {[["name", "Name", "text"], ["email", "Email", "email"]].map(([n, l, t]) => (
              <label key={n} className="block text-sm text-mist">{l}<input required name={n} type={t} className="mt-1 w-full rounded-lg border border-line bg-ink px-4 py-3 text-white" /></label>
            ))}
            <label className="block text-sm text-mist">Message<textarea required name="message" rows={4} className="mt-1 w-full rounded-lg border border-line bg-ink px-4 py-3 text-white" /></label>
            <button className="rounded-full bg-cyan px-6 py-3 font-medium text-ink transition hover:shadow-[0_0_30px_#22D3EE66]">Send message</button>
          </motion.form>
        </div>
      </Section>
      <footer className="border-t border-line py-8 text-center text-sm text-mist">© {new Date().getFullYear()} Maham Riaz</footer>
    </main>
    </MotionConfig>
  );
}
