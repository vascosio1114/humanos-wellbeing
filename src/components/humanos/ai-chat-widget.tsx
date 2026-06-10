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
    "What assessments does it use?",
    "What is the B2B business model?",
    "How does the school pilot work?",
  ],
  zh: [
    "HumanOS 係咩？",
    "用咩問卷框架？",
    "B2B 點樣賺錢？",
    "學校點樣用？",
  ],
};

const intro = {
  en: "Hi, I am the HumanOS AI Guide. Ask me how the wellbeing intelligence layer works for students, schools, HR teams, and high-pressure organizations.",
  zh: "你好，我係 HumanOS AI Guide。你可以問我 HumanOS 點樣幫學生、學校、HR 團隊同高壓機構做 early support intelligence。",
};

function includesAny(source: string, terms: string[]) {
  return terms.some((term) => source.includes(term));
}

function buildReply(input: string, locale: "en" | "zh") {
  const text = input.toLowerCase();
  const isZh = locale === "zh";

  if (
    includesAny(text, [
      "suicide",
      "self-harm",
      "kill myself",
      "harm myself",
      "自殺",
      "傷害自己",
      "唔想生存",
      "想死",
    ])
  ) {
    return isZh
      ? "如果你或身邊人而家有即時危險，請即刻聯絡當地緊急服務、學校輔導員、信任嘅成年人或專業支援。HumanOS 可以做壓力覺察同早期支援提示，但唔係危機介入或醫療診斷工具。"
      : "If you or someone nearby may be in immediate danger, contact local emergency services, a trusted adult, school counselor, or licensed support professional now. HumanOS can support stress awareness and early support routing, but it is not a crisis intervention or medical diagnosis tool.";
  }

  if (includesAny(text, ["privacy", "private", "anonymous", "data", "私隱", "匿名", "資料"])) {
    return isZh
      ? "HumanOS 嘅核心係 privacy-first：學生或員工嘅私人反思、AI 對話、個人報告唔會俾學校或僱主睇。機構只會見到匿名、分組後嘅趨勢，例如壓力上升、睡眠下降、參與率同活動成效；太細嘅群組會隱藏，減低被辨認風險。"
      : "HumanOS is privacy-first. Private reflections, individual AI chats, and personal reports stay with the user. Institutions only see anonymized group trends such as rising stress, sleep decline, participation, and campaign impact. Small groups are suppressed to reduce identity inference risk.";
  }

  if (
    includesAny(text, [
      "business",
      "b2b",
      "pricing",
      "price",
      "revenue",
      "pilot",
      "commercial",
      "賺錢",
      "商業",
      "定價",
      "收費",
      "收入",
      "試點",
    ])
  ) {
    return isZh
      ? "最新 proposal 將 HumanOS 定位為 B2B 優先、B2C 延展。收入包括三個月試點包 MOP 38,000-88,000、機構標準版 MOP 25-45/人/月、機構專業版 MOP 120,000-360,000/年、健康檢測亭方案、專業支援服務包、白標/API 合作。試點 KPI 包括週活躍打卡率 ≥55%、個人計劃完成率 ≥40%、管理端每月使用 ≥2 次、滿意度 ≥4/5。"
      : "The latest proposal positions HumanOS as B2B-first with B2C extension. Revenue comes from 3-month pilots at MOP 38,000-88,000, standard institution plans at MOP 25-45/user/month, pro annual plans at MOP 120,000-360,000, health kiosk packages, professional support services, and white-label/API partnerships. Pilot KPIs include weekly check-in rate >=55%, action plan completion >=40%, admin usage >=2/month, and satisfaction >=4/5.";
  }

  if (
    includesAny(text, [
      "assessment",
      "questionnaire",
      "survey",
      "who-5",
      "wemwbs",
      "pss",
      "phq",
      "gad",
      "burnout",
      "olbi",
      "mbi",
      "copsoq",
      "hse",
      "uwes",
      "問卷",
      "量表",
      "框架",
      "倦怠",
    ])
  ) {
    return isZh
      ? "HumanOS 嘅 assessment library 參考 WHO-5 / WEMWBS 做 Wellbeing Score、PSS-10 做 Stress Index、OLBI / MBI 方向做 Burnout Awareness、COPSOQ / HSE / UWES / Psychological Safety 做 Workplace Module。重點係：用自家非 proprietary 題目，唔展示診斷，只展示 wellbeing awareness、stress trend、support suggestion，同需要時 referral suggestion。"
      : "HumanOS uses an assessment library inspired by WHO-5 / WEMWBS for Wellbeing Score, PSS-10 for Stress Index, OLBI / MBI-style concepts for Burnout Awareness, and COPSOQ / HSE / UWES / Psychological Safety for workplace intelligence. It uses custom non-proprietary items and shows awareness, trends, support suggestions, and referral suggestions, not diagnosis.";
  }

  if (includesAny(text, ["school", "student", "class", "campus", "university", "學生", "學校", "班級", "大學"])) {
    return isZh
      ? "學校版本以三個月試點開始：每日/每週打卡建立基線，學生得到 AI 個人計劃及支援入口；校方只睇匿名學生趨勢、班級/年級風險熱點、月度福祉報告及轉介建議，不會睇個人日記、AI 對話或個人分數。"
      : "The school model starts with a 3-month pilot: daily/weekly check-ins build a baseline, students receive AI personal plans and support access, while schools only see anonymous trends, class/cohort risk hotspots, monthly wellbeing reports, and referral suggestions.";
  }

  if (
    includesAny(text, [
      "organization",
      "company",
      "enterprise",
      "hr",
      "hotel",
      "resort",
      "casino",
      "workforce",
      "機構",
      "企業",
      "博企",
      "酒店",
      "員工",
      "輪班",
    ])
  ) {
    return isZh
      ? "機構方案適合澳門博企、酒店、企業、公共及社福機構。HumanOS 將員工健康打卡、睡眠、壓力、飲水、運動、久坐、工時、排班、活動成效等訊號，轉成匿名團隊熱點、福利資源配置建議、月度管理報告及專業支援分流。"
      : "The organization model fits Macao integrated resorts, hotels, companies, and public/social-service institutions. HumanOS converts check-ins, sleep, stress, hydration, activity, sedentary time, shifts, and campaign outcomes into anonymous team hotspots, welfare allocation suggestions, monthly reports, and professional support routing.";
  }

  if (includesAny(text, ["demo", "check-in", "test", "report", "flow", "測試", "報告", "點用"])) {
    return isZh
      ? "Demo flow 係：用戶做 60 秒 check-in，系統生成個人 wellbeing score、風險提示、AI daily plan；同時匿名更新學校或機構 dashboard，展示趨勢、群組風險同活動成效。"
      : "The demo flow is simple: a user completes a 60-second check-in, receives a personal wellbeing score, risk signals, and an AI daily plan. The institution dashboard updates only with anonymized trends, group risk signals, and campaign outcomes.";
  }

  if (includesAny(text, ["pilot", "price", "pricing", "cost", "funding", "投資", "收費", "價錢", "試點"])) {
    return isZh
      ? "最適合比賽同早期銷售嘅定位係 3 個月 pilot：先幫學校或機構建立 baseline，再追蹤 weekly wellbeing trend、參與率、支援需求同 campaign 效果。收費可以由學生/機構 pilot package 開始，再升級做年度 dashboard + AI support plan。"
      : "The strongest early commercial path is a 3-month pilot: establish a baseline, track weekly wellbeing trends, participation, support needs, and campaign impact. Pricing can begin with student or organization pilot packages, then expand into annual dashboards and AI support plans.";
  }

  if (includesAny(text, ["research", "medical", "clinical", "diagnosis", "醫療", "診斷", "研究"])) {
    return isZh
      ? "HumanOS 應該定位做 research-informed wellbeing intelligence，而唔係醫療診斷。佢可以追蹤壓力、睡眠、專注、情緒平衡、動力同工作量趨勢，幫人及早留意風險，再連接學校或職場既有支援。"
      : "HumanOS should be positioned as research-informed wellbeing intelligence, not a medical diagnosis product. It tracks stress, sleep, focus, emotional balance, motivation, and workload trends, then helps people notice risks earlier and connect with existing support channels.";
  }

  return isZh
    ? "HumanOS 係 AI 驅動嘅工學共生健康智能平台：B2B 優先，服務學校、企業、酒店及公共機構。核心主線係「監測 → 預測 → 規劃 → 介入 → 評估」，將個人健康訊號轉化為私密 AI 計劃、匿名機構洞察、福利資源配置同專業支援閉環。"
    : "HumanOS is an AI-powered wellbeing intelligence infrastructure for schools, companies, hotels, and public institutions. Its core loop is Monitor -> Predict -> Plan -> Intervene -> Evaluate, turning personal health signals into private AI plans, anonymous institutional insights, welfare allocation, and professional support loops.";
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
                    {locale === "zh" ? "Wellbeing intelligence demo" : "Wellbeing intelligence demo"}
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
                [Brain, locale === "zh" ? "早期風險" : "Early Risk"],
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
                    message.role === "user"
                      ? "bg-[#007aff] text-white"
                      : "bg-[#f5f5f7] text-[#1d1d1f]"
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
