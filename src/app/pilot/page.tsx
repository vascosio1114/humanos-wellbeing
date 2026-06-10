"use client";

import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2, FileText, Target } from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import { useI18n } from "@/lib/i18n";

const months = [
  ["Weeks 1-2", "第 1-2 週", ["Needs interviews", "Privacy and consent documents", "Baseline questionnaire", "Account setup and grouping"], ["需求訪談", "私隱與同意文件", "Baseline 問卷", "帳戶設定及群組分類"]],
  ["Month 2", "第 2 個月", ["Personal AI wellbeing plans", "Weekly check-ins", "One workshop", "Optional 15-minute support consults"], ["個人 AI wellbeing 計劃", "每週 check-in", "一場工作坊", "可選 15 分鐘支援諮詢"]],
  ["Month 3", "第 3 個月", ["Anonymous trend comparison", "Campaign impact review", "Management interviews", "Renewal or expansion proposal"], ["匿名趨勢比較", "活動成效回顧", "管理層訪談", "續約或擴展建議"]],
] as const;

const metrics = [
  ["Activation rate", "啟用率"],
  ["Weekly active check-ins", "每週活躍 check-in"],
  ["AI plan completion >=40%", "AI 計劃完成率 >=40%"],
  ["Management report usefulness", "管理報告有用程度"],
  ["Paid renewal or expansion intent", "付費續約或擴展意向"],
] as const;

const pricing = [
  ["Pilot package", "MOP 38,000-88,000", "Base platform, anonymous dashboard, monthly report, and one workshop.", "基礎平台、匿名 dashboard、每月報告及一場工作坊。"],
  ["Standard institution", "MOP 25-45 / user / month", "For 100-1,000 users after pilot conversion.", "適合試點後 100-1,000 人機構部署。"],
  ["Professional institution", "MOP 120,000-360,000 / year", "Annual plan with professional support network and deeper customer success.", "年度方案，包含專業支援網絡及更深入 customer success。"],
  ["White-label / custom", "Custom", "For large groups, APIs, IoT, kiosk, or regional platform partnerships.", "適合大型集團、API、IoT、kiosk 或區域平台合作。"],
] as const;

export default function PilotPage() {
  const { locale } = useI18n();
  const isZh = locale === "zh";

  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />
      <section className="bg-[#1d1d1f] py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2 text-sm font-semibold text-[#5ac8fa] ring-1 ring-white/10">
            <CalendarCheck className="size-4" aria-hidden="true" />
            {isZh ? "Pilot Program" : "Pilot Program"}
          </p>
          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.96]">
            {isZh ? "3 個月由 baseline 去到續約決策。" : "A 3-month path from baseline to renewal decision."}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-white/68">
            {isZh
              ? "最適合學校、酒店、企業部門或公共機構先做小而完整嘅 pilot，證明 HumanOS 可以提升參與、早期支援同匿名管理洞察。"
              : "Best for schools, hotels, enterprise departments, or public institutions that want a small but complete pilot proving engagement, early support, and anonymous management insight."}
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 font-semibold text-white transition hover:bg-[#0066d6]">
            {isZh ? "開始 pilot 對話" : "Start pilot conversation"}
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {months.map(([period, periodZh, items, itemsZh]) => (
            <div key={period} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
              <CalendarCheck className="size-7 text-[#007aff]" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold">{isZh ? periodZh : period}</h2>
              <div className="mt-5 space-y-3">
                {(isZh ? itemsZh : items).map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-[#6e6e73]">
                    <CheckCircle2 className="size-5 shrink-0 text-[#34c759]" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff375f]">
              <Target className="size-4" aria-hidden="true" />
              {isZh ? "成功指標" : "Success metrics"}
            </p>
            <h2 className="mt-4 text-[clamp(2.3rem,5vw,4.8rem)] font-semibold leading-none">
              {isZh ? "Pilot 要量度可續約嘅證據。" : "The pilot measures renewal-ready evidence."}
            </h2>
            <div className="mt-6 grid gap-3">
              {metrics.map(([en, zh]) => (
                <div key={en} className="rounded-[1.2rem] bg-[#f5f5f7] p-4 text-sm font-semibold text-[#1d1d1f] ring-1 ring-black/5">
                  {isZh ? zh : en}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#007aff]">
              <FileText className="size-4" aria-hidden="true" />
              {isZh ? "商業方案" : "Commercial options"}
            </p>
            <div className="mt-6 grid gap-3">
              {pricing.map(([name, price, body, bodyZh]) => (
                <div key={name} className="rounded-[1.2rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                  <p className="text-sm font-semibold text-[#6e6e73]">{name}</p>
                  <p className="mt-2 text-2xl font-semibold text-[#007aff]">{price}</p>
                  <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{isZh ? bodyZh : body}</p>
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
