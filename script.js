let arr = ['Aleksey' , 'Kartoshka', 'Margarita' , 'Morgenshtern', 'Monica']

let int = prompt('')

arr.splice(int , 1 )

if(int <= 4 ) {
   console.log( arr);
} else if(int >= 5 )
{
  alert('Данное число не существует')
}






let arr_2 = [1, 2, false, 'hello', 24, 54 , 46 , 'world', undefined, null, 'error', 22]

let num = []

arr_2.filter(item => typeof(item) === 'number' )

num.push =( 1, 2, 24, 54, 46, 22  )

if( num === num) {
   console.log('good');
} else {
   console.log('bad');
}




// let arr = [[{ a: { price: 20 } }][{ a: { price: 35 } }][{ a: { price: 44 } }]]
 
let price = +prompt('')
let a = +prompt('')
let discount_1 = 20
let discount_2 = 35
let discount_3 = 44

let total_1 = price / 20
let product_1 = a / total_1

let total_2 = price / 35
let product_2 = a / total_2

let total_3 = price / 44
let product_3 = a / total_3

let income = product_1 + product_2 + product_3

let total = income

console.log(total);


