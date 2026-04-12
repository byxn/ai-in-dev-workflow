import SlideHeader from '../components/SlideHeader'
import Card from '../components/Card'

export default function S06Cursor() {
  return (
    <section>
      <SlideHeader tag="工具详解 03" title={<><span className="hi">Cursor</span></>} />
      <div className="two-col">
        <div className="fragment">
          <p style={{ fontSize: 13, color: 'var(--muted)', fontStyle: 'italic', marginBottom: 14 }}>目前体验最好的 AI IDE，把「跟 AI 结对编程」做到极致。</p>
          <ul className="ul">
            <li><strong>多文件感知</strong>：理解整个项目结构，不只是当前文件</li>
            <li><strong>Composer / Agent 模式</strong>：自然语言描述，自动修改多文件</li>
            <li><strong>@ 引用系统</strong>：精确引用文件、函数、文档、网页</li>
            <li>内置 Claude Sonnet / GPT-4o 等顶级模型</li>
          </ul>
        </div>
        <div className="fragment">
          <p style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>竞品对比</p>
          <Card title="Windsurf（Codeium）" desc="价格更低，Cascade Agent 能力强" style={{ marginBottom: 8 }} />
          <Card
            title={<>Trae &nbsp;<a href="https://www.trae.ai/" target="_blank" rel="noreferrer" style={{ fontSize: 11 }}>trae.ai ↗</a></>}
            desc="字节跳动出品，免费使用 Claude / GPT-4o，国内用户友好"
            style={{ marginBottom: 8 }}
          />
          <Card
            title={<>Qoder &nbsp;<a href="https://qoder.com/en" target="_blank" rel="noreferrer" style={{ fontSize: 11 }}>qoder.com ↗</a></>}
            desc="新兴 AI IDE，专注于代码理解与多模型协作"
            style={{ marginBottom: 8 }}
          />
          <Card title="Zed" desc="性能极快，AI 功能在快速追赶" style={{ marginBottom: 14 }} />
          <p style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>开源替代</p>
          <Card title="VS Code + Continue.dev + Cline" desc="三件套组合，功能接近 Cursor，完全开源" />
        </div>
      </div>
    </section>
  )
}
