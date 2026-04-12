const bullets = [
  '写代码正在从「生产」变成「验证」',
  '程序员正在从「执行者」变成「Agent 管理者」',
  '未来差距不是语言 / 框架，而是驾驭 AI 的能力',
]

export default function S01Opening() {
  return (
    <section
      className="!items-center !justify-center text-center"
      style={{
        background:
          'radial-gradient(ellipse 60% 55% at 50% 40%, rgba(0,212,170,0.06) 0%, transparent 65%), radial-gradient(ellipse 40% 30% at 80% 70%, rgba(139,92,246,0.04) 0%, transparent 60%)',
      }}
    >
      <div className="flex flex-col items-center">
        <div className="fragment mb-6 text-xs font-semibold tracking-[3px] uppercase text-muted" data-fragment-index="0">
          技术部门全员分享 · 2025
        </div>

        <h1 className="text-[88px]! font-black! leading-[0.95] tracking-[-3px] text-fg m-0!">
          AI{' '}
          <span className="bg-gradient-to-br from-accent to-[#00b8ff] bg-clip-text text-transparent">
            CODING
          </span>
        </h1>

        <p className="text-[22px] text-muted mt-4 mb-12 font-normal">
          当写代码不再稀缺，程序员还剩什么？
        </p>

        <div className="flex flex-col items-start gap-[14px] text-left">
          {bullets.map((b, i) => (
            <div
              key={i}
              className="fragment flex items-center gap-[14px] text-[17px] text-fg bg-white/[0.03] border border-white/[0.07] rounded-lg px-5 py-3 min-w-[540px]"
              data-fragment-index={i + 1}
            >
              <span className="w-[6px] h-[6px] rounded-full bg-accent shrink-0" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
