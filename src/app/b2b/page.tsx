"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  BriefcaseBusiness,
  Building2,
  LineChart,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import { useI18n } from "@/lib/i18n";

const b2bProblems = [
  ["Stress and burnout usually become visible only after absence, turnover, or performance issues.", "壓力和 burnout 通常到缺勤、離職或表現問題出現後先被看見。"],
  ["Quarterly surveys are too slow for shift-based teams and high-pressure departments.", "季度問卷對輪班團隊和高壓部門太慢，追不到變化。"],
  ["HR teams need anonymous patterns, not private employee conversations.", "HR 需要匿名趨勢，不是員工的私人對話內容。"],
  ["Wellbeing budgets need clearer evidence of which campaigns actually help.", "Wellbeing 預算需要更清楚證據，知道哪些活動真正有幫助。"],
];

const b2bModules = [
  {
    icon: BarChart3,
    title: "Anonymous Workforce Dashboard",
    titleZh: "匿名員工 Dashboard",
    body: "See stress, sleep, focus, energy, and participation trends by department, shift, or cohort while protecting individual privacy.",
    bodyZh: "按部門、輪班或群組查看壓力、睡眠、專注、能量和參與率，同時保護個人私隱。",
  },
  {
    icon: BellRing,
    title: "Early Support Signals",
    titleZh: "早期支援訊號",
    body: "Spot group-level declines before they become incidents, and route teams toward practical recovery actions.",
    bodyZh: "在問題變成事故前，看見群組層面的下跌，並引導團隊做實際恢復行動。",
  },
  {
    icon: LineChart,
    title: "Campaign Impact Reports",
    titleZh: "活動成效報告",
    body: "Measure whether wellbeing campaigns improve participation, recovery, stress trends, and engagement.",
    bodyZh: "量度 wellbeing 活動是否改善參與率、恢復、壓力趨勢和投入度。",
  },
];

const b2bSteps = [
  ["Month 1", "第 1 個月", "Set up teams, privacy thresholds, and baseline check-ins.", "設定團隊、私隱門檻和 baseline check-in。"],
  ["Month 2", "第 2 個月", "Run targeted support campaigns for stress, sleep, recovery, and focus.", "針對壓力、睡眠、恢復和專注推出支援活動。"],
  ["Month 3", "第 3 個月", "Deliver an intelligence report with trends, impact, and rollout recommendations.", "交付包含趨勢、成效和 rollout 建議的 intelligence report。"],
];

export default function B2BPage() {
  const { locale } = useI18n();
  const isZh = locale === "zh";

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#eefcf3] px-4 py-2 text-sm font-semibold text-[#248a3d] ring-1 ring-black/5">
              <BriefcaseBusiness className="size-4" aria-hidden="true" />
              HumanOS B2B
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
              {isZh ? "給機構使用的 wellbeing intelligence。" : "Wellbeing intelligence for organizations."}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e6e73]">
              {isZh
                ? "B2B HumanOS 為學校、HR 團隊、酒店、度假村和大型服務機構而設，提供匿名員工洞察、早期支援訊號和可量度的 wellbeing program。"
                : "B2B HumanOS is built for schools, HR teams, hotels, resorts, and large service organizations that need anonymous workforce insight, early support signals, and measurable wellbeing programs."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0066d6] focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:ring-offset-2"
              >
                {isZh ? "開始 B2B pilot" : "Start B2B pilot"}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="/organizations"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5f5f7] px-6 py-3.5 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:ring-offset-2"
              >
                {isZh ? "查看機構 demo" : "View organization demo"}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#1d1d1f] p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <div className="rounded-[1.5rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white/58">{isZh ? "企業訊號層" : "Enterprise signal layer"}</p>
                  <p className="mt-3 text-4xl font-semibold leading-tight">
                    {isZh ? "私人資料進來，匿名洞察出去。" : "Private data in. Anonymous intelligence out."}
                  </p>
                </div>
                <Building2 className="size-12 text-[#5ac8fa]" aria-hidden="true" />
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["Departments", "部門", "compare trends safely", "安全比較趨勢"],
                ["Shift teams", "輪班團隊", "track recovery pressure", "追蹤恢復壓力"],
                ["Campaigns", "活動", "measure real movement", "量度真實變化"],
                ["Leaders", "管理者", "act before escalation", "在升級前行動"],
              ].map(([title, titleZh, body, bodyZh]) => (
                <div key={title} className="rounded-[1.25rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
                  <p className="text-xl font-semibold">{isZh ? titleZh : title}</p>
                  <p className="mt-3 text-sm font-semibold text-white/58">{isZh ? bodyZh : body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#248a3d]">{isZh ? "為何需要 B2B" : "Why B2B"}</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
              {isZh ? "機構不需要另一張 wellness 海報。" : "Organizations do not need another wellness poster."}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6e6e73]">
              {isZh
                ? "它們需要一個管理層，將 wellbeing 訊號變成時機、優先次序和可量度行動。"
                : "They need a management layer that turns wellbeing signals into timing, prioritization, and measurable action."}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {b2bProblems.map(([problem, problemZh]) => (
              <div key={problem} className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
                <ShieldCheck className="size-6 text-[#34c759]" aria-hidden="true" />
                <p className="mt-8 text-base font-semibold leading-7">{isZh ? problemZh : problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#007aff]">{isZh ? "B2B 產品訊息" : "What the B2B product says"}</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98]">
              {isZh ? "HumanOS 幫管理者更早支援人。" : "HumanOS helps leaders support people earlier."}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {b2bModules.map(({ icon: Icon, title, titleZh, body, bodyZh }) => (
              <div key={title} className="rounded-[1.8rem] bg-[#f5f5f7] p-7 ring-1 ring-black/5">
                <div className="grid size-14 place-items-center rounded-3xl bg-white text-[#007aff] shadow-sm ring-1 ring-black/5">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-3xl font-semibold leading-none">{isZh ? titleZh : title}</h3>
                <p className="mt-5 text-base leading-7 text-[#6e6e73]">{isZh ? bodyZh : body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-[#5ac8fa]">{isZh ? "Pilot 結構" : "Pilot structure"}</p>
              <h2 className="mt-4 text-[clamp(2.6rem,6vw,5.8rem)] font-semibold leading-none">
                {isZh ? "三個月，由 baseline 到 rollout plan。" : "Three months from baseline to rollout plan."}
              </h2>
            </div>
            <div className="space-y-3">
              {b2bSteps.map(([period, periodZh, body, bodyZh]) => (
                <div key={period} className="rounded-[1.5rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
                  <p className="text-xl font-semibold">{isZh ? periodZh : period}</p>
                  <p className="mt-3 text-sm leading-7 text-white/62">{isZh ? bodyZh : body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <UsersRound className="mx-auto size-9 text-[#007aff]" aria-hidden="true" />
          <h2 className="mt-5 text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-none">
            {isZh ? "B2B 訊息：保護私隱、改善決策、證明成效。" : "B2B message: protect privacy, improve decisions, prove impact."}
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
