"use client";

import { useState } from "react";
import { ARCHETYPE_BY_CODE } from "@/data/archetypes";
import { getAvatarSvg, svgToPngDataUrl } from "@/lib/avatar";
import { ImageIcon } from "./icons";

type Status = "idle" | "working" | "error";

function loadImage(source: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Không tải được ảnh."));
    image.src = source;
  });
}

function roundedRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.arcTo(x + width, y, x + width, y + height, radius);
  context.arcTo(x + width, y + height, x, y + height, radius);
  context.arcTo(x, y + height, x, y, radius);
  context.arcTo(x, y, x + width, y, radius);
  context.closePath();
}

function wrapLines(
  context: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxLines: number,
): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (context.measureText(next).width > maxWidth && current) {
      lines.push(current);
      current = word;
      if (lines.length === maxLines) break;
    } else {
      current = next;
    }
  }
  if (lines.length < maxLines && current) lines.push(current);
  return lines;
}

export function MindsetCardButton({ code }: { code: keyof typeof ARCHETYPE_BY_CODE }) {
  const [status, setStatus] = useState<Status>("idle");

  async function download() {
    setStatus("working");
    try {
      const archetype = ARCHETYPE_BY_CODE[code];
      await document.fonts.ready;
      const image = await loadImage(await svgToPngDataUrl(getAvatarSvg(code), 720));
      const family = getComputedStyle(document.body).fontFamily || "sans-serif";

      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1080;
      const context = canvas.getContext("2d");
      if (!context) throw new Error("Không có canvas.");

      context.fillStyle = archetype.tint;
      context.fillRect(0, 0, 1080, 1080);

      context.save();
      context.globalAlpha = 0.16;
      context.fillStyle = archetype.color;
      context.beginPath();
      context.arc(1010, 60, 320, 0, Math.PI * 2);
      context.fill();
      context.beginPath();
      context.arc(30, 1040, 250, 0, Math.PI * 2);
      context.fill();
      context.restore();

      context.fillStyle = archetype.color;
      context.font = `700 30px ${family}`;
      context.letterSpacing = "6px";
      context.fillText("MINDEST", 72, 104);
      context.letterSpacing = "0px";
      context.font = `500 24px ${family}`;
      context.fillStyle = "#5B5249";
      context.textAlign = "right";
      context.fillText("16 nhân cách ứng phó", 1008, 102);
      context.textAlign = "left";

      roundedRect(context, 330, 150, 420, 420, 54);
      context.save();
      context.clip();
      context.drawImage(image, 330, 150, 420, 420);
      context.restore();

      const chipWidth = 132;
      roundedRect(context, 540 - chipWidth / 2, 614, chipWidth, 46, 23);
      context.fillStyle = archetype.color;
      context.fill();
      context.textAlign = "center";
      context.fillStyle = "#FFFDF8";
      context.font = `700 24px ${family}`;
      context.letterSpacing = "5px";
      context.fillText(archetype.code, 540, 646);
      context.letterSpacing = "0px";

      context.fillStyle = "#2A2520";
      context.font = `700 66px ${family}`;
      const nameLines = wrapLines(context, archetype.name, 920, 2);
      let cursor = 742;
      for (const line of nameLines) {
        context.fillText(line, 540, cursor);
        cursor += 76;
      }

      context.fillStyle = "#5B5249";
      context.font = `italic 400 30px ${family}`;
      const sloganLines = wrapLines(context, `“${archetype.slogan}”`, 840, 3);
      cursor += 8;
      for (const line of sloganLines) {
        context.fillText(line, 540, cursor);
        cursor += 44;
      }

      context.textAlign = "left";
      context.fillStyle = "#8A7E71";
      context.font = `500 22px ${family}`;
      context.fillText("tổ ấm cho tâm trí", 72, 1020);
      context.textAlign = "right";
      context.fillText("Câu trả lời của bạn không rời khỏi thiết bị này.", 1008, 1020);

      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, "image/png"),
      );
      if (!blob) throw new Error("Không tạo được ảnh.");

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Mindest-Card-${archetype.code}.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={download}
        disabled={status === "working"}
        className="btn-secondary w-full gap-2 sm:w-auto"
      >
        <ImageIcon size={18} />
        {status === "working" ? "Đang tạo ảnh…" : "Tải Mindset Card"}
      </button>
      {status === "error" ? (
        <p className="mt-2 text-[0.72rem] text-clay-700 dark:text-clay-300" role="alert">
          Chưa tạo được ảnh. Bạn thử lại một lần nữa nhé.
        </p>
      ) : null}
    </div>
  );
}
