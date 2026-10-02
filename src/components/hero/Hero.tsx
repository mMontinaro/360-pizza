import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { restaurant } from '../../data/restaurant';

export function Hero() {
    const phone = restaurant.phone.replaceAll(' ', '');
    return <>
        <section className="hero" id="top">
            <div className="hero-content">
                <p className="eyebrow">
                    {restaurant.tagline}
                </p>
                <h1>
                    Pizza, cucina<br /><em>a 360°.</em>
                </h1>
                <p className="hero-copy">
                    Sapori italiani, forno a legna e tutta la semplicità di una tavola fatta bene.
                </p>
                <div className="hero-actions">
                    <a className="button" href="#menu">
                        Scopri il menù <ArrowRight size={18} />
                    </a>
                    <a className="text-link" href={`tel:${phone}`}>
                        Chiamaci <Phone size={16} />
                    </a>
                </div>
                <p className="hero-address">
                    <MapPin size={16} /> {restaurant.address.street} · {restaurant.address.city}
                </p>
            </div>
            <div className="hero-stamp">dal forno<br /><strong>alla tavola</strong>
            </div>
        </section>
    </>;
}
