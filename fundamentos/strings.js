 const escola = "cod3r";

 console.log(escola.charAt(4));
 console.log(escola.charAt(0));
 console.log(escola.charCodeAt(3));
 console.log(escola.indexOf('3'));
 
 console.log(escola.substring(0, 3));
 console.log(escola.substring(3));

 console.log('Escola '.concat(escola).concat("!"));//concatenado
 console.log(escola.replace(3, 'e'));
 console.log('Escola '  + escola.replace(3, 'e') + '!');//concatenado

 console.log('Ana,Maria,Pedro'.split(','));