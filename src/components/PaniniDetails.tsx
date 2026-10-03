import { panini } from '../data/menu';

const euro = (value: number) => `€${value.toFixed(2).replace('.', ',')}`;

export function PaniniDetails() {
  return <>
    <section className="panini-callout">
      <div>
        <p className="eyebrow_ink">Una formula tutta tua</p>
        <h2>Costruisci il tuo<br /><em>Panino a 360°.</em></h2>
        <p>
          Scegli la formula, la carne, e tre condimenti che preferisci.
        </p>
      </div>
      <div className="steps">
        <div>
          <b>01</b><span>Scegli la formula</span>
        </div>
        <div>
          <b>02</b><span>Scegli la carne</span>
        </div>
        <div>
          <b>03</b><span>Scegli 3 condimenti</span>
        </div>
      </div>
    </section>
    <section className="panini-callout panini-details" aria-labelledby="panini-details-title">
      <div className="panini-details-formulas">
        <div className="steps">
          <h3 id="panini-details-title">Formule</h3>
          {panini.formulas.map((formula) =>
            <div key={formula.price}>
              <span><b>{euro(formula.price)}</b></span>
              <span>{formula.description}</span>
            </div>)}
        </div>
        <div className="panini-details-stamp" aria-hidden="true">
          logo<br /><strong>temporaneo
          </strong>
        </div>
      </div>
      
      <div className="panini-details-options">
        <div className="panini-option">
          <h3>Carne</h3>
          {panini.meats.map((meat) => <p key={meat}>{meat}</p>)}
        </div>
        <div className="panini-option">
          <h3>Salse</h3>
          {panini.sauces.map((sauce) => <p key={sauce}>{sauce}</p>)}
        </div>
        <div className="panini-option panini-option-wide">
          <h3>Condimenti</h3>
          <div className="panini-condiments-grid">
            {panini.condiments.map((condiment) => (
              <span key={condiment}>{condiment}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>;
}
