import { BottomChrome, ChromeLabel, PageEyebrow, SlidePage, TopChrome } from '../components/Slide'

const rows = [
  { n: '01', value: '3 → 7 人',      size: 36,  accent: false },
  { n: '02', value: '5 个月',         size: 48,  accent: false },
  { n: '03', value: '100 万行代码',   size: 64,  accent: false },
  { n: '04', value: '1,500 个 PR',    size: 84,  accent: false },
  { n: '05', value: '0 行人工手写',   size: 112, accent: true  },
]

const heights: Record<string, number> = { '01': 60, '02': 70, '03': 90, '04': 110, '05': 160 }

export default function S08Era5Data() {
  return (
    <SlidePage>
      <TopChrome
        left={<PageEyebrow>§ 07 · ERA 05</PageEyebrow>}
        right={<ChromeLabel>08 / 15</ChromeLabel>}
      />

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px' }}>
        <div className="mono" style={{ fontSize: '26px', color: 'var(--mute)', letterSpacing: '3px', marginBottom: '20px' }}>2026 年 2 月 11 日 · 官方博客</div>
        <div style={{ fontSize: '32px', color: '#4a4a55', fontStyle: 'italic', fontWeight: 300, maxWidth: '1400px' }}>
          《Harness Engineering: Leveraging Agents in an Agent-First World》
        </div>
      </div>

      <div style={{ position: 'absolute', left: '120px', top: '360px', right: '120px', display: 'flex', flexDirection: 'column' }}>
        {rows.map((r) => (
          <div key={r.n} style={{
            display: 'flex', alignItems: 'baseline', gap: '32px',
            borderTop: r.accent ? '2px solid var(--fg)' : '1px solid var(--rule-soft)',
            padding: '12px 0',
            height: `${heights[r.n]}px`,
          }}>
            <div className="mono" style={{ fontSize: '24px', color: r.accent ? 'var(--accent)' : 'var(--mute)', width: '64px', flexShrink: 0 }}>{r.n}</div>
            <div className="sg" style={{ fontSize: `${r.size}px`, fontWeight: r.accent ? 700 : 500, letterSpacing: r.size >= 80 ? '-3px' : '-2px', color: r.accent ? 'var(--accent)' : 'var(--fg)', lineHeight: 1, whiteSpace: 'nowrap' }}>
              {r.value}
            </div>
          </div>
        ))}
      </div>

      <BottomChrome
        left={<ChromeLabel>openai.com/index/harness-engineering</ChromeLabel>}
        right={<ChromeLabel>§ 07 · Harness</ChromeLabel>}
        showRule
      />
    </SlidePage>
  )
}
