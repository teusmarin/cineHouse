const adicionarHttp = (url) =>("http://" + url)


const processar = (x,opera)=>{
let w =[]
 for (var i = 0;i<x.length;i++){
     (x[i] == x[i])
   w.push(opera(x[i]))
   }
   return w
  }

 


let sites = ["um","dois","tres"]

 console.log(processar(sites,adicionarHttp))


 // usa for each e for of