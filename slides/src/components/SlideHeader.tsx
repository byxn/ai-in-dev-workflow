interface Props {
  tag?: string
  title: React.ReactNode
}

export default function SlideHeader({ tag, title }: Props) {
  return (
    <div>
      {tag && <div className="slide-tag">{tag}</div>}
      <div className="slide-title">{title}</div>
    </div>
  )
}
