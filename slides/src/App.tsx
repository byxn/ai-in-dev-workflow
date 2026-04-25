import { useEffect, useRef } from 'react'
// @ts-ignore
import Reveal from 'reveal.js'

import 'reveal.js/dist/reveal.css'
import './styles/global.css'
import './styles/components.css'

import S01Opening        from './slides/S01Opening'
import S02Eras           from './slides/S02Eras'
import S03Era1           from './slides/S03Era1'
import S04Era2           from './slides/S04Era2'
import S05Era3           from './slides/S05Era3'
import S06Era4           from './slides/S06Era4'
import S07Era4Parallel   from './slides/S07Era4Parallel'
import S08Era5Data       from './slides/S08Era5Data'
import S09Era5Metaphor   from './slides/S09Era5Metaphor'
import S10Era5Proof      from './slides/S10Era5Proof'
import S11Era5Watershed  from './slides/S11Era5Watershed'
import S12Quote1         from './slides/S12Quote1'
import S13Part2          from './slides/S13Part2'
import S14NotebookLM     from './slides/S14NotebookLM'
import S15ClaudeDesign   from './slides/S15ClaudeDesign'
import S16StitchInsight  from './slides/S16StitchInsight'
import S17Also           from './slides/S17Also'
import S18Closing        from './slides/S18Closing'

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
      width: 1920,
      height: 1080,
      margin: 0.04,
    })
    revealRef.current.initialize()
  }, [])

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">
        <S01Opening />
        <S02Eras />
        <S03Era1 />
        <S04Era2 />
        <S05Era3 />
        <S06Era4 />
        <S07Era4Parallel />
        <S08Era5Data />
        <S09Era5Metaphor />
        <S10Era5Proof />
        <S11Era5Watershed />
        <S12Quote1 />
        <S13Part2 />
        <S14NotebookLM />
        <S15ClaudeDesign />
        <S16StitchInsight />
        <S17Also />
        <S18Closing />
      </div>
    </div>
  )
}
