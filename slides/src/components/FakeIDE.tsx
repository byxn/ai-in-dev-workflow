import styles from './FakeIDE.module.css'

export default function FakeIDE() {
  return (
    <div className={styles.ide}>
      <div className={styles.bar}>
        <span className={styles.dot} style={{ background: '#ff5f57' }} />
        <span className={styles.dot} style={{ background: '#febc2e' }} />
        <span className={styles.dot} style={{ background: '#28c840' }} />
        <span className={styles.filename}>userService.ts</span>
      </div>
      <div className={styles.body}>
        <div className={styles.line}>
          <span className={styles.ln}>1</span>
          <span className={styles.kw}>async function</span>{' '}
          <span className={styles.fn}>getUserById</span>
          {'('}
          <span className={styles.va}>id</span>:{' '}
          <span className={styles.ty}>string</span>
          {') {'}
        </div>
        <div className={styles.line}>
          <span className={styles.ln}>2</span>
          {'  '}
          <span className={styles.cm}>{'// fetch user from database'}</span>
        </div>
        <div className={`${styles.line} ${styles.active}`}>
          <span className={styles.ln}>3</span>
          {'  '}
          <span className={styles.kw}>const</span>{' '}
          <span className={styles.va}>user</span> ={' '}
          <span className={styles.kw}>await</span>{' '}
          <span className={styles.fn}>db</span>.
          <span className={styles.fn}>query</span>
          {'('}
          <span className={styles.st}>{'\`SELECT * FROM'}</span>
          <span className={styles.ghost}>{' users WHERE id = $1\`, [id]);'}</span>
        </div>
        <div className={styles.line}>
          <span className={styles.ln}>4</span>
          <span className={styles.ghost}>{'  if (!user) throw new Error(`User ${id} not found`);'}</span>
        </div>
        <div className={styles.line}>
          <span className={styles.ln}>5</span>
          <span className={styles.ghost}>{'  return user;'}</span>
        </div>
        <div className={styles.line}>
          <span className={styles.ln}>6</span>
          <span className={styles.ghost}>{'}'}</span>
        </div>
        <div className={styles.line}><span className={styles.ln}>7</span></div>
        <div className={styles.copilot}>
          <span>✦</span> Copilot suggestion &nbsp;
          <span className={styles.key}>Tab</span> to accept &nbsp;
          <span className={styles.key}>Esc</span> to dismiss
        </div>
      </div>
    </div>
  )
}
