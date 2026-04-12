import SlideHeader from '../components/SlideHeader'

const techs = [
  {
    name: 'Agent Loop',
    desc: 'AI 自主循环执行：感知 → 思考 → 行动 → 反馈，直到任务完成。',
    icon: '🔄',
    color: 'var(--accent)',
    colorBg: 'rgba(0,212,170,0.05)',
    colorBorder: 'rgba(0,212,170,0.18)',
  },
  {
    name: 'Tool Use',
    desc: 'AI 调用外部工具（终端、浏览器、API），突破纯文本生成的边界。',
    icon: '🔧',
    color: 'var(--purple)',
    colorBg: 'rgba(139,92,246,0.05)',
    colorBorder: 'rgba(139,92,246,0.18)',
  },
  {
    name: 'MCP',
    desc: 'Model Context Protocol — 标准化 AI 与工具/数据源的连接协议。',
    icon: '🔌',
    color: '#00b8ff',
    colorBg: 'rgba(0,184,255,0.05)',
    colorBorder: 'rgba(0,184,255,0.18)',
  },
  {
    name: 'Long Context',
    desc: '百万 token 上下文窗口，让 AI 理解整个代码库而非单个文件。',
    icon: '📚',
    color: 'var(--amber)',
    colorBg: 'rgba(245,158,11,0.05)',
    colorBorder: 'rgba(245,158,11,0.18)',
  },
  {
    name: 'RAG',
    desc: '检索增强生成 — 让 AI 实时查询私有知识库，回答更精准。',
    icon: '🔍',
    color: '#f97316',
    colorBg: 'rgba(249,115,22,0.05)',
    colorBorder: 'rgba(249,115,22,0.18)',
  },
  {
    name: 'Multi-Agent',
    desc: '多个专业 Agent 协同工作，并行完成复杂任务，超越单 Agent 上限。',
    icon: '🤝',
    color: '#ec4899',
    colorBg: 'rgba(236,72,153,0.05)',
    colorBorder: 'rgba(236,72,153,0.18)',
  },
]

export default function S12Tech() {
  return (
    <section>
      <SlideHeader tag="03 · 最前沿技术" title={<><span className="hi">2025</span> 最前沿技术</>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {techs.map((t, i) => (
          <div key={i} className="fragment" style={{
            background: t.colorBg,
            border: `1px solid ${t.colorBorder}`,
            borderRadius: 10,
            padding: '14px 18px',
            display: 'flex',
            gap: 12,
            alignItems: 'flex-start',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8, flexShrink: 0,
              background: `color-mix(in srgb, ${t.color} 12%, transparent)`,
              border: `1px solid color-mix(in srgb, ${t.color} 25%, transparent)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17,
            }}>{t.icon}</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: t.color, marginBottom: 4 }}>{t.name}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{t.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
