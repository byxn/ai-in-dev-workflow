import { BottomChrome, ChromeLabel, PageEyebrow, SlidePage, TopChrome } from '../components/Slide'

export default function S03Era1() {
  return (
    <SlidePage>
      <TopChrome
        left={<PageEyebrow>§ 02 · ERA 01</PageEyebrow>}
        right={<ChromeLabel>03 / 15</ChromeLabel>}
      />

      <div style={{ position: 'absolute', left: '120px', top: '200px', width: '860px' }}>
        <div className="mono" style={{ fontSize: '28px', color: 'var(--mute)', letterSpacing: '3px', marginBottom: '24px' }}>时代 1 · 2021</div>
        <div className="sg" style={{ fontSize: '88px', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-2px' }}>AI 辅助编码</div>
        <div className="mono" style={{ fontSize: '34px', color: '#4a4a55', marginTop: '28px' }}>GitHub Copilot · 2021 年 6 月</div>
      </div>

      {/* big number */}
      <div style={{ position: 'absolute', left: '120px', top: '500px', display: 'flex', alignItems: 'baseline', gap: '40px' }}>
        <div className="sg" style={{ fontSize: '380px', fontWeight: 500, lineHeight: 0.8, letterSpacing: '-14px', color: 'var(--accent)' }}>18</div>
        <div>
          <div className="sg" style={{ fontSize: '72px', fontWeight: 400, color: 'var(--fg)', letterSpacing: '-1px' }}>个月</div>
          <div style={{ fontSize: '30px', color: '#4a4a55', marginTop: '24px', fontWeight: 300 }}>比 ChatGPT 早 18 个月</div>
        </div>
      </div>

      {/* Copilot ghost-text mock */}
      <div style={{
        position: 'absolute', right: 120, top: 240, width: 680,
        background: '#14141a', borderRadius: 16,
        border: '1px solid #2a2a32',
        padding: '28px 32px',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 22,
        lineHeight: 1.75,
      }}>
        {/* window chrome */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#28c840' }} />
        </div>

        {/* typed lines */}
        {[
          { ln: '1', text: <><span style={{color:'#6a9fb5'}}>//</span><span style={{color:'#8a8475'}}> send welcome email to new user</span></> },
          { ln: '2', text: <><span style={{color:'#c792ea'}}>function </span><span style={{color:'#82aaff'}}>sendWelcomeEmail</span><span style={{color:'#f5f2ec'}}>(user) {'{'}</span></> },
          { ln: '3', text: null },
        ].map(({ ln, text }) => (
          <div key={ln} style={{ display: 'flex', gap: 20 }}>
            <span style={{ color: '#3a3a48', width: 18, textAlign: 'right', flexShrink: 0 }}>{ln}</span>
            <span>{text}</span>
          </div>
        ))}

        {/* ghost text — Copilot suggestion */}
        {[
          "  const { email, name } = user;",
          "  await mailer.send({",
          "    to: email,",
          '    subject: "Welcome!",',
          "    body: `Hi ${name}…`",
          "  });",
          "}",
        ].map((line, i) => (
          <div key={i} style={{ display: 'flex', gap: 20 }}>
            <span style={{ color: '#3a3a48', width: 18, textAlign: 'right', flexShrink: 0 }}>{i + 4}</span>
            <span style={{ color: '#4a5a6a' }}>{line}</span>
          </div>
        ))}

        {/* Copilot badge */}
        <div style={{
          marginTop: 20, paddingTop: 16,
          borderTop: '1px solid #2a2a32',
          display: 'flex', alignItems: 'center', gap: 10,
          color: '#4a5a6a', fontSize: 18,
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="7" stroke="#4a5a6a" strokeWidth="1.4" />
            <circle cx="6.5" cy="8.5" r="1.3" fill="#4a5a6a" />
            <circle cx="11.5" cy="8.5" r="1.3" fill="#4a5a6a" />
            <path d="M6.5 12 Q9 13.5 11.5 12" stroke="#4a5a6a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          </svg>
          Copilot suggestion · Tab to accept
        </div>
      </div>

      <BottomChrome
        left={<ChromeLabel>训练数据 · 5400 万 GitHub 仓库 · 159 GB 代码</ChromeLabel>}
        right={<ChromeLabel>§ 02 · Copilot</ChromeLabel>}
        showRule
      />
    </SlidePage>
  )
}
