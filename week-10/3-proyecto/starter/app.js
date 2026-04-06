// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Dominio: MENSAJERIA_URBANA
// ============================================

const DOMAIN_NAME = "MENSAJERIA_URBANA";
const VALUE_LABEL = "envíos";
const MAX_ITEMS = 1_000;

// ============================================
// DATOS
// ============================================

const items = [
  { id: 1, name: "Envío Centro", value: 8000, active: true, category: "express", distance: 3 },
  { id: 2, name: "Envío Norte", value: 6000, active: true, category: "normal", distance: 5, notes: "entrega rápida" },
  { id: 3, name: "Envío Sur", value: 5000, active: false, category: "económico", distance: 4 },
  { id: 4, name: "Envío Oficina", value: 10000, active: true, category: "express", distance: 6 },
  { id: 5, name: "Envío Documentos", value: 5500, active: true, category: "normal", distance: 2 },
  { id: 6, name: "Envío Rápido", value: 9000, active: true, category: "express", distance: 4, notes: "prioritario" }
];

// ============================================
// FUNCIONES CRUD
// ============================================

const addItem = (item) => {
  if (items.length >= MAX_ITEMS) {
    console.log("❌ Límite alcanzado");
    return;
  }
  items.push(item);
  console.log(`✅ Agregado: ${item.name}`);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const getActive = () => {
  return items.filter(item => item.active === true);
};

const filterByField = (field, value) => {
  return items.filter(item => item[field] === value);
};

// ============================================
// ANÁLISIS
// ============================================

const updateItem = (id, changes) => {
  return items.map(item =>
    item.id === id ? { ...item, ...changes } : item
  );
};

const calculateStats = (field) => {
  const values = items.map(i => i[field]);

  const total = values.reduce((acc, v) => acc + v, 0);
  const avg = total / values.length;
  const min = Math.min(...values);
  const max = Math.max(...values);

  return { min, max, avg, total };
};

// ============================================
// DISPLAY
// ============================================

const formatItem = (item) => {
  return `${String(item.id).padEnd(3)} | ${item.name.padEnd(20)} | ${item.category.padEnd(10)} | $${item.value.toString().padEnd(6)} | ${item.distance}km | ${item.notes ?? "-"}`;
};

const buildReport = () => {
  console.log(`\n📦 REPORTE — ${DOMAIN_NAME}`);
  console.log("=".repeat(60));

  console.log("\n📋 Listado:");
  items.forEach(item => console.log(formatItem(item)));

  const active = getActive();
  console.log(`\n✅ Activos: ${active.length}`);
  console.log(`❌ Inactivos: ${items.length - active.length}`);

  const stats = calculateStats("value");
  console.log(`\n📊 Estadísticas:`);
  console.log(`Total: ${stats.total}`);
  console.log(`Promedio: ${stats.avg.toFixed(2)}`);
  console.log(`Mínimo: ${stats.min}`);
  console.log(`Máximo: ${stats.max}`);

  console.log("\n🔍 Propiedades del primer elemento:");
  Object.entries(items[0]).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  console.log(`\n📦 Total final: ${items.length} ${VALUE_LABEL}`);
  console.log("=".repeat(60));
};

// ============================================
// EJECUCIÓN
// ============================================

console.log("=".repeat(40));
console.log(`  ${DOMAIN_NAME}`);
console.log("=".repeat(40));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}`);
console.log("");

// Paso 1
const found = findById(1);
console.log("Encontrado id=1:", found?.name ?? "no encontrado");
console.log("");

// Paso 2
const active = getActive();
console.log(`Activos: ${active.length}`);
active.forEach(item => console.log(" ", formatItem(item)));
console.log("");

// Paso 3
const filtered = filterByField("category", "express");
console.log(`Filtro category=express: ${filtered.length} resultados`);
console.log("");

// Paso 4
const updated = updateItem(1, { value: 9999 });
console.log(`Actualizado id=1: value=${updated.find(i => i.id === 1)?.value}`);
console.log("");

// Paso 5
const stats = calculateStats("value");
console.log(`Estadísticas: min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)}`);
console.log("");

// Paso 6
buildReport();

// Paso 7
addItem({ id: 7, name: "Envío Nuevo", value: 7000, active: true, category: "normal", distance: 3 });