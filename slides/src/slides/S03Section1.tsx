import styles from './SectionHeader.module.css'

export default function S03Section1() {
  return (
    <section className={styles.slide}>
      <div className={styles.num}>01</div>
      <h2 className={styles.title}>现状速览</h2>
      <p className={styles.desc}>AI 发展阶段 · 程序员分化 · 工具全景</p>
    </section>
  )
}
