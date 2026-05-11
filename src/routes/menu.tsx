import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import suyaImg from "@/assets/menu-suya.jpg";
import jollofImg from "@/assets/menu-jollof.jpg";
import catfishImg from "@/assets/menu-catfish.jpg";
import friesImg from "@/assets/menu-fries.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Meals-N-Grills" },
      { name: "description", content: "Suya, jollof rice, grilled catfish, peri fries and more. Affordable Lagos comfort food." },
      { property: "og:title", content: "Menu — Meals-N-Grills" },
      { property: "og:description", content: "Browse our flame-grilled menu and order on Glovo." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc: string; price: string };

const sections: { title: string; img: string; items: Item[] }[] = [
  {
    title: "From the Grill",
    img: suyaImg,
    items: [
      { name: "Beef Suya", desc: "Spiced skewers, yaji pepper, sliced onions.", price: "₦2,500" },
      { name: "Chicken Suya", desc: "Tender chicken cubes, smoky char.", price: "₦2,800" },
      { name: "Grilled Catfish (Whole)", desc: "Marinated and char-grilled, pepper sauce on side.", price: "₦4,000" },
      { name: "Asun (Spicy Goat)", desc: "Roasted goat tossed in pepper & onion.", price: "₦3,500" },
    ],
  },
  {
    title: "Rice & Plates",
    img: jollofImg,
    items: [
      { name: "Party Jollof + Chicken", desc: "Smoky jollof, grilled chicken, plantain.", price: "₦3,500" },
      { name: "Fried Rice Combo", desc: "Mixed veg fried rice with protein of choice.", price: "₦3,200" },
      { name: "Coconut Rice", desc: "Aromatic coconut jollof, served with fish.", price: "₦3,800" },
      { name: "Yam & Egg Sauce", desc: "Boiled yam, peppered egg sauce.", price: "₦2,000" },
    ],
  },
  {
    title: "Sides & Snacks",
    img: friesImg,
    items: [
      { name: "Peri-Peri Fries", desc: "Hand-cut, dusted with chili salt.", price: "₦1,500" },
      { name: "Fried Plantain", desc: "Sweet & golden dodo.", price: "₦1,000" },
      { name: "Coleslaw", desc: "Fresh, creamy, crunchy.", price: "₦800" },
      { name: "Moi Moi", desc: "Steamed bean pudding.", price: "₦1,200" },
    ],
  },
  {
    title: "Catfish & Seafood",
    img: catfishImg,
    items: [
      { name: "Peppered Catfish", desc: "Boneless chunks in spicy pepper sauce.", price: "₦3,800" },
      { name: "Grilled Tilapia", desc: "Whole tilapia with grilled vegetables.", price: "₦4,000" },
      { name: "Pepper Soup", desc: "Hot, herby goat or fish pepper soup.", price: "₦2,500" },
    ],
  },
];

function MenuPage() {
  return (
    <>
      <section className="bg-warm">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">Our Menu</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl text-balance max-w-3xl">
            Everything off the grill, plus the sides you love.
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Prices in Nigerian Naira. Combos and family platters available on
            request. Most plates fall between ₦2,000 – ₦4,000 per person.
          </p>
          <a href="https://glovoapp.com" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3.5 text-base font-medium text-primary-foreground shadow-glow hover:opacity-95 transition">
            Order on Glovo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 space-y-24">
        {sections.map((sec, i) => (
          <section key={sec.title} className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
            <div className={`relative overflow-hidden rounded-2xl shadow-warm aspect-[4/5] ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <img src={sec.img} alt={sec.title} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl">{sec.title}</h2>
              <ul className="mt-8 divide-y divide-border">
                {sec.items.map((item) => (
                  <li key={item.name} className="py-5 flex items-baseline justify-between gap-6">
                    <div>
                      <h3 className="font-display text-xl">{item.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <span className="shrink-0 font-medium text-primary">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
