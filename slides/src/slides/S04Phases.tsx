import SlideHeader from '../components/SlideHeader'

const phases = [
  {
    year: '2021',
    tag: '补全时代',
    title: 'GitHub Copilot',
    desc: '行级代码自动补全。更强的 IDE，仅此而已。',
    badge: '已落伍',
    badgeColor: 'var(--muted)',
    badgeBg: 'rgba(100,116,139,0.12)',
    essence: '本质：补全助手',
    dim: true,
  },
  {
    year: '2023',
    tag: '普及期',
    title: 'ChatGPT 对话生成',
    desc: '写函数、解释代码。更聪明的 Stack Overflow。',
    badge: '已属基础配置',
    badgeColor: 'var(--muted)',
    badgeBg: 'rgba(100,116,139,0.12)',
    essence: '本质：补全助手',
    dim: true,
  },
  {
    year: '2024',
    tag: '当下主流',
    title: 'Cursor / Claude Code',
    desc: '理解整个 repo，跨文件修改重构。',
    badge: '推荐采用',
    badgeColor: 'var(--accent)',
    badgeBg: 'rgba(0,212,170,0.12)',
    essence: '本质：初级工程师',
    dim: false,
  },
  {
    year: '2025+',
    tag: '爆发点',
    title: 'Agent 时代',
    desc: '自主拆任务 + 执行循环，调试直到完成。',
    badge: '前沿',
    badgeColor: '#00b8ff',
    badgeBg: 'rgba(0,184,255,0.12)',
    essence: '本质：可执行实体',
    dim: false,
  },
]

export default function S04Phases() {
  return (
    <section>
      <SlideHeader tag="01 · 现状速览" title={<>AI 编程<span className="hi">四阶段</span>演进</>} />
      <div className="grid grid-cols-4 gap-[14px]">
        {phases.map((p, i) => (
          <div
            key={i}
            className={`fragment flex flex-col gap-[10px] rounded-[10px] p-[16px_18px] border ${p.dim ? 'opacity-70' : ''}`}
            style={{
              background: p.dim ? 'rgba(255,255,255,0.02)' : 'var(--panel)',
              borderColor: p.dim ? 'rgba(255,255,255,0.06)' : 'rgba(0,212,170,0.2)',
            }}
          >
            <div className="flex justify-between items-start">
              <div>
                <div
                  className="text-[22px] font-extrabold leading-none"
                  style={{ color: p.dim ? 'var(--muted)' : 'var(--accent)' }}
                >
                  {p.year}
                </div>
                <div className="text-[11px] text-muted mt-[3px]">{p.tag}</div>
              </div>
              <span
                className="text-[10px] font-bold px-2 py-[3px] rounded"
                style={{ color: p.badgeColor, background: p.badgeBg }}
              >
                {p.badge}
              </span>
            </div>

            <div
              className="border-t pt-[10px]"
              style={{ borderColor: p.dim ? 'rgba(255,255,255,0.05)' : 'rgba(0,212,170,0.12)' }}
            >
              <div className="text-[15px] font-bold text-fg mb-[6px]">{p.title}</div>
              <div className="text-xs text-muted leading-[1.6]">{p.desc}</div>
            </div>

            <div
              className="mt-auto text-[11px] font-semibold text-center rounded-[5px] px-[10px] py-1 border"
              style={{
                color: p.dim ? 'var(--muted)' : 'var(--accent)',
                background: p.dim ? 'rgba(255,255,255,0.03)' : 'rgba(0,212,170,0.06)',
                borderColor: p.dim ? 'rgba(255,255,255,0.06)' : 'rgba(0,212,170,0.15)',
              }}
            >
              {p.essence}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
