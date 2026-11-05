import type {
  AxisScore,
  AttentionAssessment,
  CareLevel,
  SafetyAssessment,
} from "@/lib/scoring";
import type { ArchetypeCode } from "@/data/archetypes";

export type AgeGroup = "12-15" | "16-18" | "19-22";

export const AGE_GROUPS: ReadonlyArray<{ value: AgeGroup; label: string; note: string }> =
  [
    {
      value: "12-15",
      label: "12–15 tuổi",
      note: "Cần xác nhận của phụ huynh/người giám hộ",
    },
    { value: "16-18", label: "16–18 tuổi", note: "Bạn có thể tự đồng ý tham gia" },
    { value: "19-22", label: "19–22 tuổi", note: "Bạn có thể tự đồng ý tham gia" },
  ];

const RUN_KEY = "mindest:run:v2";
const RESULT_KEY = "mindest:result:v2";

export interface RunState {
  ageGroup: AgeGroup;
  guardianConsent: boolean;
  seed: number;
  order: number[];
  answers: Record<number, number>;
  skipped: number[];
  startedAt: number;
  page: number;
}

export interface StoredResult {
  savedAt: string;
  ageGroup: AgeGroup;
  code: ArchetypeCode;
  axes: AxisScore[];
  careIndex: number;
  careLevel: CareLevel;
  safety: SafetyAssessment;
  attention: AttentionAssessment;
  durationMs: number;
}

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.sessionStorage !== "undefined";
}

export function loadRun(): RunState | null {
  if (!canUseStorage()) return null;
  try {
    const raw = sessionStorage.getItem(RUN_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<RunState>;
    if (!Array.isArray(parsed.order) || !Array.isArray(parsed.skipped)) return null;
    if (parsed.answers && typeof parsed.answers !== "object") return null;
    return {
      ageGroup: parsed.ageGroup ?? "16-18",
      guardianConsent: Boolean(parsed.guardianConsent),
      seed: typeof parsed.seed === "number" ? parsed.seed : 0,
      order: parsed.order.filter((id): id is number => typeof id === "number"),
      answers: (parsed.answers ?? {}) as Record<number, number>,
      skipped: parsed.skipped.filter((id): id is number => typeof id === "number"),
      startedAt: typeof parsed.startedAt === "number" ? parsed.startedAt : Date.now(),
      page: typeof parsed.page === "number" ? parsed.page : 0,
    };
  } catch {
    return null;
  }
}

export function saveRun(run: RunState): void {
  if (!canUseStorage()) return;
  sessionStorage.setItem(RUN_KEY, JSON.stringify(run));
}

export function clearRun(): void {
  if (!canUseStorage()) return;
  sessionStorage.removeItem(RUN_KEY);
}

export function loadResult(): StoredResult | null {
  if (!canUseStorage()) return null;
  try {
    const raw = sessionStorage.getItem(RESULT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredResult>;
    if (!parsed.code || !Array.isArray(parsed.axes) || !parsed.savedAt) return null;
    return parsed as StoredResult;
  } catch {
    return null;
  }
}

export function saveResult(result: StoredResult): void {
  if (!canUseStorage()) return;
  sessionStorage.setItem(RESULT_KEY, JSON.stringify(result));
}

export function clearResult(): void {
  if (!canUseStorage()) return;
  sessionStorage.removeItem(RESULT_KEY);
}

export function clearAllData(): void {
  if (!canUseStorage()) return;
  sessionStorage.removeItem(RUN_KEY);
  sessionStorage.removeItem(RESULT_KEY);
}

export function todayKey(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

export function formatDateVi(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}
