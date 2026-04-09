import SlideHeader from '../components/SlideHeader'
import Card from '../components/Card'

export default function S08OpenClaw() {
  return (
    <section>
      <SlideHeader tag="工具详解 05" title={<><span className="hi">OpenClaw</span></>} />
      <div className="two-col">
        <div className="fragment">
          <p style={{ fontSize: 13, color: 'var(--muted)', fontStyle: 'italic', marginBottom: 14 }}>用一个本地平台统管所有 IM 渠道的 AI 助手，数据自主可控。</p>
          <ul className="ul">
            <li><strong>统一接入 20+ 通信渠道</strong>：WhatsApp、Telegram、Slack、Discord、iMessage…</li>
            <li><strong>本地网关架构</strong>：数据本地处理，隐私友好</li>
            <li>多模态：语音唤醒、实时 Canvas、摄像头/屏幕集成</li>
            <li>支持 macOS / iOS / Android 原生 App</li>
          </ul>
        </div>
        <div className="fragment">
          <p style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>适用场景</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 16 }}>
            <span className="badge badge-a" style={{ width: 'fit-content' }}>多平台统一使用 AI（工作 Slack + 个人 TG）</span>
            <span className="badge badge-a" style={{ width: 'fit-content' }}>对数据隐私有要求，不想数据上云</span>
            <span className="badge badge-a" style={{ width: 'fit-content' }}>构建个人自动化工作流</span>
          </div>
          <p style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>竞品</p>
          <Card
            title={<>Hermes Agent &nbsp;<a href="https://github.com/NousResearch/hermes-agent" target="_blank" rel="noreferrer" style={{ fontSize: 11 }}>github ↗</a></>}
            desc="NousResearch 出品，开源本地 AI Agent，专注隐私与本地化部署"
          />
        </div>
      </div>
    </section>
  )
}
