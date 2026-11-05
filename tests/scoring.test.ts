import { describe, expect, it } from "vitest";
import { POLE_TO_AXIS, type AxisKey } from "@/data/axes";
import type { ArchetypeCode } from "@/data/archetypes";
import { CORE_QUESTIONS } from "@/data/questions";
import {
  assessAttention,
  careLevelFromIndex,
  clarityLabel,
  evaluateSafety,
  score,
  type Answers,
} from "@/lib/scoring";

const AXIS_ORDER: AxisKey[] = ["EI", "FS", "DR", "VA"];

const ALL_CODES: ArchetypeCode[] = [
  "EFDV",
  "EFDA",
  "EFRV",
  "EFRA",
  "ESDV",
  "ESDA",
  "ESRV",
  "ESRA",
  "IFDV",
  "IFDA",
  "IFRV",
  "IFRA",
  "ISDV",
  "ISDA",
  "ISRV",
  "ISRA",
];

function answersForCode(code: ArchetypeCode): Answers {
  const answers: Answers = {};
  for (const question of CORE_QUESTIONS) {
    const axis = POLE_TO_AXIS[question.pole as Exclude<typeof question.pole, "X">];
    const target = code[AXIS_ORDER.indexOf(axis)] as string;
    answers[question.id] = question.pole === target ? 5 : 1;
  }
  return answers;
}

function expectCode(code: ArchetypeCode, outcome: ReturnType<typeof score>) {
  expect(outcome.ok).toBe(true);
  if (outcome.ok) {
    expect(outcome.result.code).toBe(code);
  }
}

describe("score – 16 mã nhân cách", () => {
  it.each(ALL_CODES)("tạo đúng mã %s", (code) => {
    const outcome = score(answersForCode(code));
    expectCode(code, outcome);
    if (outcome.ok) {
      for (const axis of outcome.result.axes) {
        expect(axis.clarity).toBe("clear");
        expect(axis.missing).toBe(0);
      }
    }
  });
});

describe("score – trường hợp hòa", () => {
  it("chọn I, F, R, A khi hai cực bằng nhau tuyệt đối", () => {
    const answers: Answers = {};
    for (const question of CORE_QUESTIONS) answers[question.id] = 3;

    const outcome = score(answers);
    expectCode("IFRA", outcome);
    if (outcome.ok) {
      expect(outcome.result.axes.every((axis) => axis.clarity === "balanced")).toBe(true);
      expect(outcome.result.careLevel).toBe("vua");
      expect(outcome.result.careIndex).toBeCloseTo(3);
    }
  });

  it("vẫn chọn cực có trung bình cao hơn khi chênh lệch dưới 0.4", () => {
    const answers: Answers = {};
    for (const question of CORE_QUESTIONS) answers[question.id] = 3;
    answers[1] = 4;

    const outcome = score(answers);
    expectCode("EFRA", outcome);
    if (outcome.ok) {
      const axis = outcome.result.axes.find((item) => item.key === "EI");
      expect(axis?.clarity).toBe("balanced");
      expect(axis?.pole).toBe("E");
    }
  });
});

describe("score – bỏ trống", () => {
  it("cho phép tối đa 6 câu trống mỗi trục và điền bằng trung bình trục", () => {
    const answers = answersForCode("EFDV");
    for (const id of [1, 2, 3, 4, 5, 6]) delete answers[id];

    const outcome = score(answers);
    expectCode("EFDV", outcome);
    if (outcome.ok) {
      const axis = outcome.result.axes.find((item) => item.key === "EI");
      expect(axis?.missing).toBe(6);
    }
  });

  it("báo chưa đủ dữ liệu khi quá 6 câu trống ở một trục", () => {
    const answers = answersForCode("EFDV");
    for (const id of [1, 2, 3, 4, 5, 6, 7]) delete answers[id];

    const outcome = score(answers);
    expect(outcome.ok).toBe(false);
    if (!outcome.ok) {
      expect(outcome.reason).toBe("insufficient");
      expect(outcome.axes).toContain("EI");
      expect(outcome.missingByAxis.EI).toBe(7);
    }
  });

  it("báo chưa đủ dữ liệu khi một trục không có câu nào được trả lời", () => {
    const answers = answersForCode("ISRV");
    for (const question of CORE_QUESTIONS.filter(
      (q) => POLE_TO_AXIS[q.pole as "E"] === "VA",
    )) {
      delete answers[question.id];
    }

    const outcome = score(answers);
    expect(outcome.ok).toBe(false);
    if (!outcome.ok) {
      expect(outcome.axes).toEqual(["VA"]);
    }
  });
});

describe("Care Index", () => {
  it("phân bậc Nhẹ, Vừa, Cao", () => {
    expect(careLevelFromIndex(1.2)).toBe("nhe");
    expect(careLevelFromIndex(2.49)).toBe("nhe");
    expect(careLevelFromIndex(2.5)).toBe("vua");
    expect(careLevelFromIndex(3.49)).toBe("vua");
    expect(careLevelFromIndex(3.5)).toBe("cao");
  });

  it("tính 0.6 * A + 0.4 * R", () => {
    const outcome = score(answersForCode("ESRA"));
    expect(outcome.ok).toBe(true);
    if (outcome.ok) {
      expect(outcome.result.careIndex).toBeCloseTo(5);
      expect(outcome.result.careLevel).toBe("cao");
    }

    const low = score(answersForCode("EFDV"));
    expect(low.ok).toBe(true);
    if (low.ok) {
      expect(low.result.careIndex).toBeCloseTo(1);
      expect(low.result.careLevel).toBe("nhe");
    }
  });
});

describe("cờ an toàn", () => {
  it("kích hoạt khi câu 97, 98 hoặc 99 từ mức 2", () => {
    expect(evaluateSafety({ 97: 2 }).needsSupport).toBe(true);
    expect(evaluateSafety({ 98: 2 }).needsSupport).toBe(true);
    expect(evaluateSafety({ 99: 2 }).needsSupport).toBe(true);
    expect(evaluateSafety({ 97: 1, 98: 1, 99: 1 }).needsSupport).toBe(false);
  });

  it("không kích hoạt khi bỏ qua câu an toàn", () => {
    const safety = evaluateSafety({});
    expect(safety.needsSupport).toBe(false);
    expect(safety.wantsToTalk).toBe(false);
    expect(safety.triggeredIds).toEqual([]);
  });

  it("hiện lời mời trò chuyện khi câu 100 từ mức 4", () => {
    expect(evaluateSafety({ 100: 4 }).wantsToTalk).toBe(true);
    expect(evaluateSafety({ 100: 3 }).wantsToTalk).toBe(false);
    expect(evaluateSafety({}).wantsToTalk).toBe(false);
  });

  it("câu an toàn không ảnh hưởng đến mã", () => {
    const answers = answersForCode("IFDV");
    const withoutSafety = score(answers);
    answers[97] = 5;
    answers[99] = 5;
    answers[100] = 5;
    expect(score(answers)).toEqual(withoutSafety);
  });
});

describe("kiểm tra chống làm cho có", () => {
  const ids = CORE_QUESTIONS.map((q) => q.id);

  it("phát hiện chuỗi 30 đáp án giống nhau ở bản đầy đủ", () => {
    const answers: Answers = Object.fromEntries(ids.map((id) => [id, 4]));
    const result = assessAttention(ids, answers, 10 * 60 * 1000);
    expect(result.streak).toBe(true);
    expect(result.shouldNudge).toBe(true);
  });

  it("không báo động khi đáp án thay đổi", () => {
    const answers: Answers = Object.fromEntries(
      ids.map((id, index) => [id, (index % 5) + 1]),
    );
    const result = assessAttention(ids, answers, 10 * 60 * 1000);
    expect(result.streak).toBe(false);
    expect(result.fast).toBe(false);
    expect(result.shouldNudge).toBe(false);
  });

  it("phát hiện hoàn thành quá nhanh", () => {
    const answers: Answers = Object.fromEntries(ids.map((id) => [id, 3]));
    expect(assessAttention(ids, answers, 3 * 60 * 1000).fast).toBe(true);
    expect(assessAttention(ids, answers, 5 * 60 * 1000).fast).toBe(false);
  });
});

describe("nhãn hiển thị", () => {
  it("hiển thị mức rõ nét bằng tiếng Việt", () => {
    expect(clarityLabel("clear")).toBe("Rõ");
    expect(clarityLabel("moderate")).toBe("Vừa");
    expect(clarityLabel("balanced")).toBe("Cân bằng");
  });
});
