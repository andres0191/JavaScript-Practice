console.log('Hola Mundo')
/* Tipos de datos */

/*  String: cadena de caracteres

    Boolean: true o false
    Null: nulo
    Number: numeros
    Undefined, se diferencia de null porque no esta declarada
    Object: objeto, pude tener una combinacion de los tipos de datos.
    */

/*  Declaracion de variables 

    var:
    let:
    const:

    */
/* Objetos */
console.log('********Objetos*********')
const objeto1 = {
    numero: 3,
    cadena: 'holi',
    condicion: true,
}
console.log(objeto1)
console.log(objeto1.cadena)
/* add element in array */
console.log('*******add element in array********')
const arr=['holi', 1, 4, 6, objeto1]
arr.push(5)
console.log(arr)

/* Min and Max con Math */
console.log('***********Min and Max con Math***********')
const array1 = [1 ,2 ,5 ,7, -2, -9]
const small = Math.min.apply(Math, array1)
const hig = Math.max.apply(Math, array1)
console.log('Min number: ', small)
console.log('Max number: ', hig)


/* Sorting algorithms in Js */
console.log('***********Sorting algorithms in Js***********')

function arrsmall(arr){
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j <= (arr.length); j++){
            var a = arr[j]
            var b = arr[j + 1]
            if (a > b){
                arr[j] = b
                arr[ j + 1] = a
            }console.log(arr)
        }
    }
}

const array2 = [3, 5, -1]
const res1 = arrsmall(array2)

/* arrow function */
console.log('********arrow function*********')
const smallarrfunction = (arr) => {
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j <= (arr.length); j++){
            var a = arr[j]
            var b = arr[j + 1]
            if (a > b){
                arr[j] = b
                arr[ j + 1] = a
            }console.log(arr)
        }
    }
}

const array3 = [1, 2, -1]
const res2 = smallarrfunction(array3)


/* **** sort algorithms other form***** */
console.log('****sort algorithms min to max other form****')
function sortnumber(arr){
    return (arr || []).sort((a,b) => a - b)
    
}

const array4 = [ 1, 7, -3, 4]
const res3 = sortnumber(array4)
console.log(res3)


/* **** sort algorithms other form***** */
console.log('****sort algorithms max to min other form****')
function Maxnumber(arr){
    return (arr || []).sort((a, b) => b - a)
    
}

const array5 = [ 1, 7, -3, 4]
const res4 = Maxnumber(array5)
console.log(res4)

/* conat in the all array  */

console.log('******concat in the array*******')

function addEnding(arr, ending) {
	return(arr.map((x => x.concat(ending))))
}

const array6 = ['clever', 'meek', 'hurried', 'nice']
const ending = 'ly'
const adda=addEnding(array6, ending)
console.log(adda)