import SlideHeader from '../components/SlideHeader'
import HBox from '../components/HBox'

export default function S18Step2() {
  return (
    <section>
      <SlideHeader tag="Part 4" title={<>如何开始：<span className="hi">第二步</span> <span className="dim">下个月</span></>} />
      <div className="fragment card">
        <div className="card-title" style={{ fontSize: 17, marginBottom: 14 }}>推荐：Cursor + Claude Code</div>
        <div className="nlist">
          <div className="nitem"><div className="nnum">1</div><div className="ncontent"><strong>下载 Cursor</strong><span>将当前项目迁移过去，界面与 VS Code 相似，迁移成本低</span></div></div>
          <div className="nitem"><div className="nnum">2</div><div className="ncontent"><strong>用 @文件名 引用上下文</strong><span>用自然语言描述修改，Composer 模式自动多文件编辑</span></div></div>
          <div className="nitem"><div className="nnum">3</div><div className="ncontent"><strong>在终端安装 Claude Code</strong><span>处理一个具体任务：「帮我给 [某个模块] 补全单元测试」</span></div></div>
        </div>
      </div>
      <HBox title="目标感受" className="fragment" style={{ marginTop: 16 }}>
        完成一个实际功能，评估 AI 的能力边界。感受从「辅助」到「协作」的工作方式变化。
      </HBox>
    </section>
  )
}
