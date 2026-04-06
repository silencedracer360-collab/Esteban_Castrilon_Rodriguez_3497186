// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: Mensajería Urbana
// ============================================

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "Mensajería Urbana";
const VALUE_LABEL = "envíos";

// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================

const items = [
  { id: 1, name: "Envío Centro", price: 8000, distance: 3, active: true, category: "express", vehicle: "moto" },
  { id: 2, name: "Envío Norte", price: 6000, distance: 5, active: true, category: "normal", vehicle: "bicicleta" },
  { id: 3, name: "Envío Sur", price: 5000, distance: 4, active: false, category: "económico", vehicle: "moto" },
  { id: 4, name: "Envío Oficina", price: 10000, distance: 6, active: true, category: "express", vehicle: "moto" },
  { id: 5, name: "Envío Documentos", price: 5500, distance: 2, active: true, category: "normal", vehicle: "bicicleta" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed?.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Eliminado por índice: ${removed[0]?.name}`);
};

const getActiveItems = () => {
  return items.filter(item => item.active === true);
};

const findByName = (name) => {
  return items.find(item => item.name === name);
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.category} — $${item.price} — ${item.distance}km — ${item.vehicle}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// Agregar nuevo envío
addItem({ id: 6, name: "Envío Rápido", price: 9000, distance: 4, active: true, category: "express", vehicle: "moto" });

// Agregar envío prioritario
addPriorityItem({ id: 0, name: "Envío VIP", price: 15000, distance: 2, active: true, category: "express", vehicle: "moto" });

// Eliminar del medio
removeByIndex(2);

// Eliminar último
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");

items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// Buscar envío
const found = findByName("Envío Centro");
console.log("🔍 Búsqueda:", found ? formatItem(found) : "No encontrado");

// Filtrar activos
const activeItems = getActiveItems();
console.log(`✅ Envíos activos: ${activeItems.length}`);

// Snapshot inmutable
const snapshot = [...items, { id: 99, name: "Envío Extra", price: 7000, distance: 3, active: true, category: "normal", vehicle: "bicicleta" }];
console.log(`📌 Snapshot (sin modificar original): ${snapshot.length} elementos`);

console.log("\n--- Transformación con map ---\n");

// Solo nombres
const names = items.map(item => item.name);
console.log("📋 Nombres:", names);

// Transformar precios (ej: +10%)
const increasedPrices = items.map(item => item.price * 1.1);
console.log("💰 Precios con recargo:", increasedPrices);

console.log("\n--- Resumen final ---\n");

console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);