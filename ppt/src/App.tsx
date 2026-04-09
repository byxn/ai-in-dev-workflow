import { useEffect, useRef } from 'react'
// @ts-ignore
import Reveal from 'reveal.js'

import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import './styles/global.css'
import './styles/components.css'

import S01Opening      from './slides/S01Opening'
import S02History      from './slides/S02History'
import S03ToolMatrix   from './slides/S03ToolMatrix'
import S04Copilot      from './slides/S04Copilot'
import S05AITools      from './slides/S05AITools'
import S05NotebookLM   from './slides/S05NotebookLM'
import S06Cursor       from './slides/S06Cursor'
import S07ClaudeCode   from './slides/S07ClaudeCode'
import S08OpenClaw     from './slides/S08OpenClaw'
import S09PainPoints   from './slides/S09PainPoints'
import S10Requirements from './slides/S10Requirements'
import S11Design       from './slides/S11Design'
import S12Coding       from './slides/S12Coding'
import S13Testing      from './slides/S13Testing'
import S14Ops          from './slides/S14Ops'
import S15FlowOverview from './slides/S15FlowOverview'
import S16RoleChange   from './slides/S16RoleChange'
import S21Closing      from './slides/S21Closing'

export default function App() {
  const deckRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const revealRef = useRef<any>(null)

  useEffect(() => {
    if (revealRef.current) return
    revealRef.current = new Reveal(deckRef.current!, {
      hash: true,
      slideNumber: 'c/t',
      transition: 'fade',
      transitionSpeed: 'fast',
      controlsTutorial: false,
      fragmentInURL: false,
      center: false,
      width: 1280,
      height: 720,
      margin: 0.04,
    })
    revealRef.current.initialize()
  }, [])

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">
        <S01Opening />
        <S02History />
        <S03ToolMatrix />
        <S04Copilot />
        <S05AITools />
        <S05NotebookLM />
        <S06Cursor />
        <S07ClaudeCode />
        <S08OpenClaw />
        <S09PainPoints />
        <S10Requirements />
        <S11Design />
        <S12Coding />
        <S13Testing />
        <S14Ops />
        <S15FlowOverview />
        <S16RoleChange />
<S21Closing />
      </div>
    </div>
  )
}
