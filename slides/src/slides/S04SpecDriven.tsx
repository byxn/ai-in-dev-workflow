import { BottomChrome, ChromeLabel, PageEyebrow, SlidePage, TopChrome } from '../components/Slide'

const flow = [
  { n: '01', stage: 'SPEC',   actor: '人类编写',   note: '意图 · 边界 · 验收',        accent: true  },
  { n: '02', stage: 'PLAN',   actor: 'AI 拆解',    note: '任务图 · 依赖 · 风险',      accent: false },
  { n: '03', stage: 'CODE',   actor: 'Agent 实现', note: '代码 · 测试 · 文档',        accent: false },
  { n: '04', stage: 'REVIEW', actor: '回到规约',   note: '不改代码 · 改规约重生',     accent: false },
]

export default function S04SpecDriven() {
  return (
    <SlidePage>
      <TopChrome
        left={<PageEyebrow>§ 10 · METHOD</PageEyebrow>}
        right={<ChromeLabel>08 / 13</ChromeLabel>}
      />

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px' }}>
        <div className="mono" style={{ fontSize: '26px', color: 'var(--mute)', letterSpacing: '3px', marginBottom: '20px' }}>METHOD · 规约驱动</div>
        <div className="sg" style={{ fontSize: '108px', fontWeight: 500, lineHeight: 1, letterSpacing: '-3px' }}>
          Spec-Driven <span style={{ color: 'var(--accent)' }}>Development</span>
        </div>
        <div style={{ fontSize: '38px', color: '#4a4a55', marginTop: '28px', fontWeight: 300 }}>
          规约驱动开发 · <span style={{ color: 'var(--fg)' }}>写规约,不写代码</span>
        </div>
      </div>

      <div style={{ position: 'absolute', left: '120px', top: '520px', right: '120px', display: 'flex', gap: '24px' }}>
        {flow.map((f, i) => (
          <div key={f.n} style={{ flex: 1, display: 'flex', alignItems: 'stretch', gap: '24px' }}>
            <div style={{ flex: 1, borderTop: f.accent ? '2px solid var(--accent)' : '1px solid var(--rule-soft)', paddingTop: '20px' }}>
              <div className="mono" style={{ fontSize: '22px', color: f.accent ? 'var(--accent)' : 'var(--mute)', letterSpacing: '2px' }}>{f.n}</div>
              <div className="sg" style={{ fontSize: '52px', fontWeight: 600, marginTop: '14px', letterSpacing: '-1px', color: f.accent ? 'var(--accent)' : 'var(--fg)' }}>{f.stage}</div>
              <div style={{ fontSize: '26px', color: '#4a4a55', marginTop: '12px', fontWeight: 400 }}>{f.actor}</div>
              <div className="mono" style={{ fontSize: '20px', color: 'var(--mute)', marginTop: '8px', letterSpacing: '1px' }}>{f.note}</div>
            </div>
            {i < flow.length - 1 && (
              <div className="mono" style={{ fontSize: '32px', color: 'var(--mute)', alignSelf: 'center', marginTop: '24px' }}>→</div>
            )}
          </div>
        ))}
      </div>

      <div style={{ position: 'absolute', left: '120px', right: '120px', bottom: '140px', borderTop: '2px solid var(--fg)', paddingTop: '24px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div className="sg" style={{ fontSize: '52px', fontWeight: 500, letterSpacing: '-1px' }}>
          规约是<span style={{ color: 'var(--accent)' }}>新的源代码</span>
        </div>
        <div className="mono" style={{ fontSize: '22px', color: 'var(--mute)', letterSpacing: '2px' }}>The spec is the new source code.</div>
      </div>

      <BottomChrome
        left={<ChromeLabel>§ 10 · 规约驱动</ChromeLabel>}
        right={<ChromeLabel>METHOD · SPEC-FIRST</ChromeLabel>}
        showRule
      />
    </SlidePage>
  )
}
