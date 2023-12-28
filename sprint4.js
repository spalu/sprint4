//Podstawy funkcji w JavaScript.

// Wyświetl wyniki w konsoli

//PODSTAWY FUNKCJI:

// 1. Napisz funkcję dodającą dwie liczby
console.log("PODSTAWY FUNKCJI zadanie 1");

function sumOfTwoNumbers(a, b){
    const sum = a + b;
    return sum;
}
const sum = sumOfTwoNumbers(16, 30);
console.log(sum);
// 2. Napisz funkcję zwracającą długość tablicy
console.log("PODSTAWY FUNKCJI zadanie 2");

function lengthTable() {
    const tablica = ["Marek", "Krzysiek", "Oliwia"];
    const arrayLength = tablica.length;
    return arrayLength;  
}
const arrayLength = lengthTable();
console.log(arrayLength);
// 3. Napisz funkcję sprawdzającą, czy liczba jest parzysta
console.log("PODSTAWY FUNKCJI zadanie 3");

function parity(c) {
    const number = (c % 2 == 0) ? "Parzysta" : "Nieparzysta";
    return number;
}
const parityNumber = parity(6);
console.log(parityNumber);
// 4. Napisz funkcję obliczającą pole kwadratu
console.log("PODSTAWY FUNKCJI zadanie 4");

function square(d){
    const squareArea = d * d;
    return squareArea;
}
const squareArea = square(4);
console.log(squareArea);

// 5. Napisz funkcję zwracającą odwrotność liczby
console.log("PODSTAWY FUNKCJI zadanie 5");

function inverse(e) {
    const inverseNumber = "1/" + e;
    return inverseNumber;
}
const inverseNumber = inverse(5);
console.log(inverseNumber);
// 6. Napisz funkcję konwertującą stopnie Celsjusza na Fahrenheita
console.log("PODSTAWY FUNKCJI zadanie 6");

function celsiusFahrenheit(degrees){
    const exchange = degrees * 2 + 30;
    return exchange; 
}
const exchange = celsiusFahrenheit(30);
console.log(exchange);
// 7. Napisz funkcję zwracającą pierwszy element tablicy
console.log("PODSTAWY FUNKCJI zadanie 7");

function firstElement(table) {
    const element = table[0];
    return element;
}
const fruits = ["apple", "orange", "banana"];
const firstElementTable = firstElement(fruits);
console.log(firstElementTable);
// 8. Napisz funkcję łączącą dwa ciągi znaków, utwórz warunek który sprawdzi czy argumenty są typu string
console.log("PODSTAWY FUNKCJI zadanie 8");

function isString(stringOne, stringTwo) {
    if(typeof(stringOne, stringTwo) === "string"){
        const connection = stringOne + " " + stringTwo;
        return connection;
    }else {
        return "Argumenty nie są typu string";
    }
}
const textIsString = isString("Marek", 123);
console.log(textIsString);
// 9. Napisz funkcję zwracającą typ zmiennej
console.log("PODSTAWY FUNKCJI zadanie 9");

function variableType(value) {
    const type = typeof(value);
    return type;
}
const type = variableType(true);
console.log(type);
// 10. Napisz funkcję zwracającą absolutną wartość liczby
console.log("PODSTAWY FUNKCJI zadanie 10");

function absoluteValue(number) {
    if(number < 0){
        const absoluteValueNumber = number * -1;
        return absoluteValueNumber;
    } else {
        return number;
    }
}
const absoluteValueNumber = absoluteValue(-25);
console.log(absoluteValueNumber);
//PODSTAWY PĘTLI:

// 1. Napisz funkcję, która będzie miała pętlę for, która wyświetli liczby od 1 do 10
console.log("PODSTAWY PĘTLI zadanie 1");

function fromOneToTen() {
    for(let i = 1; i<=10; i++){
        console.log(i);
    }
}
fromOneToTen();
// 2. Napisz funkcję, która będzie używać pętli while do wyświetlenia liczb parzystych mniejszych od 20
console.log("PODSTAWY PĘTLI zadanie 2");

function evenGreaterThanTwenty(){
    let x = 1;
        while(x <= 20) {
            if (x % 2 === 0){
                console.log(x);
            }
            x++;
        }
}
evenGreaterThanTwenty();
// 3. Napisz funkcję, która użyje pętli do while do wyświetlenia liczb od 10 do 1
console.log("PODSTAWY PĘTLI zadanie 3");

function tenToOne() {
    let i = 10;
    do {
        console.log(i);
        i--;
    } while (i>0);
}
tenToOne();
// 4. Napisz funkcję, która użyje pętli while i break do przerwania pętli po osiągnięciu liczby 5
console.log("PODSTAWY PĘTLI zadanie 4");

function whileBreak() {
    let x = 1;
    while(x>0) {
        console.log(x);
        if(x === 5){
            break;
        }
        x++;
    }
}
whileBreak();
// 5. Napisz funkcję, która użyje pętli for in do iteracji po właściwościach obiektu
console.log("PODSTAWY PĘTLI zadanie 5");

function iterationObject(object) {
    for(let key in object){
        console.log(object[key]);
    }
}
const person = {
    name: "Maciek",
    age: 20,
    hobby: "sport"
};
iterationObject(person);
// 6. Napisz funkcję, która użyje pętli for of do iteracji po elementach tablicy
console.log("PODSTAWY PĘTLI zadanie 6");

function iterationTable(tb) {
    for(let value of tb){
        console.log(value);
    }
}
const cars = ["BMW", "Mercedes", "Audi"];
iterationTable(cars);
// 7. Napisz funkcję, która użyje pętli for do obliczania sumy elementów tablicy
console.log("PODSTAWY PĘTLI zadanie 7");
function sumElementsTable(table) {
    for(let i = 0; i <= table.length; i++) {
        if(i === table.length) {
            console.log(i);
        }
    }
}
const models = ["A4", "A6", "A8", "A3", "A1", "A5", "A2"];
sumElementsTable(models);

// 8. Napisz funkcję, która użyje pętli while do odwrócenia ciągu znaków
console.log("PODSTAWY PĘTLI zadanie 8");

function reverseString(text) {
    let newText = "";
    for(let i = text.length - 1; i >= 0; i--) {
        newText += text[i];
    }
    console.log(newText);
}
reverseString("Merry Christmas");

// 9. Napisz funkcję, która użyje pętli for of do znalezienia największej liczby w tablicy
console.log("PODSTAWY PĘTLI zadanie 9");

function biggestNumber(table) {
    let max = table[0];
    for(let number of table) {
        if(number > max)
        {
            max = number;
        }
    }
    console.log(max);
}
numbers = [1, 4, 2, 5, 3, 10, 15, 7, 25, 8];
biggestNumber(numbers);
// 10. Napisz funkcję, która użyje pętli for in do wyświetlenia par klucz-wartość tablicy obiektów
console.log("PODSTAWY PĘTLI zadanie 10");

function keyValue(object) {
    for(let key in object) {
        console.log(key + " " + object[key]);
    }
}
const auto = {
    brand: "Audi",
    model: "A4",
    engine: "3.0"
};
keyValue(auto);
//PODSTAWOWE METODY NA TABLICACH:

// 1. Napisz funkcję, która doda element na koniec tablicy używając metody push
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 1");

function addElementPush(table, element) {
    table.push(element);
    console.log(table);
}
let vegetables = ["carrot", "potatoe", "salad", "onions"];
addElementPush(vegetables, "garlic");

// 2. Napisz funkcję, która usunie ostatni element tablicy używając metody pop
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 2");

function removedElementPop(table) {
    table.pop();
    console.log(table);
}
let tractors = ["New Holland", "John Deer", "Kubota", "Deutz Fahr"];
removedElementPop(tractors);

// 3. Napisz funkcję, która usunie pierwszy element tablicy używając metody shift
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 3");

function addElementShift(table) {
    table.shift();
    console.log(table);
}
let owoce = ["jabłko", "brzoskwinia", "pomarańcza"];
addElementShift(owoce);
// 4. Napisz funkcję, która doda element na początek tablicy używając metody unshift
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 4");

function removedElementUnshift(table, element) {
    table.unshift(element);
    console.log(table);
}
let warzywa = ["marchewka", "burak", "ziemniak"];
removedElementUnshift(warzywa, "cebula");
// 5. Napisz funkcję, która użyje metody push, aby dodać dwa elementy na koniec tablicy
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 5");

function twoElementPush(table, firstElement, secondElement) {
    table.push(firstElement, secondElement);
    console.log(table);
}
let modelsRenault = ["Twingo", "Espace", "Clio"];
twoElementPush(modelsRenault, "Traffic", "Master");
// 6. Napisz funkcję, która dwukrotnie użyje metody pop, aby usunąć dwa ostatnie elementy tablicy
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 6");

function twoElementPop(table) {
    for(i = 1; i <= 2; i++) {
        table.pop();
    }
    console.log(table);
}
let modelsMercedes = ["C", "E", "GLA", "GLS"];
twoElementPop(modelsMercedes);
// 7. Napisz funkcję, która dwukrotnie użyje metody shift, aby usunąć dwa pierwsze elementy tablicy
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 7");

function twoElementShift(table) {
    for(i = 1; i <= 2; i++) {
        table.shift();
    }
    console.log(table);
}
let modelsBmw = ["series 3", "series 5", "series 7", "series 1"];
twoElementShift(modelsBmw);
// 8. Napisz funkcję, która dwukrotnie użyje metody unshift, aby dodać dwa elementy na początek tablicy
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 8");

function twoElementUnshift(table, firstElement, secondElement) {
    table.unshift(firstElement, secondElement);
    console.log(table);
}
let modelsPeugeot = ["207", "107"];
twoElementUnshift(modelsPeugeot, "307", "207CC");
// 9. Napisz funkcję, która użyje metody push do dodania elementu, a następnie metody pop do usunięcia elementu z tablicy
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 9");

function pushPopElements(table, element) {
    table.push(element);
    console.log(table);
    table.pop();
    console.log(table);
}
let modelsCitroen = ["C3", "C4", "C5"];
pushPopElements(modelsCitroen, "C6");
// 10. Napisz funkcję, która użyje metody unshift do dodania elementu, a następnie metody shift do usunięcia elementu z tablicy
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 10");

function ShiftUnshiftElements(table, element) {
    table.unshift(element);
    console.log(table);
    table.shift();
    console.log(table);
}
let modelsVolkswagen = ["Fox", "Jetta", "Passat"];
ShiftUnshiftElements(modelsVolkswagen, "LT");
// 11. Napisz funkcję, która przy użyciu metody map zwiększy każdy element tablicy o 1
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 11");

function plusOneMap(table) {
    newTable = table.map(function(number) {
        return number + 1;
    })
    console.log(newTable);
}
let notes = [1, 2, 4, 5, 3, 5];
plusOneMap(notes);
// 12. Napisz funkcję, która przy użyciu metody filter zwróci tylko parzyste liczby z tablicy
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 12");

function evenNumbersFilter(table) {
    newTable = table.filter(function(number) {
        if(number % 2 === 0){
            return number;
        }
    })
    console.log(newTable);
}
let liczby = [4, 3, 10, 6, 7, 25, 352];
evenNumbersFilter(liczby);
// 13. Napisz funkcję, która przy użyciu metody map podwoi każdy element tablicy
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 13");

function timesTwoMap(table) {
    newTable = table.map(function(number) {
        return number * 2;
    })
    console.log(newTable);
}
let numery = [2, 5, 3, 10, 273];
timesTwoMap(numery);
// 14. Napisz funkcję, która przy użyciu metody filter zwróci elementy tablicy większe niż 10
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 14");

function greaterThanTenFilter(table) {
    newTable = table.filter(function(number) {
        if(number > 10) {
            return number;
        }
    })
    console.log(newTable);
}
let arr = [3, 4, 5, 1234, 34, 1, 0, 50, 10];
greaterThanTenFilter(arr);
// 15. Napisz funkcję, która przy użyciu metody split podzieli podany ciąg znaków na słowa
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 15");

function splitString(string) {
    newTable = string.split(" ");
    console.log(newTable);
}
splitString("Uwielbiam programować szczególnie z Devstock");
// 16. Napisz funkcję, która przy użyciu metody map zamieni każdy element tablicy na jego długość
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 16");

function elementsLengthMap(table) {
    newTable = table.map(function (string) {
        return string.length;
    })
    console.log(newTable);
}
let teksty = ["Marek", "auta", "Warszawa", "Mirosławiec"];
elementsLengthMap(teksty);

// 17. Napisz funkcję, która przy użyciu metody filter zwróci tylko nieparzyste liczby z tablicy
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 17");

function notEvenNumbersFilter(table) {
    newTable = table.filter(function(number) {
        if(number % 2 !== 0){
            return number;
        }
    })
    console.log(newTable);
}
let numerki = [1, 3, 10, 6, 7, 25, 352, 245];
notEvenNumbersFilter(numerki);

// 18. Napisz funkcję, która przy użyciu metody map zwróci kwadraty każdego elementu tablicy
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 18");

function squareMap(table) {
    newTable = table.map(function(number) {
        return number * number;
    })
    console.log(newTable);
}
let arrNumber = [2, 5, 3, 10, 273];
squareMap(arrNumber);
// 19. Napisz funkcję, która przy użyciu metody filter zwróci tylko te słowa z ciągu znaków, które mają więcej niż 3 litery
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 19");

function stringMoreThanThreeLetters(table) {
    newTable = table.filter(function (string) {
        if(string.length > 3) {
            return string;
        }
    })
    console.log(newTable);
}
let slowa = ["Marek", "bal", "miasto", "Koszalin", "sok", "lipa"];
stringMoreThanThreeLetters(slowa);
// 20. Napisz funkcję, która przy użyciu metody map zwróci każdy element tablicy zapisany wielkimi literami
console.log("PODSTAWOWE METODY NA TABLICACH zadanie 20");

function upperCaseMap(table) {
    newTable = table.map(function (string) {
        let newString = string.toUpperCase();
        return newString;
        })
    console.log(newTable);
}
let slowaDwa = ["Marek", "Balet", "miaSto", "Koszalin", "Impreza", "lipa"];
upperCaseMap(slowaDwa);

//Przepraszam za uzywanie polskich nazw tablic i elemntów, ale nie miałem juz pomyslow na nazwy (: Pozdrawiam!
