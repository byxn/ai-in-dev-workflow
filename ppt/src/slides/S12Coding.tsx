import SlideHeader from '../components/SlideHeader'

export default function S12Coding() {
  return (
    <section>
      <SlideHeader tag="AI 增强流程" title={<><span className="dim">阶段三 /</span> <span className="hi">编码</span> <span style={{ fontSize: 22, color: 'var(--muted)', fontWeight: 400 }}>AI 渗透最深的阶段</span></>} />
      <div className="fragment">
        <table className="dt" style={{ fontSize: 13 }}>
          <thead><tr><th>环节</th><th style={{ color: '#ef4444' }}>传统</th><th style={{ color: 'var(--accent)' }}>AI 增强</th></tr></thead>
          <tbody>
            <tr><td>功能实现</td><td>纯手写，查文档</td><td>Cursor/Copilot 实时补全，减少查文档</td></tr>
            <tr><td>样板代码</td><td>重复写 CRUD、配置</td><td>AI 一键生成，专注核心逻辑</td></tr>
            <tr><td>Bug 修复</td><td>调试→搜索→尝试</td><td>粘贴报错，AI 给出根因和修复方案</td></tr>
            <tr><td>Code Review</td><td>人工审查，耗时</td><td>AI 预审查，标记潜在问题</td></tr>
            <tr><td>重构</td><td>高风险，耗时</td><td>Claude Code 自主重构，保持测试通过</td></tr>
          </tbody>
        </table>
      </div>
      <div className="fragment eff" style={{ marginTop: 16 }}>
        <div className="eff-item"><div className="eff-n">60-80%</div><div className="eff-l">样板代码生成节省时间</div></div>
        <div className="eff-item"><div className="eff-n">30m→5m</div><div className="eff-l">Bug 定位平均时间</div></div>
        <div className="eff-item"><div className="eff-n">50%</div><div className="eff-l">Code Review 准备节省</div></div>
      </div>
    </section>
  )
}
