import SlideHeader from '../components/SlideHeader'

const tools = [
  {
    name: 'GitHub Copilot',
    vendor: 'Microsoft / OpenAI',
    scene: '行级代码补全',
    type: '补全型',
    rec: '已落伍',
    recColor: 'var(--muted)',
    recBg: 'rgba(100,116,139,0.1)',
    dim: true,
  },
  {
    name: 'Cursor',
    vendor: 'Anysphere',
    scene: 'AI-Native 编辑器，多文件上下文编辑',
    type: '编辑器型',
    rec: '推荐',
    recColor: 'var(--accent)',
    recBg: 'rgba(0,212,170,0.1)',
    dim: false,
  },
  {
    name: 'Claude Code',
    vendor: 'Anthropic',
    scene: '终端 Agentic 编码，自主完成复杂任务',
    type: 'Agent 型',
    rec: '推荐',
    recColor: 'var(--accent)',
    recBg: 'rgba(0,212,170,0.1)',
    dim: false,
  },
  {
    name: 'NotebookLM',
    vendor: 'Google',
    scene: '知识库问答 / 文档理解',
    type: '知识型',
    rec: '推荐',
    recColor: 'var(--accent)',
    recBg: 'rgba(0,212,170,0.1)',
    dim: false,
  },
  {
    name: 'openclaw',
    vendor: '开源社区',
    scene: '自主 Agent 任务执行',
    type: '全自动型',
    rec: '前沿',
    recColor: '#00b8ff',
    recBg: 'rgba(0,184,255,0.1)',
    dim: false,
  },
]

export default function S07Tools() {
  return (
    <section>
      <SlideHeader tag="01 · 现状速览" title={<>主流 AI 编程工具 <span className="dim">— 现在该用什么</span></>} />
      <div className="fragment">
        <table className="dt" style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <th>工具</th>
              <th>厂商</th>
              <th>最强场景</th>
              <th>类型</th>
              <th>优先级</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((t) => (
              <tr key={t.name} style={{ opacity: t.dim ? 0.5 : 1 }}>
                <td><strong>{t.name}</strong></td>
                <td style={{ color: 'var(--muted)' }}>{t.vendor}</td>
                <td>{t.scene}</td>
                <td style={{ color: 'var(--muted)', fontSize: 12 }}>{t.type}</td>
                <td>
                  <span style={{
                    fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 4,
                    color: t.recColor, background: t.recBg,
                  }}>{t.rec}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="fragment hbox" style={{ marginTop: 16 }}>
        <div className="hbox-title">策略</div>
        <div className="hbox-body">衔接四阶段演进 — <strong>优先采用阶段 3 / 4 的工具</strong>。Copilot 已是行业基线，不再是差异点。</div>
      </div>
    </section>
  )
}
