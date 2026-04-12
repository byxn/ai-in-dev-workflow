import SlideHeader from '../components/SlideHeader'

const steps = [
  {
    step: '第一步',
    when: '本周',
    title: '认知升级',
    items: [
      '全员安装 Cursor，用真实项目感受差距',
      '把 AI 当初级工程师，而不是辅助工具',
      '抛掉「AI 只是补全」的旧认知',
    ],
    color: 'var(--accent)',
    colorBg: 'rgba(0,212,170,0.05)',
    colorBorder: 'rgba(0,212,170,0.2)',
  },
  {
    step: '第二步',
    when: '1 个月内',
    title: '能力建设',
    items: [
      '技术同学：学写高质量 Prompt / Spec',
      '非技术同学：用 AI 将需求转为技术 Spec',
      '掌握 Agent 工作流，让 AI 自主执行',
    ],
    color: 'var(--purple)',
    colorBg: 'rgba(139,92,246,0.05)',
    colorBorder: 'rgba(139,92,246,0.2)',
  },
  {
    step: '第三步',
    when: '1 个季度',
    title: '流程重构',
    items: [
      'AI 纳入正式开发流程（标配，非可选）',
      '建立团队 Prompt 规范库 + 评审标准',
      '探索 MCP + Multi-Agent 工作流落地',
    ],
    color: 'var(--amber)',
    colorBg: 'rgba(245,158,11,0.05)',
    colorBorder: 'rgba(245,158,11,0.2)',
  },
]

export default function S14ActionPlan() {
  return (
    <section>
      <SlideHeader tag="04 · 行动计划" title={<>团队<span className="hi">行动计划</span></>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {steps.map((s, i) => (
          <div key={i} className="fragment" style={{
            background: s.colorBg,
            border: `1px solid ${s.colorBorder}`,
            borderRadius: 12,
            padding: '20px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}>
            {/* header */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: s.color, letterSpacing: 1 }}>{s.step}</span>
                <span style={{
                  fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 4,
                  color: s.color, background: `color-mix(in srgb, ${s.color} 12%, transparent)`,
                }}>{s.when}</span>
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)' }}>{s.title}</div>
            </div>

            {/* items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {s.items.map((item, j) => (
                <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 13, color: 'var(--muted)', lineHeight: 1.55 }}>
                  <span style={{ color: s.color, fontSize: 10, marginTop: 3, flexShrink: 0 }}>▸</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
