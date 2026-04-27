import { BottomChrome, ChromeLabel, PageEyebrow, SlidePage, TopChrome } from '../components/Slide'

export default function S03Era1() {
  return (
    <SlidePage>
      <TopChrome
        left={<PageEyebrow>§ 02 · ERA 01</PageEyebrow>}
        right={<ChromeLabel>03 / 15</ChromeLabel>}
      />

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px' }}>
        <div className="mono" style={{ fontSize: '28px', color: 'var(--mute)', letterSpacing: '3px', marginBottom: '24px' }}>时代 1 · 2021</div>
        <div className="sg" style={{ fontSize: '88px', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-2px' }}>程序员的秘密武器</div>
        <div className="mono" style={{ fontSize: '34px', color: '#4a4a55', marginTop: '28px' }}>GitHub Copilot · 2021 年 6 月</div>
      </div>

      {/* big number */}
      <div style={{ position: 'absolute', left: '120px', top: '500px', display: 'flex', alignItems: 'baseline', gap: '40px' }}>
        <div className="sg" style={{ fontSize: '380px', fontWeight: 500, lineHeight: 0.8, letterSpacing: '-14px', color: 'var(--accent)' }}>18</div>
        <div>
          <div className="sg" style={{ fontSize: '72px', fontWeight: 400, color: 'var(--fg)', letterSpacing: '-1px' }}>个月</div>
          <div style={{ fontSize: '30px', color: '#4a4a55', marginTop: '24px', fontWeight: 300 }}>比 ChatGPT 早 18 个月</div>
        </div>
      </div>

      <BottomChrome
        left={<ChromeLabel>训练数据 · 5400 万 GitHub 仓库 · 159 GB 代码</ChromeLabel>}
        right={<ChromeLabel>§ 02 · Copilot</ChromeLabel>}
        showRule
      />
    </SlidePage>
  )
}
