"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  ClipboardCheck,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import {
  assessmentLibrary,
  assessmentSafetyPrinciples,
  humanOSIndicators,
  recognizedQuestionnaires,
} from "@/lib/assessment-library";
import { useI18n } from "@/lib/i18n";

export default function AssessmentLibraryPage() {
  const { locale } = useI18n();

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="relative isolate bg-white">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_20%_10%,rgba(0,122,255,0.16),transparent_32%),radial-gradient(circle_at_78%_12%,rgba(52,199,89,0.16),transparent_30%),radial-gradient(circle_at_52%_0%,rgba(255,55,95,0.12),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#eaf5ff] px-4 py-2 text-sm font-semibold text-[#007aff] shadow-sm ring-1 ring-black/5">
              <ClipboardCheck className="size-4" aria-hidden="true" />
              HumanOS Assessment Library
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
              {locale === "zh" ? "HumanOS 嘅可信底層：問卷框架變成支援 intelligence。" : "The credibility layer behind HumanOS wellbeing intelligence."}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e6e73]">
              {locale === "zh"
                ? "平台參考 WHO-5、WEMWBS、PSS-10、OLBI、COPSOQ、HSE、UWES 同 psychological safety 等方向，但只用自家非診斷題目同私隱安全 dashboard。"
                : "HumanOS references WHO-5, WEMWBS, PSS-10, OLBI, COPSOQ, HSE, UWES, and psychological safety traditions, while using custom non-diagnostic items and privacy-safe dashboards."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0066d6]"
              >
                {locale === "zh" ? "睇 Demo" : "View Demo"}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="/technology"
                className="inline-flex items-center justify-center rounded-full bg-[#f5f5f7] px-6 py-3.5 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md"
              >
                {locale === "zh" ? "睇 Architecture" : "View Architecture"}
              </Link>
            </div>
          </div>

          <div className="rounded-[2.2rem] bg-[#1d1d1f] p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <p className="text-sm font-semibold text-white/58">{locale === "zh" ? "Non-diagnostic outputs" : "Non-diagnostic outputs"}</p>
            <div className="mt-5 grid gap-3">
              {[
                ["Wellbeing awareness", "福祉 awareness"],
                ["Stress trend", "壓力趨勢"],
                ["Burnout risk awareness", "倦怠風險 awareness"],
                ["Support suggestion", "支援建議"],
                ["Referral suggestion when needed", "需要時轉介建議"],
              ].map(([en, zh]) => (
                <div key={en} className="flex items-center gap-3 rounded-[1.2rem] bg-white/[0.08] p-4 ring-1 ring-white/10">
                  <ShieldCheck className="size-5 shrink-0 text-[#34c759]" aria-hidden="true" />
                  <span className="text-sm font-semibold text-white/82">{locale === "zh" ? zh : en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-[#007aff]">Library Modules</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98] tracking-normal">
              {locale === "zh" ? "由 daily pulse 到 enterprise dashboard。" : "From daily pulse to enterprise dashboard."}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {assessmentLibrary.map((item) => (
              <div key={item.name} className="rounded-[1.6rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#007aff]">{locale === "zh" ? item.cadenceZh : item.cadence}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight">{locale === "zh" ? item.nameZh : item.name}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6e6e73]">{locale === "zh" ? item.purposeZh : item.purpose}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(locale === "zh" ? item.outputsZh : item.outputs).map((output) => (
                    <span key={output} className="rounded-full bg-[#f5f5f7] px-3 py-1.5 text-xs font-semibold text-[#6e6e73] ring-1 ring-black/5">
                      {output}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-[#007aff]">{locale === "zh" ? "6 大指標" : "Six Indicators"}</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98] tracking-normal">
              {locale === "zh" ? "所有問卷方向，最後收斂成 HumanOS signal。" : "All questionnaire directions converge into HumanOS signals."}
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {humanOSIndicators.map((indicator) => (
              <div key={indicator.title} className="rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                <p className="text-xl font-semibold">{locale === "zh" ? indicator.titleZh : indicator.title}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#007aff]">{locale === "zh" ? indicator.basisZh : indicator.basis}</p>
                <p className="mt-4 text-sm leading-7 text-[#6e6e73]">{locale === "zh" ? indicator.outputZh : indicator.output}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-[#5ac8fa]">{locale === "zh" ? "參考問卷地圖" : "Reference Questionnaire Map"}</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98] tracking-normal">
              {locale === "zh" ? "參考國際框架，但唔展示診斷。" : "Reference recognized frameworks without displaying diagnosis."}
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {recognizedQuestionnaires.map((item) => (
              <div key={item.name} className="rounded-[1.35rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
                <BookOpenCheck className="size-6 text-[#5ac8fa]" aria-hidden="true" />
                <p className="mt-5 text-xl font-semibold leading-tight">{item.name}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/42">{item.humanOSUse}</p>
                <p className="mt-4 text-sm leading-7 text-white/68">{locale === "zh" ? item.useZh : item.use}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[1.6rem] bg-white/[0.08] p-6 ring-1 ring-white/10">
            <p className="flex items-center gap-2 text-xl font-semibold">
              <LockKeyhole className="size-5 text-[#ff9f0a]" aria-hidden="true" />
              Safety and privacy rules
            </p>
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
