"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Brain,
  CheckCircle2,
  FileText,
  LineChart,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Zap,
} from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import { useI18n } from "@/lib/i18n";

const metrics = [
  ["78", "Average wellbeing score", "平均 wellbeing 分數", "Stable with mild recovery pressure", "穩定，但有輕微恢復壓力"],
  ["24%", "Sleep recovery risk", "睡眠恢復風險", "Up 6% versus last week", "比上週上升 6%"],
  ["18%", "Burnout awareness group", "倦怠風險群組", "Concentrated in two cohorts", "集中於兩個群組"],
  ["64%", "Campaign completion", "活動完成率", "Shift recovery plan is leading", "輪班恢復計劃表現最好"],
] as const;

const rows = [
  { group: "Year 3 Students", stress: 72, sleep: 44, focus: 58, workload: 76, priority: "High" },
  { group: "Front Desk", stress: 68, sleep: 49, focus: 62, workload: 71, priority: "High" },
  { group: "F&B Team", stress: 54, sleep: 61, focus: 70, workload: 58, priority: "Medium" },
  { group: "Back Office", stress: 38, sleep: 73, focus: 76, workload: 42, priority: "Low" },
] as const;

const recommendations = [
  ["Launch a 7-day sleep recovery challenge", "推出 7 日睡眠恢復 challenge", "Target groups with low sleep recovery and high workload pressure. Keep it opt-in and low effort.", "集中支援睡眠恢復低、工作量壓力高嘅群組；保持自願、低負擔。"],
  ["Reduce cognitive load for priority cohorts", "為優先群組減少認知負荷", "Protect one lighter day, review meeting density, and encourage shorter focus blocks.", "保護一日較輕工作量，檢視會議密度，鼓勵較短專注時段。"],
  ["Follow up with anonymous pulse check", "用匿名 pulse check 跟進", "Measure whether stress, recovery, and participation move after the campaign.", "量度活動後壓力、恢復同參與率有冇改善。"],
] as const;

const workflow = [
  ["Monitor", "監測", "Track anonymous movement across stress, sleep, focus, workload, mood, and participation.", "追蹤壓力、睡眠、專注、工作量、情緒同參與率嘅匿名變化。"],
  ["Predict", "預測", "Detect trend combinations that suggest recovery or support risk.", "偵測可能代表恢復或支援風險嘅趨勢組合。"],
  ["Plan", "規劃", "Recommend campaigns, workshops, resource routing, or professional support.", "建議活動、工作坊、資源配置或專業支援。"],
  ["Report", "報告", "Produce monthly management summaries without exposing private content.", "產生每月管理摘要，同時唔暴露私人內容。"],
] as const;

export default function AIDashboardPage() {
  const { locale } = useI18n();
  const isZh = locale === "zh";

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="bg-[#1d1d1f] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2 text-sm font-semibold text-[#5ac8fa] ring-1 ring-white/10">
              <Sparkles className="size-4" aria-hidden="true" />
              HumanOS AI Dashboard
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
              {isZh ? "俾學校同機構用嘅 AI 福祉決策層。" : "AI wellbeing intelligence for schools and organizations."}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/68">
              {isZh
                ? "Dashboard 唔係監控員工或學生。佢只顯示符合樣本門檻嘅匿名聚合趨勢，幫管理者決定邊個群組需要支援、應該做咩活動、成效如何評估。"
                : "The dashboard is not employee or student surveillance. It only shows anonymized, aggregated trends that meet sample thresholds, helping leaders decide which groups need support, what actions to run, and how impact should be measured."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/agent" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0066d6]">
                {isZh ? "查看用戶 Agent" : "View user agent"}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link href="/b2b" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.08] px-6 py-3.5 text-base font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/12">
                {isZh ? "查看 B2B 方案" : "View B2B model"}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-5 text-[#1d1d1f] shadow-[0_30px_90px_rgba(0,0,0,0.24)]">
            <div className="grid gap-3 sm:grid-cols-2">
              {metrics.map(([value, label, labelZh, detail, detailZh]) => (
                <div key={label} className="rounded-[1.35rem] bg-[#f5f5f7] p-5 ring-1 ring-black/5">
                  <p className="text-4xl font-semibold">{value}</p>
                  <p className="mt-3 text-sm font-semibold text-[#1d1d1f]">{isZh ? labelZh : label}</p>
                  <p className="mt-2 text-xs font-semibold text-[#6e6e73]">{isZh ? detailZh : detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-[1.35rem] bg-[#eaf5ff] p-5 text-[#007aff]">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Brain className="size-5" aria-hidden="true" />
                {isZh ? "AI 摘要" : "AI summary"}
              </p>
              <p className="mt-4 text-2xl font-semibold leading-tight text-[#1d1d1f]">
                {isZh
                  ? "今週主要 driver 係睡眠恢復下降同工作量壓力上升。建議先推恢復活動，再考慮加新績效目標。"
                  : "The strongest drivers this week are lower sleep recovery and higher workload pressure. Start with a recovery campaign before adding new performance targets."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-[#007aff]">{isZh ? "支援優先次序" : "Priority queue"}</p>
              <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
                {isZh ? "AI 顯示應該先支援邊個匿名群組。" : "AI shows which anonymous group should be supported first."}
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#6e6e73]">
                {isZh
                  ? "不顯示個人日記、私人 AI 對話、個人答案或可識別報告；小樣本群組會被隱藏。"
                  : "No personal journals, private AI chats, individual answers, or identifiable reports are shown. Small groups are suppressed."}
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.8rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
              <div className="grid min-w-[680px] gap-2" style={{ gridTemplateColumns: "180px repeat(5, 1fr)" }}>
                <div />
                {(isZh ? ["壓力", "睡眠", "專注", "工作量", "優先"] : ["Stress", "Sleep", "Focus", "Workload", "Priority"]).map((column) => (
                  <div key={column} className="text-xs font-semibold text-[#6e6e73]">{column}</div>
                ))}
                {rows.map((row) => (
                  <div key={row.group} className="contents">
                    <div className="py-3 text-sm font-semibold">{row.group}</div>
                    <HeatCell value={row.stress} riskHigh />
                    <HeatCell value={row.sleep} />
                    <HeatCell value={row.focus} />
                    <HeatCell value={row.workload} riskHigh />
                    <div className={`rounded-lg px-3 py-3 text-center text-xs font-semibold ${priorityTone(row.priority)}`}>
                      {row.priority}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#ff375f]">{isZh ? "AI 建議" : "AI recommendations"}</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98]">
              {isZh ? "由數據去到下一個行動。" : "From data to next action."}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {recommendations.map(([title, titleZh, body, bodyZh], index) => (
              <div key={title} className="rounded-[1.8rem] bg-[#f5f5f7] p-7 ring-1 ring-black/5">
                <div className="grid size-14 place-items-center rounded-3xl bg-white text-[#007aff] shadow-sm ring-1 ring-black/5">
                  {index === 0 ? <LineChart className="size-7" /> : index === 1 ? <BellRing className="size-7" /> : <FileText className="size-7" />}
                </div>
                <h3 className="mt-8 text-3xl font-semibold leading-none">{isZh ? titleZh : title}</h3>
                <p className="mt-5 text-base leading-7 text-[#6e6e73]">{isZh ? bodyZh : body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#5ac8fa]">{isZh ? "AI 工作流" : "AI workflow"}</p>
            <h2 className="mt-4 text-[clamp(2.6rem,6vw,5.8rem)] font-semibold leading-none">
              {isZh ? "唔係 chatbot，而係管理層嘅 wellbeing intelligence middle layer。" : "Not a chatbot. A wellbeing intelligence middle layer for leaders."}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {workflow.map(([title, titleZh, body, bodyZh]) => (
              <div key={title} className="rounded-[1.5rem] bg-white/[0.08] p-5 ring-1 ring-white/10">
                <CheckCircle2 className="size-6 text-[#34c759]" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-semibold">{isZh ? titleZh : title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{isZh ? bodyZh : body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 lg:px-8">
          <BottomCard icon={UsersRound} title={isZh ? "給管理者" : "For leaders"} body={isZh ? "知道邊個群組需要關注，而唔需要讀私人內容。" : "Know which group needs attention without reading private user content."} />
          <BottomCard icon={ShieldCheck} title={isZh ? "給私隱" : "For privacy"} body={isZh ? "使用聚合、樣本門檻、角色權限及小群組隱藏。" : "Use aggregation, sample thresholds, role permissions, and small-group suppression."} />
          <BottomCard icon={Zap} title={isZh ? "給行動" : "For action"} body={isZh ? "由 wellbeing 數據推進到活動、報告同可量度跟進。" : "Move from wellbeing data to campaigns, reports, and measurable follow-up."} />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function HeatCell({ value, riskHigh = false }: { value: number; riskHigh?: boolean }) {
  const risk = riskHigh ? value : 100 - value;
  const tone =
    risk >= 65
      ? "bg-[#fff0f3] text-[#ff375f]"
      : risk >= 45
        ? "bg-[#fff4df] text-[#b25000]"
        : "bg-[#eefcf3] text-[#248a3d]";

  return <div className={`rounded-lg px-3 py-3 text-center text-xs font-semibold ${tone}`}>{value}</div>;
}

function priorityTone(priority: string) {
  if (priority === "High") return "bg-[#fff0f3] text-[#ff375f]";
  if (priority === "Medium") return "bg-[#fff4df] text-[#b25000]";
  return "bg-[#eefcf3] text-[#248a3d]";
}

function BottomCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof BarChart3;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[1.5rem] bg-[#f5f5f7] p-6 ring-1 ring-black/5">
      <Icon className="size-7 text-[#007aff]" aria-hidden="true" />
      <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#6e6e73]">{body}</p>
    </div>
  );
}
