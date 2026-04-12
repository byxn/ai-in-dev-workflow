import styles from './SectionHeader.module.css'

export default function S13Section4() {
  return (
    <section className={styles.slide}>
      <div className={styles.num} style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.05) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>04</div>
      <h2 className={styles.title}>对我们意味着什么</h2>
      <p className={styles.desc}>团队行动计划</p>
    </section>
  )
}
