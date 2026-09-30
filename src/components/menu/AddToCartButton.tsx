"use client";

import { useMemo, useState } from "react";
import { Check, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import Image from "next/image";
import { formatCurrency } from "@/app/lib/formatter";

const pizzaSizes = [
  { id: "small", label: "Small", size: '12"', price: 0 },
  { id: "medium", label: "Medium", size: '14"', price: 3.5 },
  { id: "large", label: "Large", size: '16"', price: 6 },
  {
    id: "family",
    label: "Family",
    size: '18"',
    price: 8
  }
];

const extras = [
  { id: "cheese", name: "Extra cheese", price: 2.5 },
  { id: "pepperoni", name: "Pepperoni", price: 2.75 },
  { id: "mushrooms", name: "Mushrooms", price: 2 },
  { id: "garlic", name: "Garlic dip", price: 3 }
];

type AddToCartButtonProps = {
  name: string;
  basePrice: number;
  image: string;
};

function AddToCartButton({ name, basePrice, image }: AddToCartButtonProps) {
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedExtras, setSelectedExtras] = useState<string[]>(["cheese"]);

  const selectedSizeData = useMemo(
    () => pizzaSizes.find((size) => size.id === selectedSize) ?? pizzaSizes[1],
    [selectedSize]
  );

  const extrasTotal = useMemo(
    () =>
      extras
        .filter((extra) => selectedExtras.includes(extra.id))
        .reduce((sum, extra) => sum + extra.price, 0),
    [selectedExtras]
  );

  const totalPrice = basePrice + selectedSizeData.price + extrasTotal;

  const toggleExtra = (extraId: string) => {
    setSelectedExtras((current) =>
      current.includes(extraId)
        ? current.filter((item) => item !== extraId)
        : [...current, extraId]
    );
  };

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button className="w-full h-10 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer">
            <ShoppingCart size={16} />
            Add to Cart
          </Button>
        }
      />

      <DialogContent className="max-h-[90vh] max-w-lg overflow-hidden rounded-[28px] border-0 p-0 shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
        <div className="max-h-[calc(90vh-120px)] overflow-y-auto p-4 sm:p-5">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl font-bold text-foreground">
              {name}
            </DialogTitle>
            <DialogDescription className="text-sm text-accent">
              Customize your pizza and add your favorite extras.
            </DialogDescription>
          </DialogHeader>

          <div className="mb-5 flex items-center gap-4 rounded-2xl border border-border bg-card p-3">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-orange-50">
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-accent">Starting from</p>
              <p className="text-xl font-bold text-primary">
                {formatCurrency(basePrice)}
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-accent">
                Choose size
              </p>
              <div className="grid grid-cols-3 gap-2">
                {pizzaSizes.map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setSelectedSize(size.id)}
                    className={`rounded-2xl border px-3 py-3 text-left transition-all duration-200 ${
                      selectedSize === size.id
                        ? "border-primary bg-primary/5 text-primary shadow-sm"
                        : "border-border bg-background text-foreground hover:border-primary/50"
                    }`}
                  >
                    <div className="text-sm font-semibold">{size.label}</div>
                    <div className="mt-1 text-xs text-accent">{size.size}</div>
                    <div className="mt-1 text-xs font-medium">
                      +{formatCurrency(size.price)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-accent">
                Add extras
              </p>
              <div className="space-y-2">
                {extras.map((extra) => {
                  const active = selectedExtras.includes(extra.id);

                  return (
                    <button
                      key={extra.id}
                      type="button"
                      onClick={() => toggleExtra(extra.id)}
                      className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-3 py-3 text-left transition-all duration-200 ${
                        active
                          ? "border-primary bg-primary/5"
                          : "border-border bg-background hover:border-primary/40"
                      }`}
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                            active
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border"
                          }`}
                        >
                          {active ? <Check size={14} /> : <Plus size={14} />}
                        </span>
                        <span className="truncate font-medium text-foreground">
                          {extra.name}
                        </span>
                      </span>

                      <span className="shrink-0 text-sm font-semibold text-accent">
                        +{formatCurrency(extra.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-4">
            <div className="flex items-center justify-between text-sm text-accent">
              <span>Order total</span>
              <span className="text-lg font-bold text-foreground">
                {formatCurrency(totalPrice)}
              </span>
            </div>
          </div>
        </div>

        <DialogFooter className="border-t border-border bg-background px-4 py-4 sm:justify-between">
          <Button variant="outline" className="rounded-full">
            Cancel
          </Button>
          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            Add to cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddToCartButton;
