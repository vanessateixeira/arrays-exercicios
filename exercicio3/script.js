    let meusNumeros = [10, 4,8,6,14]
    let meusNumeros2 = [11,13,7,3,1]
    const cidades = ['São Paulo', 'Porto Alegre', 'Salvador']


function listas(array1,array2,array3){
    let meusNumerosCopia = meusNumeros.slice()
    let meusNumeros2Copia = meusNumeros2.slice()
    let cidadesCopia = cidades.slice()

    
    meusNumerosCopia.unshift(2)
    console.log(meusNumeros)
    console.log(meusNumerosCopia)

    meusNumeros2Copia.pop()
    console.log(meusNumeros2)
    console.log(meusNumeros2Copia)

    cidadesCopia.splice(1,1)
    console.log(cidades)
    console.log(cidadesCopia)

}

listas()