import { BottomChrome, ChromeLabel, PageEyebrow, SlidePage, TopChrome } from '../components/Slide'

const terminals = [
  {
    id: 'agent-01',
    lines: [
      { t: 'cmd',  text: '$ claude "add oauth"' },
      { t: 'info', text: '→ reading src/auth.ts' },
      { t: 'info', text: '→ writing 3 files' },
      { t: 'run',  text: '⠋ tests... 4/7' },
    ],
  },
  {
    id: 'agent-02',
    lines: [
      { t: 'cmd',  text: '$ claude "split billing"' },
      { t: 'info', text: '→ analyzing 12 modules' },
      { t: 'ok',   text: '✓ plan approved' },
      { t: 'info', text: '→ edits... 28/41' },
    ],
  },
  {
    id: 'agent-03',
    lines: [
      { t: 'cmd',  text: '$ claude "update API docs"' },
      { t: 'done', text: '✓ 18 files scanned' },
      { t: 'done', text: '✓ 6 sections rewritten' },
      { t: 'done', text: '✓ done · 42s' },
    ],
  },
]

const lineColor: Record<string, string> = {
  cmd:  '#5a5a68',
  info: '#d8d5cc',
  run:  '#d86a2c',
  ok:   '#7cc4ff',
  done: '#a3e635',
}

export default function S07Era4Parallel() {
  return (
    <SlidePage>
      <TopChrome
        left={<PageEyebrow>§ 06 · ERA 04 · PARALLEL</PageEyebrow>}
        right={<ChromeLabel>07 / 15</ChromeLabel>}
      />

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px' }}>
        <div className="mono" style={{ fontSize: '28px', color: 'var(--mute)', letterSpacing: '3px', marginBottom: '24px' }}>2026 年 2 月 21 日</div>
        <div className="sg" style={{ fontSize: '96px', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-2px' }}>
          一个人 · 同时指挥<br />
          <span style={{ color: 'var(--accent)' }}>5 – 15</span> 个 AI
        </div>
      </div>

      {/* terminal windows */}
      <div style={{ position: 'absolute', left: '120px', top: '580px', right: '120px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
        {terminals.map((term) => (
          <div key={term.id} className="terminal-card">
            <div className="terminal-card__header">
              {[0, 1, 2].map((i) => <span key={i} className="terminal-card__dot" />)}
              <span className="mono terminal-card__label">{term.id}</span>
            </div>
            <div className="mono terminal-card__body">
              {term.lines.map((l, i) => (
                <div key={i} style={{ color: lineColor[l.t] }}>{l.text}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <BottomChrome
        left={
          <ChromeLabel>
            <span style={{ color: 'var(--accent)' }}>❝</span>&nbsp; Boris Cherny 日常跑 10-15 个 &nbsp;·&nbsp; incident.io 每人 4-7 个
          </ChromeLabel>
        }
        right={<ChromeLabel>§ 06 · 并行</ChromeLabel>}
        showRule
      />
    </SlidePage>
  )
}
