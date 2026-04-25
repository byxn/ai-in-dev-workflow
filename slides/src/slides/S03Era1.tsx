export default function S03Era1() {
  return (
    <section style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <div className="chrome-top">
        <div className="page-eyebrow">§ 02 · ERA 01</div>
        <div className="chrome-label">03 / 18</div>
      </div>
      <div className="rule-top" />

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px' }}>
        <div className="mono" style={{ fontSize: '28px', color: 'var(--mute)', letterSpacing: '3px', marginBottom: '24px' }}>时代 1 · 2021</div>
        <div className="sg" style={{ fontSize: '88px', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-2px' }}>程序员的秘密武器</div>
        <div className="mono" style={{ fontSize: '34px', color: '#4a4a55', marginTop: '28px' }}>GitHub Copilot · 2021 年 6 月</div>
      </div>

      {/* big number */}
      <div style={{ position: 'absolute', left: '120px', top: '500px', display: 'flex', alignItems: 'baseline', gap: '40px' }}>
        <div className="sg" style={{ fontSize: '380px', fontWeight: 500, lineHeight: 0.8, letterSpacing: '-14px', color: 'var(--accent)' }}>18</div>
        <div>
          <div className="sg" style={{ fontSize: '72px', fontWeight: 400, color: 'var(--fg)', letterSpacing: '-1px' }}>个月</div>
          <div style={{ fontSize: '30px', color: '#4a4a55', marginTop: '24px', fontWeight: 300 }}>比 ChatGPT 早 18 个月</div>
        </div>
      </div>

      <div className="rule-bottom" />
      <div className="chrome-bottom">
        <div className="chrome-label">训练数据 · 5400 万 GitHub 仓库 · 159 GB 代码</div>
        <div className="chrome-label">§ 02 · Copilot</div>
      </div>
    </section>
  )
}
