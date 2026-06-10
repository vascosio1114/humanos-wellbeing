"use client";

import type { ReactNode } from "react";
import {
  BarChart3,
  Brain,
  BriefcaseBusiness,
  Database,
  GraduationCap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import {
  assessmentLibrary,
  assessmentSafetyPrinciples,
  humanOSIndicators,
  recognizedQuestionnaires,
} from "@/lib/assessment-library";
import { useI18n } from "@/lib/i18n";

const architectureBlocks = [
  {
    icon: Brain,
    en: "Assessment Engine",
    zh: "Assessment Engine",
    bodyEn: "Daily, weekly, monthly, student, and workplace modules convert custom questions into HumanOS wellbeing signals.",
    bodyZh: "每日、每週、每月、學生及職場 module 會將自家題目轉成 HumanOS wellbeing signals。",
  },
  {
    icon: Sparkles,
    en: "AI Support Planner",
    zh: "AI Support Planner",
    bodyEn: "Signals become personal daily plans, micro-actions, campaign ideas, and referral suggestions when needed.",
    bodyZh: "訊號會變成個人 daily plan、micro-actions、campaign ideas，同需要時嘅 referral suggestion。",
  },
  {
    icon: BarChart3,
    en: "Institution Intelligence",
    zh: "Institution Intelligence",
    bodyEn: "Schools and HR teams see anonymous trends, cohort risk movement, campaign impact, and support priorities.",
    bodyZh: "學校同 HR 只睇匿名趨勢、群組風險變化、campaign 成效同支援優先次序。",
  },
  {
    icon: ShieldCheck,
    en: "Privacy Governance",
    zh: "Privacy Governance",
    bodyEn: "Private reflections, individual answers, AI chats, and identifiable reports stay out of institutional dashboards.",
    bodyZh: "私人反思、個人答案、AI 對話同可識別報告唔會出現在機構 dashboard。",
  },
] as const;

export default function TechnologyPage() {
  const { locale } = useI18n();
  const workplaceQuestionnaires = recognizedQuestionnaires.filter((item) =>
    ["COPSOQ III", "HSE Management Standards Indicator Tool", "UWES Utrecht Work Engagement Scale", "Edmondson Psychological Safety Scale"].includes(item.name),
  );
  const personalQuestionnaires = recognizedQuestionnaires.filter((item) =>
    ["WHO-5 Well-Being Index", "WEMWBS / SWEMWBS", "PSS-10 Perceived Stress Scale", "PHQ-9", "GAD-7", "Oldenburg Burnout Inventory"].includes(item.name),
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="relative isolate bg-white">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_18%_10%,rgba(0,122,255,0.16),transparent_32%),radial-gradient(circle_at_78%_14%,rgba(52,199,89,0.16),transparent_30%),radial-gradient(circle_at_52%_0%,rgba(191,90,242,0.12),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-5xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#eaf5ff] px-4 py-2 text-sm font-semibold text-[#007aff] shadow-sm ring-1 ring-black/5">
              <Database className="size-4" aria-hidden="true" />
              HumanOS Assessment Architecture
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
              {locale === "zh" ? "由國際問卷框架，變成 Wellbeing Intelligence Layer。" : "From recognized questionnaire frameworks to a wellbeing intelligence layer."}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-[#6e6e73]">
              {locale === "zh"
                ? "HumanOS 唔係照搬醫療問卷。平台用國際認可框架做參考，設計自家非診斷題目，再轉化成 awareness、trend、support suggestion 同匿名機構洞察。"
                : "HumanOS does not copy medical questionnaires. It references recognized frameworks, designs custom non-diagnostic items, and converts them into awareness, trends, support suggestions, and anonymous institutional insight."}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {architectureBlocks.map(({ icon: Icon, en, zh, bodyEn, bodyZh }) => (
              <div key={en} className="rounded-[1.7rem] bg-[#f5f5f7] p-6 ring-1 ring-black/5">
                <Icon className="size-8 text-[#007aff]" aria-hidden="true" />
                <h2 className="mt-8 text-2xl font-semibold leading-tight">{locale === "zh" ? zh : en}</h2>
                <p className="mt-4 text-sm leading-7 text-[#6e6e73]">{locale === "zh" ? bodyZh : bodyEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-[#007aff]">{locale === "zh" ? "Assessment Library" : "Assessment Library"}</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98] tracking-normal">
              {locale === "zh" ? "五個 module，覆蓋每日、每週、每月、學生同職場。" : "Five modules across daily, weekly, monthly, student, and workplace use."}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-5">
            {assessmentLibrary.map((item) => (
              <div key={item.name} className="rounded-[1.6rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#007aff]">{locale === "zh" ? item.cadenceZh : item.cadence}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight">{locale === "zh" ? item.nameZh : item.name}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6e6e73]">{locale === "zh" ? item.purposeZh : item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-[#007aff]">{locale === "zh" ? "HumanOS 6 大指標" : "Six HumanOS indicators"}</p>
              <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none tracking-normal">
                {locale === "zh" ? "評委要見到：呢個唔係 app 功能，係 intelligence model。" : "This is not a feature list. It is an intelligence model."}
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#6e6e73]">
                {locale === "zh"
                  ? "HumanOS 將不同問卷方向收斂成 6 個可理解、可追蹤、可行動嘅 wellbeing indicators。"
                  : "HumanOS consolidates multiple questionnaire traditions into six understandable, trackable, and actionable wellbeing indicators."}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {humanOSIndicators.map((indicator) => (
                <div key={indicator.title} className="rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                  <p className="text-xl font-semibold">{locale === "zh" ? indicator.titleZh : indicator.title}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#007aff]">{locale === "zh" ? indicator.basisZh : indicator.basis}</p>
                  <p className="mt-4 text-sm leading-7 text-[#6e6e73]">{locale === "zh" ? indicator.outputZh : indicator.output}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <QuestionnaireColumn
              icon={<GraduationCap className="size-7 text-[#5ac8fa]" aria-hidden="true" />}
              items={personalQuestionnaires}
              locale={locale}
              title={locale === "zh" ? "個人 / 學生 / 員工通用" : "Personal / student / employee"}
            />
            <QuestionnaireColumn
              icon={<BriefcaseBusiness className="size-7 text-[#34c759]" aria-hidden="true" />}
              items={workplaceQuestionnaires}
              locale={locale}
              title={locale === "zh" ? "員工 / HR / 企業版" : "Employee / HR / workplace"}
            />
          </div>
          <div className="mt-10 rounded-[1.6rem] bg-white/[0.08] p-6 ring-1 ring-white/10">
            <p className="text-xl font-semibold">{locale === "zh" ? "Safety Boundary" : "Safety Boundary"}</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {assessmentSafetyPrinciples.map((principle) => (
                <div key={principle} className="flex gap-3 rounded-[1rem] bg-white/[0.08] p-4 text-sm leading-7 text-white/76 ring-1 ring-white/10">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#34c759]" aria-hidden="true" />
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function QuestionnaireColumn({
  icon,
  items,
  locale,
  title,
}: {
  icon: ReactNode;
  items: Array<(typeof recognizedQuestionnaires)[number]>;
  locale: "en" | "zh";
  title: string;
}) {
  return (
    <div className="rounded-[1.8rem] bg-white/[0.08] p-6 ring-1 ring-white/10">
      <div className="flex items-center gap-3">
        {icon}
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item.name} className="rounded-[1.15rem] bg-white/[0.08] p-4 ring-1 ring-white/10">
            <p className="font-semibold">{item.name}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/42">{item.humanOSUse}</p>
            <p className="mt-3 text-sm leading-7 text-white/68">{locale === "zh" ? item.useZh : item.use}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
