interface Props {
  title: React.ReactNode
  desc: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Card({ title, desc, className = '', style }: Props) {
  return (
    <div className={`card ${className}`} style={style}>
      <div className="card-title">{title}</div>
      <div className="card-desc">{desc}</div>
    </div>
  )
}
