import { ArrowDown, CheckCircle2, FileBadge2, Landmark } from 'lucide-react'
import { navItems, product, disclosure } from '../data/product'
import Disclosure from '../components/Disclosure'

export default function Identity() {
  return <section id="identity" className="hero section-shell">
    <div className="hero-copy">
      <p className="eyebrow">01 — NHẬN DIỆN SẢN PHẨM</p>
      <h1>Dấu Ấn<br/><em>Thượng Triều Nguyễn</em></h1>
      <p className="hero-lead">Một lát cắt của mỹ thuật cung đình được chuyển hóa thành vật phẩm lưu niệm đương đại.</p>
      <div className="hero-meta">
        <span><small>MÃ SẢN PHẨM</small>{product.code}</span><span><small>PHIÊN BẢN</small>{product.version}</span><span><small>MÃ TRUY XUẤT</small>{product.traceCode}</span>
      </div>
      <Disclosure>{disclosure.demo}</Disclosure>
      <div className="hero-actions"><a href="#verification" className="button primary">Xác thực sản phẩm <ArrowDown size={16}/></a><a href="#heritage" className="button text">Khám phá nguồn văn hóa</a></div>
    </div>
    <div className="hero-visual">
      <span className="catalog-tag">STT <b>01</b></span>
      <img src="/assets/product-studio.jpg" alt="Sản phẩm magnet Dấu Ấn Thượng Triều Nguyễn trên nền sáng" />
      <div className="status-float"><CheckCircle2/><span><small>TRẠNG THÁI</small>{product.status}</span></div>
    </div>
    <div className="trust-strip">
      <div><CheckCircle2/><span><small>XÁC THỰC</small>{product.status}</span></div>
      <div><Landmark/><span><small>BẢO CHỨNG</small>Đã bảo chứng</span></div>
      <div><FileBadge2/><span><small>QUYỀN TÁC GIẢ</small>Đã được cấp chứng nhận</span></div>
    </div>
    <div className="quick-links"><p>KHÁM PHÁ HỒ SƠ</p>{navItems.slice(1).map(([num,label,id])=><a key={id} href={`#${id}`}><span>{num}</span>{label}</a>)}<a href="#records"><span>↳</span>Hồ sơ</a></div>
  </section>
}
