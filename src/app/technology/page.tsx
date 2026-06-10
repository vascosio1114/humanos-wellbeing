"use client";

import { BrainCircuit, Cpu, Database, GitBranch, Network, ShieldCheck } from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import { useI18n } from "@/lib/i18n";

const architecture = [
  ["Time-series wellbeing layer", "時間序列 wellbeing 層", "Tracks movement across stress, sleep, focus, mood, workload, activity, attendance, and participation.", "追蹤壓力、睡眠、專注、情緒、工作量、活動、出席及參與率嘅變化。", GitBranch],
  ["RAG knowledge base", "RAG 知識庫", "Uses reviewed wellbeing education, HR resources, school support workflows, and institutional SOPs.", "使用經審核嘅 wellbeing 教育內容、HR 資源、學校支援流程及機構 SOP。", Database],
  ["Agent workflow", "智能體工作流", "Monitoring, prediction, planning, resource routing, report generation, and referral escalation work as separate agents.", "監測、預測、規劃、資源配置、報告生成及轉介升級由不同 agent 協作。", BrainCircuit],
  ["Privacy controls", "私隱控制", "Aggregation, minimum sample thresholds, role permissions, and no private AI chat visibility.", "聚合、最小樣本門檻、角色權限，以及不顯示私人 AI 對話。", ShieldCheck],
] as const;

const roadmap = [
  ["Months 1-2", "第 1-2 個月", "Account, privacy, check-in, admin prototype, personal trends, anonymous aggregation, and report templates.", "帳戶、私隱、check-in、admin prototype、個人趨勢、匿名聚合及報告模板。"],
  ["Month 3", "第 3 個月", "Pilot dashboard, campaign tracking, professional support process, and monthly management reports.", "Pilot dashboard、活動追蹤、專業支援流程及每月管理報告。"],
  ["Months 4-6", "第 4-6 個月", "Time-series model improvement, RAG workflows, agent orchestration, and health kiosk proof of concept.", "改善時間序列模型、RAG 工作流、agent 編排及健康 kiosk PoC。"],
  ["Months 7-12", "第 7-12 個月", "Multi-organization deployment, API integration, IoT or wearable connection, security, and annual productization.", "多機構部署、API 整合、IoT 或穿戴裝置連接、安全強化及年度產品化。"],
] as const;

export default function TechnologyPage() {
  const { locale } = useI18n();
  const isZh = locale === "zh";

  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />
      <section className="bg-[#1d1d1f] py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2 text-sm font-semibold text-[#5ac8fa] ring-1 ring-white/10">
            <Cpu className="size-4" aria-hidden="true" />
            {isZh ? "HumanOS Technology" : "HumanOS Technology"}
          </p>
          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.96]">
            {isZh ? "唔係一個 chatbot，而係一套 wellbeing intelligence architecture。" : "Not a chatbot. A wellbeing intelligence architecture."}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-white/68">
            {isZh
              ? "HumanOS 由時間序列訊號、RAG 知識庫、agent workflow、匿名 dashboard 同私隱控制組成，支援「監測 → 預測 → 規劃 → 介入 → 評估」。"
              : "HumanOS combines time-series signals, a RAG knowledge base, agent workflows, anonymous dashboards, and privacy controls to support Monitor → Predict → Plan → Intervene → Evaluate."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {architecture.map(([title, titleZh, body, bodyZh, Icon]) => (
            <div key={title} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
              <Icon className="size-7 text-[#007aff]" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold">{isZh ? titleZh : title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#6e6e73]">{isZh ? bodyZh : body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#ff375f]">{isZh ? "產品路線圖" : "Product roadmap"}</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
              {isZh ? "先做可試點 MVP，再擴展成平台。" : "Start with a pilot-ready MVP, then expand into a platform."}
            </h2>
            <Network className="mt-8 size-9 text-[#007aff]" aria-hidden="true" />
          </div>
          <div className="space-y-3">
            {roadmap.map(([period, periodZh, body, bodyZh]) => (
              <div key={period} className="rounded-[1.5rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                <p className="text-xl font-semibold">{isZh ? periodZh : period}</p>
                <p className="mt-3 text-sm leading-7 text-[#6e6e73]">{isZh ? bodyZh : body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
