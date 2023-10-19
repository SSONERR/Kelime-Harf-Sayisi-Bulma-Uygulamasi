//Harf Sayısı Bulma Uygulaması
let yeniSatir = "\n"
let kelime = prompt("Harf Sayısı Bulma uygulamasına hoşgeldiniz !" + yeniSatir + "Lütfen metin girin : ")
let harf = prompt("Lütfen bulmak istediğiniz harfi girin : ")
let sayi = 0

bul()

function bul() {
    for (let i = 0; i < kelime.length - 1; i++) {
        if (kelime.charAt(i) == harf) {
            sayi++
        }
    }
    if (0 < sayi) {
        alert(sayi + " adet " + harf + " harfi bulundu !")
    } else {
        alert("Harf bulunamadı")
    }
}
