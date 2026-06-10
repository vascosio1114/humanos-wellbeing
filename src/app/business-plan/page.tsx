"use client";

import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  CalendarCheck,
  LineChart,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import {
  financialForecast,
  pilotKpis,
  pilotStages,
  pricingPackages,
  proposalPositioning,
  roadmapMilestones,
} from "@/lib/proposal-data";

export default function BusinessPlanPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="relative isolate bg-white">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_22%_10%,rgba(0,122,255,0.16),transparent_32%),radial-gradient(circle_at_78%_12%,rgba(52,199,89,0.16),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-5xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#eaf5ff] px-4 py-2 text-sm font-semibold text-[#007aff] shadow-sm ring-1 ring-black/5">
              <Rocket className="size-4" aria-hidden="true" />
              投資與試點洽談版
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
              HumanOS 正式商業計劃
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-[#6e6e73]">
              {proposalPositioning.subtitle}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:bg-[#0066d6]"
              >
                開始試點洽談
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="/pilot"
                className="inline-flex items-center justify-center rounded-full bg-[#f5f5f7] px-6 py-3.5 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md"
              >
                查看試點方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Pricing" title="B2B 優先的混合收入模型" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pricingPackages.map(([product, customer, price, includes]) => (
              <div key={product} className="rounded-[1.6rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
                <Banknote className="size-7 text-[#007aff]" aria-hidden="true" />
                <h2 className="mt-6 text-2xl font-semibold leading-tight">{product}</h2>
                <p className="mt-3 text-sm font-semibold text-[#6e6e73]">{customer}</p>
                <p className="mt-5 text-xl font-semibold text-[#007aff]">{price}</p>
                <p className="mt-4 text-sm leading-7 text-[#6e6e73]">{includes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Pilot" title="三個月試點：小而完整，驗證商業可行性" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {pilotStages.map(([stage, time, work, output]) => (
              <div key={stage} className="rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                <CalendarCheck className="size-7 text-[#007aff]" aria-hidden="true" />
                <h2 className="mt-6 text-2xl font-semibold">{stage}</h2>
                <p className="mt-2 text-sm font-semibold text-[#007aff]">{time}</p>
                <p className="mt-4 text-sm leading-7 text-[#6e6e73]">{work}</p>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#1d1d1f]">{output}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#007aff]">KPIs</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
              試點是否值得續約，用數據說話。
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {pilotKpis.map(([kpi, target, meaning]) => (
              <div key={kpi} className="rounded-[1.3rem] bg-white p-5 ring-1 ring-black/5">
                <p className="text-xl font-semibold">{kpi}</p>
                <p className="mt-2 text-lg font-semibold text-[#007aff]">{target}</p>
                <p className="mt-3 text-sm leading-7 text-[#6e6e73]">{meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle dark eyebrow="Forecast" title="五年收入預測與擴張路徑" />
          <div className="mt-12 overflow-hidden rounded-[1.6rem] bg-white/[0.08] ring-1 ring-white/10">
            {financialForecast.map(([year, orgs, users, revenue, source]) => (
              <div key={year} className="grid gap-3 border-b border-white/10 p-5 text-sm last:border-b-0 md:grid-cols-5">
                <p className="text-xl font-semibold">{year}</p>
                <p className="text-white/68">機構：{orgs}</p>
                <p className="text-white/68">用戶：{users}</p>
                <p className="font-semibold text-[#5ac8fa]">{revenue}</p>
                <p className="text-white/68">{source}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {roadmapMilestones.map(([phase, time, goal]) => (
              <div key={phase} className="rounded-[1.4rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
                <LineChart className="size-6 text-[#34c759]" aria-hidden="true" />
                <p className="mt-5 text-lg font-semibold">{phase}</p>
                <p className="mt-2 text-sm font-semibold text-white/42">{time}</p>
                <p className="mt-4 text-sm leading-7 text-white/68">{goal}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex gap-3 rounded-[1.5rem] bg-white/[0.08] p-5 text-sm leading-7 text-white/76 ring-1 ring-white/10">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#34c759]" aria-hidden="true" />
            融資用途聚焦產品與技術開發、試點與客戶成功、專業服務網絡、健康檢測亭概念驗證、合規與市場拓展。
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SectionTitle({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className={`text-sm font-semibold ${dark ? "text-[#5ac8fa]" : "text-[#007aff]"}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98] ${dark ? "text-white" : "text-[#1d1d1f]"}`}>
        {title}
      </h2>
    </div>
  );
}
