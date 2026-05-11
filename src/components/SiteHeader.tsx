import { Link } from "@tanstack/react-router";
import { Flame } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Visit" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-flame text-primary-foreground shadow-glow group-hover:scale-105 transition">
            <Flame className="h-4 w-4" />
          </span>
          <span className="font-display text-xl tracking-tight">
            Meals<span className="text-primary">-N-</span>Grills
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-foreground/70 hover:text-foreground transition"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://glovoapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-flame px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-95 transition"
        >
          Order on Glovo
        </a>
      </div>
    </header>
  );
}
