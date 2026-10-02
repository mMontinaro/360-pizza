import { useState } from 'react';
import { additionalIngredientPrices, menu } from '../../data/menu';

const euro = (value: number) => `€${value.toFixed(2).replace('.', ',')}`;

export function MenuSection() {
  const [active, setActive] = useState('rosse');
  const category = menu.find((item) => item.id === active)!;
  return <section className="section menu-section" id="menu">
    <div className="section-heading">
      <p className="eyebrow">
        Il nostro menù
      </p>
      <h2>
        Fatto per essere<br /><em>scoperto.</em>
      </h2>
      <p>
        Le nostre pizze e i fritti preparati con gusto e semplicità.
      </p>
    </div>
    <div className="menu-tabs-wrap">
      <div className="menu-tabs" role="tablist">
        {
          menu.map((item) =>
            <button className={
              active === item.id ? 'active' : ''}
              key={item.id}
              onClick={() => setActive(item.id)}
              role="tab"
              aria-selected={active === item.id}>
              {item.title.replace('Le ', '')}
            </button>)}
      </div>
      <p className="ingredient-prices"><strong>Aggiunta ingredienti</strong><span>Affettati {euro(additionalIngredientPrices.affettati)}</span><span>Verdure {euro(additionalIngredientPrices.verdure)}</span>
      </p>
    </div>
    <div className="menu-list">
      {
        category.items.map((item, index) =>
          <article
            className="menu-item"
            key={item.name}>
            <div>
              <span className="item-index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.name}</h3>
              {item.description &&
                <p>
                  {item.description}
                </p>
              }
            </div>
            <strong>{euro(item.price)}</strong>
          </article>)}
    </div>
  </section>;
}
