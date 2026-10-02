import { Facebook, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { restaurant } from '../../data/restaurant';

export function Contact() {
    const phone = restaurant.phone.replaceAll(' ', '');
    return <section
        className="contact section"
        id="contact">
        <div>
            <p className="eyebrow">Dove trovarci</p>
            <h2>Vieni a<br /><em>provare.</em></h2>
        </div>
        <div className="contact-details">
            <div className="contact-row">
                <MapPin /><div><small>Indirizzo</small><strong>{restaurant.address.street}<br />
                    {restaurant.address.city}</strong>
                </div>
            </div>
            <div
                className="contact-row">
                <Phone /><div><small>Telefono</small>
                    <a href={`tel:${phone}`}>{restaurant.phone}</a>
                </div>
            </div>
            <div className="contact-actions">
                <a className="button" href={`tel:${phone}`} aria-label="Chiama">
                    <Phone size={20} />
                </a>
                <a
                    className="button"
                    href={`https://wa.me/39${restaurant.whatsapp.replaceAll(' ', '')}`}
                    aria-label="WhatsApp">
                    <MessageCircle size={20} />
                </a>
                <a
                    className="button"
                    href={restaurant.social.facebook || '#'}
                    aria-label="Facebook">
                    <Facebook size={20} />
                </a>
                <a className="button"
                    href={restaurant.social.instagram || '#'}
                    aria-label="Instagram">
                    <Instagram size={20} />
                </a>
            </div>
        </div>
    </section>;
}
