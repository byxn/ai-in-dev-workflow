import { useState, useEffect, useRef } from 'react'

const ERAS = [
  { n: 1, name: '程序员的秘密武器', prod: 'Copilot',              date: '2021.06' },
  { n: 2, name: '全民 AI 对话',      prod: 'ChatGPT',             date: '2022.11' },
  { n: 3, name: 'AI IDE',            prod: 'Cursor',              date: '2023.03' },
  { n: 4, name: 'AI 自己能干活',     prod: 'Claude Code',         date: '2025.02' },
  { n: 5, name: '驾驭 AI',           prod: 'Harness Engineering', date: '2026.02' },
]

export default function S02Eras() {
  const [hl, setHl] = useState(0) // 0 = overview, 1-5 = highlight era N
  const hlRef = useRef(0)
  const secRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!secRef.current?.classList.contains('present')) return
      if (e.key === 'ArrowRight' || e.key === ' ') {
        if (hlRef.current < 5) {
          hlRef.current += 1
          setHl(hlRef.current)
          e.stopImmediatePropagation()
          e.preventDefault()
        }
      } else if (e.key === 'ArrowLeft') {
        if (hlRef.current > 0) {
          hlRef.current -= 1
          setHl(hlRef.current)
          e.stopImmediatePropagation()
          e.preventDefault()
        }
      } else if (e.key === 'ArrowUp') {
        if (hlRef.current > 0) {
          hlRef.current = 0
          setHl(0)
          e.stopImmediatePropagation()
          e.preventDefault()
        }
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [])

  // reset when slide becomes inactive
  useEffect(() => {
    const obs = new MutationObserver(() => {
      if (!secRef.current?.classList.contains('present') && hlRef.current !== 0) {
        hlRef.current = 0
        setHl(0)
      }
    })
    if (secRef.current) obs.observe(secRef.current, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={(el) => { secRef.current = el }} style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <div className="chrome-top">
        <div className="page-eyebrow">§ 01 · MAP</div>
        <div className="chrome-label">02 / 18</div>
      </div>
      <div className="rule-top" />

      <div style={{ position: 'absolute', left: '120px', top: '200px', right: '120px' }}>
        <div className="sg" style={{ fontSize: '88px', fontWeight: 500, lineHeight: 1, letterSpacing: '-2px' }}>AI 工具的 5 个时代</div>
        <div style={{ fontSize: '30px', color: '#4a4a55', marginTop: '24px', fontWeight: 300 }}>
          按 <span className="mono" style={{ color: 'var(--accent)' }}>→</span> 逐个点亮 · 按 <span className="mono" style={{ color: 'var(--accent)' }}>↑</span> 回到总览
        </div>
      </div>

      <div style={{ position: 'absolute', left: '120px', top: '420px', right: '120px' }}>
        {ERAS.map((era) => {
          const active = hl === era.n
          const faded  = hl > 0 && !active
          return (
            <div key={era.n} style={{
              display: 'grid',
              gridTemplateColumns: '140px 1fr 420px 200px',
              alignItems: 'baseline',
              padding: '18px 0',
              borderTop: '1px solid var(--rule-soft)',
              ...(era.n === 5 ? { borderBottom: '1px solid var(--rule-soft)' } : {}),
              opacity: faded ? 0.22 : 1,
              transition: 'opacity .25s ease',
            }}>
              <div className="mono" style={{ fontSize: '28px', color: active ? 'var(--accent)' : 'var(--mute)', letterSpacing: '2px' }}>时代 {era.n}</div>
              <div className="sg"   style={{ fontSize: '44px', fontWeight: 500, color: active ? 'var(--accent)' : 'var(--fg)' }}>{era.name}</div>
              <div className="mono" style={{ fontSize: '28px', color: active ? 'var(--fg)' : '#4a4a55', fontWeight: active ? 500 : 400 }}>{era.prod}</div>
              <div className="mono" style={{ fontSize: '28px', color: active ? 'var(--fg)' : 'var(--mute)', textAlign: 'right' }}>{era.date}</div>
            </div>
          )
        })}
      </div>

      <div className="chrome-bottom">
        <div className="chrome-label">§ 01 · AI 工具的 5 个时代</div>
        <div className="chrome-label">2021 → 2026</div>
      </div>
    </section>
  )
}
