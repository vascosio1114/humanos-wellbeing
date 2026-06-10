"use client";

import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  Brain,
  HeartPulse,
  LockKeyhole,
  Moon,
  ScanHeart,
  Sparkles,
  Zap,
} from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import { useI18n } from "@/lib/i18n";

const moments = [
  ["Understand stress", "理解壓力", "Turn vague pressure into clear signals and small next steps.", "將模糊壓力轉成清晰訊號同細小下一步。", HeartPulse],
  ["Recover sleep", "修復睡眠", "Connect sleep quality with energy, mood, focus, and workload.", "將睡眠質素連接能量、情緒、專注同工作量。", Moon],
  ["Protect focus", "保護專注", "Reduce cognitive load and protect one realistic focus block.", "減少認知負荷，保護一段可做到嘅專注時間。", Brain],
  ["Ask earlier", "更早求助", "Know when to slow down, reset, or talk to someone trusted.", "知道幾時要慢落嚟、reset，或者同可信任嘅人傾。", BellRing],
] as const;

const flow = [
  ["Check in", "Check-in", "A one-minute private check-in about stress, sleep, focus, mood, workload, and energy.", "一分鐘私密 check-in，了解壓力、睡眠、專注、情緒、工作量及能量。"],
  ["Understand", "理解", "HumanOS explains the likely drivers without making medical claims.", "HumanOS 解釋可能影響今日狀態嘅因素，但唔作醫療判斷。"],
  ["Plan", "規劃", "The user receives one to three small actions for recovery, focus, or support seeking.", "用戶得到 1-3 個細小行動，用於恢復、專注或尋求支援。"],
  ["Repeat", "持續", "Daily signals become a personal wellbeing profile over time.", "日常訊號會逐步形成個人 wellbeing profile。"],
] as const;

export default function B2CPage() {
  const { locale } = useI18n();
  const isZh = locale === "zh";

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#eaf5ff] px-4 py-2 text-sm font-semibold text-[#007aff] ring-1 ring-black/5">
              <ScanHeart className="size-4" aria-hidden="true" />
              HumanOS B2C
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
              {isZh ? "個人用嘅私密福祉智能體。" : "A private wellbeing companion for individuals."}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e6e73]">
              {isZh
                ? "B2C 係 HumanOS 嘅延伸層，而唔係唯一商業核心。用戶得到每日 check-in、AI micro-plan、睡眠與壓力提醒；學校或公司只會睇到匿名群組趨勢。"
                : "B2C is the personal companion layer, not the only commercial core. Users get daily check-ins, AI micro-plans, and stress or sleep guidance while institutions only see anonymous group trends."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/agent" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0066d6]">
                {isZh ? "試 AI Agent" : "Try AI agent"}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link href="/students/check-in" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5f5f7] px-6 py-3.5 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md">
                {isZh ? "做 check-in" : "Try check-in"}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#f5f5f7] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.13)] ring-1 ring-black/5">
            <div className="rounded-[1.6rem] bg-white p-5 ring-1 ring-black/5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#6e6e73]">{isZh ? "今日狀態" : "Today"}</p>
                  <p className="mt-2 text-6xl font-semibold">74</p>
                  <p className="mt-3 text-sm font-semibold text-[#248a3d]">{isZh ? "1-3 個小任務已準備好" : "1-3 small actions ready"}</p>
                </div>
                <div className="grid size-28 place-items-center rounded-full bg-[conic-gradient(#34c759_0_38%,#007aff_38%_70%,#ff9f0a_70%_88%,#e5e5ea_88%_100%)] p-2">
                  <div className="grid size-full place-items-center rounded-full bg-white text-xs font-semibold">
                    {isZh ? "私密" : "Private"}
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-[1.35rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                <Sparkles className="size-6 text-[#7d35ff]" aria-hidden="true" />
                <p className="mt-8 text-2xl font-semibold leading-tight">
                  {isZh
                    ? "壓力上升，而睡眠恢復偏低。今日先做一個 reset、一段專注時間，夜晚避免再加額外壓力。"
                    : "Stress is rising while sleep recovery is low. Keep today lighter: one reset, one focus block, and no extra pressure tonight."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#007aff]">{isZh ? "個人層價值" : "Personal value"}</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98]">
              {isZh ? "唔係另一個健康內容 app，而係每日可行嘅支援 loop。" : "Not another health content app. A daily support loop."}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {moments.map(([title, titleZh, body, bodyZh, Icon]) => (
              <div key={title} className="rounded-[1.8rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
                <div className="grid size-14 place-items-center rounded-3xl bg-[#eaf5ff] text-[#007aff]">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-none">{isZh ? titleZh : title}</h3>
                <p className="mt-5 text-base leading-7 text-[#6e6e73]">{isZh ? bodyZh : body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#ff375f]">{isZh ? "體驗流程" : "Experience flow"}</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
              {isZh ? "簡單到可以每日用，清楚到知道下一步。" : "Simple enough for daily use. Clear enough for action."}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6e6e73]">
              {isZh
                ? "Personal agent 係 B2B 系統入面最重要嘅信任入口：用戶覺得有幫助，先會願意持續 check-in。"
                : "The personal agent is the trust gateway inside the B2B system: people keep checking in only when the product actually helps them."}
            </p>
          </div>
          <div className="space-y-3">
            {flow.map(([step, stepZh, body, bodyZh]) => (
              <div key={step} className="rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                <p className="text-xl font-semibold">{isZh ? stepZh : step}</p>
                <p className="mt-3 text-sm leading-7 text-[#6e6e73]">{isZh ? bodyZh : body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <LockKeyhole className="mx-auto size-9 text-[#5ac8fa]" aria-hidden="true" />
          <h2 className="mt-5 text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-none">
            {isZh
              ? "個人內容屬於用戶。機構只收到匿名、聚合、達到樣本門檻嘅趨勢。"
              : "Personal content belongs to the user. Institutions receive only anonymized, aggregated trends that meet sample thresholds."}
          </h2>
          <Zap className="mx-auto mt-10 size-7 text-[#ffcc00]" aria-hidden="true" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
