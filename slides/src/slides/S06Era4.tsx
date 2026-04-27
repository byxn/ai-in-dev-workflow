import { BottomChrome, ChromeLabel, PageEyebrow, SlidePage, TopChrome } from '../components/Slide'

export default function S06Era4() {
  return (
    <SlidePage>
      <TopChrome
        left={<PageEyebrow>§ 05 · ERA 04</PageEyebrow>}
        right={<ChromeLabel>06 / 15</ChromeLabel>}
      />

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px' }}>
        <div className="mono" style={{ fontSize: '28px', color: 'var(--mute)', letterSpacing: '3px', marginBottom: '24px' }}>时代 4 · 2025</div>
        <div className="sg" style={{ fontSize: '88px', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-2px' }}>AI 自己能干活</div>
        <div className="mono" style={{ fontSize: '30px', color: '#4a4a55', marginTop: '24px' }}>Claude Code · 2025 年 2 月 · Anthropic</div>
      </div>

      <div style={{ position: 'absolute', left: '120px', top: '480px', right: '120px' }}>
        <div className="sg" style={{ fontSize: '92px', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-2px' }}>
          “没有界面”<span style={{ color: 'var(--mute)', fontWeight: 300 }}>——</span><br />
          它就是个<span style={{ color: 'var(--accent)' }}>命令行</span>。
        </div>
        <div style={{ fontSize: '36px', color: '#4a4a55', marginTop: '40px', fontWeight: 300 }}>
          你说目标 <span style={{ color: 'var(--accent)', margin: '0 8px' }}>·</span> 它自己干完
        </div>
      </div>

      {/* big 90% */}
      <div style={{ position: 'absolute', right: '140px', bottom: '180px', textAlign: 'right' }}>
        <div className="sg" style={{ fontSize: '280px', fontWeight: 500, lineHeight: 0.8, color: 'var(--accent)', letterSpacing: '-10px' }}>
          90<span style={{ fontSize: '140px' }}>%</span>
        </div>
        <div style={{ fontSize: '24px', color: '#4a4a55', marginTop: '24px', maxWidth: '720px', textAlign: 'right', lineHeight: 1.5 }}>
          Anthropic 自己 Claude Code 的代码,<br />90% 是 Claude Code 自己写的
        </div>
      </div>

      <BottomChrome
        left={<ChromeLabel>§ 05 · Claude Code · CLI</ChromeLabel>}
        right={<ChromeLabel>agentic</ChromeLabel>}
        showRule
      />
    </SlidePage>
  )
}
