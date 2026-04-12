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
      <div style={{ marginBottom: 32 }}>
        <div className="slide-tag">Agenda</div>
        <h2 className="slide-title">今日议程</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {sections.map((s, i) => (
          <div
            key={i}
            className="fragment"
            style={{
              background: s.colorBg,
              border: `1px solid ${s.colorBorder}`,
              borderRadius: 12,
              padding: '20px 24px',
              display: 'flex',
              gap: 16,
              alignItems: 'flex-start',
            }}
          >
            <div style={{
              fontSize: 36,
              fontWeight: 900,
              color: s.color,
              lineHeight: 1,
              opacity: 0.6,
              flexShrink: 0,
              fontVariantNumeric: 'tabular-nums',
            }}>{s.num}</div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
