const timeline = [
  { date: '2023.03', event: '上线 · 只有 AI 聊天' },
  { date: '2024 中', event: 'Composer · 跨文件修改' },
  { date: '2024.12', event: 'Agent 模式' },
  { date: '2025.10', event: 'Cursor 2.0 · 8 Agent 并行' },
  { date: '2026.04', event: 'Cursor 3.0', accent: true },
]

const stats = [
  { value: '$29.3B', label: '估值' },
  { value: '$1B',    label: '史上最快 ARR' },
  { value: '10 亿',  label: '每天被接受的 AI 代码行数' },
]

export default function S05Era3() {
  return (
    <section style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <div className="chrome-top">
        <div className="page-eyebrow">§ 04 · ERA 03</div>
        <div className="chrome-label">05 / 18</div>
      </div>
      <div className="rule-top" />

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px' }}>
        <div className="mono" style={{ fontSize: '28px', color: 'var(--mute)', letterSpacing: '3px', marginBottom: '24px' }}>时代 3 · 2023</div>
        <div className="sg" style={{ fontSize: '88px', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-2px' }}>AI IDE</div>
        <div className="mono" style={{ fontSize: '30px', color: '#4a4a55', marginTop: '24px' }}>Cursor · 2023 年 3 月 · 4 个 MIT 学生辍学创业</div>
      </div>

      {/* timeline left */}
      <div style={{ position: 'absolute', left: '120px', top: '460px', right: '760px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '32px', rowGap: '28px', fontSize: '30px' }}>
          {timeline.flatMap((t) => [
            <div key={`d-${t.date}`} className="mono" style={{ color: t.accent ? 'var(--accent)' : 'var(--mute)' }}>{t.date}</div>,
            <div key={`e-${t.date}`} style={{ color: t.accent ? 'var(--accent)' : 'var(--fg)', fontWeight: t.accent ? 500 : 400 }}>{t.event}</div>,
          ])}
        </div>
      </div>

      {/* stats right */}
      <div style={{ position: 'absolute', right: '120px', top: '460px', width: '580px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {stats.map((s) => (
          <div key={s.label} style={{ borderTop: '1px solid var(--rule-soft)', paddingTop: '18px' }}>
            <div className="mono sg" style={{ fontSize: '76px', fontWeight: 500, color: s.label === '估值' ? 'var(--accent)' : 'var(--fg)', letterSpacing: '-2px', lineHeight: 1 }}>
              {s.value}
            </div>
            <div style={{ fontSize: '24px', color: '#4a4a55', marginTop: '8px' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="rule-bottom" />
      <div className="chrome-bottom">
        <div className="chrome-label">§ 04 · Cursor</div>
        <div className="chrome-label">2023 → 2026</div>
      </div>
    </section>
  )
}
