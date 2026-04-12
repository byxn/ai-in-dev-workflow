import SlideHeader from '../components/SlideHeader'

export default function S02History() {
  return (
    <section>
      <SlideHeader tag="Part 1" title={<>AI Coding 的<span className="hi">历史与现状</span></>} />
      <div className="tl">
        <div className="tl-item fragment">
          <div className="tl-year">2015 — 2020<small>智能补全时代</small></div>
          <div className="tl-content">
            <div className="tl-h">IntelliSense · Tabnine</div>
            <div className="tl-d">基于静态分析 / 深度学习的 IDE 补全。上下文感知弱，仅做 token 级预测，无法理解语义。</div>
          </div>
        </div>
        <div className="tl-item fragment">
          <div className="tl-year">2021<small>AI Coding 元年</small></div>
          <div className="tl-content">
            <div className="tl-h">🚀 GitHub Copilot 发布</div>
            <div className="tl-d">首次实现多行、跨函数级代码生成。GitHub 内测：<strong style={{ color: 'var(--accent)' }}>46% 的代码由 Copilot 生成</strong>。开发者第一次感受到「AI 真的能写代码」。</div>
          </div>
        </div>
        <div className="tl-item fragment">
          <div className="tl-year">2023<small>LLM 全面入场</small></div>
          <div className="tl-content">
            <div className="tl-h">💥 ChatGPT · GPT-4 · CodeWhisperer</div>
            <div className="tl-d">开发者开始用对话式 AI 解决编程问题。LLM 正式进入开发者日常工具链。</div>
          </div>
        </div>
        <div className="tl-item fragment">
          <div className="tl-year">2025 ～ 今<small>Agent · Vibe Coding</small></div>
          <div className="tl-content">
            <div className="tl-h">🤖 Cursor · Claude Code · Vibe Coding</div>
            <div className="tl-d">AI 参与软件开发从辅助走向主导。<strong style={{ color: 'var(--accent)' }}>GitHub 前三月提交量是去年同期的 14 倍。</strong></div>
          </div>
        </div>
      </div>
    </section>
  )
}
