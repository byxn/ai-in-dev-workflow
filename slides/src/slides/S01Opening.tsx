import styles from './S01Opening.module.css'

const bullets = [
  '写代码正在从「生产」变成「验证」',
  '程序员正在从「执行者」变成「Agent 管理者」',
  '未来差距不是语言 / 框架，而是驾驭 AI 的能力',
]

export default function S01Opening() {
  return (
    <section className={styles.slide}>
      <div className={styles.inner}>
        <div className={`fragment ${styles.eyebrow}`} data-fragment-index="0">技术部门全员分享 · 2025</div>
        <h1 className={styles.title}>
          AI <span className={styles.titleAccent}>CODING</span>
        </h1>
        <p className={styles.subtitle}>当写代码不再稀缺，程序员还剩什么？</p>

        <div className={styles.bullets}>
          {bullets.map((b, i) => (
            <div key={i} className={`fragment ${styles.bullet}`} data-fragment-index={i + 1}>
              <span className={styles.bulletDot} />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
