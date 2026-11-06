"use client";

import { useState } from "react";
import { ARCHETYPE_BY_CODE } from "@/data/archetypes";
import { getAvatarSvg, svgToPngDataUrl } from "@/lib/avatar";
import { todayKey, type StoredResult } from "@/lib/session";
import { Download } from "./icons";

type Status = "idle" | "working" | "error";

export function ReportDownloadButton({ result }: { result: StoredResult }) {
  const [status, setStatus] = useState<Status>("idle");

  async function download() {
    setStatus("working");
    try {
      const archetype = ARCHETYPE_BY_CODE[result.code];
      const avatarDataUrl = await svgToPngDataUrl(
        getAvatarSvg(result.code, result.gender),
        512,
      );
      const [{ pdf }, { ReportDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/lib/report-document"),
      ]);
      const blob = await pdf(
        <ReportDocument result={result} archetype={archetype} avatarDataUrl={avatarDataUrl} />,
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Mindest-${result.code}-${todayKey()}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setStatus("idle");
    } catch (error) {
      console.error("[Mindest] Không tạo được PDF:", error);
      setStatus("error");
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={download}
        disabled={status === "working"}
        className="btn-primary w-full gap-2 sm:w-auto"
      >
        <Download size={18} />
        {status === "working" ? "Đang tạo báo cáo…" : "Tải báo cáo PDF"}
      </button>
      {status === "error" ? (
        <p className="mt-2 text-[0.72rem] text-clay-700 dark:text-clay-300" role="alert">
          Chưa tạo được PDF. Bạn thử lại một lần nữa nhé.
        </p>
      ) : null}
    </div>
  );
}
