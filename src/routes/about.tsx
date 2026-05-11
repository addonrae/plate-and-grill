import { createFileRoute } from "@tanstack/react-router";
import { Flame, Heart, Users } from "lucide-react";
import heroImg from "@/assets/hero-grill.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Meals-N-Grills" },
      { name: "description", content: "A neighbourhood grill in Ilupeju serving affordable, flame-grilled Nigerian comfort food." },
      { property: "og:title", content: "About Meals-N-Grills" },
      { property: "og:description", content: "Our story — flame-grilled food, made for Lagos." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="grid lg:grid-cols-2 lg:min-h-[70vh]">
        <div className="bg-warm flex items-center px-6 py-20 md:px-12 lg:px-16">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">Our Story</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl leading-[1.05] text-balance">
              A small grill with a <span className="italic text-primary">big</span> appetite for flavour.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Meals-N-Grills started on a single charcoal grill on Association
              Ave. Today we still cook the same way our regulars love — hot,
              fresh, and unmistakably Naija. Whether it's a quick suya stop,
              a family jollof platter, or a Glovo order on a rainy night, our
              kitchen runs for one reason: to feed Lagos well.
            </p>
          </div>
        </div>
        <div className="relative min-h-[400px]">
          <img src={heroImg} alt="Grill in action" loading="lazy" width={1280} height={1600} className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Flame, title: "Cooked over real fire", text: "Charcoal-kissed and never microwaved. The smoke is the seasoning." },
            { icon: Heart, title: "Made for the neighbourhood", text: "Affordable plates from ₦2,000 — meant for everyday, not just special days." },
            { icon: Users, title: "Three ways to enjoy", text: "Pull up to dine in, swing through the drive-through, or order on Glovo." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-8 shadow-warm">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-flame text-primary-foreground shadow-glow">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-2xl">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 text-center">
          <p className="font-display text-3xl md:text-4xl text-balance leading-snug">
            "Lovely and tasty meals, very affordable. Customer service, 100%."
          </p>
          <p className="mt-5 text-sm text-secondary-foreground/70">— Ngozika U., Local Guide on Google</p>
        </div>
      </section>
    </>
  );
}
