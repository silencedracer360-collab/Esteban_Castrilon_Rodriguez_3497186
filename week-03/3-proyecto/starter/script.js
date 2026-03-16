// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000

console.log("UrbanDelivery")

const basePrice = 6000
const priceKilometer = 1100
const distanceKm = 5
const deliveries = 3


// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()

const distanceCost = distanceKm * priceKilometer
console.log("Costo por distancia:", distanceCost)

const deliveryPrice = basePrice + distanceCost
console.log("Precio total del envío:", deliveryPrice)

const totalForDeliveries = deliveryPrice * deliveries
console.log("Costo por", deliveries, "envíos:", totalForDeliveries)

const averageCost = totalForDeliveries / deliveries
console.log("Costo promedio por envío:", averageCost)

const remainderExample = deliveries % 2
console.log("Residuo de dividir envíos entre 2:", remainderExample)

const squaredDistance = distanceKm ** 2
console.log("Distancia al cuadrado (ejemplo cálculo):", squaredDistance)

console.log("");


// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación

let runningTotal = 0
console.log("Total inicial:", runningTotal)

runningTotal += deliveryPrice
console.log("Tras primer envío:", runningTotal)

runningTotal += deliveryPrice
console.log("Tras segundo envío:", runningTotal)

runningTotal *= 0.9
console.log("Aplicando descuento del 10%:", runningTotal)

runningTotal -= 1000
console.log("Aplicando cupón de descuento:", runningTotal)

runningTotal /= 2
console.log("Dividiendo costo entre dos clientes:", runningTotal)

console.log("");


// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

const maxDistance = 10

const isExactDistance = distanceKm === 5
console.log("¿La distancia es exactamente 5 km?", isExactDistance)

const isLongDistance = distanceKm > maxDistance
console.log("¿Es un envío de larga distancia?", isLongDistance)

const isCheapDelivery = deliveryPrice < 15000
console.log("¿Es un envío económico?", isCheapDelivery)

console.log("");


// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

const isAvailableCourier = true
const isShortDistance = distanceKm <= 10

const canDeliver = isAvailableCourier && isShortDistance
console.log("¿Se puede realizar el envío?", canDeliver)

const needsSpecialApproval = distanceKm > 20 || deliveryPrice > 30000
console.log("¿Requiere aprobación especial?", needsSpecialApproval)

const isCourierUnavailable = !isAvailableCourier
console.log("¿El mensajero no está disponible?", isCourierUnavailable)

console.log("");


// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
// calculados en las secciones anteriores

console.log("Precio base:", basePrice)
console.log("Precio por km:", priceKilometer)
console.log("Distancia:", distanceKm)
console.log("Precio final del envío:", deliveryPrice)
console.log("Costo total por envíos:", totalForDeliveries)

console.log("");