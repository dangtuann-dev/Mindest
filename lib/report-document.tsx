import { AXIS_BY_KEY } from "@/data/axes";
import type { Archetype } from "@/data/archetypes";
import { clarityLabel, careLabel } from "@/lib/scoring";
import { formatDateVi, type StoredResult } from "@/lib/session";
import { Document, Font, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

Font.register({
  family: "Be Vietnam Pro",
  fonts: [
    { src: "/fonts/BeVietnamPro-Regular.ttf", fontWeight: "normal" },
    { src: "/fonts/BeVietnamPro-Bold.ttf", fontWeight: "bold" },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

const ink = "#2A2520";
const soft = "#5B5249";
const faint = "#8A7E71";
const cream = "#FAF4E9";
const paper = "#FFFDF8";

const styles = StyleSheet.create({
  page: {
    backgroundColor: cream,
    color: ink,
    fontFamily: "Be Vietnam Pro",
    fontSize: 9,
    lineHeight: 1.55,
    paddingTop: 46,
    paddingBottom: 62,
    paddingHorizontal: 42,
  },
  topbar: {
    position: "absolute",
    top: 20,
    left: 42,
    right: 42,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topbarBrand: { fontSize: 8, fontWeight: "bold", letterSpacing: 1.4, color: soft },
  topbarMeta: { fontSize: 7, color: faint },
  footer: {
    position: "absolute",
    top: 774,
    left: 42,
    right: 42,
    borderTopWidth: 0.6,
    borderTopColor: "#DED3C2",
    paddingTop: 7,
  },
  footerText: { fontSize: 6.4, lineHeight: 1.5, color: faint },
  footerRow: {
    marginTop: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 6.4,
    color: faint,
  },
  title: { fontSize: 22, fontWeight: "bold", letterSpacing: -0.6, color: ink },
  subtitle: { marginTop: 3, fontSize: 8.5, color: faint },
  hero: {
    marginTop: 14,
    borderRadius: 18,
    backgroundColor: paper,
    borderWidth: 0.8,
    borderColor: "#E7DBC8",
    padding: 16,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  avatarWrap: {
    width: 108,
    height: 108,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#EFE3D1",
  },
  avatar: { width: 108, height: 108 },
  heroBody: { flex: 1 },
  codeChip: {
    alignSelf: "flex-start",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2.5,
    fontSize: 7,
    fontWeight: "bold",
    letterSpacing: 1.6,
    color: paper,
  },
  name: { marginTop: 7, fontSize: 20, fontWeight: "bold", letterSpacing: -0.4 },
  slogan: { marginTop: 4, fontSize: 9, color: soft },
  heroMeta: { marginTop: 8, fontSize: 7.4, color: faint },
  section: { marginTop: 16 },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: -0.2,
    marginBottom: 7,
  },
  paragraph: { fontSize: 9, lineHeight: 1.62, color: soft, textAlign: "justify" },
  callout: {
    marginTop: 8,
    borderRadius: 12,
    backgroundColor: paper,
    borderLeftWidth: 3,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  calloutLabel: {
    fontSize: 7,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: faint,
    marginBottom: 2,
  },
  calloutText: { fontSize: 8.4, lineHeight: 1.55, color: soft },
  axesGrid: { gap: 6 },
  axisCard: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: "#E7DBC8",
    backgroundColor: paper,
    padding: 9,
  },
  axisTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  axisEnd: { fontSize: 7.2, color: soft },
  axisLetter: { fontSize: 9, fontWeight: "bold" },
  axisTrack: {
    marginTop: 6,
    height: 4,
    borderRadius: 999,
    backgroundColor: "#E9DFD0",
    overflow: "hidden",
  },
  axisFill: { height: 4, borderRadius: 999 },
  axisBottom: {
    marginTop: 4,
    fontSize: 6.4,
    color: faint,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  twoCols: { flexDirection: "row", gap: 10 },
  col: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: paper,
    borderWidth: 0.7,
    borderColor: "#E7DBC8",
    padding: 11,
  },
  colTitle: { fontSize: 9, fontWeight: "bold", marginBottom: 6 },
  bulletRow: { flexDirection: "row", gap: 5, marginBottom: 4 },
  bulletDot: { marginTop: 4, width: 3, height: 3, borderRadius: 2 },
  bulletText: { flex: 1, fontSize: 8, lineHeight: 1.5, color: soft },
  tip: {
    marginBottom: 6,
    borderRadius: 10,
    backgroundColor: paper,
    borderWidth: 0.7,
    borderColor: "#E7DBC8",
    padding: 9,
  },
  tipTitle: { fontSize: 8.8, fontWeight: "bold", marginBottom: 3 },
  tipBody: { fontSize: 8, lineHeight: 1.5, color: soft },
  habitCard: {
    borderRadius: 12,
    backgroundColor: paper,
    borderWidth: 0.7,
    borderColor: "#E7DBC8",
    padding: 11,
  },
  habitText: { fontSize: 8.4, lineHeight: 1.5, color: soft },
  support: {
    marginTop: 14,
    borderRadius: 14,
    padding: 12,
    backgroundColor: paper,
    borderWidth: 0.8,
    borderColor: "#E7DBC8",
  },
  supportTitle: { fontSize: 10.5, fontWeight: "bold", marginBottom: 5 },
  supportText: { fontSize: 8.4, lineHeight: 1.55, color: soft },
  hotline: {
    marginTop: 8,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  hotlineText: { fontSize: 8.2, fontWeight: "bold", color: paper },
  hotlineNote: { fontSize: 7.4, color: soft, flex: 1 },
  spacer: { height: 4 },
});

function AxisRow({ axis, color }: { axis: StoredResult["axes"][number]; color: string }) {
  const meta = AXIS_BY_KEY[axis.key];
  const total = axis.m1 + axis.m2;
  const position = total > 0 ? Math.min(94, Math.max(6, (axis.m1 / total) * 100)) : 50;
  const leftActive = axis.pole === meta.pole1;

  return (
    <View style={styles.axisCard}>
      <View style={styles.axisTop}>
        <Text style={[styles.axisEnd, !leftActive ? { color: faint } : undefined]}>
          <Text style={[styles.axisLetter, { color: leftActive ? color : faint }]}>
            {meta.letter1}{" "}
          </Text>
          {meta.label1}
        </Text>
        <Text style={[styles.axisEnd, leftActive ? { color: faint } : undefined]}>
          {meta.label2}
          <Text style={[styles.axisLetter, { color: leftActive ? faint : color }]}>
            {" "}
            {meta.letter2}
          </Text>
        </Text>
      </View>
      <View style={styles.axisTrack}>
        <View
          style={[styles.axisFill, { width: `${position}%`, backgroundColor: color }]}
        />
      </View>
      <View style={styles.axisBottom}>
        <Text>Mức {clarityLabel(axis.clarity).toLowerCase()}</Text>
        <Text>{axis.missing > 0 ? `${axis.missing} câu bỏ trống` : ""}</Text>
      </View>
    </View>
  );
}

export function ReportDocument({
  result,
  archetype,
  avatarDataUrl,
}: {
  result: StoredResult;
  archetype: Archetype;
  avatarDataUrl: string;
}) {
  const date = formatDateVi(result.savedAt);
  const color = archetype.color;
  const careText =
    result.careLevel === "cao"
      ? "Đây là lúc nên có thêm một người ở bên. Bạn không cần chờ mọi thứ sụp đổ mới được giúp."
      : result.careLevel === "vua"
        ? "Bạn đang cần chậm lại một chút, nói ra nhiều hơn và để ai đó hỗ trợ những việc nhỏ."
        : "Bạn đang có những nguồn lực để tự điều chỉnh. Vẫn nên giữ những khoảng nghỉ nhỏ mỗi ngày.";

  return (
    <Document
      title={`Báo cáo Mindest của bạn – ${archetype.name}`}
      author="Mindest"
      subject="Báo cáo nhận diện phong cách ứng phó"
      creator="Mindest"
      language="vi-VN"
    >
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            Mindest là công cụ nhận diện phong cách ứng phó và sàng lọc sơ bộ, không thay
            thế ý kiến của người có chuyên môn. Kết quả có thể thay đổi theo thời gian.
            Nếu bạn đang thấy không an toàn, hãy gọi 111.
          </Text>
          <View style={styles.footerRow}>
            <Text>Mindest · tổ ấm cho tâm trí</Text>
            <Text
              render={({ pageNumber, totalPages }) =>
                `Trang ${pageNumber} / ${totalPages}`
              }
            />
          </View>
        </View>

        <View style={styles.topbar} fixed>
          <Text style={styles.topbarBrand}>MINDEST</Text>
          <Text style={styles.topbarMeta}>{date}</Text>
        </View>

        <Text style={styles.title}>Báo cáo Mindest của bạn</Text>
        <Text style={styles.subtitle}>Ngày làm bài: {date} · Bản đầy đủ 100 câu</Text>

        <View style={styles.hero}>
          <View style={styles.avatarWrap}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src={avatarDataUrl} style={styles.avatar} />
          </View>
          <View style={styles.heroBody}>
            <Text style={[styles.codeChip, { backgroundColor: color }]}>
              {archetype.code}
            </Text>
            <Text style={styles.name}>{archetype.name}</Text>
            <Text style={styles.slogan}>“{archetype.slogan}”</Text>
            <Text style={styles.heroMeta}>
              Mức cần chăm sóc: {careLabel(result.careLevel)} · {archetype.code} ·
              Mindest
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bốn trục ứng phó của bạn</Text>
          <View style={styles.axesGrid}>
            {result.axes.map((axis) => (
              <AxisRow key={axis.key} axis={axis} color={color} />
            ))}
          </View>
          <Text style={[styles.paragraph, { marginTop: 6, fontSize: 7.4, color: faint }]}>
            Đây là xu hướng ứng phó trong khoảng 2–4 tuần gần đây, không phải một nhãn cố
            định về bạn.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bạn là ai trong những ngày có áp lực</Text>
          <Text style={styles.paragraph}>{archetype.summary}</Text>
          <View style={[styles.callout, { borderLeftColor: color }]}>
            <Text style={styles.calloutLabel}>Khi mọi thứ quá tải, bạn thường</Text>
            <Text style={styles.calloutText}>{archetype.stressStyle}</Text>
          </View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Điều đáng giữ và điều cần chú ý</Text>
          <View style={styles.twoCols}>
            <View style={styles.col}>
              <Text style={[styles.colTitle, { color }]}>Điểm mạnh của bạn</Text>
              {archetype.strengths.map((item) => (
                <View key={item} style={styles.bulletRow}>
                  <View style={[styles.bulletDot, { backgroundColor: color }]} />
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              ))}
            </View>
            <View style={styles.col}>
              <Text style={styles.colTitle}>Điều cần chú ý</Text>
              {archetype.watchouts.map((item) => (
                <View key={item} style={styles.bulletRow}>
                  <View style={[styles.bulletDot, { backgroundColor: "#B9A990" }]} />
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section} minPresenceAhead={150}>
          <Text style={styles.sectionTitle}>5 lời khuyên sơ cứu cảm xúc</Text>
          {archetype.firstAid.map((tip, index) => (
            <View key={tip.title} style={styles.tip} wrap={false}>
              <Text style={[styles.tipTitle, { color }]}>
                {index + 1}. {tip.title} · {tip.minutes} phút
              </Text>
              <Text style={styles.tipBody}>{tip.body}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Thói quen nhỏ cho 7 ngày tới</Text>
          <View style={styles.habitCard}>
            <Text style={styles.habitText}>
              {archetype.weeklyHabits.map((habit) => `• ${habit}`).join("\n")}
            </Text>
          </View>
        </View>

        <View style={styles.support} wrap={false}>
          <Text style={styles.supportTitle}>Khi nào nên tìm người đồng hành</Text>
          <Text style={styles.supportText}>
            {result.careLevel === "cao" ? `${careText} ` : ""}
            Nếu bạn thấy không an toàn, đang bị bạo lực, bắt nạt hoặc xâm hại, hoặc những
            ngày nặng kéo dài khiến việc ăn, ngủ, học tập bị ảnh hưởng — hãy nói với một
            người lớn đáng tin: bố mẹ, thầy cô, người thân, hoặc một người bạn lớn tuổi.
          </Text>
          <View style={[styles.hotline, { backgroundColor: color }]}>
            <Text style={styles.hotlineText}>Gọi 111</Text>
            <Text style={styles.hotlineNote}>
              Tổng đài quốc gia bảo vệ trẻ em · hoạt động 24/7
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
