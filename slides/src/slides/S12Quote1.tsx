export default function S12Quote1() {
  return (
    <section style={{ background: 'var(--bg-dark)', color: 'var(--fg-invert)' }}>
      {/* chrome */}
      <div style={{ position: 'absolute', top: '72px', left: '120px', right: '120px', display: 'flex', justifyContent: 'space-between' }}>
        <div className="mono" style={{ fontSize: '24px', color: 'var(--mute-dark)', letterSpacing: '2px' }}>— INTERMISSION</div>
        <div className="mono" style={{ fontSize: '24px', color: 'var(--mute-dark)', letterSpacing: '2px' }}>12 / 18</div>
      </div>

      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '180px 180px 200px' }}>
        <div className="sg" style={{ fontSize: '104px', fontWeight: 400, lineHeight: 1.25, letterSpacing: '-4px', whiteSpace: 'nowrap' }}>
          AI 越强,<br />
          <span style={{ color: 'var(--mute)', fontWeight: 300 }}>决定结果好坏的,</span><br />
          <span style={{ color: 'var(--mute)', fontWeight: 300 }}>反而越不是 AI,</span><br />
          是用 AI 的<span style={{ color: 'var(--accent)', fontWeight: 700 }}>人。</span>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '128px', left: '120px', right: '120px', height: '1px', background: 'var(--rule-dark)' }} />
      <div style={{ position: 'absolute', bottom: '72px', left: '120px', right: '120px', display: 'flex', justifyContent: 'space-between' }}>
        <div className="mono" style={{ fontSize: '24px', color: 'var(--mute-dark)', letterSpacing: '2px' }}>END · PART 01</div>
        <div className="mono" style={{ fontSize: '24px', color: 'var(--mute-dark)', letterSpacing: '2px' }}>NEXT · TOOLBOX →</div>
      </div>
    </section>
  )
}
