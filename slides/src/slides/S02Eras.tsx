import { BottomChrome, ChromeLabel, PageEyebrow, SlidePage, TopChrome } from '../components/Slide'

const ERAS = [
  { n: 1, name: '程序员的秘密武器', prod: 'Copilot',              date: '2021.06' },
  { n: 2, name: '全民 AI 对话',      prod: 'ChatGPT',             date: '2022.11' },
  { n: 3, name: 'Vibe Coding',            prod: 'Cursor',              date: '2023.03' },
  { n: 4, name: 'Agent',     prod: 'Claude Code',         date: '2025.02' },
  { n: 5, name: '驾驭 AI',           prod: 'Harness Engineering', date: '2026.02' },
]

export default function S02Eras() {
  return (
    <SlidePage>
      <TopChrome
        left={<PageEyebrow>§ 01 · MAP</PageEyebrow>}
        right={<ChromeLabel>02 / 15</ChromeLabel>}
      />

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px' }}>
        <div className="sg" style={{ fontSize: '88px', fontWeight: 500, lineHeight: 1, letterSpacing: '-2px' }}>AI 工具的 5 个时代</div>
      </div>

      <div style={{ position: 'absolute', left: '120px', top: '420px', right: '120px' }}>
        {ERAS.map((era) => (
          <div key={era.n} style={{
            display: 'grid',
            gridTemplateColumns: '140px 1fr 420px 200px',
            alignItems: 'baseline',
            padding: '18px 0',
            borderTop: '1px solid var(--rule-soft)',
            ...(era.n === 5 ? { borderBottom: '1px solid var(--rule-soft)' } : {}),
          }}>
            <div className="mono" style={{ fontSize: '28px', color: 'var(--mute)', letterSpacing: '2px' }}>时代 {era.n}</div>
            <div className="sg" style={{ fontSize: '44px', fontWeight: 500, color: 'var(--fg)' }}>{era.name}</div>
            <div className="mono" style={{ fontSize: '28px', color: '#4a4a55' }}>{era.prod}</div>
            <div className="mono" style={{ fontSize: '28px', color: 'var(--mute)', textAlign: 'right' }}>{era.date}</div>
          </div>
        ))}
      </div>

      <BottomChrome
        left={<ChromeLabel>§ 01 · AI 工具的 5 个时代</ChromeLabel>}
        right={<ChromeLabel>2021 → 2026</ChromeLabel>}
      />
    </SlidePage>
  )
}
