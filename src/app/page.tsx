"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  HeartPulse,
  Network,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import {
  marketScenarios,
  platformLayers,
  productPillars,
  proposalPositioning,
} from "@/lib/proposal-data";

const icons = [BarChart3, HeartPulse, Stethoscope, Network];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="relative isolate bg-white">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_20%_10%,rgba(0,122,255,0.16),transparent_32%),radial-gradient(circle_at_78%_12%,rgba(52,199,89,0.16),transparent_30%),radial-gradient(circle_at_52%_0%,rgba(255,55,95,0.12),transparent_34%)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#eaf5ff] px-4 py-2 text-sm font-semibold text-[#007aff] shadow-sm ring-1 ring-black/5">
              <Sparkles className="size-4" aria-hidden="true" />
              {proposalPositioning.businessFocus}
            </p>
            <h1 className="mt-6 text-[clamp(3.2rem,7.5vw,7.4rem)] font-semibold leading-[0.94] tracking-normal">
              HumanOS
              <span className="block text-[#6e6e73]">{proposalPositioning.title}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e6e73]">
              {proposalPositioning.subtitle}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#6e6e73]">
              {proposalPositioning.thesis}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/business-plan"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0066d6]"
              >
                查看商業計劃
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="/organizations"
                className="inline-flex items-center justify-center rounded-full bg-[#f5f5f7] px-6 py-3.5 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md"
              >
                機構方案
              </Link>
            </div>
          </div>

          <div className="rounded-[2.2rem] bg-[#1d1d1f] p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <p className="text-sm font-semibold text-white/58">HumanOS Operating Loop</p>
            <div className="mt-5 grid gap-3">
              {proposalPositioning.operatingLoop.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-[1.3rem] bg-white/[0.08] p-4 ring-1 ring-white/10">
                  <span className="grid size-10 place-items-center rounded-full bg-white text-sm font-semibold text-[#1d1d1f]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-semibold">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[1.5rem] bg-white p-5 text-[#1d1d1f]">
              <p className="text-sm font-semibold text-[#007aff]">核心判斷</p>
              <p className="mt-3 text-sm leading-7 text-[#6e6e73]">
                市場缺口不是更多健康內容，而是一套讓個人與組織同時看見問題、預測風險、配置支援並衡量成效的整合系統。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-[#007aff]">Strategic Positioning</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98] tracking-normal">
              由 B2B 試點，走向健康支援生態系統。
            </h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {platformLayers.map((layer) => (
              <div key={layer.stage} className="rounded-[1.8rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
                <p className="text-sm font-semibold text-[#007aff]">{layer.stage}</p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight">{layer.title}</h3>
                <p className="mt-5 text-sm font-semibold text-[#6e6e73]">{layer.audience}</p>
                <p className="mt-4 text-base leading-7 text-[#1d1d1f]">{layer.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-[#007aff]">Product System</p>
              <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
                四個產品組件，組成機構福祉智能中台。
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#6e6e73]">
                HumanOS 將個人自助、匿名儀表板、線下檢測與專業服務連成閉環，避免平台停留於數據展示。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {productPillars.map((pillar, index) => {
                const Icon = icons[index];
                return (
                  <div key={pillar.title} className="rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                    <Icon className="size-8 text-[#007aff]" aria-hidden="true" />
                    <h3 className="mt-8 text-2xl font-semibold leading-tight">{pillar.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#6e6e73]">{pillar.body}</p>
                    <p className="mt-4 text-sm font-semibold leading-6 text-[#1d1d1f]">{pillar.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-[#5ac8fa]">First Markets</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98]">
              澳門作為小規模、高密度、易試點示範市場。
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {marketScenarios.map((scenario) => (
              <div key={scenario.title} className="rounded-[1.6rem] bg-white/[0.08] p-6 ring-1 ring-white/10">
                <Building2 className="size-7 text-[#34c759]" aria-hidden="true" />
                <h3 className="mt-6 text-2xl font-semibold">{scenario.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">痛點：{scenario.pain}</p>
                <p className="mt-2 text-sm leading-7 text-white/62">採購動機：{scenario.motivation}</p>
                <p className="mt-4 text-sm font-semibold leading-6 text-white">HumanOS：{scenario.entry}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex gap-3 rounded-[1.5rem] bg-white/[0.08] p-5 text-sm leading-7 text-white/76 ring-1 ring-white/10">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#34c759]" aria-hidden="true" />
            HumanOS 不定位為醫療診斷系統，不取代醫生、心理治療師或專業諮詢人員；平台定位為早期意識、健康管理、福利資源分流與組織支援工具。
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
