// Papa Noél está un poco preocupado porque los preparativos están llevando mucho tiempo. Hace poco se ha sacado una certificación de Scrum y ha decidido usar la metodología para organizar el trabajo de sus elfos.

// Le dicen la duración esperada de las tareas con un string con el formato hh:mm:ss y en el mismo formato cuánto tiempo llevan trabajando en ella.

// Pero Papa Noél no se entera rápidamente si falta o mucho para que termine, así que nos ha pedido que hagamos un programa que nos indique la porción de la tarea que ya se ha completado.

// Por ejemplo, si la tarea dura 03:00:00 y llevan trabajando 01:00:00 entonces ya han completado 1/3 de la tarea. En código:

// getCompleted('01:00:00', '03:00:00') // '1/3'
// getCompleted('02:00:00', '04:00:00') // '1/2'
// getCompleted('01:00:00', '01:00:00') // '1/1'
// getCompleted('00:10:00', '01:00:00') // '1/6'
// getCompleted('01:10:10', '03:30:30') // '1/3'
// getCompleted('03:30:30', '05:50:50') // '3/5

// Ten en cuenta:

//     El formato de la hora es hh:mm:ss.
//     El formato de la salida es un string a/b donde a es la porción de la tarea que ya se ha completado y b es la porción de la tarea que falta por completar.
//     La porción siempre se muestra con la menor fracción posible. (por ejemplo, nunca se mostraría 2/4 porque se puede representar como 1/2).
//     Si ya se ha completado la tarea, la fracción sería 1/1.
//     Ningun elfo ha sido maltradado durante la ejecución de este reto ni han tenido que usar Scrum de verdad.

//getCompleted('01:00:00', '03:00:00')
//getCompleted('02:20:20', '03:30:30')  2/3
function getCompleted(part, total) {
  const [horaP, minutoP, segundosP] = part.split(":");
  const [horaT, minutoT, segundosT] = total.split(":");
  const segundosParcial =
    parseInt(segundosP) + parseInt(minutoP) * 60 + parseInt(horaP) * 60 * 60;
  const segundosTotal =
    parseInt(segundosT) + parseInt(minutoT) * 60 + parseInt(horaT) * 60 * 60;

  const divisores = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numerador = divisores.reduce((acc, val) => {
    if (segundosParcial % val === 0) {
      acc.push(val);
      return acc;
    }
    return acc;
  }, []);

  if (segundosTotal % segundosParcial === 0) {
    return `${1}/${segundosTotal / segundosParcial}`;
  } else {
    for (let index = 0; index < numerador.length - 1; index++) {
      if (segundosTotal % (segundosParcial / numerador[index]) === 0) {
        console.log(numerador[index]);
        let den = segundosTotal / (segundosParcial / numerador[index]);
        return `${numerador[index]}/${den}`;
      }
    }
  }
}
