import styles from './S21Closing.module.css'

export default function S21Closing() {
  return (
    <section className={styles.slide}>
      <div className={styles.inner}>
        <p className={styles.label}>结语</p>
        <p className={`${styles.quote} fragment`}>
          未来不是「会不会写代码」，<br />
          而是「<span style={{ color: 'var(--accent)' }}>能不能让 AI 写出对的代码</span>」
        </p>
        <p className={`${styles.sub} fragment`}>
          现在开始行动，不是下一个季度。
        </p>
        <p className={`${styles.slogan} fragment`}>
          立即安装 Claude Code，今天就开始！
        </p>
        <p className={`${styles.footer} fragment`}>感谢大家 · Q&amp;A</p>
      </div>
    </section>
  )
}
