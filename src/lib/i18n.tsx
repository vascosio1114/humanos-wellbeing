"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "zh";

export const translations = {
  en: {
    nav: {
      product: "Demo",
      students: "Students",
      organizations: "Organizations",
      pilot: "Pilot",
      privacy: "Privacy",
      technology: "Technology",
      contact: "Start Pilot",
      subtitle: "AI Wellbeing Intelligence",
    },
    cta: {
      viewDemo: "View Demo",
      startPilot: "Start Pilot",
      startPilotConversation: "Start a Pilot Conversation",
      applyPilot: "Apply for Pilot",
      generateReport: "Generate AI Wellbeing Report",
    },
    footer: {
      text: "B2B-first AI wellbeing intelligence for schools, enterprises, hotels, resorts, and public institutions. Wellbeing guidance only, not medical diagnosis.",
    },
    home: {
      eyebrow: "Wellbeing Intelligence Layer",
      headline: "The Operating System for Human Wellbeing",
      subheadline:
        "HumanOS turns sleep, stress, focus, workload, mood, attendance, and participation signals into early-support intelligence, private AI plans, and anonymous institutional dashboards.",
      market: "Macao-first pilot platform for schools, hotels, enterprises, and public-sector partners.",
      problemTitle: "Support often arrives too late.",
      problemBody:
        "Schools and organizations often rely on reactive support, low-frequency surveys, and fragmented wellbeing resources.",
      solutionTitle: "Monitor, predict, plan, intervene, evaluate.",
      solutionBody:
        "Private check-ins become early-support intelligence, daily support plans, monthly reports, and anonymized institution dashboards.",
      privacyTitle: "Privacy-first by design.",
      privacyBody:
        "Institutions see anonymous trends. Individuals keep private reflections and AI conversations private.",
      businessTitle: "Pilot-ready B2B intelligence model.",
      roadmapTitle: "Roadmap from MVP to wellbeing ecosystem.",
    },
    demo: {
      headline: "A clickable wellbeing flow from check-in to early support.",
      body:
        "Choose a profile, complete a wellbeing check-in, generate a report, and watch personal and anonymous institution dashboards update.",
      steps: [
        "Choose profile",
        "Complete wellbeing check-in",
        "Generate scores",
        "AI Wellbeing Report",
        "Daily Support Plan",
        "Dashboard update",
      ],
      profiles: ["Student", "Employee", "School Admin / HR"],
      questions: [
        "How stressed do you feel today?",
        "How well did you sleep?",
        "How focused do you feel?",
        "How emotionally balanced do you feel?",
        "How heavy does your workload feel?",
        "How motivated do you feel?",
      ],
      report:
        "Your stress level appears elevated compared with your recent baseline. Sleep recovery is below your usual range, which may be affecting focus and motivation. Today's plan should prioritize recovery, lighter cognitive load, hydration, and a short reset.",
      generated: "report generated",
      privacy:
        "Individual reflections remain private. Schools and employers only see anonymized, aggregated trends, and small groups are hidden to reduce identity inference risk.",
    },
    labels: {
      wellbeingScore: "Wellbeing Score",
      stressIndex: "Stress Index",
      sleepRecovery: "Sleep Recovery",
      focusScore: "Focus Score",
      motivation: "Motivation",
      emotionalBalance: "Emotional Balance",
      burnoutAwareness: "Burnout Risk Awareness",
      aiDailyPlan: "AI Daily Plan",
      anonymousDashboard: "Anonymous Institution Dashboard",
      participation: "Participation",
      weeklyTrend: "Weekly Trend",
      aiRecommendations: "AI Recommendations",
    },
    plan: {
      morning: "Morning",
      afternoon: "Afternoon",
      evening: "Evening",
      morningTasks: ["3-minute breathing reset", "Hydration", "Light planning"],
      afternoonTasks: ["15-minute walk", "Focus block", "Healthy meal"],
      eveningTasks: ["Reflection journal", "Reduce screen time", "Sleep preparation"],
    },
    students: {
      headline: "AI wellbeing support for students before stress becomes a crisis.",
      body:
        "HumanOS helps schools understand academic stress, sleep and focus decline, emotional check-in patterns, and support needs through personal guidance and anonymized dashboards.",
      features: [
        "Private wellbeing check-ins",
        "Stress awareness",
        "Sleep quality tracking",
        "Focus score",
        "Motivation tracking",
        "Emotional balance",
        "AI study wellbeing plan",
        "Weekly wellbeing summary",
      ],
      privacy:
        "Schools cannot see personal journals, private reflections, or private AI coach conversations. They only see anonymized group trends.",
    },
    organizations: {
      headline: "AI wellbeing intelligence for high-pressure workplaces.",
      body:
        "For hotels, resorts, service teams, shift-based teams, and HR departments that need privacy-safe wellbeing visibility.",
      targets: ["Hotels", "Resorts", "Service teams", "Shift-based teams", "HR departments"],
      features: [
        "Employee wellbeing check-ins",
        "Stress and burnout awareness",
        "Shift-work sleep impact",
        "Team energy trends",
        "AI recovery plan",
        "Anonymous HR dashboard",
        "Department comparison",
        "Wellbeing campaign tracking",
      ],
      privacy:
        "Employers cannot read private journals, individual AI conversations, or identifiable wellbeing reports. They only see anonymized and grouped trends.",
    },
    pilot: {
      headline: "Launch a 3-month wellbeing intelligence pilot.",
      months: [
        ["Weeks 1-2", ["Needs interview", "Privacy and consent setup", "Baseline questionnaire", "Account setup"]],
        ["Month 2", ["AI personal plans", "Weekly check-ins", "Workshop", "15-minute consult option"]],
        ["Month 3", ["Outcome evaluation", "Anonymous trend report", "Management review", "Renewal proposal"]],
      ],
      metrics: [
        "Activation rate",
        "Weekly active check-ins",
        "AI plan completion >=40%",
        "Management report usefulness",
        "Renewal or expansion intent",
      ],
      pricing: [
        ["Pilot package", "MOP 38,000-88,000 for 3-month pilot"],
        ["Standard institution", "MOP 25-45 per user per month"],
        ["Institution professional", "MOP 120,000-360,000 per year"],
        ["White-label / custom", "API / IoT / kiosk / regional deployment"],
      ],
    },
    privacy: {
      headline: "Privacy-first wellbeing intelligence.",
      canSeeTitle: "Institutions can see",
      cannotSeeTitle: "Institutions cannot see",
      canSee: [
        "Anonymous stress trends",
        "Sleep and focus trends",
        "Participation rates",
        "Department / class / cohort comparisons",
        "Campaign progress",
        "Monthly wellbeing summaries",
        "Referral volume",
      ],
      cannotSee: [
        "Personal journals",
        "Private reflections",
        "Individual AI conversations",
        "Identifiable wellbeing reports",
        "Small-group identifiable data",
        "Private mental wellbeing content",
      ],
      responsible:
        "HumanOS provides wellbeing guidance, stress awareness, and early-support insights. It does not provide medical diagnosis, treatment, prescriptions, or crisis intervention. Users should be referred to licensed professionals or existing school / workplace support channels when needed.",
    },
    technology: {
      headline: "AI workflow infrastructure for wellbeing intelligence.",
      body:
        "HumanOS is designed as workflow infrastructure, not a generic chatbot wrapper.",
      blocks: [
        ["Time-series wellbeing layer", "Tracks stress, sleep, focus, workload, mood, attendance, and participation over time."],
        ["RAG wellbeing knowledge base", "Reviewed wellbeing education, HR resources, school support workflows, and institutional SOPs."],
        ["Agent workflows", "Monitoring, prediction, planning, resource routing, reporting, and referral escalation."],
        ["Privacy-first governance", "Role-based access, anonymization, sample thresholds, small-group suppression, and sensitive data separation."],
      ],
    },
    contact: {
      headline: "Start a pilot conversation.",
      body:
        "Tell us about your school or organization pilot. This demo form shows the intended flow and does not send data to a backend.",
      fields: {
        name: "Name",
        organization: "Organization",
        role: "Role",
        email: "Email",
        pilotType: "Pilot Type",
        message: "Message",
      },
      success: "Thank you. Your pilot request has been captured in this demo.",
    },
  },
  zh: {
    nav: {
      product: "Demo",
      students: "學生",
      organizations: "機構",
      pilot: "試點",
      privacy: "私隱",
      technology: "技術",
      contact: "開始 Pilot",
      subtitle: "AI 福祉智能",
    },
    cta: {
      viewDemo: "查看 Demo",
      startPilot: "開始 Pilot",
      startPilotConversation: "開始 Pilot 對話",
      applyPilot: "申請 Pilot",
      generateReport: "生成 AI 福祉報告",
    },
    footer: {
      text: "B2B-first AI 福祉智能平台，面向學校、企業、酒店、綜合度假村及公共機構。只提供福祉指引，不屬於醫療診斷。",
    },
    home: {
      eyebrow: "Wellbeing Intelligence Layer",
      headline: "The Operating System for Human Wellbeing",
      subheadline:
        "HumanOS 將睡眠、壓力、專注、工作量、情緒、出席及參與訊號，轉化成早期支援智能、私密 AI 計劃及匿名機構 dashboard。",
      market: "由澳門試點開始，面向學校、酒店、企業及公共機構合作夥伴。",
      problemTitle: "支援通常太遲出現。",
      problemBody:
        "學校及機構經常依賴事後支援、低頻問卷及分散嘅 wellbeing 資源。",
      solutionTitle: "監測、預測、規劃、介入、評估。",
      solutionBody:
        "私密 check-in 會變成早期支援智能、每日支援計劃、每月報告及匿名機構 dashboard。",
      privacyTitle: "私隱優先設計。",
      privacyBody:
        "機構只看到匿名趨勢；個人反思及 AI 對話保持私密。",
      businessTitle: "適合試點落地嘅 B2B intelligence 模式。",
      roadmapTitle: "由 MVP 走向 wellbeing ecosystem。",
    },
    demo: {
      headline: "由 check-in 到早期支援嘅互動 demo。",
      body:
        "選擇身份、完成 wellbeing check-in、生成報告，並查看個人及匿名機構 dashboard 如何更新。",
      steps: ["選擇身份", "完成 wellbeing check-in", "生成分數", "AI 福祉報告", "每日支援計劃", "Dashboard 更新"],
      profiles: ["學生", "員工", "學校 Admin / HR"],
      questions: [
        "你今日壓力有幾高？",
        "你昨晚睡眠質素如何？",
        "你今日專注度如何？",
        "你情緒平衡如何？",
        "你工作量或學業量有幾重？",
        "你今日動力如何？",
      ],
      report:
        "你嘅壓力比近期 baseline 高，睡眠恢復亦低於平常範圍，可能影響專注同動力。今日計劃應優先處理恢復、減低認知負荷、補水同短時間 reset。",
      generated: "報告已生成",
      privacy:
        "個人反思保持私密。學校及僱主只會看到匿名、聚合趨勢；小樣本群組會被隱藏，減低身份推斷風險。",
    },
    labels: {
      wellbeingScore: "福祉分數",
      stressIndex: "壓力指數",
      sleepRecovery: "睡眠恢復",
      focusScore: "專注分數",
      motivation: "動力",
      emotionalBalance: "情緒平衡",
      burnoutAwareness: "倦怠風險覺察",
      aiDailyPlan: "AI 每日計劃",
      anonymousDashboard: "匿名機構 Dashboard",
      participation: "參與率",
      weeklyTrend: "每週趨勢",
      aiRecommendations: "AI 建議",
    },
    plan: {
      morning: "早上",
      afternoon: "下午",
      evening: "晚上",
      morningTasks: ["3 分鐘呼吸 reset", "補水", "輕量規劃"],
      afternoonTasks: ["15 分鐘步行", "專注時段", "均衡飲食"],
      eveningTasks: ["反思日記", "減少螢幕時間", "睡眠準備"],
    },
    students: {
      headline: "在壓力變成危機前，為學生提供 AI 福祉支援。",
      body:
        "HumanOS 幫學校理解學業壓力、睡眠與專注下降、情緒 check-in 模式及支援需要，同時以匿名 dashboard 保護學生私隱。",
      features: ["私密 wellbeing check-in", "壓力覺察", "睡眠質素追蹤", "專注分數", "動力追蹤", "情緒平衡", "AI 學習福祉計劃", "每週福祉摘要"],
      privacy:
        "學校不能查看個人日記、私人反思或私人 AI Coach 對話，只能查看匿名群組趨勢。",
    },
    organizations: {
      headline: "面向高壓工作環境嘅 AI 福祉智能。",
      body:
        "適合酒店、綜合度假村、服務團隊、輪班團隊及 HR 部門，提供 privacy-safe wellbeing visibility。",
      targets: ["酒店", "綜合度假村", "服務團隊", "輪班團隊", "HR 部門"],
      features: ["員工 wellbeing check-in", "壓力及倦怠覺察", "輪班睡眠影響", "團隊能量趨勢", "AI 恢復計劃", "匿名 HR dashboard", "部門比較", "福祉活動追蹤"],
      privacy:
        "僱主不能閱讀私人日記、個人 AI 對話或可識別 wellbeing 報告，只能查看匿名分組趨勢。",
    },
    pilot: {
      headline: "啟動 3 個月 wellbeing intelligence pilot。",
      months: [
        ["第 1-2 週", ["需求訪談", "私隱及同意設定", "Baseline 問卷", "帳戶設定"]],
        ["第 2 個月", ["個人 AI 計劃", "每週 check-in", "工作坊", "15 分鐘諮詢選項"]],
        ["第 3 個月", ["成效評估", "匿名趨勢報告", "管理層回顧", "續約建議"]],
      ],
      metrics: ["啟用率", "每週活躍 check-in", "AI 計劃完成率 >=40%", "管理報告有用程度", "續約或擴展意向"],
      pricing: [
        ["Pilot package", "3 個月 MOP 38,000-88,000"],
        ["Standard institution", "每位用戶每月 MOP 25-45"],
        ["Institution professional", "每年 MOP 120,000-360,000"],
        ["White-label / custom", "API / IoT / kiosk / 區域部署"],
      ],
    },
    privacy: {
      headline: "私隱優先嘅福祉智能。",
      canSeeTitle: "機構可以見到",
      cannotSeeTitle: "機構不能見到",
      canSee: ["匿名壓力趨勢", "睡眠及專注趨勢", "參與率", "部門 / 班級 / cohort 比較", "活動進度", "每月 wellbeing 摘要", "轉介量"],
      cannotSee: ["個人日記", "私人反思", "個人 AI 對話", "可識別 wellbeing 報告", "小樣本可識別資料", "私人心理福祉內容"],
      responsible:
        "HumanOS 提供福祉指引、壓力覺察及早期支援參考，不提供醫療診斷、治療、處方或危機介入。如有需要，應轉介至合資格專業人士或既有學校 / 工作場所支援渠道。",
    },
    technology: {
      headline: "支撐福祉智能嘅 AI 工作流基礎設施。",
      body: "HumanOS 被設計成 workflow infrastructure，而唔係一般 chatbot wrapper。",
      blocks: [
        ["時間序列 wellbeing 層", "持續追蹤壓力、睡眠、專注、工作量、情緒、出席及參與率。"],
        ["RAG 福祉知識庫", "使用經審核 wellbeing 教育內容、HR 資源、學校支援流程及機構 SOP。"],
        ["Agent 工作流", "監測、預測、規劃、資源配置、報告及轉介升級。"],
        ["私隱優先治理", "角色權限、匿名化、樣本門檻、小群組隱藏及敏感資料隔離。"],
      ],
    },
    contact: {
      headline: "開始 pilot 對話。",
      body:
        "告訴我們你嘅學校或機構 pilot 需要。此 demo form 只展示預期流程，不會發送資料到 backend。",
      fields: {
        name: "姓名",
        organization: "機構",
        role: "職位",
        email: "Email",
        pilotType: "Pilot 類型",
        message: "訊息",
      },
      success: "多謝。你嘅 pilot request 已在 demo 中記錄。",
    },
  },
};

type Translation = (typeof translations)[Locale];

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    return window.localStorage.getItem("humanos-locale") === "zh" ? "zh" : "en";
  });

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-Hant" : "en";
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => {
    function setLocale(nextLocale: Locale) {
      setLocaleState(nextLocale);
      window.localStorage.setItem("humanos-locale", nextLocale);
    }

    return { locale, setLocale, t: translations[locale] };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return value;
}
