// 1
// Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:
// Math.round(x)
// Math.ceil(x)
// Math.floor(x)
// В комментариях к каждой строке напишите, как работают эти округления.

x = Math.round(5.4)
console.log(x)
x = Math.round(5.5)
console.log(x)
x = Math.round(5.6)
console.log(x)

// если десяток меньше 0.5 , число окр в мен сторону , а если больше 0.5 , число окр в большую ст

x = Math.ceil(5.4)
console.log(x)
x = Math.ceil(5.5)
console.log(x)
x = Math.ceil(5.6)
console.log(x)

// округляет число до бол целого числа

x = Math.floor(5.4)
console.log(x)
x = Math.floor(5.5)
console.log(x)
x = Math.floor(5.6)
console.log(x)

// округляет число до мен целого


// 2
// Выведите в консоль фразы в 2 строки:
// Сегодня 27 октября 2022 (здесь будет ваша дата) - используйте options для вывода месяца словом
// 19 часов 20 минут (здесь будет ваше время) - используйте шаблонную строку, в которую подставьте значения с помощью методов getHours() и getMinutes()

let now = new Date()

let options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}
console.log('Сегодня ' + now.toLocaleString('ru-RU' ,options))

let minute = now.getMinutes()
let hour = now.getHours()
console.log( hour + ' часов ' + minute + ' минут ')