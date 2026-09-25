// ============================================
// Reto: Operadores lógicos AND, OR y NOT en JavaScript
// ============================================
// Practica AND (&&), OR (||) y NOT (!) para combinar, evaluar y negar condiciones.
// Útil para validaciones, permisos (admin, usuario activo) y flujos de decisión.
// Ejecuta los tests con: npx vitest src/08-logic
// ============================================

// --- Reto 1: AND (&&) ---
// Recibe dos booleanos "a" y "b".
// Retorna el resultado de a && b (true solo si ambas son true).
function resultadoAnd(a, b) {
  return a && b;
}

// --- Reto 2: OR (||) ---
// Recibe dos booleanos "a" y "b".
// Retorna el resultado de a || b (true si al menos una es true).
function resultadoOr(a, b) {
  return a || b;
}

// --- Reto 3: NOT (!) ---
// Recibe un booleano "val".
// Retorna el resultado de !val (invierte: true → false, false → true).
function resultadoNot(val) {
  return !val;
}

// --- Reto 4: Validación con AND (ambas condiciones) ---
// Recibe "esAdmin" y "estaActivo" (booleanos).
// Retorna true solo si es administrador Y está activo (puede ver la lista de usuarios).
function puedeVerListaUsuarios(esAdmin, estaActivo) {
  return esAdmin && estaActivo;
}

// --- Reto 5: Validación con OR (al menos una condición) ---
// Recibe "esUsuarioValido" y "tienePermisoEspecial" (booleanos).
// Retorna true si cumple cualquiera de las dos condiciones (puede acceder).
function puedeAcceder(esUsuarioValido, tienePermisoEspecial) {
  return esUsuarioValido || tienePermisoEspecial;
}

// --- Reto 6: Validación con NOT (negar condición) ---
// Recibe "esAdmin" (booleano).
// Retorna true si NO es administrador (mostrar opción limitada para no admins).
function mostrarOpcionLimitada(esAdmin) {
  return !esAdmin;
}

export {
  resultadoAnd,
  resultadoOr,
  resultadoNot,
  puedeVerListaUsuarios,
  puedeAcceder,
  mostrarOpcionLimitada,
};
