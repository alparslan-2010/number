

let numbers = [11, 8, 43, 27, 3, 36, 14]

//!  1) Dizideki sayıların ortalamasını console'a yazdırınız  ortalama yzdirmaa

var i;
let toplam = 0;

for (i = 0; i < numbers.length; i++) {
    var sayi = numbers[i];
    toplam = toplam + sayi;
}

var ortalama = toplam / numbers.length;

alert("Bu  sayilarin ortalamasi: " + ortalama);

//! 2) Dizideki sayılardan minimum olanı console'a yazdırınız max min  


let min = Math.min(...numbers)
let max = Math.max(...numbers)

console.log(Math.min(11, 8, 43, 27, 3, 36, 14))
console.log(Math.max(11, 8, 43, 27, 3, 36, 14))
console.log( "miin sayi:  "+min)
console.log("max sayi:  "+max)
//console.log(Math.min(numbers));

//!3) Dizideki sayılardan maximum olanı console'a yazdırınız cift sayi tek sayi
//4) Dizideki tek sayıları console'a yazdırınız. siralama

for (i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 != 0) {

        console.log(numbers[i] + "  tek sayi")

    } else {

        console.log(numbers[i] + "  cift sayi")
    }

}


//! 5) Dizideki sayıları küçükten büyüğe doğru sıralayıp console'a yazdırınız.
numbers.sort(function (a, b) { return b - a });
numbers.reverse()
console.log("numara siralamasi: " + numbers);



//! 6) Dizinin sıralandıktan sonra ortasında olan elemanı console'a yazdırınız. ortadaki sayi
let ortaindex = Math.floor(numbers.length / 2)
let orta = numbers[ortaindex]
console.log("ortadaki sayi :  "+orta);