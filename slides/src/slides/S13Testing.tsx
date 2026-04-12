import SlideHeader from '../components/SlideHeader'
import HBox from '../components/HBox'

export default function S13Testing() {
  return (
    <section>
      <SlideHeader tag="AI 增强流程" title={<><span className="dim">阶段四 /</span> <span className="hi">测试</span></>} />
      <div className="fragment">
        <table className="dt" style={{ fontSize: 14 }}>
          <thead><tr><th>环节</th><th style={{ color: '#ef4444' }}>传统</th><th style={{ color: 'var(--accent)' }}>AI 增强</th></tr></thead>
          <tbody>
            <tr><td>单元测试</td><td>手写，覆盖率难保证</td><td>AI 生成，自动覆盖边界情况</td></tr>
            <tr><td>用例设计</td><td>依赖测试经验</td><td>AI 分析需求，生成完整用例矩阵</td></tr>
            <tr><td>E2E 脚本</td><td>录制+手动维护，成本高</td><td>AI 生成 Playwright/Cypress 脚本</td></tr>
            <tr><td>Bug 报告分析</td><td>人工分类优先级</td><td>AI 自动归类、关联相似问题</td></tr>
          </tbody>
        </table>
      </div>
      <HBox title="AI 生成用例示例" className="fragment" style={{ marginTop: 16 }}>
        测试人员将功能描述发给 AI → AI 生成：<br />
        正常流程用例 ×5 · 边界条件用例 ×8 · 异常场景 ×6 · 安全相关 ×3<br />
        → <strong>测试设计时间减少 50%，覆盖率显著提升</strong>
      </HBox>
    </section>
  )
}
