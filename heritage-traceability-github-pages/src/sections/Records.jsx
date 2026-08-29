import { FileImage, FileText, Image, LockKeyhole } from 'lucide-react'

export default function Records() {
  const docs = [[FileText,'Chứng thư bảo chứng','Thông tin hồ sơ'],[FileText,'Giấy chứng nhận quyền tác giả','Dữ liệu chi tiết: giả định'],[Image,'Hồ sơ ảnh nguồn văn hóa','Ảnh gốc đã cung cấp'],[FileImage,'Hồ sơ thiết kế sản phẩm','Phương án STT-01']]
  return <section id="records" className="records section-shell"><div><p className="eyebrow">HỒ SƠ XÁC THỰC</p><h2>Tài liệu được tổ chức tại một nơi.</h2><p>Khu vực minh họa cấu trúc hồ sơ. Các nút không cung cấp tài liệu pháp lý thật trong phiên bản demo.</p></div><div className="record-list">{docs.map(([Icon,t,s])=><button key={t}><Icon/><span><strong>{t}</strong><small>{s}</small></span><LockKeyhole size={16}/></button>)}</div></section>
}
