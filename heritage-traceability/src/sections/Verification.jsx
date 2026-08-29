import { Check, Fingerprint, ScanLine } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import QRCode from '../components/QRCode'
import Disclosure from '../components/Disclosure'
import { product, disclosure } from '../data/product'

export default function Verification() {
  return <section id="verification" className="content-section section-shell">
    <SectionHeading number="02" eyebrow="XÁC THỰC SẢN PHẨM" title="Một mã định danh, một hồ sơ minh bạch." intro="Thông tin dưới đây xác nhận mã demo tồn tại trong giao diện mẫu; không phải kết luận chống giả hay xác nhận hàng chính hãng." />
    <div className="verify-grid">
      <div className="verify-card main"><QRCode/><div><span className="verified-pill"><Check size={14}/> {product.status}</span><h3>{product.traceCode}</h3><p>Mã truy xuất được liên kết với hồ sơ sản phẩm <b>{product.code}</b>, phiên bản <b>{product.version}</b>.</p><Disclosure>{disclosure.demo}</Disclosure></div></div>
      <div className="verify-card"><Fingerprint/><small>ĐỊNH DANH SẢN PHẨM</small><dl><div><dt>Tên sản phẩm</dt><dd>{product.name}</dd></div><div><dt>Mã / phiên bản</dt><dd>{product.code} / {product.version}</dd></div><div><dt>Lô sản xuất</dt><dd>{product.production.lot} <i>Giả định</i></dd></div><div><dt>Số serial</dt><dd>{product.production.serial} <i>Giả định</i></dd></div></dl></div>
      <div className="verify-card chain"><ScanLine/><small>CHUỖI XÁC NHẬN MẪU</small>{['Sản xuất','Kiểm tra chất lượng','Gắn mã truy xuất','Phát hành'].map((x,i)=><div key={x}><span>{i+1}</span><p>{x}<small>Minh họa quy trình — chưa có dữ liệu mốc xác minh</small></p></div>)}</div>
    </div>
  </section>
}
