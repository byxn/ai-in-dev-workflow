import SlideHeader from '../components/SlideHeader'

const skills = [
  {
    num: '01',
    title: '抽象能力',
    desc: '把模糊需求转化为精确 Spec，让 AI 真正理解你想要什么。',
    color: 'var(--accent)',
    colorBg: 'rgba(0,212,170,0.05)',
    colorBorder: 'rgba(0,212,170,0.18)',
  },
  {
    num: '02',
    title: '系统设计能力',
    desc: '设计 AI 执行的任务边界与接口，掌控全局，不被细节淹没。',
    color: 'var(--purple)',
    colorBg: 'rgba(139,92,246,0.05)',
    colorBorder: 'rgba(139,92,246,0.18)',
  },
  {
    num: '03',
    title: 'Prompt 工程',
    desc: '精准描述意图，驾驭 AI 输出质量。',
    color: '#00b8ff',
    colorBg: 'rgba(0,184,255,0.05)',
    colorBorder: 'rgba(0,184,255,0.18)',
  },
  {
    num: '04',
    title: 'AI 调度能力',
    desc: '协调多个 Agent 协同工作，验证与修正 AI 执行结果。',
    color: 'var(--amber)',
    colorBg: 'rgba(245,158,11,0.05)',
    colorBorder: 'rgba(245,158,11,0.18)',
  },
]

export default function S06Skills() {
  return (
    <section>
      <SlideHeader tag="01 · 现状速览" title={<>未来程序员需要什么<span className="hi">新能力</span></>} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {skills.map((s, i) => (
          <div key={i} className="fragment" style={{
            background: s.colorBg,
            border: `1px solid ${s.colorBorder}`,
            borderRadius: 12,
            padding: '18px 22px',
            display: 'flex',
            gap: 16,
            alignItems: 'flex-start',
          }}>
            <div style={{
              fontSize: 28,
              fontWeight: 900,
              color: s.color,
              lineHeight: 1,
              opacity: 0.5,
              flexShrink: 0,
              minWidth: 36,
              fontVariantNumeric: 'tabular-nums',
            }}>{s.num}</div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
