import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ShieldCheck, RotateCcw, Truck, Zap, Droplets, Battery } from "lucide-react";
import heroImg from "@/assets/juicer-hero.jpg";
import gymImg from "@/assets/juicer-gym.jpg";
import officeImg from "@/assets/juicer-office.jpg";
import fruitsImg from "@/assets/juicer-fruits.jpg";

const ALT = "Pink portable electric juicer bottle for smoothies.";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Nav */}
      <header className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-cta" />
          <span className="font-semibold tracking-tight">FreshBlend</span>
        </div>
        <a href="#order">
          <Button variant="default" className="bg-cta text-primary-foreground shadow-cta hover:opacity-95">
            Order Now
          </Button>
        </a>
      </header>

      {/* Hero */}
      <section className="bg-hero">
        <div className="container grid gap-12 py-16 md:grid-cols-2 md:py-24 md:items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
              🇵🇰 #1 Portable Juicer in Pakistan
            </Badge>
            <h1 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
              Fuel Your Body <span className="italic text-primary">On The Go</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Fresh Juice Anywhere, Anytime — The Ultimate Portable Blender. Wireless, USB-C rechargeable, 6-blade power in a bottle.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#order">
                <Button size="lg" className="bg-cta text-primary-foreground shadow-cta hover:opacity-95 h-14 px-8 text-base">
                  Order Now — Pay on Delivery
                </Button>
              </a>
              <div className="text-sm">
                <span className="text-muted-foreground line-through">Rs. 3,500</span>{" "}
                <span className="font-semibold text-foreground">Rs. 2,499</span>{" "}
                <span className="text-accent font-medium">(30% OFF)</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Truck className="h-4 w-4" /> Free Shipping</span>
              <span className="flex items-center gap-2"><RotateCcw className="h-4 w-4" /> 7-Day Easy Return</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Money Back Guarantee</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-secondary/60 blur-2xl" />
            <img
              src={heroImg}
              alt={ALT}
              width={1280}
              height={1280}
              className="relative rounded-[2rem] shadow-soft w-full h-auto object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Lifestyle gallery */}
      <section className="container py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Made for your day</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Why Thousands of Pakistanis Choose Our Portable Blender</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <img src={gymImg} alt={ALT} loading="lazy" width={1280} height={960} className="rounded-2xl shadow-soft object-cover w-full h-72" />
          <img src={officeImg} alt={ALT} loading="lazy" width={1280} height={960} className="rounded-2xl shadow-soft object-cover w-full h-72" />
          <img src={fruitsImg} alt={ALT} loading="lazy" width={1280} height={960} className="rounded-2xl shadow-soft object-cover w-full h-72" />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary/40 py-20">
        <div className="container grid gap-10 md:grid-cols-3">
          {[
            { icon: Zap, title: "No More Lumps", desc: "Smooth protein shakes in just 30 seconds with 6 sharp blades." },
            { icon: Battery, title: "Travel Friendly", desc: "Fits in your bag. USB-C rechargeable — no wires needed." },
            { icon: Droplets, title: "Easy Clean", desc: "Add water and a drop of soap, then blend. Done." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-card p-8 shadow-soft">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section className="container py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <img src={heroImg} alt={ALT} loading="lazy" width={1280} height={1280} className="rounded-[2rem] shadow-soft w-full h-auto object-cover aspect-square" />
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Engineered for everyday life</h2>
            <p className="mt-4 text-muted-foreground">Powerful, quiet, and beautifully simple. Designed for gym-goers, office workers, and students.</p>
            <ul className="mt-8 space-y-4">
              {[
                "Wireless, cordless design",
                "350–500 ml capacity",
                "6 sharp stainless-steel blades",
                "USB-C fast charging",
                "100% leak-proof bottle",
                "BPA-free, food-grade material",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section id="order" className="bg-hero py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-[2rem] bg-card p-10 text-center shadow-soft md:p-16">
            <Badge className="bg-accent text-accent-foreground rounded-full">Launch Offer — 30% OFF</Badge>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Get yours today</h2>
            <div className="mt-6 flex items-center justify-center gap-3 text-lg">
              <span className="text-muted-foreground line-through">Rs. 3,500</span>
              <span className="text-3xl font-semibold md:text-4xl">Rs. 2,499</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Cash on Delivery available all over Pakistan</p>
            <a href="#order" className="mt-8 inline-block">
              <Button size="lg" className="bg-cta text-primary-foreground shadow-cta hover:opacity-95 h-14 px-10 text-base">
                Order Now — Pay on Delivery
              </Button>
            </a>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><RotateCcw className="h-4 w-4" /> 7-Day Easy Return Policy</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Money Back Guarantee</span>
              <span className="flex items-center gap-2"><Truck className="h-4 w-4" /> Free Shipping</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="container py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} FreshBlend Pakistan. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
