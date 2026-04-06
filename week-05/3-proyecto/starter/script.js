// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// NOTA PARA EL APRENDIZ:
// Adapta este script a tu dominio asignado.
// Reemplaza los comentarios TODO con tu propia implementación.
// Usa los conceptos aprendidos esta semana.
//
// Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// TODO: Define al menos 5 variables con datos de un elemento de tu dominio.
// Ejemplos orientativos:
// - Un libro, medicamento, miembro, estudiante, producto, etc.
// - Incluye: nombre, estado, valor numérico, tipo (string), y alguna propiedad opcional

const elementName = "Paquete Express #4821";
const elementStatus = "active";
const elementValue = 87;          // % de avance en la entrega o distancia recorrida
const elementType = "express";
const elementInfo = {
  direccionDestino: "Calle 72 #10-34, Bogotá",
  mensajero: "Jorge Ramírez",
  peso: 2.5,
  intentosEntrega: 1
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// TODO: Clasifica el elemento en al menos 3 niveles según elementValue.

let classification = "Sin clasificar"; // TODO: implementar if/else if/else

if (elementValue >= 75){
    classification = "Su pedido esta a punto de llegar";
} else if(elementValue >= 50){
    classification = "Su pedido a recorrido la mitad del recorrido";
}else{
    classification = "Su pedido va en camino";
}
// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// TODO: Usa el ternario para determinar un estado de dos opciones.
// Ejemplo: const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";

const statusLabel = elementStatus = "active" ? "Activo" : "Inactivo"; // TODO: implementar con ternario

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

// TODO: Usa switch sobre elementType para asignar una etiqueta.

let typeLabel = "Sin tipo"; // TODO: implementar con switch
switch(elementType){
    case "express": typeLabel = "Express";
    break;
    case "standard": typeLabel = "Estandar";
    break;
    case "programed": typeLabel = "Programado";
    break;
    case "returned": typeLabel = "Devolución";
    break;
    default: typeLabel = "Sin tipo de envio asignado";
}
// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// TODO: Usa ?? para obtener un valor de fallback cuando sea null o undefined.
// Ejemplo: const displayName = elementName ?? "Sin nombre";

const displayName = elementName ?? "Envio sin nombre";      // TODO: elementName ?? "Sin nombre"
const infoDetail = elementInfo?.price ?? "`Sin información de precio`" ;       // TODO: elementInfo?.detail ?? "Sin información adicional"

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// TODO: Accede de forma segura a una propiedad de elementInfo.
// Ejemplo: const location = elementInfo?.location ?? "Ubicación no especificada";

const safeProperty = elementInfo?.direccionDestino  ?? "Sin Ubicación especifica"; // TODO: elementInfo?.tuPropiedad ?? "valor por defecto"

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

// TODO: Muestra la ficha en consola con template literals (sin concatenación +)
// Incluye todos los resultados de las secciones anteriores

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));
console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Propiedad adicional: ${safeProperty}`);
console.log("=".repeat(40));
