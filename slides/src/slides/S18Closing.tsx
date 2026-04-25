export default function S18Closing() {
  return (
    <section style={{ background: 'var(--bg-dark)', color: 'var(--fg-invert)' }}>
      {/* chrome */}
      <div style={{ position: 'absolute', top: '72px', left: '120px', right: '120px', display: 'flex', justifyContent: 'space-between' }}>
        <div className="mono" style={{ fontSize: '24px', color: 'var(--mute-dark)', letterSpacing: '2px' }}>— CLOSING</div>
        <div className="mono" style={{ fontSize: '24px', color: 'var(--mute-dark)', letterSpacing: '2px' }}>18 / 18</div>
      </div>

      {/* small harness bottom right */}
      <svg viewBox="0 0 100 100" style={{ position: 'absolute', bottom: '100px', right: '136px', width: '56px', height: '56px', color: 'var(--mute-dark)' }}>
        <g className="harness" strokeWidth="1.8">
          <path d="M20,30 Q50,15 80,30 L78,48 Q50,62 22,48 Z" />
          <path d="M50,62 L50,82" />
          <path d="M30,50 L28,78" />
          <path d="M70,50 L72,78" />
          <circle cx="50" cy="40" r="3" />
        </g>
      </svg>

      {/* upper block */}
      <div style={{ position: 'absolute', left: '180px', top: '200px', right: '180px' }}>
        <div style={{ fontSize: '36px', color: '#d4d1c8', fontWeight: 300, lineHeight: 1.55, maxWidth: '1560px' }}>
          半年前你没听过 Claude Design。<br />
          半年后,你会听说更多现在还没发生的事。<br />
          <span style={{ color: 'var(--fg-invert)' }}>唯一稳赚不赔的 ——</span><br />
          是今天晚上回去,<br />
          <span style={{ color: 'var(--accent)' }}>打开其中一个,试一下。</span>
        </div>
      </div>

      {/* divider */}
      <div style={{ position: 'absolute', left: '180px', top: '620px', right: '180px', height: '1px', background: 'var(--rule-dark)' }} />

      {/* lower big quote */}
      <div style={{ position: 'absolute', left: '180px', top: '700px', right: '240px' }}>
        <div className="sg" style={{ fontSize: '72px', fontWeight: 400, lineHeight: 1.3, letterSpacing: '-2px', whiteSpace: 'nowrap' }}>
          AI 越强,决定结果好坏的,<br />
          反而越不是 AI,是用 AI 的<span style={{ color: 'var(--accent)', fontWeight: 700 }}>人</span>。
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '128px', left: '120px', right: '120px', height: '1px', background: 'var(--rule-dark)' }} />
      <div style={{ position: 'absolute', bottom: '72px', left: '120px', right: '120px', display: 'flex', justifyContent: 'space-between' }}>
        <div className="mono" style={{ fontSize: '24px', color: 'var(--mute-dark)', letterSpacing: '2px' }}>END · 谢谢</div>
        <div className="mono" style={{ fontSize: '24px', color: 'var(--mute-dark)', letterSpacing: '2px', marginRight: '88px' }}>THANK YOU</div>
      </div>
    </section>
  )
}
