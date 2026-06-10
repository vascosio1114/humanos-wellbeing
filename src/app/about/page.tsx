import { BarChart3, Building2, HeartHandshake, MapPinned, ShieldCheck } from "lucide-react";
import { Footer, Navbar } from "@/components/humanos/layout";
import {
  platformLayers,
  proposalPositioning,
  roadmapMilestones,
} from "@/lib/proposal-data";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <section className="relative isolate bg-white">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_20%_10%,rgba(0,122,255,0.16),transparent_32%),radial-gradient(circle_at_80%_12%,rgba(52,199,89,0.16),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#eaf5ff] px-4 py-2 text-sm font-semibold text-[#007aff] shadow-sm ring-1 ring-black/5">
            <HeartHandshake className="size-4" aria-hidden="true" />
            About HumanOS
          </p>
          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.94] tracking-normal">
            HumanOS 是面向機構的工學共生健康智能平台。
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-[#6e6e73]">
            {proposalPositioning.thesis} 產品以 B2B 優先，先服務學校、酒店、企業及公共服務機構，再延展至個人自助健康助理與更大的健康支援生態。
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 lg:px-8">
          {platformLayers.map((layer, index) => {
            const Icon = [Building2, BarChart3, ShieldCheck][index];
            return (
              <div key={layer.stage} className="rounded-[1.6rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
                <Icon className="size-7 text-[#007aff]" aria-hidden="true" />
                <p className="mt-6 text-sm font-semibold text-[#6e6e73]">{layer.stage}</p>
                <h2 className="mt-2 text-2xl font-semibold">{layer.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#6e6e73]">服務對象：{layer.audience}</p>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#1d1d1f]">{layer.value}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#007aff]">Macao-first strategy</p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-none">
              先用澳門做高密度示範市場，再進入大灣區。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6e6e73]">
              澳門市場細、密度高、學校與大型服務業集中，適合快速建立試點案例。HumanOS 對應「1+4」多元發展方向，切入大健康、高新技術、教育與企業福祉。
            </p>
          </div>
          <div className="rounded-[2rem] bg-[#1d1d1f] p-6 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <MapPinned className="size-8 text-[#34c759]" aria-hidden="true" />
            <h3 className="mt-8 text-3xl font-semibold leading-tight">
              Demonstration market thesis
            </h3>
            <p className="mt-5 text-sm leading-7 text-white/68">
              用學校、酒店、企業及公共服務四類場景證明 HumanOS 能夠提升早期支援能力、配置健康資源、衡量活動成效，並在私隱安全前提下產生機構決策價值。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-[#007aff]">Roadmap</p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[0.98]">
              由試點驗證，到澳門示範，再到大灣區平台化。
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {roadmapMilestones.map(([phase, time, goal]) => (
              <div key={phase} className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
                <p className="text-sm font-semibold text-[#007aff]">{time}</p>
                <h3 className="mt-5 text-xl font-semibold leading-tight">{phase}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6e6e73]">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
