import { BottomChrome, ChromeLabel, PageEyebrow, SlidePage, TopChrome } from '../components/Slide'
import type { ReactNode } from 'react'

/* ── Era icon: black rounded square with a white SVG symbol ── */
function EraIcon({ children }: { children: ReactNode }) {
  return (
    <div style={{
      width: 64,
      height: 64,
      borderRadius: 12,
      background: '#14141a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      {children}
    </div>
  )
}

/* ── Product logo: lighter rounded square ── */
function ProdIcon({ children }: { children: ReactNode }) {
  return (
    <div style={{
      width: 48,
      height: 48,
      borderRadius: 10,
      background: '#2a2a32',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      {children}
    </div>
  )
}

/* ── SVG icons ── */
const TerminalIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
    <polyline points="6,11 14,17 6,23" stroke="#f5f2ec" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="16" y1="23" x2="28" y2="23" stroke="#f5f2ec" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

const ChatIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
    <path d="M5 7 Q5 4 8 4 H26 Q29 4 29 7 V19 Q29 22 26 22 H18 L13 29 V22 H8 Q5 22 5 19 Z"
      stroke="#f5f2ec" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
    <circle cx="12" cy="13" r="1.5" fill="#f5f2ec" />
    <circle cx="17" cy="13" r="1.5" fill="#f5f2ec" />
    <circle cx="22" cy="13" r="1.5" fill="#f5f2ec" />
  </svg>
)

const IdeIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
    <rect x="4" y="4" width="26" height="26" rx="4" stroke="#f5f2ec" strokeWidth="2.2" fill="none" />
    <line x1="4" y1="11" x2="30" y2="11" stroke="#f5f2ec" strokeWidth="1.8" />
    <polyline points="10,17 15,21 10,25" stroke="#f5f2ec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="18" y1="25" x2="26" y2="25" stroke="#f5f2ec" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const AgentIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
    <rect x="7" y="11" width="20" height="16" rx="4" stroke="#f5f2ec" strokeWidth="2.2" fill="none" />
    <rect x="12" y="5" width="10" height="8" rx="3" stroke="#f5f2ec" strokeWidth="2" fill="none" />
    <line x1="17" y1="9" x2="17" y2="11" stroke="#f5f2ec" strokeWidth="2" />
    <circle cx="12.5" cy="20" r="2" fill="#f5f2ec" />
    <circle cx="21.5" cy="20" r="2" fill="#f5f2ec" />
    <line x1="7" y1="18" x2="4" y2="18" stroke="#f5f2ec" strokeWidth="2" strokeLinecap="round" />
    <line x1="27" y1="18" x2="30" y2="18" stroke="#f5f2ec" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const QuestionIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
    <path d="M12 13 C12 9 22 9 22 14 C22 17 17 18 17 22" stroke="#f5f2ec" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <circle cx="17" cy="27" r="2" fill="#f5f2ec" />
  </svg>
)

/* ── Product logo icons ── */
const CopilotLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="10" stroke="#f5f2ec" strokeWidth="1.8" fill="none" />
    <circle cx="10" cy="13" r="2" fill="#f5f2ec" />
    <circle cx="18" cy="13" r="2" fill="#f5f2ec" />
    <path d="M10 18 Q14 21 18 18" stroke="#f5f2ec" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
)

const ChatGPTLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 4 C8 4 4 8 4 14 C4 20 8 24 14 24 C20 24 24 20 24 14 C24 8 20 4 14 4 Z
             M14 4 C18 4 22 8 20 12 M14 24 C10 24 6 20 8 16
             M4 14 C4 10 8 8 12 10 M24 14 C24 18 20 20 16 18"
      stroke="#f5f2ec" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
)

const CursorLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M6 6 L22 14 L14 16 L11 22 Z" stroke="#f5f2ec" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
  </svg>
)

const ClaudeCodeLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <line x1="14" y1="4" x2="14" y2="24" stroke="#f5f2ec" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="14" x2="24" y2="14" stroke="#f5f2ec" strokeWidth="2" strokeLinecap="round" />
    <line x1="7" y1="7" x2="21" y2="21" stroke="#f5f2ec" strokeWidth="2" strokeLinecap="round" />
    <line x1="21" y1="7" x2="7" y2="21" stroke="#f5f2ec" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const OpenClawLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 5 C14 5 8 9 8 15 C8 19 11 22 14 22 C17 22 20 19 20 15 C20 9 14 5 14 5 Z"
      stroke="#f5f2ec" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
    <path d="M10 13 C10 13 7 11 6 8" stroke="#f5f2ec" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M18 13 C18 13 21 11 22 8" stroke="#f5f2ec" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
)

/* ── Data ── */
const ERAS = [
  {
    n: 1,
    name: 'AI 辅助编码',
    eraIcon: <EraIcon><TerminalIcon /></EraIcon>,
    prod: 'Copilot',
    prodIcon: <ProdIcon><CopilotLogo /></ProdIcon>,
    date: '2021.06',
  },
  {
    n: 2,
    name: '通用对话模型',
    eraIcon: <EraIcon><ChatIcon /></EraIcon>,
    prod: 'ChatGPT',
    prodIcon: <ProdIcon><ChatGPTLogo /></ProdIcon>,
    date: '2022.11',
  },
  {
    n: 3,
    name: 'AI 原生 IDE',
    eraIcon: <EraIcon><IdeIcon /></EraIcon>,
    prod: 'Cursor',
    prodIcon: <ProdIcon><CursorLogo /></ProdIcon>,
    date: '2023.03',
  },
  {
    n: 4,
    name: 'Agent',
    eraIcon: <EraIcon><AgentIcon /></EraIcon>,
    prod: 'Claude Code',
    prodIcon: <ProdIcon><ClaudeCodeLogo /></ProdIcon>,
    date: '2025.02',
  },
  {
    n: 5,
    name: '?',
    eraIcon: <EraIcon><QuestionIcon /></EraIcon>,
    prod: 'openClaw',
    prodIcon: <ProdIcon><OpenClawLogo /></ProdIcon>,
    date: '2026.02',
  },
]

export default function S02Eras() {
  return (
    <SlidePage>
      <TopChrome
        left={<PageEyebrow>§ 01 · MAP</PageEyebrow>}
        right={<ChromeLabel>02 / 15</ChromeLabel>}
      />

      {/* Title */}
      <div style={{ position: 'absolute', left: 120, top: 185, right: 120 }}>
        <div className="sg" style={{ fontSize: 80, fontWeight: 500, lineHeight: 1, letterSpacing: '-2px' }}>
          AI 工具的 5 个时代
        </div>
      </div>

      {/* Era rows */}
      <div style={{ position: 'absolute', left: 120, top: 390, right: 120 }}>
        {ERAS.map((era) => (
          <div
            key={era.n}
            style={{
              display: 'grid',
              gridTemplateColumns: '110px 72px 1fr 56px 260px 160px',
              alignItems: 'center',
              columnGap: 20,
              padding: '14px 0',
              borderTop: '1px solid var(--rule-soft)',
              ...(era.n === 5 ? { borderBottom: '1px solid var(--rule-soft)' } : {}),
            }}
          >
            {/* 时代 N */}
            <div className="mono" style={{ fontSize: 22, color: 'var(--mute)', letterSpacing: '2px' }}>
              时代 {era.n}
            </div>

            {/* Era icon */}
            {era.eraIcon}

            {/* Chinese name */}
            <div className="sg" style={{ fontSize: 42, fontWeight: 500, color: 'var(--fg)' }}>
              {era.name}
            </div>

            {/* Product logo */}
            {era.prodIcon}

            {/* Product name */}
            <div className="mono" style={{ fontSize: 26, color: '#4a4a55' }}>
              {era.prod}
            </div>

            {/* Date */}
            <div className="mono" style={{ fontSize: 24, color: 'var(--mute)', textAlign: 'right' }}>
              {era.date}
            </div>
          </div>
        ))}
      </div>

      <BottomChrome
        left={<ChromeLabel>§ 01 · AI 工具的 5 个时代</ChromeLabel>}
        right={<ChromeLabel>2021 → 2026</ChromeLabel>}
      />
    </SlidePage>
  )
}
