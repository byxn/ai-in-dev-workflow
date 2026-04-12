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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {phases.map((p, i) => (
          <div key={i} className="fragment" style={{
            background: p.dim ? 'rgba(255,255,255,0.02)' : 'var(--panel)',
            border: `1px solid ${p.dim ? 'rgba(255,255,255,0.06)' : 'rgba(0,212,170,0.2)'}`,
            borderRadius: 10,
            padding: '16px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            opacity: p.dim ? 0.7 : 1,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 800, color: p.dim ? 'var(--muted)' : 'var(--accent)', lineHeight: 1 }}>{p.year}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 3 }}>{p.tag}</div>
              </div>
              <span style={{
                fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4,
                color: p.badgeColor, background: p.badgeBg,
              }}>{p.badge}</span>
            </div>

            <div style={{ borderTop: `1px solid ${p.dim ? 'rgba(255,255,255,0.05)' : 'rgba(0,212,170,0.12)'}`, paddingTop: 10 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{p.title}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{p.desc}</div>
            </div>

            <div style={{
              marginTop: 'auto',
              fontSize: 11, fontWeight: 600,
              color: p.dim ? 'var(--muted)' : 'var(--accent)',
              background: p.dim ? 'rgba(255,255,255,0.03)' : 'rgba(0,212,170,0.06)',
              border: `1px solid ${p.dim ? 'rgba(255,255,255,0.06)' : 'rgba(0,212,170,0.15)'}`,
              borderRadius: 5,
              padding: '4px 10px',
              textAlign: 'center',
            }}>{p.essence}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
