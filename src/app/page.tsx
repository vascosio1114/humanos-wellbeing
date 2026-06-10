"use client";

import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  Brain,
  BriefcaseBusiness,
  CalendarDays,
  FileText,
  HeartPulse,
  LockKeyhole,
  School,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import { RechartsRadarPanel, RechartsTrendPanel } from "@/components/humanos/recharts-panels";
import { useI18n } from "@/lib/i18n";

const loop = [
  ["Monitor", "監測", "Daily signals from stress, sleep, focus, mood, workload, activity, and support needs.", "收集壓力、睡眠、專注、情緒、工作量、活動量及支援需要等日常訊號。", HeartPulse],
  ["Predict", "預測", "Find trend combinations before they become absence, burnout, disengagement, or crisis escalation.", "喺缺勤、倦怠、低參與或危機升級之前，偵測趨勢組合。", BellRing],
  ["Plan", "規劃", "Generate personal AI micro-plans and anonymous institutional action recommendations.", "產生個人 AI micro-plan，以及匿名機構行動建議。", Brain],
  ["Intervene", "介入", "Route people toward workshops, campaigns, support channels, or professional partners.", "將用戶連接到工作坊、支援活動、支援渠道或專業夥伴。", UsersRound],
  ["Evaluate", "評估", "Measure participation, completion, trend movement, renewal intent, and campaign impact.", "量度參與率、完成率、趨勢變化、續約意向及活動成效。", FileText],
] as const;

const cards = [
  {
    href: "/b2b",
    icon: BriefcaseBusiness,
    en: "B2B Platform",
    zh: "B2B 平台",
    bodyEn: "For schools, enterprises, hotels, resorts, and public institutions that need privacy-safe wellbeing intelligence.",
    bodyZh: "面向學校、企業、酒店、綜合度假村及公共機構，提供私隱安全嘅福祉智能。",
  },
  {
    href: "/agent",
    icon: Sparkles,
    en: "AI Personal Agent",
    zh: "AI 個人智能體",
    bodyEn: "A Duolingo-style daily companion with check-ins, quests, streaks, XP, and private AI support.",
    bodyZh: "像 Duolingo 一樣嘅每日 companion：check-in、任務、streak、XP 同私密 AI 支援。",
  },
  {
    href: "/ai-dashboard",
    icon: Brain,
    en: "AI Dashboard",
    zh: "AI Dashboard",
    bodyEn: "An anonymous management dashboard that turns group trends into reports, priorities, and next actions.",
    bodyZh: "匿名管理 dashboard，將群組趨勢轉成報告、優先次序同下一步行動。",
  },
  {
    href: "/b2c",
    icon: LockKeyhole,
    en: "B2C Extension",
    zh: "B2C 延伸層",
    bodyEn: "A private personal wellbeing layer that supports users while strengthening B2B engagement.",
    bodyZh: "私密個人福祉層，幫用戶每日得到支援，同時提升 B2B engagement。",
  },
] as const;

const markets = [
  ["Schools and universities", "學校與大學", "Student stress, sleep, focus, motivation, attendance, and early support.", "學生壓力、睡眠、專注、動力、出席及早期支援。"],
  ["Hotels and resorts", "酒店與綜合度假村", "Shift-work recovery, service pressure, team energy, and campaign impact.", "輪班恢復、服務壓力、團隊能量及活動成效。"],
  ["Enterprises and HR", "企業與 HR", "Burnout awareness, anonymous department trends, and resource allocation.", "倦怠覺察、匿名部門趨勢及資源配置。"],
  ["Public and social sector", "公共與社福機構", "Privacy-first wellbeing support aligned with health and innovation priorities.", "符合私隱優先、大健康及創新方向嘅福祉支援。"],
] as const;

export default function HomePage() {
  const { locale } = useI18n();
  const isZh = locale === "zh";

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="bg-white">
        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-4 py-2 text-sm font-semibold text-[#007aff] shadow-sm ring-1 ring-black/5">
              <Sparkles className="size-4" aria-hidden="true" />
              {isZh ? "B2B-first AI 福祉智能平台" : "B2B-first AI wellbeing intelligence platform"}
            </p>
            <h1 className="mt-7 text-[clamp(3.4rem,8.4vw,7.6rem)] font-semibold leading-[0.94] tracking-normal text-[#1d1d1f]">
              HumanOS
              <span className="block text-[#6e6e73]">{isZh ? "唔只係一個 app。" : "is not just an app."}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-medium leading-8 text-[#6e6e73] sm:text-2xl sm:leading-9">
              {isZh
                ? "CRM 管客戶，ERP 管營運，HumanOS 管人嘅 wellbeing。"
                : "CRM manages customers. ERP manages operations. HumanOS manages wellbeing."}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#6e6e73]">
              {isZh
                ? "HumanOS 將睡眠、壓力、專注、工作量、情緒、出席及活動參與轉化成早期支援智能：個人得到私密 AI 計劃，機構只看到匿名聚合趨勢。"
                : "HumanOS turns sleep, stress, focus, workload, mood, attendance, and engagement signals into early-support intelligence: individuals receive private AI plans, while institutions see only anonymous aggregated trends."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/b2b" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0066d6]">
                {isZh ? "查看 B2B 方案" : "Explore B2B model"}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5f5f7] px-6 py-3.5 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md">
                {isZh ? "試 demo" : "Try demo"}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#1d1d1f] p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <div className="rounded-[1.5rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
              <p className="text-sm font-semibold text-white/58">{isZh ? "HumanOS Score" : "HumanOS Score"}</p>
              <div className="mt-4 flex items-end justify-between gap-4">
                <p className="text-7xl font-semibold">78</p>
                <div className="rounded-full bg-[#34c759]/18 px-4 py-2 text-sm font-semibold text-[#34c759]">
                  {isZh ? "可行動" : "Actionable"}
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {(isZh
                ? [["睡眠恢復", "64"], ["壓力趨勢", "中高"], ["專注分數", "72"], ["AI micro-plan", "3 個"]]
                : [["Sleep recovery", "64"], ["Stress trend", "Medium-high"], ["Focus score", "72"], ["AI micro-plan", "3 actions"]]
              ).map(([label, value]) => (
                <div key={label} className="rounded-[1.25rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
                  <p className="text-sm font-semibold text-white/58">{label}</p>
                  <p className="mt-3 text-3xl font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-[#007aff]">{isZh ? "核心系統" : "Core system"}</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.8rem)] font-semibold leading-[0.98]">
              {isZh ? "監測 → 預測 → 規劃 → 介入 → 評估" : "Monitor → Predict → Plan → Intervene → Evaluate"}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {loop.map(([title, titleZh, body, bodyZh, Icon]) => (
              <div key={title} className="rounded-[1.6rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#eaf5ff] text-[#007aff]">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-none">{isZh ? titleZh : title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6e6e73]">{isZh ? bodyZh : body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#ff375f]">{isZh ? "產品層" : "Product layers"}</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98]">
              {isZh ? "B2B 是商業主線，B2C 是信任同 engagement 層。" : "B2B is the commercial core. B2C is the trust and engagement layer."}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {cards.map(({ href, icon: Icon, en, zh, bodyEn, bodyZh }) => (
              <Link key={href} href={href} className="group rounded-[1.8rem] bg-[#f5f5f7] p-7 ring-1 ring-black/5 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_70px_rgba(0,0,0,0.10)]">
                <div className="grid size-14 place-items-center rounded-3xl bg-white text-[#007aff] shadow-sm ring-1 ring-black/5">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-none">{isZh ? zh : en}</h3>
                <p className="mt-5 min-h-28 text-base leading-7 text-[#6e6e73]">{isZh ? bodyZh : bodyEn}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#007aff]">
                  {isZh ? "了解更多" : "Learn more"}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#5ac8fa]">{isZh ? "試點市場" : "Pilot markets"}</p>
            <h2 className="mt-4 text-[clamp(2.6rem,6vw,5.8rem)] font-semibold leading-none">
              {isZh ? "由澳門開始，再擴展大灣區。" : "Macao-first, then Greater Bay Area expansion."}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/68">
              {isZh
                ? "HumanOS 對齊澳門 1+4、大健康、高新技術及區域創新方向，先由高信任 B2B pilot 建立 case，再向教育、企業及公共機構複製。"
                : "HumanOS aligns with Macao's 1+4 diversification, big health, high-tech, and regional innovation priorities. The go-to-market starts with high-trust B2B pilots, then replicates across education, enterprise, and public-sector partners."}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {markets.map(([en, zh, bodyEn, bodyZh]) => (
              <div key={en} className="rounded-[1.4rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
                <School className="size-6 text-[#5ac8fa]" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-semibold">{isZh ? zh : en}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{isZh ? bodyZh : bodyEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#248a3d]">{isZh ? "證明可行" : "Proof of intelligence"}</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
              {isZh ? "由趨勢到早期支援，而唔係等問題爆發。" : "From trends to early support, before problems escalate."}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6e6e73]">
              {isZh
                ? "當睡眠恢復下降、工作量上升、專注下降，HumanOS 可以產生個人支援計劃，同時為機構提供匿名行動建議。"
                : "When sleep recovery drops, workload rises, and focus declines, HumanOS can generate a personal support plan while giving institutions anonymous action recommendations."}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.75rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
              <RechartsTrendPanel title={isZh ? "每週趨勢" : "Weekly trend"} />
            </div>
            <div className="rounded-[1.75rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
              <RechartsRadarPanel />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-5 text-center lg:px-8">
          <CalendarDays className="size-9 text-[#007aff]" aria-hidden="true" />
          <h2 className="mt-5 text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-none">
            {isZh ? "3 個月 pilot：MOP 38,000-88,000 起。" : "3-month pilots start from MOP 38,000-88,000."}
          </h2>
          <Link href="/pilot" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0066d6]">
            {isZh ? "查看 pilot 計劃" : "View pilot plan"}
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
