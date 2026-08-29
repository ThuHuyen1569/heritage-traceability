import SectionHeading from '../components/SectionHeading'
import Disclosure from '../components/Disclosure'
import { disclosure } from '../data/product'

export default function Heritage() {
  return <section id="heritage" className="content-section heritage-section section-shell">
    <SectionHeading number="03" eyebrow="NGUỒN VĂN HÓA" title="Từ vật phẩm cung đình đến ký ức mang về." intro="Thiết kế khai thác ngôn ngữ tạo hình của mũ thượng triều triều Nguyễn, chuyển dịch thành một vật phẩm nhỏ gọn cho đời sống đương đại." />
    <div className="heritage-grid">
      <figure className="source-image"><img src="/assets/heritage-hat-front.png" alt="Ảnh gốc mũ thượng triều nhìn từ phía trước"/><figcaption>Ảnh nguồn do người dùng cung cấp</figcaption></figure>
      <div className="design-notes"><p className="eyebrow">GIẢI MÃ NGÔN NGỮ TẠO HÌNH</p>{[['01','Hình dáng tổng thể','Hai cánh dựng cao tạo trục nhận diện chính.'],['02','Cánh chuồn','Chi tiết vươn cao được cô đọng thành hai mảng đối xứng.'],['03','Rồng và mây','Họa tiết được chuyển hóa thành nhịp trang trí nhiều lớp.'],['04','Sắc vàng – đỏ – lục','Bảng màu gợi liên tưởng mỹ thuật cung đình.']].map(([n,t,d])=><div className="note" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}<Disclosure>{disclosure.assumed} Số kiểm kê 2325 & 2326 không được dùng làm thông tin hiện vật đã xác minh.</Disclosure></div>
      <figure className="detail-image"><img src="/assets/product-studio.jpg" alt="Sản phẩm magnet được phát triển từ nguồn văn hóa"/><figcaption>SẢN PHẨM HOÀN THIỆN · STT-01</figcaption></figure>
    </div>
  </section>
}
