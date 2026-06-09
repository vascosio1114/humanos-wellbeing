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
    titleZh: "壓力重置",
    body: "Name the pressure, choose one reset, and lower today's cognitive load.",
    bodyZh: "先講出壓力來源，揀一個小重置，減低今日的腦力負荷。",
    xp: 20,
    color: "bg-[#fff0f3] text-[#ff375f]",
  },
  {
    id: "sleep-recovery",
    icon: Moon,
    title: "Sleep Recovery",
    titleZh: "睡眠恢復",
    body: "Protect tonight's wind-down routine and reduce late-night stimulation.",
    bodyZh: "保護今晚的放鬆流程，減少臨睡前刺激，幫身體回復。",
    xp: 25,
    color: "bg-[#f4ecff] text-[#5856d6]",
  },
  {
    id: "focus-sprint",
    icon: Brain,
    title: "Focus Sprint",
    titleZh: "專注衝刺",
    body: "Create one protected focus block with a clear start and stop point.",
    bodyZh: "建立一個有開始、有結束的專注時段，避免被整日壓力拖走。",
    xp: 15,
    color: "bg-[#eaf5ff] text-[#007aff]",
  },
  {
    id: "ask-earlier",
    icon: BellRing,
    title: "Ask Earlier",
    titleZh: "早一步求助",
    body: "Decide who to talk to if the same pressure repeats for three days.",
    bodyZh: "如果同一種壓力連續三日出現，預先決定可以同邊個傾。",
    xp: 30,
    color: "bg-[#fff4df] text-[#b25000]",
  },
] as const;

const coachReplies = [
  "I noticed stress is up and sleep recovery is low. Today's quest should be gentle: one reset, one focus block, and no extra pressure after 9pm.",
  "Good choice. You do not need to fix the whole week today. Complete the two-minute breathing reset and protect one smaller task.",
  "You earned XP because you moved from awareness to action. The streak matters because small signals become clearer over time.",
] as const;

const coachRepliesZh = [
  "我留意到你的壓力上升，而睡眠恢復偏低。今日任務要輕一點：一個重置、一個專注時段，晚上 9 點後不要再加壓。",
  "好選擇。你今日不需要修好整個星期，只要完成兩分鐘呼吸重置，再保護一個較細的任務就夠。",
  "你得到 XP，因為你由覺察行到行動。連續記錄有價值，因為細小訊號會慢慢變得更清楚。",
] as const;

const loopCards = [
  {
    title: "Personalized lessons",
    titleZh: "個人化小課",
    body: "Daily quests adapt to the user's latest stress, sleep, focus, and motivation pattern.",
    bodyZh: "每日任務會按用戶最新的壓力、睡眠、專注和動力狀態調整。",
  },
  {
    title: "Streak and XP",
    titleZh: "連續天數和 XP",
    body: "Progress is visible, lightweight, and habit-forming.",
    bodyZh: "進度清楚、負擔輕，容易養成每日使用習慣。",
  },
  {
    title: "AI coach memory",
    titleZh: "AI 教練記憶",
    body: "The coach can reference recent signals and suggest the next best action.",
    bodyZh: "教練可以參考最近訊號，建議下一個最合適的行動。",
  },
  {
    title: "Privacy boundary",
    titleZh: "私隱邊界",
    body: "Private check-ins and coach chats stay individual unless the user chooses to share.",
    bodyZh: "私人 check-in 和教練對話預設只屬於個人，除非用戶選擇分享。",
  },
];

export default function AgentPage() {
  const { locale } = useI18n();
  const isZh = locale === "zh";
  const [completed, setCompleted] = useState<string[]>(["stress-reset"]);
  const [activeReply, setActiveReply] = useState(0);
  const replies = isZh ? coachRepliesZh : coachReplies;

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
              {isZh ? "HumanOS AI 智能體" : "HumanOS AI Agent"}
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
              {isZh ? "像 Duolingo 一樣的每日 wellbeing 教練。" : "A Duolingo-style coach for wellbeing habits."}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e6e73]">
              {isZh
                ? "用戶不只是看報告，而是完成每日小任務、賺 XP、保持 streak，並得到按壓力、睡眠、專注、情緒和工作量調整的 AI 指引。"
                : "Users do not only read insights. They complete tiny daily quests, earn XP, keep a streak, and get AI guidance that adapts to stress, sleep, focus, mood, and workload signals."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#daily-quest"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0066d6] focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:ring-offset-2"
              >
                {isZh ? "試每日任務" : "Try daily quest"}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="/ai-dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5f5f7] px-6 py-3.5 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:ring-offset-2"
              >
                {isZh ? "查看 AI Dashboard" : "View AI dashboard"}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#1d1d1f] p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <div className="grid gap-3 sm:grid-cols-3">
              <MiniStat icon={Flame} label={isZh ? "連續天數" : "Streak"} value={isZh ? "7 日" : "7 days"} tone="text-[#ff9f0a]" />
              <MiniStat icon={Star} label="XP" value={totalXp} tone="text-[#ffcc00]" />
              <MiniStat icon={Trophy} label={isZh ? "等級" : "Level"} value="3" tone="text-[#34c759]" />
            </div>
            <div className="mt-4 rounded-[1.5rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
              <div className="flex items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#007aff]">
                  <MessageCircle className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#5ac8fa]">{isZh ? "教練提示" : "Coach says"}</p>
                  <p className="mt-3 text-2xl font-semibold leading-tight">{replies[activeReply]}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {replies.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveReply(index)}
                    className={`size-3 rounded-full transition ${activeReply === index ? "bg-[#5ac8fa]" : "bg-white/24"}`}
                    aria-label={isZh ? `顯示教練提示 ${index + 1}` : `Show coach reply ${index + 1}`}
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
            <p className="text-sm font-semibold text-[#007aff]">{isZh ? "每日路徑" : "Daily path"}</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98]">
              {isZh ? "小任務將 AI 洞察變成行動。" : "Tiny quests turn AI insight into action."}
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
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#ff375f]">{isZh ? "智能體循環" : "Agent loop"}</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
              {isZh ? "Check in、學習、行動、再重複。" : "Check in, learn, act, repeat."}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6e6e73]">
              {isZh
                ? "這個智能體令 wellbeing 不再像填表，而像一段每日關係。它獎勵細小行動，同時不會將私人反思暴露給機構。"
                : "The agent makes wellbeing feel less like a form and more like a daily relationship. It rewards small actions without exposing private reflections to institutions."}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {loopCards.map(({ title, titleZh, body, bodyZh }) => (
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
