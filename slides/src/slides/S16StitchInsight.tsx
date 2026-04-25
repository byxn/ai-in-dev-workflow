export default function S16StitchInsight() {
  return (
    <section style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <div className="chrome-top">
        <div className="page-eyebrow">§ 14 · INSIGHT</div>
        <div className="chrome-label">16 / 18</div>
      </div>
      <div className="rule-top" />

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px', bottom: '300px', display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '64px' }}>
        <div>
          <div className="mono" style={{ fontSize: '28px', color: 'var(--mute)', letterSpacing: '3px' }}>LEFT · ANTHROPIC</div>
          <div className="sg" style={{ fontSize: '72px', fontWeight: 500, marginTop: '24px', letterSpacing: '-2px' }}>Claude Design</div>
          <div style={{ fontSize: '36px', color: '#4a4a55', marginTop: '40px', fontWeight: 300, lineHeight: 1.35 }}>
            → 设计师工作流
          </div>
          <div className="mono" style={{ fontSize: '24px', color: 'var(--mute)', marginTop: '40px' }}>claude.ai/design</div>
        </div>

        <div style={{ background: 'var(--rule-soft)' }} />

        <div>
          <div className="mono" style={{ fontSize: '28px', color: 'var(--mute)', letterSpacing: '3px' }}>RIGHT · GOOGLE</div>
          <div className="sg" style={{ fontSize: '72px', fontWeight: 500, marginTop: '24px', letterSpacing: '-2px' }}>Stitch</div>
          <div style={{ fontSize: '36px', color: '#4a4a55', marginTop: '40px', fontWeight: 300, lineHeight: 1.35 }}>
            → 直接出代码
          </div>
          <div className="mono" style={{ fontSize: '24px', color: 'var(--mute)', marginTop: '40px' }}>stitch.withgoogle.com</div>
        </div>
      </div>

      {/* insight */}
      <div style={{ position: 'absolute', left: '120px', bottom: '160px', right: '120px', borderTop: '2px solid var(--fg)', paddingTop: '36px' }}>
        <div className="sg" style={{ fontSize: '60px', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-1px' }}>
          两个巨头冲同一个方向,<br />
          说明设计这个工种 <span style={{ color: 'var(--accent)', fontWeight: 700 }}>马上要被重新定义</span>。
        </div>
      </div>

      <div className="chrome-bottom">
        <div className="chrome-label">§ 14 · INSIGHT</div>
        <div className="chrome-label">2026 · DESIGN ⇌ CODE</div>
      </div>
    </section>
  )
}
