import SlideHeader from '../components/SlideHeader'

const tiers = [
  {
    level: '低端',
    role: 'CRUD 工程师',
    icon: '⚠',
    color: '#ef4444',
    colorBg: 'rgba(239,68,68,0.05)',
    colorBorder: 'rgba(239,68,68,0.2)',
    traits: ['写模板代码', '做重复劳动', '执行明确指令'],
    verdict: '被替代最快',
    verdictColor: '#ef4444',
  },
  {
    level: '中端',
    role: 'AI 提效工程师',
    icon: '→',
    color: 'var(--amber)',
    colorBg: 'rgba(245,158,11,0.05)',
    colorBorder: 'rgba(245,158,11,0.2)',
    traits: ['会用 AI 工具', '提升个人产出', '仍依赖他人决策'],
    verdict: '短期安全，需持续进化',
    verdictColor: 'var(--amber)',
  },
  {
    level: '高端',
    role: '系统设计者 + Agent 管理者',
    icon: '★',
    color: 'var(--accent)',
    colorBg: 'rgba(0,212,170,0.05)',
    colorBorder: 'rgba(0,212,170,0.2)',
    traits: ['设计系统架构', '调度 AI 执行', '把控质量与方向'],
    verdict: '核心竞争力',
    verdictColor: 'var(--accent)',
  },
]

export default function S05Tiers() {
  return (
    <section>
      <SlideHeader tag="01 · 现状速览" title={<>程序员的<span className="hi">三层分化</span></>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {tiers.map((t, i) => (
          <div key={i} className="fragment" style={{
            background: t.colorBg,
            border: `1px solid ${t.colorBorder}`,
            borderRadius: 12,
            padding: '22px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}>
            {/* header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: `color-mix(in srgb, ${t.color} 15%, transparent)`,
                border: `1px solid color-mix(in srgb, ${t.color} 30%, transparent)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, fontWeight: 700, color: t.color, flexShrink: 0,
              }}>{t.icon}</div>
              <div>
                <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>{t.level}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>{t.role}</div>
              </div>
            </div>

            {/* traits */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {t.traits.map((tr, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted)' }}>
                  <span style={{ color: t.color, fontSize: 10 }}>▸</span>
                  {tr}
                </div>
              ))}
            </div>

            {/* verdict */}
            <div style={{
              marginTop: 'auto',
              borderTop: `1px solid ${t.colorBorder}`,
              paddingTop: 12,
              fontSize: 13,
              fontWeight: 700,
              color: t.verdictColor,
              textAlign: 'center',
            }}>{t.verdict}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
