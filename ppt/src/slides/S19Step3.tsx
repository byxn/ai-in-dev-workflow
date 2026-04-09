import SlideHeader from '../components/SlideHeader'
import HBox from '../components/HBox'

export default function S19Step3() {
  return (
    <section>
      <SlideHeader tag="Part 4" title={<>如何开始：<span className="hi">第三步</span> <span className="dim">未来 1-3 个月</span></>} />
      <div className="fragment nlist">
        <div className="nitem"><div className="nnum">1</div><div className="ncontent"><strong>CI/CD 接入 AI Code Review</strong><span>GitHub Actions + Claude API，自动化代码审查流程</span></div></div>
        <div className="nitem"><div className="nnum">2</div><div className="ncontent"><strong>建立团队 Prompt 知识库</strong><span>好的 Prompt 模板共享，沉淀团队经验</span></div></div>
        <div className="nitem"><div className="nnum">3</div><div className="ncontent"><strong>AI 辅助需求分析</strong><span>用 NotebookLM 建立产品文档知识库，提升对齐效率</span></div></div>
        <div className="nitem"><div className="nnum">4</div><div className="ncontent"><strong>监控阶段：告警日志 AI 摘要</strong><span>将告警日志接入 AI 摘要通知，减少排障时间</span></div></div>
      </div>
      <HBox title="目标感受" className="fragment" style={{ marginTop: 16 }}>
        AI 从个人工具变成团队基础设施。整个开发流程的效率系统性提升。
      </HBox>
    </section>
  )
}
