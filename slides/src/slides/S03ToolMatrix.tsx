import SlideHeader from '../components/SlideHeader'

export default function S03ToolMatrix() {
  return (
    <section>
      <SlideHeader tag="Part 2" title={<>主流 AI 工具<span className="hi">矩阵</span></>} />
      <div className="fragment">
        <table className="dt" style={{ fontSize: 13 }}>
          <thead>
            <tr>
              <th>工具</th><th>定位</th><th>核心能力</th><th>开源替代</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>GitHub Copilot</strong></td><td>IDE 内联 AI 补全</td><td>行/块级代码生成，主流 IDE 集成</td><td>Continue.dev + Ollama</td></tr>
            <tr><td><strong>NotebookLM</strong></td><td>知识问答 &amp; 内容生成</td><td>上传文档，AI 总结/问答/播客</td><td>AnythingLLM, Khoj</td></tr>
            <tr><td><strong>Cursor</strong></td><td>AI-first IDE</td><td>多文件上下文编辑，Agent 模式</td><td>VS Code + Continue + Cline</td></tr>
            <tr><td><strong>Claude Code</strong></td><td>终端 AI Agent</td><td>自主完成复杂编程任务，深度 CLI 集成</td><td>OpenHands, SWE-agent</td></tr>
            <tr><td><strong>OpenClaw</strong></td><td>本地 AI 助手平台</td><td>统一接入 20+ 通信渠道，本地优先</td><td>LobeChat, Open WebUI</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
