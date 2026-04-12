import SlideHeader from '../components/SlideHeader'

const skills = [
  {
    num: '01',
    title: '抽象能力',
    desc: '把模糊需求转化为精确 Spec，让 AI 真正理解你想要什么。',
    color: 'var(--accent)',
    colorBg: 'rgba(0,212,170,0.05)',
    colorBorder: 'rgba(0,212,170,0.18)',
  },
  {
    num: '02',
    title: '系统设计能力',
    desc: '设计 AI 执行的任务边界与接口，掌控全局，不被细节淹没。',
    color: 'var(--purple)',
    colorBg: 'rgba(139,92,246,0.05)',
    colorBorder: 'rgba(139,92,246,0.18)',
  },
  {
    num: '03',
    title: 'Prompt 工程',
    desc: '精准描述意图，驾驭 AI 输出质量。',
    color: '#00b8ff',
    colorBg: 'rgba(0,184,255,0.05)',
    colorBorder: 'rgba(0,184,255,0.18)',
  },
  {
    num: '04',
    title: 'AI 调度能力',
    desc: '协调多个 Agent 协同工作，验证与修正 AI 执行结果。',
    color: 'var(--amber)',
    colorBg: 'rgba(245,158,11,0.05)',
    colorBorder: 'rgba(245,158,11,0.18)',
  },
]

export default function S06Skills() {
  return (
    <section>
      <SlideHeader tag="01 · 现状速览" title={<>未来程序员需要什么<span className="hi">新能力</span></>} />
      <div className="grid grid-cols-2 gap-4">
        {skills.map((s, i) => (
          <div
            key={i}
            className="fragment flex items-start gap-4 rounded-xl px-[22px] py-[18px] border"
            style={{ background: s.colorBg, borderColor: s.colorBorder }}
          >
            <div
              className="text-[28px] font-black leading-none opacity-50 shrink-0 min-w-9 tabular-nums"
              style={{ color: s.color }}
            >
              {s.num}
            </div>
            <div>
              <div className="text-[17px] font-bold text-fg mb-[6px]">{s.title}</div>
              <div className="text-[13px] text-muted leading-[1.65]">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
