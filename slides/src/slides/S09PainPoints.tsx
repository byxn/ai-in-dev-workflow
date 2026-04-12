import SlideHeader from '../components/SlideHeader'

const pains = [
  {
    icon: '💬',
    label: '沟通成本高',
    color: 'var(--amber)',
    colorBg: 'rgba(245,158,11,0.06)',
    colorBorder: 'rgba(245,158,11,0.2)',
    lines: [
      { role: '产品', text: '就是那种「弹出来」的效果' },
      { role: '开发', text: '好，Modal 完成了' },
      { role: '产品', text: '不对，我是说 Drawer 从右边滑进来' },
      { role: '开发', text: '那你之前说的是……' },
      { role: '产品', text: '下次评审再说吧（下周五）' },
    ],
  },
  {
    icon: '⌨️',
    label: '重复劳动多',
    color: 'var(--purple)',
    colorBg: 'rgba(139,92,246,0.06)',
    colorBorder: 'rgba(139,92,246,0.2)',
    code: `// user.service.ts  —  第 3 次手写同款 CRUD
async findAll() { return this.repo.find() }
async findOne(id) { return this.repo.findOne(id) }
async create(dto) { return this.repo.save(dto) }
async update(id,dto){ return this.repo.update(id,dto) }
async remove(id)  { return this.repo.delete(id) }
// order.service.ts / product.service.ts … 同上 ↑`,
  },
  {
    icon: '🐛',
    label: '测试覆盖不全',
    color: '#ef4444',
    colorBg: 'rgba(239,68,68,0.06)',
    colorBorder: 'rgba(239,68,68,0.2)',
    code: `✓ should return user list        3ms
✓ should create user             2ms
✗ should handle empty name      ← 没写
✗ should handle duplicate email ← 没写
✗ should handle db timeout      ← 没想到

Coverage: 41% — 上线了`,
  },
  {
    icon: '🔥',
    label: '排障耗时长',
    color: '#f97316',
    colorBg: 'rgba(249,115,22,0.06)',
    colorBorder: 'rgba(249,115,22,0.2)',
    code: `$ grep "ERROR" app.log | tail -100
$ grep "userId=4821" app.log
$ grep -A5 "NullPointer" app.log
$ grep "2024-01-15 14:3" app.log | grep "order"
... 还是找不到根因
# 45 分钟后，叫来老王`,
  },
]

export default function S09PainPoints() {
  return (
    <section>
      <SlideHeader tag="Part 3" title={<>传统开发流程的<span className="hi">痛点</span></>} />
      <div className="fragment">
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 6 }}>
          {[
            { role: '产品', action: '提需求', pain: '反复对齐', color: 'var(--amber)' },
            { role: '开发', action: '写代码', pain: '重复劳动', color: 'var(--purple)' },
            { role: '测试', action: '验收', pain: '覆盖不全', color: '#ef4444' },
            { role: '运维', action: '上线', pain: '排障困难', color: '#f97316' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                {/* role box */}
                <div style={{
                  padding: '8px 0', width: '100%', textAlign: 'center',
                  background: 'var(--panel)', border: `1px solid ${s.color}`,
                  borderRadius: 8, fontSize: 15, fontWeight: 700, color: s.color,
                }}>{s.role}</div>
                {/* action label */}
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>{s.action}</div>
                {/* pain badge */}
                <div style={{
                  fontSize: 11, fontWeight: 600, color: s.color,
                  background: `color-mix(in srgb, ${s.color} 10%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${s.color} 25%, transparent)`,
                  borderRadius: 4, padding: '2px 8px',
                }}>⚠ {s.pain}</div>
              </div>
              {/* arrow */}
              {i < 3 && (
                <div style={{ color: 'var(--muted)', fontSize: 20, flexShrink: 0, padding: '0 4px', marginBottom: 30 }}>→</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* divider */}
      <div className="fragment" style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0 16px' }}>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', letterSpacing: 2, textTransform: 'uppercase' }}>各阶段展开</span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {pains.map((p) => (
          <div key={p.label} className="fragment" style={{
            background: p.colorBg,
            border: `1px solid ${p.colorBorder}`,
            borderRadius: 10,
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: `1px solid ${p.colorBorder}`, paddingBottom: 8 }}>
              <span style={{ fontSize: 16 }}>{p.icon}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: p.color }}>{p.label}</span>
            </div>

            {p.lines ? (
              /* chat thread */
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {p.lines.map((l, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, color: i % 2 === 0 ? 'var(--accent)' : 'var(--purple)',
                      flexShrink: 0, width: 28, textAlign: 'right',
                    }}>{l.role}</span>
                    <span style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.55 }}>{l.text}</span>
                  </div>
                ))}
              </div>
            ) : (
              /* code block */
              <pre style={{
                fontFamily: 'var(--font-mono)', fontSize: 11.5, lineHeight: 1.7,
                color: '#94a3b8', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all',
              }}>{p.code}</pre>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
