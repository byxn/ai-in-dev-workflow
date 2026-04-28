import { BottomChrome, ChromeLabel, PageEyebrow, SlidePage, TopChrome } from '../components/Slide'

const stages = ['需求', '设计', '开发', '测试']

const modes = [
  { label: '需要人',  tone: 'var(--fg)' },
  { label: '人 + AI', tone: 'var(--accent)' },
  { label: '完全 AI', tone: 'var(--mute)' },
]

export default function S15HumanAiRoles() {
  return (
    <SlidePage>
      <TopChrome
        left={<PageEyebrow>§ 16 · DISCUSS</PageEyebrow>}
        right={<ChromeLabel>15 / 16</ChromeLabel>}
      />

      {/* Question */}
      <div style={{ position: 'absolute', left: '120px', top: '178px', right: '120px' }}>
        <div className="sg" style={{ fontSize: '80px', fontWeight: 500, letterSpacing: '-2px', lineHeight: 1.1 }}>
          各个环节，谁来做？
        </div>
      </div>

      {/* Matrix */}
      <div
        style={{
          position: 'absolute',
          left: '120px',
          top: '340px',
          right: '120px',
          bottom: '160px',
          display: 'grid',
          gridTemplateColumns: '230px repeat(4, 1fr)',
          gridTemplateRows: '86px repeat(3, 1fr)',
        }}
      >
        {/* Top-left corner */}
        <div style={{ borderBottom: '2px solid var(--fg)' }} />

        {/* Stage column headers */}
        {stages.map((stage) => (
          <div
            key={stage}
            className="sg"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '58px',
              fontWeight: 600,
              borderBottom: '2px solid var(--fg)',
              borderLeft: '1px solid var(--rule-soft)',
            }}
          >
            {stage}
          </div>
        ))}

        {/* Mode rows — all cells empty */}
        {modes.flatMap((mode, mi) => [
          <div
            key={`lbl-${mi}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              borderTop: mi > 0 ? '1px solid var(--rule-soft)' : undefined,
              paddingRight: '20px',
            }}
          >
            <span className="sg" style={{ fontSize: '34px', fontWeight: 500, color: mode.tone }}>
              {mode.label}
            </span>
          </div>,
          ...stages.map((_, si) => (
            <div
              key={`cell-${mi}-${si}`}
              style={{
                borderTop: mi > 0 ? '1px solid var(--rule-soft)' : undefined,
                borderLeft: '1px solid var(--rule-soft)',
              }}
            />
          )),
        ])}
      </div>

      <BottomChrome
        left={<ChromeLabel>DISCUSSION · HUMAN / AI BOUNDARY</ChromeLabel>}
        right={<ChromeLabel>需求 · 设计 · 开发 · 测试</ChromeLabel>}
        showRule
      />
    </SlidePage>
  )
}
