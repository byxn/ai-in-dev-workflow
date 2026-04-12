import SlideHeader from '../components/SlideHeader'

const promptText = `创建一个带搜索框的用户列表组件，
支持实时过滤，卡片布局，深色风格`

const codeText = `export function UserList() {
  const [q, setQ] = useState('')
  const users = data.filter(u =>
    u.name.includes(q))
  return (
    <div className="grid">
      <Input onChange={e=>setQ(e.target.value)}
             placeholder="搜索用户…" />
      {users.map(u => <UserCard key={u.id} {...u} />)}
    </div>
  )
}`

const agentSteps = [
  { icon: '🎯', label: '接收目标', desc: '整理竞品分析报告' },
  { icon: '🌐', label: '浏览网页', desc: '搜索各产品官网 & 新闻' },
  { icon: '📊', label: '提取数据', desc: '结构化对比维度' },
  { icon: '📝', label: '生成文档', desc: '输出 Markdown 报告' },
]

export default function S05AITools() {
  return (
    <section>
      <SlideHeader tag="工具详解 01+" title={<>从<span className="hi">写代码</span>到<span className="hi">完成任务</span></>} />
      <div className="two-col" style={{ marginTop: 16, gap: 28, alignItems: 'stretch' }}>

        {/* v0 */}
        <div className="fragment">
          <div className="card" style={{ padding: '20px 24px', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--text)' }}>v0</span>
              <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>by Vercel</span>
              <a href="https://v0.dev/" target="_blank" rel="noreferrer"
                style={{ fontSize: 12, color: 'var(--muted)', marginLeft: 'auto' }}>v0.dev ↗</a>
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500 }}>UI 生成 Agent · 自然语言 → React 代码</div>

            {/* prompt box */}
            <div style={{
              background: 'rgba(0,212,170,0.05)', border: '1px solid rgba(0,212,170,0.2)',
              borderRadius: 8, padding: '10px 14px',
            }}>
              <div style={{ fontSize: 10, color: 'var(--accent)', fontWeight: 600, letterSpacing: 1, marginBottom: 6 }}>PROMPT</div>
              <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{promptText}</div>
            </div>

            {/* arrow */}
            <div style={{ textAlign: 'center', color: 'var(--accent)', fontSize: 18, lineHeight: 1 }}>↓</div>

            {/* code output */}
            <div className="code-block" style={{ fontSize: 11, lineHeight: 1.65, flex: 1 }}>
              <span style={{ color: '#6e7681' }}>// 生成结果 ✓</span>{'\n'}
              {codeText.split('\n').map((line, i) => {
                const colored = line
                  .replace(/\b(export|function|const|return)\b/g, '§kw§$1§/kw§')
                  .replace(/(['"`][^'"`]*['"`])/g, '§str§$1§/str§')
                return (
                  <span key={i}>
                    {colored.split(/§(kw|str|\/kw|\/str)§/).map((part, j, arr) => {
                      const prev = arr[j - 1]
                      if (prev === 'kw') return <span key={j} style={{ color: '#c084fc' }}>{part}</span>
                      if (prev === 'str') return <span key={j} style={{ color: '#86efac' }}>{part}</span>
                      if (part === 'kw' || part === 'str' || part === '/kw' || part === '/str') return null
                      return <span key={j}>{part}</span>
                    })}
                    {'\n'}
                  </span>
                )
              })}
            </div>
          </div>
        </div>

        {/* Manus */}
        <div className="fragment">
          <div className="card" style={{ padding: '20px 24px', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--text)' }}>Manus</span>
              <span style={{ fontSize: 13, color: 'var(--purple)', fontWeight: 600 }}>通用 AI Agent</span>
              <a href="https://manus.im/" target="_blank" rel="noreferrer"
                style={{ fontSize: 12, color: 'var(--muted)', marginLeft: 'auto' }}>manus.im ↗</a>
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500 }}>给一个目标，自主拆解并执行跨系统任务</div>

            {/* goal */}
            <div style={{
              background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.25)',
              borderRadius: 8, padding: '10px 14px',
            }}>
              <div style={{ fontSize: 10, color: 'var(--purple)', fontWeight: 600, letterSpacing: 1, marginBottom: 4 }}>USER GOAL</div>
              <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>帮我整理一份竞品分析报告</div>
            </div>

            {/* steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1, justifyContent: 'space-evenly' }}>
              {agentSteps.map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                    background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17,
                  }}>{step.icon}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>{step.label}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 1 }}>{step.desc}</div>
                  </div>
                  {i < agentSteps.length - 1 && (
                    <div style={{ position: 'absolute', left: 42, marginTop: 36, color: 'rgba(139,92,246,0.4)', fontSize: 12 }} />
                  )}
                </div>
              ))}
            </div>

            {/* result badge */}
            <div style={{
              background: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)',
              borderRadius: 6, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ color: 'var(--accent)', fontSize: 14 }}>✓</span>
              <span style={{ fontSize: 12, color: 'var(--muted)' }}>自动输出 <strong style={{ color: 'var(--text)' }}>竞品分析.md</strong>，全程无需人工干预</span>
            </div>
          </div>
        </div>

      </div>

      <div className="fragment hbox" style={{ marginTop: 14 }}>
        <div className="hbox-title">核心区别</div>
        <div className="hbox-body" style={{ fontSize: 14 }}>
          v0 专注于 <strong>UI 代码生成</strong>（输入→输出）；Manus 是真正的 <strong>自主 Agent</strong>（目标→自主执行多步骤）。这代表着两个不同的进化方向。
        </div>
      </div>
    </section>
  )
}
