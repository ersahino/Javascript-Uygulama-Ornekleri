
let kilo = Number(prompt("Kilonuzu giriniz."));
let boy = Number(prompt("Boyunuzu metre cinsinden giriniz."));
let sonuc = kilo / (boy ** 2);


if (sonuc < 18.5) 
{ console.log("İdeal kilonuzun altındasınız." + sonuc); }
else if (sonuc >= 18.5 && sonuc <= 24.9) 
{console.log("İdeal kilonuzdasınız." + sonuc);}
else if (sonuc >= 25 && sonuc <= 29.9) 
{ console.log("İdeal kilonuzun üstündesiniz." + sonuc); }
else if (sonuc>=30 && sonuc<=39.9)
{console.log ("İdeal kilonuzun çok üstündesiniz.(Obez)" + sonuc);}
else if (sonuc>=40)
{console.log ("İdeal kilonuzun zararlı derecede üstündesiniz.(Morbid Obez)" + sonuc);}

