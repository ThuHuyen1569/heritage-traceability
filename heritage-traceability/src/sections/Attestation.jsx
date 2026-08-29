import { ExternalLink, FileBadge2, Landmark } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Disclosure from '../components/Disclosure'
import { product, disclosure } from '../data/product'

export default function Attestation() {
  return <section id="attestation" className="content-section burgundy-section section-shell">
    <SectionHeading light number="04" eyebrow="BẢO CHỨNG & QUYỀN TÁC GIẢ" title="Hai lớp hồ sơ, hai phạm vi giá trị." intro="Bảo chứng văn hóa và quyền tác giả là hai nội dung độc lập, được trình bày tách bạch trong cùng một section." />
    <div className="certificate-grid">
      <article className="certificate"><Landmark/><p className="eyebrow">BẢO CHỨNG VĂN HÓA</p><h3>{product.attestation.organization}</h3><span className="seal">ĐÃ BẢO CHỨNG</span><dl><div><dt>Mã bảo chứng</dt><dd>{product.attestation.code}</dd></div><div><dt>Ngày</dt><dd>{product.attestation.date}</dd></div></dl><button>Xem thông tin hồ sơ <ExternalLink size={15}/></button></article>
      <article className="certificate"><FileBadge2/><p className="eyebrow">QUYỀN TÁC GIẢ</p><h3>{product.copyright.status}</h3><span className="seal gold">ĐÃ ĐƯỢC CẤP CHỨNG NHẬN</span><dl><div><dt>Chủ sở hữu demo</dt><dd>{product.copyright.owner}</dd></div><div><dt>Số giấy / ngày cấp</dt><dd>{product.copyright.certificate} · {product.copyright.issued}</dd></div></dl><Disclosure dark>{disclosure.assumed}</Disclosure></article>
    </div>
  </section>
}
