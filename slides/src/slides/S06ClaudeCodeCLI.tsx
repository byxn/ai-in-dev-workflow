import { BottomChrome, ChromeLabel, PageEyebrow, SlidePage, TopChrome } from '../components/Slide'

const cliLines = [
  { t: 'cmd',  text: '$ claude' },
  { t: 'pmt',  text: '> 把 auth 模块从 jwt 切到 sessions, 兼容旧 token' },
  { t: 'sep',  text: '' },
  { t: 'plan', text: '⏺ planning · 7 files · 3 migrations' },
  { t: 'info', text: '  ↳ src/auth/jwt.ts        replace' },
  { t: 'info', text: '  ↳ src/auth/session.ts    create' },
  { t: 'info', text: '  ↳ migrations/0042.sql    create' },
  { t: 'sep',  text: '' },
  { t: 'run',  text: '⏺ editing 7 files...' },
  { t: 'ok',   text: '✓ tests   42/42 passed' },
  { t: 'done', text: '✓ done · 4m 18s' },
]

const lineColor: Record<string, string> = {
  cmd:  '#5a5a68',
  pmt:  '#d8d5cc',
  plan: '#7cc4ff',
  info: '#8a8a92',
  run:  '#d86a2c',
  ok:   '#a3e635',
  done: '#a3e635',
  sep:  'transparent',
}

export default function S06ClaudeCodeCLI() {
  return (
    <SlidePage>
      <TopChrome
        left={<PageEyebrow>§ 05 · ERA 04 · CLI</PageEyebrow>}
        right={<ChromeLabel>06 / 15</ChromeLabel>}
      />

      {/* Title block - left */}
      <div style={{ position: 'absolute', left: '120px', top: '180px', width: '780px' }}>
        <div className="mono" style={{ fontSize: '26px', color: 'var(--mute)', letterSpacing: '3px', marginBottom: '20px' }}>时代 4 · 2025</div>
        <div className="sg" style={{ fontSize: '76px', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-2px' }}>AI 自己能干活</div>
        <div className="mono" style={{ fontSize: '24px', color: '#4a4a55', marginTop: '16px' }}>Claude Code · 2025.02 · Anthropic</div>
      </div>

      {/* Hero: 命令行 */}
      <div style={{ position: 'absolute', left: '120px', top: '480px', width: '780px' }}>
        <div className="mono" style={{ fontSize: '22px', color: 'var(--mute)', letterSpacing: '4px', marginBottom: '12px' }}>NO UI · NO CHAT WINDOW</div>
        <div className="sg" style={{ fontSize: '180px', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-6px', color: 'var(--accent)' }}>
          命令行
        </div>
        <div className="sg" style={{ fontSize: '40px', fontWeight: 300, lineHeight: 1.3, marginTop: '24px', color: 'var(--fg)' }}>
          你说目标 <span style={{ color: 'var(--mute)' }}>·</span> 它自己干完
        </div>
      </div>

      {/* 90% stat - bottom left */}
      <div style={{ position: 'absolute', left: '120px', bottom: '90px', display: 'flex', alignItems: 'center', gap: '24px', borderTop: '1px solid var(--rule-soft)', paddingTop: '20px', width: '780px' }}>
        <div className="sg" style={{ fontSize: '92px', fontWeight: 500, color: 'var(--accent)', letterSpacing: '-3px', lineHeight: 0.9 }}>
          90<span style={{ fontSize: '52px' }}>%</span>
        </div>
        <div style={{ fontSize: '22px', color: '#4a4a55', lineHeight: 1.5 }}>
          Anthropic 自己 Claude Code 的代码<br />
          是 Claude Code 自己写的
        </div>
      </div>

      {/* Big terminal - right */}
      <div style={{ position: 'absolute', right: '120px', top: '180px', width: '880px' }}>
        <div className="terminal-card">
          <div className="terminal-card__header">
            {[0, 1, 2].map((i) => <span key={i} className="terminal-card__dot" />)}
            <span className="mono terminal-card__label">~/project — claude</span>
          </div>
          <div className="mono terminal-card__body" style={{ fontSize: '26px', lineHeight: 1.75, padding: '32px 32px 28px' }}>
            {cliLines.map((l, i) => (
              <div key={i} style={{ color: lineColor[l.t], minHeight: l.t === 'sep' ? '14px' : undefined }}>{l.text || ' '}</div>
            ))}
            <div style={{ color: '#5a5a68', marginTop: '8px' }}>$&nbsp;<span style={{ background: 'var(--accent)', display: 'inline-block', width: '14px', height: '26px', verticalAlign: '-3px' }} /></div>
          </div>
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
