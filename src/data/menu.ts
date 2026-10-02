import type { MenuCategory, MenuItem } from '../types/restaurant';

export class PizzaIngredient { constructor(public readonly name: string, public readonly price = 0) { } }

export class Pizza implements MenuItem {
  public readonly description: string;
  constructor(public readonly name: string, public readonly ingredients: PizzaIngredient[], public readonly price: number) {
    this.description = ingredients.map((ingredient) => ingredient.name).join(', ');
  }
  get hasTomato(): boolean { return this.ingredients.some((i) => i.name.toLowerCase().includes('pomodoro')); }
}

const pizza = (name: string, price: number, ...ingredients: string[]) => new Pizza(name, ingredients.map((i) => new PizzaIngredient(i)), price);

const standardPizzaSeed: Pizza[] = [
  pizza('Rossa', 5, 'pomodoro', 'olio', 'sale'), pizza('Margherita', 6, 'pomodoro', 'mozzarella', 'basilico'), pizza('Marinara', 6, 'pomodoro', 'aglio', 'origano', 'olio'), pizza('Napoli', 7, 'pomodoro', 'mozzarella', 'acciughe', 'origano'), pizza('Funghi', 6.5, 'pomodoro', 'mozzarella', 'funghi'), pizza('Funghi e Cotto', 7, 'pomodoro', 'mozzarella', 'funghi', 'prosciutto cotto'), pizza('Diavola', 7.5, 'pomodoro', 'mozzarella', 'spianata calabrese'), pizza('Tonno e Cipolla', 7.5, 'pomodoro', 'mozzarella', 'tonno', 'cipolla'), pizza('Parmigiana', 7.5, 'pomodoro', 'mozzarella', 'melanzane', 'parmigiano'), pizza('Paperina', 7, 'mozzarella', 'wurstel', 'patatine fritte'), pizza('Mimosa', 7, 'mozzarella', 'panna', 'mais', 'prosciutto cotto'), pizza('Zucchine', 7.5, 'pomodoro', 'mozzarella', 'speck', 'zucchine grigliate'), pizza('Crostino', 7, 'mozzarella', 'prosciutto crudo'), pizza('Crudo', 7.5, 'pomodoro', 'mozzarella', 'prosciutto crudo'), pizza('4 Stagioni', 8, 'pomodoro', 'mozzarella', 'prosciutto cotto', 'olive', 'carciofi sottolio', 'funghi'), pizza('Capricciosa', 8, 'pomodoro', 'mozzarella', 'prosciutto crudo', 'carciofi sottolio', 'olio', 'uovo sodo'), pizza('Vegetariana', 8, 'pomodoro', 'mozzarella', 'melanzane', 'zucchine', 'peperoni', 'cipolla'), pizza('Friarielli', 8, 'pomodoro', 'mozzarella', 'salsiccia', 'friarielli'), pizza('Il Brigante', 9, 'pomodoro', 'mozzarella', 'ventricina piccante', 'funghi', 'scamorza', 'ricotta'), pizza('Salsiccia', 7.5, 'pomodoro', 'mozzarella', 'salsiccia casareccia'), pizza('Salsiccia e Funghi', 8, 'pomodoro', 'mozzarella', 'salsiccia casareccia', 'funghi'), pizza('Sicilia', 9, 'pomodoro', 'mozzarella', 'acciughe', 'capperi', 'melanzane fritte', 'pomodori secchi'), pizza('Italia', 9, 'pomodoro', 'mozzarella', 'rucola', 'prosciutto crudo', 'scaglie di parmigiano', 'pomodorini'), pizza('Bufala', 8.5, 'pomodoro', 'mozzarella', 'bufala'), pizza('Bolognese', 10, 'ragù di carne', 'mozzarella', 'parmigiano'), pizza('Tropea', 10, 'pomodoro', 'mozzarella', 'kebab', 'cipolla di Tropea', 'salsa barbecue'), pizza('Red', 10, 'pomodoro', 'mozzarella', 'kebab', 'scamorza', 'gorgonzola', 'cavolo rosso')
];

const whitePizzaSeed: Pizza[] = [
  pizza('Focaccia', 5, 'olio', 'origano', 'sale'), pizza('Salsiccia e Patate', 8.5, 'mozzarella', 'salsiccia casareccia', 'patate al forno'), pizza('Genovese', 8, 'mozzarella', 'ricotta', 'pesto', 'pomodori secchi'), pizza('Speck', 8.5, 'mozzarella', 'rucola', 'speck', 'scaglie di parmigiano'), pizza('Zola e Noci', 9, 'mozzarella', 'gorgonzola', 'noci', 'salsiccia'), pizza('Grigia', 9, 'mozzarella', 'guanciale', 'pecorino romano', 'pepe'), pizza('Salmone', 10, 'crema di salmone', 'mozzarella', 'rucola', 'gamberi', 'aceto'), pizza('White', 10, 'mozzarella', 'kebab', 'insalata', 'cavolo bianco', 'cipolla', 'salsa yogurt'), pizza('Calzone Montano', 10, 'mozzarella', 'prosciutto cotto', 'funghi', 'scamorza', 'carciofi sottolio'), pizza('Calzone Aosta', 10, 'pomodoro', 'mozzarella', 'olive nere', 'gorgonzola', 'funghi', 'speck'), pizza('Calzone Calabria', 10, 'pomodoro', 'mozzarella', 'scamorza', 'spianata calabrese', 'nduja', 'cipolla Tropea'), pizza('Calzone 360°', 12, 'pomodoro', 'mozzarella', 'funghi', 'prosciutto cotto', 'salsiccia', 'ricotta', 'scamorza', 'uovo sodo', 'carciofini'), pizza('La Magra', 10, 'focaccia', 'salsiccetta', 'rucola', 'pomodorini', 'bresaola')
];

export const speciali: Pizza[] = [
  pizza('Carbonara', 9, 'mozzarella', 'guanciale', 'uovo', 'pepe', 'pecorino romano', 'parmigiano'), pizza('Salento', 10, 'pomodoro', 'mozzarella', 'pomodori secchi', 'alici', 'burrata'), pizza('Calabrisella', 10, 'pomodoro', 'mozzarella', 'nduja', 'scamorza', 'spianata calabrese', 'cipolla di Tropea'), pizza('Mexicana', 10, 'pomodoro', 'mozzarella', 'fagioli', 'salsiccia', 'nduja'), pizza('Tartufata', 10, 'crema di tartufo', 'mozzarella', 'scamorza', 'porcini'), pizza('Maremma Maiala', 10, 'mozzarella', 'olive nere', 'scamorza', 'lardo di colonnata', 'parmigiano'), pizza('Mortadella', 10, 'mozzarella', 'crema di carciofi', 'stracciatella', 'mortadella'), pizza('La Burrata', 10, 'pomodoro', 'mozzarella', 'rucola', 'prosciutto crudo', 'burrata al centro'), pizza('Mari e Monti', 10, 'mozzarella', 'funghi champignon', 'prosciutto cotto', 'gamberi', 'tonno'), pizza('Mare', 10, 'pomodoro', 'mozzarella', 'cozze', 'vongole', 'gamberi', 'tonno')
];

const allStandardPizzas = [...standardPizzaSeed, ...whitePizzaSeed];
const specialPizzaNames = new Set([
  'Carbonara', 'Salento', 'Calabrisella', 'Mexicana', 'Tartufata', 'Maremma Maiala',
  'Mortadella', 'La Burrata', 'Mari e Monti', 'Mare', 'La Magra', 'Bolognese',
  'Salmone', 'Tropea', 'White', 'Red', 'Calzone Montano', 'Calzone Aosta',
  'Calzone Calabria', 'Calzone 360°',
]);
const movedSpeciali = allStandardPizzas.filter((item) => specialPizzaNames.has(item.name));
export const specialiComplete = [...speciali, ...movedSpeciali];
const remainingPizzas = allStandardPizzas.filter((item) => !specialPizzaNames.has(item.name));
export const rosse = remainingPizzas.filter((item) => item.hasTomato);
export const bianche = remainingPizzas.filter((item) => !item.hasTomato);

export const fritti: MenuItem[] = [
  { name: 'Patatine fritte top', price: 3 }, { name: 'Fiori di zucca', price: 2 }, { name: 'Crocchette patate e mozzarella', price: 1.8 }, { name: 'Arancino Sicilia', price: 2 }, { name: 'Supplì', price: 1.8 }, { name: 'Baccalà', price: 2.8 }, { name: 'Frittata di spaghetti', price: 2.5 }, { name: 'Nuggets (pz. 10)', price: 5 }, { name: 'Olive ascolane (pz. 10)', price: 6 }, { name: 'Casatiello', price: 3 }, { name: 'Hot Dog', price: 3 }
];

export const panini = { meats: ['Hamburger di bovino 150 g', 'Hamburger crunchy di pollo', 'Salsiccia casareccia', 'Kebab di pollo e tacchino'], sauces: ['Maionese', 'Ketchup', 'Barbecue', 'Mostarda', 'Yogurt', 'Piccante', 'Cheddar'], condiments: ['Insalata iceberg', 'Insalata cavolo bianco', 'Insalata cavolo rosso', 'Pomodoro da insalata', 'Zucchine grigliate', 'Melanzane fritte', 'Peperoni grigliati', 'Broccoletti ripassati', 'Cicoria ripassata', 'Carciofi sottolio', 'Rucola', 'Cetriolo', 'Mais', 'Gorgonzola', 'Bacon in piastra', 'Uovo fritto', 'Prosciutto cotto', 'Peperoncino piccante', 'Scamorza'], formulas: [{ price: 7, description: 'Solo Panino' }, { price: 10, description: 'Carne + 3 condimenti + patatine fritte + bibita in lattina' }, { price: 12, description: 'Carne + 3 condimenti + patatine fritte + vino o birra alla spina' }] };

export const menu: MenuCategory[] = [
  { id: 'rosse', title: 'Le Rosse', items: rosse }, { id: 'bianche', title: 'Le Bianche', items: bianche }, { id: 'speciali', title: 'Le Pizze Speciali', items: specialiComplete }, { id: 'fritti', title: 'I Fritti', items: fritti }
];
export const additionalIngredientPrices = { affettati: 1, verdure: 0.5 };
