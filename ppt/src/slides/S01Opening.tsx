import styles from './S01Opening.module.css'

const steps = [
  { label: '需求分析', icon: '📋', highlight: false, pains: ['需求不清晰', '频繁变更', '沟通成本高', '对齐困难'] },
  { label: '技术设计', icon: '🏗️', highlight: false, pains: null },
  { label: '编码实现', icon: '💻', highlight: true,  pains: ['需求多', '时间少', 'Bug 多', '重复劳动'] },
  { label: '测试验收', icon: '🧪', highlight: false, pains: null },
  { label: '上线运维', icon: '🚀', highlight: false, pains: null },
]

export default function S01Opening() {
  return (
    <section className={styles.slide}>
      <h1 className={styles.title}>AI 时代的编程革命</h1>
      <div className={styles.subtitle}></div>

      {/* pipeline + label row */}
      <div className={`fragment ${styles.pipeline}`} data-fragment-index="0">
        {steps.map((s, i) => (
          <div key={s.label} className={styles.pipelineCol}>
            <div className={s.highlight ? `${styles.stepBox} ${styles.stepBoxHi}` : styles.stepBox}>
              <span className={styles.stepIcon}>{s.icon}</span>
              <span className={styles.stepLabel}>{s.label}</span>
            </div>
            {i < steps.length - 1 && <div className={styles.arrow}>→</div>}
          </div>
        ))}
      </div>

      {/* 古法编程 label — pinned above coding column */}
      <div className={`fragment ${styles.labelRow}`} data-fragment-index="1">
        {steps.map((s) => (
          <div key={s.label} className={styles.labelSlot}>
            {s.highlight && (
              <>
                <div className={styles.labelText}>古法编程</div>
                <div className={styles.labelArrow}>↓</div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* pain row */}
      <div className={`fragment ${styles.painRow}`} data-fragment-index="1">
        {steps.map((s) => (
          <div key={s.label} className={styles.painSlot}>
            <div className={styles.painConnector} />
            {s.pains ? (
              <div className={styles.painBoxFilled}>
                {s.pains.map((p) => (
                  <div key={p} className={styles.painTag}>{p}</div>
                ))}
              </div>
            ) : (
              <div className={styles.painBox}>
                <span className={styles.painQ}>?</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={`fragment ${styles.hook}`} data-fragment-index="2">
        今天，我们来聊聊怎么<strong>告别这些痛点</strong>。
      </div>
    </section>
  )
}
