import { HarnessIcon, SlidePage } from '../components/Slide'

export default function S01Opening() {
  return (
    <SlidePage>
      {/* vertical strip left */}
      <div className="mono" style={{
        position: 'absolute', top: '960px', left: '80px',
        transform: 'rotate(-90deg)', transformOrigin: 'left top',
        fontSize: '20px', color: 'var(--mute)', letterSpacing: '6px', whiteSpace: 'nowrap',
      }}>
        TECH TALK · APRIL 2026 · № 01
      </div>

      {/* harness icon top right */}
      <HarnessIcon style={{
        position: 'absolute', top: '72px', right: '76px',
        width: '52px', height: '52px', color: 'var(--mute)',
      }} />

      <div style={{ position: 'absolute', left: '180px', top: '220px', right: '120px' }}>
        <div className="mono" style={{ fontSize: '26px', color: 'var(--mute)', letterSpacing: '3px', marginBottom: '56px' }}>— CHAPTER ZERO</div>
        <div className="sg" style={{ fontSize: '184px', fontWeight: 500, lineHeight: 0.9, letterSpacing: '-6px' }}>
          AI 在工作中的<br />
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>实战</span>使用
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '56px', marginTop: '96px', whiteSpace: 'nowrap' }}>
          <div className="sg" style={{ fontSize: '40px', fontWeight: 500 }}>2026 · 04</div>
          <div style={{ fontSize: '34px', color: '#4a4a55', fontWeight: 300 }}>技术部内部分享 </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '140px', left: '180px', right: '120px', height: '2px', background: 'var(--rule)' }} />
      <div style={{ position: 'absolute', bottom: '72px', left: '180px', right: '120px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ fontSize: '30px', color: '#4a4a55', fontWeight: 300 }}>
          <span style={{ color: 'var(--accent)' }}>↳</span>&nbsp; AI是什么?
        </div>
        <div className="mono" style={{ fontSize: '24px', color: 'var(--mute)', letterSpacing: '2px' }}>01 / 13</div>
      </div>
    </SlidePage>
  )
}
