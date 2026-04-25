const features = [
  '自动学你公司设计系统',
  '抓官网元素做原型',
  '交接 Claude Code 一键实现',
  '导出 Canva / PPTX / PDF / HTML',
]

export default function S15ClaudeDesign() {
  return (
    <section style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <div className="chrome-top">
        <div className="page-eyebrow">§ 13 · TOOL 02</div>
        <div className="chrome-label">15 / 18</div>
      </div>
      <div className="rule-top" />

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <span className="mono" style={{ fontSize: '28px', color: 'var(--mute)', letterSpacing: '3px', whiteSpace: 'nowrap' }}>TOOL 02 · ANTHROPIC LABS</span>
          <span className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '24px', color: 'var(--accent)', background: 'rgba(216,106,44,0.12)', padding: '8px 16px', borderRadius: '4px', letterSpacing: '2px', whiteSpace: 'nowrap' }}>
            🔥&nbsp; 4 DAYS AGO
          </span>
        </div>
        <div className="sg" style={{ fontSize: '96px', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-2px' }}>Claude Design</div>
        <div style={{ fontSize: '42px', color: '#4a4a55', marginTop: '24px', fontWeight: 300 }}>
          说一句话 <span style={{ color: 'var(--accent)', margin: '0 8px' }}>·</span> 生成完整设计稿
        </div>
      </div>

      <div style={{ position: 'absolute', left: '120px', top: '600px', right: '120px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px 64px' }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'baseline', borderTop: '1px solid var(--rule-soft)', paddingTop: '20px' }}>
            <div className="mono" style={{ fontSize: '26px', color: 'var(--mute)' }}>{String(i + 1).padStart(2, '0')}</div>
            <div className="sg" style={{ fontSize: '36px', fontWeight: 400 }}>{f}</div>
          </div>
        ))}
      </div>

      <div className="rule-bottom" />
      <div className="chrome-bottom">
        <div className="chrome-label" style={{ fontStyle: 'italic', color: 'var(--mute)' }}>※ 本 PPT 即用 Claude Design 生成</div>
        <div className="chrome-label">claude.ai/design</div>
      </div>
    </section>
  )
}
