import { FileCheck2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const steps = [
  ['01','Nguồn văn hóa','Mũ thượng triều triều Nguyễn','Có hồ sơ ảnh nguồn'],
  ['02','Phát triển thiết kế','Phương án STT-01','Có hồ sơ thiết kế'],
  ['03','Bảo chứng văn hóa','Mã bảo chứng 01','Bảo chứng 29/08/2026'],
  ['04','Sản xuất & kiểm tra','Lô sản xuất minh họa','Dữ liệu giả định'],
  ['05','Cấp mã & phát hành','STT-01-HERITAGE','Mã demo'],
]
export default function Journey() {
  return <section id="journey" className="content-section section-shell">
    <SectionHeading number="05" eyebrow="HÀNH TRÌNH SẢN PHẨM" title="Một chuỗi hình thành có thể lần theo." intro="Mỗi dấu mốc nối nguồn văn hóa, thiết kế và hồ sơ sản phẩm. Nhãn trạng thái cho biết mức độ dữ liệu hiện có trong bản mẫu." />
    <div className="timeline">{steps.map(([n,t,d,s],i)=><article key={n}><span className="timeline-num">{n}</span><div className="timeline-line"/><div className="timeline-card">{i===0&&<img src="/assets/heritage-hat-rear.png" alt="Chi tiết mũ thượng triều"/>}{i===4&&<img src="/assets/product-lifestyle.jpg" alt="Sản phẩm magnet trong bối cảnh sử dụng"/>}<FileCheck2/><small>{t}</small><h3>{d}</h3><p>{s}</p></div></article>)}</div>
  </section>
}
