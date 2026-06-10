"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import {
  Bot,
  Brain,
  Building2,
  GraduationCap,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

const quickPrompts = {
  en: [
    "What is HumanOS?",
    "How does the pilot work?",
    "What data stays private?",
    "How much does it cost?",
  ],
  zh: [
    "HumanOS 係咩？",
    "Pilot 點樣做？",
    "咩資料保持私密？",
    "收費幾多？",
  ],
};

const intro = {
  en: "Hi, I am the HumanOS AI Guide. Ask me how the B2B wellbeing intelligence platform works for schools, hotels, enterprises, and public institutions.",
  zh: "你好，我係 HumanOS AI Guide。你可以問我 HumanOS 點樣幫學校、酒店、企業同公共機構做 B2B wellbeing intelligence。",
};

function includesAny(source: string, terms: string[]) {
  return terms.some((term) => source.includes(term));
}

function buildReply(input: string, locale: "en" | "zh") {
  const text = input.toLowerCase();
  const isZh = locale === "zh";

  if (includesAny(text, ["suicide", "self-harm", "kill myself", "harm myself", "自殺", "傷害自己", "即時危險"])) {
    return isZh
      ? "如果你或身邊人有即時危險，請即刻聯絡當地緊急服務、可信任嘅成年人、學校輔導員或合資格專業人士。HumanOS 只做 wellbeing awareness 同早期支援提示，唔係危機介入或醫療診斷工具。"
      : "If you or someone nearby may be in immediate danger, contact local emergency services, a trusted adult, school counselor, or licensed support professional now. HumanOS supports wellbeing awareness and early support routing, but it is not crisis intervention or medical diagnosis.";
  }

  if (includesAny(text, ["privacy", "private", "anonymous", "data", "私隱", "匿名", "資料", "私人"])) {
    return isZh
      ? "HumanOS 係 privacy-first：個人日記、私人反思、個人 AI 對話、可識別 wellbeing 報告唔會俾學校或僱主睇。機構只會睇匿名、聚合、達到樣本門檻嘅趨勢，例如壓力、睡眠、專注、工作量、參與率同活動成效。"
      : "HumanOS is privacy-first. Personal journals, private reflections, individual AI chats, and identifiable wellbeing reports are not shown to schools or employers. Institutions only see anonymized, aggregated trends that meet sample thresholds, such as stress, sleep, focus, workload, participation, and campaign impact.";
  }

  if (includesAny(text, ["pilot", "price", "pricing", "cost", "收費", "價錢", "幾多", "試點"])) {
    return isZh
      ? "最建議由 3 個月 pilot 開始：第 1-2 週做需求訪談、私隱同意、baseline 問卷同帳戶設定；第 2 個月推出 AI 個人計劃、check-in、工作坊及 15 分鐘諮詢；第 3 個月做匿名趨勢報告同續約建議。Pilot package 係 MOP 38,000-88,000；標準機構方案係 MOP 25-45 / user / month；Professional institution 係 MOP 120,000-360,000 / year。"
      : "The recommended entry is a 3-month pilot: weeks 1-2 cover needs interviews, privacy consent, baseline questionnaire, and account setup; month 2 launches AI personal plans, check-ins, workshop, and optional 15-minute consults; month 3 delivers anonymous trend reporting and renewal recommendations. Pilot package: MOP 38,000-88,000. Standard institution: MOP 25-45/user/month. Professional institution: MOP 120,000-360,000/year.";
  }

  if (includesAny(text, ["b2b", "organization", "company", "enterprise", "hr", "hotel", "resort", "school", "學校", "企業", "酒店", "機構", "hr"])) {
    return isZh
      ? "HumanOS 係 B2B-first。佢幫學校、企業、酒店、綜合度假村同公共機構，將壓力、睡眠、專注、工作量、情緒、出席同參與率，轉成早期支援智能、匿名 dashboard、每月管理報告同資源配置建議。"
      : "HumanOS is B2B-first. It helps schools, enterprises, hotels, resorts, and public institutions turn stress, sleep, focus, workload, mood, attendance, and participation into early-support intelligence, anonymous dashboards, monthly management reports, and resource allocation recommendations.";
  }

  if (includesAny(text, ["agent", "duolingo", "coach", "b2c", "智能體", "個人", "任務"])) {
    return isZh
      ? "個人 Agent 係 HumanOS 嘅信任入口，似 Duolingo 咁有每日小任務、streak、XP 同 AI Coach。佢幫用戶完成 1-3 個可行 micro-plan；私人內容只屬於用戶，機構只收到匿名聚合趨勢。"
      : "The personal agent is the trust layer of HumanOS. Like Duolingo, it uses daily quests, streaks, XP, and an AI coach. It gives users 1-3 practical micro-actions, while private content stays with the user and institutions only receive anonymous aggregated trends.";
  }

  if (includesAny(text, ["technology", "rag", "agentic", "architecture", "技術", "架構", "rag"])) {
    return isZh
      ? "HumanOS 唔係一個 chatbot，而係 architecture：時間序列 wellbeing layer、RAG 福祉知識庫、多 agent workflow、匿名 dashboard、角色權限、樣本門檻同小群組隱藏。核心流程係：監測 → 預測 → 規劃 → 介入 → 評估。"
      : "HumanOS is not a chatbot. It is an architecture: time-series wellbeing layer, RAG wellbeing knowledge base, multi-agent workflows, anonymous dashboards, role permissions, sample thresholds, and small-group suppression. The core loop is Monitor → Predict → Plan → Intervene → Evaluate.";
  }

  return isZh
    ? "HumanOS 係 B2B-first wellbeing intelligence layer。個人得到私密 AI 支援，機構得到匿名 dashboard 同每月管理報告。核心價值係早期發現風險、安排支援、量度活動成效，同時避免變成監控工具。"
    : "HumanOS is a B2B-first wellbeing intelligence layer. Individuals receive private AI support, while institutions receive anonymous dashboards and monthly management reports. The core value is earlier risk visibility, better support planning, measurable campaign impact, and privacy-safe operation.";
}

export function AIChatWidget() {
  const { locale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: intro[locale] },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const prompts = useMemo(() => quickPrompts[locale], [locale]);

  function sendMessage(value: string) {
    const cleanValue = value.trim();
    if (!cleanValue) return;

    setMessages((current) => [
      ...current,
      { role: "user", content: cleanValue },
      { role: "assistant", content: buildReply(cleanValue, locale) },
    ]);
    setInput("");
    window.setTimeout(() => inputRef.current?.focus(), 80);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex max-w-[calc(100vw-2.5rem)] flex-col items-end gap-3">
      {isOpen ? (
        <section
          className="w-[min(420px,calc(100vw-2.5rem))] overflow-hidden rounded-[28px] border border-black/10 bg-white/95 text-[#1d1d1f] shadow-2xl shadow-black/20 backdrop-blur-2xl"
          aria-label="HumanOS AI chat"
        >
          <div className="border-b border-black/5 bg-[#f5f5f7] px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-[#007aff] text-white shadow-lg shadow-[#007aff]/25">
                  <Bot className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold">HumanOS AI Guide</p>
                  <p className="mt-0.5 text-xs font-medium text-[#6e6e73]">
                    {locale === "zh" ? "B2B wellbeing intelligence demo" : "B2B wellbeing intelligence demo"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid size-9 place-items-center rounded-full text-[#6e6e73] transition hover:bg-white hover:text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#007aff]"
                aria-label="Close HumanOS AI Guide"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                [Brain, locale === "zh" ? "早期風險" : "Early risk"],
                [GraduationCap, locale === "zh" ? "學校" : "Schools"],
                [Building2, locale === "zh" ? "機構" : "Teams"],
              ].map(([Icon, label]) => {
                const TypedIcon = Icon as typeof Brain;
                return (
                  <div
                    key={String(label)}
                    className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-[11px] font-semibold text-[#6e6e73] ring-1 ring-black/5"
                  >
                    <TypedIcon className="size-3.5 text-[#34c759]" aria-hidden="true" />
                    <span className="truncate">{String(label)}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="max-h-[420px] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user" ? "bg-[#007aff] text-white" : "bg-[#f5f5f7] text-[#1d1d1f]"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-black/5 px-4 py-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {prompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="shrink-0 rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-[#1d1d1f] transition hover:border-[#007aff] hover:text-[#007aff] focus:outline-none focus:ring-2 focus:ring-[#007aff]"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-full bg-[#f5f5f7] p-1.5 ring-1 ring-black/5">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={locale === "zh" ? "問 HumanOS 點樣運作..." : "Ask how HumanOS works..."}
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-[#86868b]"
              />
              <button
                type="submit"
                className="grid size-10 place-items-center rounded-full bg-[#007aff] text-white transition hover:bg-[#0066d6] focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:ring-offset-2"
                aria-label="Send message"
              >
                <Send className="size-4" aria-hidden="true" />
              </button>
            </form>
            <p className="mt-3 flex items-center gap-2 text-[11px] leading-5 text-[#86868b]">
              <ShieldCheck className="size-3.5 shrink-0 text-[#34c759]" aria-hidden="true" />
              {locale === "zh"
                ? "Demo chatbot：提供 wellbeing guidance，唔係醫療診斷。"
                : "Demo chatbot: wellbeing guidance, not medical diagnosis."}
            </p>
          </div>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="group flex items-center gap-3 rounded-full bg-[#1d1d1f] px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-label="Open HumanOS AI Guide"
      >
        <span className="relative grid size-10 place-items-center rounded-full bg-white text-[#007aff]">
          <MessageCircle className="size-5" aria-hidden="true" />
          <span className="absolute -right-0.5 -top-0.5 size-3 rounded-full bg-[#34c759] ring-2 ring-[#1d1d1f]" />
        </span>
        <span className="hidden sm:block">
          {locale === "zh" ? "問 AI Guide" : "Ask AI Guide"}
        </span>
        <Sparkles className="hidden size-4 text-[#bf5af2] sm:block" aria-hidden="true" />
      </button>
    </div>
  );
}
