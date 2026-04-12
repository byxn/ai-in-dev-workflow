import SlideHeader from '../components/SlideHeader'

const oldSteps = ['需求', '设计', '写代码', 'Debug', '查文档', '手动实现']
const newSteps = ['描述意图', '写 Prompt / Spec', 'AI 生成', '驯化 AI', '让 AI 查', '自动生成']

export default function S09Paradigm() {
  return (
    <section>
      <SlideHeader tag="02 · 范式变化" title={<>开发范式：<span className="hi">旧世界</span> vs <span className="hi">新世界</span></>} />

      <div className="grid grid-cols-[1fr_48px_1fr] items-stretch mt-2">
        {/* old world */}
        <div className="fragment">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-red-500 mb-3 text-center">旧世界</div>
          <div className="flex flex-col gap-2">
            {oldSteps.map((s, i) => (
              <div key={i} className="flex items-center gap-[10px] bg-panel border border-[var(--border)] rounded-lg px-4 py-[10px] text-sm text-muted">
                <span className="text-[10px] text-red-500/50">●</span>
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* middle arrows */}
        <div className="flex flex-col items-center justify-center gap-[18px] pt-[38px]">
          {Array(6).fill('→').map((a, i) => (
            <div key={i} className="text-sm text-accent/30">{a}</div>
          ))}
        </div>

        {/* new world */}
        <div className="fragment">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-accent mb-3 text-center">新世界</div>
          <div className="flex flex-col gap-2">
            {newSteps.map((s, i) => (
              <div key={i} className="flex items-center gap-[10px] bg-accent/[0.04] border border-accent/20 rounded-lg px-4 py-[10px] text-sm text-fg">
                <span className="text-[10px] text-accent">●</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
