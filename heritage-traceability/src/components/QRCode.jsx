export default function QRCode() {
  return <div className="qr" aria-label="QR minh họa, không dùng để quét">
    <svg viewBox="0 0 120 120" role="img">
      <rect width="120" height="120" fill="#fffaf0" />
      <path fill="#321315" d="M8 8h34v34H8zm7 7v20h20V15zM78 8h34v34H78zm7 7v20h20V15zM8 78h34v34H8zm7 7v20h20V85zM50 10h8v8h-8zm12 0h8v16h-8zm-12 20h18v8H50zm-2 18h10v10H48zm16-8h10v18H64zm18 10h8v8h-8zm14-2h14v10H96zM48 66h10v10H48zm16-2h8v18h-8zm12 0h10v10H76zm14 0h20v8H90zM48 84h12v8H48zm18 4h8v22h-8zm12-8h12v10H78zm18 0h14v8H96zM80 96h10v14H80zm16-2h14v16H96z" />
    </svg>
    <span>DEMO</span>
  </div>
}
