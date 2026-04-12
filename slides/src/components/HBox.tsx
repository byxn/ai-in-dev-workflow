interface Props {
  title: string
  children: React.ReactNode
  warn?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function HBox({ title, children, warn, className = '', style }: Props) {
  return (
    <div className={`hbox ${warn ? 'warn' : ''} ${className}`} style={style}>
      <div className="hbox-title">{title}</div>
      <div className="hbox-body">{children}</div>
    </div>
  )
}
