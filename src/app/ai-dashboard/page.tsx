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

const aiMetrics = [
  ["78", "Average wellbeing score", "平均 wellbeing 分數", "Stable with mild recovery pressure", "穩定，但有輕微恢復壓力"],
  ["24%", "Sleep recovery risk", "睡眠恢復風險", "Up 6% versus last week", "比上星期上升 6%"],
  ["18%", "Burnout awareness group", "Burnout awareness 群組", "Concentrated in two cohorts", "集中在兩個群組"],
  ["64%", "Campaign completion", "活動完成率", "Shift recovery plan is leading", "輪班恢復計劃表現最好"],
] as const;

const cohortRows = [
  { group: "Year 3 Students", stress: 72, sleep: 44, focus: 58, workload: 76, priority: "High" },
  { group: "Front Desk", stress: 68, sleep: 49, focus: 62, workload: 71, priority: "High" },
  { group: "F&B Team", stress: 54, sleep: 61, focus: 70, workload: 58, priority: "Medium" },
  { group: "Back Office", stress: 38, sleep: 73, focus: 76, workload: 42, priority: "Low" },
] as const;

const recommendations = [
  {
    title: "Launch a 7-day sleep recovery challenge",
    titleZh: "推出 7 日睡眠恢復挑戰",
    body: "Target groups with low sleep recovery and high workload pressure. Keep it opt-in and low effort.",
    bodyZh: "針對睡眠恢復低、工作量壓力高的群組。保持自願參與，步驟要輕。",
  },
  {
    title: "Reduce cognitive load for priority cohorts",
    titleZh: "降低優先群組的腦力負荷",
    body: "Protect one lighter day, review meeting density, and encourage shorter focus blocks.",
    bodyZh: "保護一個較輕鬆的日子，檢視會議密度，鼓勵較短的專注時段。",
  },
  {
    title: "Follow up with anonymous pulse check",
    titleZh: "用匿名 pulse check 跟進",
    body: "Measure whether stress, recovery, and participation move after the campaign.",
    bodyZh: "量度活動後壓力、恢復和參與率有沒有真正變化。",
  },
] as const;

const aiWorkflow = [
  ["Detect", "偵測", "AI watches anonymous trend movement across stress, sleep, focus, workload, mood, and participation.", "AI 觀察壓力、睡眠、專注、工作量、情緒和參與率的匿名趨勢變化。"],
  ["Explain", "解釋", "The dashboard turns signals into plain-language drivers and confidence notes.", "Dashboard 將訊號轉成容易理解的原因、驅動因素和信心提示。"],
  ["Recommend", "建議", "Leaders get next actions that respect privacy thresholds and small-group suppression.", "管理者得到下一步行動，同時遵守私隱門檻和小群組隱藏。"],
  ["Report", "報告", "Monthly AI reports summarize impact, trend changes, and recommended pilots.", "每月 AI 報告總結影響、趨勢變化和建議 pilot。"],
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
              {isZh ? "HumanOS AI Dashboard" : "HumanOS AI Dashboard"}
            </p>
            <h1 className="mt-6 text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
              {isZh ? "給學校和機構使用的 AI 洞察。" : "AI insight for schools and organizations."}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/68">
              {isZh
                ? "Dashboard 幫管理者理解匿名 wellbeing 模式，找出早期支援優先次序，並決定下一步應該做甚麼 wellbeing 行動。"
                : "The dashboard helps leaders understand anonymous wellbeing patterns, spot early support priorities, and decide which wellbeing actions should happen next."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/agent"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(0,122,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0066d6] focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:ring-offset-2"
              >
                {isZh ? "查看用戶智能體" : "View user agent"}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="/organization-dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.08] px-6 py-3.5 text-base font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-[#5ac8fa] focus:ring-offset-2 focus:ring-offset-[#1d1d1f]"
              >
                {isZh ? "打開現有 dashboard" : "Open existing dashboard"}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-5 text-[#1d1d1f] shadow-[0_30px_90px_rgba(0,0,0,0.24)]">
            <div className="grid gap-3 sm:grid-cols-2">
              {aiMetrics.map(([value, label, labelZh, detail, detailZh]) => (
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
                  ? "今個星期最主要的驅動因素是睡眠恢復和工作量壓力。先做恢復活動，再加入新的表現目標。"
                  : "Sleep recovery and workload pressure are the strongest drivers this week. Start with a recovery campaign before adding performance targets."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-[#007aff]">{isZh ? "優先支援隊列" : "Priority queue"}</p>
              <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
                {isZh ? "AI 顯示應該先支援邊一組。" : "AI shows where support should go first."}
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#6e6e73]">
                {isZh
                  ? "Dashboard 不會顯示私人日記或個人 AI 對話，只會顯示符合私隱門檻的匿名聚合趨勢。"
                  : "The dashboard never shows private journals or individual AI chats. It only surfaces anonymous, aggregated patterns that meet privacy thresholds."}
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.8rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
              <div className="grid min-w-[680px] gap-2" style={{ gridTemplateColumns: "180px repeat(5, 1fr)" }}>
                <div />
                {(isZh ? ["壓力", "睡眠", "專注", "工作量", "優先"] : ["Stress", "Sleep", "Focus", "Workload", "Priority"]).map((column) => (
                  <div key={column} className="text-xs font-semibold text-[#6e6e73]">{column}</div>
                ))}
                {cohortRows.map((row) => (
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
              {isZh ? "由數據去到下一步行動。" : "From data to next action."}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {recommendations.map(({ title, titleZh, body, bodyZh }, index) => (
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
              {isZh ? "一個會同團隊一齊思考的 dashboard。" : "A dashboard that thinks with the team."}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {aiWorkflow.map(([title, titleZh, body, bodyZh]) => (
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
          <BottomCard icon={UsersRound} title={isZh ? "給管理者" : "For leaders"} body={isZh ? "不用閱讀私人內容，也知道哪一組需要注意。" : "Know which group needs attention without reading private user content."} />
          <BottomCard icon={ShieldCheck} title={isZh ? "給私隱" : "For privacy"} body={isZh ? "使用聚合、門檻和不顯示私人 AI 對話的設計。" : "Use aggregation, thresholds, and no private AI chat visibility."} />
          <BottomCard icon={Zap} title={isZh ? "給行動" : "For action"} body={isZh ? "由 wellbeing 數據推進到活動、報告和可量度跟進。" : "Move from wellbeing data to campaigns, reports, and measurable follow-up."} />
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
