import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ShieldCheck,
  RotateCcw,
  Truck,
  Zap,
  Droplets,
  Battery,
  Star,
  MessageCircle,
  Sparkles,
  Timer,
  Leaf,
} from "lucide-react";
import heroImg from "@/assets/juicer-hero.jpg";
import gymImg from "@/assets/juicer-gym.jpg";
import officeImg from "@/assets/juicer-office.jpg";
import fruitsImg from "@/assets/juicer-fruits.jpg";

const ALT = "Pink portable electric juicer bottle for smoothies.";

// WhatsApp order link – pre-filled message
const WA_NUMBER = "923051023307";
const WA_MESSAGE = encodeURIComponent(
  "Hi! I want to order the Portable Electric Juicer (Rs. 2,499 — 30% OFF). Please confirm my order.",
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const OrderButton = ({
  children = "Order on WhatsApp",
  className = "",
  size = "lg" as "lg" | "default",
}) => (
  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block">
    <Button
      size={size}
      className={`group relative overflow-hidden bg-cta text-primary-foreground shadow-cta hover:shadow-glow transition-all hover:-translate-y-0.5 h-14 px-8 text-base font-semibold ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {children}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700" />
    </Button>
  </a>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Nav */}
      <header className="container flex items-center justify-between py-5">
        <div className="flex items-center gap-2">
          <div className="relative h-9 w-9 rounded-full bg-cta grid place-items-center shadow-cta">
            <Leaf className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-semibold tracking-tight text-lg">FreshBlend</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#why" className="hover:text-foreground transition">Why us</a>
          <a href="#order" className="hover:text-foreground transition">Pricing</a>
        </nav>
        <OrderButton size="default" className="h-10 px-5 text-sm">Order Now</OrderButton>
      </header>

      {/* Hero */}
      <section className="relative bg-hero">
        {/* Floating fruit decor */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 left-[8%] h-24 w-24 rounded-full bg-[hsl(var(--citrus))] opacity-30 blur-2xl animate-float-slow" />
          <div className="absolute top-40 right-[5%] h-32 w-32 rounded-full bg-[hsl(var(--berry))] opacity-25 blur-3xl animate-float-rev" />
          <div className="absolute bottom-10 left-[40%] h-20 w-20 rounded-full bg-[hsl(var(--primary-glow))] opacity-30 blur-2xl animate-float-slow" />
        </div>

        <div className="container relative grid gap-12 py-14 md:grid-cols-2 md:py-24 md:items-center">
          <div className="space-y-6 animate-fade-up">
            <Badge variant="secondary" className="rounded-full px-3 py-1.5 text-xs gap-1.5">
              <Sparkles className="h-3 w-3" /> #1 Portable Juicer in Pakistan
            </Badge>
            <h1 className="text-5xl font-semibold leading-[1.02] md:text-7xl text-balance">
              Fuel Your Body{" "}
              <span className="relative inline-block">
                <span className="italic text-primary">On The Go</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 200 14" fill="none">
                  <path d="M2 8 Q 50 -2, 100 6 T 198 6" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-lg">
              Fresh juice & protein shakes anywhere, anytime. Wireless, USB-C rechargeable, 6-blade power — all in a leak-proof bottle.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <OrderButton>Order on WhatsApp</OrderButton>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[hsl(var(--citrus))] text-[hsl(var(--citrus))]" />
                  ))}
                </div>
                <span className="text-muted-foreground">4.9 · 2,300+ happy customers</span>
              </div>
            </div>

            <div className="flex flex-wrap items-baseline gap-3 pt-2">
              <span className="text-muted-foreground line-through text-lg">Rs. 3,500</span>
              <span className="text-3xl font-bold text-foreground">Rs. 2,499</span>
              <Badge className="bg-accent-grad text-accent-foreground rounded-full border-0">30% OFF</Badge>
            </div>

            <div className="flex flex-wrap gap-5 pt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Truck className="h-4 w-4 text-primary" /> Free Shipping</span>
              <span className="flex items-center gap-1.5"><RotateCcw className="h-4 w-4 text-primary" /> 7-Day Return</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> COD All Pakistan</span>
            </div>
          </div>

          {/* Hero image with frame */}
          <div className="relative">
            <div aria-hidden className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[hsl(var(--primary-glow))]/30 to-[hsl(var(--accent))]/30 blur-3xl" />

            {/* spinning ring */}
            <svg aria-hidden className="absolute -top-8 -right-8 h-32 w-32 animate-spin-slow text-primary/70" viewBox="0 0 100 100">
              <defs>
                <path id="circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text fontSize="9" fontWeight="600" letterSpacing="2" fill="currentColor">
                <textPath href="#circle">FRESH • POWERFUL • PORTABLE • USB-C • </textPath>
              </text>
            </svg>

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-soft bg-card">
              <img
                src={heroImg}
                alt={ALT}
                width={1280}
                height={1280}
                className="w-full h-auto object-cover aspect-square"
              />
              {/* floating spec card */}
              <div className="absolute bottom-5 left-5 right-5 md:left-6 md:right-auto rounded-2xl bg-card/90 backdrop-blur p-4 shadow-soft flex items-center gap-3 border border-border/50">
                <div className="h-10 w-10 rounded-full bg-cta grid place-items-center text-primary-foreground">
                  <Timer className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Blends in</div>
                  <div className="font-bold">30 seconds</div>
                </div>
                <div className="h-8 w-px bg-border mx-2" />
                <div>
                  <div className="text-xs text-muted-foreground">Capacity</div>
                  <div className="font-bold">500 ml</div>
                </div>
              </div>
            </div>

            {/* badge floats */}
            <div className="absolute -left-3 top-12 rounded-2xl bg-card shadow-soft px-3 py-2 flex items-center gap-2 animate-float-slow border border-border/50">
              <Battery className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium">USB-C Fast Charge</span>
            </div>
            <div className="absolute -right-2 bottom-32 rounded-2xl bg-card shadow-soft px-3 py-2 flex items-center gap-2 animate-float-rev border border-border/50">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-xs font-medium">6 Sharp Blades</span>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border/60 bg-card/40 backdrop-blur py-4 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex items-center gap-12 shrink-0">
                <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-accent" /> BPA Free</span>
                <span>•</span>
                <span className="flex items-center gap-2"><Leaf className="h-4 w-4 text-primary" /> Fresh Daily</span>
                <span>•</span>
                <span className="flex items-center gap-2"><Battery className="h-4 w-4 text-primary" /> 20+ Blends per charge</span>
                <span>•</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Leak Proof</span>
                <span>•</span>
                <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> COD Pakistan</span>
                <span>•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="container py-20 md:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold">Made for your day</p>
          <h2 className="mt-3 text-4xl font-semibold md:text-5xl text-balance">
            Why Thousands of Pakistanis Choose Our Portable Blender
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: gymImg, label: "At the gym", desc: "Post-workout protein in 30 seconds." },
            { img: officeImg, label: "At the office", desc: "A fresh boost between meetings." },
            { img: fruitsImg, label: "On weekends", desc: "Smoothies with the whole family." },
          ].map((item) => (
            <div key={item.label} className="group relative overflow-hidden rounded-3xl shadow-soft">
              <img
                src={item.img}
                alt={ALT}
                loading="lazy"
                width={1280}
                height={960}
                className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <div className="text-xs uppercase tracking-widest opacity-80">{item.label}</div>
                <div className="mt-1 text-xl font-semibold">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-secondary/50 py-20 md:py-28">
        <div className="container">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">Power in your bag</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Everything you need. Nothing you don't.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Zap, title: "No More Lumps", desc: "6 sharp stainless blades pulverize fruits and ice in seconds.", grad: "bg-cta" },
              { icon: Battery, title: "Travel Friendly", desc: "USB-C rechargeable. 20+ blends per single charge.", grad: "bg-accent-grad" },
              { icon: Droplets, title: "Self-Clean Mode", desc: "Add water and a drop of soap, then blend. Done.", grad: "bg-berry-grad" },
            ].map(({ icon: Icon, title, desc, grad }) => (
              <div key={title} className="group rounded-3xl bg-card p-8 shadow-soft hover:-translate-y-1 transition-transform border border-border/50">
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${grad} text-primary-foreground shadow-cta`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs split */}
      <section className="container py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div aria-hidden className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[hsl(var(--accent))]/20 to-[hsl(var(--primary-glow))]/20 blur-2xl" />
            <img src={fruitsImg} alt={ALT} loading="lazy" width={1280} height={1280} className="relative rounded-[2.5rem] shadow-soft w-full h-auto object-cover aspect-square" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">Specs</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl text-balance">Engineered for everyday life</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Powerful, quiet, and beautifully simple. Designed for gym-goers, office workers, and students.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-y-4 gap-x-6">
              {[
                "Wireless cordless design",
                "350–500 ml capacity",
                "6 stainless-steel blades",
                "USB-C fast charging",
                "100% leak-proof bottle",
                "BPA-free, food-grade",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <OrderButton />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">Reviews</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Loved across Pakistan</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Ayesha K.", city: "Lahore", text: "Blends my protein shake at the gym in seconds. Game changer!" },
              { name: "Hamza R.", city: "Karachi", text: "Battery lasts ages. I make smoothies at the office every day." },
              { name: "Sara M.", city: "Islamabad", text: "Beautiful design, super easy to clean. Worth every rupee." },
            ].map((r) => (
              <div key={r.name} className="rounded-3xl bg-card p-7 shadow-soft border border-border/50">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[hsl(var(--citrus))] text-[hsl(var(--citrus))]" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed">"{r.text}"</p>
                <div className="mt-5 text-sm">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-muted-foreground">{r.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section id="order" className="relative py-20 md:py-28">
        <div aria-hidden className="absolute inset-0 bg-hero" />
        <div className="container relative">
          <div className="relative mx-auto max-w-3xl rounded-[2.5rem] bg-card p-10 text-center shadow-soft md:p-16 border border-border/50 overflow-hidden">
            <div aria-hidden className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent-grad opacity-20 blur-3xl" />
            <div aria-hidden className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-cta opacity-20 blur-3xl" />

            <Badge className="bg-accent-grad text-accent-foreground rounded-full border-0 px-3 py-1">
              🔥 Launch Offer — 30% OFF
            </Badge>
            <h2 className="mt-5 text-4xl font-semibold md:text-6xl text-balance">Get yours today</h2>
            <p className="mt-4 text-muted-foreground">Order via WhatsApp — quick chat, fast delivery, Cash on Delivery all over Pakistan.</p>

            <div className="mt-7 flex items-center justify-center gap-3 text-lg">
              <span className="text-muted-foreground line-through">Rs. 3,500</span>
              <span className="text-4xl font-bold md:text-5xl">Rs. 2,499</span>
            </div>

            <div className="mt-8">
              <OrderButton>Chat on WhatsApp to Order</OrderButton>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><RotateCcw className="h-4 w-4 text-primary" /> 7-Day Easy Return</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Money Back Guarantee</span>
              <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Free Shipping</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-cta text-primary-foreground shadow-cta grid place-items-center hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <footer className="container py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} FreshBlend Pakistan. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
