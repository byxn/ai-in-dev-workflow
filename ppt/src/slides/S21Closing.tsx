import styles from './S21Closing.module.css'

export default function S21Closing() {
  return (
    <section className={styles.slide}>
      <div className={styles.inner}>
        <p className={styles.label}>结语</p>
        <p className={`${styles.quote} fragment`}>
          AI 工具不会让开发者失业，<br />
          但<span style={{ color: 'var(--accent)' }}>不用 AI 工具的开发者</span><br />
          会被<strong>用 AI 工具的开发者</strong>取代。
        </p>
        <p className={`${styles.sub} fragment`}>
          现在最好的投资，是花两周时间<strong>真正用起来</strong><br />
          不是试用，而是用它完成一个<strong>实际任务</strong>。
        </p>
        <p className={`${styles.slogan} fragment`}>
          Start small, think big, move fast.
        </p>
      </div>
    </section>
  )
}
