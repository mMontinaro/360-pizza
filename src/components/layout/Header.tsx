import { Menu as MenuIcon, Phone, X } from 'lucide-react';
import { restaurant } from '../../data/restaurant';

export function Header({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  const phone = restaurant.phone.replaceAll(' ', '');
  return <header className="header"><a className="brand" href="#top"><img src="/images/logo/logo-placeholder.svg" alt={restaurant.name}/></a><nav className={open ? 'nav is-open' : 'nav'}><a href="#menu" onClick={() => setOpen(false)}>Menù</a><a href="#about" onClick={() => setOpen(false)}>Chi siamo</a><a href="#hours" onClick={() => setOpen(false)}>Orari</a><a href="#contact" onClick={() => setOpen(false)}>Contatti</a><a className="button button-small" href={`tel:${phone}`}><Phone size={16}/> Chiamaci</a></nav><button className="menu-toggle" aria-label={open ? 'Chiudi menu' : 'Apri menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <MenuIcon/>}</button></header>;
}
