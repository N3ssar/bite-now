import Link from "@/components/Link";
import { Routes } from "@/constants/enums";
import { ArrowRight, Clock3, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";

const highlights = [
  { label: "4.9/5 rating", icon: Star },
  { label: "15 min avg. delivery", icon: Clock3 },
  { label: "Fresh ingredients", icon: ShieldCheck }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-10 md:py-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,108,56,0.15),transparent_55%)]" />

      <div className="container grid items-center gap-10 md:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-6 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Hot & fresh • delivered fast
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-black tracking-tight text-foreground md:text-6xl md:leading-[1.05]">
              Slice into <span className="text-primary">happiness</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-accent md:text-xl">
              Craving pizza? We&apos;ve got you covered with handcrafted
              favorites, crispy sides, and a delivery experience that feels as
              good as the food.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/${Routes.MENU}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Order now
              <ArrowRight size={18} />
            </Link>

            <Link
              href={`/${Routes.ABOUT}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              Learn more
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            {highlights.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm text-accent shadow-sm"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon size={16} />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl order-1 md:order-2">
          <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-orange-300/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-border bg-card p-3 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <div className="relative h-[420px] overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_top,_#fff5ef,_#ffe7dc_35%,_#ffd4c0_100%)] md:h-[500px]">
              <Image
                src="/assets/images/pizza.png"
                alt="Pizza hero image"
                fill
                loading="eager"
                priority
                className="object-contain p-6"
              />
            </div>

            <div className="absolute bottom-8 left-8 rounded-2xl border border-white/40 bg-white/80 p-3 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Star size={18} fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    4.9 rating
                  </p>
                  <p className="text-xs text-accent">
                    From 2,000+ happy customers
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-8 top-8 rounded-2xl border border-border bg-background/90 px-3 py-2 text-sm font-semibold text-foreground shadow-md backdrop-blur-sm">
              🔥 2K+ orders
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
