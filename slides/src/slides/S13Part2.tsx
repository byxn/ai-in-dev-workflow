export default function S13Part2() {
  return (
    <section style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <div className="chrome-top">
        <div className="page-eyebrow">PART · TWO</div>
        <div className="chrome-label">13 / 18</div>
      </div>
      <div className="rule-top" />

      <div style={{ position: 'absolute', left: '180px', top: '280px', right: '120px' }}>
        <div className="sg" style={{ fontSize: '280px', fontWeight: 500, letterSpacing: '-10px', lineHeight: 0.85 }}>Part&nbsp;2</div>
        <div className="sg" style={{ fontSize: '120px', fontWeight: 400, letterSpacing: '-3px', lineHeight: 1, marginTop: '32px' }}>
          每个人的 <span style={{ color: 'var(--accent)' }}>AI 工具箱</span>
        </div>
        <div style={{ fontSize: '36px', color: '#4a4a55', marginTop: '48px', fontWeight: 300 }}>
          AI 让普通人做出专业的事
        </div>
      </div>

      <div className="rule-bottom" />
      <div className="chrome-bottom">
        <div className="chrome-label">§ 11</div>
        <div className="chrome-label">TOOLBOX · 05 TOOLS</div>
      </div>
    </section>
  )
}
