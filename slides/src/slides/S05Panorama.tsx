import { BottomChrome, ChromeLabel, PageEyebrow, SlidePage, TopChrome } from '../components/Slide'

const COLUMNS = [
  {
    n: 1,
    title: '辅助编码',
    sub: 'AI Coding 1.0',
    period: '2021 →',
    headBg: '#2a2a32',
    headFg: '#d4d1c8',
  },
  {
    n: 2,
    title: '协同编码',
    sub: 'AI Coding 2.0',
    period: '2023 →',
    headBg: '#14141a',
    headFg: '#f5f2ec',
  },
  {
    n: 3,
    title: '自主编码',
    sub: 'AI Coding 3.0',
    period: '2025 →',
    headBg: '#d86a2c',
    headFg: '#f5f2ec',
  },
]

type Row = { label: string; values: [string, string, string]; accent?: 0 | 1 | 2 }

const ROWS: Row[] = [
  {
    label: '工程范式',
    values: ['Prompt Engineering', 'Context Engineering', 'Harness Engineering'],
    accent: 2,
  },
  {
    label: '代表产品',
    values: ['Copilot', 'ChatGPT · Cursor', 'Claude Code · Agent'],
  },
  {
    label: '输出粒度',
    values: ['行 · 函数', '文件 · 模块', '任务 · 项目'],
  },
  {
    label: '工程师角色',
    values: ['执笔者', '协作者', '掌舵者'],
    accent: 2,
  },
]

export default function S05Panorama() {
  return (
    <SlidePage>
      <TopChrome
        left={<PageEyebrow>§ 10 · PANORAMA</PageEyebrow>}
        right={<ChromeLabel>07 / 13</ChromeLabel>}
      />

      {/* Title */}
      <div style={{ position: 'absolute', left: 120, top: 178, right: 120 }}>
        <div className="mono" style={{ fontSize: 26, color: 'var(--mute)', letterSpacing: '4px', marginBottom: 14 }}>
          从辅助到自主
        </div>
        <div className="sg" style={{ fontSize: 80, fontWeight: 500, lineHeight: 1, letterSpacing: '-2px' }}>
          AI Coding 演进全景
        </div>
      </div>

      {/* Matrix */}
      <div
        style={{
          position: 'absolute',
          left: 120,
          top: 380,
          right: 120,
          bottom: 160,
          display: 'grid',
          gridTemplateColumns: '210px repeat(3, 1fr)',
          gridTemplateRows: '120px repeat(4, 1fr)',
          columnGap: 16,
          rowGap: 0,
        }}
      >
        {/* Top-left corner spacer */}
        <div />

        {/* Column header bands */}
        {COLUMNS.map((col) => (
          <div
            key={col.n}
            style={{
              background: col.headBg,
              color: col.headFg,
              borderRadius: 12,
              padding: '20px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div className="mono" style={{ fontSize: 18, letterSpacing: '3px', opacity: 0.65 }}>
              STAGE · 0{col.n}
            </div>
            <div className="sg" style={{ fontSize: 42, fontWeight: 500, lineHeight: 1.1, marginTop: 6 }}>
              {col.title}
            </div>
            <div className="mono" style={{ fontSize: 18, letterSpacing: '2px', opacity: 0.7, marginTop: 6 }}>
              {col.sub}&nbsp;&nbsp;·&nbsp;&nbsp;{col.period}
            </div>
          </div>
        ))}

        {/* Body rows */}
        {ROWS.flatMap((row, ri) => [
          <div
            key={`lbl-${ri}`}
            className="sg"
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 30,
              fontWeight: 500,
              color: 'var(--mute)',
              borderTop: '1px solid var(--rule-soft)',
              ...(ri === ROWS.length - 1 ? { borderBottom: '1px solid var(--rule-soft)' } : {}),
              paddingRight: 20,
            }}
          >
            {row.label}
          </div>,
          ...row.values.map((value, ci) => {
            const isAccent = row.accent === ci
            return (
              <div
                key={`cell-${ri}-${ci}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderTop: '1px solid var(--rule-soft)',
                  ...(ri === ROWS.length - 1 ? { borderBottom: '1px solid var(--rule-soft)' } : {}),
                  padding: '0 24px',
                }}
              >
                <span
                  className="sg"
                  style={{
                    fontSize: 32,
                    fontWeight: isAccent ? 500 : 400,
                    color: isAccent ? 'var(--accent)' : 'var(--fg)',
                    lineHeight: 1.2,
                  }}
                >
                  {value}
                </span>
              </div>
            )
          }),
        ])}
      </div>

      <BottomChrome
        left={<ChromeLabel>§ 09 · PART ONE 总结</ChromeLabel>}
        right={<ChromeLabel>FROM ASSIST → AUTONOMY</ChromeLabel>}
        showRule
      />
    </SlidePage>
  )
}
