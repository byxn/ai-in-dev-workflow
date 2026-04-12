import SlideHeader from '../components/SlideHeader'
import HBox from '../components/HBox'

export default function S10Requirements() {
  return (
    <section>
      <SlideHeader tag="AI 增强流程" title={<><span className="dim">阶段一 /</span> <span className="hi">需求分析</span></>} />
      <div className="fragment">
        <table className="dt" style={{ fontSize: 14 }}>
          <thead><tr><th>环节</th><th style={{ color: '#ef4444' }}>传统模式</th><th style={{ color: 'var(--accent)' }}>AI 增强模式</th></tr></thead>
          <tbody>
            <tr><td>PRD 撰写</td><td>产品经理手写，多次修改</td><td>AI 辅助起草，快速迭代</td></tr>
            <tr><td>需求拆解</td><td>开发估时，容易遗漏</td><td>AI 自动拆分用户故事和任务</td></tr>
            <tr><td>竞品调研</td><td>人工阅读文档，耗时</td><td>NotebookLM 上传竞品文档，AI 提炼差异</td></tr>
            <tr><td>对齐沟通</td><td>多轮会议，反复确认</td><td>AI 生成可视化流程图辅助对齐</td></tr>
          </tbody>
        </table>
      </div>
      <HBox title="实践示例" className="fragment" style={{ marginTop: 16 }}>
        产品经理将竞品 APP 帮助文档上传到 NotebookLM → 问：「核心差异化功能是什么？」<br />
        → AI 生成结构化对比报告，<strong>10 分钟完成原本需要半天的调研</strong>
      </HBox>
    </section>
  )
}
