import { getAvatarSvg } from "@/lib/avatar";
import { ARCHETYPE_BY_CODE, type ArchetypeCode } from "@/data/archetypes";
import type { Gender } from "@/lib/session";
import { cn } from "@/lib/cn";

export function Avatar({
  code,
  gender,
  className,
  label,
}: {
  code: ArchetypeCode;
  gender?: Gender;
  className?: string;
  label?: string;
}) {
  const svg = getAvatarSvg(code, gender);
  const archetype = ARCHETYPE_BY_CODE[code];

  return (
    <div
      className={cn(
        "overflow-hidden bg-cream-200 [&>svg]:block [&>svg]:h-full [&>svg]:w-full",
        className,
      )}
      role="img"
      aria-label={label ?? `Chân dung ${archetype.name}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
