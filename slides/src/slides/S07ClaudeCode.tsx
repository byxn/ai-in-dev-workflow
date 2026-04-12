import SlideHeader from '../components/SlideHeader'
import HBox from '../components/HBox'
import Card from '../components/Card'

export default function S07ClaudeCode() {
  return (
    <section>
      <SlideHeader tag="工具详解 04" title={<><span className="hi">Claude Code</span></>} />
      <div className="two-col">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="fragment">
            <p style={{ fontSize: 13, color: 'var(--muted)', fontStyle: 'italic', marginBottom: 14 }}>最接近「AI 同事」体验的工具，适合处理真实工程任务。</p>
            <ul className="ul">
              <li>深度理解整个代码仓库，<strong>自主制定计划并执行</strong></li>
              <li>原生 CLI：直接读写文件、运行命令、调试错误</li>
              <li>支持复杂多步任务：重构、修 Bug、加功能、写测试</li>
              <li>可接入 MCP（Model Context Protocol）扩展工具能力</li>
            </ul>
          </div>
          <HBox title="今天这次分享" className="fragment">
            就是用 Claude Code 生成的 ✨
          </HBox>
        </div>
        <div className="fragment">
          <p style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>竞品</p>
          <Card title="Codex（OpenAI）" desc="OpenAI 直接对标 Claude Code 的终端 Agent，深度集成 GPT-4o" style={{ marginBottom: 8 }} />
          <Card title="Aider" desc="老牌开源终端 AI 编程工具，支持多种 LLM" style={{ marginBottom: 8 }} />
          <Card title="Devin（Cognition）" desc="云端全自主 Agent，价格高，适合长时间任务" style={{ marginBottom: 14 }} />
          <p style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>开源替代</p>
          <Card
            title={<>opencode &nbsp;<a href="https://github.com/anomalyco/opencode" target="_blank" rel="noreferrer" style={{ fontSize: 11 }}>github ↗</a></>}
            desc="开源终端 AI Agent，轻量、可自托管，支持多种 LLM"
            style={{ marginBottom: 8 }}
          />
          <Card title="OpenHands（前 OpenDevin）" desc="功能最完整的开源 AI Agent 平台" />
        </div>
      </div>
    </section>
  )
}
