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
      <div className="grid grid-cols-3 gap-[14px]">
        {techs.map((t, i) => (
          <div
            key={i}
            className="fragment flex items-start gap-3 rounded-[10px] px-[18px] py-[14px] border"
            style={{ background: t.colorBg, borderColor: t.colorBorder }}
          >
            <div
              className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-[17px] border"
              style={{
                background: `color-mix(in srgb, ${t.color} 12%, transparent)`,
                borderColor: `color-mix(in srgb, ${t.color} 25%, transparent)`,
              }}
            >
              {t.icon}
            </div>
            <div>
              <div className="text-[15px] font-bold mb-1" style={{ color: t.color }}>{t.name}</div>
              <div className="text-xs text-muted leading-[1.6]">{t.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
