import { BottomChrome, ChromeLabel, PageEyebrow, SlidePage, TopChrome } from '../components/Slide'

export default function S11Era5Watershed() {
  return (
    <SlidePage dark>
      <TopChrome
        left={<PageEyebrow>§ 10 · ERA 05 · WATERSHED</PageEyebrow>}
        right={<ChromeLabel>11 / 18</ChromeLabel>}
      />

      {/* harness watermark */}
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMin meet"
        style={{ position: 'absolute', right: '120px', top: '200px', width: '480px', height: '240px', color: '#1e1e26', opacity: 0.9 }}>
        <g className="harness" strokeWidth="2">
          <path d="M70,110 Q200,60 330,110 L324,180 Q200,230 76,180 Z" />
          <line x1="76" y1="180" x2="324" y2="180" />
          <circle cx="200" cy="140" r="8" fill="currentColor" />
          <path d="M100,108 Q200,95 300,108" />
        </g>
      </svg>

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px' }}>
        <div className="sg" style={{ fontSize: '104px', fontWeight: 500, lineHeight: 1, letterSpacing: '-3px' }}>2026 年 2 月 5 日</div>
        <div className="mono" style={{ fontSize: '36px', color: 'var(--accent)', letterSpacing: '4px', marginTop: '20px' }}>SAME&nbsp;·&nbsp;DAY</div>
      </div>

      {/* two events */}
      <div style={{ position: 'absolute', left: '120px', top: '520px', right: '120px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
        <div style={{ borderTop: '1px solid var(--rule-dark)', paddingTop: '32px' }}>
          <div className="mono" style={{ fontSize: '24px', color: 'var(--mute-dark)', letterSpacing: '3px', marginBottom: '16px' }}>— 01</div>
          <div className="sg" style={{ fontSize: '40px', fontWeight: 500, lineHeight: 1.2 }}>Mitchell Hashimoto</div>
          <div style={{ margin: '20px 0', color: 'var(--accent)', fontSize: '36px' }}>↓</div>
          <div className="sg" style={{ fontSize: '48px', fontWeight: 500, lineHeight: 1.15, color: 'var(--accent)' }}>
            “Harness Engineering”<br />一词诞生
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--rule-dark)', paddingTop: '32px' }}>
          <div className="mono" style={{ fontSize: '24px', color: 'var(--mute-dark)', letterSpacing: '3px', marginBottom: '16px' }}>— 02</div>
          <div className="sg" style={{ fontSize: '40px', fontWeight: 500, lineHeight: 1.2 }}>Anthropic</div>
          <div style={{ margin: '20px 0', color: 'var(--accent)', fontSize: '36px' }}>↓</div>
          <div className="sg" style={{ fontSize: '48px', fontWeight: 500, lineHeight: 1.15, color: 'var(--accent)' }}>
            Agent Teams<br />功能上线
          </div>
        </div>
      </div>

      <BottomChrome
        left={
          <ChromeLabel style={{ fontSize: '22px', color: '#d4d1c8' }}>
            <span style={{ color: 'var(--accent)' }}>🎯</span>&nbsp; AI 从“单机”进入“团队”的分水岭
          </ChromeLabel>
        }
        right={<ChromeLabel>§ 10</ChromeLabel>}
        showRule
      />
    </SlidePage>
  )
}
