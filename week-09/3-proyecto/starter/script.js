// ============================================
// PROYECTO SEMANA 09: Catálogo de Envíos
// Dominio: Mensajería Urbana
// ============================================

const DOMAIN_NAME = "Mensajería Urbana";
const VALUE_LABEL = "envíos";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

const items = [
  { id: 1, name: "Envío Centro", price: 8000, active: true, distance: 3, category: "express", note: "urgente" },
  { id: 2, name: "Envío Norte", price: 6000, active: true, distance: 5, category: "normal" },
  { id: 3, name: "Envío Sur", price: 5000, active: false, distance: 4, category: "económico" },
  { id: 4, name: "Envío Oficina", price: 10000, active: true, distance: 6, category: "express", note: "documentos" },
  { id: 5, name: "Envío Documentos", price: 5500, active: true, distance: 2, category: "normal" },
  { id: 6, name: "Envío Rápido", price: 9000, active: true, distance: 4, category: "express", note: "prioritario" }
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);
  Object.entries(item).forEach(([key, value]) => {
    console.log(`${key.padEnd(12)}: ${value}`);
  });
};

const calculateStats = (numericKey) => {
  const values = items.map(item => item[numericKey]);

  const total = values.reduce((acc, val) => acc + val, 0);
  const avg = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  console.log(`\n📊 Estadísticas de ${numericKey}:`);
  console.log(`Total: ${total}`);
  console.log(`Promedio: ${avg.toFixed(1)}`);
  console.log(`Máximo: ${max}`);
  console.log(`Mínimo: ${min}`);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  console.log(`Precio: $${item.price}`);
  console.log(`Distancia: ${item.distance}km`);

  if (Object.hasOwn(item, "note")) {
    console.log(`Nota: ${item.note}`);
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}":`);
  for (const key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(`${key}: ${item[key]}`);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

const updateItem = (item, changes) => {
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

const getAvailable = () => {
  return items.filter(item => item.active === true);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const addCalculatedProp = () => {
  return items.map(item => ({
    ...item,
    priceWithExtra: item.price + (item.distance * 1000)
  }));
};

const sortByNumericProp = (ascending = true) => {
  return [...items].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );
};

// ============================================
// REPORTE FINAL
// ============================================

const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  console.log(`Total: ${items.length}`);
  console.log(`Activos: ${getAvailable().length}`);

  calculateStats("price");

  console.log("\n📋 Ordenados por precio:");
  sortByNumericProp().forEach(item => {
    console.log(`- ${item.name} ($${item.price})`);
  });

  const sorted = sortByNumericProp();
  const min = sorted[0];
  const max = sorted[sorted.length - 1];

  console.log(`\n💰 Más barato: ${min.name} ($${min.price})`);
  console.log(`💰 Más caro: ${max.name} ($${max.price})`);

  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`   Total de ${VALUE_LABEL}: ${items.length}`);

inspectItem(items[0]);

calculateStats("price");

items.forEach(showWithOptionals);

printAllProperties(items[0]);

const updated = updateItem(items[0], { price: 12000 });
console.log("\n✏️ Actualizado:", updated);

console.log("\n✅ Disponibles:", getAvailable());

console.log("\n🔍 Buscar ID 2:", findById(2));
console.log("🔍 Buscar ID 99:", findById(99));

console.log("\n➕ Con cálculo:", addCalculatedProp());

console.log("\n📊 Ordenados:", sortByNumericProp());

buildReport();