"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  LineChart,
  Sparkles,
  Target,
} from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import { pilotKpis, pilotStages, pricingPackages } from "@/lib/proposal-data";

export default function PilotPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="relative isolate bg-white">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_18%_10%,rgba(0,122,255,0.16),transparent_32%),radial-gradient(circle_at_78%_15%,rgba(52,199,89,0.16),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#eaf5ff] px-4 py-2 text-sm font-semibold text-[#007aff] shadow-sm ring-1 ring-black/5">
              <Sparkles className="size-4" aria-hidden="true" />
              3-month institutional pilot
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
              用三個月證明 HumanOS 可以帶來機構級健康洞察。
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e6e73]">
              試點不追求一次過做大，而是完整驗證「監測、預測、規劃、介入、評估」閉環：個人有 AI 計劃，機構有匿名趨勢，管理層有可行動報告。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:bg-[#0066d6]"
              >
                申請試點洽談
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="/business-plan"
                className="inline-flex items-center justify-center rounded-full bg-[#f5f5f7] px-6 py-3.5 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md"
              >
                查看商業計劃
              </Link>
            </div>
          </div>

          <div className="rounded-[2.2rem] bg-[#1d1d1f] p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <p className="text-sm font-semibold text-white/50">Pilot Package</p>
            <p className="mt-5 text-5xl font-semibold tracking-normal text-[#5ac8fa]">
              MOP 38k-88k
            </p>
            <p className="mt-4 text-sm leading-7 text-white/68">
              適合學校、酒店、企業部門或公共服務單位，包含基本平台、匿名儀表板、月報及一次工作坊。
            </p>
            <div className="mt-6 grid gap-3">
              {["個人打卡與 AI daily plan", "匿名機構 dashboard", "月度福祉報告", "支援資源配置建議"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[1.1rem] bg-white/[0.08] p-4 ring-1 ring-white/10">
                  <CheckCircle2 className="size-5 shrink-0 text-[#34c759]" aria-hidden="true" />
                  <span className="text-sm font-semibold text-white/78">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Pilot Roadmap" title="四個階段，由基線到續約建議" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {pilotStages.map(([stage, time, work, output]) => (
              <div key={stage} className="rounded-[1.6rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
                <CalendarCheck className="size-7 text-[#007aff]" aria-hidden="true" />
                <h2 className="mt-6 text-2xl font-semibold">{stage}</h2>
                <p className="mt-2 text-sm font-semibold text-[#007aff]">{time}</p>
                <p className="mt-5 text-sm leading-7 text-[#6e6e73]">{work}</p>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#1d1d1f]">{output}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#007aff]">Success Metrics</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
              試點 KPI 要同續約決策直接相連。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6e6e73]">
              HumanOS 不是做一次健康活動，而是讓機構知道哪些支援有效、哪些群組需要更早介入。
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {pilotKpis.map(([kpi, target, meaning]) => (
              <div key={kpi} className="rounded-[1.3rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                <Target className="size-6 text-[#34c759]" aria-hidden="true" />
                <p className="mt-5 text-xl font-semibold">{kpi}</p>
                <p className="mt-2 text-lg font-semibold text-[#007aff]">{target}</p>
                <p className="mt-3 text-sm leading-7 text-[#6e6e73]">{meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle dark eyebrow="After Pilot" title="由試點轉成年度訂閱與服務包" />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pricingPackages.slice(1, 4).map(([product, customer, price, includes]) => (
              <div key={product} className="rounded-[1.5rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
                <LineChart className="size-7 text-[#5ac8fa]" aria-hidden="true" />
                <p className="mt-6 text-2xl font-semibold">{product}</p>
                <p className="mt-3 text-sm text-white/46">{customer}</p>
                <p className="mt-5 text-xl font-semibold text-[#5ac8fa]">{price}</p>
                <p className="mt-4 text-sm leading-7 text-white/68">{includes}</p>
              </div>
            ))}
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
