import styles from './SectionHeader.module.css'

export default function S08Section2() {
  return (
    <section className={`${styles.slide} section2`}>
      <div className={styles.num} style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>02</div>
      <h2 className={styles.title}>范式变化</h2>
      <p className={styles.desc}>开发方式的本质改变</p>
    </section>
  )
}
