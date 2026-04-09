import styles from './S01Opening.module.css'

export default function S01Opening() {
  return (
    <section className={styles.slide}>
      <h1 className={styles.title}>AI 时代的编程革命</h1>

      <div className={`${styles.words} fragment`}>
        <div className={styles.row}>
          <span className={`${styles.word} ${styles.xl} ${styles.accent}`}>Harness</span>
          <span className={styles.dot}>●</span>
          <span className={`${styles.word} ${styles.md} ${styles.dim}`}>小龙虾</span>
        </div>
        <div className={styles.row}>
          <span className={`${styles.word} ${styles.sm} ${styles.muted}`}>古法编程</span>
          <span className={styles.dot}>●</span>
          <span className={`${styles.word} ${styles.sm} ${styles.muted}`}>OPC</span>
          <span className={styles.dot}>●</span>
          <span className={`${styles.word} ${styles.lg} ${styles.purple}`}>Cursor</span>
        </div>
        <div className={styles.row}>
          <span className={`${styles.word} ${styles.md} ${styles.dim}`}>Claude Code</span>
          <span className={styles.dot}>●</span>
          <span className={`${styles.word} ${styles.lg} ${styles.amber}`}>MCP</span>
        </div>
        <div className={styles.row}>
          <span className={`${styles.word} ${styles.md} ${styles.white}`}>Skill</span>
          <span className={styles.dot}>●</span>
          <span className={`${styles.word} ${styles.md} ${styles.dim}`}>RAG</span>
          <span className={styles.dot}>●</span>
          <span className={`${styles.word} ${styles.xl} ${styles.accent}`}>Agent</span>
        </div>
      </div>

      <div className={`${styles.closing} fragment`}>
        <p className={styles.closingLabel}>为什么那些大佬敢说</p>
        <p className={styles.closingQ}>「传统程序员会消失」？</p>
        <p className={styles.closingSub}>今天，我们来认真聊聊这件事。</p>
      </div>
    </section>
  )
}
