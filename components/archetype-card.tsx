import Link from "next/link";
import { Avatar } from "./avatar";
import type { Archetype } from "@/data/archetypes";

export function ArchetypeCard({
  archetype,
  compact = false,
}: {
  archetype: Archetype;
  compact?: boolean;
}) {
  return (
    <Link href={`/nhan-cach/${archetype.code}`} className="group flex flex-col">
      <div
        className="relative overflow-hidden rounded-[1.9rem] p-2.5 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lift dark:!bg-night-700"
        style={{ backgroundColor: archetype.tint }}
      >
        <Avatar
          code={archetype.code}
          className="aspect-[1/0.96] rounded-[1.45rem] transition duration-500 group-hover:scale-[1.025]"
        />
        <span className="absolute right-4 top-4 rounded-full bg-white/85 px-2.5 py-1 text-[0.6rem] font-bold tracking-[0.12em] text-ink/70 backdrop-blur dark:bg-night-900/70 dark:text-cream-200/80">
          {archetype.code}
        </span>
      </div>
      <div className={compact ? "px-1 pt-3" : "px-1 pt-4"}>
        <h3 className="text-[0.98rem] font-semibold leading-snug">{archetype.name}</h3>
        {!compact ? (
          <p className="mt-1.5 line-clamp-2 text-[0.8rem] leading-relaxed text-ink-soft dark:text-cream-200/60">
            {archetype.slogan}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
