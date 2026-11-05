export type AxisKey = "EI" | "FS" | "DR" | "VA";
export type AxisPole = "E" | "I" | "F" | "S" | "D" | "R" | "V" | "A";
export type QuestionPole = AxisPole | "X";

export interface AxisMeta {
  key: AxisKey;
  pole1: AxisPole;
  pole2: AxisPole;
  letter1: string;
  letter2: string;
  label1: string;
  label2: string;
  hint1: string;
  hint2: string;
}

export const AXES: readonly AxisMeta[] = [
  {
    key: "EI",
    pole1: "E",
    pole2: "I",
    letter1: "E",
    letter2: "I",
    label1: "Hướng ra bên ngoài",
    label2: "Hướng vào bên trong",
    hint1: "Bạn xử lý cảm xúc bằng cách nói ra, hành động, ở cạnh người khác.",
    hint2: "Bạn xử lý cảm xúc bằng cách thu lại, quan sát và tự ngẫm.",
  },
  {
    key: "FS",
    pole1: "F",
    pole2: "S",
    letter1: "F",
    letter2: "S",
    label1: "Áp lực từ bên ngoài",
    label2: "Áp lực từ chính mình",
    hint1: "Kỳ vọng của gia đình, nhà trường và xã hội là điều bạn cảm nhận rõ nhất.",
    hint2: "Tiêu chuẩn bạn tự đặt ra cho mình thường nặng hơn điều ai đó mong đợi.",
  },
  {
    key: "DR",
    pole1: "D",
    pole2: "R",
    letter1: "D",
    letter2: "R",
    label1: "Tìm chỗ trú trên mạng",
    label2: "Cơ thể lên tiếng",
    hint1: "Màn hình là nơi bạn tạm lánh khi mọi thứ quá nhiều.",
    hint2: "Căng thẳng của bạn hiện ra qua giấc ngủ, hơi thở và những cơn mệt.",
  },
  {
    key: "VA",
    pole1: "V",
    pole2: "A",
    letter1: "V",
    letter2: "A",
    label1: "Chủ động",
    label2: "Cần được nâng đỡ",
    hint1: "Bạn vẫn nhìn thấy một hướng để thử, dù chậm.",
    hint2: "Lúc này, bạn cần thêm một bàn tay và một chỗ để dựa.",
  },
] as const;

export const AXIS_BY_KEY: Record<AxisKey, AxisMeta> = {
  EI: AXES[0]!,
  FS: AXES[1]!,
  DR: AXES[2]!,
  VA: AXES[3]!,
};

export const POLE_TO_AXIS: Record<AxisPole, AxisKey> = {
  E: "EI",
  I: "EI",
  F: "FS",
  S: "FS",
  D: "DR",
  R: "DR",
  V: "VA",
  A: "VA",
};
