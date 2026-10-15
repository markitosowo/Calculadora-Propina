# Calculadora de Propinas y Consumo

Aplicación en React + TypeScript (Vite) con Tailwind CSS. Permite agregar productos del menú a una orden, elegir una propina, ver los totales y guardar la orden.

## Estructura

```
src/
├── components/   MenuItem, OrderContents, OrderTotals, TipPercentageForm
├── data/db.ts    menuItems (12 productos)
├── hooks/        useOrder.ts (order, tip, addItem, removeItem, placeOrder)
├── types/        index.ts (MenuItem, OrderItem y props)
├── App.tsx
├── index.css
└── main.tsx
```

## Puesta en marcha

```bash
npm install
npm run dev
```
