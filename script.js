// 1  Создать произвольную переменную, присвоить ей значение. C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let varieble = 'Hidden' 
if (varieble == 'Hidden'){
    console.log("visible")
} else{
    console.log("hidden")
}

// 2  Создать переменную и присвоить ей число.
// Записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let number = 1
if (number == 0){
    console.log(number = 1)
}else if (number < 0){
    console.log("less then zero")
}else{
    console.log(number *= 10)
}

// 3  Запросите у пользователя число и запишите его в переменную. 
// (Не забывайте, что от пользователя мы всегда получаем строку).
// Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.
// Выполните это задание, используя тернарный оператор (: ?)

let number = prompt('Введите число!');
let message = (number < 5) ? 0 :
    (number > 5) ? 1 ;

console.log( message );

// 4  Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).

let num1 = Number(prompt('Введите первое число!'));
let num2 = Number(prompt('Введите второе число!'));

if (num1 > num2){
    console.log('Большее число:' + num1)
}else if (num2 > num1){
    console.log('Большее число:' + num2)
}else{
    console.log('Числа равны!')
}

// 5  Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.

let num1 = Number(prompt('Введите первое число!'));
let num2 = Number(prompt('Введите второе число!'));

if (num1 % num2){
    console.log('Нет, числа не являются кратными')
}else{
    console.log('Да, числа являются кратными')

// 6  Запросить у пользователя средний балл, записать в переменную.
// Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).

let num1 = prompt('Введите средний балл!');

if (num1 <= 4){
    alert('Двоечник, иди учись!');
} else if (num1 <= 8){
    alert('Неплохо, но давай еще поднажмем!');
} else if (num1 <= 10){
    alert('Ого, да ты настоящий отличник!');
}  

// 7  Запросить у пользователя ответы на 2 вопроса:
// - балл за экзамен (от 0 до 100)
// - количество выполненных проектов (от 0 и больше)
// Вывести в консоль общий выпускной балл в соответствии с этими значениями:
// - 100, если балл за экзамен более 90 или количество проектов более 10.
// - 90, если балл за экзамен более 75 и количество проектов не менее 5.
// - 75, если балл за экзамен более 50 и количество проектов не менее 2.
// - 0 во всех других случаях.

let num1 = Number(prompt('Введите баллы за экзамены!'));
let num2 = Number(prompt('Введите количество выполненных проектов!'));

if (num1 > 90 || num2 > 10){
    console.log(100)
}else if (num1 > 75 && num2 >= 5){
    console.log(90)
}else if (num1 > 50 && num2 >= 2){
    console.log(75)
} else {
    console.log(0)
}

// 8  День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.
// Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.

let days = Number(prompt('Введите количество дней!'));
let num1 = 40;
let discountsevdays = 50;
let discountthreedays = 20;
 if (days >= 7){
    console.log(days * num1 - discountsevdays)
 } else if (days >= 3){
    console.log(days * num1 - discountthreedays)
 } else{
    console.log(days * num1)
 }

// 9   Создать переменную и записать в нее число, например 10.
// 10 раз увеличивать значение этой переменной на 1. Результат вывести в консоль.

for (let num=10; num < 10 ; num++){
   console.log(num)
}

// 10  Увеличивая счетчик цикла на 2, нужно 5 раз:
// - запрашивать у пользователя ввод числа
// - проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"

for (let i = 0; i < 10; i += 2 ){
    let num = Number(prompt('Введите число!'));
if (num == 10){
    console.log('Равно 10')
} else {
    console.log('Не равно 10')
}
}

// 11  Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...


let num = Number(prompt('Введите число!'));
for (let i = 0; i < num; i++){
    console.log(i * i)
}

// 12  Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

for (let i = 0; i < 100; i++){
    if (i % 3 && i % 5){
        console.log('Fizz')
    } else if (i % 5){
        console.log('Buzz')
    } else if (i % 3){
        console.log('FizzBuzz')
    }
}
