import styles from './SectionHeader.module.css'

export default function S11Section3() {
  return (
    <section className={styles.slide}>
      <div className={styles.num} style={{ background: 'linear-gradient(135deg, rgba(0,184,255,0.15) 0%, rgba(0,184,255,0.05) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>03</div>
      <h2 className={styles.title}>最前沿技术</h2>
      <p className={styles.desc}>支撑范式变化的底层能力</p>
    </section>
  )
}
