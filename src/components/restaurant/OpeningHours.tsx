import { openingHours } from '../../data/restaurant';

export function OpeningHours() { return <section className="hours section" id="hours"><div><h2>Orari di<br/><em>apertura.</em></h2></div><div className="hours-list">{openingHours.days.map((day) => <div key={day.name}><span>{day.name}</span>{day.isOpen ? <strong>{day.timeSlots.map((slot) => <span className="hours-slot" key={slot.toString()}>{slot.toString()}</span>)}</strong> : <strong>Chiuso</strong>}</div>)}</div></section>; }
