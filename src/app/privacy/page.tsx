"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, LockKeyhole, ShieldCheck, Siren, UsersRound, XCircle } from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import { privacyRules } from "@/lib/proposal-data";

const institutionCanSee = [
  "匿名部門、班級或團隊趨勢",
  "壓力、睡眠、恢復、參與率等群體變化",
  "活動與工作坊成效",
  "每月可行動支援建議",
  "符合最低樣本門檻的統計報告",
] as const;

const institutionCannotSee = [
  "個人日記與反思內容",
  "個人 AI chat 對話",
  "個人分數或原始答案",
  "心理諮詢或專業支援紀錄",
  "可反推個人身份的小樣本資料",
] as const;

export default function PrivacyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="relative isolate bg-white">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_20%_10%,rgba(52,199,89,0.18),transparent_32%),radial-gradient(circle_at_78%_12%,rgba(0,122,255,0.15),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-5xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#eefcf3] px-4 py-2 text-sm font-semibold text-[#248a3d] shadow-sm ring-1 ring-black/5">
              <ShieldCheck className="size-4" aria-hidden="true" />
              Privacy-first by design
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
              HumanOS 幫機構看見趨勢，不是看見個人。
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-[#6e6e73]">
              根據 proposal 定位，HumanOS 是健康支援基礎設施，不是監工系統。平台遵循澳門《個人資料保護法》第 8/2005 號法律精神，以明確同意、匿名優先、最小化資料與角色權限作為產品底層。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/business-plan"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:bg-[#0066d6]"
              >
                查看商業計劃
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="/organizations"
                className="inline-flex items-center justify-center rounded-full bg-[#f5f5f7] px-6 py-3.5 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md"
              >
                查看機構方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 lg:grid-cols-2 lg:px-8">
          <VisibilityCard
            icon={<UsersRound className="size-7 text-[#007aff]" aria-hidden="true" />}
            title="機構可以看到"
            items={institutionCanSee}
            positive
          />
          <VisibilityCard
            icon={<LockKeyhole className="size-7 text-[#ff3b30]" aria-hidden="true" />}
            title="機構不可以看到"
            items={institutionCannotSee}
          />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Data Governance" title="七條私隱與負責任使用規則" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {privacyRules.map(([rule, body]) => (
              <div key={rule} className="rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                <ShieldCheck className="size-7 text-[#34c759]" aria-hidden="true" />
                <h2 className="mt-6 text-2xl font-semibold">{rule}</h2>
                <p className="mt-4 text-sm leading-7 text-[#6e6e73]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.76fr_1.24fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#5ac8fa]">Non-medical boundary</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
              只做早期意識、支援建議與轉介提示。
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-white/[0.08] p-6 ring-1 ring-white/10">
              <XCircle className="size-7 text-[#ff453a]" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-semibold">HumanOS 不做</h3>
              <p className="mt-4 text-sm leading-7 text-white/68">
                不提供診斷、不替代醫生或心理治療、不提供處方、不作保險核保或個人績效評分。
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-white/[0.08] p-6 ring-1 ring-white/10">
              <Siren className="size-7 text-[#ffd60a]" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-semibold">高風險情況</h3>
              <p className="mt-4 text-sm leading-7 text-white/68">
                如出現自傷、急性危機或嚴重風險訊號，平台只作緊急支援提示與專業協助引導，並按機構事前同意流程處理。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function VisibilityCard({
  icon,
  title,
  items,
  positive = false,
}: {
  icon: ReactNode;
  title: string;
  items: readonly string[];
  positive?: boolean;
}) {
  return (
    <div className="rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
      <div className="flex items-center gap-3">
        {icon}
        <h2 className="text-3xl font-semibold">{title}</h2>
      </div>
      <div className="mt-7 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 rounded-[1.1rem] bg-[#f5f5f7] p-4 text-sm leading-7 text-[#6e6e73]">
            {positive ? (
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#34c759]" aria-hidden="true" />
            ) : (
              <XCircle className="mt-0.5 size-5 shrink-0 text-[#ff3b30]" aria-hidden="true" />
            )}
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-sm font-semibold text-[#007aff]">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98]">
        {title}
      </h2>
    </div>
  );
}
