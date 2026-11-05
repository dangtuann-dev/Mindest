import { Avatar } from "./avatar";
import { Heart, Lock } from "./icons";

function PortraitCard({
  code,
  name,
  className,
  avatarClassName,
}: {
  code: "ESDV" | "IFRV" | "EFRA";
  name: string;
  className?: string;
  avatarClassName?: string;
}) {
  return (
    <div
      className={`absolute rounded-[1.9rem] border border-white/70 bg-white/85 p-2.5 shadow-lift backdrop-blur-md dark:border-white/10 dark:bg-night-800/85 ${className ?? ""}`}
    >
      <Avatar
        code={code}
        className={`aspect-square rounded-[1.4rem] ${avatarClassName ?? ""}`}
      />
      <div className="px-1 pb-0.5 pt-2.5">
        <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-ink-faint dark:text-cream-200/50">
          {code}
        </p>
        <p className="mt-0.5 line-clamp-2 text-[0.78rem] font-semibold leading-tight">
          {name}
        </p>
      </div>
    </div>
  );
}

export function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <div
        className="absolute inset-x-[7%] top-[4%] aspect-square animate-breathe rounded-[48%_52%_56%_44%/50%_44%_56%_50%] bg-gradient-to-br from-moss-200/80 via-honey-100/70 to-clay-200/60 blur-[1px] dark:from-moss-700/35 dark:via-honey-700/10 dark:to-clay-700/20"
        aria-hidden="true"
      />
      <div className="relative mx-auto aspect-[1/1.03] w-full">
        <svg
          viewBox="0 0 500 515"
          className="absolute inset-0 h-full w-full text-moss-700/20 dark:text-moss-200/15"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="250" cy="258" r="205" stroke="currentColor" strokeDasharray="2 12" strokeWidth="1.4" />
          <circle cx="250" cy="258" r="166" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
          <path d="M62 330c28 58 82 92 150 96" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>

        <PortraitCard
          code="ESDV"
          name="Nhà Thám Hiểm Lạc Hướng"
          className="left-[1%] top-[31%] w-[37%] -rotate-[9deg] animate-float animation-delay-300"
        />
        <PortraitCard
          code="EFRA"
          name="Ngọn Núi Lửa Mệt Mỏi"
          className="right-[0%] top-[34%] w-[35%] rotate-[8deg] animate-float animation-delay-150"
        />
        <PortraitCard
          code="IFRV"
          name="Người Giữ Lửa Âm Thầm"
          className="left-1/2 top-[18%] z-20 w-[44%] -translate-x-1/2 rotate-[2deg]"
          avatarClassName="shadow-sm"
        />

        <div className="absolute right-[3%] top-[8%] z-30 flex rotate-[3deg] items-center gap-2 rounded-2xl border border-white/80 bg-cream-50/95 px-3 py-2 text-[0.68rem] font-semibold text-ink-soft shadow-soft backdrop-blur dark:border-white/10 dark:bg-night-800/95 dark:text-cream-200/80">
          <Lock size={14} className="text-moss-600 dark:text-moss-300" />
          Không lưu câu trả lời
        </div>

        <div className="absolute bottom-[7%] left-[3%] z-30 flex max-w-[62%] rotate-[-2deg] items-start gap-2.5 rounded-2xl border border-white/80 bg-cream-50/95 px-3.5 py-3 shadow-soft backdrop-blur dark:border-white/10 dark:bg-night-800/95">
          <span className="mt-0.5 text-clay-500">
            <Heart size={16} />
          </span>
          <p className="text-[0.78rem] font-medium leading-snug text-ink-soft dark:text-cream-200/80">
            “Mình không cần phải ổn ngay hôm nay.”
          </p>
        </div>

        <div className="absolute bottom-[3%] right-[4%] z-30 flex rotate-[4deg] items-center gap-1.5 rounded-full border border-white/80 bg-honey-100/90 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-honey-700 shadow-soft dark:border-white/10 dark:bg-honey-700/30 dark:text-honey-200">
          16 chân dung
        </div>
      </div>
    </div>
  );
}
