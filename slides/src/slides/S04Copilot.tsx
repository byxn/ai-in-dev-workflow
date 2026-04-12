import SlideHeader from '../components/SlideHeader'
import HBox from '../components/HBox'
import FakeIDE from '../components/FakeIDE'

export default function S04Copilot() {
  return (
    <section>
      <SlideHeader tag="工具详解 01" title={<><span className="hi">GitHub Copilot</span></>} />
      <div className="two-col" style={{ alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div className="fragment">
            <p style={{ fontSize: 13, color: 'var(--muted)', fontStyle: 'italic', marginBottom: 14 }}>行业标杆，把 AI 补全这件事做到了极致。</p>
            <ul className="ul">
              <li>深度集成 VS Code、JetBrains、Neovim</li>
              <li>行内补全 / 整个函数生成 / 注释→代码</li>
              <li>Copilot Chat：IDE 内对话，解释代码、生成测试</li>
              <li>Copilot Workspace：从 Issue 自动生成实现方案</li>
            </ul>
          </div>
          <HBox warn title="竞品去哪了？" className="fragment">
            Tabnine、Kite、AWS CodeWhisperer 等五年前的竞品已基本退出历史舞台。AI 编程赛道马太效应极强，<strong>头部工具吃掉了几乎全部市场</strong>。
          </HBox>
        </div>
        <div className="fragment">
          <FakeIDE />
        </div>
      </div>
    </section>
  )
}
