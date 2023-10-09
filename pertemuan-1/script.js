function penjumlahan() {
    let inputan1 = prompt("Angka Pertama")
    let inputan2 = prompt("Angka Kedua")
    let hasil = parseInt(inputan1) + parseInt(inputan2)
    alert("Hasilnya adalah " + hasil)
}

function pengurangan() {

}

function perkalian() {

}

function pembagian() {
    
}

const tombol = document.getElementById("jumlah")
tombol.addEventListener("click", penjumlahan)
