// Sobrescribe el método `toString()` del prototipo de `Boolean`
Boolean.prototype.toString = function() {
    return "Overridden";
  };
  
  console.log(`${true}`); // "true" (El valor primitivo `true` no usa la versión sobrescrita)
  console.log(`${new Boolean(true)}`); // "Overridden" (El objeto `Boolean` usa la versión sobrescrita)
  
  // Ejemplo con `valueOf()`
  // El método `valueOf()` devuelve el valor primitivo del objeto `Boolean`.
  const x = new Boolean(); // `x` es un objeto `Boolean` con valor `false`
  const myVar = x.valueOf(); // `myVar` es el valor primitivo `false`