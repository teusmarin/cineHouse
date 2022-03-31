let filmes = require('./database/catalogo.json')


// const filme4 = {
//   codigo: 4,
//   titulo: 'Rambo 2',
//   duracao: 240,
//   genero: 'terror',
//   emCartaz: true
// }
// ​
// filmes.push(filme4)



function buscarFilme(codigo){
  const filmeEncontrado = filmes.find(function (filme) {
      return filme.codigo == codigo
  })
  return filmeEncontrado
}


// function alterarStatus(codigo){
//   let codigo1 = codigo
//   const filmeEncontrado = filmes.find(function (filme) {
//       return filme.codigo == codigo1
//   })
//   return filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
// } 


// console.table (buscarFilme(2))
// console.table(alterarStatus(3))
// console.log(filmes[2])

// ADICIONAR CALLBACK NO LUGAR DO FIND

// function alterarStatus(codigo,callback){
//     let codigo1 = codigo
//     const filmeEncontrado = callback (codigo)
//         return filme.codigo == codigo1{
    
//     return filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
//   } 

//   alterarStatus(5,buscarFilme)

console.log(buscarFilme(2))

