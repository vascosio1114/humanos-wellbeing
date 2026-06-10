"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  HeartPulse,
  Hotel,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import {
  marketScenarios,
  modelTasks,
  pricingPackages,
  productPillars,
} from "@/lib/proposal-data";

export default function OrganizationsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="relative isolate bg-white">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_20%_12%,rgba(52,199,89,0.18),transparent_32%),radial-gradient(circle_at_80%_18%,rgba(0,122,255,0.16),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#eefcf3] px-4 py-2 text-sm font-semibold text-[#248a3d] shadow-sm ring-1 ring-black/5">
              <Hotel className="size-4" aria-hidden="true" />
              B2B 福祉智能中台
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
              把員工與學生福祉，變成可行動的機構決策。
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e6e73]">
              HumanOS 幫學校、酒店、企業及公共服務機構看見匿名群體趨勢、配置福利資源、衡量活動成效，並建立低門檻專業支援閉環。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:bg-[#0066d6]"
              >
                申請三個月試點
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="/business-plan"
                className="inline-flex items-center justify-center rounded-full bg-[#f5f5f7] px-6 py-3.5 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md"
              >
                查看定價
              </Link>
            </div>
          </div>

          <div className="rounded-[2.2rem] bg-[#1d1d1f] p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <p className="text-sm font-semibold text-white/58">機構端只看匿名洞察</p>
            <div className="mt-5 grid gap-3">
              {["團隊福祉趨勢", "風險熱點", "福利資源配置建議", "月度管理報告", "活動成效分析"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[1.2rem] bg-white/[0.08] p-4 ring-1 ring-white/10">
                  <CheckCircle2 className="size-5 shrink-0 text-[#34c759]" aria-hidden="true" />
                  <span className="text-sm font-semibold text-white/82">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Market Entry" title="四個首批市場場景" />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {marketScenarios.map((scenario) => (
              <div key={scenario.title} className="rounded-[1.6rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
                <Building2 className="size-7 text-[#248a3d]" aria-hidden="true" />
                <h2 className="mt-6 text-2xl font-semibold">{scenario.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#6e6e73]">痛點：{scenario.pain}</p>
                <p className="mt-2 text-sm leading-7 text-[#6e6e73]">採購動機：{scenario.motivation}</p>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#1d1d1f]">HumanOS 切入：{scenario.entry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-[#007aff]">Product Modules</p>
              <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
                由個人自助到機構決策，形成服務閉環。
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {productPillars.map((pillar, index) => {
                const Icon = [HeartPulse, BarChart3, Stethoscope, ShieldCheck][index];
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

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="AI Model Tasks" title="模型任務直接對應管理行動" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {modelTasks.map(([task, input, output]) => (
              <div key={task} className="rounded-[1.5rem] bg-white p-5 ring-1 ring-black/5">
                <p className="text-xl font-semibold">{task}</p>
                <p className="mt-4 text-sm leading-7 text-[#6e6e73]">輸入：{input}</p>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#007aff]">輸出：{output}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle dark eyebrow="Commercial Options" title="由低風險試點到年度企業方案" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pricingPackages.slice(0, 6).map(([product, customer, price, includes]) => (
              <div key={product} className="rounded-[1.5rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
                <p className="text-xl font-semibold">{product}</p>
                <p className="mt-3 text-sm text-white/46">{customer}</p>
                <p className="mt-5 text-xl font-semibold text-[#5ac8fa]">{price}</p>
                <p className="mt-4 text-sm leading-7 text-white/68">{includes}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex gap-3 rounded-[1.5rem] bg-white/[0.08] p-5 text-sm leading-7 text-white/76 ring-1 ring-white/10">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#34c759]" aria-hidden="true" />
            重要原則：HumanOS 不應成為監工工具，而應成為健康支援基礎設施。個人日記、AI 對話、個人分數及諮詢紀錄不向機構開放。
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
