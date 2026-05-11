import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl">Meals-N-Grills</h3>
          <p className="mt-3 max-w-md text-sm text-secondary-foreground/75">
            Fresh, flame-grilled comfort food in the heart of Ilupeju, Lagos.
            Dine-in, drive-through, or delivered hot to your door.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /><span>1 Association Ave, Ilupeju, Lagos 100252</span></div>
          <div className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" /><a href="tel:+2349154309201" className="hover:text-accent">+234 915 430 9201</a></div>
          <div className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-accent" /><span>Open daily · Closes 10 pm</span></div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-medium text-accent uppercase tracking-wider text-xs">Explore</p>
          <Link to="/menu" className="block hover:text-accent">Menu</Link>
          <Link to="/about" className="block hover:text-accent">About</Link>
          <Link to="/contact" className="block hover:text-accent">Visit & Contact</Link>
          <a href="https://glovoapp.com" target="_blank" rel="noopener noreferrer" className="block hover:text-accent">Order on Glovo</a>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <p className="mx-auto max-w-7xl px-5 md:px-8 py-5 text-xs text-secondary-foreground/60">
          © {new Date().getFullYear()} Meals-N-Grills. Lagos, Nigeria.
        </p>
      </div>
    </footer>
  );
}
