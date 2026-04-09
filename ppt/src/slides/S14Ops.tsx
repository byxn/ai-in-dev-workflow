import SlideHeader from '../components/SlideHeader'
import HBox from '../components/HBox'

export default function S14Ops() {
  return (
    <section>
      <SlideHeader tag="AI 增强流程" title={<><span className="dim">阶段五 /</span> <span className="hi">运维 &amp; 上线</span></>} />
      <div className="fragment">
        <table className="dt" style={{ fontSize: 13 }}>
          <thead><tr><th>环节</th><th style={{ color: '#ef4444' }}>传统</th><th style={{ color: 'var(--accent)' }}>AI 增强</th></tr></thead>
          <tbody>
            <tr><td>日志排查</td><td>人工 grep，经验依赖</td><td>AI 摘要日志，直接给出异常根因</td></tr>
            <tr><td>监控告警</td><td>规则配置复杂，误报多</td><td>AI 辅助降噪，智能合并相关告警</td></tr>
            <tr><td>事故复盘</td><td>手写 RCA 报告</td><td>AI 辅助生成 Timeline 和 Action Items</td></tr>
            <tr><td>Runbook 维护</td><td>更新滞后，文档散乱</td><td>AI 根据操作记录自动更新 Runbook</td></tr>
            <tr><td>性能优化</td><td>依赖 DBA/架构师经验</td><td>AI 分析 Explain Plan，给出优化建议</td></tr>
          </tbody>
        </table>
      </div>
      <HBox title="实践示例" className="fragment" style={{ marginTop: 16 }}>
        线上告警触发 → 将错误日志粘贴给 Claude<br />
        → Claude：「这是数据库连接池耗尽问题，根因是 UserController.getList 未关闭连接…」<br />
        → <strong>排障时间从 45 分钟 → 10 分钟</strong>
      </HBox>
    </section>
  )
}
