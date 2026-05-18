import { Mail, Phone, Github, Linkedin, ArrowUpRight, Code2, Database, Wrench, Sparkles, MapPin, Download, Award } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import alishaPhoto from "@/assets/alisha.png";

const skills = {
  "Languages & Frameworks": ["Java", "Python", "PHP", "JavaScript", "React.js", "Node.js", "Express.js", "Next.js", "Django", "Tailwind CSS"],
  "Databases": ["MySQL", "MongoDB"],
  "Tools": ["Git", "GitHub", "Postman"],
  "Core": ["DSA", "REST APIs", "State Management", "Responsive Design", "Secure Coding", "Agile"],
};

const experience = [
  {
    role: "Software Developer",
    company: "Booming Bulls Academy",
    location: "Gurugram",
    period: "Sep 2025 – Present",
    points: [
      "Building responsive, SEO-optimized apps with Next.js, React & Tailwind, leveraging SSR/SSG for performance.",
      "Designing RESTful APIs with Node.js + Express handling auth, business logic, and seamless frontend integration.",
      "Implementing JWT auth, server-side validation, input sanitization, and secure DB ops (MongoDB / SQL).",
      "Collaborating in Agile with Git for reviews, performance optimization, and reliable deployments.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Oriental Outsourcing Pvt Ltd",
    location: "Kharar, Punjab",
    period: "Jul 2024 – Jun 2025",
    points: [
      "Built a fundraising platform with social features and Computer Vision functionality.",
      "Developed dynamic, secure apps with React, Express, Node, and MongoDB with optimized queries.",
      "Worked cross-functionally in Agile — debugging, profiling, and shipping improvements.",
    ],
  },
];

const projects = [
  {
    title: "Expense Tracker",
    stack: "MERN Stack",
    desc: "Full-stack personal finance tracker with categorized expenses, historical analytics, secure JWT auth, and an optimized MongoDB schema.",
    tags: ["MongoDB", "Express", "React", "Node"],
  },
  {
    title: "Weather App",
    stack: "JS · OpenWeather API",
    desc: "Responsive weather app with async fetch, dynamic UI updates, robust error handling, and clean loading states.",
    tags: ["JavaScript", "Bootstrap", "API"],
  },
];

function Portfolio() {
  const marqueeItems = ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Tailwind", "Express", "MySQL", "Python", "Java", "Django", "Git"];

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden relative">
      {/* Animated background blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute top-[40%] right-[5%] w-[450px] h-[450px] rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full bg-secondary/15 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
      </div>

      {/* Nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-6 py-3 flex items-center gap-6 text-sm">
        <span className="font-display font-semibold text-gradient">AA.</span>
        <div className="hidden sm:flex gap-5 text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </div>
      </nav>

      {/* Hero — asymmetric split */}
      <section className="relative px-6 pt-32 pb-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-secondary" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
                  <span className="relative w-2 h-2 rounded-full bg-secondary" />
                </span>
                <span>Available for opportunities</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.02]">
                Hi, I'm<br />
                <span className="text-gradient">Alisha Aggarwal</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-muted-foreground font-display">
                Full-Stack Developer crafting <span className="text-foreground">fast</span>, <span className="text-foreground">secure</span> & <span className="text-foreground">beautiful</span> web experiences.
              </p>
              <p className="mt-4 text-base text-muted-foreground max-w-xl">
                React · Next.js · Node.js · MongoDB · Tailwind — shipping production-grade products end-to-end.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="group inline-flex items-center gap-2 bg-gradient-primary px-6 py-3 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition">
                  <span>Hire me</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition" />
                </a>
                <a href="#projects" className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-medium hover:bg-card hover:scale-105 transition">
                  <Download className="w-4 h-4" /><span>View work</span>
                </a>
                <a href="/Alisha_Aggarwal_Resume.pdf" download="Alisha_Aggarwal_Resume.pdf" className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-medium hover:bg-card hover:scale-105 transition">
                  <Download className="w-4 h-4" /><span>Download resume</span>
                </a>
              </div>
              <div className="mt-8 flex gap-5 text-sm text-muted-foreground">
                <a href="mailto:aggarwalalisha071@gmail.com" className="flex items-center gap-2 hover:text-foreground transition"><Mail className="w-4 h-4" /><span>Email</span></a>
                <a href="https://github.com/48alisha" className="flex items-center gap-2 hover:text-foreground transition"><Github className="w-4 h-4" /><span>GitHub</span></a>
                <a href="https://www.linkedin.com/in/alisha-aggarwal-383a55231/" className="flex items-center gap-2 hover:text-foreground transition"><Linkedin className="w-4 h-4" /><span>LinkedIn</span></a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="relative mx-auto w-full max-w-sm aspect-[4/5]">
              <div className="absolute -inset-4 rounded-[2rem] border border-primary/30 animate-spin-slow" />
              <div className="absolute -inset-1 rounded-[2rem] border border-accent/20 animate-spin-reverse" />
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-primary blur-2xl opacity-50" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-glow border border-white/10 h-full bg-card">
                <img src={alishaPhoto} alt="Alisha Aggarwal" className="w-full h-full object-cover" width={600} height={750} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-4 -left-6 glass rounded-2xl px-4 py-2 shadow-soft animate-float hidden sm:flex items-center gap-2">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium">React · Next.js</span>
              </div>
              <div className="absolute top-1/3 -right-8 glass rounded-2xl px-4 py-2 shadow-soft animate-float-slow hidden sm:flex items-center gap-2" style={{ animationDelay: "1.5s" }}>
                <Database className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium">MongoDB</span>
              </div>
              <div className="absolute -bottom-4 left-6 glass rounded-2xl px-4 py-2 shadow-soft animate-float hidden sm:flex items-center gap-2" style={{ animationDelay: "3s" }}>
                <Award className="w-4 h-4 text-secondary" />
                <span className="text-xs font-medium">9.13 CGPA</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-8 border-y border-border/50 glass">
        <div className="marquee">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((m, i) => (
              <span key={i} className="text-3xl md:text-5xl font-display font-bold text-muted-foreground/60 px-6 whitespace-nowrap hover:text-gradient transition">
                {m} <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <section id="about" className="px-6 max-w-6xl mx-auto py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "9.13", v: "CGPA" },
            { k: "AIR 45", v: "Fusion Friday" },
            { k: "4★", v: "SQL HackerRank" },
            { k: "2+", v: "Years building" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 80}>
              <div className="glass card-tilt rounded-2xl p-6 text-center hover:shadow-glow">
                <div className="text-3xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 max-w-6xl mx-auto py-16">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Tech <span className="text-gradient">toolkit</span></h2>
          <p className="text-muted-foreground mb-10">Languages, frameworks & tools I work with daily.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(skills).map(([cat, items], i) => {
            const Icon = [Code2, Database, Wrench, Sparkles][i];
            return (
              <Reveal key={cat} delay={i * 100}>
                <div className="glass card-tilt rounded-2xl p-6 hover:shadow-glow h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 animate-float-slow">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-3">{cat}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground hover:bg-gradient-primary hover:text-primary-foreground transition cursor-default">{s}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Experience */}
      <section id="work" className="px-6 max-w-6xl mx-auto py-16">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Where I've <span className="text-gradient">worked</span></h2>
        </Reveal>
        <div className="space-y-6 relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 120}>
              <div className="md:pl-12 relative">
                <div className="absolute left-2 top-8 w-5 h-5 rounded-full bg-gradient-primary shadow-glow hidden md:block" />
                <div className="glass card-tilt rounded-3xl p-8 hover:shadow-glow">
                  <div className="flex flex-wrap justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold">{e.role}</h3>
                      <p className="text-primary">{e.company} <span className="text-muted-foreground inline-flex items-center gap-1 text-sm ml-2"><MapPin className="w-3 h-3" />{e.location}</span></p>
                    </div>
                    <span className="text-sm text-muted-foreground glass rounded-full px-4 py-1.5 h-fit">{e.period}</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-primary shrink-0" />{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 max-w-6xl mx-auto py-16">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Selected <span className="text-gradient">projects</span></h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 150}>
              <div className="group glass card-tilt rounded-3xl p-8 hover:shadow-glow relative overflow-hidden h-full">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-warm rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition" />
                <div className="relative">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold">{p.title}</h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition" />
                  </div>
                  <p className="text-xs text-secondary uppercase tracking-wider mb-3">{p.stack}</p>
                  <p className="text-muted-foreground mb-5">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full border border-border group-hover:border-primary/50 transition">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="px-6 max-w-6xl mx-auto py-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-10"><span className="text-gradient">Education</span></h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-8">
            <p className="text-sm text-muted-foreground">2021 – 2025</p>
            <h3 className="text-xl font-semibold mt-2">Chitkara Institute of Engineering & Technology</h3>
            <p className="text-primary mt-1">B.E. Computer Science</p>
            <p className="mt-3 text-muted-foreground">CGPA: <span className="text-gradient font-semibold">9.13</span></p>
          </div>
          <div className="glass rounded-3xl p-8">
            <p className="text-sm text-muted-foreground">2020 – 2021</p>
            <h3 className="text-xl font-semibold mt-2">Sacred Heart Sr. Sec Public School</h3>
            <p className="text-primary mt-1">CBSE</p>
            <p className="mt-3 text-muted-foreground">Percentage: <span className="text-gradient font-semibold">77%</span></p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 max-w-6xl mx-auto py-24">
        <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold">Let's build something <span className="text-gradient">together</span>.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Open to full-stack opportunities, freelance work, and interesting collaborations.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:aggarwalalisha071@gmail.com" className="inline-flex items-center gap-2 bg-gradient-primary px-6 py-3 rounded-full text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition">
                <Mail className="w-4 h-4" /><span>aggarwalalisha071@gmail.com</span>
              </a>
              <a href="tel:+919056578489" className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-medium hover:bg-card transition">
                <Phone className="w-4 h-4" /><span>+91 90565 78489</span>
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-10">© 2026 Alisha Aggarwal. Crafted with care.</p>
      </section>
    </div>
  );
}

export default Portfolio;
