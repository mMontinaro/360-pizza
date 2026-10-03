import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { MenuSection } from './components/menu/MenuSection';
import { Contact } from './components/restaurant/Contact';
import { OpeningHours } from './components/restaurant/OpeningHours';
import { PaniniDetails } from './components/PaniniDetails';
import './styles/global.css';
import './styles/contact-hours.css';
import './styles/menu-prices.css';
import './styles/panini-details.css';
import { About } from './components/restaurant/About';

function App() { 
    const [open, setOpen] = useState(false); 
    return <>
    <Header open={open} setOpen={setOpen}/>
    <main>
        <Hero/>
        <MenuSection/>
        <PaniniDetails/>
        <About/>
        <OpeningHours/>
        <Contact/>
    </main>
    <Footer/>
</>; }

createRoot(document.getElementById('root')!).render(<App/>);
