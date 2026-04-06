// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Mensajería Urbana
// ============================================

"use strict";

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "Mensajería Urbana";
const VALUE_LABEL = "precio";
const CURRENCY = "$";

// Datos de envíos
const items = [
  { id: 1, name: "Envío Centro", category: "express", value: 8000, distance: 3, active: true },
  { id: 2, name: "Envío Norte", category: "normal", value: 6000, distance: 5, active: true },
  { id: 3, name: "Envío Sur", category: "económico", value: 5000, distance: 4, active: false },
  { id: 4, name: "Envío Oficina", category: "express", value: 10000, distance: 6, active: true },
  { id: 5, name: "Envío Documentos", category: "normal", value: 5500, distance: 2, active: true }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatItem = (envio) => {
  return `📦 ${envio.name} [${envio.category}] — Distancia: ${envio.distance}km — ${CURRENCY}${envio.value}`;
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// Calcula precio según distancia (simulación simple)
const calculateValue = (price, distance = 1) => {
  return price + (distance * 1000);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// Un envío es válido si está activo
const isValid = (envio) => {
  return envio.active === true;
};

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, currency = CURRENCY) => {
  return `${label}: ${currency}${value}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\n⚠️  No hay elementos. Agrega datos en la Sección 1.");
} else {
  // --- Listado ---
  console.log("\n📋 Listado:");
  let lineNumber = 1;
  for (const item of items) {
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;
  for (const item of items) {
    if (isValid(item)) {
      validCount++;
    }
  }
  console.log(`\n✅ Envíos válidos: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;
  for (const item of items) {
    totalValue += calculateValue(item.value, item.distance);
  }

  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);