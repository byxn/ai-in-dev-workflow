import SlideHeader from '../components/SlideHeader'

export default function S20ToolPick() {
  return (
    <section>
      <SlideHeader tag="Part 4" title={<><span className="hi">选型建议</span></>} />
      <div className="fragment">
        <table className="dt">
          <thead><tr><th>场景</th><th>推荐工具</th><th>原因</th></tr></thead>
          <tbody>
            <tr><td>日常编码提速</td><td><strong>GitHub Copilot</strong></td><td>成熟、稳定、IDE 集成好</td></tr>
            <tr><td>复杂功能开发</td><td><strong>Cursor</strong></td><td>多文件感知，Agent 模式强</td></tr>
            <tr><td>大任务自动化</td><td><strong>Claude Code</strong></td><td>自主执行能力强</td></tr>
            <tr><td>文档 / 知识整理</td><td><strong>NotebookLM</strong></td><td>精准引用，防幻觉</td></tr>
            <tr><td>隐私敏感场景</td><td><strong>Continue.dev + Ollama</strong></td><td>数据不出本地</td></tr>
            <tr><td>统一 IM 渠道</td><td><strong>OpenClaw</strong></td><td>本地化，多渠道统一管理</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
