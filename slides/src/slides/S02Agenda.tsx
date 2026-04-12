const sections = [
  {
    num: '01',
    title: '现状速览',
    desc: 'AI 发展阶段 · 程序员分化 · 工具全景',
    color: 'var(--accent)',
    colorBg: 'rgba(0,212,170,0.06)',
    colorBorder: 'rgba(0,212,170,0.2)',
  },
  {
    num: '02',
    title: '范式变化',
    desc: '开发方式的本质改变',
    color: 'var(--purple)',
    colorBg: 'rgba(139,92,246,0.06)',
    colorBorder: 'rgba(139,92,246,0.2)',
  },
  {
    num: '03',
    title: '最前沿技术',
    desc: 'Agent Loop · MCP · Multi-Agent 等',
    color: '#00b8ff',
    colorBg: 'rgba(0,184,255,0.06)',
    colorBorder: 'rgba(0,184,255,0.2)',
  },
  {
    num: '04',
    title: '对我们的影响 & 行动',
    desc: '团队行动计划',
    color: 'var(--amber)',
    colorBg: 'rgba(245,158,11,0.06)',
    colorBorder: 'rgba(245,158,11,0.2)',
  },
]

export default function S02Agenda() {
  return (
    <section>
      <div className="mb-8">
        <div className="slide-tag">Agenda</div>
        <h2 className="slide-title">今日议程</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {sections.map((s, i) => (
          <div
            key={i}
            className="fragment flex items-start gap-4 rounded-xl px-6 py-5 border"
            style={{ background: s.colorBg, borderColor: s.colorBorder }}
          >
            <div
              className="text-[36px] font-black leading-none opacity-60 shrink-0 tabular-nums"
              style={{ color: s.color }}
            >
              {s.num}
            </div>
            <div>
              <div className="text-xl font-bold text-fg mb-[6px]">{s.title}</div>
              <div className="text-[13px] text-muted leading-[1.6]">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
