import { CORE_QUESTIONS } from "@/data/questions";

export function randomSeed(): number {
  if (typeof crypto !== "undefined" && "getRandomValues" in crypto) {
    return crypto.getRandomValues(new Uint32Array(1))[0] ?? Date.now();
  }
  return Math.floor(Math.random() * 2 ** 32);
}

export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function buildOrder(seed: number): number[] {
  const ids = CORE_QUESTIONS.map((q) => q.id);
  const random = mulberry32(seed);
  for (let i = ids.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    const current = ids[i];
    const target = ids[j];
    if (current !== undefined && target !== undefined) {
      ids[i] = target;
      ids[j] = current;
    }
  }
  return ids;
}
