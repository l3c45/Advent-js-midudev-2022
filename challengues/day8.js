// Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de repuesto para arreglarlos, pero no tienen claro si las piezas que tienen sirven.

// Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto es válida si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.

//     Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.

// Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla:

// checkPart("uwu") // true
// // "uwu" es un palíndromo sin eliminar ningún carácter

// checkPart("miidim") // true
// // "miidim" puede ser un palíndromo después de eliminar la primera "i"
// // ya que "midim" es un palíndromo

// checkPart("uimidu") // false
// // "midu" no puede ser un palíndromo después de eli

function checkPart(part) {
  const temp = [...part.split("")].reverse().join("");
  if (part === temp) {
    return true;
  } else {
    const a = part.split("");

    for (let i = 0; i < part.length; i++) {
      const b = [...a];
      const element = b.splice(i, 1);
      const reverse = [...b].reverse().join("");
      if (b.join("") === reverse) {
      
        return true;
      }
    }

    return false;
  }
}
