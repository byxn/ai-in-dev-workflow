import SlideHeader from '../components/SlideHeader'

const oldSteps = ['需求', '设计', '写代码', 'Debug', '查文档', '手动实现']
const newSteps = ['描述意图', '写 Prompt / Spec', 'AI 生成', '驯化 AI', '让 AI 查', '自动生成']

export default function S09Paradigm() {
  return (
    <section>
      <SlideHeader tag="02 · 范式变化" title={<>开发范式：<span className="hi">旧世界</span> vs <span className="hi">新世界</span></>} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 48px 1fr', gap: 0, alignItems: 'stretch', marginTop: 8 }}>
        {/* old world */}
        <div className="fragment">
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase',
            color: '#ef4444', marginBottom: 12, textAlign: 'center',
          }}>旧世界</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {oldSteps.map((s, i) => (
              <div key={i} style={{
                background: 'var(--panel)', border: '1px solid var(--border)',
                borderRadius: 8, padding: '10px 16px',
                fontSize: 14, color: 'var(--muted)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ color: '#ef4444', opacity: 0.5, fontSize: 10 }}>●</span>
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* middle arrows */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18, paddingTop: 38 }}>
          {['→', '→', '→', '→', '→', '→'].map((a, i) => (
            <div key={i} style={{ color: 'rgba(0,212,170,0.3)', fontSize: 14 }}>{a}</div>
          ))}
        </div>

        {/* new world */}
        <div className="fragment">
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase',
            color: 'var(--accent)', marginBottom: 12, textAlign: 'center',
          }}>新世界</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {newSteps.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(0,212,170,0.04)', border: '1px solid rgba(0,212,170,0.2)',
                borderRadius: 8, padding: '10px 16px',
                fontSize: 14, color: 'var(--text)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ color: 'var(--accent)', fontSize: 10 }}>●</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
