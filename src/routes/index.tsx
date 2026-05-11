import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Flame, Truck, UtensilsCrossed, Car } from "lucide-react";
import heroImg from "@/assets/hero-grill.jpg";
import suyaImg from "@/assets/menu-suya.jpg";
import jollofImg from "@/assets/menu-jollof.jpg";
import catfishImg from "@/assets/menu-catfish.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meals-N-Grills — Flame-Grilled Comfort Food in Ilupeju, Lagos" },
      { name: "description", content: "Tasty, affordable grills, jollof rice, suya and more. Dine-in, drive-through, or order on Glovo. 1 Association Ave, Ilupeju, Lagos." },
      { property: "og:title", content: "Meals-N-Grills — Lagos" },
      { property: "og:description", content: "Flame-grilled comfort food in Ilupeju. Order on Glovo, dine-in or drive-through." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Split-screen hero */}
      <section className="relative overflow-hidden">
        <div className="grid min-h-[88vh] lg:grid-cols-2">
          <div className="relative flex items-center bg-warm px-6 py-20 md:px-12 lg:px-16">
            <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                <Flame className="h-3.5 w-3.5 text-primary" /> Ilupeju · Lagos
              </span>
              <h1 className="mt-6 font-display text-5xl leading-[1.05] text-balance md:text-7xl">
                Flame-grilled <span className="text-primary italic">comfort</span>, the Naija way.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                Smoky suya, golden jollof, crispy fries and our famous grilled
                catfish — made fresh, served generously. From our grill to your
                table, drive-thru, or doorstep.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="https://glovoapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3.5 text-base font-medium text-primary-foreground shadow-glow hover:opacity-95 transition"
                >
                  Order on Glovo
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
                </a>
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-base font-medium hover:bg-muted transition"
                >
                  See the menu
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span><b className="text-foreground">3.1</b> · 8 reviews</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <span>₦2,000 – ₦4,000 per person</span>
              </div>
            </div>
          </div>

          <div className="relative bg-secondary">
            <img
              src={heroImg}
              alt="Sizzling grilled chicken on jollof rice"
              width={1280}
              height={1600}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-3">
              {[
                { icon: UtensilsCrossed, label: "Dine-in" },
                { icon: Car, label: "Drive-through" },
                { icon: Truck, label: "Delivery" },
              ].map((s) => (
                <span key={s.label} className="inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur px-4 py-2 text-sm font-medium text-foreground shadow-warm">
                  <s.icon className="h-4 w-4 text-primary" /> {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signature dishes */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">Signature plates</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">Made hot. Served fast.</h2>
          </div>
          <Link to="/menu" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
            Full menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: suyaImg, name: "Beef Suya", desc: "Smoky skewers with yaji pepper & onions.", price: "₦2,500" },
            { img: jollofImg, name: "Jollof & Grills", desc: "Party-style jollof, grilled chicken, plantain.", price: "₦3,500" },
            { img: catfishImg, name: "Grilled Catfish", desc: "Whole catfish, peppered to perfection.", price: "₦4,000" },
          ].map((d) => (
            <article key={d.name} className="group overflow-hidden rounded-2xl bg-card shadow-warm hover:-translate-y-1 transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl">{d.name}</h3>
                  <span className="text-primary font-medium">{d.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Order strip */}
      <section className="bg-flame text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20 grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-balance">Hungry now? We deliver across Lagos on Glovo.</h2>
            <p className="mt-4 max-w-xl text-primary-foreground/85">
              Open daily until 10 pm. Order in a few taps and we'll have it
              flame-grilled and out the door.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
            <a href="https://glovoapp.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition">
              Order on Glovo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+2349154309201" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3.5 font-medium hover:bg-primary-foreground/10 transition">
              Call +234 915 430 9201
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
