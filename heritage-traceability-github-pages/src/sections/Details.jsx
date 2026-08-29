import { Box, Maximize, Palette, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { product } from '../data/product'

export default function Details() {
  const specs = [[Box,'Loại sản phẩm',product.type],[Maximize,'Kích thước',product.size],[Palette,'Ngôn ngữ thiết kế','Cô đọng từ mỹ thuật cung đình'],[Sparkles,'Công năng','Trang trí bề mặt có từ tính']]
  return <section id="details" className="content-section details-section section-shell">
    <SectionHeading number="06" eyebrow="THÔNG TIN CHI TIẾT" title="Nhỏ trong kích thước, giàu trong lớp nghĩa." intro="Thông tin cơ bản giúp nhận biết sản phẩm; các trường quản trị lô và serial được đặt riêng trong khu xác thực." />
    <div className="details-layout"><div className="image-stack"><img src="/assets/product-lifestyle.jpg" alt="Magnet Dấu Ấn Thượng Triều Nguyễn trên tủ lạnh"/><img src="/assets/product-studio.jpg" alt="Cận cảnh sản phẩm magnet"/></div><div className="spec-grid">{specs.map(([Icon,k,v])=><article key={k}><Icon/><small>{k}</small><strong>{v}</strong></article>)}<div className="material-note"><p className="eyebrow">GHI CHÚ VẬT LIỆU</p><p>Thông tin chất liệu và đơn vị sản xuất chưa được cung cấp trong dữ liệu đã chốt. Giao diện chủ động để trống thay vì tự suy đoán.</p></div></div></div>
  </section>
}
