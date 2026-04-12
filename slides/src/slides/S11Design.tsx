import SlideHeader from '../components/SlideHeader'
import HBox from '../components/HBox'

export default function S11Design() {
  return (
    <section>
      <SlideHeader tag="AI 增强流程" title={<><span className="dim">阶段二 /</span> <span className="hi">设计</span></>} />
      <div className="fragment">
        <table className="dt" style={{ fontSize: 14 }}>
          <thead><tr><th>环节</th><th style={{ color: '#ef4444' }}>传统模式</th><th style={{ color: 'var(--accent)' }}>AI 增强模式</th></tr></thead>
          <tbody>
            <tr><td>数据库设计</td><td>手写 DDL，反复讨论</td><td>AI 根据需求描述生成 ERD 和 DDL</td></tr>
            <tr><td>接口设计</td><td>手写 API 文档</td><td>AI 生成 OpenAPI Spec，自动保持一致性</td></tr>
            <tr><td>架构方案</td><td>经验驱动，文档滞后</td><td>AI 辅助评估多种方案的优劣</td></tr>
            <tr><td>代码骨架</td><td>从零搭建，配置繁琐</td><td>AI 生成项目骨架和基础配置</td></tr>
          </tbody>
        </table>
      </div>
      <HBox title="实践示例" className="fragment" style={{ marginTop: 16 }}>
        开发描述：「用户模块需要支持多租户，用 JWT 鉴权，接 PostgreSQL」<br />
        → Claude 生成：数据库表结构、接口定义、项目目录结构<br />
        → <strong>节省 2-4 小时的初始化工作</strong>
      </HBox>
    </section>
  )
}
