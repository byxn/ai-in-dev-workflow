import { forwardRef } from 'react'
import type { CSSProperties, ReactNode } from 'react'

interface SlidePageProps {
  dark?: boolean
  className?: string
  style?: CSSProperties
  children: ReactNode
}

interface ChromeProps {
  left?: ReactNode
  right?: ReactNode
  showRule?: boolean
}

interface LabelProps {
  className?: string
  style?: CSSProperties
  children: ReactNode
}

interface HarnessIconProps {
  className?: string
  style?: CSSProperties
  strokeWidth?: number
}

export const SlidePage = forwardRef<HTMLElement, SlidePageProps>(function SlidePage(
  { dark = false, className = '', style, children },
  ref,
) {
  return (
    <section ref={ref} className={`slide-page ${dark ? 'dark' : ''} ${className}`.trim()} style={style}>
      {children}
    </section>
  )
})

export function TopChrome({ left, right, showRule = true }: ChromeProps) {
  return (
    <>
      <div className="chrome-top">
        {left ?? <div />}
        {right ?? <div />}
      </div>
      {showRule && <div className="rule-top" />}
    </>
  )
}

export function BottomChrome({ left, right, showRule = false }: ChromeProps) {
  return (
    <>
      {showRule && <div className="rule-bottom" />}
      <div className="chrome-bottom">
        {left ?? <div />}
        {right ?? <div />}
      </div>
    </>
  )
}

export function ChromeLabel({ className = '', style, children }: LabelProps) {
  return (
    <div className={`chrome-label ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}

export function PageEyebrow({ className = '', style, children }: LabelProps) {
  return (
    <div className={`page-eyebrow ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}

export function HarnessIcon({ className = '', style, strokeWidth = 1.8 }: HarnessIconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style}>
      <g className="harness" strokeWidth={strokeWidth}>
        <path d="M20,30 Q50,15 80,30 L78,48 Q50,62 22,48 Z" />
        <path d="M50,62 L50,82" />
        <path d="M30,50 L28,78" />
        <path d="M70,50 L72,78" />
        <circle cx="50" cy="40" r="3" />
      </g>
    </svg>
  )
}
