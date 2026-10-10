"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    number: "01",
    name: "VERDANT HOUSE",
    type: "PRIVATE RESIDENCE",
    location: "LAGOS, NIGERIA",
    description:
      "A private residence shaped around light, landscape and a quiet connection between interior and exterior.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "02",
    name: "ATLAS COURT",
    type: "COMMERCIAL DEVELOPMENT",
    location: "LONDON, UK",
    description:
      "A contemporary mixed-use development designed around movement, natural light and a renewed relationship between work and city life.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "03",
    name: "MONUMENT 07",
    type: "MIXED-USE DEVELOPMENT",
    location: "DUBAI, UAE",
    description:
      "A study in proportion, shadow and movement, bringing residential, cultural and public spaces together within a singular architectural language.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=85",
  },
];

const principles = [
  {
    id: "MATERIAL",
    title: "Material should communicate.",
    text: "Every surface contributes to atmosphere. We select materials for how they age, feel, reflect light and belong to their surroundings.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "SPACE",
    title: "Every space should have a reason.",
    text: "Movement, proportion and human experience come before form. The strongest spaces make their logic feel effortless.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "LIGHT",
    title: "Light creates the atmosphere.",
    text: "Natural and artificial light are architectural elements in their own right, shaping rhythm, mood and perception.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
  },
];

const services = [
  ["01", "Architecture", "Residential and commercial environments shaped around context, function and experience."],
  ["02", "Development", "From early concepts to considered spaces designed for long-term value."],
  ["03", "Interiors", "Material, lighting and detail brought together to complete the experience."],
  ["04", "Consulting", "Strategic architectural direction for ambitious spaces and developments."],
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePrinciple, setActivePrinciple] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#top" className="logo" onClick={closeMenu}>NEXORA</a>

          <div className="desktop-nav">
            <a href="#projects">Projects</a>
            <a href="#studio">Studio</a>
            <a href="#approach">Approach</a>
            <a href="#services">Services</a>
            <a href="#contact">Start a Conversation <ArrowUpRight size={14} /></a>
          </div>

          <button
            className="menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mobile-menu-links">
              {["projects", "studio", "approach", "services", "contact"].map((id, i) => (
                <a key={id} href={`#${id}`} onClick={closeMenu}>
                  <span>0{i + 1}</span>{id}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="top" className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content container">
          <Reveal>
            <p className="eyebrow hero-eyebrow">ARCHITECTURE · DEVELOPMENT · INTERIORS</p>
          </Reveal>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Spaces designed<br />
            <em>to be experienced.</em>
          </motion.h1>
          <Reveal delay={0.3}>
            <p className="hero-copy">
              Contemporary environments shaped by architecture, material and the way people live.
            </p>
            <a href="#projects" className="button button-light">
              Explore Projects <ArrowDownRight size={16} />
            </a>
          </Reveal>
        </div>
        <div className="hero-bottom container">
          <span>LAGOS · LONDON · DUBAI</span>
          <span className="scroll-indicator"><i /> SCROLL TO EXPLORE</span>
        </div>
      </section>

      <section id="studio" className="intro section container">
        <Reveal><span className="section-number">01 — THE STUDIO</span></Reveal>
        <div className="intro-grid">
          <Reveal delay={0.05}>
            <h2>We create spaces that become part of <em>how people live.</em></h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Nexora is a contemporary architecture and development studio exploring the relationship between people, place and space. From private residences to ambitious commercial environments, every project begins with a simple question: how should this place make people feel?
            </p>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="projects section container">
        <Reveal><div className="section-heading"><span className="section-number">02 — SELECTED PROJECTS</span><span>2026 / CONCEPT WORK</span></div></Reveal>
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06}>
              <article className="project">
                <div className="project-image-wrap">
                  <img src={project.image} alt="" className="project-image" />
                  <span className="project-index">{project.number}</span>
                  <span className="view-project">VIEW <ArrowUpRight size={16} /></span>
                </div>
                <div className="project-meta">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.type} · {project.location}</p>
                  </div>
                  <p className="project-description">{project.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="approach" className="approach section">
        <div className="container">
          <Reveal><span className="section-number">03 — OUR APPROACH</span></Reveal>
          <div className="approach-grid">
            <div className="principles">
              <Reveal><h2>Three principles.<br /><em>One clear intention.</em></h2></Reveal>
              <div className="principle-list">
                {principles.map((p, i) => (
                  <button
                    key={p.id}
                    className={`principle ${activePrinciple === i ? "active" : ""}`}
                    onMouseEnter={() => setActivePrinciple(i)}
                    onFocus={() => setActivePrinciple(i)}
                    onClick={() => setActivePrinciple(i)}
                  >
                    <span>{p.id}</span>
                    <strong>{p.title}</strong>
                    <ArrowUpRight size={17} />
                  </button>
                ))}
              </div>
            </div>
            <div className="principle-visual">
              <AnimatePresence mode="wait">
                <motion.img
                  key={principles[activePrinciple].image}
                  src={principles[activePrinciple].image}
                  alt=""
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
              <div className="principle-caption">
                <span>0{activePrinciple + 1}</span>
                <p>{principles[activePrinciple].text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services section container">
        <Reveal><span className="section-number">04 — WHAT WE DO</span></Reveal>
        <div className="services-list">
          {services.map(([num, title, desc]) => (
            <Reveal key={title}>
              <div className="service-row">
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ArrowUpRight className="service-arrow" size={21} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="statement-bg" />
        <div className="container statement-content">
          <span className="section-number">NEXORA / PHILOSOPHY</span>
          <Reveal>
            <h2>Good architecture<br />doesn&apos;t demand attention.<br /><em>It earns it.</em></h2>
          </Reveal>
        </div>
      </section>

      <section className="studio-detail section container">
        <div className="studio-image">
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85" alt="" />
        </div>
        <div className="studio-copy">
          <Reveal><span className="section-number">05 — THE STUDIO</span></Reveal>
          <Reveal delay={0.1}><h2>Architecture <em>with intention.</em></h2></Reveal>
          <Reveal delay={0.15}>
            <p>
              We believe the most memorable spaces are not necessarily the loudest. They are the spaces where proportion feels right, materials feel considered and every detail contributes to the whole.
            </p>
            <span className="location-line">LAGOS · LONDON · DUBAI</span>
            <span className="studio-label">Independent studio · Contemporary architecture</span>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="container">
          <Reveal><span className="section-number">06 — START A PROJECT</span></Reveal>
          <Reveal delay={0.08}>
            <h2>Have a space<br /><em>worth imagining?</em></h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p>Tell us what you&apos;re thinking. We&apos;ll take it from there.</p>
            <a href="mailto:hello@nexora.studio" className="button button-light">Start a Conversation <ArrowUpRight size={16} /></a>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a href="#top" className="logo">NEXORA</a>
            <p>Architecture · Development · Interiors</p>
          </div>
          <div className="footer-links">
            <a href="#projects">Projects</a>
            <a href="#studio">Studio</a>
            <a href="#approach">Approach</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-note">
            <p>© 2026 NEXORA</p>
            <p>CONCEPT PROJECT</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
