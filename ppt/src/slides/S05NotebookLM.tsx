import SlideHeader from '../components/SlideHeader'
import HBox from '../components/HBox'
import Card from '../components/Card'

export default function S05NotebookLM() {
  return (
    <section>
      <SlideHeader tag="工具详解 02" title={<><span className="hi">NotebookLM</span></>} />
      <div className="two-col">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="fragment">
            <p style={{ fontSize: 13, color: 'var(--muted)', fontStyle: 'italic', marginBottom: 14 }}>消化大量文档的神器，特别适合技术调研和知识整理。</p>
            <ul className="ul">
              <li>上传 PDF、文档、链接作为「知识源」</li>
              <li><strong>Audio Overview</strong>：一键生成双人播客（效果惊艳）</li>
              <li>引用精准，每个回答标注来源，减少幻觉</li>
              <li>支持生成学习指南、FAQ、思维导图</li>
            </ul>
          </div>
          <HBox title="实践示例" className="fragment">
            产品经理将竞品 APP 帮助文档上传到 NotebookLM<br />
            → 问：「核心差异化功能是什么？」<br />
            → <strong>10 分钟完成原本需要半天的调研</strong>
          </HBox>
        </div>
        <div className="fragment">
          <p style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>适用场景</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 16 }}>
            <span className="badge badge-p" style={{ width: 'fit-content' }}>消化竞品文档、技术规范、论文</span>
            <span className="badge badge-p" style={{ width: 'fit-content' }}>将内部文档转为可问答知识库</span>
            <span className="badge badge-p" style={{ width: 'fit-content' }}>生成培训材料和技术分享内容</span>
          </div>
          <p style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>开源替代</p>
          <Card title="AnythingLLM · Open Notebook" desc="本地知识库，支持多种 LLM，数据不出本地，可自托管" />
        </div>
      </div>
    </section>
  )
}
