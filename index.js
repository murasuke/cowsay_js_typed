//@ts-check

const said = cowsay.say({ text: 'I am a cow!' });
console.log(said);

/**
 * @param {import('cowsay')} cowsay
 * @param {string} text
 * @returns {string}
 */
function random_think(cowsay, text) {
  return cowsay.think({ text });
}

console.log(random_think(cowsay, '呼んだ?'));
