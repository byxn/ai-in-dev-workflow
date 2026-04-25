const tools = [
  { name: 'v0.dev',        desc: 'Vercel · 一句话生成 React 组件' },
  { name: 'Bolt / Lovable', desc: '一句话生成可部署应用' },
  { name: 'Manus',         desc: 'Meta $2B 收购 · 今日华邮头条' },
  { name: 'OpenClaw',      desc: 'OpenAI 上周末刚收购' },
]

export default function S17Also() {
  return (
    <section style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <div className="chrome-top">
        <div className="page-eyebrow">§ 15 · ALSO</div>
        <div className="chrome-label">17 / 18</div>
      </div>
      <div className="rule-top" />

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px' }}>
        <div className="sg" style={{ fontSize: '96px', fontWeight: 500, lineHeight: 1, letterSpacing: '-2px' }}>顺便提几个</div>
      </div>

      <div style={{ position: 'absolute', left: '120px', top: '400px', right: '120px' }}>
        {tools.map((t) => (
          <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '360px 1fr', alignItems: 'baseline', padding: '28px 0', borderTop: '1px solid var(--rule-soft)' }}>
            <div className="sg mono" style={{ fontSize: '48px', fontWeight: 500 }}>{t.name}</div>
            <div style={{ fontSize: '32px', color: '#4a4a55', fontWeight: 300 }}>{t.desc}</div>
          </div>
        ))}
        <div style={{ borderBottom: '1px solid var(--rule-soft)' }} />
      </div>

      {/* bottom quote */}
      <div style={{ position: 'absolute', left: '120px', bottom: '200px', right: '120px', borderTop: '2px solid var(--fg)', paddingTop: '32px' }}>
        <div style={{ fontSize: '36px', color: 'var(--fg)', fontWeight: 300, fontStyle: 'italic' }}>
          <span style={{ color: 'var(--accent)', fontStyle: 'normal' }}>🌀</span>&nbsp; 黄仁勋:"OpenClaw 是下一个 ChatGPT。"
        </div>
      </div>

      <div className="rule-bottom" />
      <div className="chrome-bottom">
        <div className="chrome-label">§ 15 · ALSO WORTH NOTING</div>
        <div className="chrome-label">04 TOOLS</div>
      </div>
    </section>
  )
}
