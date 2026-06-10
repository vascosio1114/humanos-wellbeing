"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  BriefcaseBusiness,
  CalendarDays,
  Hotel,
  LineChart,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import { RechartsTrendPanel } from "@/components/humanos/recharts-panels";
import { useI18n } from "@/lib/i18n";

const useCases = [
  {
    icon: Hotel,
    en: "Hotels and integrated resorts",
    zh: "酒店與綜合度假村",
    bodyEn: "Understand anonymous wellbeing pressure across front desk, hotel operations, F&B, security, and guest-facing teams.",
    bodyZh: "了解前台、酒店營運、餐飲、保安及前線服務團隊嘅匿名 wellbeing 壓力。",
  },
  {
    icon: CalendarDays,
    en: "Shift-based operations",
    zh: "輪班營運",
    bodyEn: "Track how shift patterns affect sleep recovery, energy, focus, stress, and service readiness.",
    bodyZh: "追蹤輪班模式如何影響睡眠恢復、能量、專注、壓力及服務狀態。",
  },
  {
    icon: UsersRound,
    en: "HR and wellbeing teams",
    zh: "HR 與福祉團隊",
    bodyEn: "Turn anonymous signals into campaigns, workshops, manager conversations, and monthly support planning.",
    bodyZh: "將匿名訊號轉化成活動、工作坊、管理者對話及每月支援規劃。",
  },
] as const;

const reasons = [
  ["Reactive support is too late", "事後支援太遲", "Stress, sleep, and burnout signals often appear weeks before absence, turnover, or service issues.", "壓力、睡眠及倦怠訊號通常喺缺勤、流失或服務問題前幾星期已經出現。"],
  ["Surveys are too slow", "問卷太慢", "Quarterly surveys cannot show what is changing inside shift teams this week.", "季度問卷未必反映輪班團隊今個星期嘅變化。"],
  ["Managers lack anonymous visibility", "管理者缺少匿名視野", "Leaders may see turnover and sick leave, but not the wellbeing trends behind them.", "管理者可能見到流失同病假，但未必見到背後嘅 wellbeing 趨勢。"],
  ["Campaign ROI is unclear", "活動 ROI 唔清楚", "Organizations spend on wellness activities but rarely know which actions actually help.", "機構投放 wellbeing 活動，但好多時唔知道邊啲行動真正有效。"],
] as const;

const implementation = [
  ["Weeks 1-2", "第 1-2 週", "Set up consent, privacy thresholds, team grouping, baseline check-ins, and dashboard roles.", "設定同意流程、私隱門檻、團隊分組、baseline check-in 及 dashboard 角色。"],
  ["Month 2", "第 2 個月", "Run targeted recovery, sleep, focus, hydration, or manager-awareness campaigns.", "推出針對恢復、睡眠、專注、補水或管理者 awareness 嘅活動。"],
  ["Month 3", "第 3 個月", "Deliver anonymous trend comparison, campaign impact, management report, and rollout recommendation.", "提交匿名趨勢比較、活動成效、管理報告及 rollout 建議。"],
] as const;

const packages = [
  {
    icon: BarChart3,
    en: "Anonymous Workforce Dashboard",
    zh: "匿名 workforce dashboard",
    bodyEn: "Department, shift, and cohort-level wellbeing intelligence with small-group suppression.",
    bodyZh: "按部門、輪班及 cohort 顯示 wellbeing intelligence，並隱藏小樣本群組。",
  },
  {
    icon: Sparkles,
    en: "AI Personal Plans",
    zh: "AI 個人計劃",
    bodyEn: "Private employee-facing micro-plans for stress reset, sleep recovery, energy, and focus.",
    bodyZh: "面向員工嘅私密 micro-plan，用於壓力 reset、睡眠恢復、能量及專注。",
  },
  {
    icon: LineChart,
    en: "Campaign Impact Reports",
    zh: "活動成效報告",
    bodyEn: "Measure whether campaigns improve participation, stress trends, sleep recovery, and engagement.",
    bodyZh: "量度活動有冇改善參與率、壓力趨勢、睡眠恢復及 engagement。",
  },
  {
    icon: BellRing,
    en: "Early Support Routing",
    zh: "早期支援分流",
    bodyEn: "Recommend workshops, professional support, resource routing, or light-touch interventions.",
    bodyZh: "建議工作坊、專業支援、資源配置或低壓介入。",
  },
] as const;

export default function OrganizationsPage() {
  const { locale, t } = useI18n();
  const isZh = locale === "zh";

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#eefcf3] px-4 py-2 text-sm font-semibold text-[#248a3d] shadow-sm ring-1 ring-black/5">
              <BriefcaseBusiness className="size-4" aria-hidden="true" />
              HumanOS for Organizations
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
              {isZh ? "面向高壓服務機構嘅 workforce wellbeing intelligence。" : "Workforce wellbeing intelligence for high-pressure service organizations."}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e6e73]">
              {isZh
                ? "HumanOS 幫酒店、綜合度假村、企業及 HR 團隊，將壓力、睡眠、專注、輪班疲勞、工作量同活動成效，轉成匿名、可行動嘅 workforce intelligence。"
                : "HumanOS helps hotels, resorts, enterprises, and HR teams turn stress, sleep, focus, shift fatigue, workload, and campaign impact into anonymous, actionable workforce intelligence."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0066d6]">
                {isZh ? "開始機構 pilot" : "Start organization pilot"}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link href="/b2b" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5f5f7] px-6 py-3.5 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md">
                {isZh ? "查看 B2B 方案" : "View B2B model"}
              </Link>
            </div>
          </div>

          <div className="rounded-[2.2rem] bg-[#1d1d1f] p-4 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <div className="rounded-[1.8rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
              <p className="text-sm font-semibold text-white/58">{isZh ? "匿名 workforce intelligence" : "Anonymous workforce intelligence"}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ["1,240", isZh ? "活躍員工" : "Active employees"],
                  ["31%", isZh ? "睡眠恢復風險群組" : "Sleep recovery risk group"],
                  ["18%", isZh ? "倦怠風險群組" : "Burnout awareness group"],
                  ["64%", isZh ? "活動完成率" : "Campaign completion"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-[1.35rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
                    <p className="text-4xl font-semibold">{value}</p>
                    <p className="mt-3 text-sm font-semibold text-white/58">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-[1.8rem] bg-white p-5 text-[#1d1d1f]">
              <RechartsTrendPanel title={t.labels.weeklyTrend} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-[#248a3d]">{isZh ? "應用場景" : "Use cases"}</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98]">
              {isZh ? "唔係 wellness marketing，而係營運智能。" : "Not wellness marketing. Operational intelligence."}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {useCases.map(({ icon: Icon, en, zh, bodyEn, bodyZh }) => (
              <div key={en} className="rounded-[1.8rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
                <div className="grid size-14 place-items-center rounded-3xl bg-[#eefcf3] text-[#248a3d]">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-3xl font-semibold leading-none">{isZh ? zh : en}</h3>
                <p className="mt-5 text-base leading-7 text-[#6e6e73]">{isZh ? bodyZh : bodyEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#ff375f]">{isZh ? "點解機構需要 HumanOS" : "Why organizations need HumanOS"}</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
              {isZh ? "喺大型團隊，風險通常太遲先被睇見。" : "In large teams, risk becomes visible too late."}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map(([en, zh, bodyEn, bodyZh]) => (
              <div key={en} className="rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                <ShieldCheck className="size-6 text-[#34c759]" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-semibold">{isZh ? zh : en}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{isZh ? bodyZh : bodyEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#5ac8fa]">{isZh ? "落地流程" : "Implementation"}</p>
            <h2 className="mt-4 text-[clamp(2.6rem,6vw,5.8rem)] font-semibold leading-none">
              {isZh ? "3 個月由 baseline 到管理報告。" : "Three months from baseline to management report."}
            </h2>
          </div>
          <div className="space-y-3">
            {implementation.map(([period, periodZh, body, bodyZh]) => (
              <div key={period} className="rounded-[1.5rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
                <p className="text-xl font-semibold">{isZh ? periodZh : period}</p>
                <p className="mt-3 text-sm leading-7 text-white/62">{isZh ? bodyZh : body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-[#007aff]">{isZh ? "機構方案" : "Organization package"}</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98]">
              {isZh ? "Pilot package 由 MOP 38,000-88,000 起。" : "Pilot packages start from MOP 38,000-88,000."}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {packages.map(({ icon: Icon, en, zh, bodyEn, bodyZh }) => (
              <div key={en} className="rounded-[1.8rem] bg-[#f5f5f7] p-7 ring-1 ring-black/5">
                <Icon className="size-8 text-[#007aff]" aria-hidden="true" />
                <h3 className="mt-8 text-3xl font-semibold leading-none">{isZh ? zh : en}</h3>
                <p className="mt-5 text-base leading-7 text-[#6e6e73]">{isZh ? bodyZh : bodyEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#f5f5f7] py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex gap-3 rounded-[1.5rem] bg-white p-5 text-sm leading-7 text-[#1d1d1f] ring-1 ring-black/5">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#34c759]" aria-hidden="true" />
            {t.organizations.privacy}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
