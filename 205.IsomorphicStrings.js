var s = 'foo'
var t = 'baa'
var mapaS = mapear(s)
var mapaT = mapear(t)
if (s.length != t.length){
    return false
} else {
    let letra = s[i]
    var arrayS = []
    arrayS = mapaS.letra
}

function mapear (string){
    let mapa = {}
    let letra = ''
    for (i=0; i<string.length; i++){
        letra = string[i]
        if (mapa[letra]){
            mapa[letra].push(i)
        } else {
            mapa[letra] = [i]
        }
    }
    return mapa
}

function arrayMapa (string, mapa){
    
}
/*
    Então, eu queria acessar SÓ os valores de cada propriedade do objeto, só os índices
    Tenho que ver se eu consigo fazer isso na função mapear
    Quaaaaase certeza que eu tenho que mapear as strings
    Talvez eu to querendo usar muita função
*/