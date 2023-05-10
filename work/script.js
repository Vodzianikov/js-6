// 4) Запросить 2 строки и сравнивнить их длину. Вывести 1, если в первой строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.

// let str1 = prompt('Введите первую строку');
// let str2 = prompt('Введите вторую строку');

// if (str1.length > str2.length) {
//     console.log('1');
// } else if (str1.length < str2.length) {
//     console.log('-1');
// } else {
//     console.log('0');
// }

// 6) Запросите строку из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

// let str = prompt('Введите число из 3 символов');

// let sum = 0;

// for (let i = 0; i < str.length; i++) {
//     sum += +str[i];
// }

// console.log(sum);

// 9) Дана строка 'Я-учу-javascript!'. Замените все дефисы на ' '

// let str = 'Я-учу-javascript!';

// console.log(str.replaceAll('-', ' '));

// array

// создание массива с помощью литерала
// const arr = [1, 2, "3", 4, true, ["2", 50], "Петя"];

// const arr2 = new Array();

// const arr3 = Array.of('one', 'two');

// const arr4 = Array.from('Hello');

// arr.length = 50;

// console.log(arr);
// console.log(typeof arr);


// ссылочный тип данных
// const arr1 = [1,2,3];
// const arr2 = [1,2,3];
// const arr3 = arr1;

// arr3[3] = 4;

// console.log(arr1 === arr2);
// console.log(arr3 === arr1);

// console.log(arr1);
// console.log(arr3);

// const arrCopy = [];
// for (let i = 0; i < arr1.length; i++) {
//     arrCopy[i] = arr1[i];
// }

// console.log(arrCopy === arr1);


const movies = ['Гарри Поттер', 'Властелин колец', 'Железный человек', 'Форсаж', 'Человек паук'];


for (let i = 0; i < movies.length; i++) {
    // console.log(movies[i]);
}

// delete movies[1];

// console.log(movies);

// проверка на массив
// console.log(Array.isArray(movies))


// .split() - метод СТРОКИ, возвращает массив!
// const str = 'я учу JavaScript';

// let result = str.split(' ').reverse().join(' ');

// console.log(result);



// .push() - возвращает новую длину массива, мутирует массив, добавляет элементы в конец массива
// let arrPush = movies.push('Форсаж', 'Человек паук');
// console.log(arrPush);


// .pop() - возвращает удаленный элемент, удаляет элемент в конце массива, мутирует исходный массив

// let arrPop = movies.pop();
// console.log(arrPop);



// .shift() - возвращает удаленный элемент, удаляет в начале массива, мутирует исходный массив

// let arrShift = movies.shift();
// console.log(arrShift);



// .unshift() - возвращает новую длину, добавляет элементы в начало массива, мутирует исходный массив
// let arrUnshift = movies.unshift('Форсаж', 'Один дома');
// console.log(arrUnshift);



// .concat() - возвращает новый массив, исходный не мутирует
// let arrConcat = movies.concat('Семейка Адамс');
// console.log(arrConcat);



// .join() - возвращает новую строку, содержащую элементы массива
// let arrJoin = movies.join();
// console.log(arrJoin);



// .slice(start, end) - возвращает новый массив, исходный не мутирует, копирует элементы из массива start (включительно) до end (не включительно)
// если без аргументов, то копирует весь массив
// let arrSlice = movies.slice(1,2);
// console.log(arrSlice);



// .indexOf() - возвращает индекс искомого элемента массива
// возвращается -1 - если элемент не найден
// let arrIndexof = movies.indexOf('test');
// console.log(arrIndexof);


// .includes() - возвращает true или false
// let arrIncludes = movies.includes('Железный человек');
// console.log(arrIncludes);


// .reverse() - мутирует исходный массив, обращает порядок следования элементов
// let arrReverse = movies.reverse();
// console.log(arrReverse);


// .at() - возвращает элемент по индексу, можно отрицательные - тогда считает с конца
// let arrAt = movies.at(2);
// console.log(arrAt);



// .fill() - если вызвать на массиве с данными, то он их перезапишет, мутирует исходный массив
// const filledArr = movies.fill(2);
// console.log(filledArr);




// .splice() - если без аргументов - новый пустой массив
// 1й аргумент - индекс с которого удалять
// удаляет из исходного и возвращает новый массив с удаленными элементами
// 2й аргумент - количество элементов для удаления

// const movies = ['Гарри Поттер', 'Властелин колец', 'Железный человек', 'Форсаж', 'Человек паук'];


// let splicedArr = movies.splice(1, 3, 'Один дома', 'Бэтмэн', 'Два', 'Три');
// console.log(splicedArr);


console.log(movies.length);