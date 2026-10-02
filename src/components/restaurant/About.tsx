import { ArrowRight } from 'lucide-react';

export function About() {
    return <section
        className="about"
        id="about">
        <div
            className="about-image">
            <span>FORNO<br /><b>A LEGNA</b></span>
        </div>
        <div className="about-copy">
            <p className="eyebrow">Il cuore di 360°</p>
            <h2>Il calore<br />delle cose <em>vere.</em></h2>
            <p>Il forno a legna è il punto di partenza. Da lì nascono pizze, piatti e panini da condividere, in un’atmosfera semplice e accogliente.</p>
            <a className="text-link red-link" href="#contact">Vieni a trovarci <ArrowRight size={17} /></a>
        </div>
    </section>;
}
