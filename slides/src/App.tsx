import { useEffect, useRef } from 'react'
// @ts-ignore
import Reveal from 'reveal.js'

import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import './styles/global.css'
import './styles/components.css'

import S01Opening   from './slides/S01Opening'
import S02Agenda    from './slides/S02Agenda'
import S03Section1  from './slides/S03Section1'
import S04Phases    from './slides/S04Phases'
import S05Tiers     from './slides/S05Tiers'
import S06Skills    from './slides/S06Skills'
import S07Tools     from './slides/S07Tools'
import S08Section2  from './slides/S08Section2'
import S09Paradigm  from './slides/S09Paradigm'
import S10Mindset   from './slides/S10Mindset'
import S11Section3  from './slides/S11Section3'
import S12Tech      from './slides/S12Tech'
import S13Section4  from './slides/S13Section4'
import S14ActionPlan from './slides/S14ActionPlan'
import S21Closing   from './slides/S21Closing'

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
        <S02Agenda />
        <S03Section1 />
        <S04Phases />
        <S05Tiers />
        <S06Skills />
        <S07Tools />
        <S08Section2 />
        <S09Paradigm />
        <S10Mindset />
        <S11Section3 />
        <S12Tech />
        <S13Section4 />
        <S14ActionPlan />
        <S21Closing />
      </div>
    </div>
  )
}
