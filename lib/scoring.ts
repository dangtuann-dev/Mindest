import { AXES, POLE_TO_AXIS, type AxisKey, type AxisPole } from "@/data/axes";
import type { ArchetypeCode } from "@/data/archetypes";
import { CORE_QUESTIONS } from "@/data/questions";

export type Answers = Record<number, number | undefined>;

export type Clarity = "clear" | "moderate" | "balanced";
export type CareLevel = "nhe" | "vua" | "cao";

export interface AxisScore {
  key: AxisKey;
  pole: AxisPole;
  m1: number;
  m2: number;
  diff: number;
  clarity: Clarity;
  missing: number;
}

export interface ScoreResult {
  code: ArchetypeCode;
  axes: AxisScore[];
  careIndex: number;
  careLevel: CareLevel;
}

export type ScoreOutcome =
  | { ok: true; result: ScoreResult }
  | {
      ok: false;
      reason: "insufficient";
      axes: AxisKey[];
      missingByAxis: Record<AxisKey, number>;
    };

export interface SafetyAssessment {
  needsSupport: boolean;
  wantsToTalk: boolean;
  triggeredIds: number[];
}

export interface AttentionAssessment {
  fast: boolean;
  streak: boolean;
  shouldNudge: boolean;
}

const MAX_MISSING_PER_AXIS = 6;

const FAST_THRESHOLD_MS = 4 * 60 * 1000;

const STREAK_THRESHOLD = 30;

const TIE_DEFAULT: Record<AxisKey, AxisPole> = {
  EI: "I",
  FS: "F",
  DR: "R",
  VA: "A",
};

const AXIS_POLES: Record<AxisKey, readonly [AxisPole, AxisPole]> = {
  EI: ["E", "I"],
  FS: ["F", "S"],
  DR: ["D", "R"],
  VA: ["V", "A"],
};

const EPSILON = 1e-9;

function average(values: number[]): number {
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}

function clarityFromDiff(diff: number): Clarity {
  const abs = Math.abs(diff);
  if (abs >= 1.2 - EPSILON) return "clear";
  if (abs >= 0.4 - EPSILON) return "moderate";
  return "balanced";
}

function poleFromDiff(diff: number, axis: AxisKey): AxisPole {
  const [pole1, pole2] = AXIS_POLES[axis];
  if (diff >= 0.4 - EPSILON) return pole1;
  if (diff <= -0.4 + EPSILON) return pole2;
  if (diff > EPSILON) return pole1;
  if (diff < -EPSILON) return pole2;
  return TIE_DEFAULT[axis];
}

export function careLevelFromIndex(index: number): CareLevel {
  if (index < 2.5) return "nhe";
  if (index < 3.5) return "vua";
  return "cao";
}

export function score(answers: Answers): ScoreOutcome {
  const candidates = CORE_QUESTIONS;
  const missingByAxis = {} as Record<AxisKey, number>;
  const insufficient: AxisKey[] = [];
  const axes: AxisScore[] = [];
  const poleMeans: Partial<Record<AxisPole, number>> = {};

  for (const axis of AXES) {
    const [pole1, pole2] = AXIS_POLES[axis.key];
    const axisQuestions = candidates.filter(
      (q) => POLE_TO_AXIS[q.pole as AxisPole] === axis.key,
    );
    const answered = axisQuestions.filter((q) => {
      const value = answers[q.id];
      return typeof value === "number" && value >= 1 && value <= 5;
    });

    const missing = axisQuestions.length - answered.length;
    missingByAxis[axis.key] = missing;

    if (answered.length === 0 || missing > MAX_MISSING_PER_AXIS) {
      insufficient.push(axis.key);
      continue;
    }

    const axisMean = average(answered.map((q) => answers[q.id] as number));
    const filled = axisQuestions.map((q) => {
      const value = answers[q.id];
      return typeof value === "number" && value >= 1 && value <= 5 ? value : axisMean;
    });

    const values1 = filled.filter((_, index) => axisQuestions[index]?.pole === pole1);
    const values2 = filled.filter((_, index) => axisQuestions[index]?.pole === pole2);

    const m1 = average(values1);
    const m2 = average(values2);
    const diff = m1 - m2;

    poleMeans[pole1] = m1;
    poleMeans[pole2] = m2;

    axes.push({
      key: axis.key,
      pole: poleFromDiff(diff, axis.key),
      m1,
      m2,
      diff,
      clarity: clarityFromDiff(diff),
      missing,
    });
  }

  if (insufficient.length > 0) {
    return { ok: false, reason: "insufficient", axes: insufficient, missingByAxis };
  }

  const code = axes.map((axis) => axis.pole).join("") as ArchetypeCode;
  const mA = poleMeans.A ?? 3;
  const mR = poleMeans.R ?? 3;
  const careIndex = 0.6 * mA + 0.4 * mR;

  return {
    ok: true,
    result: {
      code,
      axes,
      careIndex,
      careLevel: careLevelFromIndex(careIndex),
    },
  };
}

export function evaluateSafety(answers: Answers): SafetyAssessment {
  const triggeredIds: number[] = [];
  const value97 = answers[97];
  const value98 = answers[98];
  const value99 = answers[99];
  const value100 = answers[100];

  if (typeof value97 === "number" && value97 >= 2) triggeredIds.push(97);
  if (typeof value98 === "number" && value98 >= 2) triggeredIds.push(98);
  if (typeof value99 === "number" && value99 >= 2) triggeredIds.push(99);

  const needsSupport = triggeredIds.length > 0;
  const wantsToTalk = typeof value100 === "number" && value100 >= 4;

  return { needsSupport, wantsToTalk, triggeredIds };
}

export function assessAttention(
  orderedCoreIds: readonly number[],
  answers: Answers,
  durationMs: number,
): AttentionAssessment {
  const threshold = STREAK_THRESHOLD;
  let longest = 0;
  let current = 0;
  let previous: number | undefined;

  for (const id of orderedCoreIds) {
    const value = answers[id];
    if (typeof value !== "number") {
      current = 0;
      previous = undefined;
      continue;
    }
    current = value === previous ? current + 1 : 1;
    longest = Math.max(longest, current);
    previous = value;
  }

  const fast = durationMs > 0 && durationMs < FAST_THRESHOLD_MS;
  const streak = longest >= threshold;

  return { fast, streak, shouldNudge: fast || streak };
}

export function gaugePosition(m1: number, m2: number): number {
  const total = m1 + m2;
  if (total <= 0) return 50;
  return Math.min(92, Math.max(8, (m2 / total) * 100));
}

export function clarityLabel(clarity: Clarity): string {
  switch (clarity) {
    case "clear":
      return "Rõ";
    case "moderate":
      return "Vừa";
    case "balanced":
      return "Cân bằng";
  }
}

export function clarityHint(clarity: Clarity): string {
  switch (clarity) {
    case "clear":
      return "Xu hướng này khá rõ ở bạn.";
    case "moderate":
      return "Bạn nghiêng về phía này, ở mức vừa phải.";
    case "balanced":
      return "Bạn đang ở giữa hai xu hướng, và điều đó cũng rất bình thường.";
  }
}

export function careLabel(level: CareLevel): string {
  switch (level) {
    case "nhe":
      return "Nhẹ";
    case "vua":
      return "Vừa";
    case "cao":
      return "Cao";
  }
}

export function careDescription(level: CareLevel): string {
  switch (level) {
    case "nhe":
      return "Bạn đang có những nguồn lực để tự điều chỉnh. Vẫn nên giữ những khoảng nghỉ nhỏ mỗi ngày.";
    case "vua":
      return "Đây là lúc để bạn chậm lại một chút, nói ra nhiều hơn và để ai đó hỗ trợ những việc nhỏ.";
    case "cao":
      return "Bạn đang cần được chăm sóc nhiều hơn. Hãy để một người lớn đáng tin biết bạn đang thế nào, và tìm người đồng hành nếu cần.";
  }
}
