"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  LockKeyhole,
  Moon,
  School,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  Area,
  AreaChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Footer, Navbar } from "@/components/humanos/layout";
import {
  assessmentLibrary,
  assessmentSafetyPrinciples,
  humanOSIndicators,
  recognizedQuestionnaires,
} from "@/lib/assessment-library";
import { useI18n } from "@/lib/i18n";

type ScenarioKey = "student" | "hotel" | "admin";
type FrequencyValue = 0 | 1 | 2 | 3 | 4;
type AnswerValue = number | string;

const frequencyOptions = ["Never", "Rarely", "Sometimes", "Often", "Very often"] as const;
const frequencyOptionsZh = ["從不", "很少", "有時", "經常", "非常經常"] as const;

const scenarios = [
  {
    key: "student",
    icon: School,
    title: "Student",
    titleZh: "學生",
    description: "For schools, universities, exam periods, student support, and academic pressure.",
    descriptionZh: "適合學校、大學、考試期、學生支援及學業壓力場景。",
    groups: ["Year 1", "Year 2", "Year 3", "Year 4"],
    groupZh: ["Year 1", "Year 2", "Year 3", "Year 4"],
    campaign: "7-day sleep and focus support campaign",
    campaignZh: "7 日睡眠及專注支援 campaign",
    prioritySubject: "Year 3 students",
    prioritySubjectZh: "Year 3 學生",
    resource: "Exam week focus plan",
    resourceZh: "考試週專注計劃",
  },
  {
    key: "hotel",
    icon: BriefcaseBusiness,
    title: "Employee / Hotel Team",
    titleZh: "員工 / 酒店團隊",
    description: "For frontline teams, shift workers, service teams, and high-pressure workplaces.",
    descriptionZh: "適合前線團隊、輪班員工、服務團隊及高壓工作環境。",
    groups: ["Front Desk", "Housekeeping", "F&B Team", "Back Office"],
    groupZh: ["Front Desk", "Housekeeping", "F&B Team", "Back Office"],
    campaign: "Shift recovery checklist",
    campaignZh: "輪班恢復 checklist",
    prioritySubject: "Front Desk",
    prioritySubjectZh: "Front Desk 團隊",
    resource: "Shift recovery checklist",
    resourceZh: "輪班恢復 checklist",
  },
  {
    key: "admin",
    icon: Building2,
    title: "Institution Admin",
    titleZh: "機構管理者",
    description: "For counselors, HR teams, school leaders, and organization managers.",
    descriptionZh: "適合輔導員、HR、學校管理層及機構管理者。",
    groups: ["Group A", "Group B", "Group C", "Group D"],
    groupZh: ["群組 A", "群組 B", "群組 C", "群組 D"],
    campaign: "Low-pressure check-in campaign",
    campaignZh: "低壓 check-in campaign",
    prioritySubject: "Group B",
    prioritySubjectZh: "群組 B",
    resource: "Workload planning template",
    resourceZh: "工作量規劃模板",
  },
] as const;

const modules = [
  {
    id: "stress",
    title: "Perceived Stress",
    titleZh: "感知壓力",
    inspiredBy: "Inspired by perceived stress research concepts",
    inspiredByZh: "參考感知壓力研究概念",
    outputs: ["Perceived Stress Index", "Control Pressure", "Recovery Gap"],
    outputsZh: ["感知壓力指數", "控制壓力", "恢復缺口"],
    questions: [
      {
        id: "stress_overload",
        type: "frequency",
        label: "In the past 7 days, how often did you feel overloaded by responsibilities?",
        labelZh: "過去 7 日，你有幾常覺得責任或任務超出負荷？",
        polarity: "negative",
      },
      {
        id: "stress_control",
        type: "frequency",
        label: "How often did you feel unable to control your schedule or workload?",
        labelZh: "你有幾常覺得自己控制唔到時間表或工作量？",
        polarity: "negative",
      },
      {
        id: "stress_recovery",
        type: "frequency",
        label: "How often did you feel you had enough time to recover?",
        labelZh: "你有幾常覺得自己有足夠時間恢復？",
        polarity: "positive",
      },
    ],
  },
  {
    id: "sleep",
    title: "Sleep Recovery",
    titleZh: "睡眠恢復",
    inspiredBy: "Inspired by sleep quality research structures",
    inspiredByZh: "參考睡眠質素研究結構",
    outputs: ["Sleep Recovery Score", "Daytime Energy Impact", "Sleep Consistency"],
    outputsZh: ["睡眠恢復分數", "日間能量影響", "睡眠規律"],
    questions: [
      {
        id: "sleep_quality",
        type: "slider",
        label: "How would you rate your sleep quality in the past week?",
        labelZh: "你會點評估過去一週睡眠質素？",
        low: "Poor",
        high: "Restorative",
        lowZh: "差",
        highZh: "恢復感好",
      },
      {
        id: "sleep_hours",
        type: "slider",
        label: "How many hours did you usually sleep?",
        labelZh: "你通常睡到幾多小時？",
        low: "Under 4h",
        high: "8h+",
        lowZh: "少於 4 小時",
        highZh: "8 小時以上",
      },
      {
        id: "sleep_daytime",
        type: "frequency",
        label: "How often did sleep affect your daytime energy?",
        labelZh: "睡眠有幾常影響你日間精神？",
        polarity: "negative",
      },
      {
        id: "sleep_consistency",
        type: "slider",
        label: "How consistent was your bedtime?",
        labelZh: "你嘅睡眠時間有幾穩定？",
        low: "Irregular",
        high: "Consistent",
        lowZh: "唔穩定",
        highZh: "穩定",
      },
    ],
  },
  {
    id: "workload",
    title: "Cognitive Workload",
    titleZh: "認知工作量",
    inspiredBy: "Inspired by workload dimension research",
    inspiredByZh: "參考工作量維度研究",
    outputs: ["Cognitive Load", "Time Pressure", "Effort Demand", "Frustration Load"],
    outputsZh: ["認知負荷", "時間壓力", "努力需求", "挫折負荷"],
    questions: [
      {
        id: "workload_mental",
        type: "slider",
        label: "How mentally demanding was your work or study this week?",
        labelZh: "今週工作或學習對你腦力要求有幾高？",
        low: "Light",
        high: "Very demanding",
        lowZh: "輕",
        highZh: "好高",
        invert: true,
      },
      {
        id: "workload_time",
        type: "frequency",
        label: "How much time pressure did you feel?",
        labelZh: "你有幾常感到時間壓力？",
        polarity: "negative",
      },
      {
        id: "workload_effort",
        type: "slider",
        label: "How much effort did you need to keep up?",
        labelZh: "你需要用幾多努力先跟得上？",
        low: "Low effort",
        high: "High effort",
        lowZh: "低",
        highZh: "高",
        invert: true,
      },
      {
        id: "workload_frustration",
        type: "frequency",
        label: "How often did you feel frustrated while completing tasks?",
        labelZh: "完成任務時，你有幾常覺得挫折？",
        polarity: "negative",
      },
    ],
  },
  {
    id: "vitality",
    title: "Wellbeing Vitality",
    titleZh: "福祉活力",
    inspiredBy: "Inspired by wellbeing and vitality frameworks",
    inspiredByZh: "參考福祉及活力框架",
    outputs: ["Vitality Score", "Calmness Score", "Daily Purpose Score"],
    outputsZh: ["活力分數", "平靜分數", "日常意義感"],
    questions: [
      {
        id: "vitality_calm",
        type: "frequency",
        label: "How often did you feel calm or emotionally balanced?",
        labelZh: "你有幾常覺得平靜或情緒平衡？",
        polarity: "positive",
      },
      {
        id: "vitality_energy",
        type: "frequency",
        label: "How often did you feel active and energetic?",
        labelZh: "你有幾常覺得有活力同精神？",
        polarity: "positive",
      },
      {
        id: "vitality_refreshed",
        type: "frequency",
        label: "How often did you wake up feeling refreshed?",
        labelZh: "你有幾常起身後覺得恢復到？",
        polarity: "positive",
      },
      {
        id: "vitality_meaning",
        type: "frequency",
        label: "How often did your daily life feel meaningful?",
        labelZh: "你有幾常覺得日常生活有意義？",
        polarity: "positive",
      },
    ],
  },
  {
    id: "mood",
    title: "Mood Pressure",
    titleZh: "情緒壓力",
    inspiredBy: "Inspired by ultra-brief mood pressure concepts",
    inspiredByZh: "參考超短情緒壓力概念",
    outputs: ["Mood Pressure", "Emotional Load", "Focus Impact"],
    outputsZh: ["情緒壓力", "情緒負荷", "專注影響"],
    questions: [
      {
        id: "mood_nervous",
        type: "frequency",
        label: "How often did you feel nervous or on edge?",
        labelZh: "你有幾常覺得緊張或繃緊？",
        polarity: "negative",
      },
      {
        id: "mood_heavy",
        type: "frequency",
        label: "How often did you feel emotionally heavy or low energy?",
        labelZh: "你有幾常覺得情緒沉重或低能量？",
        polarity: "negative",
      },
      {
        id: "mood_focus",
        type: "frequency",
        label: "How often did your mood affect your focus?",
        labelZh: "情緒有幾常影響你專注？",
        polarity: "negative",
      },
    ],
  },
  {
    id: "burnout",
    title: "Burnout Awareness",
    titleZh: "倦怠 Awareness",
    inspiredBy: "Inspired by exhaustion, detachment, and efficacy research",
    inspiredByZh: "參考耗竭、疏離及效能感研究",
    outputs: ["Exhaustion Signal", "Disconnection Signal", "Progress Confidence"],
    outputsZh: ["耗竭訊號", "疏離訊號", "進展信心"],
    questions: [
      {
        id: "burnout_drained",
        type: "frequency",
        label: "How emotionally drained did you feel this week?",
        labelZh: "今週你覺得情緒被消耗到咩程度？",
        polarity: "negative",
      },
      {
        id: "burnout_disconnected",
        type: "frequency",
        label: "How disconnected did you feel from your work or study?",
        labelZh: "你有幾常對工作或學習感到疏離？",
        polarity: "negative",
      },
      {
        id: "burnout_progress",
        type: "frequency",
        label: "How often did you feel your effort was not leading to progress?",
        labelZh: "你有幾常覺得努力冇帶嚟進展？",
        polarity: "negative",
      },
      {
        id: "reflection",
        type: "text",
        label: "Optional reflection: What would make this week feel more manageable?",
        labelZh: "可選反思：有咩會令今週更可控？",
      },
    ],
  },
] as const;

const initialAnswers: Record<string, AnswerValue> = {
  stress_overload: 3,
  stress_control: 2,
  stress_recovery: 1,
  sleep_quality: 5,
  sleep_hours: 5,
  sleep_daytime: 3,
  sleep_consistency: 4,
  workload_mental: 8,
  workload_time: 3,
  workload_effort: 7,
  workload_frustration: 2,
  vitality_calm: 2,
  vitality_energy: 2,
  vitality_refreshed: 1,
  vitality_meaning: 3,
  mood_nervous: 2,
  mood_heavy: 2,
  mood_focus: 3,
  burnout_drained: 3,
  burnout_disconnected: 1,
  burnout_progress: 2,
  reflection: "",
};

const researchCards = [
  {
    title: "Workplace mental health",
    titleZh: "職場心理健康",
    source: "WHO mental health at work",
    href: "https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work",
    copy:
      "WHO estimates that depression and anxiety cost the global economy about US$1 trillion each year in lost productivity. This supports the need for earlier, organization-level wellbeing visibility.",
    copyZh:
      "WHO 估計 depression and anxiety 每年令全球經濟損失約 US$1 trillion 生產力。呢點支持機構需要更早、更高層次嘅 wellbeing visibility。",
  },
  {
    title: "Student wellbeing pressure",
    titleZh: "學生福祉壓力",
    source: "CDC Youth Risk Behavior Survey 2023",
    href: "https://www.cdc.gov/yrbs/dstr/index.html",
    copy:
      "CDC 2023 data shows that 40% of US high school students reported persistent feelings of sadness or hopelessness. HumanOS does not diagnose mental health conditions, but it helps institutions detect anonymous wellbeing pressure earlier.",
    copyZh:
      "CDC 2023 數據顯示 40% 美國高中生曾報告持續悲傷或 hopelessness。HumanOS 不作心理健康診斷，但協助機構更早發現匿名 wellbeing pressure。",
  },
  {
    title: "Perceived stress",
    titleZh: "感知壓力",
    source: "Perceived Stress Scale research",
    href: "https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/index.html",
    copy:
      "Stress is not only about workload. It is also about perceived control, overload, and recovery. HumanOS tracks these dimensions as daily signals.",
    copyZh:
      "壓力唔只係工作量，亦包括控制感、overload 同恢復。HumanOS 將呢啲維度作為日常訊號追蹤。",
  },
  {
    title: "Sleep quality",
    titleZh: "睡眠質素",
    source: "Pittsburgh Sleep Quality Index",
    href: "https://www.sleep.pitt.edu/instruments/",
    copy:
      "Sleep quality is multi-dimensional, including sleep duration, sleep disturbance, sleep consistency, and daytime impact. HumanOS connects sleep recovery with stress and focus trends.",
    copyZh:
      "睡眠質素係多維度，包括時長、干擾、規律及日間影響。HumanOS 會連接睡眠恢復、壓力及專注趨勢。",
  },
  {
    title: "Workload",
    titleZh: "工作量",
    source: "NASA-TLX",
    href: "https://humansystems.arc.nasa.gov/groups/tlx/",
    copy:
      "Workload includes mental demand, time pressure, effort, performance pressure, and frustration. HumanOS uses workload signals to identify support needs before they become chronic.",
    copyZh:
      "工作量包括認知需求、時間壓力、努力、表現壓力及挫折。HumanOS 用工作量訊號及早發現支援需要。",
  },
  {
    title: "Wellbeing",
    titleZh: "福祉",
    source: "WHO-5 Well-Being Index",
    href: "https://www.psykiatri-regionh.dk/who-5/Pages/default.aspx",
    copy:
      "Wellbeing includes vitality, calmness, energy, and daily purpose. HumanOS combines these signals with sleep, stress, and workload patterns.",
    copyZh:
      "福祉包括活力、平靜、能量同日常意義感。HumanOS 將呢啲訊號同睡眠、壓力、工作量模式結合。",
  },
  {
    title: "Burnout awareness",
    titleZh: "倦怠 Awareness",
    source: "Burnout research",
    href: "https://www.who.int/standards/classifications/frequently-asked-questions/burn-out-an-occupational-phenomenon",
    copy:
      "Burnout research often looks at exhaustion, detachment, and reduced efficacy. HumanOS uses these ideas only for non-diagnostic awareness and early support.",
    copyZh:
      "倦怠研究常看耗竭、疏離及效能感下降。HumanOS 只將相關概念用於非診斷 awareness 及早期支援。",
  },
] as const;

export default function DemoPage() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [activeModule, setActiveModule] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>(initialAnswers);
  const [generated, setGenerated] = useState(false);

  const scenario = scenarios[scenarioIndex];
  const scores = useMemo(() => calculateScores(answers), [answers]);
  const trendData = useMemo(() => buildTrendData(scores), [scores]);
  const heatmap = useMemo(() => buildHeatmap(scenario.key, scores), [scenario.key, scores]);
  const status = getReadinessStatus(scores.overall);
  const sleepStressState = getSleepStressState(scores.sleepRecovery, scores.stressRegulation);

  function updateAnswer(id: string, value: AnswerValue) {
    setAnswers((current) => ({ ...current, [id]: value }));
    setGenerated(false);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />
      <DemoHero />
      <AssessmentLibrarySection />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-12 lg:grid-cols-[0.84fr_1.16fr] lg:px-8">
        <div className="grid gap-5">
          <ScenarioSelector scenarioIndex={scenarioIndex} setScenarioIndex={setScenarioIndex} />
          <ResearchCheckInWizard
            activeModule={activeModule}
            answers={answers}
            generated={generated}
            setActiveModule={setActiveModule}
            updateAnswer={updateAnswer}
            onGenerate={() => setGenerated(true)}
          />
        </div>

        <div className="grid gap-5">
          <WellbeingScoreCard generated={generated} scores={scores} status={status} />
          <PersonalDashboard
            generated={generated}
            scores={scores}
            sleepStressState={sleepStressState}
            trendData={trendData}
          />
          <ProfessionalAIInsight
            generated={generated}
            scenario={scenario}
            scores={scores}
            sleepStressState={sleepStressState}
          />
          <InstitutionDashboardPreview
            heatmap={heatmap}
            scenario={scenario}
            scores={scores}
          />
        </div>
      </section>
      <ResearchEvidenceSection />
      <PrivacyBoundary />
      <DemoCTA />
      <Footer />
    </main>
  );
}

function DemoHero() {
  const { locale } = useI18n();
  const isZh = locale === "zh";

  return (
    <section className="relative isolate bg-white">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_24%_12%,rgba(0,122,255,0.16),transparent_32%),radial-gradient(circle_at_76%_12%,rgba(52,199,89,0.16),transparent_30%),radial-gradient(circle_at_52%_0%,rgba(255,55,95,0.12),transparent_34%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-[#eaf5ff] px-4 py-2 text-sm font-semibold text-[#007aff] shadow-sm ring-1 ring-black/5">
            <Sparkles className="size-4" aria-hidden="true" />
            {isZh ? "HumanOS 示範" : "HumanOS Demo"}
          </p>
          <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
            {isZh ? "HumanOS 福祉智能示範實驗室" : "HumanOS Wellbeing Intelligence Lab"}
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e6e73]">
            {isZh
              ? "體驗 HumanOS 如何將研究參考問卷、個人打卡、AI 支援計劃、個人福祉 profile 同匿名機構洞察連成一個完整流程。"
              : "Experience how a research-informed assessment library becomes a personal support plan, a wellbeing profile, and anonymous institutional insight."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#check-in"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0066d6] focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:ring-offset-2"
            >
              {isZh ? "開始示範測試" : "Start Research Demo"}
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
            <a
              href="#institution-dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f5f5f7] px-6 py-3.5 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:ring-offset-2"
            >
              {isZh ? "查看機構儀表板" : "View Institution Dashboard"}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {(isZh ? ["研究參考", "私隱優先", "非診斷", "匿名洞察"] : ["Research-informed", "Privacy-first", "Non-diagnostic", "Anonymous insights"]).map((badge) => (
              <span key={badge} className="rounded-full bg-[#f5f5f7] px-3 py-1.5 text-xs font-semibold text-[#6e6e73] ring-1 ring-black/5">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2.2rem] bg-[#1d1d1f] p-4 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
          <div className="rounded-[1.8rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
            <p className="text-sm font-semibold text-white/58">{isZh ? "研究參考智能流程" : "Research-informed intelligence flow"}</p>
            <div className="mt-6 grid gap-3">
              {(isZh
                ? [
                    ["問卷與指標庫", "01"],
                    ["私人 check-in 模組", "02"],
                    ["個人支援計劃", "03"],
                    ["匿名機構洞察", "04"],
                  ]
                : [
                    ["Assessment library", "01"],
                    ["Private check-in modules", "02"],
                    ["Personal support plan", "03"],
                    ["Anonymous institution intelligence", "04"],
                  ]).map(([label, step]) => (
                <div key={step} className="flex items-center gap-4 rounded-[1.3rem] bg-white/[0.08] p-4 ring-1 ring-white/10">
                  <span className="grid size-9 place-items-center rounded-full bg-white text-sm font-semibold text-[#1d1d1f]">{step}</span>
                  <p className="text-sm font-semibold text-white/84">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AssessmentLibrarySection() {
  const { locale } = useI18n();
  const isZh = locale === "zh";

  return (
    <section className="bg-[#f5f5f7] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#007aff] shadow-sm ring-1 ring-black/5">
              <ClipboardCheck className="size-4" aria-hidden="true" />
              {isZh ? "HumanOS 問卷與指標庫" : "HumanOS Assessment Library"}
            </p>
            <h2 className="mt-6 text-[clamp(2.7rem,5vw,5.4rem)] font-semibold leading-[0.98] tracking-normal">
              {isZh ? "參考國際福祉框架，轉化成 HumanOS 可行動訊號。" : "Built on recognized wellbeing frameworks. Expressed as HumanOS signals."}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6e6e73]">
              {isZh
                ? "HumanOS 不直接照搬臨床或 proprietary 問卷，而是參考國際認可框架，設計自家非診斷題目，再轉化為 awareness、趨勢、支援建議同私隱安全嘅機構洞察。"
                : "HumanOS does not copy clinical or proprietary questionnaires. It uses custom, product-friendly items inspired by internationally recognized frameworks, then converts them into awareness, trends, support suggestions, and privacy-safe institutional intelligence."}
            </p>
            <div className="mt-6 rounded-[1.5rem] bg-[#fff4df] p-5 text-sm leading-7 text-[#1d1d1f] ring-1 ring-black/5">
              <span className="font-semibold">{isZh ? "邊界：" : "Boundary:"}</span>{" "}
              {isZh
                ? "不顯示診斷結果、不生成個人機構報告、不向學校或 HR 顯示私人日記。"
                : "no diagnosis result, no individual institutional report, no private journals shown to schools or HR."}
            </div>
          </div>

          <div className="grid gap-4">
            {assessmentLibrary.map((item, index) => (
              <div key={item.name} className="rounded-[1.7rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#007aff]">{isZh ? item.cadenceZh : item.cadence}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-normal">{isZh ? item.nameZh : item.name}</h3>
                  </div>
                  <span className="grid size-10 place-items-center rounded-full bg-[#f5f5f7] text-sm font-semibold text-[#1d1d1f] ring-1 ring-black/5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#6e6e73]">{isZh ? item.purposeZh : item.purpose}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(isZh ? item.outputsZh : item.outputs).map((output) => (
                    <span key={output} className="rounded-full bg-[#f5f5f7] px-3 py-1.5 text-xs font-semibold text-[#6e6e73] ring-1 ring-black/5">
                      {output}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {humanOSIndicators.map((indicator) => (
            <div key={indicator.title} className="rounded-[1.5rem] bg-white p-5 ring-1 ring-black/5">
              <p className="text-sm font-semibold text-[#007aff]">{isZh ? indicator.titleZh : indicator.title}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">{isZh ? indicator.basisZh : indicator.basis}</p>
              <p className="mt-4 text-sm leading-7 text-[#1d1d1f]">{isZh ? indicator.outputZh : indicator.output}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScenarioSelector({
  scenarioIndex,
  setScenarioIndex,
}: {
  scenarioIndex: number;
  setScenarioIndex: (index: number) => void;
}) {
  const { locale } = useI18n();
  const isZh = locale === "zh";

  return (
    <Panel step="1" title={isZh ? "選擇示範場景" : "Choose Scenario"}>
      <div className="grid gap-3">
        {scenarios.map(({ icon: Icon, title, titleZh, description, descriptionZh }, index) => (
          <button
            key={title}
            type="button"
            onClick={() => setScenarioIndex(index)}
            className={`rounded-[1.3rem] p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#007aff] ${
              scenarioIndex === index
                ? "bg-[#eaf5ff] text-[#1d1d1f] ring-2 ring-[#007aff]"
                : "bg-white text-[#1d1d1f] ring-1 ring-black/5 hover:bg-[#f5f5f7]"
            }`}
          >
            <div className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-[#007aff] shadow-sm ring-1 ring-black/5">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold">{isZh ? titleZh : title}</span>
                <span className="mt-1 block text-sm leading-6 text-[#6e6e73]">{isZh ? descriptionZh : description}</span>
              </span>
            </div>
          </button>
        ))}
      </div>
    </Panel>
  );
}

function ResearchCheckInWizard({
  activeModule,
  answers,
  generated,
  setActiveModule,
  updateAnswer,
  onGenerate,
}: {
  activeModule: number;
  answers: Record<string, AnswerValue>;
  generated: boolean;
  setActiveModule: (index: number) => void;
  updateAnswer: (id: string, value: AnswerValue) => void;
  onGenerate: () => void;
}) {
  const activeModuleConfig = modules[activeModule];
  const { locale } = useI18n();
  const isZh = locale === "zh";

  return (
    <Panel step="2" title={isZh ? "研究參考 Check-in 模組" : "Research-Informed Check-in Modules"} id="check-in">
      <div className="grid gap-3 sm:grid-cols-2">
        {modules.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveModule(index)}
            className={`rounded-[1.1rem] px-4 py-3 text-left text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#007aff] ${
              activeModule === index ? "bg-[#1d1d1f] text-white" : "bg-[#f5f5f7] text-[#1d1d1f] hover:bg-white"
            }`}
          >
            {index + 1}. {isZh ? item.titleZh : item.title}
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#007aff]">{isZh ? activeModuleConfig.inspiredByZh : activeModuleConfig.inspiredBy}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-normal">{isZh ? activeModuleConfig.titleZh : activeModuleConfig.title}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {(isZh ? activeModuleConfig.outputsZh : activeModuleConfig.outputs).map((output) => (
            <span key={output} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#6e6e73] ring-1 ring-black/5">
              {output}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4">
        {activeModuleConfig.questions.map((question) => (
          <ModuleQuestionCard
            key={question.id}
            answer={answers[question.id]}
            question={question}
            updateAnswer={updateAnswer}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onGenerate}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0066d6] focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:ring-offset-2 sm:w-auto"
      >
        {generated
          ? isZh ? "重新生成福祉智能分析" : "Regenerate Wellbeing Intelligence"
          : isZh ? "生成福祉智能分析" : "Generate Wellbeing Intelligence"}
        <ArrowRight className="size-5" aria-hidden="true" />
      </button>
    </Panel>
  );
}

function ModuleQuestionCard({
  question,
  answer,
  updateAnswer,
}: {
  question: (typeof modules)[number]["questions"][number];
  answer: AnswerValue;
  updateAnswer: (id: string, value: AnswerValue) => void;
}) {
  const { locale } = useI18n();
  const isZh = locale === "zh";
  const options = isZh ? frequencyOptionsZh : frequencyOptions;

  return (
    <div className="rounded-[1.35rem] bg-white p-4 ring-1 ring-black/5">
      <p className="font-semibold leading-6">{isZh ? question.labelZh : question.label}</p>
      {question.type === "frequency" ? (
        <div className="mt-4 grid gap-2 sm:grid-cols-5">
          {options.map((option, index) => (
            <button
              key={option}
              type="button"
              onClick={() => updateAnswer(question.id, index as FrequencyValue)}
              className={`rounded-full px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#007aff] ${
                answer === index ? "bg-[#007aff] text-white" : "bg-[#f5f5f7] text-[#6e6e73] hover:bg-[#eaf5ff]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}

      {question.type === "slider" ? (
        <div className="mt-4">
          <input
            type="range"
            min="0"
            max="10"
            value={typeof answer === "number" ? answer : 5}
            onChange={(event) => updateAnswer(question.id, Number(event.target.value))}
            className="h-2 w-full cursor-pointer accent-[#007aff]"
          />
          <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[#6e6e73]">
            <span>{isZh ? question.lowZh : question.low}</span>
            <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-[#1d1d1f] ring-1 ring-black/5">{answer}/10</span>
            <span>{isZh ? question.highZh : question.high}</span>
          </div>
        </div>
      ) : null}

      {question.type === "text" ? (
        <textarea
          value={typeof answer === "string" ? answer : ""}
          onChange={(event) => updateAnswer(question.id, event.target.value)}
          rows={3}
          placeholder={isZh ? "可選反思" : "Optional reflection"}
          className="mt-4 w-full resize-none rounded-[1rem] border border-black/10 bg-[#f5f5f7] p-3 text-sm outline-none transition focus:border-[#007aff] focus:ring-2 focus:ring-[#007aff]/20"
        />
      ) : null}
    </div>
  );
}

function WellbeingScoreCard({
  generated,
  scores,
  status,
}: {
  generated: boolean;
  scores: ReturnType<typeof calculateScores>;
  status: ReturnType<typeof getReadinessStatus>;
}) {
  const { locale } = useI18n();
  const isZh = locale === "zh";
  const statusText = getLocalizedStatus(status, isZh);

  return (
    <Panel step="3" title={isZh ? "生成福祉智能分析" : "Generate Wellbeing Intelligence"}>
      <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div className="relative grid aspect-square max-h-72 place-items-center rounded-full bg-[conic-gradient(#34c759_0_var(--score),#e5e5ea_var(--score)_100%)] p-4" style={{ "--score": `${scores.overall}%` } as React.CSSProperties}>
          <div className="grid size-full place-items-center rounded-full bg-white text-center">
            <div>
              <p className="text-sm font-semibold text-[#6e6e73]">{isZh ? "HumanOS 福祉準備度分數" : "HumanOS Wellbeing Readiness Score"}</p>
              <p className="mt-2 text-6xl font-semibold">{scores.overall}</p>
              <p className={`mt-2 text-sm font-semibold ${status.color}`}>{statusText.label}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#007aff]">{generated ? isZh ? "已生成分析" : "Generated intelligence" : isZh ? "預覽分析" : "Preview intelligence"}</p>
          <h2 className="mt-3 text-4xl font-semibold leading-none">{statusText.headline}</h2>
          <p className="mt-4 text-base leading-7 text-[#6e6e73]">{statusText.body}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <MiniMetric label={isZh ? "支援優先級" : "Support Priority"} value={isZh ? localizePriority(scores.supportPriority) : scores.supportPriority} />
            <MiniMetric label={isZh ? "恢復缺口" : "Recovery Gap"} value={`${scores.recoveryGap}`} />
            <MiniMetric label={isZh ? "觀察區" : "Watch Zone"} value={scores.overall < 60 ? isZh ? "啟動" : "Active" : isZh ? "監測" : "Monitor"} />
          </div>
        </div>
      </div>
    </Panel>
  );
}

function PersonalDashboard({
  generated,
  scores,
  sleepStressState,
  trendData,
}: {
  generated: boolean;
  scores: ReturnType<typeof calculateScores>;
  sleepStressState: ReturnType<typeof getSleepStressState>;
  trendData: Array<Record<string, number | string>>;
}) {
  const { locale } = useI18n();
  const isZh = locale === "zh";
  const radarData = [
    { dimension: isZh ? "壓力調節" : "Stress Regulation", value: scores.stressRegulation },
    { dimension: isZh ? "睡眠恢復" : "Sleep Recovery", value: scores.sleepRecovery },
    { dimension: isZh ? "專注準備度" : "Focus Readiness", value: scores.focusReadiness },
    { dimension: isZh ? "工作量平衡" : "Workload Balance", value: scores.workloadBalance },
    { dimension: isZh ? "情緒穩定" : "Mood Stability", value: scores.moodStability },
    { dimension: isZh ? "活力" : "Vitality", value: scores.vitality },
  ];

  return (
    <Panel step="4" title={isZh ? "個人儀表板圖表" : "Personal Dashboard Charts"}>
      <div className="grid gap-5 xl:grid-cols-2">
        <ChartCard title={isZh ? "福祉雷達圖" : "Wellbeing Radar Chart"}>
          <PersonalRadarChart data={radarData} />
        </ChartCard>
        <ChartCard title={isZh ? "7 日趨勢圖" : "7-Day Trend Line Chart"}>
          <TrendLineChart data={trendData} />
        </ChartCard>
        <ChartCard title={isZh ? "倦怠 Awareness 矩陣" : "Burnout Awareness Matrix"}>
          <BurnoutMatrix scores={scores} />
        </ChartCard>
        <SleepStressInsightCard sleepStressState={sleepStressState} />
      </div>
      <div className="mt-5 rounded-[1.5rem] bg-[#eaf5ff] p-5">
        <p className="text-sm font-semibold text-[#007aff]">{isZh ? "HumanOS 福祉 Profile 摘要" : "HumanOS Wellbeing Profile Summary"}</p>
        <p className="mt-3 text-base leading-7 text-[#1d1d1f]">
          {generated
            ? isZh
              ? `你的 profile 顯示目前${scores.workloadBalance < 55 ? "工作量壓力偏高" : "工作量壓力仍可管理"}，同時${scores.sleepRecovery < 60 ? "恢復能力偏低" : "恢復狀態穩定"}。最明顯訊號係${scores.recoveryGap > 40 ? "恢復缺口" : "整體穩定模式"}：睡眠質素同能量${scores.sleepRecovery < 60 ? "較低" : "仍然守住"}，而工作/學習需求保持在${scores.workloadBalance < 60 ? "偏高" : "中等"}水平。`
              : `Your profile suggests ${scores.workloadBalance < 55 ? "elevated workload pressure" : "manageable workload pressure"} with ${scores.sleepRecovery < 60 ? "reduced recovery" : "stable recovery"}. The strongest signal is ${scores.recoveryGap > 40 ? "a recovery gap" : "a stable pattern"}: sleep quality and energy are ${scores.sleepRecovery < 60 ? "lower" : "holding"} while workload demand remains ${scores.workloadBalance < 60 ? "high" : "moderate"}.`
            : isZh ? "生成示範後，這裡會顯示個人化福祉 profile 摘要。" : "Generate the demo to see a personalized wellbeing profile summary."}
        </p>
      </div>
    </Panel>
  );
}

function ProfessionalAIInsight({
  generated,
  scenario,
  scores,
  sleepStressState,
}: {
  generated: boolean;
  scenario: (typeof scenarios)[number];
  scores: ReturnType<typeof calculateScores>;
  sleepStressState: ReturnType<typeof getSleepStressState>;
}) {
  const { locale } = useI18n();
  const isZh = locale === "zh";
  const sleepStressText = getLocalizedSleepStress(sleepStressState, isZh);
  const microActions = [
    isZh ? "高需求任務前做 5 分鐘呼吸 reset" : "5-minute breathing reset before high-demand tasks",
    isZh ? "25 分鐘單一任務專注衝刺" : "25-minute focus sprint with a single task target",
    scores.sleepRecovery < 60
      ? isZh ? "睡前 45 分鐘啟動睡眠放鬆提醒" : "Sleep wind-down reminder 45 minutes before bedtime"
      : isZh ? "10 分鐘活動 reset" : "10-minute movement reset",
  ];

  return (
    <Panel step="5" title={isZh ? "專業 AI 洞察" : "Professional AI Insight"}>
      <div className="grid gap-4">
        <InsightRow
          title={isZh ? "模式摘要" : "Pattern Summary"}
          body={
            isZh
              ? `目前模式顯示${scores.workloadBalance < 60 ? "認知需求偏高" : "認知需求中等"}、${scores.moodStability < 60 ? "情緒負荷偏高" : "情緒負荷可管理"}，以及${scores.sleepRecovery < 60 ? "睡眠恢復偏低" : "睡眠恢復穩定"}。`
              : `Your current pattern shows ${scores.workloadBalance < 60 ? "high cognitive demand" : "moderate cognitive demand"}, ${scores.moodStability < 60 ? "elevated emotional load" : "manageable emotional load"}, and ${scores.sleepRecovery < 60 ? "reduced sleep recovery" : "stable sleep recovery"}.`
          }
        />
        <InsightRow
          title={isZh ? "可能成因" : "Possible Driver"}
          body={
            isZh
              ? `主要成因較可能係${scores.workloadBalance < scores.motivationVitality ? "時間壓力同恢復不足" : "能量與恢復波動"}，而唔係單一動力問題。`
              : `The main driver appears to be ${scores.workloadBalance < scores.motivationVitality ? "time pressure and insufficient recovery" : "energy and recovery fluctuation"} rather than a single motivation issue.`
          }
        />
        <InsightRow
          title={isZh ? "支援優先次序" : "Support Priority"}
          body={
            isZh
              ? `在增加新 productivity 目標前，先處理「${sleepStressText.title}」同工作/學習量結構。`
              : `Focus on ${sleepStressState.title.toLowerCase()} and workload structuring before adding new productivity goals.`
          }
        />
        <div className="rounded-[1.35rem] bg-[#f5f5f7] p-4">
          <p className="font-semibold">{isZh ? "3 個微行動" : "3 Micro-Actions"}</p>
          <div className="mt-3 grid gap-3">
            {microActions.map((action) => (
              <div key={action} className="flex gap-3 rounded-[1rem] bg-white p-3 text-sm font-semibold leading-6 ring-1 ring-black/5">
                <CheckCircle2 className="size-5 shrink-0 text-[#34c759]" aria-hidden="true" />
                {action}
              </div>
            ))}
          </div>
        </div>
        <InsightRow title={isZh ? "資源建議" : "Resource Recommendation"} body={isZh ? scenario.resourceZh : scenario.resource} />
        <div className="flex gap-3 rounded-[1.35rem] bg-[#fff4df] p-4 text-sm leading-7 text-[#1d1d1f]">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#b25000]" aria-hidden="true" />
          {isZh
            ? "HumanOS 只提供一般福祉 awareness 及支援建議，不提供醫療診斷或臨床治療。"
            : "HumanOS provides general wellbeing awareness and support suggestions only. It does not provide medical diagnosis or clinical treatment."}
        </div>
        {!generated ? <p className="text-sm font-semibold text-[#6e6e73]">{isZh ? "按「生成福祉智能分析」後，這張卡會用最新輸入刷新。" : "Click Generate Wellbeing Intelligence to refresh this card with your latest inputs."}</p> : null}
      </div>
    </Panel>
  );
}

function InstitutionDashboardPreview({
  heatmap,
  scenario,
  scores,
}: {
  heatmap: Array<{ group: string; Stress: number; "Sleep Recovery": number; Focus: number; Workload: number; Motivation: number }>;
  scenario: (typeof scenarios)[number];
  scores: ReturnType<typeof calculateScores>;
}) {
  const { locale } = useI18n();
  const isZh = locale === "zh";
  const highWorkloadGroup = scenario.key === "student" ? (isZh ? "Year 3 學生" : "Year 3") : scenario.key === "hotel" ? (isZh ? "Front Desk 團隊" : "Front Desk") : "Group B";

  return (
    <Panel step="6" title={isZh ? "匿名機構儀表板" : "Anonymous Institution Dashboard"} id="institution-dashboard">
      <div className="grid gap-3 md:grid-cols-5">
        <MiniMetric label={isZh ? "參與率" : "Participation rate"} value="72%" />
        <MiniMetric label={isZh ? "壓力趨勢" : "Stress trend"} value="+14%" />
        <MiniMetric label={isZh ? "低睡眠恢復" : "Low sleep recovery"} value="38%" />
        <MiniMetric label={isZh ? "高工作量群組" : "High workload group"} value={highWorkloadGroup} />
        <MiniMetric label={isZh ? "建議 campaign" : "Suggested campaign"} value={isZh ? scenario.campaignZh : scenario.campaign} />
      </div>
      <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <GroupHeatmap heatmap={heatmap} scenario={scenario} />
        <SupportPriorityQueue scenario={scenario} />
      </div>
      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        <div className="rounded-[1.5rem] bg-[#1d1d1f] p-5 text-white">
          <p className="text-sm font-semibold text-[#5ac8fa]">{isZh ? "AI 機構洞察" : "AI Institutional Insight"}</p>
          <p className="mt-4 text-sm leading-7 text-white/76">
            {isZh
              ? `本週匿名群組趨勢顯示 ${scenario.prioritySubjectZh} 出現恢復缺口。壓力與工作/學習量同步上升，而睡眠恢復下降。HumanOS 建議推出短期支援 campaign，聚焦睡眠節奏、規劃同低壓 check-in。`
              : `This week's anonymous group trends suggest a recovery gap among ${scenario.prioritySubject}. Stress and workload rose together while sleep recovery declined. HumanOS recommends a short support campaign focused on sleep routines, planning, and low-pressure check-ins.`}
          </p>
        </div>
        <MonthlyReportPreview scenario={scenario} scores={scores} />
      </div>
    </Panel>
  );
}

function ResearchEvidenceSection() {
  const { locale } = useI18n();
  const isZh = locale === "zh";
  const highlighted = recognizedQuestionnaires.filter((item) =>
    [
      "WHO-5 Well-Being Index",
      "WEMWBS / SWEMWBS",
      "PSS-10 Perceived Stress Scale",
      "Oldenburg Burnout Inventory",
      "COPSOQ III",
      "HSE Management Standards Indicator Tool",
      "UWES Utrecht Work Engagement Scale",
      "Edmondson Psychological Safety Scale",
    ].includes(item.name),
  );

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold text-[#007aff]">{isZh ? "研究依據" : "Research Evidence"}</p>
          <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98] tracking-normal">
            {isZh ? "國際認可問卷框架，變成 HumanOS 智能訊號" : "Recognized questionnaires become HumanOS intelligence"}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6e6e73]">
            {isZh
              ? "Assessment engine 會參考福祉、壓力、倦怠、職場心理社會風險及團隊安全感等框架，但只顯示 awareness、趨勢同支援建議。"
              : "The assessment engine references recognized wellbeing, stress, burnout, workplace, and team-safety frameworks, but presents only awareness and support guidance."}
          </p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlighted.map((item) => (
            <div key={item.name} className="rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
              <p className="text-lg font-semibold leading-tight">{item.name}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#007aff]">{item.humanOSUse}</p>
              <p className="mt-4 text-sm leading-7 text-[#6e6e73]">{isZh ? item.useZh : item.use}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {researchCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.6rem] bg-[#f5f5f7] p-6 ring-1 ring-black/5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <BookOpenCheck className="size-7 text-[#007aff]" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-semibold leading-tight">{isZh ? card.titleZh : card.title}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">{card.source}</p>
              <p className="mt-4 text-sm leading-7 text-[#6e6e73]">{isZh ? card.copyZh : card.copy}</p>
            </a>
          ))}
        </div>
        <div className="mt-8 rounded-[1.5rem] bg-[#fff4df] p-5 text-sm leading-7 text-[#1d1d1f] ring-1 ring-black/5">
          <p className="font-semibold">{isZh ? "HumanOS 安全規則" : "HumanOS safety rules"}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {assessmentSafetyPrinciples.map((principle) => (
              <div key={principle} className="flex gap-2">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#b25000]" aria-hidden="true" />
                <span>{isZh ? localizeSafetyPrinciple(principle) : principle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacyBoundary() {
  const { locale } = useI18n();
  const isZh = locale === "zh";
  const canSee = isZh
    ? ["匿名群組趨勢", "參與率", "壓力、睡眠、專注、工作量及動力的聚合模式", "建議支援 campaign", "月度福祉報告"]
    : [
        "Anonymous group trends",
        "Participation rate",
        "Aggregated stress, sleep, focus, workload and motivation patterns",
        "Suggested support campaigns",
        "Monthly wellbeing reports",
      ];
  const cannotSee = isZh
    ? ["個人日記", "私人 AI 對話", "個人 check-in 答案", "可識別個人福祉報告", "個人情緒反思"]
    : [
        "Personal journals",
        "Private AI conversations",
        "Individual check-in answers",
        "Identifiable wellbeing reports",
        "Personal emotional reflections",
      ];

  return (
    <section className="bg-[#1d1d1f] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold text-[#5ac8fa]">{isZh ? "私隱邊界" : "Privacy Boundary"}</p>
          <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98] tracking-normal">
            {isZh ? "機構只看匿名洞察，個人資料保持私密。" : "Anonymous institutional insight, private individual data."}
          </h2>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <PrivacyColumn title={isZh ? "機構可以看到" : "What institutions can see"} items={canSee} positive />
          <PrivacyColumn title={isZh ? "機構不可以看到" : "What institutions cannot see"} items={cannotSee} />
        </div>
        <div className="mt-8 flex gap-3 rounded-[1.5rem] bg-white/[0.08] p-5 text-sm leading-7 text-white/82 ring-1 ring-white/10">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#34c759]" aria-hidden="true" />
          {isZh
            ? "HumanOS 以私隱優先設計。機構只收到匿名、聚合洞察；個人用戶保留自己私人福祉資料的控制權。"
            : "HumanOS is privacy-first. Institutions receive anonymous, aggregated insights only. Individual users keep control of their private wellbeing data."}
        </div>
      </div>
    </section>
  );
}

function DemoCTA() {
  const { locale } = useI18n();
  const isZh = locale === "zh";

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="text-sm font-semibold text-[#007aff]">{isZh ? "試點 HumanOS" : "Pilot HumanOS"}</p>
        <h2 className="mt-4 text-[clamp(2.6rem,6vw,5.5rem)] font-semibold leading-none tracking-normal">
          {isZh ? "準備開始 HumanOS 試點？" : "Ready to pilot HumanOS?"}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6e6e73]">
          {isZh ? "可以由學校、大學、酒店團隊，或者整個機構福祉試點開始。" : "Start with a school, university, hotel team, or organization-wide wellbeing pilot."}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:bg-[#0066d6]">
            {isZh ? "預約 Demo" : "Book a Demo"}
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#f5f5f7] px-7 py-4 text-base font-semibold text-[#1d1d1f] ring-1 ring-black/5 transition hover:bg-white hover:shadow-md">
            {isZh ? "聯絡我們" : "Contact Us"}
          </Link>
          <Link href="/organizations" className="inline-flex items-center justify-center rounded-full bg-[#1d1d1f] px-7 py-4 text-base font-semibold text-white transition hover:bg-black">
            {isZh ? "查看機構方案" : "View Institution Page"}
          </Link>
        </div>
      </div>
    </section>
  );
}

function PersonalRadarChart({ data }: { data: Array<{ dimension: string; value: number }> }) {
  const mounted = useMounted();

  if (!mounted) {
    return <ChartPlaceholder />;
  }

  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="#d2d2d7" />
          <PolarAngleAxis dataKey="dimension" tick={{ fill: "#6e6e73", fontSize: 11 }} />
          <Radar dataKey="value" stroke="#007aff" fill="#5ac8fa" fillOpacity={0.26} />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function TrendLineChart({ data }: { data: Array<Record<string, number | string>> }) {
  const mounted = useMounted();

  if (!mounted) {
    return <ChartPlaceholder />;
  }

  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: -18, right: 8, top: 12, bottom: 8 }}>
          <defs>
            <linearGradient id="stressTrend" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#ff375f" stopOpacity={0.24} />
              <stop offset="95%" stopColor="#ff375f" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="sleepTrend" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#007aff" stopOpacity={0.22} />
              <stop offset="95%" stopColor="#007aff" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" tick={{ fill: "#6e6e73", fontSize: 12 }} />
          <YAxis tick={{ fill: "#6e6e73", fontSize: 12 }} />
          <Tooltip />
          <Area dataKey="Stress" fill="url(#stressTrend)" stroke="#ff375f" strokeWidth={2} />
          <Area dataKey="Sleep Recovery" fill="url(#sleepTrend)" stroke="#007aff" strokeWidth={2} />
          <Area dataKey="Focus Readiness" fill="transparent" stroke="#34c759" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function BurnoutMatrix({ scores }: { scores: ReturnType<typeof calculateScores> }) {
  const { locale } = useI18n();
  const isZh = locale === "zh";
  const x = clamp(100 - scores.workloadBalance, 5, 95);
  const y = clamp(100 - scores.sleepRecovery, 5, 95);

  return (
    <div className="relative h-72 overflow-hidden rounded-[1.25rem] bg-[#f5f5f7] ring-1 ring-black/5">
      <div className="grid h-full grid-cols-2 grid-rows-2 text-xs font-semibold text-[#6e6e73]">
        <div className="border-b border-r border-black/5 p-3">{isZh ? "穩定區" : "Stable Zone"}</div>
        <div className="border-b border-black/5 p-3">{isZh ? "有效壓力區" : "Productive Pressure"}</div>
        <div className="border-r border-black/5 p-3">{isZh ? "低能量區" : "Low Energy"}</div>
        <div className="p-3">{isZh ? "倦怠 Awareness 區" : "Burnout Awareness Zone"}</div>
      </div>
      <div
        className="absolute grid size-5 place-items-center rounded-full bg-[#ff375f] shadow-[0_0_0_8px_rgba(255,55,95,0.16)]"
        style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
        aria-label="User point"
      />
      <p className="absolute bottom-3 left-4 text-xs font-semibold text-[#6e6e73]">{isZh ? "工作量壓力" : "Workload Pressure"}</p>
      <p className="absolute left-3 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-semibold text-[#6e6e73]">{isZh ? "恢復水平" : "Recovery Level"}</p>
    </div>
  );
}

function SleepStressInsightCard({ sleepStressState }: { sleepStressState: ReturnType<typeof getSleepStressState> }) {
  const { locale } = useI18n();
  const isZh = locale === "zh";
  const text = getLocalizedSleepStress(sleepStressState, isZh);

  return (
    <div className={`rounded-[1.5rem] p-5 ${sleepStressState.bg}`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className={`text-sm font-semibold ${sleepStressState.color}`}>{isZh ? "睡眠與壓力互動" : "Sleep-Stress Interaction"}</p>
          <h3 className="mt-3 text-3xl font-semibold leading-none">{text.title}</h3>
        </div>
        <Moon className={`size-10 ${sleepStressState.color}`} aria-hidden="true" />
      </div>
      <p className="mt-5 text-sm leading-7 text-[#6e6e73]">{text.body}</p>
      <div className="mt-5 h-3 overflow-hidden rounded-full bg-white ring-1 ring-black/5">
        <div className={`h-full rounded-full ${sleepStressState.bar}`} style={{ width: sleepStressState.width }} />
      </div>
    </div>
  );
}

function GroupHeatmap({
  heatmap,
  scenario,
}: {
  heatmap: Array<{ group: string; Stress: number; "Sleep Recovery": number; Focus: number; Workload: number; Motivation: number }>;
  scenario: (typeof scenarios)[number];
}) {
  const { locale } = useI18n();
  const isZh = locale === "zh";
  const columns =
    scenario.key === "hotel"
      ? ["Stress", "Sleep Recovery", "Fatigue", "Workload", "Engagement"]
      : ["Stress", "Sleep Recovery", "Focus", "Workload", "Motivation"];

  return (
    <div className="overflow-hidden rounded-[1.5rem] bg-[#f5f5f7] p-4 ring-1 ring-black/5">
      <p className="mb-4 text-sm font-semibold text-[#007aff]">{isZh ? "群組熱點圖" : "Group Heatmap"}</p>
      <div className="grid min-w-[620px] gap-2" style={{ gridTemplateColumns: `140px repeat(${columns.length}, 1fr)` }}>
        <div />
        {columns.map((column) => (
          <div key={column} className="text-xs font-semibold text-[#6e6e73]">{isZh ? localizeHeatColumn(column) : column}</div>
        ))}
        {heatmap.map((row, index) => (
          <div key={row.group} className="contents">
            <div className="py-2 text-sm font-semibold">{isZh ? scenario.groupZh[index] : row.group}</div>
            {columns.map((column) => {
              const normalizedColumn = column === "Fatigue" ? "Stress" : column === "Engagement" ? "Motivation" : column;
              const value = row[normalizedColumn as keyof typeof row] as number;
              return (
                <div key={`${row.group}-${column}`} className={`rounded-lg px-2 py-2 text-center text-xs font-semibold ${heatTone(value, column)}`}>
                  {value}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function SupportPriorityQueue({ scenario }: { scenario: (typeof scenarios)[number] }) {
  const { locale } = useI18n();
  const isZh = locale === "zh";
  const group = isZh ? scenario.prioritySubjectZh : scenario.prioritySubject;
  const second = isZh ? scenario.groupZh[1] : scenario.groups[1];
  const fourth = isZh ? scenario.groupZh[3] : scenario.groups[3];
  const items = [
    isZh ? `${group} 顯示工作/學習量壓力上升，睡眠恢復下降。` : `${group} show increased workload pressure and lower sleep recovery.`,
    isZh ? `${second} 顯示動力下降，但壓力仍然穩定。` : `${second} show declining motivation but stable stress.`,
    isZh ? `${fourth} 福祉狀態穩定，但參與率較低。` : `${fourth} show stable wellbeing but lower participation.`,
  ];

  return (
    <div className="rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
      <p className="text-sm font-semibold text-[#007aff]">{isZh ? "支援優先隊列" : "Support Priority Queue"}</p>
      <div className="mt-4 grid gap-3">
        {items.map((item, index) => (
          <div key={item} className="rounded-[1rem] bg-white p-4 ring-1 ring-black/5">
            <p className="text-xs font-semibold text-[#ff375f]">{isZh ? `優先 ${index + 1}` : `Priority ${index + 1}`}</p>
            <p className="mt-2 text-sm font-semibold leading-6">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MonthlyReportPreview({
  scenario,
  scores,
}: {
  scenario: (typeof scenarios)[number];
  scores: ReturnType<typeof calculateScores>;
}) {
  const { locale } = useI18n();
  const isZh = locale === "zh";
  const rows = [
    [isZh ? "主要趨勢" : "Key trend", scores.sleepRecovery < 60 ? isZh ? "優先群組的睡眠恢復下降。" : "Sleep recovery decreased across the priority group." : isZh ? "福祉訊號整體穩定，但有輕微工作/學習量壓力。" : "Wellbeing signals remain stable with mild workload pressure."],
    [isZh ? "可能成因" : "Possible driver", isZh ? "時間壓力與恢復規律似乎是最相關因素。" : "Time pressure and recovery consistency appear to be the most relevant drivers."],
    [isZh ? "建議行動" : "Suggested action", isZh ? scenario.campaignZh : scenario.campaign],
    [isZh ? "跟進指標" : "Follow-up metric", isZh ? "未來 14 日追蹤睡眠恢復、參與率及工作/學習量壓力。" : "Sleep recovery, participation, and workload pressure over the next 14 days."],
    [isZh ? "私隱備註" : "Privacy note", isZh ? "不顯示個人日記、check-in 答案、私人 AI 對話或可識別報告。" : "No individual journals, check-in answers, private AI chats, or identifiable reports are shown."],
  ];

  return (
    <div className="rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
      <p className="flex items-center gap-2 text-sm font-semibold text-[#007aff]">
        <FileText className="size-4" aria-hidden="true" />
        {isZh ? "月度報告預覽" : "Monthly Report Preview"}
      </p>
      <div className="mt-4 grid gap-3">
        {rows.map(([label, body]) => (
          <div key={label} className="rounded-[1rem] bg-white p-4 ring-1 ring-black/5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">{label}</p>
            <p className="mt-2 text-sm font-semibold leading-6">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrivacyColumn({ title, items, positive = false }: { title: string; items: string[]; positive?: boolean }) {
  return (
    <div className="rounded-[1.8rem] bg-white/[0.08] p-6 ring-1 ring-white/10">
      <p className={`text-xl font-semibold ${positive ? "text-[#34c759]" : "text-[#ff9f0a]"}`}>{title}</p>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 rounded-[1rem] bg-white/[0.08] p-4 text-sm font-semibold leading-6 text-white/82 ring-1 ring-white/10">
            {positive ? <CheckCircle2 className="size-5 shrink-0 text-[#34c759]" /> : <LockKeyhole className="size-5 shrink-0 text-[#ff9f0a]" />}
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function Panel({ step, title, children, id }: { step: string; title: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="rounded-[1.8rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-full bg-[#1d1d1f] text-sm font-semibold text-white">{step}</span>
        <h2 className="text-xl font-semibold text-[#1d1d1f]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ChartCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
      <p className="mb-4 text-sm font-semibold text-[#007aff]">{title}</p>
      {children}
    </div>
  );
}

function MiniMetric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-[1.2rem] bg-[#f5f5f7] p-4 ring-1 ring-black/5">
      <p className="text-xs font-semibold text-[#6e6e73]">{label}</p>
      <p className="mt-2 text-xl font-semibold leading-tight">{value}</p>
    </div>
  );
}

function InsightRow({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.35rem] bg-[#f5f5f7] p-4">
      <p className="text-sm font-semibold text-[#007aff]">{title}</p>
      <p className="mt-2 text-sm leading-7 text-[#1d1d1f]">{body}</p>
    </div>
  );
}

function calculateScores(answers: Record<string, AnswerValue>) {
  const freqPositive = (id: string) => ((Number(answers[id]) || 0) / 4) * 100;
  const freqNegative = (id: string) => (1 - (Number(answers[id]) || 0) / 4) * 100;
  const sliderPositive = (id: string) => ((Number(answers[id]) || 0) / 10) * 100;
  const sliderNegative = (id: string) => (1 - (Number(answers[id]) || 0) / 10) * 100;

  const stressRegulation = average([
    freqNegative("stress_overload"),
    freqNegative("stress_control"),
    freqPositive("stress_recovery"),
  ]);
  const sleepRecovery = average([
    sliderPositive("sleep_quality"),
    sliderPositive("sleep_hours"),
    freqNegative("sleep_daytime"),
    sliderPositive("sleep_consistency"),
  ]);
  const workloadBalance = average([
    sliderNegative("workload_mental"),
    freqNegative("workload_time"),
    sliderNegative("workload_effort"),
    freqNegative("workload_frustration"),
  ]);
  const moodStability = average([
    freqNegative("mood_nervous"),
    freqNegative("mood_heavy"),
    freqNegative("mood_focus"),
  ]);
  const vitality = average([
    freqPositive("vitality_calm"),
    freqPositive("vitality_energy"),
    freqPositive("vitality_refreshed"),
    freqPositive("vitality_meaning"),
  ]);
  const burnoutAwareness = average([
    freqNegative("burnout_drained"),
    freqNegative("burnout_disconnected"),
    freqNegative("burnout_progress"),
  ]);
  const focusReadiness = average([workloadBalance, moodStability, vitality]);
  const motivationVitality = average([vitality, burnoutAwareness]);
  const recoveryGap = clamp(Math.round((100 - sleepRecovery + (100 - stressRegulation)) / 2), 0, 100);
  const overall = average([
    stressRegulation,
    sleepRecovery,
    focusReadiness,
    workloadBalance,
    moodStability,
    motivationVitality,
  ]);

  return {
    overall,
    stressRegulation,
    sleepRecovery,
    focusReadiness,
    workloadBalance,
    moodStability,
    vitality,
    burnoutAwareness,
    motivationVitality,
    recoveryGap,
    supportPriority: recoveryGap > 64 ? "High" : recoveryGap > 42 ? "Medium" : "Low",
  };
}

function buildTrendData(scores: ReturnType<typeof calculateScores>) {
  return Array.from({ length: 7 }, (_, index) => {
    const day = `D${index + 1}`;
    const stress = clamp(100 - scores.stressRegulation + index * 2 - 5, 0, 100);
    const sleep = clamp(scores.sleepRecovery - 5 + index * 1.2, 0, 100);
    const focus = clamp(scores.focusReadiness - 4 + index * 1.4, 0, 100);
    return {
      day,
      Stress: Math.round(stress),
      "Sleep Recovery": Math.round(sleep),
      "Focus Readiness": Math.round(focus),
    };
  });
}

function buildHeatmap(scenario: ScenarioKey, scores: ReturnType<typeof calculateScores>) {
  const selected = scenarios.find((item) => item.key === scenario) ?? scenarios[0];
  return selected.groups.map((group, index) => ({
    group,
    Stress: clamp(Math.round(100 - scores.stressRegulation + index * 6 + (index === 2 ? 12 : 0)), 20, 95),
    "Sleep Recovery": clamp(Math.round(scores.sleepRecovery - index * 4 - (index === 2 ? 12 : 0)), 15, 92),
    Focus: clamp(Math.round(scores.focusReadiness - index * 3), 20, 96),
    Workload: clamp(Math.round(100 - scores.workloadBalance + index * 5 + (index === 2 ? 10 : 0)), 15, 95),
    Motivation: clamp(Math.round(scores.motivationVitality - index * 4), 18, 94),
  }));
}

function getReadinessStatus(score: number) {
  if (score <= 39) {
    return {
      label: "Needs Support",
      headline: "Support priority is active.",
      body: "Several wellbeing signals suggest that recovery and support planning should come before additional productivity pressure.",
      color: "text-[#ff375f]",
    };
  }
  if (score <= 59) {
    return {
      label: "Watch Zone",
      headline: "Watch zone pattern detected.",
      body: "The pattern is not a diagnosis. It suggests that sleep, workload, and mood pressure should be monitored and supported early.",
      color: "text-[#b25000]",
    };
  }
  if (score <= 79) {
    return {
      label: "Stable",
      headline: "Stable pattern with improvement opportunities.",
      body: "Signals are broadly stable, with useful opportunities to improve recovery, workload planning, and focus readiness.",
      color: "text-[#248a3d]",
    };
  }
  return {
    label: "Strong",
    headline: "Strong recovery and readiness profile.",
    body: "Current signals suggest strong recovery, stable mood pressure, and good focus readiness. Maintain routines and monitor changes.",
    color: "text-[#248a3d]",
  };
}

function getLocalizedStatus(status: ReturnType<typeof getReadinessStatus>, isZh: boolean) {
  if (!isZh) return status;

  const map: Record<string, { label: string; headline: string; body: string }> = {
    "Needs Support": {
      label: "需要支援",
      headline: "已進入支援優先狀態。",
      body: "多個福祉訊號顯示，應先處理恢復與支援規劃，再增加額外生產力壓力。",
    },
    "Watch Zone": {
      label: "觀察區",
      headline: "偵測到觀察區模式。",
      body: "這不是診斷結果，而是提示睡眠、工作/學習量及情緒壓力需要更早被監測與支援。",
    },
    Stable: {
      label: "穩定",
      headline: "整體穩定，但仍有改善機會。",
      body: "訊號大致穩定，可集中改善恢復、工作/學習量規劃及專注準備度。",
    },
    Strong: {
      label: "良好",
      headline: "恢復與準備度 profile 良好。",
      body: "目前訊號顯示恢復力強、情緒壓力穩定、專注準備度良好。建議保持現有節奏並持續觀察變化。",
    },
  };

  return { ...status, ...(map[status.label] ?? {}) };
}

function localizePriority(value: string) {
  if (value === "High") return "高";
  if (value === "Medium") return "中";
  return "低";
}

function localizeHeatColumn(column: string) {
  const map: Record<string, string> = {
    Stress: "壓力",
    "Sleep Recovery": "睡眠恢復",
    Fatigue: "疲勞",
    Focus: "專注",
    Workload: "工作量",
    Motivation: "動力",
    Engagement: "投入度",
  };
  return map[column] ?? column;
}

function getSleepStressState(sleepRecovery: number, stressRegulation: number) {
  const stress = 100 - stressRegulation;
  if (sleepRecovery < 58 && stress > 52) {
    return {
      title: "Recovery Gap",
      body: "Sleep recovery is lower while stress pressure is elevated. Prioritize recovery before adding new performance goals.",
      bg: "bg-[#fff0f3]",
      color: "text-[#ff375f]",
      bar: "bg-[#ff375f]",
      width: "78%",
    };
  }
  if (sleepRecovery >= 62 && stress > 42) {
    return {
      title: "Resilient Pressure",
      body: "Stress pressure is present, but sleep recovery appears protective. Keep recovery routines consistent.",
      bg: "bg-[#fff4df]",
      color: "text-[#b25000]",
      bar: "bg-[#ff9f0a]",
      width: "58%",
    };
  }
  return {
    title: "Balanced Pattern",
    body: "Sleep and stress signals are broadly balanced. Continue monitoring changes across the week.",
    bg: "bg-[#eefcf3]",
    color: "text-[#248a3d]",
    bar: "bg-[#34c759]",
    width: "44%",
  };
}

function getLocalizedSleepStress(
  sleepStressState: ReturnType<typeof getSleepStressState>,
  isZh: boolean,
) {
  if (!isZh) {
    return {
      title: sleepStressState.title,
      body: sleepStressState.body,
    };
  }

  if (sleepStressState.title === "Recovery Gap") {
    return {
      title: "恢復缺口",
      body: "睡眠恢復偏低，同時壓力偏高。建議先處理恢復，再增加新的表現目標。",
    };
  }
  if (sleepStressState.title === "Resilient Pressure") {
    return {
      title: "有韌性的壓力",
      body: "壓力存在，但睡眠恢復仍有保護作用。建議保持恢復節奏穩定。",
    };
  }
  return {
    title: "平衡模式",
    body: "睡眠與壓力訊號大致平衡。建議繼續觀察一週內的變化。",
  };
}

function localizeSafetyPrinciple(principle: string) {
  const map: Record<string, string> = {
    "Do not show diagnostic labels such as depressed, anxious, or clinically burned out.":
      "不顯示 depression、anxiety、clinical burnout 等診斷標籤。",
    "Show awareness signals, trend movement, support suggestions, and referral guidance only.":
      "只顯示 awareness 訊號、趨勢變化、支援建議及轉介提示。",
    "Keep PHQ-9 and GAD-7 style content out of institutional dashboards.":
      "PHQ-9 / GAD-7 類深度內容不進入機構 dashboard。",
    "Do not copy proprietary questionnaire items directly; create HumanOS-owned items inspired by public concepts.":
      "不直接複製 proprietary 問卷題目；以公開概念啟發設計 HumanOS 自家題目。",
    "Suppress small groups and never expose private journals or individual AI conversations to schools or HR.":
      "隱藏小樣本群組，永不向學校或 HR 顯示私人日記或個人 AI 對話。",
  };
  return map[principle] ?? principle;
}

function heatTone(value: number, column: string) {
  const highIsRisk = column === "Stress" || column === "Workload" || column === "Fatigue";
  const riskValue = highIsRisk ? value : 100 - value;
  if (riskValue >= 70) return "bg-[#fff0f3] text-[#ff375f]";
  if (riskValue >= 48) return "bg-[#fff4df] text-[#b25000]";
  return "bg-[#eefcf3] text-[#248a3d]";
}

function average(values: number[]) {
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  return mounted;
}

function ChartPlaceholder() {
  const { locale } = useI18n();

  return (
    <div className="flex h-72 items-center justify-center rounded-[1.25rem] bg-white text-sm font-semibold text-[#6e6e73] ring-1 ring-black/5">
      {locale === "zh" ? "載入圖表中" : "Loading chart"}
    </div>
  );
}
