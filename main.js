// !Baxtiyorov Muhammadqodir
// !!! Ushbu imtihon masalalarini ishlashda HTMLga ulanib
// natija tekshirib ko'rilmasin. Shunchaki kodlarni o'zi yozilsin
// xolos.

// 1-task
// Promptdan gap qabul qilinsa, ushbu gapda
// necha marotaba a harfi ishtirok etganini aniqlang.
// Namuna:
// aHarfi("salom dunya") => 2;
// aHarfi("bugun dars qildim") => 1;

/** function aHarfiniSana(str) {
  let harflar = str.split("");
  let aHarflariSoni = 0;
  harflar.forEach((element) => {
    if (element === "a" || element === "A") {
      aHarflariSoni++;
    }
  });
  return aHarflariSoni;
}

// Test
let kiritilganMatn = prompt("Matnni kiriting: ");
let aHarflariSoni = aHarfiniSana(kiritilganMatn);
console.log(aHarflariSoni);
*/

// 2-task
// Promptdan 5ga bo'linadigan son kiritilsa, ushbu sondan
// keyin keladigan 5ga bo'linadigan sonni chiqaring. Agar promptdan
// kiritilgan son beshga bo'linmasa, son 5ga bo'limaydi deng.
// Namuna:
// keyingiSon(20) => 25;
// keyingiSon(12) => "Son 5ga bo'linmaydi!";

/*// ! Qisqaroq
const keyingiSon = (son) => (son % 5 === 0 ? son + 5 : "son 5ga bo'limaydi");
// ! Uzunroq
// function keyingiSon(son) {
//   if (son % 5 === 0) {
//     return son + 5;
//   }
//   return "son 5ga bo'limaydi";
// }

// Test
let kiritilganQiymat = +prompt("Sonni kiriting: ");
let natija = keyingiSon(kiritilganQiymat);
console.log(natija);
*/

// 3-task
// Arrayni ichidagi barcha sonlar bir xil sonlar
// ekanligini tekshiradigan funksiya yasang.
// Namuna:
// equal([1,1,1]) => true
// equal([1,2,1]) => false

/*function hammaElementlarTengmi(arr) {
  let tengmi = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      tengmi = false;
      break;
    }
  }
  return tengmi;
}

// Test
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 1, 1, 1, 1, 1];
let barchaElementlarTengmi = hammaElementlarTengmi(arr1);
console.log(barchaElementlarTengmi);
barchaElementlarTengmi = hammaElementlarTengmi(arr2);
console.log(barchaElementlarTengmi);
*/

// 4-task
// Arrayni  ichida manfiy sonlar nechta ekanligini
// sanab beradigan funksiya yasang.
// Namuna:
// minuses([1,-2,-3,4]) => 2;
// minuses([5,0,2,1]) => 0;
/* const manfiySonlarNechta = (arr) => {
  let manfiySonlarSoni = 0;
  arr.forEach((element) => {
    if (element < 0) {
      manfiySonlarSoni++;
    }
  });
  return manfiySonlarSoni;
};

// Test
let testArr4 = [1, -2, -3, 4, -5, 6];
let manfiySonlarSoni = manfiySonlarNechta(testArr4);
console.log(`Manfiy sonlar ${manfiySonlarSoni} ta`);
*/

// 5-task
// Promptdan gap kiritilsa, har 3ta belgidan keyin
// ! belgisini qo'shing.
// Namuna:
// belgilar("salom dunyo") => "sal!om !dun!yo";
// belgilar("qish fasli kirib keldi.") => "qish! fa!sli! kir!ib !kel!di.!";

/* const undovQoshish = (str) => {
  let belgilar = str.split("");
  let yangiBelgilar = [];
  let j = 0;
  for (let i = 0; i < belgilar.length; i++) {
    j++;
    yangiBelgilar.push(belgilar[i]);
    if (j % 3 === 0) {
      yangiBelgilar.push("!");
    }
  }
  return yangiBelgilar.join("");
};

// Test
let kiritilganMalumot = prompt("Ma'lumot kiriting: ");
let undovQoshilgan = undovQoshish(kiritilganMalumot);
console.log(undovQoshilgan);
*/
