
//los días se deben ingresar como tipo String y los valores de los productos a_
//comprar se deben trabajar con arreglos, por ejemplo = [1000,500,650,8000]


//Ejercicio 1
/*
Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento
*/
var valores = [1000,500,650,8000] //lista de valores
function descuento(valor,Dia){ 
    var suma = valor.reduce((acum, valorTotal) => acum + valorTotal,); //funcion reduce() que suma todos los valores de un array
 if(Dia == "Martes" || Dia == "Jueves"){
        //aplicar descuento
        var valorDescuento = suma * 0.20 // esto hace el descuento
        var valorTotal = suma - valorDescuento //esto resta al valor total el descuento
        return console.log(valorTotal)
    }
    else{
        return console.log(suma) //muestra el valor total de la compra
    }

}
descuento(valores,"Jueves")

//VAMONOS FUNCIONA BIEN :)

//Ejercicio 2
//Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
//menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
//total verificando si corresponde o no el descuento.

var carritoDeCompra = [30000,20000,50000] //lista de valores
function masDeTresProductos(lista){
    if((lista.length) >= 3){ //si el largo de la lista es mayor o igual a tres entra
        suma1 = lista.reduce((acum, valorTotal) => acum + valorTotal,); //funcion reduce() que suma todos los valores de un array
        let descuento = suma1 * 0.05 //hace el descuento
        let valorTotal = suma1 - descuento //resta el descuento
        return console.log(valorTotal)
    }else{
        suma2 = lista.reduce((acum, valorTotal) => acum + valorTotal,); //suma el carrito de compra
        console.log("El total de su compra es " + suma2) 
    }
}
masDeTresProductos(carritoDeCompra)
//Funciona rebien , tratare de hacerlo con for, no alcanzo por tiempo :(



//Ejercicio 3
/*Se desea tener una función verificadora encargada de revisar 
si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos
 ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso
 contrario debe retornar
un mensaje de error junto con el número negativo y el índice en 
el que se encontraba.
*/
function verificar(compra){
    if(compra>0){ // si la compra es mayor a cero
        return console.log("El valor es positivo exito")
    }
    else{
        return console.log("El valor ingresado " + compra +" es negativo")
    }
}
verificar(-3)

//Bien :)

//Ejercicio 4
//Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
//producto
//○ Crea una función que retorne el valor del producto más costoso.
//○ Crea una función que retorne el valor del producto menos costoso.

var arr=[200,5500,900,7000,500,300]
function productoMasCostoso(num){
        var mayor = num[0]
        for(i=0;i<=arr.length;i++){
            if(mayor<num[i]){
            mayor = num[i]
        }
     } return console.log(mayor)
}
function productoMasBarato(num){
    var menor = num[0]
        for(i=0;i<=arr.length;i++){
            if(menor>num[i]){
              menor = num[i]

            }
        }return console.log(menor) 
    }     
productoMasBarato(arr)
productoMasCostoso(arr)

//Funciona...Excelente 
