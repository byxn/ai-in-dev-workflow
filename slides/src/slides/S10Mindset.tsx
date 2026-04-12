import styles from './S10Mindset.module.css'

const concepts = [
  {
    left: 'Prompt',
    op: '=',
    right: '需求规格 Spec',
    desc: '你写的每一句 Prompt 都是在定义需求。越精确，AI 越能帮你。',
    color: 'var(--accent)',
    colorBg: 'rgba(0,212,170,0.05)',
    colorBorder: 'rgba(0,212,170,0.18)',
  },
  {
    left: '多轮对话',
    op: '=',
    right: 'Code Review',
    desc: '不满意就继续对话修正 — 这本质上是在做代码审查，而非重写。',
    color: 'var(--purple)',
    colorBg: 'rgba(139,92,246,0.05)',
    colorBorder: 'rgba(139,92,246,0.18)',
  },
  {
    left: 'Agent Loop',
    op: '=',
    right: '自动执行流水线',
    desc: '让 AI 持续执行直到目标达成。你是流水线的设计者，不是工人。',
    color: '#00b8ff',
    colorBg: 'rgba(0,184,255,0.05)',
    colorBorder: 'rgba(0,184,255,0.18)',
  },
]

export default function S10Mindset() {
  return (
    <section>
      <div style={{ marginBottom: 28 }}>
        <div className="slide-tag">02 · 范式变化</div>
        <h2 className="slide-title">
          你不再写代码，你在<span className="hi">训练一个工程师</span>
        </h2>
      </div>

      <div className={styles.grid}>
        {concepts.map((c, i) => (
          <div key={i} className="fragment" style={{
            background: c.colorBg,
            border: `1px solid ${c.colorBorder}`,
            borderRadius: 12,
            padding: '20px 24px',
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: c.color }}>{c.left}</span>
              <span style={{ fontSize: 16, color: 'var(--muted)' }}>{c.op}</span>
              <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)' }}>{c.right}</span>
            </div>
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
