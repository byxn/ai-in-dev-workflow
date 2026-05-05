import { BottomChrome, ChromeLabel, PageEyebrow, SlidePage, TopChrome } from '../components/Slide'

const ERAS = [
  { n: 1, name: 'AI 辅助编码', prod: 'Copilot',     date: '2021.06' },
  { n: 2, name: 'AI 原生 IDE', prod: 'Cursor',      date: '2023.03' },
  { n: 3, name: 'Agent',       prod: 'Claude Code', date: '2025.02' },
  { n: 4, name: '?',           prod: 'openClaw',    date: '2026.02' },
]

export default function S02Eras() {
  return (
    <SlidePage>
      <TopChrome
        left={<PageEyebrow>§ 01 · MAP</PageEyebrow>}
        right={<ChromeLabel>02 / 13</ChromeLabel>}
      />

      {/* Title */}
      <div style={{ position: 'absolute', left: 120, top: 160, right: 120 }}>
        <div className="mono" style={{ fontSize: 26, color: 'var(--mute)', letterSpacing: '4px', marginBottom: 16 }}>
          § 演进时间轴 · 5 年 · 4 个范式
        </div>
        <div className="sg" style={{ fontSize: 76, fontWeight: 500, lineHeight: 1.05, letterSpacing: '-2px', color: 'var(--fg)' }}>
          AI Coding 的发展趋势
        </div>
      </div>

      {/* 4-column era cards — full bleed */}
      <div style={{
        position: 'absolute',
        left: 0, right: 0,
        top: 340, bottom: 120,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}>
        {ERAS.map((era, i) => {
          const active = era.n === 3
          const dim    = era.n === 4

          const topBorder  = active ? '3px solid var(--accent)' : '1px solid var(--rule-soft)'
          const numColor   = active ? 'var(--accent)' : 'var(--mute)'
          const nameColor  = active ? 'var(--accent)' : dim ? 'var(--mute)' : 'var(--fg)'
          const prodColor  = active ? 'var(--accent)' : 'var(--fg)'
          const dateColor  = active ? 'var(--accent)' : 'var(--mute)'
          const ruleColor  = active ? 'rgba(216,106,44,0.25)' : 'var(--rule-soft)'
          const bg         = active ? 'rgba(216,106,44,0.025)' : 'transparent'

          return (
            <div
              key={era.n}
              style={{
                borderLeft: i > 0 ? '1px solid var(--rule-soft)' : 'none',
                borderTop: topBorder,
                background: bg,
                padding: '40px 52px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* large era number */}
              <div
                className="sg"
                style={{
                  fontSize: 156,
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-8px',
                  color: numColor,
                  marginBottom: 28,
                }}
              >
                {String(era.n).padStart(2, '0')}
              </div>

              {/* era name */}
              <div
                className="sg"
                style={{
                  fontSize: 44,
                  fontWeight: active ? 600 : 400,
                  lineHeight: 1.1,
                  letterSpacing: '-1px',
                  color: nameColor,
                  flexGrow: 1,
                }}
              >
                {era.name}
              </div>

              {/* product + date */}
              <div style={{ borderTop: `1px solid ${ruleColor}`, paddingTop: 20, marginTop: 32 }}>
                <div className="mono" style={{ fontSize: 28, color: prodColor, marginBottom: 10 }}>
                  {era.prod}
                </div>
                <div className="mono" style={{ fontSize: 20, color: dateColor }}>
                  {era.date}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <BottomChrome
        left={<ChromeLabel>§ 01 · AI 工具的 4 个时代</ChromeLabel>}
        right={<ChromeLabel>2021 → 2026</ChromeLabel>}
      />
    </SlidePage>
  )
}
