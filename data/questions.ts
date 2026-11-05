import type { QuestionPole } from "./axes";

export interface Question {
  id: number;
  pole: QuestionPole;
  text: string;
}

export const QUESTIONS: readonly Question[] = [
  {
    id: 1,
    pole: "E",
    text: "Khi bực bội, mình cần kể ngay cho ai đó nghe mới thấy nhẹ người.",
  },
  {
    id: 2,
    pole: "E",
    text: "Khi căng thẳng, mình nói nhiều hơn hoặc to tiếng hơn bình thường.",
  },
  {
    id: 3,
    pole: "E",
    text: "Lúc stress, mình dễ buột miệng cáu gắt với người xung quanh.",
  },
  {
    id: 4,
    pole: "E",
    text: "Sau một ngày tệ, mình muốn ra ngoài gặp bạn bè hơn là ở nhà một mình.",
  },
  { id: 5, pole: "E", text: "Mình hay đăng story/status để xả cảm xúc." },
  {
    id: 6,
    pole: "E",
    text: "Khi buồn, mình tìm đến âm nhạc lớn hoặc hoạt động sôi nổi.",
  },
  {
    id: 7,
    pole: "E",
    text: "Khi bị hiểu lầm, mình sẵn sàng cãi đến cùng để bảo vệ ý kiến.",
  },
  { id: 8, pole: "E", text: "Cảm xúc của mình hiện rõ trên mặt, người khác dễ nhận ra." },
  { id: 9, pole: "E", text: "Mình thấy nhẹ lòng hơn khi khóc to hoặc vận động mạnh." },
  { id: 10, pole: "E", text: "Khi có chuyện, mình nhắn cho nhiều người cùng lúc." },
  { id: 11, pole: "E", text: "Mình rất khó chịu khi phải im lặng chịu đựng." },
  { id: 12, pole: "E", text: "Lúc tâm trạng tệ, mình thích ở giữa nhóm bạn đông." },
  {
    id: 13,
    pole: "I",
    text: "Khi buồn, mình muốn ở một mình trong phòng và không muốn nói chuyện.",
  },
  { id: 14, pole: "I", text: "Mình thường giữ cảm xúc trong lòng, ít chia sẻ." },
  { id: 15, pole: "I", text: "Khi căng thẳng, mình trở nên im lặng hơn." },
  { id: 16, pole: "I", text: "Mình hay nói “mình ổn” dù thật ra không ổn." },
  {
    id: 17,
    pole: "I",
    text: "Mình thấy mệt khi phải giải thích cảm xúc của mình cho người khác.",
  },
  { id: 18, pole: "I", text: "Lúc tâm trạng xuống, mình tránh các buổi gặp mặt." },
  { id: 19, pole: "I", text: "Khi quá tải, mình trả lời tin nhắn rất chậm hoặc bỏ qua." },
  { id: 20, pole: "I", text: "Mình sợ làm phiền người khác nếu kể chuyện buồn." },
  {
    id: 21,
    pole: "I",
    text: "Mình nghĩ đi nghĩ lại một chuyện nhiều ngày mà không nói với ai.",
  },
  { id: 22, pole: "I", text: "Mình thà tự lo một mình còn hơn nhờ người khác." },
  { id: 23, pole: "I", text: "Khi áp lực kéo dài, mình xa dần bạn bè." },
  {
    id: 24,
    pole: "I",
    text: "Mình xử lý cảm xúc bằng cách tự viết, vẽ hoặc ngẫm nghĩ một mình.",
  },
  { id: 25, pole: "F", text: "Mình áp lực nhất khi nghĩ đến kỳ vọng của bố mẹ." },
  { id: 26, pole: "F", text: "Mình lo bị so sánh với “con nhà người ta”." },
  { id: 27, pole: "F", text: "Mình sợ làm bố mẹ thất vọng hơn là sợ điểm kém." },
  {
    id: 28,
    pole: "F",
    text: "Những cuộc nói chuyện với bố mẹ về học hành, tương lai khiến mình căng thẳng.",
  },
  {
    id: 29,
    pole: "F",
    text: "Mình chọn việc học/ngành học chủ yếu để đáp ứng mong muốn của gia đình.",
  },
  { id: 30, pole: "F", text: "Mình lo họ hàng, hàng xóm đánh giá về mình." },
  {
    id: 31,
    pole: "F",
    text: "Mình ngại nói về cảm xúc vì ở nhà đó bị xem là “yếu đuối”.",
  },
  {
    id: 32,
    pole: "F",
    text: "Mình thấy mình không được tự quyết định chuyện của bản thân.",
  },
  { id: 33, pole: "F", text: "Mình thấy bất an khi về nhà vì sợ bị hỏi về kết quả." },
  { id: 34, pole: "F", text: "Mình sợ bị bạn bè, xã hội đánh giá nếu mình thất bại." },
  { id: 35, pole: "F", text: "Mình thấy bố mẹ không hiểu thế giới của mình." },
  {
    id: 36,
    pole: "F",
    text: "Mình hay giấu bố mẹ điểm kém hoặc chuyện buồn để tránh rắc rối.",
  },
  { id: 37, pole: "S", text: "Áp lực lớn nhất đến từ chính tiêu chuẩn mình tự đặt ra." },
  {
    id: 38,
    pole: "S",
    text: "Dù không ai đòi hỏi, mình vẫn ép bản thân phải làm thật tốt.",
  },
  { id: 39, pole: "S", text: "Mình tự trách nặng nề khi làm chưa hoàn hảo." },
  { id: 40, pole: "S", text: "Mình khó chấp nhận kết quả “tạm được”." },
  { id: 41, pole: "S", text: "Mình hay thức khuya sửa đi sửa lại cho đến khi vừa ý." },
  { id: 42, pole: "S", text: "Mình thấy phải liên tục chứng minh giá trị của bản thân." },
  { id: 43, pole: "S", text: "Mình sợ bị tụt lại so với mục tiêu mình tự đặt." },
  { id: 44, pole: "S", text: "Mình khó nghỉ ngơi mà không thấy có lỗi." },
  {
    id: 45,
    pole: "S",
    text: "Mình hay so sánh mình hiện tại với “phiên bản lý tưởng” của mình.",
  },
  {
    id: 46,
    pole: "S",
    text: "Mình lên kế hoạch dày đặc và thấy căng thẳng khi không đạt kịp.",
  },
  { id: 47, pole: "S", text: "Mình đánh giá giá trị bản thân qua thành tích." },
  { id: 48, pole: "S", text: "Mình tạo áp lực cho bản thân nhiều hơn bất kỳ ai khác." },
  { id: 49, pole: "D", text: "Khi căng thẳng, mình mở điện thoại lướt vô định." },
  {
    id: 50,
    pole: "D",
    text: "Mình chơi game/xem video hàng giờ để khỏi nghĩ đến chuyện khác.",
  },
  { id: 51, pole: "D", text: "Mình lướt mạng đến khuya dù biết mai sẽ mệt." },
  { id: 52, pole: "D", text: "Mình thấy bồn chồn khi xa điện thoại một lúc." },
  {
    id: 53,
    pole: "D",
    text: "Khi bí việc, mình mở TikTok/Instagram mà không có chủ đích.",
  },
  {
    id: 54,
    pole: "D",
    text: "Thế giới mạng khiến mình thấy dễ chịu hơn ngoài đời thực.",
  },
  {
    id: 55,
    pole: "D",
    text: "Mình trì hoãn việc quan trọng bằng cách xem “thêm một video nữa”.",
  },
  { id: 56, pole: "D", text: "Mình dùng mạng xã hội để quên đi cảm giác tệ." },
  {
    id: 57,
    pole: "D",
    text: "Mình đã thử giảm thời gian dùng điện thoại nhưng rất khó làm được.",
  },
  {
    id: 58,
    pole: "D",
    text: "Mình so sánh bản thân với người khác trên mạng và thấy mình tệ hơn.",
  },
  {
    id: 59,
    pole: "D",
    text: "Lướt mạng lâu xong mình thấy trống rỗng nhưng vẫn lướt tiếp.",
  },
  { id: 60, pole: "D", text: "Mình ngại giao tiếp ngoài đời hơn là nhắn tin/online." },
  { id: 61, pole: "R", text: "Khi stress, mình bị đau đầu hoặc đau bụng." },
  { id: 62, pole: "R", text: "Mình khó ngủ hoặc hay tỉnh giấc giữa đêm vì lo nghĩ." },
  { id: 63, pole: "R", text: "Mình thấy mệt dù không làm việc nặng." },
  { id: 64, pole: "R", text: "Khi áp lực, tim mình đập nhanh hoặc tay chân run." },
  {
    id: 65,
    pole: "R",
    text: "Khi căng thẳng, mình mất cảm giác thèm ăn hoặc ăn quá nhiều.",
  },
  { id: 66, pole: "R", text: "Vai gáy mình thường căng cứng." },
  {
    id: 67,
    pole: "R",
    text: "Có những ngày mình mệt đến mức không muốn rời khỏi giường.",
  },
  { id: 68, pole: "R", text: "Mình hay ốm vặt vào giai đoạn thi cử hoặc gần deadline." },
  {
    id: 69,
    pole: "R",
    text: "Đầu mình muốn làm nhưng cơ thể quá mệt nên không tập trung được.",
  },
  {
    id: 70,
    pole: "R",
    text: "Trước kỳ thi hoặc buổi quan trọng, mình thấy người nặng nề, khó chịu.",
  },
  { id: 71, pole: "R", text: "Mình khó thư giãn, cơ thể lúc nào cũng như đang “gồng”." },
  {
    id: 72,
    pole: "R",
    text: "Cơ thể mình “biểu tình” (mệt, đau) trước khi mình kịp nhận ra mình đang stress.",
  },
  {
    id: 73,
    pole: "V",
    text: "Khi gặp khó khăn, mình tin sẽ có cách giải quyết nếu cố gắng.",
  },
  { id: 74, pole: "V", text: "Mình chủ động tìm hiểu cách giảm stress (đọc, hỏi, thử)." },
  { id: 75, pole: "V", text: "Mình sẵn sàng nhờ ai đó giúp khi cần." },
  { id: 76, pole: "V", text: "Mình tin mọi thứ sẽ tốt hơn trong thời gian tới." },
  { id: 77, pole: "V", text: "Sau thất bại, mình thường rút ra bài học và thử lại." },
  { id: 78, pole: "V", text: "Tuần này mình có ít nhất một điều để mong chờ." },
  { id: 79, pole: "V", text: "Mình tò mò muốn hiểu bản thân rõ hơn." },
  { id: 80, pole: "V", text: "Mình tin mình có thể thay đổi những thói quen chưa tốt." },
  { id: 81, pole: "V", text: "Mình biết ít nhất một người mình có thể tin tưởng." },
  {
    id: 82,
    pole: "V",
    text: "Mình muốn thử các cách chăm sóc tinh thần (viết nhật ký, thiền, trò chuyện với chuyên gia).",
  },
  { id: 83, pole: "V", text: "Mình vẫn tìm thấy niềm vui trong sở thích của mình." },
  { id: 84, pole: "V", text: "Mình tin mình xứng đáng được hỗ trợ." },
  {
    id: 85,
    pole: "A",
    text: "Mình thấy dù cố gắng thế nào, mọi thứ cũng không khá hơn.",
  },
  { id: 86, pole: "A", text: "Mình mất hứng thú với những điều từng yêu thích." },
  { id: 87, pole: "A", text: "Mình thấy mình là gánh nặng cho người khác." },
  {
    id: 88,
    pole: "A",
    text: "Phần lớn thời gian mình thấy trống rỗng hoặc tê liệt cảm xúc.",
  },
  { id: 89, pole: "A", text: "Mình không còn động lực bắt đầu bất cứ việc gì." },
  { id: 90, pole: "A", text: "Mình thấy tương lai mờ mịt, không có gì để mong đợi." },
  { id: 91, pole: "A", text: "Mình nghĩ có tìm sự giúp đỡ cũng vô ích." },
  { id: 92, pole: "A", text: "Mình thấy bản thân kém giá trị hơn người khác." },
  {
    id: 93,
    pole: "A",
    text: "Mình thấy như đang kẹt trong một vòng lặp không thoát ra được.",
  },
  {
    id: 94,
    pole: "A",
    text: "Mình hay thấy nặng lòng hoặc muốn khóc mà không rõ lý do.",
  },
  { id: 95, pole: "A", text: "Mình mệt mỏi vì ngày nào cũng phải gắng gượng." },
  { id: 96, pole: "A", text: "Mình thấy cô đơn ngay cả khi ở giữa nhiều người." },
  {
    id: 97,
    pole: "X",
    text: "Trong 2 tuần qua, có lúc mình nghĩ rằng sẽ tốt hơn nếu mình biến mất hoặc không còn tồn tại.",
  },
  { id: 98, pole: "X", text: "Mình từng nghĩ đến việc làm đau bản thân." },
  {
    id: 99,
    pole: "X",
    text: "Mình đang không cảm thấy an toàn ở nhà hoặc ở trường (bị bạo lực, bắt nạt, xâm hại).",
  },
  { id: 100, pole: "X", text: "Lúc này mình rất cần nói chuyện với một người thật." },
];

export const CORE_QUESTIONS = QUESTIONS.filter((q) => q.pole !== "X");
export const SAFETY_QUESTIONS = QUESTIONS.filter((q) => q.pole === "X");
export const SAFETY_IDS = SAFETY_QUESTIONS.map((q) => q.id);

export const QUESTION_BY_ID: ReadonlyMap<number, Question> = new Map(
  QUESTIONS.map((q) => [q.id, q]),
);

export const PROMPT_SCALE =
  "Trong khoảng 2–4 tuần gần đây, điều này đúng với mình ở mức nào?";

export const SCALE_OPTIONS = [
  { value: 1, label: "Hoàn toàn không đúng" },
  { value: 2, label: "Ít khi đúng" },
  { value: 3, label: "Đôi khi đúng" },
  { value: 4, label: "Thường đúng" },
  { value: 5, label: "Rất đúng với mình" },
] as const;

export type ScaleValue = 1 | 2 | 3 | 4 | 5;
