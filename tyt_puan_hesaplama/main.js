//Buradaki sonuçlar gerçek tyt notlarını yansıtmayabilir.

let turkceDogru, turkceYanlis = 0;
let matematikDogru, matematikYanlis = 0;
let sosyalDogru, sosyalYanlis = 0;
let fenDogru, fenYanlis = 0;

let yeniSatir = "\r\n";
let mesaj = "TYT Puan Hesaplama uygulamasına hoşgeldiniz!" + yeniSatir
    + "1-Puan hesapla" + yeniSatir
    + "2-Çıkış yap";

let secim = prompt(mesaj);

switch (secim) {
    case "1":



        okulPuani = Number(prompt("Okul puanınızı giriniz:"));

        turkceDogru = Number(prompt("Türkçe doğru sayınızı giriniz: "));
        turkceYanlis = Number(prompt("Türkçe yanlış sayınızı giriniz:"));

        matematikDogru = Number(prompt("Matematik doğru sayınızı giriniz: "));
        matematikYanlis = Number(prompt("Matematik yanlış sayınızı giriniz:"));

        sosyalDogru = Number(prompt("Sosyal doğru sayınızı giriniz: "));
        sosyalYanlis = Number(prompt("Sosyal yanlış sayınızı giriniz:"));

        fenDogru = Number(prompt("Fen doğru sayınızı giriniz: "));
        fenYanlis = Number(prompt("Fen yanlış sayınızı giriniz:"));


        let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
        let yanlisSayisi = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
        let netSayisi = dogruSayisi - (yanlisSayisi / 4);
        puan = (netSayisi * 4) + 100 + okulPuani;

        alert("TYT Puanınız: " + puan);

        break;

    case "2":
        alert("Uygulamadan çıkış yapıldı...");
        break;

    default:
        alert("Lütfen geçerli aralıkta bir değer girin.");
        break; }