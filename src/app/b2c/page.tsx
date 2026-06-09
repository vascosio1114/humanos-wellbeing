"use client";

import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  Brain,
  HeartPulse,
  LockKeyhole,
  Moon,
  ScanHeart,
  Sparkles,
  Zap,
} from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import { useI18n } from "@/lib/i18n";

const b2cMoments = [
  {
    icon: HeartPulse,
    title: "Understand stress",
    titleZh: "理解壓力",
    body: "Turn vague pressure into simple signals, reflection, and next steps.",
    bodyZh: "將模糊壓力轉成簡單訊號、反思和下一步。",
  },
  {
    icon: Moon,
    title: "Recover sleep",
    titleZh: "恢復睡眠",
    body: "Notice sleep patterns early and build a more realistic recovery routine.",
    bodyZh: "提早看見睡眠模式，建立更現實的恢復習慣。",
  },
  {
    icon: Brain,
    title: "Protect focus",
    titleZh: "保護專注",
    body: "Connect focus, workload, motivation, and energy into a daily support plan.",
    bodyZh: "將專注、工作量、動力和能量連成每日支援計劃。",
  },
  {
    icon: BellRing,
    title: "Ask earlier",
    titleZh: "早一步求助",
    body: "Help users know when to slow down, reset, or talk to someone they trust.",
    bodyZh: "幫用戶知道何時要慢下來、重置，或同信任的人傾。",
  },
];

const b2cFlow = [
  ["Check in", "Check in", "A one-minute private check-in about stress, sleep, focus, mood, workload, and energy.", "一分鐘私人 check-in，了解壓力、睡眠、專注、情緒、工作量和能量。"],
  ["Understand", "理解", "HumanOS explains what may be affecting the person today without making medical claims.", "HumanOS 解釋今日可能影響用戶的因素，但不作醫療診斷。"],
  ["Act", "行動", "The user gets a small support plan: reset, sleep recovery, focus protection, or help-seeking.", "用戶得到一個細小支援計劃：重置、睡眠恢復、保護專注或求助。"],
];

const b2cUseCases = [
  ["Students preparing for exams", "準備考試的學生"],
  ["Young professionals under pressure", "受壓的年輕專業人士"],
  ["People trying to improve sleep and recovery", "想改善睡眠和恢復的人"],
  ["Anyone who wants a private wellbeing companion", "想要私人 wellbeing 伙伴的人"],
];

export default function B2CPage() {
  const { locale } = useI18n();
  const isZh = locale === "zh";

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#eaf5ff] px-4 py-2 text-sm font-semibold text-[#007aff] ring-1 ring-black/5">
              <ScanHeart className="size-4" aria-hidden="true" />
              {isZh ? "HumanOS B2C" : "HumanOS B2C"}
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
              {isZh ? "日常生活入面的私人 wellbeing 伙伴。" : "A private wellbeing companion for daily life."}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e6e73]">
              {isZh
                ? "B2C HumanOS 直接同個人對話：理解身體和心理正在發生甚麼，得到簡單 AI 指引，在壓力變得太大之前建立更健康的模式。"
                : "B2C HumanOS speaks directly to the individual: understand what is happening in your body and mind, get simple AI-guided support, and build healthier patterns before pressure becomes too much."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/students/check-in"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0066d6] focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:ring-offset-2"
              >
                {isZh ? "試 Check-in" : "Try check-in"}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="/students"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5f5f7] px-6 py-3.5 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:ring-offset-2"
              >
                {isZh ? "查看學生 demo" : "View student demo"}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#f5f5f7] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.13)] ring-1 ring-black/5">
            <div className="rounded-[1.6rem] bg-white p-5 ring-1 ring-black/5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#6e6e73]">{isZh ? "今日" : "Today"}</p>
                  <p className="mt-2 text-6xl font-semibold">74</p>
                  <p className="mt-3 text-sm font-semibold text-[#248a3d]">{isZh ? "小恢復計劃已準備" : "Small recovery plan ready"}</p>
                </div>
                <div className="grid size-28 place-items-center rounded-full bg-[conic-gradient(#34c759_0_38%,#007aff_38%_70%,#ff9f0a_70%_88%,#e5e5ea_88%_100%)] p-2">
                  <div className="grid size-full place-items-center rounded-full bg-white text-xs font-semibold">
                    {isZh ? "私人" : "Private"}
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-[1.35rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                <Sparkles className="size-6 text-[#7d35ff]" aria-hidden="true" />
                <p className="mt-8 text-2xl font-semibold leading-tight">
                  {isZh
                    ? "你的壓力正在上升，而睡眠恢復偏低。今日保持輕一點，保護一個深度專注時段。"
                    : "Your stress is rising while sleep recovery is low. Keep today lighter and protect one deep-focus block."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#007aff]">{isZh ? "B2C 產品訊息" : "What the B2C product says"}</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98]">
              {isZh ? "HumanOS 幫一個人，一日一日理解自己。" : "HumanOS helps one person understand one day at a time."}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {b2cMoments.map(({ icon: Icon, title, titleZh, body, bodyZh }) => (
              <div key={title} className="rounded-[1.8rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
                <div className="grid size-14 place-items-center rounded-3xl bg-[#eaf5ff] text-[#007aff]">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-none">{isZh ? titleZh : title}</h3>
                <p className="mt-5 text-base leading-7 text-[#6e6e73]">{isZh ? bodyZh : body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#ff375f]">{isZh ? "體驗" : "Experience"}</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
              {isZh ? "簡單到可以成為每日習慣。" : "Simple enough for a daily habit."}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6e6e73]">
              {isZh
                ? "消費者版本要輕、私人、即刻有用。它不是給管理者看的 dashboard，而是給用戶自己的支援循環。"
                : "The consumer version should feel lightweight, private, and immediately useful. It is not a dashboard for managers; it is a support loop for the user."}
            </p>
          </div>
          <div className="space-y-3">
            {b2cFlow.map(([step, stepZh, body, bodyZh]) => (
              <div key={step} className="rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                <p className="text-xl font-semibold">{isZh ? stepZh : step}</p>
                <p className="mt-3 text-sm leading-7 text-[#6e6e73]">{isZh ? bodyZh : body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#5ac8fa]">{isZh ? "適合誰" : "Who it is for"}</p>
            <h2 className="mt-4 text-[clamp(2.6rem,6vw,5.8rem)] font-semibold leading-none">
              {isZh ? "B2C 由個人開始，不是由機構開始。" : "B2C starts with the person, not the institution."}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {b2cUseCases.map(([useCase, useCaseZh]) => (
              <div key={useCase} className="rounded-[1.4rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
                <Zap className="size-5 text-[#ffcc00]" aria-hidden="true" />
                <p className="mt-8 text-lg font-semibold">{isZh ? useCaseZh : useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <LockKeyhole className="mx-auto size-9 text-[#007aff]" aria-hidden="true" />
          <h2 className="mt-5 text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-none">
            {isZh ? "B2C 訊息：私人 check-in、個人洞察、實用支援。" : "B2C message: private check-ins, personal insight, practical support."}
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
