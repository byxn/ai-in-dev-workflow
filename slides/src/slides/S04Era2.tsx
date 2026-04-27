import { BottomChrome, ChromeLabel, PageEyebrow, SlidePage, TopChrome } from '../components/Slide'

const comparisons = [
  { name: 'Netflix',   time: '3.5 年' },
  { name: 'Facebook',  time: '10 个月' },
  { name: 'Instagram', time: '2.5 个月' },
]

export default function S04Era2() {
  return (
    <SlidePage>
      <TopChrome
        left={<PageEyebrow>§ 03 · ERA 02</PageEyebrow>}
        right={<ChromeLabel>04 / 15</ChromeLabel>}
      />

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px' }}>
        <div className="mono" style={{ fontSize: '28px', color: 'var(--mute)', letterSpacing: '3px', marginBottom: '24px' }}>时代 2 · 2022</div>
        <div className="sg" style={{ fontSize: '88px', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-2px' }}>通用对话模型</div>
      </div>

      <div style={{ position: 'absolute', left: '120px', top: '420px', right: '120px' }}>
        <div style={{ fontSize: '38px', color: '#4a4a55', fontWeight: 300, marginBottom: '48px' }}>达到 100 万用户,用了多久?</div>

        {comparisons.map((c) => (
          <div key={c.name} style={{
            display: 'grid', gridTemplateColumns: '380px 1fr 260px',
            alignItems: 'baseline', padding: '20px 0', borderTop: '1px solid var(--rule-soft)',
          }}>
            <div className="sg" style={{ fontSize: '44px', color: 'var(--mute)', fontWeight: 400 }}>{c.name}</div>
            <div />
            <div className="mono" style={{ fontSize: '40px', color: 'var(--mute)', textAlign: 'right' }}>{c.time}</div>
          </div>
        ))}

        {/* ChatGPT highlight row */}
        <div style={{
          display: 'grid', gridTemplateColumns: '380px 1fr 320px',
          alignItems: 'baseline', padding: '24px 0 8px', borderTop: '2px solid var(--fg)',
        }}>
          <div className="sg" style={{ fontSize: '64px', color: 'var(--accent)', fontWeight: 700, letterSpacing: '-1px' }}>ChatGPT</div>
          <div />
          <div className="mono" style={{ fontSize: '76px', color: 'var(--accent)', textAlign: 'right', fontWeight: 500, letterSpacing: '-2px' }}>5&nbsp;天 ⚡</div>
        </div>
      </div>

      <BottomChrome
        left={<ChromeLabel>人类历史上增长最快的消费级产品</ChromeLabel>}
        right={<ChromeLabel>§ 03 · ChatGPT</ChromeLabel>}
        showRule
      />
    </SlidePage>
  )
}
