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
  },
]

export default function S05Tiers() {
  return (
    <section>
      <SlideHeader tag="01 · 现状速览" title={<>程序员的<span className="hi">三层分化</span></>} />
      <div className="grid grid-cols-3 gap-[18px]">
        {tiers.map((t, i) => (
          <div
            key={i}
            className="fragment flex flex-col gap-[14px] rounded-xl p-[22px] border"
            style={{ background: t.colorBg, borderColor: t.colorBorder }}
          >
            {/* header */}
            <div className="flex items-center gap-[10px]">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base font-bold shrink-0 border"
                style={{
                  color: t.color,
                  background: `color-mix(in srgb, ${t.color} 15%, transparent)`,
                  borderColor: `color-mix(in srgb, ${t.color} 30%, transparent)`,
                }}
              >
                {t.icon}
              </div>
              <div>
                <div className="text-[11px] text-muted font-semibold tracking-[1px] uppercase">{t.level}</div>
                <div className="text-[15px] font-bold text-fg leading-[1.3]">{t.role}</div>
              </div>
            </div>

            {/* traits */}
            <div className="flex flex-col gap-[7px]">
              {t.traits.map((tr, j) => (
                <div key={j} className="flex items-center gap-2 text-[13px] text-muted">
                  <span className="text-[10px]" style={{ color: t.color }}>▸</span>
                  {tr}
                </div>
              ))}
            </div>

            {/* verdict */}
            <div
              className="mt-auto border-t pt-3 text-[13px] font-bold text-center"
              style={{ color: t.color, borderColor: t.colorBorder }}
            >
              {t.verdict}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
