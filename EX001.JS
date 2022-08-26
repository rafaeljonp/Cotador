function contar(){

var inicio = document.getElementById ('txt1')
var fim = document.getElementById ('txt2')
var passo = document.getElementById ('txt3')
var res = document.getElementById ('res')
 
if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
                window.alert('[ERRO] Faltam dados!')
                res.innerHTML = 'Impossivel contar.'

 
} else {
                res.innerHTML = 'Contando: '
                var i = Number(inicio.value) /* Var ... Number(ini.value) Convertendo primeira variavel de txt para num*/
                var f = Number(fim.value) /* Var ... Number(fim.value) Convertendo primeira variavel de txt para num*/
                var p = Number(passo.value) /* Var ... Number(passo.value) Convertendo primeira variavel de txt para num*/
                if (p <= 0) {
                    window.alert ('Passo invalido! CONSIDERANDO PASSO 1')
                        P = 1
                } 
               
                if (i < f) {              
                               // Contagem crescente
                               for(let c = i; c <= f; c +=p) {
                                res.innerHTML += `${c} \u{27A1}`
                               }
                } else {
                               // Contagem regressiva
                               for(let c = i; c >= f; c -= p)
                               res.innerHTML += `${c} \u{27A1}`
                }
                res.innerHTML += `\u{1f3c1}`
}


}
