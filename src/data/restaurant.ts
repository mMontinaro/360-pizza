export const restaurant = {
  name: '360° Pizza & Cucina', tagline: 'Forno a legna',
  address: { street: 'Via del Murillo 51', city: 'Latina Scalo' },
  phone: '0773 1352761', whatsapp: '376 1370790',
  social: { facebook: null, instagram: null, deliveroo: null },
  features: ['Forno a legna', 'Pizza', 'Cucina', 'Panini'],
} as const;

export class TimeSlot {
  constructor(public readonly opensAt: string, public readonly closesAt: string) {}
  toString() { return `${this.opensAt}–${this.closesAt}`; }
}

export class OpeningDay {
  constructor(public readonly name: string, public readonly isOpen: boolean, public readonly timeSlots: TimeSlot[] = []) {}
}

export class Orari {
  constructor(public readonly days: OpeningDay[]) {}
}

export const openingHours = new Orari([
  new OpeningDay('Mar–Sab', true, [new TimeSlot('12.00', '15.00'), new TimeSlot('18.00', '23.00')]),
  new OpeningDay('Dom', true, [new TimeSlot('18.00', '23.00')]),
  new OpeningDay('Lun', false),
]);
