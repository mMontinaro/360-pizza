export interface MenuItem { name: string; description?: string; price: number }
export interface MenuCategory { id: string; title: string; items: MenuItem[] }
