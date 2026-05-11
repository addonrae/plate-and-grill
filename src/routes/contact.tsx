import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, ArrowRight, UtensilsCrossed, Car, Truck } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit & Contact — Meals-N-Grills, Ilupeju Lagos" },
      { name: "description", content: "Find us at 1 Association Ave, Ilupeju, Lagos. Call +234 915 430 9201 or order on Glovo." },
      { property: "og:title", content: "Visit Meals-N-Grills" },
      { property: "og:description", content: "1 Association Ave, Ilupeju, Lagos · +234 915 430 9201" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const address = "1 Association Ave, Ilupeju, Lagos 100252, Nigeria";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <>
      <section className="bg-warm">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">Visit Us</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl text-balance max-w-3xl">
            Come hungry. Leave happy.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-8">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-warm space-y-6">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground shrink-0"><MapPin className="h-5 w-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Address</p>
                <p className="mt-1 font-display text-xl">1 Association Ave</p>
                <p className="text-sm text-muted-foreground">Ilupeju, Lagos 100252, Nigeria</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground shrink-0"><Phone className="h-5 w-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                <a href="tel:+2349154309201" className="mt-1 block font-display text-xl hover:text-primary">+234 915 430 9201</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground shrink-0"><Clock className="h-5 w-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Hours</p>
                <p className="mt-1 font-display text-xl">Open daily</p>
                <p className="text-sm text-muted-foreground">Closes 10:00 pm</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-flame text-primary-foreground p-8 shadow-glow">
            <h3 className="font-display text-2xl">How to get your meal</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-center gap-3"><UtensilsCrossed className="h-4 w-4" /> Dine-in at our Ilupeju location</li>
              <li className="flex items-center gap-3"><Car className="h-4 w-4" /> Drive-through pickup</li>
              <li className="flex items-center gap-3"><Truck className="h-4 w-4" /> Delivery via Glovo across Lagos</li>
            </ul>
            <a href="https://glovoapp.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition">
              Order on Glovo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border shadow-warm min-h-[480px]">
          <iframe
            title="Meals-N-Grills location"
            src={mapSrc}
            className="h-full w-full min-h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
