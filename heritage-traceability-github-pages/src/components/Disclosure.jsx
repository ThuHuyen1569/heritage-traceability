import { Info } from 'lucide-react'

export default function Disclosure({ children, dark = false }) {
  return <div className={`disclosure ${dark ? 'dark' : ''}`}>
    <Info size={14} aria-hidden="true" /> <span>{children}</span>
  </div>
}
