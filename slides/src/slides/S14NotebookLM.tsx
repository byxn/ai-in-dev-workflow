const features = [
  { n: '01 · AUDIO',              title: 'Audio Overviews',    sub: '60 秒变播客' },
  { n: '02 · VIDEO · 2026.03',    title: 'Cinematic Overviews', sub: '资料直接变短片' },
  { n: '03 · TABLES',             title: 'Data Tables',         sub: '结构化抽取' },
  { n: '04 · INTEGRATION · 2026.04.08', title: 'Notebooks in Gemini', sub: '集成进 Gemini' },
]

export default function S14NotebookLM() {
  return (
    <section style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <div className="chrome-top">
        <div className="page-eyebrow">§ 12 · TOOL 01</div>
        <div className="chrome-label">14 / 18</div>
      </div>
      <div className="rule-top" />

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px' }}>
        <div className="mono" style={{ fontSize: '28px', color: 'var(--mute)', letterSpacing: '3px', marginBottom: '20px' }}>TOOL 01 · Google Labs</div>
        <div className="sg" style={{ fontSize: '96px', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-2px' }}>NotebookLM</div>
        <div style={{ fontSize: '40px', color: '#4a4a55', marginTop: '24px', fontWeight: 300 }}>
          <span style={{ color: 'var(--accent)' }}>📚</span>&nbsp; 资料 → 能对话的知识库
        </div>
        <div className="mono" style={{ fontSize: '24px', color: 'var(--mute)', marginTop: '16px' }}>PDF · Word · 视频 · 网页 · 电子书</div>
      </div>

      <div style={{ position: 'absolute', left: '120px', top: '600px', right: '120px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 64px' }}>
        {features.map((f) => (
          <div key={f.n} style={{ borderTop: '1px solid var(--rule-soft)', paddingTop: '24px' }}>
            <div className="mono" style={{ fontSize: '24px', color: 'var(--mute)', letterSpacing: '2px' }}>{f.n}</div>
            <div className="sg" style={{ fontSize: '44px', fontWeight: 500, marginTop: '12px' }}>{f.title}</div>
            <div style={{ fontSize: '26px', color: '#4a4a55', marginTop: '8px' }}>{f.sub}</div>
          </div>
        ))}
      </div>

      <div className="rule-bottom" />
      <div className="chrome-bottom">
        <div className="chrome-label">notebooklm.google.com</div>
        <div className="chrome-label">§ 12</div>
      </div>
    </section>
  )
}
