import SlideHeader from '../components/SlideHeader'
import HBox from '../components/HBox'

export default function S16RoleChange() {
  return (
    <section>
      <SlideHeader tag="Part 3" title={<>角色与心态的<span className="hi">转变</span></>} />
      <div className="fragment cmp">
        <div className="cmp-col">
          <div className="cmp-head red">传统角色</div>
          <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, color: 'var(--text)' }}>开发工程师 = 代码的生产者</div>
          <div className="cmp-row">亲手写每一行代码</div>
          <div className="cmp-row">靠 Google + StackOverflow</div>
          <div className="cmp-row">个人能力决定上限</div>
        </div>
        <div className="cmp-col">
          <div className="cmp-head grn">AI 时代</div>
          <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, color: 'var(--text)' }}>开发工程师 = AI 指挥官 + 质量守门人</div>
          <div className="cmp-row">描述意图，审查输出</div>
          <div className="cmp-row">靠 Prompt + 上下文管理</div>
          <div className="cmp-row">协调 AI + 人的能力组合</div>
        </div>
      </div>
      <div className="fragment" style={{ marginTop: 16 }}>
        <p style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600, marginBottom: 10 }}>需要培养的新能力</p>
        <div className="nlist">
          <div className="nitem"><div className="nnum">1</div><div className="ncontent"><strong>Prompt Engineering</strong><span>如何准确描述需求，让 AI 理解意图</span></div></div>
          <div className="nitem"><div className="nnum">2</div><div className="ncontent"><strong>AI 输出审查</strong><span>判断 AI 生成代码的正确性和安全性</span></div></div>
          <div className="nitem"><div className="nnum">3</div><div className="ncontent"><strong>任务拆解</strong><span>将大任务分解为 AI 可执行的小任务</span></div></div>
          <div className="nitem"><div className="nnum">4</div><div className="ncontent"><strong>上下文管理</strong><span>给 AI 提供恰当的背景信息</span></div></div>
        </div>
      </div>
      <HBox warn title="注意事项" className="fragment" style={{ marginTop: 14 }}>
        AI 会产生「幻觉」，关键逻辑必须人工审查 · 安全敏感代码（权限、支付、加密）不能完全依赖 AI · 保持对代码的理解，避免「无脑接受」
      </HBox>
    </section>
  )
}
