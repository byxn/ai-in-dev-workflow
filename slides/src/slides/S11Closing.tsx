import {ChromeLabel, SlidePage, TopChrome } from '../components/Slide'

export default function S11Closing() {
  return (
    <SlidePage>
      <TopChrome
        left={<ChromeLabel>— CLOSING</ChromeLabel>}
        right={<ChromeLabel>13 / 13</ChromeLabel>}
        showRule={false}
      />

      <div style={{ position: 'absolute', left: '180px', top: '300px', right: '240px' }}>
        <div className="sg" style={{ fontSize: '72px', fontWeight: 400, lineHeight: 1.3, letterSpacing: '-2px', whiteSpace: 'nowrap' }}>
          AI 越强,决定结果好坏的,<br />
          反而越不是 AI,是用 AI 的<span style={{ color: 'var(--accent)', fontWeight: 700 }}>人</span>。
        </div>
      </div>

      <div style={{ position: 'absolute', left: '180px', right: '180px', top: '690px', height: '1px', background: 'var(--rule-soft)' }} />

      <div style={{ position: 'absolute', left: '180px', top: '760px', display: 'flex', alignItems: 'baseline', gap: '28px' }}>
        <div className="mono" style={{ fontSize: '34px', color: 'var(--accent)', letterSpacing: '4px' }}>
          Q&A
        </div>

      </div>

    </SlidePage>
  )
}
