export default function S10Era5Proof() {
  return (
    <section style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <div className="chrome-top">
        <div className="page-eyebrow">§ 09 · ERA 05 · PROOF</div>
        <div className="chrome-label">10 / 18</div>
      </div>
      <div className="rule-top" />

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px' }}>
        <div className="sg" style={{ fontSize: '84px', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-2px' }}>
          同一个模型,<br />不同的 <span style={{ color: 'var(--accent)' }}>Harness</span>。
        </div>
        <div className="mono" style={{ fontSize: '28px', color: '#4a4a55', marginTop: '24px' }}>LangChain · Terminal Bench 2.0</div>
      </div>

      <div style={{ position: 'absolute', left: '120px', top: '580px', right: '120px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
        {/* Score */}
        <div style={{ borderTop: '1px solid var(--rule-soft)', paddingTop: '40px' }}>
          <div className="mono" style={{ fontSize: '28px', color: 'var(--mute)', letterSpacing: '2px', marginBottom: '24px' }}>得分 · SCORE</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '32px' }}>
            <div className="sg" style={{ fontSize: '120px', fontWeight: 400, color: 'var(--mute)', letterSpacing: '-2px', lineHeight: 1 }}>52.8%</div>
            <div className="mono" style={{ fontSize: '64px', color: 'var(--accent)' }}>→</div>
            <div className="sg" style={{ fontSize: '140px', fontWeight: 700, color: 'var(--accent)', letterSpacing: '-3px', lineHeight: 1 }}>66.5%</div>
          </div>
        </div>
        {/* Rank */}
        <div style={{ borderTop: '1px solid var(--rule-soft)', paddingTop: '40px' }}>
          <div className="mono" style={{ fontSize: '28px', color: 'var(--mute)', letterSpacing: '2px', marginBottom: '24px' }}>排名 · RANK</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '32px' }}>
            <div className="sg" style={{ fontSize: '120px', fontWeight: 400, color: 'var(--mute)', letterSpacing: '-2px', lineHeight: 1 }}>第 30</div>
            <div className="mono" style={{ fontSize: '64px', color: 'var(--accent)' }}>→</div>
            <div className="sg" style={{ fontSize: '140px', fontWeight: 700, color: 'var(--accent)', letterSpacing: '-3px', lineHeight: 1 }}>第 5</div>
          </div>
        </div>
      </div>

      <div className="rule-bottom" />
      <div className="chrome-bottom">
        <div className="chrome-label" style={{ color: 'var(--accent)' }}>🔑 &nbsp; 模型没变 · 只优化 Harness</div>
        <div className="chrome-label">§ 09 · Proof</div>
      </div>
    </section>
  )
}
