import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  Menu,
  X,
  Star,
  Clock,
  MapPin,
  Phone,
  Instagram,
  Facebook,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import studioImg from "@/assets/studio.jpg";
import manicureImg from "@/assets/service-manicure.jpg";
import pedicureImg from "@/assets/service-pedicure.jpg";
import nailartImg from "@/assets/service-nailart.jpg";
import extensionsImg from "@/assets/service-extensions.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxury Nail Studio — Beautiful Nails, Perfectly Crafted" },
      {
        name: "description",
        content:
          "Professional manicure, pedicure, gel nails, nail art & extensions delivered in a serene, hygienic studio by master technicians. Book your appointment today.",
      },
      { property: "og:title", content: "Luxury Nail Studio — Beautiful Nails, Perfectly Crafted" },
      {
        property: "og:description",
        content:
          "Premium nail care in a serene studio. Manicure, pedicure, gel nails, nail art & extensions by master technicians.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Classic Manicure",
    description:
      "Precision shaping, cuticle care and a flawless polish finish for naturally beautiful hands.",
    price: "from $45",
    duration: "45 min",
    image: manicureImg,
  },
  {
    title: "Spa Pedicure",
    description:
      "A restorative ritual with milk bath, exfoliation, massage and immaculate nail care.",
    price: "from $65",
    duration: "60 min",
    image: pedicureImg,
  },
  {
    title: "Nail Art",
    description:
      "Hand-painted artistry — from minimalist gold detailing to bespoke statement designs.",
    price: "from $25",
    duration: "30+ min",
    image: nailartImg,
  },
  {
    title: "Gel Extensions",
    description:
      "Sculpted, lightweight extensions in your perfect shape and length, finished to a glass shine.",
    price: "from $85",
    duration: "90 min",
    image: extensionsImg,
  },
];

const testimonials = [
  {
    quote:
      "The most relaxing hour of my month. Impeccable hygiene, gorgeous results, and the studio is simply stunning.",
    name: "Priya M.",
    role: "Regular client, 2 years",
  },
  {
    quote:
      "My gel extensions lasted five weeks without a single chip. The attention to detail here is unmatched.",
    name: "Sofia R.",
    role: "Bridal client",
  },
  {
    quote:
      "They turned a Pinterest photo into nail art better than the original. I won't go anywhere else.",
    name: "Amara K.",
    role: "Nail art enthusiast",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <Sparkles className="size-6 text-gold" strokeWidth={1.5} />
            <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
              Luxury Nail Studio
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium tracking-wide md:flex">
            <a href="#services" className="text-muted-foreground transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#studio" className="text-muted-foreground transition-colors hover:text-foreground">
              The Studio
            </a>
            <a href="#testimonials" className="text-muted-foreground transition-colors hover:text-foreground">
              Reviews
            </a>
            <a
              href="#book"
              className="rounded-full bg-gold px-5 py-2.5 text-gold-foreground shadow-sm transition-transform hover:scale-[1.03]"
            >
              Book Appointment
            </a>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-border/60 bg-cream px-5 py-5 text-sm font-medium md:hidden">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#studio" onClick={() => setMenuOpen(false)}>The Studio</a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a
              href="#book"
              onClick={() => setMenuOpen(false)}
              className="w-fit rounded-full bg-gold px-5 py-2.5 text-gold-foreground"
            >
              Book Appointment
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="bg-blush">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div>
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary">
              <Sparkles className="size-3.5 text-gold" />
              PREMIUM NAIL STUDIO
            </span>
            <h1 className="animate-fade-up-delayed mt-6 text-5xl leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Beautiful Nails, <em className="text-gold not-italic italic">Perfectly</em> Crafted
            </h1>
            <p className="animate-fade-up-late mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Professional Manicure, Pedicure, Gel Nails, Nail Art &amp; Extensions — delivered in a
              serene, hygienic studio by master technicians.
            </p>
            <div className="animate-fade-up-late mt-9 flex flex-wrap gap-4">
              <a
                href="#book"
                className="rounded-full bg-gold px-8 py-4 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/30 transition-transform hover:scale-[1.03]"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="rounded-full border border-foreground/15 bg-cream px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                View Services
              </a>
            </div>
            <div className="animate-fade-up-late mt-10 flex items-center gap-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-gold text-gold" />
                ))}
              </div>
              <div>
                <p className="font-semibold">4.9 / 5 rating</p>
                <p className="text-sm text-muted-foreground">Over 1,200 happy clients</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/20">
              <img
                src={heroImg}
                alt="Elegant hands with a flawless nude-pink manicure resting on blush silk"
                width={1600}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-border bg-cream px-6 py-4 shadow-xl">
              <p className="font-display text-3xl font-semibold text-gold">12+</p>
              <p className="text-sm text-muted-foreground">Years of artistry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-gold">OUR SERVICES</p>
            <h2 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
              Rituals of Care
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every treatment begins with a consultation and ends with perfection — using premium,
              cruelty-free products.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <span className="font-semibold text-gold">{service.price}</span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="size-3.5" />
                      {service.duration}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Studio */}
      <section id="studio" className="bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/15">
            <img
              src={studioImg}
              alt="The Luxury Nail Studio interior with blush walls, marble stations and gold accents"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-gold">THE STUDIO</p>
            <h2 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
              A Sanctuary of Serenity
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Step into a space designed for calm. Marble stations, velvet seating and soft light —
              every detail curated so your visit feels like a retreat.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                "Hospital-grade sterilization for every tool, every time",
                "Master technicians with 10+ years of experience",
                "Premium cruelty-free and vegan product lines",
                "Private bridal & group suites available",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Sparkles className="mt-1 size-4 shrink-0 text-gold" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-blush py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-gold">CLIENT LOVE</p>
            <h2 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
              Words From Our Clients
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-3xl border border-border bg-cream p-8 shadow-sm"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-lg font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <Sparkles className="mx-auto size-8 text-gold" strokeWidth={1.5} />
          <h2 className="mt-5 text-4xl font-medium tracking-tight text-balance sm:text-5xl">
            Your Perfect Nails Are One Appointment Away
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/75">
            Reserve your moment of calm. Same-week appointments available — walk-ins welcome when
            space allows.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+15551234567"
              className="rounded-full bg-gold px-8 py-4 text-base font-semibold text-gold-foreground shadow-lg transition-transform hover:scale-[1.03]"
            >
              Call to Book
            </a>
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 text-primary-foreground/90 underline-offset-4 hover:underline"
            >
              <Phone className="size-4" />
              +1 (555) 123-4567
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2">
              <Clock className="size-4" /> Tue–Sun, 10am–8pm
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="size-4" /> 42 Rosewater Lane, Beverly Hills
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-cream py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center lg:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <Sparkles className="size-5 text-gold" strokeWidth={1.5} />
            <span className="font-display text-lg font-semibold">Luxury Nail Studio</span>
          </a>
          <div className="flex gap-5">
            <a href="#" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-gold">
              <Instagram className="size-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-muted-foreground transition-colors hover:text-gold">
              <Facebook className="size-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Luxury Nail Studio. Beautiful nails, perfectly crafted.
          </p>
        </div>
      </footer>
    </div>
  );
}
