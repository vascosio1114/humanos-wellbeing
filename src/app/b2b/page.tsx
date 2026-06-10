"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FileText,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import { useI18n } from "@/lib/i18n";

const problems = [
  {
    en: "Schools, hotels, resorts, and service teams usually see stress only after absence, turnover, complaints, or performance decline.",
    zh: "學校、酒店、綜合度假村及服務團隊，通常要等到缺勤、流失、投訴或表現下降先見到壓力問題。",
  },
  {
    en: "Annual or quarterly surveys are too slow for shift work, exam periods, customer-facing teams, and high-pressure departments.",
    zh: "年度或季度問卷太慢，未必追得上輪班、考試季、前線服務及高壓部門嘅狀態變化。",
  },
  {
    en: "Existing wellness benefits are hard to allocate because leaders do not know which groups need what kind of support.",
    zh: "現有員工福利或學生支援難以分配，因為管理者唔清楚邊個群組最需要邊種支援。",
  },
  {
    en: "Trust breaks if wellbeing technology feels like surveillance, so institutional insight must be anonymous-first.",
    zh: "如果 wellbeing 科技令人覺得被監控，信任會即刻下降，所以機構洞察必須匿名優先。",
  },
];

const modules = [
  {
    icon: BarChart3,
    en: "Anonymous Institution Dashboard",
    zh: "匿名機構儀表板",
    bodyEn: "Stress, sleep, focus, workload, mood, attendance, participation, and recovery trends by cohort, team, shift, or department.",
    bodyZh: "按班級、團隊、輪班或部門查看壓力、睡眠、專注、工作量、情緒、出席、參與率及恢復趨勢。",
  },
  {
    icon: BellRing,
    en: "Early Support Intelligence",
    zh: "早期支援智能",
    bodyEn: "HumanOS detects patterns before they become incidents, then recommends practical actions such as campaigns, workshops, or referrals.",
    bodyZh: "HumanOS 會喺問題變成事故前偵測趨勢，再建議可執行行動，例如活動、工作坊或專業轉介。",
  },
  {
    icon: FileText,
    en: "Monthly Management Report",
    zh: "每月管理報告",
    bodyEn: "Summarize trend changes, campaign impact, priority groups, privacy-safe evidence, and next-month support planning.",
    bodyZh: "總結趨勢變化、活動成效、優先支援群組、私隱安全證據，以及下月支援建議。",
  },
];

const pilotSteps = [
  {
    en: "Weeks 1-2",
    zh: "第 1-2 週",
    bodyEn: "Needs interviews, consent flow, privacy documents, baseline questionnaire, account setup, and team grouping.",
    bodyZh: "完成需求訪談、同意流程、私隱文件、baseline 問卷、帳戶設定及群組分類。",
  },
  {
    en: "Month 2",
    zh: "第 2 個月",
    bodyEn: "Launch personal AI plans, weekly check-ins, one workshop, light-touch campaigns, and optional 15-minute support consults.",
    bodyZh: "推出個人 AI 計劃、每週 check-in、一場工作坊、低壓支援活動，以及可選 15 分鐘支援諮詢。",
  },
  {
    en: "Month 3",
    zh: "第 3 個月",
    bodyEn: "Evaluate anonymous trends, campaign outcomes, management feedback, user feedback, and renewal or expansion intent.",
    bodyZh: "評估匿名趨勢、活動成效、管理層回饋、用戶回饋，以及續約或擴展意向。",
  },
];

const prices = [
  ["Pilot package", "MOP 38,000-88,000", "3-month school, hotel, enterprise department, or public-sector pilot", "3 個月學校、酒店、企業部門或公共機構試點"],
  ["Standard institution", "MOP 25-45 / user / month", "For 100-1,000 users with dashboard and monthly reporting", "適合 100-1,000 人，包含 dashboard 及每月報告"],
  ["Institution professional", "MOP 120,000-360,000 / year", "Annual package with professional support network and deeper implementation", "年度方案，加入專業支援網絡及更深入落地服務"],
  ["White-label / custom", "Custom", "For platforms, large groups, IoT, health kiosk, or API integration", "適合平台、大型集團、IoT、健康 kiosk 或 API 整合"],
] as const;

const kpis = [
  ["Activation", "啟用率"],
  ["Weekly active check-ins", "每週活躍 check-in"],
  ["AI plan completion >=40%", "AI 計劃完成率 >=40%"],
  ["Anonymous dashboard usefulness", "匿名 dashboard 有用程度"],
  ["Paid renewal or expansion intent", "付費續約或擴展意向"],
];

export default function B2BPage() {
  const { locale } = useI18n();
  const isZh = locale === "zh";

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#eefcf3] px-4 py-2 text-sm font-semibold text-[#248a3d] ring-1 ring-black/5">
              <BriefcaseBusiness className="size-4" aria-hidden="true" />
              HumanOS B2B
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
              {isZh ? "面向機構嘅福祉智能平台。" : "Wellbeing intelligence for institutions."}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e6e73]">
              {isZh
                ? "HumanOS 以 B2B 優先，幫學校、企業、酒店、綜合度假村及公共機構，將日常健康訊號變成早期風險趨勢、個人化支援計劃、匿名團隊洞察及資源配置建議。"
                : "HumanOS is B2B-first: helping schools, enterprises, hotels, resorts, and public institutions turn daily wellbeing signals into early risk trends, personal support plans, anonymous team insight, and resource allocation recommendations."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0066d6]">
                {isZh ? "啟動 B2B pilot" : "Start B2B pilot"}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link href="/ai-dashboard" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5f5f7] px-6 py-3.5 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md">
                {isZh ? "查看 AI Dashboard" : "View AI dashboard"}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#1d1d1f] p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <div className="rounded-[1.5rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white/58">{isZh ? "核心流程" : "Core operating loop"}</p>
                  <p className="mt-3 text-4xl font-semibold leading-tight">
                    {isZh ? "監測 → 預測 → 規劃 → 介入 → 評估" : "Monitor → Predict → Plan → Intervene → Evaluate"}
                  </p>
                </div>
                <Building2 className="size-12 text-[#5ac8fa]" aria-hidden="true" />
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {(isZh
                ? ["私密個人 check-in", "匿名團隊趨勢", "AI 支援建議", "每月管理報告"]
                : ["Private personal check-ins", "Anonymous team trends", "AI support recommendations", "Monthly management reports"]
              ).map((item) => (
                <div key={item} className="rounded-[1.25rem] bg-white/[0.08] p-5 text-sm font-semibold text-white/78 ring-1 ring-white/10">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#248a3d]">{isZh ? "點解係 B2B-first" : "Why B2B-first"}</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
              {isZh ? "市場缺口唔係更多健康內容，而係一套可以被機構信任嘅系統。" : "The gap is not more health content. It is a system institutions can trust."}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map((item) => (
              <div key={item.en} className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
                <ShieldCheck className="size-6 text-[#34c759]" aria-hidden="true" />
                <p className="mt-8 text-base font-semibold leading-7">{isZh ? item.zh : item.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#007aff]">{isZh ? "產品模組" : "Product modules"}</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98]">
              {isZh ? "個人得到支援，機構得到匿名洞察。" : "Personal support for users. Anonymous intelligence for institutions."}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {modules.map(({ icon: Icon, en, zh, bodyEn, bodyZh }) => (
              <div key={en} className="rounded-[1.8rem] bg-[#f5f5f7] p-7 ring-1 ring-black/5">
                <div className="grid size-14 place-items-center rounded-3xl bg-white text-[#007aff] shadow-sm ring-1 ring-black/5">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-3xl font-semibold leading-none">{isZh ? zh : en}</h3>
                <p className="mt-5 text-base leading-7 text-[#6e6e73]">{isZh ? bodyZh : bodyEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#5ac8fa]">{isZh ? "3 個月 pilot" : "3-month pilot"}</p>
            <h2 className="mt-4 text-[clamp(2.6rem,6vw,5.8rem)] font-semibold leading-none">
              {isZh ? "由 baseline 到可續約嘅 rollout plan。" : "From baseline to a renewal-ready rollout plan."}
            </h2>
          </div>
          <div className="space-y-3">
            {pilotSteps.map((step) => (
              <div key={step.en} className="rounded-[1.5rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
                <p className="text-xl font-semibold">{isZh ? step.zh : step.en}</p>
                <p className="mt-3 text-sm leading-7 text-white/62">{isZh ? step.bodyZh : step.bodyEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-[#ff375f]">{isZh ? "商業模式" : "Commercial model"}</p>
              <h2 className="mt-4 text-[clamp(2.3rem,5vw,4.8rem)] font-semibold leading-none">
                {isZh ? "清楚定價，方便學校、酒店同企業做採購決定。" : "Clear packages for school, hotel, enterprise, and public-sector procurement."}
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {prices.map(([name, price, en, zh]) => (
                <div key={name} className="rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                  <p className="text-sm font-semibold text-[#6e6e73]">{name}</p>
                  <p className="mt-3 text-2xl font-semibold text-[#007aff]">{price}</p>
                  <p className="mt-4 text-sm leading-6 text-[#6e6e73]">{isZh ? zh : en}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-5">
            {kpis.map(([en, zh]) => (
              <div key={en} className="rounded-[1.25rem] bg-[#eefcf3] p-4 text-sm font-semibold text-[#248a3d]">
                <CheckCircle2 className="mb-5 size-5" aria-hidden="true" />
                {isZh ? zh : en}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] py-16">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <UsersRound className="mx-auto size-9 text-[#007aff]" aria-hidden="true" />
          <h2 className="mt-5 text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-none">
            {isZh
              ? "HumanOS 唔係員工監控工具，而係 privacy-first 嘅福祉智能層。"
              : "HumanOS is not employee surveillance. It is a privacy-first wellbeing intelligence layer."}
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
