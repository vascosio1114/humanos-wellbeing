"use client";

import { CheckCircle2, LockKeyhole, ShieldCheck, XCircle } from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import { useI18n } from "@/lib/i18n";

const canSee = [
  ["Anonymous group trends", "匿名群組趨勢"],
  ["Participation and completion rates", "參與率及完成率"],
  ["Aggregated stress, sleep, focus, workload, mood, and recovery movement", "聚合嘅壓力、睡眠、專注、工作量、情緒及恢復趨勢"],
  ["Suggested campaigns, workshops, resource routing, and monthly management reports", "建議活動、工作坊、資源配置及每月管理報告"],
] as const;

const cannotSee = [
  ["Personal journals", "個人日記"],
  ["Private AI conversations", "私人 AI 對話"],
  ["Individual check-in answers", "個人 check-in 答案"],
  ["Identifiable wellbeing reports", "可識別個人嘅 wellbeing 報告"],
  ["Small-group data below privacy thresholds", "低於私隱樣本門檻嘅小群組資料"],
  ["Private mental wellbeing content", "私人心理福祉內容"],
] as const;

const principles = [
  ["Privacy-first", "私隱優先", "Individual content belongs to the user. Institution views are anonymous-first.", "個人內容屬於用戶；機構視圖匿名優先。"],
  ["Data minimization", "資料最少化", "Collect only what is needed for wellbeing awareness, support planning, and reporting.", "只收集 wellbeing awareness、支援規劃及報告所需資料。"],
  ["Role permissions", "角色權限", "Different roles see different levels of aggregated insight.", "不同角色只可查看相應層級嘅聚合洞察。"],
  ["Responsible escalation", "負責任轉介", "High-risk signals should route users to licensed professionals or existing support channels.", "高風險訊號應轉介至合資格專業人士或既有支援渠道。"],
] as const;

export default function PrivacyPage() {
  const { locale } = useI18n();
  const isZh = locale === "zh";

  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />
      <section className="bg-[#1d1d1f] py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2 text-sm font-semibold text-[#5ac8fa] ring-1 ring-white/10">
            <ShieldCheck className="size-4" aria-hidden="true" />
            {isZh ? "私隱與負責任使用" : "Privacy & responsible use"}
          </p>
          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.96]">
            {isZh ? "HumanOS 要有用，但唔可以令人覺得被監控。" : "HumanOS must be useful without becoming surveillance."}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-white/68">
            {isZh
              ? "HumanOS 以 anonymous-first、data minimization、role-based permission 及 minimum sample thresholds 設計。私人日記、個人 AI 對話及可識別報告唔會俾學校或僱主睇。"
              : "HumanOS is designed around anonymous-first reporting, data minimization, role-based permission, and minimum sample thresholds. Private journals, individual AI chats, and identifiable reports are not shown to schools or employers."}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="text-2xl font-semibold">{isZh ? "機構可以見到" : "Institutions can see"}</h2>
          <div className="mt-6 space-y-3">
            {canSee.map(([en, zh]) => (
              <div key={en} className="flex gap-3 text-sm leading-6 text-[#6e6e73]">
                <CheckCircle2 className="size-5 shrink-0 text-[#34c759]" aria-hidden="true" />
                {isZh ? zh : en}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="text-2xl font-semibold">{isZh ? "機構不能見到" : "Institutions cannot see"}</h2>
          <div className="mt-6 space-y-3">
            {cannotSee.map(([en, zh]) => (
              <div key={en} className="flex gap-3 text-sm leading-6 text-[#6e6e73]">
                <XCircle className="size-5 shrink-0 text-[#ff375f]" aria-hidden="true" />
                {isZh ? zh : en}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {principles.map(([en, zh, bodyEn, bodyZh]) => (
            <div key={en} className="rounded-[1.5rem] bg-white p-6 ring-1 ring-black/5">
              <LockKeyhole className="size-6 text-[#007aff]" aria-hidden="true" />
              <h3 className="mt-8 text-xl font-semibold">{isZh ? zh : en}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{isZh ? bodyZh : bodyEn}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-[1.5rem] bg-[#eaf5ff] p-6 text-sm leading-7 text-[#1d1d1f] ring-1 ring-[#007aff]/10">
          {isZh
            ? "HumanOS 提供 wellbeing guidance、壓力覺察及早期支援參考，不提供醫療診斷、治療、處方或危機干預。澳門落地應配合《個人資料保護法》第 8/2005 號法律，並建立資料字典、處理目的、保留期、刪除流程、合約條款及高風險轉介流程。"
            : "HumanOS provides wellbeing guidance, stress awareness, and early-support references. It does not provide medical diagnosis, treatment, prescriptions, or crisis intervention. Macao deployment should align with Personal Data Protection Law No. 8/2005 and include a data dictionary, processing purpose, retention period, deletion process, contracts, and high-risk referral workflow."}
        </div>
      </section>
      <Footer />
    </main>
  );
}
