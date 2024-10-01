let pronoun = ['el', 'la','nuestro'];
let adj = ['mejor', 'gran','espectacular'];
let noun = ['pagina', 'web','dominio'];

for(let i = 0; i < pronoun.length; i++) {
    for(let j = 0; j < adj.length; j++) {
      for(let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k]+'.com'); 
      }
    }
  }

  