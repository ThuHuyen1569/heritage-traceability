import Header from './components/Header'
import Identity from './sections/Identity'
import Verification from './sections/Verification'
import Heritage from './sections/Heritage'
import Attestation from './sections/Attestation'
import Journey from './sections/Journey'
import Details from './sections/Details'
import Records from './sections/Records'

export default function App() {
  return <><Header/><main><Identity/><Verification/><Heritage/><Attestation/><Journey/><Details/><Records/></main><footer><span>DẤU ẤN · DI SẢN VIỆT</span><p>Phiên bản giao diện demo — 29.08.2026</p><a href="#identity">Trở về đầu trang ↑</a></footer></>
}
