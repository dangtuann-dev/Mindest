import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import { AVATARS, AVATAR_GENDER_OVERRIDES } from "@/data/avatars";
import type { ArchetypeCode } from "@/data/archetypes";
import type { Gender } from "@/lib/session";

export function getAvatarSvg(code: ArchetypeCode, gender: Gender = "khac"): string {
  const config = AVATARS[code];
  const overrides = gender === "khac" ? {} : AVATAR_GENDER_OVERRIDES[gender][code];
  return createAvatar(lorelei, {
    seed: config.seed,
    backgroundColor: [config.backgroundColor],
    ...config.options,
    ...overrides,
    beardProbability: 0,
  } as unknown as Parameters<typeof createAvatar>[1]).toString();
}

export function svgToDataUrl(svg: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function svgToPngDataUrl(svg: string, size = 512): Promise<string> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext("2d");
      if (!context) {
        reject(new Error("Không thể khởi tạo canvas."));
        return;
      }
      context.drawImage(image, 0, 0, size, size);
      resolve(canvas.toDataURL("image/png"));
    };
    image.onerror = () => reject(new Error("Không thể chuyển avatar sang ảnh."));
    image.src = svgToDataUrl(svg);
  });
}
