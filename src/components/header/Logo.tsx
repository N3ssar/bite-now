import Image from "next/image";
import Link from "../Link";
import { Routes } from "@/constants/enums";

export default function Logo() {
  return (
    <Link href={Routes.ROOT} className="flex items-center gap-3 select-none">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
        <Image
          src="/pizza-slice.png"
          alt="Bite Now Logo"
          width={40}
          height={40}
          priority
          className="object-contain"
        />
      </div>
      <div className="flex flex-col ">
        <span className="text-xl font-bold tracking-tight text-primary ">
          BiteNow
        </span>
        <span className="text-xs text-muted-foreground">
          Fresh bites, fast delivery
        </span>
      </div>
    </Link>
  );
}
