import SlideHeader from '../components/SlideHeader'

export default function S15FlowOverview() {
  return (
    <section>
      <SlideHeader tag="Part 3" title={<>全流程<span className="hi">改进总览</span></>} />
      <div className="fragment flow-cmp">
        <div>
          <div className="flow-head red">传统流程</div>
          <div className="flow-col">
            <div className="flow-item">📋 产品提需求</div>
            <div className="flow-item">🏗️ 架构设计</div>
            <div className="flow-item">💻 开发实现</div>
            <div className="flow-item">🧪 测试验收</div>
            <div className="flow-item">🚀 运维上线</div>
          </div>
        </div>
        <div className="flow-mid">
          <span>→</span><span>→</span><span>→</span><span>→</span><span>→</span>
        </div>
        <div>
          <div className="flow-head grn">AI 增强流程</div>
          <div className="flow-col">
            <div className="flow-item hi">🤖 AI 辅助 PRD + 竞品分析</div>
            <div className="flow-item hi">🤖 AI 生成 ERD / API / 骨架</div>
            <div className="flow-item hi">🤖 Cursor + Copilot + Claude Code</div>
            <div className="flow-item hi">🤖 AI 生成用例 + 自动化脚本</div>
            <div className="flow-item hi">🤖 AI 日志分析 + 智能告警</div>
          </div>
        </div>
      </div>
    </section>
  )
}
