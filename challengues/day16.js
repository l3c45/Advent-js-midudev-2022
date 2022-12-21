// Papá Noel está empezando a recibir un montón de cartas pero tienen un montón de problemas de formato. Para mejorar la lectura, va a escribir un programa que, dado un texto, lo formatea de acuerdo a las siguientes reglas:

//     Eliminar espacios al inicio y al final
//     Eliminar múltiples espacios en blanco y dejar sólo uno
//     Dejar un espacio después de cada coma
//     Quitar espacios antes de coma o punto
//     Las preguntas sólo deben terminar con un signo de interrogación
//     La primera letra de cada oración debe estar en mayúscula
//     Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
//     Poner un punto al final de la frase si no tiene puntuación

// Las cartas las escriben inglés y aquí tenemos un ejemplo:

// fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
// // Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

// fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
// // Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?

// A tener en cuenta:

//     No te tienes que preocupar por los signos de puntuación que no sean coma, punto o interrogación.
//     Asegúrate de respetar los saltos de línea y espacios originales.

function fixLetter(letter) {
  const endDot = /[?||.||!]$/g;
  const santa = /(santa claus)/gi;
  const interrogation = /[?]+/g;
  const spaceBeforeDot = /\s[.]/g;
  const spaceBeforeInterr = /\s[?]/g;
  const spaceBeforeComa = /\s[,]/g;
  const coma = /[,]/g;
  const multipleSpace = /\s{2,5}/g;
  const firstUpper = /(^\w{1})|([.||?||!]\s+\w{1})/g;

  const replaces = letter
    .trim()
    .replaceAll(coma, ", ")
    .replaceAll(multipleSpace, " ")
    .replaceAll(interrogation, "?")
    .replaceAll(spaceBeforeComa, ",")
    .replaceAll(spaceBeforeInterr, "?")
    .replaceAll(spaceBeforeDot, ".")
    .replaceAll(santa, "Santa Claus")
    .replace(firstUpper, (letra) => letra.toUpperCase());
  
    const b = replaces.concat(endDot.test(replaces) ? "" : ".");

  return b;
}
