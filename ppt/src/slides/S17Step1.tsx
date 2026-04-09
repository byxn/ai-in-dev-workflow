import SlideHeader from '../components/SlideHeader'
import HBox from '../components/HBox'

export default function S17Step1() {
  return (
    <section>
      <SlideHeader tag="Part 4" title={<>如何开始：<span className="hi">第一步</span> <span className="dim">本周就能开始</span></>} />
      <div className="fragment card">
        <div className="card-title" style={{ fontSize: 17, marginBottom: 14 }}>推荐：GitHub Copilot 免费版 / Cursor 免费额度</div>
        <div className="nlist">
          <div className="nitem"><div className="nnum">1</div><div className="ncontent"><strong>安装 GitHub Copilot 插件</strong><span>VS Code / JetBrains，GitHub 账号登录</span></div></div>
          <div className="nitem"><div className="nnum">2</div><div className="ncontent"><strong>免费版每月 2000 次补全</strong><span>观察 AI 建议，Tab 接受，Esc 拒绝</span></div></div>
          <div className="nitem"><div className="nnum">3</div><div className="ncontent"><strong>遇到问题用 Copilot Chat</strong><span>在 IDE 内直接对话，不用切换到浏览器</span></div></div>
        </div>
      </div>
      <HBox title="目标感受" className="fragment" style={{ marginTop: 16 }}>
        体验 AI 补全的速度和准确性，建立基础认知。这是最低门槛的开始，不需要任何额外配置。
      </HBox>
    </section>
  )
}
