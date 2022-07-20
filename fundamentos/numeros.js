 const peso1 = 1.0;
 const peso2 = 2.0;

 console.log(peso1, peso2);

 const avaliacao1 = 9.871;
 const avaliacao2 = 6.871;

 const total = avaliacao1 * peso1 + avaliacao2 * peso2;
 const media = total / (peso1 + peso2);

console.log(media.toFixed(3)); // mostra o resultado com menos casas decimais.
console.log(media.toString()); // mostra o numero em extenso.
console.log(typeof media); // mostra qual tipo de dado é.
console.log(typeof Number);
