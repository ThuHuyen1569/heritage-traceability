import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../data/product'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('identity')

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id))
    }, { rootMargin: '-35% 0px -55%' })
    navItems.forEach(([, , id]) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return <header className="site-header">
    <a className="brand" href="#identity" aria-label="Về đầu trang">
      <span className="brand-mark">ẤN</span>
      <span><strong>NỀN TẢNG TRUY XUẤT</strong><small>SẢN PHẨM DI SẢN VĂN HÓA</small></span>
    </a>
    <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Điều hướng chính">
      {navItems.map(([num, label, id]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setOpen(false)}><span>{num}</span>{label}</a>)}
    </nav>
    <div className="header-actions"><button className="language">VI</button><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Mở menu">{open ? <X /> : <Menu />}</button></div>
  </header>
}
