import { formatCurrency } from "@/app/lib/formatter";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

interface MenuItemProps {
  id: string;
  image: string;
  name: string;
  description: string;
  basePrice: number;
  isBestSeller: boolean;
}

export default function MenuItem({
  image,
  name,
  description,
  basePrice,
  isBestSeller
}: MenuItemProps) {
  return (
    <li className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border bg-card shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
      <div className="relative h-60 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="absolute inset-3 rounded-[22px] bg-white/40" />
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        {isBestSeller && (
          <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
            Best seller
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            {name}
          </h3>
          <span className="text-lg font-bold text-primary">
            {formatCurrency(basePrice)}
          </span>
        </div>

        <p className="mb-5 line-clamp-3 text-sm leading-6 text-accent">
          {description}
        </p>

        <div className="mt-auto">
          <AddToCartButton name={name} basePrice={basePrice} image={image} />
        </div>
      </div>
    </li>
  );
}
