"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BellRing,
  Brain,
  CheckCircle2,
  Flame,
  HeartPulse,
  LockKeyhole,
  MessageCircle,
  Moon,
  Sparkles,
  Star,
  Trophy,
  Zap,
} from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import { useI18n } from "@/lib/i18n";

const lessons = [
  {
    id: "stress-reset",
    icon: HeartPulse,
    title: "Stress Reset",
    titleZh: "壓力 Reset",
    body: "Name the pressure, choose one reset, and reduce today's cognitive load.",
    bodyZh: "講清楚壓力來源，揀一個 reset，減低今日認知負荷。",
    xp: 20,
    color: "bg-[#fff0f3] text-[#ff375f]",
  },
  {
    id: "sleep-recovery",
    icon: Moon,
    title: "Sleep Recovery",
    titleZh: "睡眠恢復",
    body: "Protect tonight's wind-down routine and reduce late-night stimulation.",
    bodyZh: "保護今晚放鬆 routine，減少夜晚刺激同額外壓力。",
    xp: 25,
    color: "bg-[#f4ecff] text-[#5856d6]",
  },
  {
    id: "focus-block",
    icon: Brain,
    title: "Focus Block",
    titleZh: "專注時段",
    body: "Create one protected focus block with a clear start and stop point.",
    bodyZh: "建立一段有開始同結束點嘅專注時間。",
    xp: 15,
    color: "bg-[#eaf5ff] text-[#007aff]",
  },
  {
    id: "ask-earlier",
    icon: BellRing,
    title: "Ask Earlier",
    titleZh: "更早求助",
    body: "Choose who to talk to if the same pressure repeats for three days.",
    bodyZh: "如果同一種壓力連續三日出現，先揀定可以同邊個傾。",
    xp: 30,
    color: "bg-[#fff4df] text-[#b25000]",
  },
] as const;

const replies = [
  {
    en: "I noticed stress is up and sleep recovery is low. Today's plan should be gentle: one reset, one focus block, and no extra pressure after 9pm.",
    zh: "我見到壓力上升，而睡眠恢復偏低。今日計劃要輕一點：一個 reset、一段專注時間，晚上 9 點後唔再加壓。",
  },
  {
    en: "You do not need to fix the whole week today. Complete the two-minute reset and protect one smaller task.",
    zh: "你唔需要今日修好成個星期。先完成兩分鐘 reset，再保護一件細任務。",
  },
  {
    en: "Small actions matter because they turn awareness into a pattern. The streak helps HumanOS understand what support works.",
    zh: "小行動重要，因為佢將 awareness 變成 pattern。連續 streak 會幫 HumanOS 理解邊種支援有效。",
  },
] as const;

const agentLoop = [
  ["Monitor", "監測", "Read personal check-ins across stress, sleep, focus, mood, workload, and energy.", "讀取個人 check-in：壓力、睡眠、專注、情緒、工作量及能量。"],
  ["Predict", "預測", "Spot rising recovery risk before the user feels overwhelmed.", "喺用戶覺得頂唔順之前，及早發現恢復風險。"],
  ["Plan", "規劃", "Suggest one to three small tasks instead of a long generic plan.", "建議 1-3 個小任務，而唔係一大份籠統計劃。"],
  ["Evaluate", "評估", "Learn which actions the user completed and which support felt useful.", "學習用戶完成咗邊啲行動，以及邊種支援最有用。"],
] as const;

export default function AgentPage() {
  const { locale } = useI18n();
  const isZh = locale === "zh";
  const [completed, setCompleted] = useState<string[]>(["stress-reset"]);
  const [activeReply, setActiveReply] = useState(0);

  const totalXp = useMemo(
    () => lessons.filter((lesson) => completed.includes(lesson.id)).reduce((sum, lesson) => sum + lesson.xp, 0),
    [completed],
  );

  function toggleLesson(id: string) {
    setCompleted((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#eaf5ff] px-4 py-2 text-sm font-semibold text-[#007aff] ring-1 ring-black/5">
              <Sparkles className="size-4" aria-hidden="true" />
              HumanOS AI Agent
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
              {isZh ? "像 Duolingo 一樣嘅每日福祉智能體。" : "A Duolingo-style wellbeing agent for daily action."}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e6e73]">
              {isZh
                ? "Agent 係 HumanOS 嘅個人信任入口：用戶做小任務、賺 XP、保持 streak，AI 會根據壓力、睡眠、專注、情緒及工作量調整每日支援。私人內容只屬於用戶。"
                : "The agent is the personal trust layer of HumanOS: users complete tiny quests, earn XP, keep a streak, and get AI support adapted to stress, sleep, focus, mood, and workload. Private content stays with the user."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#daily-quest" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0066d6]">
                {isZh ? "試每日任務" : "Try daily quest"}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link href="/ai-dashboard" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5f5f7] px-6 py-3.5 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md">
                {isZh ? "查看機構 Dashboard" : "View institution dashboard"}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#1d1d1f] p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <div className="grid gap-3 sm:grid-cols-3">
              <MiniStat icon={Flame} label={isZh ? "Streak" : "Streak"} value={isZh ? "7 日" : "7 days"} tone="text-[#ff9f0a]" />
              <MiniStat icon={Star} label="XP" value={totalXp} tone="text-[#ffcc00]" />
              <MiniStat icon={Trophy} label={isZh ? "等級" : "Level"} value="3" tone="text-[#34c759]" />
            </div>
            <div className="mt-4 rounded-[1.5rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
              <div className="flex items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#007aff]">
                  <MessageCircle className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#5ac8fa]">{isZh ? "AI Coach" : "Coach says"}</p>
                  <p className="mt-3 text-2xl font-semibold leading-tight">{isZh ? replies[activeReply].zh : replies[activeReply].en}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {replies.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveReply(index)}
                    className={`size-3 rounded-full transition ${activeReply === index ? "bg-[#5ac8fa]" : "bg-white/24"}`}
                    aria-label={isZh ? `顯示 AI Coach 回覆 ${index + 1}` : `Show coach reply ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="daily-quest" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#007aff]">{isZh ? "每日任務" : "Daily path"}</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98]">
              {isZh ? "將 AI 洞察變成可以完成嘅小行動。" : "Tiny quests turn AI insight into action."}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {lessons.map(({ id, icon: Icon, title, titleZh, body, bodyZh, xp, color }, index) => {
              const isDone = completed.includes(id);
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => toggleLesson(id)}
                  className={`group rounded-[1.8rem] bg-white p-6 text-left shadow-sm ring-1 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.10)] ${
                    isDone ? "ring-[#34c759]" : "ring-black/5"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className={`grid size-14 place-items-center rounded-3xl ${color}`}>
                      <Icon className="size-7" aria-hidden="true" />
                    </div>
                    <span className="grid size-8 place-items-center rounded-full bg-[#f5f5f7] text-sm font-semibold text-[#6e6e73]">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold leading-none">{isZh ? titleZh : title}</h3>
                  <p className="mt-4 min-h-28 text-sm leading-7 text-[#6e6e73]">{isZh ? bodyZh : body}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#007aff]">
                      <Zap className="size-4" aria-hidden="true" />
                      {xp} XP
                    </span>
                    {isDone ? (
                      <CheckCircle2 className="size-6 text-[#34c759]" aria-hidden="true" />
                    ) : (
                      <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-semibold text-[#6e6e73]">
                        {isZh ? "開始" : "Start"}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#ff375f]">{isZh ? "Agent loop" : "Agent loop"}</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
              {isZh ? "監測、預測、規劃，再由用戶完成。" : "Monitor, predict, plan, then help the user act."}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6e6e73]">
              {isZh
                ? "呢個 agent 令 B2B 平台唔似表格，而似每日支援關係。機構唔會睇到私人對話，只會睇匿名聚合趨勢。"
                : "The agent makes the B2B platform feel less like a form and more like a daily support relationship. Institutions never see private chats, only anonymous aggregated trends."}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {agentLoop.map(([title, titleZh, body, bodyZh]) => (
              <div key={title} className="rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                <LockKeyhole className="size-6 text-[#007aff]" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-semibold">{isZh ? titleZh : title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{isZh ? bodyZh : body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function MiniStat({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof Flame;
  label: string;
  value: string | number;
  tone: string;
}) {
  return (
    <div className="rounded-[1.25rem] bg-white/[0.08] p-4 ring-1 ring-white/10">
      <Icon className={`size-6 ${tone}`} aria-hidden="true" />
      <p className="mt-6 text-sm font-semibold text-white/58">{label}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
    </div>
  );
}
