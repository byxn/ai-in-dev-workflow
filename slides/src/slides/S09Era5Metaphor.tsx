const rows = [
  { left: 'AI 模型', right: '一匹野马',          rightAccent: false },
  { left: 'Harness', right: '缰绳 + 护栏 + 仪表盘', rightAccent: true  },
  { left: '工程师',  right: '骑手',              rightAccent: false },
]

export default function S09Era5Metaphor() {
  return (
    <section style={{ background: 'var(--bg-dark)', color: 'var(--fg-invert)' }}>
      {/* chrome */}
      <div style={{ position: 'absolute', top: '72px', left: '120px', right: '120px', display: 'flex', justifyContent: 'space-between' }}>
        <div className="mono" style={{ fontSize: '28px', color: 'var(--accent)', letterSpacing: '4px' }}>§ 08 · THE REVEAL</div>
        <div className="mono" style={{ fontSize: '24px', color: 'var(--mute-dark)', letterSpacing: '2px' }}>09 / 18</div>
      </div>
      <div style={{ position: 'absolute', top: '128px', left: '120px', right: '120px', height: '1px', background: 'var(--rule-dark)' }} />

      {/* large harness silhouette left */}
      <div style={{ position: 'absolute', left: '120px', top: '280px', width: '580px', height: '560px', opacity: 0.55 }}>
        <svg viewBox="0 0 400 360" style={{ width: '100%', height: '100%', color: 'var(--fg-invert)' }}>
          <g className="harness" strokeWidth="3">
            <path d="M70,110 Q200,60 330,110 L324,180 Q200,230 76,180 Z" />
            <line x1="76" y1="180" x2="324" y2="180" />
            <line x1="200" y1="180" x2="200" y2="210" />
            <circle cx="200" cy="140" r="8" fill="currentColor" />
            <path d="M90,175 Q120,260 130,340" />
            <path d="M310,175 Q290,260 280,340" />
            <line x1="110" y1="168" x2="98" y2="250" />
            <line x1="290" y1="168" x2="302" y2="250" />
            <path d="M100,108 Q200,95 300,108" />
          </g>
        </svg>
      </div>

      {/* right side content */}
      <div style={{ position: 'absolute', right: '120px', top: '220px', width: '860px', color: 'var(--fg-invert)' }}>
        <div className="sg" style={{ fontSize: '88px', fontWeight: 500, lineHeight: 1, letterSpacing: '-2px' }}>Harness Engineering</div>
        <div className="mono" style={{ fontSize: '32px', color: 'var(--accent)', letterSpacing: '2px', marginTop: '20px' }}>— 驾驭工程</div>

        <div style={{ marginTop: '72px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {rows.map((r) => (
            <div key={r.left} style={{ display: 'grid', gridTemplateColumns: '280px 40px 1fr', alignItems: 'baseline', borderTop: '1px solid var(--rule-dark)', paddingTop: '20px' }}>
              <div className="sg" style={{ fontSize: '40px', fontWeight: 400, color: r.left === 'Harness' ? 'var(--accent)' : 'inherit' }}>{r.left}</div>
              <div className="mono" style={{ fontSize: '36px', color: 'var(--mute-dark)' }}>=</div>
              <div className="sg" style={{ fontSize: '40px', fontWeight: 400, color: r.rightAccent ? 'var(--accent)' : '#d4d1c8' }}>{r.right}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '72px', borderTop: '2px solid var(--fg-invert)', paddingTop: '28px' }}>
          <div className="sg" style={{ fontSize: '56px', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-1px' }}>
            Humans steer. <span style={{ color: 'var(--accent)' }}>Agents execute.</span>
          </div>
          <div style={{ fontSize: '30px', color: '#d4d1c8', marginTop: '14px', fontWeight: 300 }}>人类掌舵 · Agent 执行</div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '128px', left: '120px', right: '120px', height: '1px', background: 'var(--rule-dark)' }} />
      <div style={{ position: 'absolute', bottom: '72px', left: '120px', right: '120px', display: 'flex', justifyContent: 'space-between' }}>
        <div className="mono" style={{ fontSize: '24px', color: 'var(--mute-dark)', letterSpacing: '2px' }}>§ 08 · 符号揭示</div>
        <div className="mono" style={{ fontSize: '24px', color: 'var(--mute-dark)', letterSpacing: '2px' }}>THE KEY METAPHOR</div>
      </div>
    </section>
  )
}
