"use client";

import type { ReactNode } from "react";
import { clearAllData } from "@/lib/session";
import { cn } from "@/lib/cn";
import { Trash } from "./icons";

export function ClearDataButton({
  className,
  compact = false,
  children,
}: {
  className?: string;
  compact?: boolean;
  children?: ReactNode;
}) {
  function handleClick() {
    const confirmed = window.confirm(
      "Xóa toàn bộ câu trả lời và kết quả đang được lưu trên tab này? Hành động này không thể hoàn tác.",
    );
    if (!confirmed) return;
    clearAllData();
    window.location.assign("/");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full text-left text-sm font-medium text-ink-faint transition hover:text-clay-600 dark:text-cream-200/60 dark:hover:text-clay-300",
        !compact && "px-3 py-2",
        className,
      )}
    >
      <Trash size={16} />
      <span>{children ?? "Xóa dữ liệu của mình"}</span>
    </button>
  );
}
