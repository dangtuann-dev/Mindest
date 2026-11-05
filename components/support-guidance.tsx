import { supportPartner } from "@/config/partners";
import { cn } from "@/lib/cn";
import type { CareLevel } from "@/lib/scoring";
import { Chat, Phone } from "./icons";

export function SupportGuidance({
  careLevel,
  wantsToTalk,
}: {
  careLevel: CareLevel;
  wantsToTalk: boolean;
}) {
  return (
    <section
      id="nguoi-dong-hanh"
      className={cn(
        "rounded-4xl border p-6 sm:p-8",
        careLevel === "cao"
          ? "border-clay-200/80 bg-gradient-to-br from-clay-50/90 to-cream-50/70 dark:border-clay-700/30 dark:from-night-800 dark:to-night-800"
          : "border-ink/[0.07] bg-white/55 dark:border-white/[0.08] dark:bg-white/[0.03]",
      )}
    >
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-clay-100 text-clay-700 dark:bg-clay-700/20 dark:text-clay-300">
          <Chat size={20} />
        </span>
        <div className="min-w-0">
          <h2 className="text-[1.25rem]">Khi nào nên tìm người đồng hành</h2>
          {careLevel === "cao" ? (
            <p className="mt-2 rounded-xl bg-white/60 px-3.5 py-2.5 text-[0.82rem] font-medium leading-relaxed text-clay-800 dark:bg-white/5 dark:text-clay-200">
              Kết quả của bạn cho thấy đây là lúc nên có thêm một người ở bên. Bạn không
              cần chờ đến khi mọi thứ sụp đổ mới được giúp.
            </p>
          ) : null}
          <p className="mt-3 text-[0.85rem] leading-relaxed text-ink-soft dark:text-cream-200/65">
            Nếu bạn thấy không an toàn, đang bị bạo lực, bắt nạt hoặc xâm hại, hoặc những
            ngày nặng kéo dài khiến việc ăn, ngủ, học tập bị ảnh hưởng — hãy nói với một
            người lớn đáng tin: bố mẹ, thầy cô, người thân, hoặc một người bạn lớn tuổi.
          </p>

          {wantsToTalk ? (
            <div className="mt-4 rounded-2xl border border-rose-200/70 bg-rose-50/70 p-4 dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-[0.9rem] font-semibold">
                Bạn muốn nói chuyện với một người thật?
              </p>
              <p className="mt-1.5 text-[0.8rem] leading-relaxed text-ink-soft dark:text-cream-200/60">
                Bạn không cần tìm đúng lời. Có thể bắt đầu bằng một trong những câu này:
              </p>
              <ul className="mt-2.5 space-y-1.5 text-[0.8rem] leading-relaxed text-ink-soft dark:text-cream-200/65">
                <li>“Con đang không ổn và con muốn nói chuyện. Bố mẹ ngồi với con một lúc được không?”</li>
                <li>“Thầy/cô ơi, em đang cần giúp một chuyện khó nói.”</li>
                <li>“Mình đang cần một người nghe, bạn có thể ở cạnh mình một chút không?”</li>
              </ul>
              {supportPartner ? (
                <div className="mt-3 rounded-xl bg-white/70 p-3 text-[0.78rem] dark:bg-white/5">
                  <p className="font-semibold">{supportPartner.name}</p>
                  <p className="mt-1 text-ink-soft dark:text-cream-200/60">
                    {supportPartner.description}
                  </p>
                  <a
                    className="mt-1 inline-block font-semibold text-moss-700 underline underline-offset-2 dark:text-moss-300"
                    href={supportPartner.href}
                  >
                    {supportPartner.phone ?? "Mở liên kết"}
                  </a>
                </div>
              ) : null}
            </div>
          ) : null}

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="tel:111"
              className="inline-flex min-h-[3rem] items-center gap-2 rounded-full bg-clay-600 px-5 text-[0.9rem] font-semibold text-cream-50 transition hover:-translate-y-0.5 hover:bg-clay-700 dark:bg-clay-500 dark:hover:bg-clay-400"
            >
              <Phone size={17} />
              Gọi 111
            </a>
            <span className="text-[0.72rem] leading-relaxed text-ink-faint dark:text-cream-200/45">
              Tổng đài quốc gia bảo vệ trẻ em · hoạt động 24/7
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Disclaimer({ className }: { className?: string }) {
  return (
    <p className={cn("text-[0.7rem] leading-relaxed text-ink-faint dark:text-cream-200/40", className)}>
      Mindest là công cụ nhận diện phong cách ứng phó và sàng lọc sơ bộ, không đưa ra kết
      luận về sức khỏe tinh thần và không thay thế ý kiến của người có chuyên môn. Kết quả
      có thể thay đổi theo thời gian. Nếu bạn đang thấy không an toàn, hãy gọi 111.
    </p>
  );
}
