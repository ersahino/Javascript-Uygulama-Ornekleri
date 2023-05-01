

let vize1 = Number(prompt("Vize 1 Notunuzu Giriniz:"));
let vize2 = Number(prompt("Vize 2 Notunuzu Giriniz:"));
let final = Number(prompt("Final Notunuzu Giriniz:"));


let ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);


if (ortalama >= 60) {
    alert("Tebrikler, Dersten Geçtiniz. Ortalamanız: " + ortalama);
}

else {
    alert("Maalesef, Dersten Kaldınız. Ortalamanız: " + ortalama);
}