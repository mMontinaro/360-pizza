import { panini } from '../data/menu';

const euro = (value: number) => `€${value.toFixed(2).replace('.', ',')}`;

export function PaniniDetails() {
  return <><section className="panini-callout"><div><p className="eyebrow_ink">Una formula tutta tua</p><h2>Costruisci il tuo<br /><em>Panino a 360°.</em></h2><p>Scegli la formula, la carne, e tre condimenti che preferisci.</p></div><div className="steps"><div><b>01</b><span>Scegli la formula</span></div><div><b>02</b><span>Scegli la carne</span></div><div><b>03</b><span>Scegli 3 condimenti</span></div></div></section>
  <div className="panini-details" aria-labelledby="panini-details-title">
    <div className="panini-detail-content">
      <div className="steps">
        <h3>Formule</h3>
        {panini.formulas.map((formula, index) =>
          <div key={formula.price}>
            <b>{euro(formula.price)}</b>
            <span>{formula.description}</span>
          </div>)}
      </div>
    </div>
    <div className="panini-detail-content">
      <div className="steps">
        <h3>Carne</h3>
        {panini.meats.map((meat, index) =>
          <div key={meat}>
            <p>
              {meat}
            </p>
          </div>
        )}
      </div>
      <div className="steps">
        <h3>Salse</h3>
        {panini.sauces.map((sauce, index) =>
          <div key={sauce}>
            <p>
              {sauce}
            </p>
          </div>
        )}
      </div>
      <h3>Condimenti</h3>
      <div>
        <p>
          {panini.condiments.join(' · ')}
        </p>
      </div>
    </div>

  </div ></>;
}
