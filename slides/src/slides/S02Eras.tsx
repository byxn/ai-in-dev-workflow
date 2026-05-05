import { BottomChrome, ChromeLabel, PageEyebrow, SlidePage, TopChrome } from '../components/Slide'

const TOOLS = [
  {
    date: '2021.06',
    tool: 'GitHub Copilot',
    mode: 'COMPLETION',
    summary: '行级补全进入主流，AI 先以“副驾”形态出现。',
    position: 'top' as const,
  },
  {
    date: '2022.11',
    tool: 'ChatGPT',
    mode: 'CHAT',
    summary: '自然语言直接写代码，Prompt 成为新的输入界面。',
    position: 'bottom' as const,
  },
  {
    date: '2023.03',
    tool: 'Cursor',
    mode: 'AI IDE',
    alternatives: 'Trae, Qoder',
    summary: '聊天、上下文引用、批量改写进入编辑器主工作流。',
    position: 'top' as const,
  },
  {
    date: '2025.02',
    tool: 'Claude Code',
    mode: 'AGENT',
    alternatives: 'Codex, opencode',
    summary: '直接读仓库、改文件、跑命令，进入任务级执行。',
    position: 'bottom' as const,
    accent: true,
  },
  {
    date: '2026.02',
    tool: 'openclaw',
    mode: 'OPEN AGENT',
    alternatives: 'hermes-agent',
    summary: '开源 agent 工具开始出现，能力形态继续外溢。',
    position: 'top' as const,
  },
]

export default function S02Eras() {
  return (
    <SlidePage>
      <TopChrome
        left={<PageEyebrow>§ 01 · TIMELINE</PageEyebrow>}
        right={<ChromeLabel>02 / 13</ChromeLabel>}
      />

      <div style={{ position: 'absolute', left: 120, top: 160, right: 120 }}>
        <div className="mono" style={{ fontSize: 26, color: 'var(--mute)', letterSpacing: '4px', marginBottom: 16 }}>
          过去 5 年 · 工具一直在换，人与代码的接口也一直在变
        </div>
        <div className="sg" style={{ fontSize: 84, fontWeight: 500, lineHeight: 1.02, letterSpacing: '-2px', color: 'var(--fg)' }}>
          AI Coding 工具时间线
        </div>
        <div style={{ fontSize: 32, color: '#4a4a55', marginTop: 24, fontWeight: 300 }}>
          从 <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Copilot</span> 到{' '}
          <span style={{ color: 'var(--accent)', fontWeight: 500 }}>openclaw</span>，重点不是“趋势判断”，而是工具形态如何一步步变化。
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 120,
          right: 120,
          top: 390,
          bottom: 220,
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: '220px 120px 220px',
          columnGap: 18,
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 24,
            right: 24,
            top: '50%',
            height: 1,
            background: 'var(--rule-soft)',
          }}
        />

        {TOOLS.map((item, index) => {
          const isTop = item.position === 'top'
          const accent = item.accent === true

          const card = (
            <div
              style={{
                height: 188,
                borderRadius: 20,
                padding: '22px 24px',
                background: accent ? 'rgba(216,106,44,0.08)' : 'rgba(255,255,255,0.42)',
                border: accent ? '1px solid rgba(216,106,44,0.22)' : '1px solid rgba(20,20,26,0.08)',
                boxShadow: '0 20px 40px -32px rgba(20, 20, 26, 0.28)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div className="mono" style={{ fontSize: 18, letterSpacing: '2px', color: accent ? 'var(--accent)' : 'var(--mute)' }}>
                {item.mode}
              </div>
              <div className="sg" style={{ fontSize: 38, fontWeight: accent ? 600 : 500, lineHeight: 1.05, letterSpacing: '-1px', color: accent ? 'var(--accent)' : 'var(--fg)' }}>
                {item.tool}
              </div>
              {item.alternatives && (
                <div className="mono" style={{ fontSize: 16, letterSpacing: '1px', color: 'var(--mute)', marginTop: -4 }}>
                  替代品：{item.alternatives}
                </div>
              )}
              <div style={{ fontSize: 24, lineHeight: 1.45, color: '#4a4a55' }}>
                {item.summary}
              </div>
            </div>
          )

          return (
            <div key={item.tool} style={{ display: 'contents' }}>
              {isTop && (
                <div style={{ gridColumn: index + 1, gridRow: 1, alignSelf: 'end' }}>
                  {card}
                </div>
              )}

              <div
                style={{
                  gridColumn: index + 1,
                  gridRow: 2,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  className="mono"
                  style={{
                    position: 'absolute',
                    top: isTop ? 12 : 'auto',
                    bottom: isTop ? 'auto' : 12,
                    fontSize: 20,
                    letterSpacing: '1px',
                    color: accent ? 'var(--accent)' : 'var(--mute)',
                  }}
                >
                  {item.date}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: isTop ? 48 : 'auto',
                    bottom: isTop ? 'auto' : 48,
                    width: 1,
                    height: 34,
                    background: accent ? 'rgba(216,106,44,0.35)' : 'var(--rule-soft)',
                  }}
                />
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: accent ? 'var(--accent)' : 'var(--fg)',
                    boxShadow: accent
                      ? '0 0 0 10px rgba(216,106,44,0.12)'
                      : '0 0 0 10px rgba(20,20,26,0.04)',
                  }}
                />
              </div>

              {!isTop && (
                <div style={{ gridColumn: index + 1, gridRow: 3, alignSelf: 'start' }}>
                  {card}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div
        style={{
          position: 'absolute',
          left: 120,
          right: 120,
          bottom: 132,
          borderTop: '1px solid var(--rule-soft)',
          paddingTop: 22,
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <div className="mono" style={{ fontSize: 24, color: 'var(--mute)', letterSpacing: '2px' }}>
          COMPLETION → CHAT → AI IDE → AGENT → OPEN AGENT
        </div>
        <div className="sg" style={{ fontSize: 30, fontWeight: 400, color: '#4a4a55' }}>
          下一页开始重点看 <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Agent 阶段</span>
        </div>
      </div>

      <BottomChrome
        left={<ChromeLabel>§ 01 · 从 Copilot 到 openclaw</ChromeLabel>}
        right={<ChromeLabel>2021 → 2026</ChromeLabel>}
      />
    </SlidePage>
  )
}
